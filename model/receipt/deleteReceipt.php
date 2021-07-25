<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	$receiptDetailsReceiptID = htmlentities($_POST['receiptDetailsReceiptID']);
	
	if(isset($_POST['receiptDetailsReceiptID'])){
		
		// Check if mandatory fields are not empty
		if(!empty($receiptDetailsPaymentID)){
			

			// Check if the Receipt is in the database
			$receiptSql = 'SELECT receiptID FROM receipts WHERE receiptID=:receiptID';
			$receiptStatement = $conn->prepare($receiptSql);
			$receiptStatement->execute(['receiptID' => $receiptDetailsReceiptID]);
			
			if($receiptStatement->rowCount() > 0){
				
				// Receipt exists in DB. Hence start the DELETE process
				$deleteReceiptSql = 'DELETE FROM receipts WHERE receiptID=:receiptID';
				$deleteReceiptStatement = $conn->prepare($deleteReceiptSql);
				$deleteReceiptStatement->execute(['paymentID' => $receiptDetailsReceiptID]);

				echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Receipt deleted.</div>';
				exit();
				
			} else {
				// Receipt does not exist, therefore, tell the user that he can't delete that item 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Receipt does not exist in DB. Therefore, can\'t delete.</div>';
				exit();
			}
			
		} else {
			// Receipt id is empty. Therefore, display the error message
			echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter the receipt id</div>';
			exit();
		}
	}
?>