// alert dog's info when clicking on the dog's photo
function showInfo(name, breed, fee) {
    alert("Name: " + name +
        "\nBreed: " + breed +
        "\nFee: " + fee);
}

// Load total from sessionStorage 
let total = sessionStorage.getItem('total') 
    ? parseFloat(sessionStorage.getItem('total')) : 0;

const totalDisplays = document.getElementsByClassName('total-cost');

function updateTotalDisplays() {
  for (let i = 0; i < totalDisplays.length; i++) {
    totalDisplays[i].textContent = `$${total.toFixed(2)}`;
  }
}
updateTotalDisplays(); // update total on each page

// Add fee to total
let dogPrice = 0;

function clickAdopt(price) {
  dogPrice = price;
  document.querySelectorAll('.fee').textContent = dogPrice.toFixed(2);

    total += dogPrice;
    sessionStorage.setItem('total', total.toFixed(2)); // store in session

    updateTotalDisplays(); // update all matching elements
    alert(`Your current total fee: $${total.toFixed(2)}`); // alert the update total
}

// Reset the total after click submit button in checkout page
function resetTotal() {
  total = 0;
  sessionStorage.removeItem('total');
  updateTotalDisplays();
}

// Checkout and Contact Form alert
document.getElementById('formpage').addEventListener("submit", function(event) {
  event.preventDefault(); 
  alert("Thank you. The form information has been received");

  const formData = {
    name: document.getElementById("name").value,
    lastName: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value,
    firstTimeAdopter: document.querySelector("input[name='choice']:checked")?.value || "Not selected",
    pickup: document.querySelector("input[name='pickup']").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
};
  
console.log(formData);

});



