// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![license badge](https://img.shields.io/badge/license-${data.license}-brightgreen)


## Description
  ${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
In order to install this application, you will ${data.installation}

## Usage
${data.usage}

## Credits
Repo owner: 
${data.username}
GitHub name: 
${data.githubinfo}
Email address: 
${data.email}
Additional contributors are: 
${data.contributing}

## Tests
Instructions to run tests are below.
${data.tests}

## Questions
If you have additional questions, I can be reached at the following email address:
${data.email}

##License
This repo is licensed under ${data.license}

`;
}

module.exports = generateMarkdown;
