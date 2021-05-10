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

<div class="tab-content">
					
						<div id="customerReportsTab" class="container-fluid tab-pane active">
							<br>
							<p>Use the grid below to get reports for customers</p>
							<div class="table-responsive" id="customerReportsTableDiv"></div>
						</div>
</div>
<?php
	require 'inc/footer.php';
?>
</body>