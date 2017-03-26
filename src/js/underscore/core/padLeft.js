const padLeft = (value, totalWidth, paddingChar = '0') => {
  const length = totalWidth - value.toString().length + 1;
  return Array(length).join(paddingChar) + value;
};

export default padLeft;
