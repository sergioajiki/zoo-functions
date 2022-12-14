const getOpeningHours = require('../src/getOpeningHours');
// it ('',() => {});
describe('Testes da função getOpeningHours', () => {
  it('se não passado argumento deverá retornar o objeto como todos os dias e horario de abertura e fechamento', () => {
    const atual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(atual).toEqual(expected);
  });

  it('passado o dia Tuesday e o horario 09:00-AM deverá retornar The zoo is open ', () => {
    const atual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(atual).toBe(expected);
  });
  it('passado o dia Wednesday e 09:00-PM deverá retornar The zoo is closed', () => {
    const atual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(atual).toBe(expected);
  });
  // it('passado os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
  //   const atual = getOpeningHours('Thu', '09:00-PM')
  //   expect(atual).toThrow(new Error(/^The day must be valid. Example: Monday$/));
  // });
});
