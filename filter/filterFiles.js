const fs = require('fs')
const path = require('path')

console.log(path);

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

const filterFiles = (folderName, exten, cb) => {

  fs.readdir(folderName, (err, files) => {

    let arr = folderName.filter((file) => {
      (path.extname(file) === exten);
    }

    if (err) {
      console.error(err);
      return cb(err);
    } else {
      cb(null,arr)
    }

  })

})
}
