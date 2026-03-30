import { commentCard } from "./commentCard.js";
import { formatDate } from "./date.js";

export const addCard = async (card, container) => {
  container.innerHTML += commentCard(
    card.author.name,
    card.text,
    card.likes,
    card.isLiked,
    formatDate(card.date),
  );
};
