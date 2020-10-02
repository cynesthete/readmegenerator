// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![license badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  ${data.description}
`;
}

module.exports = generateMarkdown;
