// Kontrola formulára pri odosielaní
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var checkIn = document.getElementById('check-in').value;
    var checkOut = document.getElementById('check-out').value;
    var guests = document.getElementById('guests').value;
    var paymentMethod = document.querySelector('input[name="payment"]:checked');
    var comments = document.getElementById('comments').value;
    var agree = document.getElementById('agree').checked;

    // Kontrola, či sú všetky polia vyplnené
    if (!name || !email || !checkIn || !checkOut || !guests || !paymentMethod || !agree) {
        alert('Please fill in all required fields');
        event.preventDefault(); // Zastavenie odosielania formulára
    }

    // Kontrola e-mailovej adresy
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        event.preventDefault();
    }
});
