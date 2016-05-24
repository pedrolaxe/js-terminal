const padLeft = (value, totalWidth, paddingChar) => {
  const length = totalWidth - value.toString().length + 1;
  return Array(length).join(paddingChar || '0') + value;
};

export default padLeft;
