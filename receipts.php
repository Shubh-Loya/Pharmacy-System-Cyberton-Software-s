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

					<div id="saleDetailsMessage"></div>
					<form>
					  <div class="form-row">
						<div class="form-group col-md-5">
						  <label for="saleDetailsCustomerName">Customer Name<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="saleDetailsCustomerName" name="saleDetailsCustomerName">
						  <div id="saleDetailsCustomerNameSuggestionsDiv" class="customListDivWidth"></div>
						</div>
						<div class="form-group col-md-3">
							<label for="saleDetailsCustomerID">Customer ID<span class="requiredIcon">*</span></label>
							<input type="text" class="form-control" id="saleDetailsCustomerID" name="saleDetailsCustomerID" autocomplete="off">
							<div id="saleDetailsCustomerIDSuggestionsDiv" class="customListDivWidth"></div>
						</div>
						  <div class="form-group col-md-3">
							  <label for="saleDetailsSaleDate">Receipt Date<span class="requiredIcon">*</span></label>
							  <input type="text" class="form-control datepicker" id="saleDetailsSaleDate" value="2021-03-28" name="saleDetailsSaleDate" readonly>
						  </div>
					  </div>

					  <div class="form-row">
						  <div class="form-group col-md-5">
							<label for="saleDetailsItemName">Bill Number<span class="requiredIcon">*</span></label>
							<!--<select id="saleDetailsItemNames" name="saleDetailsItemNames" class="form-control chosenSelect"> -->
								<?php 
									//require('');
								?>
							<!-- </select> -->
							<input type="text" class="form-control invTooltip" id="saleDetailsItemName" name="saleDetailsItemName">
							<div id="saleDetailsItemNameSuggestionsDiv" class="customListDivWidth"></div>
						  </div>
						<div class="form-group col-md-3">
						  <label for="saleDetailsItemNumber">Payment Status<span class="requiredIcon">*</span></label>
									<select id="itemDetailsCategory" name="itemDetailsCategory" class="form-control chosenSelect">
										<?php include('inc/paymentStatusList.html'); ?>
									</select>
						</div>
						  <div class="form-group col-md-3">
							  <label for="saleDetailsItemName">Paid Amount<span class="requiredIcon">*</span></label>
							  		<!--<select id="saleDetailsItemNames" name="saleDetailsItemNames" class="form-control chosenSelect"> -->
								<?php 
									//require('');
								?>
									<!-- </select> -->
							<input type="text" class="form-control invTooltip" id="saleDetailsItemNames" name="saleDetailsItemName">
							<!--<div id="saleDetailsItemNameSuggestionsDiv" class="customListDivWidth"></div>-->
						  </div>
					  </div>
							  <div class="form-row">
							  <div class="form-group col-md-3">
									<label for="itemDetailsCategory">Mode of Payment<span class="requiredIcon">*</span></label>
									<select id="itemDetailsCategory" name="itemDetailsCategory" class="form-control chosenSelect">
										<?php include('inc/paymentModeList.html'); ?>
									</select>
								  </div>
								<div class="form-group col-md-8" style="display:inline-block">
								  <!-- <label for="itemDetailsDescription">Comments</label> -->
								  <textarea rows="4" class="form-control" placeholder="Description" name="itemDetailsDescription" id="itemDetailsDescription"></textarea>
								</div>  

							  </div>
					  <button type="button" id="addSaleButton" class="btn btn-success">Add Receipt</button>
					  <button type="button" id="updateSaleDetailsButton" class="btn btn-primary">Update</button>
					  <button type="button" id="deleteItem" class="btn btn-danger">Delete</button>
					  <button type="reset" id="saleClear" class="btn">Clear</button>
					</form>
				  </div> 
				</div>
			  </div>
<?php
	require 'inc/footer.php';
?>
</body>