const biggestWord = (str) => {let arr = str.split(" ");let longest = '';for (let i = 0; i < arr.length ; i++){if (longest < arr[i].length) {longest = arr[i].length; word = arr[i];}}return word;}
