<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	$paymentDetailsPaymentID = htmlentities($_POST['paymentDetailsPaymentID']);
	
	if(isset($_POST['paymentDetailsPaymentID'])){
		
		// Check if mandatory fields are not empty
		if(!empty($paymentDetailsPaymentID)){
			

			// Check if the Payment is in the database
			$paymentSql = 'SELECT paymentID FROM payments WHERE paymentID=:paymentID';
			$paymentStatement = $conn->prepare($paymentSql);
			$paymentStatement->execute(['paymentID' => $paymentDetailsPaymentID]);
			
			if($paymentStatement->rowCount() > 0){
				
				// Payment exists in DB. Hence start the DELETE process
				$deletePaymentSql = 'DELETE FROM payments WHERE paymentID=:paymentID';
				$deletePaymentStatement = $conn->prepare($deletePaymentSql);
				$deletePaymentStatement->execute(['paymentID' => $paymentDetailsPaymentID]);

				echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Payment deleted.</div>';
				exit();
				
			} else {
				// Payment does not exist, therefore, tell the user that he can't delete that item 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Payment does not exist in DB. Therefore, can\'t delete.</div>';
				exit();
			}
			
		} else {
			// Payment id is empty. Therefore, display the error message
			echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter the payment id</div>';
			exit();
		}
	}
?>