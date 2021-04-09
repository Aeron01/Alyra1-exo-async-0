const fsPromises = require('fs/promises')
const axios = require('axios')

if (process.argv.length !== 3) {
  console.log('Usage: node my-wget.js url')
  process.exit(1)
}

const main = async () => {
  try {
    const tmpHtml = await axios.get(process.argv[2])
    const reponse = await tmpHtml
    await fsPromises.writeFile('index.html', tmpHtml.data)
    const stats = await fsPromises.stat('index.html')
    await stats
    console.log(`Download file completed.\n file size {stats.size} bytes`)
    console.log(reponse.headers)
  } catch (e) {
    console.log(e)
  }
}

main()