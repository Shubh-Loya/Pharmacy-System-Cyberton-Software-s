<?php
	session_start();
	// Redirect the user to login page if he is not logged in.
	if(!isset($_SESSION['loggedIn'])){
		header('Location: login.php');
		exit();
	}
	
	require_once('inc/config/constants.php');
	require_once('inc/config/db.php');
	require_once('inc/header.html');
?>
<body>
<?php
	require 'inc/navigation.php';
?>
<div id="v-pills-purchase" role="tabpanel" aria-labelledby="v-pills-purchase-tab">
				<div class="card card-outline-secondary my-4">
				  <div class="card-header">Purchase Details</div>
				  <div class="card-body">
					<div id="purchaseDetailsMessage"></div>
					<form>
					  <div class="form-row">
						<div class="form-group col-md-4">
						  <label for="purchaseDetailsItemName">Product Name<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control invTooltip" id="purchaseDetailsItemName" name="purchaseDetailsItemName">
						  <div id="purchaseDetailsItemNameSuggestionsDiv" class="customListDivWidth"></div>
						</div>
						<div class="form-group col-md-3">
						  <label for="purchaseDetailsPurchaseDate">Purchase Date<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control datepicker" id="purchaseDetailsPurchaseDate" name="purchaseDetailsPurchaseDate" value="<?php echo date('Y-m-d');?>">
						</div>
						<div class="form-group col-md-2">
						  <label for="purchaseDetailsPurchaseID">Purchase ID</label>
						  <input type="text" class="form-control invTooltip" id="purchaseDetailsPurchaseID" name="purchaseDetailsPurchaseID" title="This will be auto-generated when you add a new record" autocomplete="off">
						  <div id="purchaseDetailsPurchaseIDSuggestionsDiv" class="customListDivWidth"></div>
						</div>
						<div class="form-group col-md-3">
						  <label for="purchaseDetailsInvoiceNumber">Invoice Number<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="purchaseDetailsInvoiceNumber" name="purchaseDetailsInvoiceNumber" autocomplete="off">
						  <div id="purchaseDetailsInvoiceNumberSuggestionsDiv" class="customListDivWidth"></div>
						</div>
					  </div>
					  <div class="form-row">
						<div class="form-group col-md-2">
						  <label for="purchaseDetailsItemNumber">Product Number<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="purchaseDetailsItemNumber" name="purchaseDetailsItemNumber" autocomplete="off">
						  <div id="purchaseDetailsItemNumberSuggestionsDiv" class="customListDivWidth"></div>
						</div> 
						<div class="form-group col-md-2">
						  <label for="purchaseDetailsBatchNumber">Batch Number<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="purchaseDetailsBatchNumber" name="purchaseDetailsBatchNumber" autocomplete="off">
						  <div id="purchaseDetailsBatchNumberSuggestionsDiv" class="customListDivWidth"></div>
						</div>
						<div class="form-group col-md-3">
						  <label for="purchaseDetailsExpiryDate">Expiry Date<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control datepicker" id="purchaseDetailsExpiryDate" name="purchaseDetailsExpiryDate" value="<?php echo date('Y-m-d');?>">
						</div>
						  <div class="form-group col-md-2">
							  <label for="purchaseDetailsCurrentStock">Current Stock</label>
							  <input type="text" class="form-control" id="purchaseDetailsCurrentStock" name="purchaseDetailsCurrentStock" readonly>
						  </div>
						  <div class="form-group col-md-3">
							<label for="purchaseDetailsVendorName">Vendor Name<span class="requiredIcon">*</span></label>
							<select id="purchaseDetailsVendorName" name="purchaseDetailsVendorName" class="form-control chosenSelect">
								<?php 
									require('model/vendor/getVendorNames.php');
								?>
							</select>
						  </div>
					  </div>
					  <div class="form-row">
						<div class="form-group col-md-2">
						  <label for="purchaseDetailsQuantity">Quantity<span class="requiredIcon">*</span></label>
						  <input type="number" class="form-control" id="purchaseDetailsQuantity" name="purchaseDetailsQuantity">
						</div>
						<div class="form-group col-md-2">
						  <label for="purchaseDetailsMRP">MRP<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="purchaseDetailsMRP" name="purchaseDetailsMRP">
						</div>	
						<div class="form-group col-md-2">
						  <label for="purchaseDetailsUnitPrice">Unit Price<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="purchaseDetailsUnitPrice" name="purchaseDetailsUnitPrice">
						</div>
						<div class="form-group col-md-2">
						  <label for="purchaseDetailsDiscount">Discount %<span class="requiredIcon">*</span></label>
						  <input type="number" class="form-control" id="purchaseDetailsDiscount" name="purchaseDetailsDiscount" value="0">
						</div>
						<div class="form-group col-md-2">
						  <label for="purchaseDetailsGST">GST %<span class="requiredIcon">*</span></label>
						  <input type="number" class="form-control" id="purchaseDetailsGST" name="purchaseDetailsGST" value="0">
						</div>
						<div class="form-group col-md-2">
						  <label for="purchaseDetailsTotal">Total Price</label>
						  <input type="text" class="form-control" id="purchaseDetailsTotal" name="purchaseDetailsTotal" readonly>
						</div>
					  </div>
					  <button type="button" id="addPurchase" class="btn btn-success addPurchase1" >Add Purchase</button>
					  <button type="button" id="updatePurchaseDetailsButton" class="btn btn-primary">Update</button>
					  <button type="reset" class="btn">Clear</button>
					</form>
				  </div> 
				</div>
			  </div>
<?php
	require 'inc/footer.php';
?>
</body>