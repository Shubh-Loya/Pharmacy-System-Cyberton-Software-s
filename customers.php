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
<div id="v-pills-customer" role="tabpanel">
				<div class="card card-outline-secondary my-4">
				  <div class="card-header">Customer Details</div>
				  <div class="card-body">
				  <!-- Div to show the ajax message from validations/db submission -->
				  <div id="customerDetailsMessage"></div>
					 <form> 
					   <div class="form-row">
						<div class="form-group col-md-4">
						  <label for="customerDetailsCustomerFullName">Full Name<span class="requiredIcon">*</span></label>
						  <input type="text" class="form-control" id="customerDetailsCustomerFullName" name="customerDetailsCustomerFullName">
						</div>
						 <div class="form-group col-md-2">
							<label for="customerDetailsCustomerID">Customer ID</label>
							<input type="text" class="form-control invTooltip" id="customerDetailsCustomerID" name="customerDetailsCustomerID" title="This will be auto-generated when you add a new customer" autocomplete="off">
							<div id="customerDetailsCustomerIDSuggestionsDiv" class="customListDivWidth"></div>
						</div>
						<div class="form-group col-md-3">
						  <label for="customerDetailsDrugLicenseNumber">Drug License Number</label>
						  <input type="text" class="form-control" id="customerDetailsDrugLicenseNumber" name="customerDetailsDrugLicenseNumber" autocomplete="off">
						</div>
						<div class="form-group col-md-3">
						  <label for="customerDetailsGSTRNumber">GSTR Number</label>
						  <input type="text" class="form-control" id="customerDetailsGSTRNumber" name="customerDetailsGSTRNumber" autocomplete="off">
						</div>
					  </div>
					  <div class="form-row">
						  <div class="form-group col-md-3">
							<label for="customerDetailsCustomerMobile">Phone (mobile)<span class="requiredIcon">*</span></label>
							<input type="text" class="form-control invTooltip" id="customerDetailsCustomerMobile" name="customerDetailsCustomerMobile" title="Do not enter leading 0">
						  </div>
						  <div class="form-group col-md-3">
							<label for="customerDetailsCustomerPhone2">Phone 2</label>
							<input type="text" class="form-control invTooltip" id="customerDetailsCustomerPhone2" name="customerDetailsCustomerPhone2" title="Do not enter leading 0">
						  </div>
						  <div class="form-group col-md-4">
							<label for="customerDetailsCustomerEmail">Email</label>
							<input type="email" class="form-control" id="customerDetailsCustomerEmail" name="customerDetailsCustomerEmail">
						</div>
						<div class="form-group col-md-2">
							<label for="customerDetailsStatus">Status</label>
							<select id="customerDetailsStatus" name="customerDetailsStatus" class="form-control chosenSelect">
								<?php include('inc/statusList.html'); ?>
							</select>
						</div>
					  </div>
					  <div class="form-group">
						<label for="customerDetailsCustomerAddress">Address<span class="requiredIcon">*</span></label>
						<input type="text" class="form-control" id="customerDetailsCustomerAddress" name="customerDetailsCustomerAddress">
					  </div>
					  <div class="form-group">
						<label for="customerDetailsCustomerAddress2">Address 2</label>
						<input type="text" class="form-control" id="customerDetailsCustomerAddress2" name="customerDetailsCustomerAddress2">
					  </div>
					  <div class="form-row">
						<div class="form-group col-md-6">
						  <label for="customerDetailsCustomerCity">City</label>
						  <input type="text" class="form-control" id="customerDetailsCustomerCity" name="customerDetailsCustomerCity">
						</div>
						<div class="form-group col-md-4">
						  <label for="customerDetailsCustomerDistrict">District</label>
						  <select id="customerDetailsCustomerDistrict" name="customerDetailsCustomerDistrict" class="form-control chosenSelect">
							<?php include('inc/districtList.html'); ?>
						  </select>
						</div>
					  </div>					  
					  <button type="button" id="addCustomer" name="addCustomer" class="btn btn-success">Add Customer</button>
					  <button type="button" id="updateCustomerDetailsButton" class="btn btn-primary">Update</button>
					  <button type="button" id="deleteCustomerButton" class="btn btn-danger">Delete</button>
					  <button type="reset" class="btn">Clear</button>
					 </form>
				  </div> 
				</div>
			  </div>
<?php
	require 'inc/footer.php';
?>
</body>