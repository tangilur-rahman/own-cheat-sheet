const fs = require('fs');

const path = require('path');

const baseDir = path.join(__dirname, './../../.data/');

// writeFile
const writeFile = (folderName, fileName, contents, callBack) => {
  const content =
    typeof contents === 'object' ? JSON.stringify(contents) : contents;

  fs.writeFile(
    `${baseDir + folderName}/${fileName}.json`,
    content,
    { flag: 'wx' },
    (error) => {
      callBack(error);
    }
  );
};


// readFile
const readFile = (folderName, fileName, callBack) => {
  fs.readFile(
    `${baseDir + folderName}/${fileName}.json`,
    'utf-8',
    (error, data) => {
      callBack(error, data);
    }
  );
};

// updateFile
const updateFile = (folderName, fileName, contents, callBack) => {
  const content =
    typeof contents === 'object' ? JSON.stringify(contents) : contents;

  fs.writeFile(`${baseDir + folderName}/${fileName}.json`, content, (error) => {
    callBack(error);
  });
};

// deleteFile
const deleteFile = (folderName, fileName, callBack) => {
  fs.unlink(`${baseDir + folderName}/${fileName}.json`, (error) => {
    callBack(error);
  });
};

const dataHandler = {
  write: writeFile,
  read: readFile,
  update: updateFile,
  delete: deleteFile
};

module.exports = dataHandler;
