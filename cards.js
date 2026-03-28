export const cards = [
  {
    name: "Глеб Фокин",
    comment: "Это будет первый комментарий на этой странице",
    likes: 3,
    isLiked: false,
    date: 0
  },
  {
    name: "Варвара Н.",
    comment: "Мне нравится как оформлена эта страница! ❤",
    likes: 75,
    isLiked: true,
  },
];

export const addCardToArray = (name, comment, date) => {
  const newCard = {
    name,
    comment,
    likes: 0,
    isLiked: false,
    date
  };

  cards.push(newCard);
  return newCard;
};
