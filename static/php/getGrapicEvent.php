<?php
header("Access-Control-Allow-Origin: *");//这个必写，否则报错
include("./getFolderFiles.php");
$folder= $_POST['folder'];
$locate= $_POST['locate'];
$dirJ='../../static/img/'.$locate.'/'.$folder;
 if($files =getFolderFiles ($dirJ))
{
    echo $files;
}else{
    echo $dirJ;
}

// $dirN='./static/img/graphicDesign/nccumalaysia';
// echo $nccuMalaysia =getFolderFiles ($dirN);
// var_dump($file);
?>
