import os
import re
import yaml
from collections import OrderedDict

# Load the content of the YAML file
with open('e:/PROJECTS/Portfolio/davinel000.github.com/_data/portfolio_new.yml', 'r') as file:  # replace with your file path
    content = file.read()

# Find all the people and their aliases
people = re.findall(r'\&(\w+)\n\s+name: ([\w\s]+)\n\s+url: (\S+)', content)

# Replace aliases in the authors field with the actual names
people_dict = dict((alias, {'name': name, 'url': url}) for alias, name, url in people)
content = re.sub(r'\*(\w+):', lambda match: f'"{people_dict.get(match.group(1), {"name": "*"+match.group(1)})["name"]}":', content)

# Load the modified content into Python
portfolio_data = yaml.safe_load(content)

# Directory to store the markdown files
output_dir = 'markdown_files'  # replace with your directory path

# Create the directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Iterate over the works and create a markdown file for each
for work in portfolio_data['works']:
    # Create the YAML front matter
    front_matter = {
        'title': work['title'],
        'year': work['year'],
        'description': work['description'],  # This will be the short description
        'category': work['category'],  # Change this to 'tags' if you prefer
        'id': work['id']
    }
    # Format the front matter as YAML
    front_matter_yaml = yaml.dump(front_matter, sort_keys=False)
    
    # Create the markdown body
    body_parts = [
        f"## Idea\n\n{work['idea']}\n",
        f"## Long Description\n\n{work['long']}\n",
        f"## Presentation\n\n{work['presentation']}\n",
        f"## Links\n\n" + '\n'.join(f"- [{link['text']}]({link['url']})" for link in work['links']) + "\n",
        f"## Illustrations\n\n" + '\n'.join(f"- ![Image]('url') {img['text']}" for img in work['illustrations']) + "\n",
        f"## Format\n\n{work['format']}\n",
        f"## Instruments\n\n{work['instruments']}\n",
        f"## Authors\n\n" + '\n'.join(f"- {author['name']}: {author['contribution']}" for author in work['authors']) + "\n"
    ]
    body = '\n'.join(body_parts)
    
    # Combine the front matter and body into a single string
    content = f"---\n{front_matter_yaml}---\n{body}"
    
    # Save the content to a markdown file
    # We use the work's id as the file name to ensure it's unique
    with open(f"{output_dir}/{work['id']}.md", 'w') as file:
        file.write(content)
