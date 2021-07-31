const joinStringFromArray = (str: string[], separator: string): string => {
  if (str && str.length > 0) {
    return str.join(separator);
  }
  return '';
}

export default joinStringFromArray;
