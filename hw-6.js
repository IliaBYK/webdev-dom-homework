const comments = document.querySelector(".comments");
const btn = document.querySelector(".add-form-button");
const nameForm = document.querySelector(".add-form-name");
const textarea = document.querySelector(".add-form-text");
const likeCount = 0;

const formatDate = (date = new Date()) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

const now = new Date();

const comment = (nameValue, commentValue) => `
      <li class="comment">
        <div class="comment-header">
          <div>${nameValue}</div>
          <div>${formatDate(now)}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${commentValue}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${likeCount}</span>
            <button class="like-button"></button>
          </div>
        </div>
      </li>
    `;

const func = (nameValue, commentValue) => {
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
    func(nameForm.value, textarea.value);

    nameForm.style.border = "none";
    textarea.style.border = "none";

    nameForm.value = "";
    textarea.value = "";
  }
});

console.log("It works!");
