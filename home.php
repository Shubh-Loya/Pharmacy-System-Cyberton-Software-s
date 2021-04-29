<!DOCTYPE html>
<html lang="en">
<head>
	<title>Sanjeevani Medicals</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">

    <!-- Bootstrap core CSS -->
  <link href="req/bootstrap/css/bootstrap.min.css" rel="stylesheet">


    <!-- Font Awesome CSS -->
    <link href="https://use.fontawesome.com/releases/v5.0.3/css/all.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Raleway:wght@200&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">

    <!-- Load style.css -->
    <link rel="stylesheet" type="text/css" href="dashboard/style.css">

</head>
<body>

<div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Sanjeevani Medicals </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light "><i class="fa fa-home"></i> Dashboard</a>
	<a href="index.php" class="list-group-item list-group-item-action bg-light"><i class="fas fa-folder-open"></i> Inventory</a>
        <a href="#" class="list-group-item list-group-item-action bg-light"><i class="fa fa-user"></i> About Us</a>
        <a href="#" class="list-group-item list-group-item-action bg-light"><i class="fas fa-phone-volume"></i> Contact Us</a>
	<a href="model/login/logout.php" class="list-group-item list-group-item-action bg-light"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">

      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn btn-primary" id="menu-toggle"><i class="fa fa-align-justify"></i></button>
	 <img src="dashboard/logo-text.png" alt="Sanjeevani Medicals">
      </nav>
      <!-- Start Jumbotron -->

<div id="jumbotron" class="jumbotron jumbotron-fluid">
	<div class="container">
	  <h1 class="display-4 text-white"><i class="fas fa-cogs"></i> Dashboard</h1>
	</div>
</div>

<!-- End Jumbotron -->

<br>
     <!-- Start Main Container -->
<div id="main" class="container">

<!-- Featured Card -->
  <div class="card">
      <div class="card-header text-white datPinkColor" style="font-family: Open Sans;">
      Featured
      </div>
      <div class="card-body">
         <blockquote class="blockquote mb-0">
          <!-- Column -->
          <div class="row">
          <div class="col-3">
              <div class="card text-center bg-primary">
            <div class="card-body box1">
                <h3 class="card-text"><i class="fas fa-sort-amount-up"></i> </h3>
                <h5>Sales</h5>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card text-center bg-success">
            <div class="card-body box2">
                <h3 class="card-text"><i class="fas fa-cart-plus"></i> </h3>
                <h5>Purchases</h5>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card text-center bg-warning">
            <div class="card-body box3">
                <h3 class="card-text"><i class="fa fa-database"></i> </h3>
                <h5>Vendor</h5>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card text-center bg-danger">
            <div class="card-body box4">
                <h3 class="card-text"><i class="fas fa-chart-bar"></i> </h3>
                <h5>Reports</h5>
            </div>
          </div>
        </div>
        </div>

        <!-- End Column -->
        </blockquote>
      </div>


<!-- Left Row -->
<div class="row">

<!-- First Left Column -->
<div class="col-lg-3">

  <ul class="list-group">
      <li class="list-group-item active datPinkColor" style="font-family: Open Sans;background-color: #a6a0a04a !important;border-color: black;">Overview</li>
      <a href="sales.php" class="list-group-item list-group-item-action bg-light"><i class="fas fa-print"></i> Sales Bills</a>
      <a href="purchase.php" class="list-group-item list-group-item-action bg-light"><i class="fas fa-list-alt"></i> Purchase Bills</a>
      <a href="#" class="list-group-item list-group-item-action bg-light"><i class="fas fa-rupee-sign"></i> Payments & Receipts</a>
      <a href="#" class="list-group-item list-group-item-action bg-light"><i class="fa fa-medkit"></i> Medicines Available</a>
      <a href="#" class="list-group-item list-group-item-action bg-light"><i class="fas fa-users"></i> Customer Information</a>
      <a href="#" class="list-group-item list-group-item-action bg-light"><i class="fas fa-edit"></i> Tax Handling</a>
  </ul>

</div>


<div class="col-lg-6">


  <div class="card">
      <div class="card-header text-white datPinkColor" style="font-family: Open Sans;">
      New Users
      </div>
      <div class="card-body">
         <blockquote class="blockquote mb-0">
         <!-- Table -->
         <table class="table table-bordered table-striped">
          <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Cell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>User 1</td>
                <td>user1@gmail.com</td>
                <td>012345678</td>
            </tr>
            <tr>
                <td>User 2</td>
                <td>user2@gmail.com</td>
                <td>012345678</td>
            </tr>
            <tr>
              <td>User 3</td>
              <td>user3@gmail.com</td>
              <td>012345678</td>
            </tr>
          </tbody>
      </table>
      <!-- End Table -->
         </blockquote>
    
      </div>
  </div>
</div>
<div class="col-lg-3">
 
<div class="card">
      <div class="card-header text-white datPinkColor" style="font-family: Open Sans;">
      Supplementary Details
      </div>
      <div class="card-body">
    <div class="card-header">Expired Stock</div>
    <div class="card-body">Returned Goods</div> 
    <div class="card-footer">Bounced Payments</div>
  </div>
</div>
  
</div>
  </div>
  <!-- End New Users -->

<!-- End Right Column -->

</div>

<!-- End Main Container -->
    </div>
    <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->



<br>




  <!-- Bootstrap core JavaScript -->
  <script src="req/jquery/jquery.min.js"></script>
  <script src="req/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Menu Toggle Script -->
  <script>
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  </script>

</body>
</html>
