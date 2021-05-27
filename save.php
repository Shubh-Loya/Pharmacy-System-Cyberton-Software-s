<?php
$con=mysqli_connect("localhost","root","","shop_inventory");
if (mysqli_connect_errno()){
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$ProductnameArr = json_decode($_POST["product_name"]);
$InvoiceArr = json_decode($_POST["invoice_number"]);
$QuantityArr = json_decode($_POST["quantity"]);
$UnitPriceArr = json_decode($_POST["unit_price"]);
$Total_PriceArr = json_decode($_POST["total_price"]);

for ($i = 0; $i < count($ProductnameArr); $i++) {
	if(($ProductnameArr[$i] != "")){ /*not allowing empty values and the row which has been removed.*/
		$sql="INSERT INTO purchasedata (product_name, invoice_number, quantity, unit_price, total_price) VALUES ('$ProductnameArr[$i]','$InvoiceArr[$i]','$QuantityArr[$i]','$UnitPriceArr[$i]','$Total_PriceArr[$i]')";
		if (!mysqli_query($con,$sql)){
			die('Error: ' . mysqli_error($con));
		}
	}
}
Print "Data added Successfully !";
mysqli_close($con);
?>