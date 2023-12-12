# Polish prince email generator

Your task this time will be generating email bodies based on template and recipients list provided.
Both recipients.json and template.txt are placed in the /input folder.

Save generated email bodies to /output folder.

Acceptance criteria.
1. Email should be generated based on template.txt file
2. `<NAME>` from template.txt should be replaced with `name` of recipient from recipients.json
3. Email body should be saved to /output directory with following format recipient.name.txt
4. Bodies are generated for each recipient in the recipients array