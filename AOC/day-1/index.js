
// Steps to get the Results
/**
 * > Setp 1:  Get the Data from the AOC
 * > Step 2: Parse that data into an array
 * > Step 3: extract numbers from each elements from the array
 * > Step4: joining only first and last element of the array
 * > Step:5 reducing the 2d array and getting the sum
*/

const fs = require('fs')
const path = require('path')
const { exit } = require('process')

// Step 1

let response
const file_name = 'data'
const file_path = path.join(__dirname, file_name)
const fetch_data = async () => {
    try {
        const file = fs.readFileSync(file_path, 'utf-8')
        response = file
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error('You Marfackr! Add the Data in current dir following by ' + file_path)
            exit()
        } else {
            exit()
        }

    }
}
fetch_data()

// Step 2
const data = response ? response.split('\n') : exit()

// Step 3
const EXTRACTED_DATA = data.map(e => {
    return e.split('').join(' ').match(/\d+(\.\d+)?/g)
})

// Step 4

const NUMBERS = EXTRACTED_DATA.map(e => {
    return e.length > 0 ? Number(`${e[0]}${e.at(e.length - 1)}`) : Number(`${e[0]}${e[0]}`)
})

// console.log(NUMBERS)
// Step 5

const SUM = NUMBERS.flat(Infinity).reduce((e, a) => {
    return e + a
}, 0)

console.log(SUM)