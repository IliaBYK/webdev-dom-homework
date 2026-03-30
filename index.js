import { cards, addCardToArray } from "./modules/cards.js";
import { textarea } from "./modules/functions.js";
import { formatDate } from "./modules/date.js";
import { addCard } from "./modules/addCard.js";
import { listeners } from "./modules/listeners.js";
import { addComment as newComment } from "./modules/listeners.js";

const now = new Date();
const renderFunc = () => {
  const comments = document.querySelector(".comments");
  const btn = document.querySelector(".add-form-button");
  const nameForm = document.querySelector(".add-form-name");
  const addComment = (name, comment) => {
    const newCard = addCardToArray(name, comment, formatDate(now));

    addCard(newCard, comments);
  };

  listeners(comments);

  cards.forEach((card) => {
    addCard(card, comments);
  });

  newComment(btn, nameForm, textarea, addComment);

  console.log("It works!");
};

renderFunc();
