<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	// Check if the POST request is received and if so, execute the script
	if(isset($_POST['textBoxValue'])){
		$output = '';
		$receiptIDString = '%' . htmlentities($_POST['textBoxValue']) . '%';
		
		// Construct the SQL query to get the receipt ID
		$sql = 'SELECT receiptID FROM receipts WHERE receiptID LIKE ?';
		$stmt = $conn->prepare($sql);
		$stmt->execute([$receiptIDString]);
		
		// If we receive any results from the above query, then display them in a list
		if($stmt->rowCount() > 0){
			
			// Given receipt ID is available in DB. Hence create the dropdown list
			$output = '<ul class="list-unstyled suggestionsList" id="receiptDetailsReceiptIDSuggestionsList">';
			while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
				$output .= '<li>' . $row['receiptID'] . '</li>';
			}
			echo '</ul>';
		} else {
			$output = '';
		}
		$stmt->closeCursor();
		echo $output;
	}
?>