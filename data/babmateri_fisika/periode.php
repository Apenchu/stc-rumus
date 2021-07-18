<?php

require_once '../init.php';
$query = mysqli_query($conn, "SELECT * FROM babmateri_fisika WHERE babmateri = 'periode'");

$rows = [];
while ($row = mysqli_fetch_assoc($query)) {
    $rows[] = $row;
}
echo json_encode($rows);
