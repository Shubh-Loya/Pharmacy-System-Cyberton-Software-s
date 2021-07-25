<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');

	// Execute the script if the POST request is submitted
	if(isset($_POST['receiptDetailsReceiptID'])){
		
		$receiptID = htmlentities($_POST['receiptDetailsReceiptID']);
		
		$receiptDetailsSql = 'SELECT * FROM receipts WHERE receiptID = :receiptID';
		$receiptDetailsStatement = $conn->prepare($receiptDetailsSql);
		$receiptDetailsStatement->execute(['receiptID' => $receiptID]);
		
		// If data is found for the given item number, return it as a json object
		if($receiptDetailsStatement->rowCount() > 0) {
			$row = $receiptDetailsStatement->fetch(PDO::FETCH_ASSOC);
			echo json_encode($row);
		}
		$receiptDetailsStatement->closeCursor();
	}
?>