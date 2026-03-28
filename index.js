import { cards, addCardToArray } from "./cards.js";

const renderFunc = () => {
  const comments = document.querySelector(".comments");
  const btn = document.querySelector(".add-form-button");
  const nameForm = document.querySelector(".add-form-name");
  const textarea = document.querySelector(".add-form-text");

  const getFormattedDate = () => {
    const now = new Date();
    return now.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
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

  comments.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-button")) {
      switchLike(e.target);
    }
  });

  const commentCard = (nameValue, commentValue, likeCounter = 0, isLiked = false) => `
    <li class="comment">
      <div class="comment-header">
        <div>${nameValue}</div>
        <div>${getFormattedDate()}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${commentValue}
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

  cards.forEach((card) => {
    comments.innerHTML += commentCard(
      card.name,
      card.comment,
      card.likes,
      card.isLiked
    );
  })

  const addComment = (name, comment) => {
    const newCard = addCardToArray(name, comment);

    comments.innerHTML += commentCard(
      newCard.name,
      newCard.comment,
      newCard.likes,
      newCard.isLiked
    );
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
