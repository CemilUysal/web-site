<?php
header('Content-Type: multipart/form-data');
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
echo file_get_contents('colors.json'); // 49 MB file