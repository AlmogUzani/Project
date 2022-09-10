const Validation = (input, value, validation) => {
  const errors = [];
  if (validation.required) {
    if (value.length === 0) {
      errors.push({
        name: `required`,
        value: `${input} required`,
      });
    }
  }
  if (validation.minimumLength) {
    const minimum = validation.minimumLength;
    if (value.length < minimum) {
      errors.push({
        name: `minimumLength`,
        value: `${input} need to be more than ${minimum} chars`,
      });
    }
  }
  if (validation.pattern) {
    if (!validation.pattern.test(value)) {
      errors.push({
        name: `emailInvalid`,
        value: `${input} is NOT valid`,
      });
    }
  }
  return errors;
};

export default Validation;
