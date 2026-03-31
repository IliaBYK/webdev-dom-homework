const url = "https://wedev-api.sky.pro/api/v1/gleb-fokin/comments";

const getComments = async () => {
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const postComment = async (body) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//функция для лайка
const delay = (interval = 300) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
};

export { getComments, postComment, delay };
