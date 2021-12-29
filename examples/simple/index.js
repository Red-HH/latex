const { createReadStream, createWriteStream } = require('fs')
const { join } = require('path')
const latex = require('../..')

const input = createReadStream(join(__dirname, 'main.tex'))
const output = createWriteStream(join(__dirname, 'output.pdf'))

latex(input).pipe(output)
