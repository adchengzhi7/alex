<?php
header("Access-Control-Allow-Origin: *");//这个必写，否则报错
    
function getFolderSubFiles ($dir){
$file=[ ];
    if ($handle = opendir($dir)) {

        /* This is the correct way to loop over the directory. */

        while (false !== ($entry = readdir($handle))) {
            if($entry!= '..' && $entry!= '.' ){
                $fileData=[];
                    $filePath = $dir."/".$entry;
                    $fileData['title']=$entry;
                     if ($handleSub = opendir($filePath )) {
                         $i=0;
                        while (false !== ($entrySub = readdir($handleSub))) {
                            if(strpos($entrySub, '.')){
                                $fileSubData=[];
                                $fileSubPath =  $filePath."/".$entrySub;
                                $fileSubName = pathinfo($fileSubPath,PATHINFO_FILENAME );
                                $fileSubData['src']=$fileSubPath;
                                $fileSubData['thumb']=$fileSubPath;
                                $fileSubData['srcset']=$fileSubPath;
                                $fileSubData['caption']=  $fileSubName;
                                $fileData['sub'][$i]=$fileSubData;
                            }
                            $i=$i+1;
                        }
                        closedir($handleSub);
                        
                    }
                    $file[]= $fileData;
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
?>
