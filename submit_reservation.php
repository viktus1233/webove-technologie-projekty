<?php
// Prijatie údajov z formulára
$name = $_POST['name'];
$email = $_POST['email'];
$checkIn = $_POST['check-in'];
$checkOut = $_POST['check-out'];
$guests = $_POST['guests'];

// Tu môžete pridať ďalšiu logiku pre spracovanie rezervácie, napríklad uloženie do databázy, odoslanie emailu atď.

// Návratová odpoveď pre klienta
echo "Reservation submitted successfully! Thank you, $name.";
?>
