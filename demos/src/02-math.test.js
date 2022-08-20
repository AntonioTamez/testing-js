const { sum, multiply, divide }= require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const resp = sum(1,3);
  expect(resp).toBe(4);
});


test('multiply 1 * 3 should be 3', () => {
  const resp = multiply(1,3);
  expect(resp).toBe(3);
});


test('should divide', () => {

  const resp = divide(30,3);
  expect(resp).toBe(10);

  const resp2 = divide(6,3);
  expect(resp2).toBe(2);

});

test('should divide for zero', () => {

  const resp = divide(30,0);
  expect(resp).toBeNull();

  const resp2 = divide(6,0);
  expect(resp2).toBeNull();

});
