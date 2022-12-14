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
  it('passado os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    // const atual = getOpeningHours('Thu', '09:00-PM')
    // expect(atual).toThrow(new Error(/^The day must be valid. Example: Monday$/));
    // expect(atual).toThrow('The day must be valid. Example: Monday');
    // expect(atual).toThrow(dayError);
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Para os argumentos Sunday e 11:61-AM deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Sunday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Para os argumentos Sunday e 09:61-AM deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Sunday', '09:61-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
