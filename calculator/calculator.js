window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentInputValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = { amount: 10000, years: 10, rate: 4.5 };
  let amountInput = document.getElementById("loan-amount");
  amountInput.value = values.amount;
  let yearsInput = document.getElementById("loan-years");
  yearsInput.value = values.years;
  let rateInput = document.getElementById("loan-rate");
  rateInput.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentInputValues = getCurrentInputValues();
  updateMonthly(calculateMonthlyPayment(getCurrentInputValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = values.rate / 1200;
  let compounding = 1 - ((1 + i) ** (-1 * (values.years * 12)));
  return ((Math.round(((values.amount * i) / compounding) * 100)) / 100)
  .toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyOutput = document.getElementById("monthly-payment");
  monthlyOutput.innerText = "$" + monthly;
}
