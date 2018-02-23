const { Transform } = require ('stream')
const fs = require ('fs')
const byline = require ('byline')

const waterIn = fs.createReadStream('water.txt')
const waterOut = fs.createWriteStream('cleanwater.txt')

const waterCleaner = new Transform({
    transform(chunk, encoding, proceed) {
        const element = chunk.toString()

        if (element === 'H2O')
            this.push(`${element}\n`)

        proceed()
    }
})

const waterInElements = byline.createStream(waterIn)

waterInElements.pipe(waterCleaner).pipe(waterOut)