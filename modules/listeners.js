import { switchLike, commentClick } from "./functions.js";

export const listeners = (constainer) => {
  constainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-button")) {
      switchLike(e.target);
      return;
    }

    const cardElement = e.target.closest(".comment");
    if (cardElement) {
      commentClick(cardElement);
    }
  });
};

export const addComment = (btn, name, text, func) => {
  btn.addEventListener("click", () => {
    if (name.value === "") {
      name.style.border = "2px solid red";
      alert("Вы не указали своего имени!");
    } else if (text.value === "") {
      name.style.border = "none";
      text.style.border = "2px solid red";
      alert("Вы не ввели свой комментарий!");
    } else {
      func(name.value, text.value);

      name.style.border = "none";
      text.style.border = "none";
      name.value = "";
      text.value = "";
    }
  });
};
