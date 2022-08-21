test('test obj', () => {
  const data = { name: 'antonio' };
  data.lastname = 'tamez';
  expect(data).toEqual({ name: 'antonio', lastname: 'tamez' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

// revisa con una expresion regular que tenga una porcion del texto
test('test strings', () => {
  expect('Antonio').toMatch(/toni/);
});

// revisa que algun elemento del array sea el 3
test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
