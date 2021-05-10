<?php
	require_once('inc/config/constants.php');
	require_once('inc/config/db.php');

    $uPrice = 0;
	  $qty = 0;
    // $discount = 0;
	  $totalPricePurchase = 0;
    $uPriceSale = 0;
	  $qtySale = 0;
    $discountSale = 0;
    $totalPriceSale = 0;

    // Return current date from the remote server
    $date = date('Y-m-d');
    $startDate = $date; 
    
    //Calculate total price for purchases
    $purchaseSql = 'SELECT * FROM purchase WHERE purchaseDate = :startDate';
    $purchase = $conn->prepare($purchaseSql);
    $purchase->execute(['startDate' => $startDate]);

    while($row = $purchase->fetch(PDO::FETCH_ASSOC)){
        $uPrice = $row['unitPrice'];
        $qty = $row['quantity'];
        // $discount = $row['discount'];
	    	// $totalPrice = $totalPrice + ($uPrice * $qty * ((100 - $discount)/100));
        $totalPricePurchase = $totalPricePurchase + ($uPrice * $qty);

    } 

      //Calculate total price for sales
      $saleSql = 'SELECT * FROM sale WHERE saleDate = :startDate';
      $sale = $conn->prepare($saleSql);
      $sale->execute(['startDate' => $startDate]);
  
      while($row = $sale->fetch(PDO::FETCH_ASSOC)){
          $uPriceSale = $row['unitPrice'];
          $qtySale = $row['quantity'];
          $discountsSale = $row['discount'];
          $totalPriceSale = $totalPriceSale + ($uPriceSale * $qtySale * ((100 - $discountSale)/100));
  
      } 
?>