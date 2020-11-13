// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  - [Description](#desciption)
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Test](#test)
  - [License](#license)
  

  ## Description
  ${data.description}
  ## License
  ![badge](https://img.shields.io/badge/license=${data.license}-green)
  <br />
  ${data.license}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}

  ## For any additional questions please contact me at:
  Email: ${data.email}
  GitHub: [${data.username}](https://github.com/${data.username})



`;
}

module.exports = generateMarkdown;
