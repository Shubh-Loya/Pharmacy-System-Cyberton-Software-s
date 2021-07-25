<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
		$paymentDetailsVendorName = htmlentities($_POST['paymentDetailsVendorName']);
		$paymentDetailsPaymentDate = htmlentities($_POST['paymentDetailsPaymentDate']);
		$paymentDetailsPaymentID = htmlentities($_POST['paymentDetailsPaymentID']);
		$paymentDetailsInvoiceNumber = htmlentities($_POST['paymentDetailsInvoiceNumber']);
		$paymentDetailsPaymentStatus = htmlentities($_POST['paymentDetailsPaymentStatus']);
		$paymentDetailsPaidAmount = htmlentities($_POST['paymentDetailsPaidAmount']);
		$paymentDetailsModeofPayment = htmlentities($_POST['paymentDetailsModeofPayment']);
		$paymentDetailsDescription = htmlentities($_POST['paymentDetailsDescription']);
		
		
		// Check if mandatory fields are not empty
		if(isset($paymentDetailsVendorName) && isset($paymentDetailsPaymentDate) && isset($paymentDetailsInvoiceNumber) && isset($paymentDetailsPaymentStatus) && isset($paymentDetailsPaidAmount) && isset($paymentDetailsModeofPayment)){
			
			// Check if VendorName is empty
			if($paymentDetailsVendorName == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Vendor Name.</div>';
				exit();
			}
			
			// Check if PaymentDate is empty
			if($paymentDetailsPaymentDate == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Payment Date.</div>';
				exit();
			}
			
			// Check if InvoiceNumber is empty
			if($paymentDetailsInvoiceNumber == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Invoice Number.</div>';
				exit();
			}
			
			// Check if Payment status is empty
			if($paymentDetailsPaymentStatus == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Payment Status.</div>';
				exit();
			}
			// Check if Paid Amount is empty
			if($paymentDetailsPaidAmount == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Paid Amount.</div>';
				exit();

			}
			// Check if Mode of Payment is empty
			if($paymentDetailsModeofPayment == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Mode of Payment.</div>';
				exit();
			}
			
			// Check if the item exists in item table and 
			// calculate the stock values and update to match the new purchase quantity
			// $stockSql = 'SELECT stock FROM item WHERE itemNumber=:itemNumber';
			// $stockStatement = $conn->prepare($stockSql);
			// $stockStatement->execute(['itemNumber' => $purchaseDetailsItemNumber]);
			// if($stockStatement->rowCount() > 0){
				
				// Get the vendorId for the given vendorName
				$vendorIDsql = 'SELECT * FROM vendor WHERE fullName = :fullName';
				$vendorIDStatement = $conn->prepare($vendorIDsql);
				$vendorIDStatement->execute(['fullName' => $paymentDetailsVendorName]);
				$row = $vendorIDStatement->fetch(PDO::FETCH_ASSOC);
				$vendorID = $row['vendorID'];
				
				// Item exits in the item table, therefore, start the inserting data to purchase table
				$insertPaymentSql = 'INSERT INTO payments(vendorName, vendorID, paymentDate, paymentID, invoiceNumber, paymentStatus, paidAmount, paymentMode, description) VALUES(:vendorName, :vendorID, :paymentDate, :paymentID, :invoiceNumber, :paymentStatus, :paidAmount, :paymentMode, :description)';
				$insertPaymentStatement = $conn->prepare($insertPaymentSql);
				$insertPaymentStatement->execute(['vendorName' => $paymentDetailsVendorName,'vendorID' => $vendorID, 'paymentDate' => $paymentDetailsPaymentDate, 'paymentID' => $paymentDetailsPaymentID, 'invoiceNumber' => $paymentDetailsInvoiceNumber, 'paymentStatus' => $paymentDetailsPaymentStatus, 'paidAmount' => $paymentDetailsPaidAmount, 'paymentMode' => $paymentDetailsModeofPayment, 'description' => $paymentDetailsDescription]);
				
				
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
