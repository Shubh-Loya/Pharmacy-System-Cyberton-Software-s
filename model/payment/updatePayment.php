<?php

	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
    if(isset($_POST['paymentDetailsPaymentID'])){

		$paymentDetailsVendorName = htmlentities($_POST['paymentDetailsVendorName']);
		$paymentDetailsPaymentDate = htmlentities($_POST['paymentDetailsPaymentDate']);
		$paymentDetailsPaymentID = htmlentities($_POST['paymentDetailsPaymentID']);
		$paymentDetailsInvoiceNumber = htmlentities($_POST['paymentDetailsInvoiceNumber']);
		$paymentDetailsPaymentStatus = htmlentities($_POST['paymentDetailsPaymentStatus']);
		$paymentDetailsPaidAmount = htmlentities($_POST['paymentDetailsPaidAmount']);
		$paymentDetailsModeofPayment = htmlentities($_POST['paymentDetailsModeofPayment']);
		$paymentDetailsDescription = htmlentities($_POST['paymentDetailsDescription']);
		
		
		// Check if mandatory fields are not empty
		if(isset($paymentDetailsVendorName) && isset($paymentDetailsPaymentDate) && isset($paymentDetailsInvoiceNumber) && isset($paymentDetailsPaymentStatus) && isset($paymentDetailsPaidAmount) && isset($paymentDetailsModeofPayment))
        {
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
			
			// Get the quantity and itemNumber in original purchase order
			$orginalPaymentQuantitySql = 'SELECT * FROM payments WHERE paymentID = :paymentID';
			$originalPaymentQuantityStatement = $conn->prepare($orginalPaymentQuantitySql);
			$originalPaymentQuantityStatement->execute(['paymentID' => $paymentDetailsPaymentID]);
			
			// Get the vendorId for the given vendorName
			$vendorIDsql = 'SELECT * FROM vendor WHERE fullName = :fullName';
			$vendorIDStatement = $conn->prepare($vendorIDsql);
			$vendorIDStatement->execute(['fullName' => $paymentDetailsVendorName]);
			$row = $vendorIDStatement->fetch(PDO::FETCH_ASSOC);
			$vendorID = $row['vendorID'];
			
			// if($originalPaymentQuantityStatement->rowCount() > 0){
				
				// Purchase details exist in DB. Hence proceed to calculate the stock
				// $originalQtyRow = $originalPaymentQuantityStatement->fetch(PDO::FETCH_ASSOC);
				// $quantityInOriginalOrder = $originalQtyRow['quantity'];
				// $originalOrderItemNumber = $originalQtyRow['itemNumber'];

				// Check if the user wants to update the itemNumber too. In that case,
				// we need to remove the quantity of the original order for that item and 
				// update the new item details in the item table.
				// Check if the original itemNumber is the same as the new itemNumber
				// if($originalOrderItemNumber !== $purchaseDetailsItemNumber) {
					// Item numbers are different. That means the user wants to update a new item number too
					// in that case, need to update both items' stocks.
						
					// Get the stock of the new item from item table
					// $newItemCurrentStockSql = 'SELECT * FROM item WHERE itemNumber = :itemNumber';
					// $newItemCurrentStockStatement = $conn->prepare($newItemCurrentStockSql);
					// $newItemCurrentStockStatement->execute(['itemNumber' => $purchaseDetailsItemNumber]);
					
					// if($newItemCurrentStockStatement->rowCount() < 1){
					// 	// Item number is not in DB. Hence abort.
					// 	echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Product Number does not exist in DB. If you want to update this product, please add it to DB first.</div>';
					// 	exit();
					// }
					
					// Calculate the new stock value for new item using the existing stock in item table
					// $newItemRow = $newItemCurrentStockStatement->fetch(PDO::FETCH_ASSOC);
					// $originalQuantityForNewItem = $newItemRow['stock'];
					// $enteredQuantityForNewItem = $purchaseDetailsQuantity;
					// $newItemNewStock = $originalQuantityForNewItem + $enteredQuantityForNewItem;
					
					// UPDATE the stock for new item in item table
					// $newItemStockUpdateSql = 'UPDATE item SET stock = :stock WHERE itemNumber = :itemNumber';
					// $newItemStockUpdateStatement = $conn->prepare($newItemStockUpdateSql);
					// $newItemStockUpdateStatement->execute(['stock' => $newItemNewStock, 'itemNumber' => $purchaseDetailsItemNumber]);
					
					// Get the current stock of the previous item
					// $previousItemCurrentStockSql = 'SELECT * FROM item WHERE itemNumber=:itemNumber';
					// $previousItemCurrentStockStatement = $conn->prepare($previousItemCurrentStockSql);
					// $previousItemCurrentStockStatement->execute(['itemNumber' => $originalOrderItemNumber]);
					
					// Calculate the new stock value for the previous item using the existing stock in item table
					// $previousItemRow = $previousItemCurrentStockStatement->fetch(PDO::FETCH_ASSOC);
					// $currentQuantityForPreviousItem = $previousItemRow['stock'];
					// $previousItemNewStock = $currentQuantityForPreviousItem - $quantityInOriginalOrder;
					
					// UPDATE the stock for previous item in item table
					// $previousItemStockUpdateSql = 'UPDATE item SET stock = :stock WHERE itemNumber = :itemNumber';
					// $previousItemStockUpdateStatement = $conn->prepare($previousItemStockUpdateSql);
					// $previousItemStockUpdateStatement->execute(['stock' => $previousItemNewStock, 'itemNumber' => $originalOrderItemNumber]);
					
					// Finally UPDATE the purchase table for new item
                    $updatePaymentDetailsSql = 'UPDATE payments SET vendorName = :vendorName, vendorID = :vendorID, paymentDate = :paymentDate, paymentID = :paymentID, invoiceNumber = :invoiceNumber, paymentStatus = :paymentStatus, paidAmount = :paidAmount, paymentMode = :paymentMode, description = :description  WHERE paymentID = :paymentID';
                    $updatePaymentDetailsStatement = $conn->prepare($updatePaymentDetailsSql);
                    $updatePaymentDetailsStatement->execute(['vendorName' => $paymentDetailsVendorName,'vendorID' => $vendorID, 'paymentDate' => $paymentDetailsPaymentDate, 'paymentID' => $paymentDetailsPaymentID, 'invoiceNumber' => $paymentDetailsInvoiceNumber, 'paymentStatus' => $paymentDetailsPaymentStatus, 'paidAmount' => $paymentDetailsPaidAmount, 'paymentMode' => $paymentDetailsModeofPayment, 'description' => $paymentDetailsDescription]);
					
					echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Payment details added to database and stock values updated.</div>';
					exit();
					
				// } else {
					// Item numbers are equal. That means item number is valid
					
					// Get the quantity (stock) in item table
					// $stockSql = 'SELECT * FROM item WHERE itemNumber=:itemNumber';
					// $stockStatement = $conn->prepare($stockSql);
					// $stockStatement->execute(['itemNumber' => $purchaseDetailsItemNumber]);
					
					// if($stockStatement->rowCount() > 0){
						// Item exists in the item table, therefore, start inserting data to purchase table
						
						// Calculate the new stock value using the existing stock in item table
						// $row = $stockStatement->fetch(PDO::FETCH_ASSOC);
						// $quantityInNewOrder = $purchaseDetailsQuantity;
						// $originalStockInItemTable = $row['stock'];
						// $newStock = $originalStockInItemTable + ($quantityInNewOrder - $quantityInOriginalOrder);
						
						// Update the new stock value in item table.
						// $updateStockSql = 'UPDATE item SET stock = :stock WHERE itemNumber = :itemNumber';
						// $updateStockStatement = $conn->prepare($updateStockSql);
						// $updateStockStatement->execute(['stock' => $newStock, 'itemNumber' => $purchaseDetailsItemNumber]);
						
						// Next, update the purchase table
					// 	$updatePaymentDetailsSql = 'UPDATE payments SET vendorName = :vendorName, vendorID = :vendorID, paymentDate = :paymentDate, paymentID = :paymentID, invoiceNumber = :invoiceNumber, paymentStatus = :paymentStatus, paidAmount = :paidAmount, paymentMode = :paymentMode, description = :description  WHERE paymentID = :paymentID';
					// 	$updatePaymentDetailsStatement = $conn->prepare($updatePaymentDetailsSql);
					// 	$updatePaymentDetailsStatement->execute(['vendorName' => $paymentDetailsVendorName,'vendorID' => $vendorID, 'paymentDate' => $paymentDetailsPaymentDate, 'paymentID' => $paymentDetailsPaymentID, 'invoiceNumber' => $paymentDetailsInvoiceNumber, 'paymentStatus' => $paymentDetailsPaymentStatus, 'paidAmount' => $paymentDetailsPaidAmount, 'paymentMode' => $paymentDetailsModeofPayment, 'description' => $paymentDetailsDescription]);
						
					// 	echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Payment details added to database.</div>';
					// 	exit();
						
					// } else {
						// Item does not exist in item table, therefore, you can't update 
						// purchase details for it 
					// 	echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Product does not exist in DB. Therefore, first enter this product to DB using the <strong>Product</strong> tab.</div>';
					// 	exit();
					// }	
					
				// }
	
			// } else {
				
			// 	// PurchaseID does not exist in purchase table, therefore, you can't update it 
			// 	echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Purchase details does not exist in DB for the given Purchase ID. Therefore, can\'t update.</div>';
			// 	exit();
				
			// }

		} else {
			// One or more mandatory fields are empty. Therefore, display the error message
			echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter all fields marked with a (*)</div>';
			exit();
		}
    }
?>