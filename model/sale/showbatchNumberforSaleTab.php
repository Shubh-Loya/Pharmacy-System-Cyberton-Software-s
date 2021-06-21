<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	// Check if the POST request is received and if so, execute the script
	if(isset($_POST['saleDetailsBatchNumber'])){
		$output = '';
		$saleDetailsBatchNumber = '%' . htmlentities($_POST['saleDetailsBatchNumber']) . '%';
        $saleDetailsItemName = htmlentities($_POST['saleDetailsItemName']);
		
		// Construct the SQL query to get the purchase ID
		$sql = 'SELECT batchNumber FROM purchase WHERE itemName = :itemName';
		$stmt = $conn->prepare($sql);
		$stmt->execute(['itemName' => $saleDetailsItemName]);
		
		// If we receive any results from the above query, then display them in a list
		if($stmt->rowCount() > 0){
			
			// Given purchase ID is available in DB. Hence create the dropdown list
			$output = '<ul class="list-unstyled suggestionsList" id="saleDetailsBatchNumberSuggestionsList">';
			while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
				$output .= '<li>' . $row['batchNumber'] . '</li>';
			}
			echo '</ul>';
		} else {
			$output = '';
		}
		$stmt->closeCursor();
		echo $output;
	}
?>