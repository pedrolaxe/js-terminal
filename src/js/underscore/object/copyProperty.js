const copyProperty = (target, source, key) => {
  const descriptor = Object.getOwnPropertyDescriptor(source, key);
  Object.defineProperty(target, key, descriptor);
  return target;
};

export default copyProperty;
