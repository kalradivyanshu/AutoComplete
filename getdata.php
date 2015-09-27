<?php
include "connect.php";
if(isset($_GET["q"]))
{
	if(strlen($_GET["q"])>0)
	{
		$i = 0;
		$sql = "SELECT * FROM simpsons WHERE SUBSTRING_INDEX(name, ' ', 1) LIKE '".$_GET["q"]."%' OR SUBSTRING_INDEX(name, ' ', -1) LIKE '".$_GET["q"]."%' LIMIT 6";
		//echo $sql;
		$result = $conn->query($sql);
		while($row = $result->fetch_assoc())
		{
			$name = explode(" ", $row["name"]);
			$username = strtolower($name[0]).strtolower($name[1]);
			$array[$i] = array("img" => $row["img"], "name1" => $row["name"],"username"=>"@".$username,"link1"=>"https://www.google.co.in/#q=".urlencode($row["name"]));
			$i++;
		}
		header('Content-Type: application/json');
		echo json_encode($array);
	}
	$conn->close();
}
//SELECT * FROM simpsons WHERE SUBSTRING_INDEX(name, ' ', 1) LIKE '%burn' OR SUBSTRING_INDEX(name, ' ', -1) LIKE '%burn' LIMIT 6
?>
