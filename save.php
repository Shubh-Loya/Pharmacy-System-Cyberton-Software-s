<?php
$con=mysqli_connect("localhost","root","","shop_inventory");
if (mysqli_connect_errno()){
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$ProductnameArr = json_decode($_POST["itemName"]);
$InvoiceArr = json_decode($_POST["invoiceNumber"]);
$QuantityArr = json_decode($_POST["quantity"]);
$UnitPriceArr = json_decode($_POST["unitPrice"]);
$Total_PriceArr = json_decode($_POST["totalPrice"]);

for ($i = 0; $i < count($ProductnameArr); $i++) {
	if(($ProductnameArr[$i] != "")){ /*not allowing empty values and the row which has been removed.*/
		$sql="INSERT INTO purchase (itemName, invoiceNumber, quantity, unitPrice, totalPrice) VALUES ('$ProductnameArr[$i]', '$InvoiceArr[$i]','$QuantityArr[$i]','$UnitPriceArr[$i]','$Total_PriceArr[$i]')";
		if (!mysqli_query($con,$sql)){
			die('Error: ' . mysqli_error($con));
		}
	}
}
Print "Data added Successfully !";
mysqli_close($con);
?>