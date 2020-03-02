export const validateNumber = (num) => {
  try {
    if (!parseInt(num, 10)) {
      throw new SyntaxError('Данные некорректны');
    }
    return parseInt(num);
  } catch (e) {
    console.log('Ошибка произошла!');
  }
};

validateNumber('5');
