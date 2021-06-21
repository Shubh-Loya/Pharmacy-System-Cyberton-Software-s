<?php
	require_once('inc/config/constants.php');
	require_once('inc/config/db.php');

    $uPrice = 0;
	  $qty = 0;
    // $discount = 0;
	$MonthlyPurchase = array();
    $index = 0;
    $uPriceSale = 0;
	$qtySale = 0;
    $discountSale = 0;
    $MonthlySale = array();

    //Return current month
    $currentMonth=date('m');
  
    $startingMonth = "01";
    $MonthlyPurchase[0] = 0;
   
    
    while($startingMonth <= $currentMonth)
    {   
        $startDate = date('Y') . '-' . $startingMonth . '-01'; 
        $endDate = date('Y') . '-' . $startingMonth . '-' . date('t');
        
        //Calculate total price for purchases
        $purchaseSql = 'SELECT * FROM purchase WHERE purchaseDate BETWEEN :startDate AND :endDate';
        $purchase = $conn->prepare($purchaseSql);
        $purchase->execute(['startDate' => $startDate, 'endDate' => $endDate]);

        while($row = $purchase->fetch(PDO::FETCH_ASSOC)){
            $uPrice = $row['unitPrice'];
            $qty = $row['quantity'];
            // $discount = $row['discount'];
            // $totalPrice = $totalPrice + ($uPrice * $qty * ((100 - $discount)/100));
            //print_r($MonthlyPurchase);
            // $MonthlyPurchase[$index] = $MonthlyPurchase[$index] + ($uPrice * $qty);
            $MonthlyPurchase[$index] = ($MonthlyPurchase[$index] ?? 0) + ($uPrice * $qty);
            
        } 

        // Calculate total price for sales
        $saleSql = 'SELECT * FROM sale WHERE saleDate BETWEEN :startDate AND :endDate';
        $sale = $conn->prepare($saleSql);
        $sale->execute(['startDate' => $startDate, 'endDate' => $endDate]);
    
        while($row = $sale->fetch(PDO::FETCH_ASSOC)){
            $uPriceSale = $row['unitPrice'];
            $qtySale = $row['quantity'];
            $discountSale = $row['discount'];
            $MonthlySale[$index] = ($MonthlySale[$index] ?? 0)+ ($uPriceSale * $qtySale * ((100 - $discountSale)/100));
    
        } 
        $index++;
        $startingMonth++;
    }
    $Months = array('Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec');
    $graph = array(['Month', 'Sales', 'Purchases']);
    $arrayLength = count($MonthlyPurchase);
    for($i=0; $i <= $arrayLength; $i++)
    {
        $eachPlot = array($Months[$i], $MonthlySale[$i] ?? null, $MonthlyPurchase[$i] ?? null);
        array_push($graph, $eachPlot);
    }
    
?>


<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);
      var graph = <?php echo json_encode($graph); ?>;
      
      console.log(graph);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(
          graph
        );

        var options = {
          chart: {
            title: 'Monthly Performance',
            subtitle: 'Sales, Purchase : current year',
          },
          bars: 'vertical' 
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>
  </head>
  <body>
    <div id="barchart_material" style="width: 900px; height: 500px;"></div>
  </body>
</html>
