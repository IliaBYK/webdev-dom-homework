const textarea = document.querySelector(".add-form-text");

const switchLike = (element) => {
  const likeCounter = element.closest(".likes").querySelector(".likes-counter");
  let currentCount = parseInt(likeCounter.textContent) || 0;

  element.classList.toggle("-active-like");

  if (element.classList.contains("-active-like")) {
    currentCount++;
  } else {
    currentCount--;
  }

  likeCounter.textContent = currentCount;
};

const commentClick = (cardElement) => {
  const nameElement = cardElement.querySelector(".comment-name");
  const textElement = cardElement.querySelector(".comment-text");

  if (nameElement && textElement) {
    textarea.value = `
        ${nameElement.textContent.trim()} >
        ${textElement.textContent.trim()}
      `;
  }
};

export { switchLike, commentClick, textarea };
