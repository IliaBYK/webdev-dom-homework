const comments = document.querySelector(".comments");

const createLoader = () => {
  const template = document.getElementById("loader-template");
  const loader = document.importNode(template.content, true).firstElementChild;
  comments.appendChild(loader);
  return loader;
};

const showLoaderWithText = (text) => {
  const loader = createLoader();
  loader.querySelector(".loader__text").textContent = text;
  loader.style.display = "block";
  return loader;
};

const hideLoader = (loader) => {
  if (loader && loader.parentNode) {
    loader.parentNode.removeChild(loader);
  }
};

export { showLoaderWithText, hideLoader };
