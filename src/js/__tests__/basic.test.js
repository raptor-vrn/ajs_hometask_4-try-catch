import {getNumber} from '../app.js'

test('get number', () => {
  const num = 5;
  expect(getNumber(num)).toBe(num);
});

test('get error', () => {
  const num = 'string';
  expect(getNumber(num)).toBe(console.log('Ошибка произошла!'));
});