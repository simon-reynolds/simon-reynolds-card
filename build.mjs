'use strict'

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen'
import { writeFileSync } from 'fs'
import { join } from 'path'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const labels = {
  Name: chalk.white.bold('             '),
  Aka: chalk.white.bold('        AKA:'),
  Work: chalk.white.bold('       Work:'),
  Languages: chalk.white.bold('  Languages:'),
  //Twitter: chalk.white.bold('    Twitter:'),
  Bluesky: chalk.white.bold('    BlueSky:'),
  npm: chalk.white.bold('        npm:'),
  GitHub: chalk.white.bold('     GitHub:'),
  NuGet: chalk.white.bold('      NuGet:'),
  LinkedIn: chalk.white.bold('   LinkedIn:'),
  Web: chalk.white.bold('        Web:'),
  Card: chalk.white.bold('       Card:')
}

// Text + chalk definitions
const data = {
  name: chalk.white('Simon Reynolds'),
  handle: chalk.white('simon-reynolds'),
  work: chalk.white('Senior .NET Developer at TEKenable'),
  languages: chalk.white('C# | F# | SQL | JavaScript | CSS | HTML '),
  //twitter: chalk.gray('https://twitter.com/') + chalk.cyan('ImSimonReynolds'),
  bluesky: chalk.gray('https://bsky.app/profile/') + chalk.blueBright('simonreynolds.ie'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~simon-reynolds'),
  github: chalk.gray('https://github.com/') + chalk.green('simon-reynolds'),
  nuget: chalk.gray('https://www.nuget.org/profiles/') + chalk.magenta('simonreynolds'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('simonreynolds7'),
  web: chalk.gray('https://simonreynolds.ie'),
  npx: chalk.red('npx') + ' ' + chalk.white('simonreynolds')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${labels.Name} ${data.name} / ${data.handle}`
const working = `${labels.Work}  ${data.work}`
const languageing = `${labels.Languages}  ${data.languages}`
//const twittering = `${labels.Twitter}  ${data.twitter}`
const blueskying = `${labels.Bluesky}  ${data.bluesky}`
const npming = `${labels.npm}  ${data.npm}`
const githubing = `${labels.GitHub}  ${data.github}`
const nugeting = `${labels.NuGet}  ${data.nuget}`
const linkedining = `${labels.LinkedIn}  ${data.linkedin}`
const webing = `${labels.Web}  ${data.web}`
const carding = `${labels.Card}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // labels.Work + data.work
               languageing + newline + newline + // labels.OpenSource + data.opensource
               //twittering + newline + // labels.Twitter + data.twitter
               blueskying + newline + // labels.BlueSky + data.bluesky
               npming + newline + // labels.npm + data.npm
               githubing + newline + // labels.GitHub + data.github
               nugeting + newline +
               linkedining + newline + // labels.LinkedIn + data.linkedin
               webing + newline + newline + // labels.Web + data.web
               carding // labels.Card + data.npx

const filePath = import.meta.url.replace('file:', '').replace('build.mjs', '')
writeFileSync(join(filePath, 'bin/output'), chalk.green(boxen(output, options)))
