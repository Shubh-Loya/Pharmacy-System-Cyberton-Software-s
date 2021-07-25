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

			<div id="v-pills-sale" role="tabpanel">
				<div class="card card-outline-secondary my-4">
				  <div class="card-header">Payments & Receipts</div>

		<div class="card-body">
		<ul class="nav nav-tabs" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" data-toggle="tab" href="#payments">Payments</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#receipts">Receipts</a>
			</li>
		</ul>
		</div>

        <div class="tab-content">
			<div id="payments" class="container-fluid tab-pane active">
				  <div class="card-header">Payments</div>
				  <div class="card-body">
				  <div id="paymentDetailsMessage"></div>
				  <form>
					  <div class="form-row">
					  <div class="form-group col-md-5">
							<label for="paymentDetailsVendorName">Vendor Name<span class="requiredIcon">*</span></label>
							<select id="paymentDetailsVendorName" name="paymentDetailsVendorName" class="form-control chosenSelect">
								<?php 
									require('model/vendor/getVendorNames.php');
								?>
							</select>
						  </div>
						  <div class="form-group col-md-3">
							  <label for="paymentDetailsPaymentDate">Payment Date<span class="requiredIcon">*</span></label>
							  <input type="text" class="form-control datepicker" id="paymentDetailsPaymentDate" value="<?php echo date('Y-m-d');?>" name="paymentDetailsPaymentDate">
						  </div>
						<div class="form-group col-md-3">
						  <label for="paymentDetailsPaymentID">Payment ID</label>
						  <input type="text" class="form-control invTooltip" id="paymentDetailsPaymentID" name="paymentDetailsPaymentID" title="This will be auto-generated when you add a new record" autocomplete="off">
						  <div id="paymentDetailsPaymentIDSuggestionsDiv" class="customListDivWidth"></div>
						</div>
					  </div>

					  <div class="form-row">
						  <div class="form-group col-md-5">
							<label for="paymentDetailsInvoiceNumber">Invoice Number<span class="requiredIcon">*</span></label>
							<input type="text" class="form-control invTooltip" id="paymentDetailsInvoiceNumber" name="paymentDetailsInvoiceNumber">
							<div id="paymentDetailsInvoiceNumberSuggestionsDiv" class="customListDivWidth"></div>
						  </div>
						<div class="form-group col-md-3">
						  <label for="paymentDetailsPaymentStatus">Payment Status<span class="requiredIcon">*</span></label>
									<select id="paymentDetailsPaymentStatus" name="paymentDetailsPaymentStatus" class="form-control chosenSelect">
										<?php include('inc/paymentStatusList.html'); ?>
									</select>
						</div>
						  <div class="form-group col-md-3">
							  <label for="paymentDetailsPaidAmount">Paid Amount<span class="requiredIcon">*</span></label>
							<input type="text" class="form-control invTooltip" id="paymentDetailsPaidAmount" name="paymentDetailsPaidAmount">
						  </div>
					  </div>
							  <div class="form-row">
							  <div class="form-group col-md-3">
									<label for="paymentDetailsModeofPayment">Mode of Payment<span class="requiredIcon">*</span></label>
									<select id="paymentDetailsModeofPayment" name="paymentDetailsModeofPayment" class="form-control chosenSelect">
										<?php include('inc/paymentModeList.html'); ?>
									</select>
								  </div>
								<div class="form-group col-md-8" style="display:inline-block">
								  <textarea rows="4" class="form-control" placeholder="Description" name="paymentDetailsDescription" id="paymentDetailsDescription"></textarea>
								</div>  

							  </div>
					  <button type="button" id="addPayment" class="btn btn-success">Add Payment</button>
					  <button type="button" id="updatePaymentButton" class="btn btn-primary">Update</button>
					  <button type="button" id="deletePayment" class="btn btn-danger">Delete</button>
					  <button type="reset" id="paymentClear" class="btn">Clear</button>
					</form> 
				</div>
			  </div>


			  <div id="receipts" class="container-fluid tab-pane fade">
				  <div class="card-header">Receipts</div>
				  <div class="card-body">
				  <form>
					  <div class="form-row">
						<div class="form-group col-md-5">
						  <label for="receiptDetailsCustomerName">Customer	 Name<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="receiptDetailsCustomerName" name="receiptDetailsCustomerName">
						  <div id="receiptDetailsCustomerNameSuggestionsDiv" class="customListDivWidth"></div>
						</div>
						<div class="form-group col-md-">
							<label for="receiptDetailsCustomerID">Customer ID<span class="requiredIcon">*</span></label>
							<input type="text" class="form-control" id="receiptDetailsCustomerID" name="receiptDetailsCustomerID" autocomplete="off">
							<div id="receiptDetailsCustomerIDSuggestionsDiv" class="customListDivWidth"></div>
						</div>
						  <div class="form-group col-md-">
							  <label for="receiptDetailsReceiptDate">Receipt Date<span class="requiredIcon">*</span></label>
							  <input type="text" class="form-control datepicker" id="receiptDetailsReceiptDate" value="<?php echo date('Y-m-d');?>" name="receiptDetailsReceiptDate">
						  </div>
						<div class="form-group col-md-2">
						  <label for="receiptDetailsReceiptID">Receipt ID</label>
						  <input type="text" class="form-control invTooltip" id="receiptDetailsReceiptID" name="receiptDetailsReceiptID" title="This will be auto-generated when you add a new record" autocomplete="off">
						  <div id="receiptDetailsReceiptIDSuggestionsDiv" class="customListDivWidth"></div>
						</div>
					  </div>

					  <div class="form-row">
						  <div class="form-group col-md-5">
							<label for="receiptDetailsBillNumber">Bill Number<span class="requiredIcon">*</span></label>
							
								<?php 
									//require('');
								?>
					
							<input type="text" class="form-control invTooltip" id="receiptDetailsBillNumber" name="receiptDetailsBillNumber">
							<div id="receiptDetailsBillNumberSuggestionsDiv" class="customListDivWidth"></div>
						  </div>
						<div class="form-group col-md-3">
						  <label for="receiptDetailsPaymentStatus">Payment Status<span class="requiredIcon">*</span></label>
									<select id="receiptDetailsPaymentStatus" name="receiptDetailsPaymentStatus" class="form-control chosenSelect">
										<?php include('inc/paymentStatusList.html'); ?>
									</select>
						</div>
						  <div class="form-group col-md-3">
							  <label for="receiptDetailsPaidAmount">Paid Amount<span class="requiredIcon">*</span></label>
							  		
								<?php 
									//require('');
								?>
			
							<input type="text" class="form-control invTooltip" id="receiptDetailsPaidAmount" name="receiptDetailsPaidAmount">
							
						  </div>
					  </div>
							  <div class="form-row">
							  <div class="form-group col-md-3">
									<label for="receiptDetailsModeofPayment">Mode of Payment<span class="requiredIcon">*</span></label>
									<select id="receiptDetailsModeofPayment" name="receiptDetailsModeofPayment" class="form-control chosenSelect">
										<?php include('inc/paymentModeList.html'); ?>
									</select>
								  </div>
								<div class="form-group col-md-8" style="display:inline-block">
							
								  <textarea rows="4" class="form-control" placeholder="Description" name="receiptDetailsDescription" id="receiptDetailsDescription"></textarea>
								</div>  

							  </div>
					  <button type="button" id="addReceipt" class="btn btn-success">Add Receipt</button>
					  <button type="button" id="updateReceiptButton" class="btn btn-primary">Update</button>
					  <button type="button" id="deleteReceipt" class="btn btn-danger">Delete</button>
					  <button type="reset" id="receiptClear" class="btn">Clear</button>
					</form>
					
				  </div> 
			  </div>
            </div>
	    </div>
     </div>


<?php
	require 'inc/footer.php';
?>
</body>