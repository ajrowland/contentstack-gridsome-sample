const fs = require("fs")
const { exec } = require("child_process")

const datafile = `../../contentstack/datasync-boilerplate/_development_contents/en-gb/data/pressRelease.json`

console.log(`Watching ${datafile}`)

fs.watchFile(datafile, (curr, prev) => {
  console.log(`Previous build at ${prev.mtime}`)
  console.log(`Building site at ${curr.mtime}`)

  exec("npm run build", (err) => {
    if (err) {
      //some err occurred
      console.error(err)
    }
  })
})
