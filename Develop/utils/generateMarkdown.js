// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT": {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    case "APACHE2.0": {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    case "GPL3.0": {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    case "BSD3": {
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    case "ISC": {
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }
  }
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description ${renderLicenseLink(data.license)}  
  ${data.description}

  ## Table of contents

  *[installation](#installation)  
  *[usage](#usage)  
  *[Credits](#credits)  
  *[license](#license)  
  *[questions](#How to contribute)
  
  ## Installation
  ${data.installation}

  ## Usage  
  ${data.usage}  
    
  ![alt text](assets/images/screenshot.png)
  
  ## Credit
  ${data.contributors}
  
  ## Features
  ${data.features}
  
  ## Questions  
  Reach me here:    
  ${data.name}  
  Email: ${data.email}   
  GitHub: ${data.github}  
  LinkedIn: ${data.linkedin}  

  
  ## Tests
  
  ## License
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
