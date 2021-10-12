import { cyrMatch, cyrUpperLowerMap, latUpperLowerMap } from './alphabet';
import {
  convertText, getText, setText,
  getVariation, combineFunc,
  anlaut, notAuslaut, betweenCapital, afterVowel
} from './converterFuncs';

export const yaMatch = [
  ['сентябрь', 'sentabr'],
  ['октябрь', 'oktabr']
];

const yeMatch = [
  ['Е', 'Ye'],
  ['е', 'ye']
];

const tseMatch = [
  ['Ц', 'Ts'],
  ['ц', 'ts']
];

const digraphMatch = [
  ['Ya', 'YA'], ['Ye', 'YE'],
  ['Yo', 'YO'], ['Yu', 'YU'],
  ['Ts', 'TS'], ['Ch', 'CH'], ['Sh', 'SH']
];

const yaException = () => {
  yaMatch.forEach(([ cyr, lat ]) => {
    const cyrVariation = getVariation(cyr, cyrUpperLowerMap);
    const latVariation = getVariation(lat, latUpperLowerMap);
    cyrVariation.forEach((word, idx) => {
      convertText(word, latVariation[idx]);
    });
  });
};

const yeException = () => {
  yeMatch.forEach(([ cyr, lat ]) => {
    const regex = `${anlaut(cyr)}|(${afterVowel(cyr)})`
    convertText(regex, lat);
  });
};

const tseException = () => {
  tseMatch.forEach(([ cyr, lat ]) => {
    const regex = combineFunc(afterVowel, notAuslaut, cyr);
    convertText(regex, lat);
  });
};

const singleMatch = () => {
  cyrMatch.forEach(([ cyr, lat ]) => {
    convertText(cyr, lat);
  });
};

const digraphException = () => {
  digraphMatch.forEach(([ from, to ]) => {
    convertText(betweenCapital(from), to);
    convertText(betweenCapital(from), to);
  });
};

const toLatin = text => {
  setText(text);
  [
    yaException, yeException,
    tseException, singleMatch,
    digraphException
  ]
  .forEach(convert => convert());
  return getText();
};

export default toLatin;