
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](Installation)
  - [License](License)
  - [Usage](Usage)
  - [Contribution](Contribution)
  - [Questions](Questions)
  ## Installation
  How to install the application: ${data.installation}
  ## Usage 
  ${data.usage}
  ## License
  ${data.license}
  ## Contribution
  ${data.contribution}
  ## Questions 
  For any additional questions, contact ${data.email} or ${data.username} on GitHub.`;
}

module.exports = generateMarkdown;

// REFERRENCES 
// https://youtu.be/cqJQ9wbUQto