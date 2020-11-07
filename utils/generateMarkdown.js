// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents

  -[Description](#desciption)
  -[Installation](#installation)
  -[Usage](#Usage)
  -[Contribution](#Contribution)
  -[Test](#test)
  -[License](#license)
  

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  ${data.license}


`;
}

module.exports = generateMarkdown;
