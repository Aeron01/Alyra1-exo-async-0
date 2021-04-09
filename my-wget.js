const fsPromises = require('fs/promises')
const axios = require('axios')

if (process.argv.length !== 3) {
  console.log('Usage: node my-wget.js url')
  process.exit(1)
}

const main = async () => {
  try {
    const tmpHtml = await axios.get(process.argv[2])
    await fsPromises.writeFile('index.html', tmpHtml.data)
  } catch (e) {
    console.log(e.code)
  }
}

main()