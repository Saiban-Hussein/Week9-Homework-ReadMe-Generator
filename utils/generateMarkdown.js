function generateMarkdown(data) {
  switch (data.licence) {
    case 'Apache 2.0':
      data.licence = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 2-Clause':
      data.licence = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause':
      data.licence = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'GNU AGPLv3.0':
      data.licence = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU GPLv2.0':
      data.licence = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'GNU GPLv3.0':
      data.licence = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      data.licence = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public 2.0':
      data.licence = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    default:
      break;
  }
  return`
# **${data.title}**
[Git](gif.gif)   
[Video Link](https://drive.google.com/file/d/1gdt8x8jV6Z0x1Na1xCLwMAsreUtC6DxF/view?usp=sharing)
### README example
### Description 
${data.description}
## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#licence)
- [Contributors](#contributors)
- [Test](#test)
- [GitHub Link](#github)

## Installation

${data.installation}

## Usage

${data.usage}

## Licence

${data.licence}

## Contributors

${data.contributing}

## Test

${data.test}


## GitHub Link

[GitHub Profile](https://github.com/${data.username})
`;}
module.exports = generateMarkdown;
