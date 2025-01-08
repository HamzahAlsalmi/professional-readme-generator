// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""; // Return empty string if no license is provided
  }

  // License badges for popular licenses
  const licenseBadges = {
    MIT: "https://img.shields.io/badge/license-MIT-brightgreen",
    "Apache 2.0": "https://img.shields.io/badge/license-Apache%202.0-blue",
    "GPL 3.0": "https://img.shields.io/badge/license-GPL%203.0-blue",
    None: "", // If no license is selected, no badge is shown
  };

  return `![License Badge](${licenseBadges[license]})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ""; // Return empty string if no license is provided
  }

  // License links for popular licenses
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
    None: "", // No link if no license
  };

  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ""; // Return empty string if no license is provided
  }

  return `
## License
This project is licensed under the [${license}](${renderLicenseLink(
    license
  )}) license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}  <!-- Add the license section -->

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions, contact me at [${data.email}](mailto:${data.email}).

GitHub Profile: [${data.github}](https://github.com/${data.github})

${renderLicenseBadge(data.license)}  <!-- Add the license badge -->
  `;
}

export default generateMarkdown;
