import toLatin from './cyrUzToLat';
import toCyrillic from './latUzToCyr';

const convert = (text, isCyr) => {
  const convertFunc = isCyr ? toCyrillic : toLatin;
  const convertedText = convertFunc(text);
  return convertedText;
};

export default convert;