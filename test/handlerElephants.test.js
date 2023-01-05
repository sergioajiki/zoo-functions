const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => { });
it('Testa se retorna undefined se o parametro não for informado', () => {
  const actual = handlerElephants();
  const expected = undefined;
  expect(actual).toBe(expected);
});
it('Testa para se chamado o argumento count retorna número inteiro 4', () => {
  const actual = handlerElephants('count');
  const expected = 4;
  expect(actual).toBe(expected);
});
it('Quando o argumento não for string retorna aviso de erro "Parâmetro inválido, é necessário uma string"', () => {
  const actual = handlerElephants(1111);
  const expected = 'Parâmetro inválido, é necessário uma string';
  expect(actual).toBe(expected);
});
it('Quando colocado o argumento names, retorna um array com o nome de todos os elefantes', () => {
  const actual = handlerElephants('names');
  const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
  expect(actual).toEqual(expected);
});
it('Para o argumento averageAge retorna um número próximo a 10.5', () => {
  const actual = handlerElephants('averageAge');
  const expected = 10.5;
  expect(actual).toBe(expected);
});
it('Passando por argumento um objeto vazio ({}) deve retornar a string "Parâmetro inválido, é necessário uma string"', () => {
  const actual = handlerElephants({});
  const expected = 'Parâmetro inválido, é necessário uma string';
  expect(actual).toBe(expected);
});
it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
  const actual = handlerElephants('teste');
  const expected = null;
  expect(actual).toBe(expected);
});
