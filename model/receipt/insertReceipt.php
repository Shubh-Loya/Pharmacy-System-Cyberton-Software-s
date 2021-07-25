<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
		$receiptDetailsCustomerName = htmlentities($_POST['receiptDetailsCustomerName']);
		$receiptDetailsPaymentDate = htmlentities($_POST['receiptDetailsPaymentDate']);
		$receiptDetailsReceiptID = htmlentities($_POST['receiptDetailsReceiptID']);
		$receiptDetailsBillNumber = htmlentities($_POST['receiptDetailsBillNumber']);
		$receiptDetailsPaymentStatus = htmlentities($_POST['receiptDetailsPaymentStatus']);
		$receiptDetailsPaidAmount = htmlentities($_POST['receiptDetailsPaidAmount']);
		$receiptDetailsModeofPayment = htmlentities($_POST['receiptDetailsModeofPayment']);
		$paymentDetailsDescription = htmlentities($_POST['receiptDetailsDescription']);
		
		
		// Check if mandatory fields are not empty
		if(isset($receiptDetailsCustomerName) && isset($receiptDetailsPaymentDate) && isset($receiptDetailsBillNumber) && isset($receiptDetailsPaymentStatus) && isset($receiptDetailsPaidAmount) && isset($receiptDetailsModeofPayment)){
			
			// Check if CustomerName is empty
			if($receiptDetailsCustomerName == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Customer Name.</div>';
				exit();
			}
			
			// Check if PaymentDate is empty
			if($receiptDetailsPaymentDate == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Payment Date.</div>';
				exit();
			}
			
			// Check if InvoiceNumber is empty
			if($receiptDetailsBillNumber == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Bill Number.</div>';
				exit();
			}
			
			// Check if Payment status is empty
			if($receiptDetailsPaymentStatus == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Payment Status.</div>';
				exit();
			}
			// Check if Paid Amount is empty
			if($receiptDetailsPaidAmount == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Paid Amount.</div>';
				exit();

			}
			// Check if Mode of Payment is empty
			if($receiptDetailsModeofPayment == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Mode of Payment.</div>';
				exit();
			}
			
			// Check if the item exists in item table and 
			// calculate the stock values and update to match the new purchase quantity
			// $stockSql = 'SELECT stock FROM item WHERE itemNumber=:itemNumber';
			// $stockStatement = $conn->prepare($stockSql);
			// $stockStatement->execute(['itemNumber' => $purchaseDetailsItemNumber]);
			// if($stockStatement->rowCount() > 0){
				
				// Get the customerId for the given customerName
				$customerIDsql = 'SELECT * FROM customer WHERE fullName = :fullName';
				$customerIDStatement = $conn->prepare($customerIDsql);
				$customerIDStatement->execute(['fullName' => $paymentDetailsCustomerName]);
				$row = $customerIDStatement->fetch(PDO::FETCH_ASSOC);
				$customerID = $row['customerID'];
				
				// Item exits in the item table, therefore, start the inserting data to purchase table
				$insertReceiptSql = 'INSERT INTO receipts(customerName, customerID, receiptDate, receiptID, billNumber, paymentStatus, paidAmount, paymentMode, description) VALUES(:customerName, :customerID, :receiptDate, :receiptID, :billNumber, :paymentStatus, :paidAmount, :paymentMode, :description)';
				$insertReceiptStatement = $conn->prepare($insertReceiptSql);
				$insertReceiptStatement->execute(['customerName' => $receiptDetailsCustomerName,'customerID' => $customerID, 'receiptDate' => $receiptDetailsReceiptDate, 'receiptID' => $receiptDetailsreceiptID, 'billNumber' => $receiptDetailsBillNumber, 'paymentStatus' => $receiptDetailsPaymentStatus, 'paidAmount' => $receiptDetailsPaidAmount, 'paymentMode' => $receiptDetailsModeofPayment, 'description' => $receiptDetailsDescription]);
				
				
				echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Payment details added to database.</div>';
				exit();
				
			// } else {
				// Item does not exist in item table, therefore, you can't make a purchase from it 
				// to add it to DB as a new purchase
				// echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Product does not exist in DB. Therefore, first enter this product to DB using the <strong>Product</strong> tab.</div>';
				// exit();
			// }

		} else {
			// One or more mandatory fields are empty. Therefore, display a the error message
			echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter all fields marked with a (*)</div>';
			exit();
		}
?>
