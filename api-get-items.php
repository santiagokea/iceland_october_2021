<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if($_GET["page"] == 1){
  echo json_encode([["id"=>1,"name"=>"A","image"=>"1.jpg","price"=>100]]);  
}
if($_GET["page"] == 2){
  echo json_encode([["id"=>2,"name"=>"B","image"=>"2.png","price"=>200]]);  
}
if($_GET["page"] == 3){
  echo json_encode([["id"=>3,"name"=>"C","image"=>"3.jpg","price"=>300]]);  
}