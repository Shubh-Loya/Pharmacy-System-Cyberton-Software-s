<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');

	// Execute the script if the POST request is submitted
	if(isset($_POST['fullName'])){
		
		$customerName = htmlentities($_POST['fullName']);
		
		$customerDetailsSql = 'SELECT * FROM customer WHERE fullName = :fullName';
		$customerDetailsStatement = $conn->prepare($customerDetailsSql);
		$customerDetailsStatement->execute(['fullName' => $customerName]);
		
		// If data is found for the given item number, return it as a json object
		if($customerDetailsStatement->rowCount() > 0) {
			$row = $customerDetailsStatement->fetch(PDO::FETCH_ASSOC);
			echo json_encode($row);
		}
		$customerDetailsStatement->closeCursor();
	}
?>