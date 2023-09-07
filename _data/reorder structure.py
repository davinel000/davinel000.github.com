from collections import OrderedDict
from ruamel.yaml import YAML

# Create a new works list with the transformed structure for authors, preserving the order of keys
new_works = []
for work in portfolio_data['works']:
    new_authors = work['authors']  # 'authors' is now a list of dictionaries
    # Use an OrderedDict to preserve the order of keys
    new_work = OrderedDict()
    # Add the title key first
    new_work['title'] = work['title']
    # Then add the other keys in their original order
    for key, value in work.items():
        if key != 'title':
            new_work[key] = value
    # Replace the original authors list with the new one
    new_work['authors'] = new_authors
    new_works.append(new_work)

# Replace the original works list with the new one
portfolio_data['works'] = new_works

# Initialize YAML object with the correct settings
yaml = YAML()
yaml.indent(mapping=2, sequence=4, offset=2)
yaml.preserve_quotes = True

# Save the transformed portfolio data to a new YAML file
with open('portfolio_new_ordered.yml', 'w') as file:
    yaml.dump(portfolio_data, file)
