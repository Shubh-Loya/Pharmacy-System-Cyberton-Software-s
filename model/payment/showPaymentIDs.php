<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	// Check if the POST request is received and if so, execute the script
	if(isset($_POST['textBoxValue'])){
		$output = '';
		$paymentIDString = '%' . htmlentities($_POST['textBoxValue']) . '%';
		
		// Construct the SQL query to get the purchase ID
		$sql = 'SELECT paymentID FROM payments WHERE paymentID LIKE ?';
		$stmt = $conn->prepare($sql);
		$stmt->execute([$paymentIDString]);
		
		// If we receive any results from the above query, then display them in a list
		if($stmt->rowCount() > 0){
			
			// Given purchase ID is available in DB. Hence create the dropdown list
			$output = '<ul class="list-unstyled suggestionsList" id="paymentDetailsPaymentIDSuggestionsList">';
			while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
				$output .= '<li>' . $row['paymentID'] . '</li>';
			}
			echo '</ul>';
		} else {
			$output = '';
		}
		$stmt->closeCursor();
		echo $output;
	}
?>