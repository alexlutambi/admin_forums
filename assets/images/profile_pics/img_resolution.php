<?php

// *** Include the class
include("image_loading_resizing.php");

//image_uploading_resizing.php

// *** 1) Initialise / load image
$image_url = $_GET['image_url'];
$width_user = $_GET['width'];
$height_user = $_GET['height'];
$quality_user = $_GET['qulity'];

$resizeObj = new resize($image_url);

// *** 2) Resize image (options: exact, portrait, landscape, auto, crop)
$resizeObj -> resizeImage($width_user, $height_user, 'crop');

// *** 3) Save image
$resizeObj -> saveImage($quality_user, 'sample-resizeda.jpg', 100);


?>