import { latConsonant, latMatch, latDigraphMatch, cyrUpperLowerMap, latUpperLowerMap } from './alphabet';
import {
  convertText, getText, setText,
  getVariation, combineExp,
  anlaut, notAuslaut, betweenCapital, notAnlaut,
  after, before, combineFunc, combineArr
} from './converterFuncs';
import { yaMatch } from './cyrUzToLat';

const sMatch = [
  ['цирк', 'sirk'], ['цех', 'sex'],
  ['цемент', 'sement'], ['цензура', 'senzura'],
  ['пицца', 'pitssa'],
];

const siyaMatch = [
  ['ция', 'siya'],
  ['ЦИЯ', 'SIYA']
];

const shMatch = [
  ['нусҳа', 'nusha']
];

const oMatch = [
  ['Oʻ', 'Ў'], ['O‘', 'Ў'], ['O\'', 'Ў'],
  ['oʻ', 'ў'], ['o‘', 'ў'], ['o\'', 'ў']
];

const eMatch = [
  ['Э', 'E'],
  ['э', 'e']
];

const apostropheMatch = [
  'ʼ', '\''
];

const yaException = () => {
  yaMatch.forEach(([ cyr, lat ]) => {
    const cyrVariation = getVariation(cyr, cyrUpperLowerMap);
    const latVariation = getVariation(lat, latUpperLowerMap);
    latVariation.forEach((word, idx) => {
      convertText(word, cyrVariation[idx]);
    });
  });
};

const sException = () => {
  sMatch.forEach(([ cyr, lat ]) => {
    const cyrVariation = getVariation(cyr, cyrUpperLowerMap);
    const latVariation = getVariation(lat, latUpperLowerMap);
    latVariation.forEach((word, idx) => {
      convertText(word, cyrVariation[idx]);
    });
  });
  siyaMatch.forEach(([ cyr, lat ]) => {
    const left = after(combineArr(latConsonant), lat[0]);
    const right = before(lat.slice(1), lat[0]);
    const regex = combineExp(left, right);
    convertText(regex, cyr[0]);
  });
};

const shException = () => {
  shMatch.forEach(([ cyr, lat ]) => {
    const cyrVariation = getVariation(cyr, cyrUpperLowerMap);
    const latVariation = getVariation(lat, latUpperLowerMap);
    latVariation.forEach((word, idx) => {
      convertText(word, cyrVariation[idx]);
    });
  });
};

const oPrecedence = () => {
  oMatch.forEach(([ lat, cyr ]) => {
    convertText(lat, cyr);
  });
};

const digraphException = () => {
  latDigraphMatch.forEach(([ lat, cyr ]) => {
    convertText(lat, cyr);
  });
};

const eException = () => {
  eMatch.forEach(([ cyr, lat ]) => {
    convertText(anlaut(lat), cyr);
  });
};

const singleMatch = () => {
  latMatch.forEach(([ lat, cyr ]) => {
    convertText(lat, cyr);
  });
};

const apostropheException = () => {
  apostropheMatch.forEach(lat => {
    convertText(combineFunc(notAnlaut, notAuslaut, lat), 'ъ');
  });
  convertText(betweenCapital('ъ'), 'Ъ');
};

const toCyrillic = text => {
  setText(text);
  [
    yaException, sException, shException, oPrecedence,
    digraphException, eException, singleMatch,
    apostropheException
  ]
  .forEach(convert => convert());
  return getText();
};

export default toCyrillic;