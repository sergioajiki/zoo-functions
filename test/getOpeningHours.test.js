const getOpeningHours = require('../src/getOpeningHours');
// it ('',() => {});
const zooClosed = 'The zoo is closed';
const zooOpen = 'The zoo is open';
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
  it('verifica se está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(zooOpen);
    expect(getOpeningHours('Friday', '12:30-PM')).toBe(zooOpen);
  });
  it('verifica se está fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(zooClosed);
    expect(getOpeningHours('Monday', '11:39-AM')).toBe(zooClosed);
  });
  it('passado os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Friday', '09:30')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Para os argumentos Sunday e 13:00-AM deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Para os argumentos Sunday e 09:60-AM deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Sunday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Para os argumentos Monday e 09:00-AM retorna a mensagem "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '10:42-AM')).toBe(zooClosed);
  });
});
