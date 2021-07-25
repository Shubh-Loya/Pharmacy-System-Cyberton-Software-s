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
				  <div class="card-header">GST Reports</div>

		<div class="card-body">
		<ul class="nav nav-tabs" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" data-toggle="tab" href="#purchasegstr">Purchase GSTR</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#salegstr">Sale GSTR</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#netgstr">Net GSTR</a>
			</li>
		</ul>
		</div>

        <div class="tab-content">
			<div id="purchasegstr" class="container-fluid tab-pane active">
				  <div class="card-header">Purchase GSTR</div>
				  <div class="card-body">
				  <div id="purchaseGstrDetailsMessage"></div>

							
							<!-- <p>Use the grid below to get reports for Purchase GSTR</p> -->
							<form> 
							  <div class="form-row">
								  <div class="form-group col-md-3">
									<label for="purchaseGstrReportStartDate">Start Date</label>
									<input type="text" class="form-control datepicker" id="purchaseGstrReportStartDate" value="<?php echo date('Y-m-d');?>" name="purchaseGstrReportStartDate" readonly>
								  </div>
								  <div class="form-group col-md-3">
									<label for="purchaseGstrReportEndDate">End Date</label>
									<input type="text" class="form-control datepicker" id="purchaseGstrReportEndDate" value="<?php echo date('Y-m-d');?>" name="purchaseGstrReportEndDate" readonly>
								  </div>
							  </div>
							  <button type="button" id="showPurchaseGstrReport" class="btn btn-dark">Show Report</button>
							  <button type="reset" id="purchaseGstrFilterClear" class="btn">Clear</button>
							</form>
							<br><br>
					</div>
			</div>

			<div id="salegstr" class="container-fluid tab-pane fade">
				  <div class="card-header">Sale GSTR</div>
				  <div class="card-body">
				  <div id="saleGstrDetailsMessage"></div>

							
							<!-- <p>Use the grid below to get reports for Sale GSTR</p> -->
							<form> 
							  <div class="form-row">
								  <div class="form-group col-md-3">
									<label for="saleGstrReportStartDate">Start Date</label>
									<input type="text" class="form-control datepicker" id="saleGstrReportStartDate" value="<?php echo date('Y-m-d');?>" name="saleGstrReportStartDate" readonly>
								  </div>
								  <div class="form-group col-md-3">
									<label for="saleGstrReportEndDate">End Date</label>
									<input type="text" class="form-control datepicker" id="saleGstrReportEndDate" value="<?php echo date('Y-m-d');?>" name="saleGstrReportEndDate" readonly>
								  </div>
							  </div>
							  <button type="button" id="showSaleGstrReport" class="btn btn-dark">Show Report</button>
							  <button type="reset" id="saleGstrFilterClear" class="btn">Clear</button>
							</form>
							<br><br>


				  </div>
   			</div>

			   <div id="netgstr" class="container-fluid tab-pane fade">
				  <div class="card-header">Net GSTR</div>
				  <div class="card-body">
				  <div id="netGstrDetailsMessage"></div>

							
							<!-- <p>Use the grid below to get reports for Net GSTR</p> -->
							<form> 
							  <div class="form-row">
								  <div class="form-group col-md-3">
									<label for="netGstrReportStartDate">Start Date</label>
									<input type="text" class="form-control datepicker" id="netGstrReportStartDate" value="<?php echo date('Y-m-d');?>" name="netGstrReportStartDate" readonly>
								  </div>
								  <div class="form-group col-md-3">
									<label for="netGstrReportEndDate">End Date</label>
									<input type="text" class="form-control datepicker" id="netGstrReportEndDate" value="<?php echo date('Y-m-d');?>" name="netGstrReportEndDate" readonly>
								  </div>
							  </div>
							  <button type="button" id="showNetGstrReport" class="btn btn-dark">Show Report</button>
							  <button type="reset" id="netGstrFilterClear" class="btn">Clear</button>
							</form>
							<br><br>


				  </div>
   			</div>
		</div>
					</div>
				</div>
<?php
	require 'inc/footer.php';
?>
</body>