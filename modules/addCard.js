import { commentCard } from "./commentCard.js";

export const addCard = async (card, container) => {
  container.innerHTML += commentCard(
    card.author.name,
    card.text,
    card.likes,
    card.isLiked,
    card.date,
  );
};
