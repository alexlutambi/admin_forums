<?php
# ========================================================================#
#  Requires : Requires PHP5, GD library.
#  Usage Example:
#                     
#                      resize('images/cars/large/input.jpg');
#                     resizeImage(150, 100, 0);
#                     saveImage('images/cars/large/output.jpg', 100);
# ========================================================================#

 resize($decodedImage, 200, 200, 'crop', $image_save_path, 100);

function resize($image, $newWidth, $newHeight, $option, $savePath, $imageQuality){
   
  
     $width = 0;
     $height = 0;
     $imageResized = '';

     $data_image_size = getimagesizefromstring($image);
       
        // *** Open up the file
     
        $image = openImage($image);

        // *** Get width and height

       
        $width  = $data_image_size[0];
        $height = $data_image_size[1];

       resizeImage($savePath, $imageQuality, $width, $height, $image, $newWidth, $newHeight, $option);
    
}

## --------------------------------------------------------

function openImage($file)
{
    // *** Get extension
    $img =  @imagecreatefromstring($file);
    return $img;
}

## --------------------------------------------------------

function resizeImage($savePath, $imageQuality, $width, $height, $image, $newWidth, $newHeight, $option="auto"){

    // *** Get optimal width and height - based on $option
    $optionArray = getDimensions($width, $height, $newWidth, $newHeight, $option);

    $optimalWidth  = $optionArray['optimalWidth'];
    $optimalHeight = $optionArray['optimalHeight'];

    // *** Resample - create image canvas of x, y size
    $imageResized = imagecreatetruecolor($optimalWidth, $optimalHeight);
    imagecopyresampled($imageResized, $image, 0, 0, 0, 0, $optimalWidth, $optimalHeight, $width, $height);


    // *** if option is 'crop', then crop too
    if ($option == 'crop') {
       //  crop($optimalWidth, $optimalHeight, $newWidth, $newHeight);
    }

   saveImage($imageResized, $savePath, $imageQuality);
  
}

## --------------------------------------------------------

function getDimensions($width, $height, $newWidth, $newHeight, $option)
{

   switch ($option)
    {
        case 'exact':
            $optimalWidth = $newWidth;
            $optimalHeight= $newHeight;
            break;
        case 'portrait':
            $optimalWidth = getSizeByFixedHeight($width, $height, $newHeight);
            $optimalHeight= $newHeight;
            break;
        case 'landscape':
            $optimalWidth = $newWidth;
            $optimalHeight= getSizeByFixedWidth($width, $height, $newWidth);
            break;
        case 'auto':
            $optionArray = getSizeByAuto($width, $height, $newWidth, $newHeight);
            $optimalWidth = $optionArray['optimalWidth'];
            $optimalHeight = $optionArray['optimalHeight'];
            break;
        case 'crop':
            $optionArray = getOptimalCrop($width, $height, $newWidth, $newHeight);
            $optimalWidth = $optionArray['optimalWidth'];
            $optimalHeight = $optionArray['optimalHeight'];
            break;
    }
    return array('optimalWidth' => $optimalWidth, 'optimalHeight' => $optimalHeight);
}

## --------------------------------------------------------

function getSizeByFixedHeight($width, $height, $newHeight)
{
    $ratio = $width / $height;
    $newWidth = $newHeight * $ratio;
    return $newWidth;
}

function getSizeByFixedWidth($width, $height, $newWidth)
{
    $ratio = $height / $width;
    $newHeight = $newWidth * $ratio;
    return $newHeight;
}

function getSizeByAuto($width, $height, $newWidth, $newHeight)
{
    if ($height < $width)
    // *** Image to be resized is wider (landscape)
    {
        $optimalWidth = $newWidth;
        $optimalHeight= getSizeByFixedWidth($width, $height, $newWidth);
    }
    elseif ($height > $width)
    // *** Image to be resized is taller (portrait)
    {
        $optimalWidth = getSizeByFixedHeight($width, $height, $newHeight);
        $optimalHeight= $newHeight;
    }
    else
    // *** Image to be resizerd is a square
    {
        if ($newHeight < $newWidth) {
            $optimalWidth = $newWidth;
            $optimalHeight= getSizeByFixedWidth($width, $height, $newWidth);
        } else if ($newHeight > $newWidth) {
            $optimalWidth = getSizeByFixedHeight($width, $height, $newHeight);
            $optimalHeight= $newHeight;
        } else {
            // *** Sqaure being resized to a square
            $optimalWidth = $newWidth;
            $optimalHeight= $newHeight;
        }
    }

    return array('optimalWidth' => $optimalWidth, 'optimalHeight' => $optimalHeight);
}

## --------------------------------------------------------

function getOptimalCrop($width, $height, $newWidth, $newHeight)
{

    $heightRatio = $height / $newHeight;
    $widthRatio  = $width /  $newWidth;

    if ($heightRatio < $widthRatio) {
        $optimalRatio = $heightRatio;
    } else {
        $optimalRatio = $widthRatio;
    }

    $optimalHeight = $height / $optimalRatio;
    $optimalWidth  = $width  / $optimalRatio;

    return array('optimalWidth' => $optimalWidth, 'optimalHeight' => $optimalHeight);
}

## --------------------------------------------------------

function crop($optimalWidth, $optimalHeight, $newWidth, $newHeight)
{
    // *** Find center - this will be used for the crop
    $cropStartX = ( $optimalWidth / 2) - ( $newWidth /2 );
    $cropStartY = ( $optimalHeight/ 2) - ( $newHeight/2 );

    $crop = $imageResized;
    //imagedestroy($imageResized);

    // *** Now crop from center to exact requested size
    $imageResized = imagecreatetruecolor($newWidth , $newHeight);
    imagecopyresampled($imageResized, $crop , 0, 0, $cropStartX, $cropStartY, $newWidth, $newHeight , $newWidth, $newHeight);
}

## --------------------------------------------------------

function saveImage($imageResized, $savePath, $imageQuality="100"){

    // *** Get extension
    $extension = strrchr($savePath, '.');
       $extension = strtolower($extension);

    switch($extension)
    {
        case '.jpg':
        case '.jpeg':
            if (imagetypes() & IMG_JPG) {
              
                imagejpeg($imageResized, $savePath, $imageQuality);
             
            }
            break;

        case '.gif':
            if (imagetypes() & IMG_GIF) {
                imagegif($imageResized, $savePath);
                
            }
            break;

        case '.png':
            // *** Scale quality from 0-100 to 0-9
           
            $scaleQuality = round(($imageQuality/100) * 9);

            // *** Invert quality setting as 0 is best, not 9
            $invertScaleQuality = 9 - $scaleQuality;

            if (imagetypes() & IMG_PNG) {
                 imagepng($imageResized, $savePath, $invertScaleQuality);
               
            }
            break;

        // ... etc

        default:
            // *** No extension - No save.
            break;
    }

    
    imagedestroy($imageResized);

}


## --------------------------------------------------------

?>