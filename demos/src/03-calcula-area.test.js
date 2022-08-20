const { areaTriangulo, areaCuadrado, areaCirculo }= require('./03-calcula-area');


test('areaTriangulo', () => {
  const resp = areaTriangulo(6,3);
  expect(resp).toBe(9);
});
