<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');

	// Execute the script if the POST request is submitted
	if(isset($_POST['paymentDetailsPaymentID'])){
		
		$paymentID = htmlentities($_POST['paymentDetailsPaymentID']);
		
		$paymentDetailsSql = 'SELECT * FROM payments WHERE paymentID = :paymentID';
		$paymentDetailsStatement = $conn->prepare($paymentDetailsSql);
		$paymentDetailsStatement->execute(['paymentID' => $paymentID]);
		
		// If data is found for the given item number, return it as a json object
		if($paymentDetailsStatement->rowCount() > 0) {
			$row = $paymentDetailsStatement->fetch(PDO::FETCH_ASSOC);
			echo json_encode($row);
		}
		$paymentDetailsStatement->closeCursor();
	}
?>
