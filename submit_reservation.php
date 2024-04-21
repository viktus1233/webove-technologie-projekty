<?php
// Prijatie údajov z formulára
$name = $_POST['name'];
$email = $_POST['email'];
$checkIn = $_POST['check-in'];
$checkOut = $_POST['check-out'];
$guests = $_POST['guests'];


// Odpoveď pre klienta
echo "Reservation submitted successfully! Thank you, $name.";
?>
