import { commentCard } from "./commentCard.js";

export const addCard = (card, container) => {
  container.innerHTML += commentCard(
    card.name,
    card.comment,
    card.likes,
    card.isLiked,
    card.date,
  );
};
