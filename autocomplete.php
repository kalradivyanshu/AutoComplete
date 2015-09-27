<?php
include "connect.php";
?>
<html>
<head>
	<title>
		Autocomplete By Divyanshu Kalra
	</title>
	<link rel="stylesheet" type="text/css" href="css/autocomplete.css">
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
	<div class="accontainer">
	<input id="searchbox" type="text" style="width:200px;margin-left:200px;" data-backend="getdata.php" data-getvar="q">
	<table class="suggestiontable table" style="width:200px;margin-left:200px;" id="options"></table>
</div>
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="js/autocomplete.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
</body>
</html>
