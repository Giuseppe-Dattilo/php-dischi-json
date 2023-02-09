<?php

// Recupero il file da leggere
$source_url = __DIR__ . '/data.json'; 

// leggo il contenuto del file
$json_data = file_get_contents($source_url);

// converto il file in php
$disks = json_decode($json_data, true);

// Comunico al server che voglio scrivere in JSON
header('Content-Type: application/json');

// converto in json e restituisco i dischi
echo json_encode($disks);
