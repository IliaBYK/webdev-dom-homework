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

  const comment = (nameValue, commentValue) => `
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
          <span class="likes-counter">0</span>
          <button class="like-button"></button>
        </div>
      </div>
    </li>
  `;

  const addComment = (nameValue, commentValue) => {
    comments.innerHTML += comment(nameValue, commentValue);
  };

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
