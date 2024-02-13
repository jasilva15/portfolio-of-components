const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const truncateString = (text, number) => {
  let result = '';
  text.length <= number
    ? (result = text)
    : (result = `${text.slice(0, 50)} ...`);

  return result;
};

export { getData, truncateString };
