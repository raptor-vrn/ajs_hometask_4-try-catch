export const getNumber = (num) => {
  try {
    if (!isFinite(num)) {
      throw new SyntaxError('Данные некорректны');
    }
    return num;
  } catch (e) {
    console.log('Ошибка произошла!');
  }
};

getNumber('5');
