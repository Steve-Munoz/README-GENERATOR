function generateMarkdown(data) {
  return `
  
${data.badges}
# ${data.title}
## Table of Contents
- ${data.title}
- Description
- Installation
- Usage
- License
- Contributing
- Tests
- Questions
  - ${data.gh_email}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
### User GitHub profile picture
- ${data.profile_picture}
### User GitHub email
- ${data.gh_email}
`;
}

module.exports = generateMarkdown;
