<?php
	$conn = mysqli_connect('localhost', 'root', '', 'aqms');
	if(!$conn) {
		
		die('Database connection failed: '.mysqli_error());
	}
	$sql = "SELECT * FROM tbl_info";
	$result = mysqli_query($conn, $sql);
	if(!$result) {
		die("Error: data not found..");
	}	
	while($row = mysqli_fetch_array($result)) {
		$arr[] = array(
			'ID' => $row[0],
			'date' => $row[1],
			'location' => $row[2],
			'status' => $row[3]);
	}
	echo json_encode($arr);
	mysqli_close($conn);
?>