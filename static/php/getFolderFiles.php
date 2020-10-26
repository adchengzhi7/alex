<?php
header("Access-Control-Allow-Origin: *");//这个必写，否则报错
    
function getFolderFiles ($dir){
$file=[ ];
    if ($handle = opendir($dir)) {

        /* This is the correct way to loop over the directory. */

        while (false !== ($entry = readdir($handle))) {
            if($entry!= '..' && $entry!= '.' ){
                if(strpos($entry, '.')){
                    $fileData=[];
                    $filePath = $dir."/".$entry;
                    $fileName = pathinfo($filePath,PATHINFO_FILENAME );
                    $fileData['src']=$filePath;
                    $fileData['thumb']=$filePath;
                    $fileData['srcset']=$filePath;
                    $fileData['caption']=  $fileName;
                    $file[]=$fileData;
                }else{
                
                }
            }

        }

        /* This is the WRONG way to loop over the directory. */
        while ($entry = readdir($handle)) {
            if($entry!= '..'||$entry!= '.'){
                echo "$entry\n<br>";
            }
        }

        closedir($handle);
    }
$data_json_en = json_encode($file);
return $data_json_en;
}
// $dirJ='./static/img/graphicDesign/jomcredit';
// $dirN='./static/img/graphicDesign/nccumalaysia';
// echo $jomcredit =getFolderFiles ($dirJ);
// echo $nccuMalaysia =getFolderFiles ($dirN);
// var_dump($file);
?>
