<?php
  // this is just a stub

  $DB_HOST = 'localhost';
  $DB_USER = 'root';
  $DB_PASS = 'root';

  $count = 0;
  $numrows = 20;
  $tweak = 10;
  $divider = 200;

  function logdump($msg, $echo = false) {
    error_log(print_r($msg, true) . "\n", 3, "/tmp/php.log");
    if ($echo)
      print_r($msg) . "\n";
  }

  // $link = mysql_connect($DB_HOST, $DB_USER, $DB_PASS);

  header('Content-type: application/json');


  // sample data
  $hash = array();
  $default = array(
    'id' => 43,
    'order_id' => 1234,
    'mobile_key' => 1234,
    'uid' => 43434343,
    'downloaded' => true,
    'downloaded_date' => 13344382129,
    'downloaded_device' => 434343,
    'downloaded_lat' => 45.516813,
    'downloaded_lon' => -122.64287,
    'used' => true,
    'used_date' => 13344382129,
    'used_device' => 434343,
    'used_lat' => 45.520624,
    'used_lon' => -122.678436,
    'zone' => 0,
    'time_restriction' => 1,
    'time_restriction_type' => 'day',
    'color' => 'white'
  );
  $lb = false;
  while($count++ < $numrows) {
    $lb = !$lb;
    $row = array();
    foreach ($default as $key => $val) {
      if (is_numeric($val)) {
        $rand = rand(0, $tweak) / $divider;
        $row[$key] = $val + (($lb) ? $rand : -$rand);
      } else {
        $row[$key] = !$val;
      }
    }
    array_push($hash, $row);
  }

  echo json_encode($hash);
?>
