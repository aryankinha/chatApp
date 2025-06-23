let data = [];

export const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const result = await response.json();
  data = result.users.map((ele) => {
    return {
      name: ele.firstName,
      imgL: ele.image,
      text: ele.eyeColor,
    };
  });
};

export const getData = () => data;
