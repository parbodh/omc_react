const handleChange = () => {
  const fileUploader = document.querySelector('#input-file');
  const getFile = fileUploader.files;
  if (getFile.length !== 0) {
    const uploadedFile = getFile[0];
    readFile(uploadedFile);
  }
};

const readFile = (uploadedFile) => {
  if (uploadedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      const parent = document.querySelector('.profile_picture');
      parent.innerHTML = `<img class="lazyload d-block img-fluid" src=${reader.result} />`;
    };
    reader.readAsDataURL(uploadedFile);
  }
};