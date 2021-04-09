const fsPromises = require('fs/promises')
const axios = require('axios')

if (process.argv.length !== 4) {
  console.log('Usage: node my-wget.js url dst.html')
  process.exit(1)
}

const main = async () => {
  try {
    const tmpHtml = await axios.get(process.argv[2])
    await fsPromises.writeFile(process.argv[3], tmpHtml.data)
  } catch (e) {
    console.log(e.code)
  }
}

main()