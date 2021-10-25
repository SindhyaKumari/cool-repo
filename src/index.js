// const prompt = require("prompt-sync")({ sigint: true });

// const integersString = prompt("Input any number of integers separated space: ");

// const validateInput = strVal => /^(?=.*\d)[\d ]+$/.test(strVal);

const bisetRightsortedIndex = (arr, value) => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (value < arr[mid]) high = mid;
    else low = mid + 1;
  }
  return low;
};

export default function(str) {
  const arr = str.split(" ").map(i => +i);
  if (!arr.length) {
    return 0;
  }
  const [a, ...rest] = arr;
  const l = [[a]];
  rest.forEach(element => {
    const last = l[l.length - 1];
    const pos = bisetRightsortedIndex(last, element);

    if (pos === l.length && element > l[pos - 1][pos - 1]) {
      l.push([...l[pos - 1], element]);
    }
    if (pos === 0 || element !== l[pos - 1][pos - 1]) {
      l[pos][pos] = element;
    }
  });
  return l.pop();
}

// console.log(lis(integersString));
