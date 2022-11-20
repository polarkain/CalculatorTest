
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 30000,
    years: 6.5,
    rate: 3.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('433.31');
});


it('should return a result with 2 decimal places', function () {
  const values = {
    amount: 60723,
    years: 4.5,
    rate: 6.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('1294.35');
});

/// etc
