export const shortenText = (text, maxVisible) => {
  if(text.length <= maxVisible) {
    return text;
  }

  return text.substr(0, maxVisible) + '...';
};
