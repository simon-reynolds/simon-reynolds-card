#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

import { readFileSync } from 'fs'
import { join } from 'path'

const filePath = import.meta.url.replace('file:', '').replace('card.js', '')
const output = readFileSync(join(filePath, 'output'), 'utf8')
console.log(output)
