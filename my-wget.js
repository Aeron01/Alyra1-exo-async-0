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
    console.log(tmpHtml.headers)
    const stats = await fsPromises.stat('index.html')
    console.log(`Download file completed.\n file size ${stats.size} bytes`)
  } catch (e) {
    console.log(e.message)
  }
}

main()