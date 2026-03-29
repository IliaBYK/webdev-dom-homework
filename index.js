import { cards, addCardToArray } from "./cards.js";

const now = new Date();
const renderFunc = () => {
  const comments = document.querySelector(".comments");
  const btn = document.querySelector(".add-form-button");
  const nameForm = document.querySelector(".add-form-name");
  const textarea = document.querySelector(".add-form-text");

  const formatDate = (date = new Date()) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };


  const switchLike = (element) => {
    const likeCounter = element
      .closest(".likes")
      .querySelector(".likes-counter");
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
      `
    }
  };

  comments.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-button")) {
      switchLike(e.target);
      return;
    }

    const cardElement = e.target.closest(".comment");
    if (cardElement) {
      commentClick(cardElement);
    }
  });

  const commentCard = (
    nameValue,
    commentValue,
    likeCounter = 0,
    isLiked = false,
    date
  ) => `
    <li class="comment">
      <div class="comment-header">
        <div class="comment-name">${escapeHtml(nameValue)}</div>
        <div>${date}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${escapeHtml(commentValue)}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${likeCounter}</span>
          <button class="like-button ${isLiked ? "-active-like" : ""}"></button>
        </div>
      </div>
    </li>
  `;

  const addCard = (card) => {
    comments.innerHTML += commentCard(
      card.name,
      card.comment,
      card.likes,
      card.isLiked,
      card.date
    );
  }

  cards.forEach((card) => {
    addCard(card);
  })

  const addComment = (name, comment) => {
    const newCard = addCardToArray(name, comment, formatDate(now));

    addCard(newCard);
  }

  btn.addEventListener("click", () => {
    if (nameForm.value === "") {
      nameForm.style.border = "2px solid red";
      alert("Вы не указали своего имени!");
    } else if (textarea.value === "") {
      nameForm.style.border = "none";
      textarea.style.border = "2px solid red";
      alert("Вы не ввели свой комментарий!");
    } else {
      addComment(nameForm.value, textarea.value);

      nameForm.style.border = "none";
      textarea.style.border = "none";
      nameForm.value = "";
      textarea.value = "";
    }
  });

  console.log("It works!");
};

renderFunc();
