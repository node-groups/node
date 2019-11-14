function getUploadFileExt(name) {
  console.log(888)
  console.log(name)
  let ext = name.split('.');
  return ext[ext.length - 1];
}

module.exports = getUploadFileExt;