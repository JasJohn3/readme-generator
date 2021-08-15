const generateREADME = data => {
  let licenseLink = '';
  let npmInstall = '`npm i`';
  switch (data.license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'BSD-2-Clause':
      licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'BSD-3-Clause':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'Apache-2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL-2.0':
      licenseLink = 'https://opensource.org/licenses/GPL-2.0';
      break;
    case 'GPL-3.0':
      licenseLink = 'https://opensource.org/licenses/GPL-3.0';
      break;
    case 'LGPL-2.1':
      licenseLink = 'https://opensource.org/licenses/LGPL-2.1';
      break;
    case 'LGPL-3.0':
      licenseLink = 'https://opensource.org/licenses/LGPL-3.0';
      break;
    case 'AGPL-3.0':
      licenseLink = 'https://opensource.org/licenses/AGPL-3.0';
      break;
    case 'ISC':
      licenseLink = 'https://opensource.org/licenses/ISC';
      break;
    case 'MPL-2.0':
      licenseLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Unlicense':
      licenseLink = 'https://unlicense.org';
      break;
    default:
      licenseLink = 'https://opensource.org/licenses/MIT';
    }
    let template =
  `
  [![Generic badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  clone the repo:
  1. clone the repo:${data.installation}
  2. install dependencies : ${npmInstall}

  ## Usage
  ${data.usage}
  ## Tests
  ${data.tests}
  ## Contributing
  ${data.contributing}
  # Contributor Covenant Code of Conduct

  ## Our Pledge

  In the interest of fostering an open and welcoming environment, we as
  contributors and maintainers pledge to make participation in our project and
  our community a harassment-free experience for everyone, regardless of age, body
  size, disability, ethnicity, sex characteristics, gender identity and expression,
  level of experience, education, socio-economic status, nationality, personal
  appearance, race, religion, or sexual identity and orientation.

  ## Our Standards

  Examples of behavior that contributes to creating a positive environment
  include:

  * Using welcoming and inclusive language
  * Being respectful of differing viewpoints and experiences
  * Gracefully accepting constructive criticism
  * Focusing on what is best for the community
  * Showing empathy towards other community members

  Examples of unacceptable behavior by participants include:

  * The use of sexualized language or imagery and unwelcome sexual attention or
    advances
  * Trolling, insulting/derogatory comments, and personal or political attacks
  * Public or private harassment
  * Publishing others' private information, such as a physical or electronic
    address, without explicit permission
  * Other conduct which could reasonably be considered inappropriate in a
    professional setting

  ## Our Responsibilities

  Project maintainers are responsible for clarifying the standards of acceptable
  behavior and are expected to take appropriate and fair corrective action in
  response to any instances of unacceptable behavior.

  Project maintainers have the right and responsibility to remove, edit, or
  reject comments, commits, code, wiki edits, issues, and other contributions
  that are not aligned to this Code of Conduct, or to ban temporarily or
  permanently any contributor for other behaviors that they deem inappropriate,
  threatening, offensive, or harmful.

  ## Scope

  This Code of Conduct applies within all project spaces, and it also applies when
  an individual is representing the project or its community in public spaces.
  Examples of representing a project or community include using an official
  project e-mail address, posting via an official social media account, or acting
  as an appointed representative at an online or offline event. Representation of
  a project may be further defined and clarified by project maintainers.

  ## Enforcement

  Instances of abusive, harassing, or otherwise unacceptable behavior may be
  reported by contacting the project team at [INSERT EMAIL ADDRESS]. All
  complaints will be reviewed and investigated and will result in a response that
  is deemed necessary and appropriate to the circumstances. The project team is
  obligated to maintain confidentiality with regard to the reporter of an incident.
  Further details of specific enforcement policies may be posted separately.

  Project maintainers who do not follow or enforce the Code of Conduct in good
  faith may face temporary or permanent repercussions as determined by other
  members of the project's leadership.

  ## Attribution

  This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
  available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

  [homepage]: https://www.contributor-covenant.org

  For answers to common questions about this code of conduct, see
  https://www.contributor-covenant.org/faq
  ## License
  ${data.license}
  ## Questions
  * GitHub: [${data.github}](https://github.com/${data.github})
  * Email: 
  [${data.email}](mailto:${data.email})
  `;
    return template;
}
module.exports = generateREADME;