<?php
$user = "root";
$password = "root";
$host = "localhost";
$db = "db_infographic";
$conn = mysqli_connect($host, $user, $password, $db);
mysqli_set_charset($conn, 'utf8');
if (!$conn) {
    echo "connection didn't work...";
    exit;
}

// echo "connected!";

if (isset($_GET["continentID"])) {
    $continent = $_GET["continentID"];

    //$myQuery = "SELECT * FROM tbl_country WHERE country_name = '$country'";

    $myQuery = "SELECT * FROM tbl_continents , tbl_continents_country, tbl_country
                WHERE tbl_continents . continent_id = tbl_continents_country . continent_id
                AND tbl_continents_country . country_id = tbl_country . country_id
                AND tbl_continents . continent_id = '$continent'";

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
}

// send the entire result set as a json encoded array
echo json_encode($rows);

?>