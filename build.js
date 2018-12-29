'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Simon Taite'),
  handle: chalk.white('simontaite'),
  work: chalk.white('Software Engineer at Research and Markets'),
  languages: chalk.white('C# | F# | SQL | JavaScript | CSS | HTML '),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('ImSimonTaite'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~simontaite'),
  github: chalk.gray('https://github.com/') + chalk.green('simontaite'),
  bitbucket: chalk.gray('https://bitbucket.org/') + chalk.yellow('simontaite'),
  nuget: chalk.gray('https://www.nuget.org/profiles/') + chalk.magenta('simontaite'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('simonreynolds7'),
  web: chalk.cyan('https://simontaite.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('simontaite'),
  labelWork: chalk.white.bold('       Work:'),
  labelLanguages: chalk.white.bold('  Languages:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelBitBucket: chalk.white.bold('  BitBucket:'),
  labelNuGet: chalk.white.bold('      NuGet:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const languageing = `${data.labelLanguages}  ${data.languages}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const bitbucketing = `${data.labelBitBucket}  ${data.bitbucket}`
const nugeting = `${data.labelNuGet}  ${data.nuget}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               languageing + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               bitbucketing + newline +
               nugeting + newline +
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
