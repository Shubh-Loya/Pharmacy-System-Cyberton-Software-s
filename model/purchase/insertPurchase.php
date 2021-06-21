<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	if(isset($_POST['purchaseDetailsItemNumber'])){

		$purchaseDetailsItemNumber = htmlentities($_POST['purchaseDetailsItemNumber']);
		$purchaseDetailsPurchaseDate = htmlentities($_POST['purchaseDetailsPurchaseDate']);
		$purchaseDetailsItemName = htmlentities($_POST['purchaseDetailsItemName']);
		$purchaseDetailsQuantity = htmlentities($_POST['purchaseDetailsQuantity']);
		$purchaseDetailsUnitPrice = htmlentities($_POST['purchaseDetailsUnitPrice']);
		$purchaseDetailsVendorName = htmlentities($_POST['purchaseDetailsVendorName']);
		$purchaseDetailsInvoiceNumber = htmlentities($_POST['purchaseDetailsInvoiceNumber']);
		$purchaseDetailsBatchNumber = htmlentities($_POST['purchaseDetailsBatchNumber']);
		$purchaseDetailsExpiryDate = htmlentities($_POST['purchaseDetailsExpiryDate']);
		$purchaseDetailsMRP = htmlentities($_POST['purchaseDetailsMRP']);
		$purchaseDetailsDiscount = htmlentities($_POST['purchaseDetailsDiscount']);
		$purchaseDetailsGST = htmlentities($_POST['purchaseDetailsGST']);
		$purchaseDetailsTotal = htmlentities($_POST['purchaseDetailsTotal']);
		
		
		$initialStock = 0;
		$newStock = 0;
		
		// Check if mandatory fields are not empty
		if(isset($purchaseDetailsItemNumber) && isset($purchaseDetailsPurchaseDate) && isset($purchaseDetailsItemName) && isset($purchaseDetailsQuantity) && isset($purchaseDetailsUnitPrice) && isset($purchaseDetailsInvoiceNumber) && isset($purchaseDetailsBatchNumber) && isset($purchaseDetailsExpiryDate) && isset($purchaseDetailsMRP) && isset($purchaseDetailsGST)){
			
			// Check if itemNumber is empty
			if($purchaseDetailsItemNumber == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Product Number.</div>';
				exit();
			}
			
			// Check if itemName is empty
			if($purchaseDetailsItemName == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Product Name.</div>';
				exit();
			}
			
			// Check if quantity is empty
			if($purchaseDetailsQuantity == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Quantity.</div>';
				exit();
			}
			
			// Check if unit price is empty
			if($purchaseDetailsUnitPrice == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Unit Price.</div>';
				exit();
			}
			// Check if unit price is empty
			if($purchaseDetailsInvoiceNumber == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Invoice Number.</div>';
				exit();

			}
			// Check if batchNumber is empty
			if($purchaseDetailsBatchNumber == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Batch Number.</div>';
				exit();
			}
			// Check if expiryDate is empty
			if($purchaseDetailsExpiryDate == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter Expiry Date.</div>';
				exit();
			}
			// Check if MRP is empty
			if($purchaseDetailsMRP == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter MRP.</div>';
				exit();
			}
			// Check if GST is empty
			if($purchaseDetailsGST == ''){ 
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter GST.</div>';
				exit();
			}

			// Sanitize item number
			$purchaseDetailsItemNumber = filter_var($purchaseDetailsItemNumber, FILTER_SANITIZE_STRING);
			
			// Validate item quantity. It has to be an integer
			if(filter_var($purchaseDetailsQuantity, FILTER_VALIDATE_INT) === 0 || filter_var($purchaseDetailsQuantity, FILTER_VALIDATE_INT)){
				// Valid quantity
			} else {
				// Quantity is not a valid number
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter a valid number for quantity.</div>';
				exit();
			}
			
			// Validate unit price. It has to be an integer or floating point value
			if(filter_var($purchaseDetailsUnitPrice, FILTER_VALIDATE_FLOAT) === 0.0 || filter_var($purchaseDetailsUnitPrice, FILTER_VALIDATE_FLOAT)){
				// Valid unit price
			} else {
				// Unit price is not a valid number
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter a valid number for unit price.</div>';
				exit();
			}
			
			// Check if the item exists in item table and 
			// calculate the stock values and update to match the new purchase quantity
			$stockSql = 'SELECT stock FROM item WHERE itemNumber=:itemNumber';
			$stockStatement = $conn->prepare($stockSql);
			$stockStatement->execute(['itemNumber' => $purchaseDetailsItemNumber]);
			if($stockStatement->rowCount() > 0){
				
				// Get the vendorId for the given vendorName
				$vendorIDsql = 'SELECT * FROM vendor WHERE fullName = :fullName';
				$vendorIDStatement = $conn->prepare($vendorIDsql);
				$vendorIDStatement->execute(['fullName' => $purchaseDetailsVendorName]);
				$row = $vendorIDStatement->fetch(PDO::FETCH_ASSOC);
				$vendorID = $row['vendorID'];
				
				// Item exits in the item table, therefore, start the inserting data to purchase table
				$insertPurchaseSql = 'INSERT INTO purchase(invoiceNumber, itemNumber, purchaseDate, itemName, batchNumber, expiryDate, MRP, unitPrice, discount, GST, quantity, vendorName, vendorID, totalPrice) VALUES(:invoiceNumber, :itemNumber, :purchaseDate, :itemName, :batchNumber, :expiryDate, :MRP, :unitPrice, :discount, :GST, :quantity, :vendorName, :vendorID, :totalPrice)';
				$insertPurchaseStatement = $conn->prepare($insertPurchaseSql);
				$insertPurchaseStatement->execute(['invoiceNumber' => $purchaseDetailsInvoiceNumber,'itemNumber' => $purchaseDetailsItemNumber, 'purchaseDate' => $purchaseDetailsPurchaseDate, 'itemName' => $purchaseDetailsItemName, 'batchNumber' => $purchaseDetailsBatchNumber, 'expiryDate' => $purchaseDetailsExpiryDate, 'MRP' => $purchaseDetailsMRP, 'unitPrice' => $purchaseDetailsUnitPrice, 'discount' => $purchaseDetailsDiscount, 'GST' => $purchaseDetailsGST, 'quantity' => $purchaseDetailsQuantity, 'vendorName' => $purchaseDetailsVendorName, 'vendorID' => $vendorID, 'totalPrice' => $purchaseDetailsTotal]);
				
				// Calculate the new stock value using the existing stock in item table
				$row = $stockStatement->fetch(PDO::FETCH_ASSOC);
				$initialStock = $row['stock'];
				$newStock = $initialStock + $purchaseDetailsQuantity;
				
				// Update the new stock value in item table
				$updateStockSql = 'UPDATE item SET stock = :stock WHERE itemNumber = :itemNumber';
				$updateStockStatement = $conn->prepare($updateStockSql);
				$updateStockStatement->execute(['stock' => $newStock, 'itemNumber' => $purchaseDetailsItemNumber]);
				
				echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button>Purchase details added to database and stock values updated.</div>';
				exit();
				
			} else {
				// Item does not exist in item table, therefore, you can't make a purchase from it 
				// to add it to DB as a new purchase
				echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Product does not exist in DB. Therefore, first enter this product to DB using the <strong>Product</strong> tab.</div>';
				exit();
			}

		} else {
			// One or more mandatory fields are empty. Therefore, display a the error message
			echo '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>Please enter all fields marked with a (*)</div>';
			exit();
		}
	}
?>