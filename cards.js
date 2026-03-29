export const cards = [
  {
    name: "Глеб Фокин",
    comment: "Это будет первый комментарий на этой странице",
    likes: 3,
    isLiked: false,
    date: "12.02.22 12:18",
  },
  {
    name: "Варвара Н.",
    comment: "Мне нравится как оформлена эта страница! ❤",
    likes: 75,
    isLiked: true,
  },
];

export const addCardToArray = (name, comment) => {
  const newCard = {
    name,
    comment,
    likes: 0,
    isLiked: false,
    date: "13.02.22 19:22",
  };

  cards.push(newCard);
  return newCard;
};
