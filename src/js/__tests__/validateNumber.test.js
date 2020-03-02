import {validateNumber} from '../validateNumber.js'

test('get number', () => {
  const num = '5';
  expect(validateNumber(num)).toBe(parseInt(num));
});

test('get error', () => {
  const num = '0x123';
  expect(validateNumber(num)).toBe(console.log('Ошибка произошла!'));
});