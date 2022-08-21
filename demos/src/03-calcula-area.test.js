const { areaTriangulo, areaCuadrado, areaCirculo } = require('./03-calcula-area');

test('areaTriangulo', () => {
  const resp = areaTriangulo(6, 3);
  expect(resp).toBe(9);
});

test('areaCuadrado', () => {
  const resp = areaCuadrado(6, 6);
  expect(resp).toBe(36);
});

test('areaCuadrado con diferentes lados', () => {
  const resp = areaCuadrado(6, 3);
  expect(resp).toBeNull();
});

test('areaCirculo', () => {
  const resp = areaCirculo(4);
  expect(resp).toBe(50.2656);
});
