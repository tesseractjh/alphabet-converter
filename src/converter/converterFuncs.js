import { cyrAll, cyrCapital, latAll, latCapital, vowelAll } from './alphabet';

export const before = (arr, letter) => {
  return `${letter}(?=${arr})`;
};

export const after = (arr, letter) => {
  return `(?<=${arr})${letter}`;
};

export const notAfter = (arr, letter) => {
  return `(?<!${arr})${letter}`;
};

export const [ convertText, getText, setText ] = (() => {
  let convertedText = '';
  return [
    (from, to) => {
      convertedText = convertedText.replace(getReg(from), to);
      return convertedText;
    },
    () => convertedText,
    text => convertedText = text
  ];
})();

export const getReg = (exp, global = true) => {
  return new RegExp(exp, global ? 'g' : undefined);
};

export const getVariation = (word, map) => {
  const alter1 = map[word[0]] + word.slice(1);
  const alter2 = [...word].map(letter => map[letter]).join('');
  return [ word, alter1, alter2 ];
};

export const combineExp = (head, tail) => {
  return head + tail.slice(1);
};

export const combineFunc = (head, tail, letter) => {
  const [ exp1, exp2 ] = [ head(letter), tail(letter) ];
  return combineExp(exp1, exp2);
};

export const combineArr = (...args) => {
  const arr = args.reduce((acc, arg) => [ ...acc, ...arg ], []);
  const single = [];
  const double = [];
  arr.forEach(alphabet => {
    if (alphabet.length === 1) {
      single.push(alphabet);
    } else {
      double.push(alphabet);
    }
  });
  return `([${single.join('')}]|${double.join('|')})`;
};

const allArr = combineArr(cyrAll, latAll);

export const anlaut = letter => {
  return `^${letter}|(${notAfter(allArr, letter)})`;
};

export const notAnlaut = letter => {
  return after(allArr, letter);
};

export const notAuslaut = letter => {
  return before(allArr, letter);
};

export const betweenCapital = letter => {
  const capitalArr = combineArr(cyrCapital, latCapital);
  const left = after(capitalArr, letter);
  const right = before(capitalArr, letter);
  return `(${left})|(${right})`;
};

export const afterVowel = letter => {
  const arr = `[${vowelAll.join('')}]`;
  return after(arr, letter);
};