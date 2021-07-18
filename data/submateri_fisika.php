<?php

require_once 'init.php';
$query = mysqli_query($conn, "SELECT * FROM fisika");

$rows = [];
while ($row = mysqli_fetch_assoc($query)) {
    $rows[] = $row;
}
echo json_encode($rows);
