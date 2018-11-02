<?php
// $user = "root";
// $password = "root";
// $host = "localhost";
// $db = "db_infographic";
// $conn = mysqli_connect($host, $user, $password, $db);
// mysqli_set_charset($conn, 'utf8');
// if (!$conn) {
//     echo "connection didn't work...";
//     exit;
// }

//echo "connected!";

// get all the car data
// $myQuery = "SELECT * FROM mainmodel";

// // make the query, get the result
// $result = mysqli_query($conn, $myQuery);

// $rows = array();

// while($row = mysqli_fetch_assoc($result)) {
//     $rows[] = $row;
// }

// if (isset($_GET["countryName"])) {// check for a parameter ?carModel=R58
//     $country = $_GET["countryName"];

//     $myQuery = "SELECT * FROM tbl_country WHERE country_name = '$country'";

//     $result = mysqli_query($conn, $myQuery);
//     $rows = array();

//     while($row = mysqli_fetch_assoc($result)) {
//         $rows[] = $row;
//     }
// }

// // send the entire result set as a json encoded array
// echo json_encode($rows);

// ?>