// alert dog's info when clicking on the dog's photo
function showInfo(name, breed, fee) {
    alert("Name: " + name +
        "\nBreed: " + breed +
        "\nFee: " + fee);
}

const dogImgs = document.querySelectorAll('.item img').forEach((img) => {
    img.addEventListener('click', () => {
        const card = img.closest('.item');

        const name = card.querySelector('.dog-name').textContent;
        const breed = card.querySelector('.breed').textContent;
        const fee = card.querySelector('.fee').textContent;

        showInfo(name, breed, fee);

    });
});

// Load total from sessionStorage 
let total = sessionStorage.getItem('total') 
    ? parseFloat(sessionStorage.getItem('total')) 
    : 0;

const totalDisplays = document.getElementsByClassName('total-cost');

function updateTotalDisplays() {
  for (let i = 0; i < totalDisplays.length; i++) {
    totalDisplays[i].textContent = `$${total.toFixed(2)}`;
  }
}
updateTotalDisplays(); // update initially on page load

// Add fee to total
const adoptButtons = document.querySelectorAll('.item button');
adoptButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.item');
    const cost = parseFloat(card.querySelector('.fee').textContent.replace('$', ''));

    total += cost;
    sessionStorage.setItem('total', total.toFixed(2)); // store in session

    updateTotalDisplays(); // update all matching elements
    alert(`Your current total fee: $${total.toFixed(2)}`); // alert the update total
  });
});

// Reset the total after click submit button in checkout page
function resetTotal() {
  total = 0;
  sessionStorage.removeItem('total');
  updateTotalDisplays();
}

// Form alert
const form = document.getElementById('checkoutForm');

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop the form reloading
  alert("Thank you. The form information has been received");

  const formData = {
    name: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value,
    firstTimeAdopter: document.querySelector("input[name='choice']:checked")?.value || "Not selected",
    pickup: document.querySelector("input[name='pickup']").value
};
  
console.log(formData);

});


