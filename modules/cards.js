import { postComment } from "../API/api.js";

export const addCardToArray = async (name, comment, date) => {
  const newCard = {
    name,
    comment,
    likes: 0,
    isLiked: false,
    date,
  };

  await postComment({ text: comment, name: name });
  return newCard;
};
