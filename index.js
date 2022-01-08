const fs = require('fs').promises

const loadNames = async () => {
  const data = await fs.readFile('usernames.txt', 'utf-8')
  return data.toString().split('\n')
}

const main = async () => {
  const data = await loadNames()
  const usernames = data.filter(x => x != '')
  console.log(usernames)
}

main()
