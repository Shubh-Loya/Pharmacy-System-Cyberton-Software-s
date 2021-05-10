<?php
	require_once('inc/config/constants.php');
	require_once('inc/config/db.php');
    $uPrice = 0;
	  $qty = 0;
    // $discount = 0;
	  $MonthyPurchase = 0;
    $uPriceSale = 0;
	  $qtySale = 0;
    $discountSale = 0;
    $MonthySale = 0;
    $date = date('Y-m-d');
    $month = date('F', strtotime($date));
    // Return current date from the remote server
    $startDate = date('Y-m-01'); 
    $endDate = date('Y-m-t');

    
    //Calculate total price for purchases
    $purchaseSql = 'SELECT * FROM purchase WHERE purchaseDate BETWEEN :startDate AND :endDate';
    $purchase = $conn->prepare($purchaseSql);
    $purchase->execute(['startDate' => $startDate, 'endDate' => $endDate]);

    while($row = $purchase->fetch(PDO::FETCH_ASSOC)){
        $uPrice = $row['unitPrice'];
        $qty = $row['quantity'];
        // $discount = $row['discount'];
	    	// $totalPrice = $totalPrice + ($uPrice * $qty * ((100 - $discount)/100));
        $MonthyPurchase = $MonthyPurchase + ($uPrice * $qty);

    } 

      //Calculate total price for sales
      $saleSql = 'SELECT * FROM sale WHERE saleDate BETWEEN :startDate AND :endDate';
      $sale = $conn->prepare($saleSql);
      $sale->execute(['startDate' => $startDate, 'endDate' => $endDate]);
  
      while($row = $sale->fetch(PDO::FETCH_ASSOC)){
          $uPriceSale = $row['unitPrice'];
          $qtySale = $row['quantity'];
          $discountsSale = $row['discount'];
          $MonthySale = $MonthySale + ($uPriceSale * $qtySale * ((100 - $discountSale)/100));
  
      } 
?>