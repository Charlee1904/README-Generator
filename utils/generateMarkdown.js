function generateMarkdown(data) {
  return `
 #${data.title}
  https://github.com/${data.gitHubURL}${data.title}
  
##Description
  ${data.description}

  ##Table of Contents
  *[Installation](##Installation)
  *[Usage](##Usage)
  *[License](##License)
  *[Contribution](##Contribution)
  *[Tests](##Tests)
  *[Questions](##Questions)

  ##Installation
  In order to install you must: ${data.installation}

  ##Usage 
  To use this app: ${data.usage}

  ##License
  This app has the following license: ${data.license}

  ##Contribution 
  Following Contributers: ${data.contribution}

  ##Tests
  In order to test you must: ${data.test}

  ##Questions
  Please contact ${data.email} or head to ${data.gitHubURL}
`
;
}

module.exports = generateMarkdown;
