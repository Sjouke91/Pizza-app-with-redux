const array = [1, 2, 3, 4, 5];
const id = 6;

const newArray = array.filter((index) => {
  return index !== id;
});

console.log(newArray);
