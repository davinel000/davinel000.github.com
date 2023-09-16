import re
import os
import yaml
import markdown
from fpdf import FPDF
from html import unescape
from bs4 import BeautifulSoup


def extract_content_from_md(file_path, headers_to_include):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Manually find the index of the second '---' and slice the string to get yaml_content and md_content
    second_dash_index = content.find('---', 4)  # Start searching from index 4 to skip the first '---'
    yaml_content = content[4:second_dash_index].strip()  # Extract YAML content by slicing
    md_content = content[second_dash_index+4:].strip()  # Extract Markdown content by slicing

    print("Extracted yaml_content:", yaml_content)

    yaml_data = None
    try:
        yaml_data = yaml.safe_load(yaml_content)
    except Exception as e:
        print(f"Error while loading YAML: {e}")

    print("Parsed YAML data:", yaml_data)

    md_to_html = markdown.markdown(md_content)
    soup = BeautifulSoup(md_to_html, 'html.parser')
    plain_text = unescape(soup.get_text())
    html_lines = md_to_html.split('\n')
    filtered_lines = []

    for header in headers_to_include:
        header_html = f"<h2>{header}</h2>"
        if header_html in html_lines:
            index = html_lines.index(header_html)
            filtered_lines.append(html_lines[index])
            filtered_lines.append(html_lines[index + 1])

    filtered_html = '\n'.join(filtered_lines)
    return yaml_data, filtered_html

def generate_pdf(md_files, pdf_path):
    pdf = FPDF()
    pdf.set_auto_page_break(auto=1, margin=15)
    pdf.add_page()
    pdf.set_font("Helvetica", size=12)

    for md_file in md_files:
        print(f"Processing {md_file}")
        yaml_data, filtered_html = extract_content_from_md(md_file, ["Idea", "Background", "Illustrations"])

        if yaml_data is not None:
            pdf.set_font("Helvetica", style='B', size=16)
            pdf.cell(200, 10, yaml_data.get("title", "Unknown Title"), ln=1, align='C')

            pdf.set_font("Helvetica", size=12)
            pdf.multi_cell(0, 10, filtered_html)
        else:
            print(f"Warning: Could not load YAML data from {md_file}")

    pdf.output(pdf_path)

def load_project_list(yaml_file):
    with open(yaml_file, 'r') as f:
        data = yaml.safe_load(f)
    return data

if __name__ == "__main__":
    yaml_file = "project_list.yaml"  # YAML file listing the Markdown files
    pdf_path = "portfolio.pdf"  # Output PDF file path

    project_data = load_project_list(yaml_file)
    default_folder = os.path.normpath(project_data.get("default_folder", "./"))
    md_files = [os.path.normpath(os.path.join(default_folder, file)) for file in project_data["files"]]

    generate_pdf(md_files, pdf_path)