import { hideLoader, showLoaderWithText } from "./modules/loader.js";
import { textarea } from "./modules/functions.js";
import { addCard } from "./modules/addCard.js";
import { listeners } from "./modules/listeners.js";
import { addComment as newComment } from "./modules/listeners.js";
import { getComments, postComment } from "./API/api.js";

const renderFunc = async () => {
  const comments = document.querySelector(".comments");
  const btn = document.querySelector(".add-form-button");
  const nameForm = document.querySelector(".add-form-name");
  const loaderGetComments = showLoaderWithText("Коментарии загружаются...");

  try {
    const cards = await getComments();
    const comms = cards.comments;

    listeners(comments);

    comments.innerHTML = "";

    comms.forEach((card) => {
      addCard(card, comments);
    });

    hideLoader(loaderGetComments);

    const addComment = async (name, comment) => {
      try {
        const loaderPostComment = showLoaderWithText(
          "Коментарий загружается...",
        );
        await postComment({ text: comment, name: name });

        const updatedCards = await getComments();
        const updatedComments = updatedCards.comments;

        comments.innerHTML = "";

        updatedComments.forEach((card) => {
          addCard(card, comments);
        });

        hideLoader(loaderPostComment);

        nameForm.value = "";
        textarea.value = "";
      } catch (error) {
        console.error("Ошибка при добавлении комментария:", error);
      }
    };

    newComment(btn, nameForm, textarea, addComment);
    console.log("It works!");
  } catch (error) {
    console.error("Ошибка загрузки комментариев:", error);
  }
};

renderFunc();
