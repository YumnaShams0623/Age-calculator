function calculateAge() {
    var birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) {
      alert("Please enter a valid date.");
      return;
    }
}

var birthdate = new Date(birthdateInput);
var today = new Date();

var years = today.getFullYear() - birthdate.getFullYear();
var months = today.getMonth() - birthdate.getMonth();
var days = today.getDate() - birthdate.getDate();
if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('years').innerHTML = "Years: " + years;
  document.getElementById('months').innerHTML = "Months: " + months;
  document.getElementById('days').innerHTML = "Days: " + days;
  