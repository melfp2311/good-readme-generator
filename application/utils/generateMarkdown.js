function generateMarkdown(data) {
  const profileImg = `https://github.com/${data.username}.png?size=50`;
  return `
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Licence](#license)
* [Tests](#tests)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License 
${data.licence}
## Tests
${data.tests}
## NPM Package
\n[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)
\n![Profile Image](${profileImg})
`;
}

module.exports = generateMarkdown;