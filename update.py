# Author: Pierre CAU
# Date: 2024-10-21

import subprocess
from datetime import datetime
from jinja2 import Environment, FileSystemLoader


TEMPLATE_FILE = 'template.j2'
OUTPUT_FILE = 'index.html'

def get_last_commit_date():
    # Get the last commit date using git command
    result = subprocess.run(['git', 'log', '-1', '--format=%cd', '--date=short'], stdout=subprocess.PIPE)
    last_commit_date = result.stdout.decode('utf-8').strip()
    return last_commit_date

def get_context():
    # Get the current date
    now = datetime.now()
    return {
        'last_commit_date': get_last_commit_date(),
        'current_date': now.strftime('%Y-%m-%d')
    }


def update_html_file(date):

    # we get the context 
    context = get_context()
    print(context)

    # Set up Jinja2 environment
    env = Environment(loader=FileSystemLoader('.'))
    template = env.get_template(TEMPLATE_FILE)

    # Render the template with the context
    updated_content = template.render(context)

    # Write the updated content back to the HTML file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as file:
        file.write(updated_content)

if __name__ == "__main__":
    last_commit_date = get_last_commit_date()
    update_html_file(last_commit_date)