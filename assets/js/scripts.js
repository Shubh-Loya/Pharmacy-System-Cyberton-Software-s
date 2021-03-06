// File that creates the purchase details search table
purchaseDetailsSearchTableCreatorFile =
  "model/purchase/purchaseDetailsSearchTableCreator.php";

// File that creates the customer details search table
customerDetailsSearchTableCreatorFile =
  "model/customer/customerDetailsSearchTableCreator.php";

// File that creates the item details search table
itemDetailsSearchTableCreatorFile =
  "model/item/itemDetailsSearchTableCreator.php";

// File that creates the vendor details search table
vendorDetailsSearchTableCreatorFile =
  "model/vendor/vendorDetailsSearchTableCreator.php";

// File that creates the sale details search table
saleDetailsSearchTableCreatorFile =
  "model/sale/saleDetailsSearchTableCreator.php";

// File that creates the purchase reports search table
purchaseReportsSearchTableCreatorFile =
  "model/purchase/purchaseReportsSearchTableCreator.php";

// File that creates the customer reports search table
customerReportsSearchTableCreatorFile =
  "model/customer/customerReportsSearchTableCreator.php";

// File that creates the item reports search table
itemReportsSearchTableCreatorFile =
  "model/item/itemReportsSearchTableCreator.php";

// File that creates the vendor reports search table
vendorReportsSearchTableCreatorFile =
  "model/vendor/vendorReportsSearchTableCreator.php";

// File that creates the sale reports search table
saleReportsSearchTableCreatorFile =
  "model/sale/saleReportsSearchTableCreator.php";

// File that returns the last inserted vendorID
vendorLastInsertedIDFile = "model/vendor/populateLastVendorID.php";

// File that returns the last inserted customerID
customerLastInsertedIDFile = "model/customer/populateLastCustomerID.php";

// File that returns the last inserted purchaseID
purchaseLastInsertedIDFile =
  "model/purchase/populateLastPurchaseIDForPurchaseTab.php";

// File that returns the last inserted saleID
saleLastInsertedIDFile = "model/sale/populateLastSaleIDForSaleTab.php";

// File that returns the last inserted productID for item details tab
itemLastInsertedIDFile = "model/item/populateLastProductID.php";

// File that returns purchaseIDs
showPurchaseIDSuggestionsFile = "model/purchase/showPurchaseIDs.php";

// File that returns saleIDs
showSaleIDSuggestionsFile = "model/sale/showSaleIDs.php";

// File that returns paymentIDs
showPaymentIDSuggestionsFile = "model/payment/showPaymentIDs.php";

// File that returns vendorIDs
showVendorIDSuggestionsFile = "model/vendor/showVendorIDs.php";

// File that returns customerIDs
showCustomerIDSuggestionsFile = "model/customer/showCustomerIDs.php";

// File that returns customerIDs for sale tab
showCustomerIDSuggestionsForSaleTabFile =
  "model/customer/showCustomerIDsForSaleTab.php";

// File that returns customerIDs for sale tab
showCustomerNameSuggestionsForSaleTabFile =
  "model/customer/showCustomerNameForSaleTab.php";

// File that returns itemNumbers
showItemNumberSuggestionsFile = "model/item/showItemNumber.php";

// File that returns itemNumbers in image tab
showItemNumberSuggestionsForImageTabFile =
  "model/item/showItemNumberForImageTab.php";

// File that returns itemNumbers for purchase tab
showItemNumberForPurchaseTabFile =
  "model/item/showItemNumberForPurchaseTab.php";

// File that returns itemNames for purchase tab
showItemNameForPurchaseTabFile = "model/item/showItemNameForPurchaseTab.php";

// File that returns batchNumber for purchase tab
showBatchNumberFile = "model/purchase/showBatchNumber.php";

// File that returns itemNumbers for sale tab
showItemNumberForSaleTabFile = "model/item/showItemNumberForSaleTab.php";

// File that returns itemNames for sale tab
showItemNameForSaleTabFile = "model/item/showItemNameForSaleTab.php";

// File that returns batchNumber for sale tab
showBatchNumberForSaleTabFile = "model/sale/showBatchNumberforSaleTab.php"

// File that returns itemNames for image tab
showItemNameForImageTabFile = "model/item/showItemNameForImageTab.php";

// File that returns itemNames
showItemNamesFile = "model/item/showItemNames.php";

// File that returns stock
getItemStockFile = "model/item/getItemStock.php";

// File that returns stock
getItemsStockFile = "model/item/getItemsStock.php";

// File that returns item name
getItemNameFile = "model/item/getItemName.php";

// File that returns item number
getItemNumberFile = "model/item/getItemNumber.php";

// File that updates an image
updateImageFile = "model/image/updateImage.php";

// File that deletes an image
deleteImageFile = "model/image/deleteImage.php";

// File that creates the filtered purchase report table
purchaseFilteredReportCreatorFile =
  "model/purchase/purchaseFilteredReportTableCreator.php";

// File that creates the filtered sale report table
saleFilteredReportCreatorFile = "model/sale/saleFilteredReportTableCreator.php";

$(document).ready(function () {
  // Style the dropdown boxes. You need to explicitly set the width
  // in order to fix the dropdown box not visible issue when tab is hidden
  $(".chosenSelect").chosen({ width: "95%" });

  // Initiate tooltips
  $(".invTooltip").tooltip();

  // Listen to customer add button
  $("#addCustomer").on("click", function () {
    addCustomer();
  });

  // Listen to vendor add button
  $("#addVendor").on("click", function () {
    addVendor();
  });

  // Listen to item add button
  $("#addItem").on("click", function () {
    addItem();
  });

  // Listen to purchase add button
  $("#addPurchase").on("click", function () {
    addPurchase();
  });

  // Listen to sale add button
  $("#addSaleButton").on("click", function () {
    addSale();
  });

  // Listen to payments add button
  $("#addPayment").on("click", function () {
    addPayment();
  });

  // Listen to receipts add button
  $("#addReceipt").on("click", function () {
    addReceipt();
  });

  // Listen to update button in item details tab
  $("#updateItemDetailsButton").on("click", function () {
    updateItem();
  });

  // Listen to update button in customer details tab
  $("#updateCustomerDetailsButton").on("click", function () {
    updateCustomer();
  });

  // Listen to update button in vendor details tab
  $("#updateVendorDetailsButton").on("click", function () {
    updateVendor();
  });

  // Listen to update button in purchase details tab
  $("#updatePurchaseDetailsButton").on("click", function () {
    updatePurchase();
  });

  // Listen to update button in sale details tab
  $("#updateSaleDetailsButton").on("click", function () {
    updateSale();
  });
  
  // Listen to update button in payment details tab
   $("#updatePaymentButton").on("click", function () {
     console.log("click");
    updatePayment();
  });

  // Listen to update button in receiptdetails tab
   $("#updateReceiptButton").on("click", function () {
     console.log("click");
    updateReceipt();
  });

  // Listen to delete button in payment details tab
   $("#deletePayment").on("click", function () {
    // Confirm before deleting
    bootbox.confirm("Are you sure you want to delete?", function (result) {
      if (result) {
        deletePayment();
      }
    });
  });

  // Listen to delete button in receipt details tab
   $("#deleteReceipt").on("click", function () {
    // Confirm before deleting
    bootbox.confirm("Are you sure you want to delete?", function (result) {
      if (result) {
        deleterReceipt();
      }
    });
  });

  // Listen to delete button in item details tab
  $("#deleteItem").on("click", function () {
    // Confirm before deleting
    bootbox.confirm("Are you sure you want to delete?", function (result) {
      if (result) {
        deleteItem();
      }
    });
  });

  // Listen to delete button in customer details tab
  $("#deleteCustomerButton").on("click", function () {
    // Confirm before deleting
    bootbox.confirm("Are you sure you want to delete?", function (result) {
      if (result) {
        deleteCustomer();
      }
    });
  });

  // Listen to delete button in vendor details tab
  $("#deleteVendorButton").on("click", function () {
    // Confirm before deleting
    bootbox.confirm("Are you sure you want to delete?", function (result) {
      if (result) {
        deleteVendor();
      }
    });
  });

  // Listen to batch number text box in purchase details tab
  $("#purchaseDetailsBatchNumber").on("click", function () {
    showSuggestion(
      showBatchNumberFile,
      "purchaseDetailsBatchNumberSuggestionsDiv"
    );
  });

  // Remove the item names suggestions dropdown in the purchase details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#purchaseDetailsBatchNumberSuggestionsList li",
    function () {
      $("#purchaseDetailsBatchNumber").val($(this).text());
      $("#purchaseDetailsBatchNumberSuggestionsList").fadeOut();
      getItemsDetailsToPopulate();
    }
  );

  // Listen to item name text box in item details tab
  $("#itemDetailsItemName").keyup(function () {
    showSuggestions(
      "itemDetailsItemName",
      showItemNamesFile,
      "itemDetailsItemNameSuggestionsDiv"
    );
  });

  // Remove the item names suggestions dropdown in the item details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#itemDetailsItemNamesSuggestionsList li",
    function () {
      $("#itemDetailsItemName").val($(this).text());
      $("#itemDetailsItemNamesSuggestionsList").fadeOut();
      getItemsDetailsToPopulate();
    }
  );

  // Listen to item number text box in item details tab
  $("#itemDetailsItemNumber").keyup(function () {
    showSuggestions(
      "itemDetailsItemNumber",
      showItemNumberSuggestionsFile,
      "itemDetailsItemNumberSuggestionsDiv"
    );
  });

  // Remove the item numbers suggestions dropdown in the item details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#itemDetailsItemNumberSuggestionsList li",
    function () {
      $("#itemDetailsItemNumber").val($(this).text());
      $("#itemDetailsItemNumberSuggestionsList").fadeOut();
      getItemDetailsToPopulate();
    }
  );

  // Listen to item name text box in sale details tab
  $("#saleDetailsItemName").keyup(function () {
    showSuggestions(
      "saleDetailsItemName",
      showItemNameForSaleTabFile,
      "saleDetailsItemNameSuggestionsDiv"
    );
  });

  // Remove the item names suggestions dropdown in the sale details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#saleDetailsItemNameSuggestionsList li",
    function () {
      $("#saleDetailsItemName").val($(this).text());
      $("#saleDetailsItemNameSuggestionsList").fadeOut();
      getItemsDetailsToPopulateForSaleTab();
    }
  );

  // Listen to item number text box in sale details tab
  $("#saleDetailsItemNumber").keyup(function () {
    showSuggestions(
      "saleDetailsItemNumber",
      showItemNumberForSaleTabFile,
      "saleDetailsItemNumberSuggestionsDiv"
    );
  });

  // Remove the item numbers suggestions dropdown in the sale details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#saleDetailsItemNumberSuggestionsList li",
    function () {
      $("#saleDetailsItemNumber").val($(this).text());
      $("#saleDetailsItemNumberSuggestionsList").fadeOut();
      getItemDetailsToPopulateForSaleTab();
    }
  );

  // Listen to batch number text box in sale details tab
    $("#saleDetailsBatchNumber").on("click", function () {
      showSuggestionforSale(
        showBatchNumberForSaleTabFile,
        "saleDetailsBatchNumberSuggestionsDiv"
      );
    });
  
  // Remove the item names suggestions dropdown in the sale details tab
  // when user selects an item from it
    $(document).on(
      "click",
      "#saleDetailsBatchNumberSuggestionsList li",
      function () {
        $("#saleDetailsBatchNumber").val($(this).text());
        $("#saleDetailsBatchNumberSuggestionsList").fadeOut();
        getItemsDetailsToPopulate();
      }
    );

  // Listen to item name text box in item image tab
  $("#itemImageItemName").keyup(function () {
    showSuggestions(
      "itemImageItemName",
      showItemNameForImageTabFile,
      "itemImageItemNameSuggestionsDiv"
    );
  });

  // Remove the item names suggestions dropdown in the item image tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#itemImageDetailsItemNameSuggestionsList li",
    function () {
      $("#itemImageItemName").val($(this).text());
      $("#itemImageDetailsItemNameSuggestionsList").fadeOut();
      getItemNumber(
        "itemImageItemName",
        getItemNumberFile,
        "itemImageItemNumber"
      );
    }
  );

  // Listen to item number text box in item image tab
  $("#itemImageItemNumber").keyup(function () {
    showSuggestions(
      "itemImageItemNumber",
      showItemNumberSuggestionsForImageTabFile,
      "itemImageItemNumberSuggestionsDiv"
    );
  });

  // Remove the item numbers suggestions dropdown in the item image tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#itemImageItemNumberSuggestionsList li",
    function () {
      $("#itemImageItemNumber").val($(this).text());
      $("#itemImageItemNumberSuggestionsList").fadeOut();
      getItemName("itemImageItemNumber", getItemNameFile, "itemImageItemName");
    }
  );

  // Clear the image from item tab when Clear button is clicked
   $("#itemClear").on("click", function () {
    $("#imageContainer").empty();
    document.getElementById("itemDetailsMessage").style.display = "none";
  });

  // Clear the image from sale tab when Clear button is clicked
  $("#saleClear").on("click", function () {
    $("#saleDetailsImageContainer").empty();
    document.getElementById("saleDetailsMessage").style.display = "none";
  });
  
  // Clear the payment from payment tab when Clear button is clicked
  $("#paymentClear").on("click", function () {
    // $("#saleDetailsImageContainer").empty();
    document.getElementById("paymentDetailsMessage").style.display = "none";
  });

  // Clear the receipt from receipt tab when Clear button is clicked
  $("#receiptClear").on("click", function () {
    // $("#saleDetailsImageContainer").empty();
    document.getElementById("receiptDetailsMessage").style.display = "none";
  });

  // Refresh the purchase report datatable in the purchase report tab when Clear button is clicked
  $("#purchaseFilterClear").on("click", function () {
    reportsPurchaseTableCreator(
      "purchaseReportsTableDiv",
      purchaseReportsSearchTableCreatorFile,
      "purchaseReportsTable"
    );
  });

  // Refresh the sale report datatable in the sale report tab when Clear button is clicked
  $("#saleFilterClear").on("click", function () {
    reportsSaleTableCreator(
      "saleReportsTableDiv",
      saleReportsSearchTableCreatorFile,
      "saleReportsTable"
    );
  });

  // Listen to item name text box in purchase details tab
  $("#purchaseDetailsItemName").keyup(function () {
    showSuggestions(
      "purchaseDetailsItemName",
      showItemNameForPurchaseTabFile,
      "purchaseDetailsItemNameSuggestionsDiv"
    );
  });

  // Remove the item names suggestions dropdown in the purchase details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#purchaseDetailsItemNameSuggestionsList li",
    function () {
      $("#purchaseDetailsItemName").val($(this).text());
      $("#purchaseDetailsItemNameSuggestionsList").fadeOut();

      // Display the item number for the selected item name
      getItemNumber(
        "purchaseDetailsItemName",
        getItemNumberFile,
        "purchaseDetailsItemNumber"
      );
      // Display the current stock for the selected item name
      getItemsStockToPopulate(
        "purchaseDetailsItemName",
        getItemsStockFile,
        "purchaseDetailsCurrentStock",
        "purchaseDetailsUnitPrice",
        "purchaseDetailsMRP",
        "purchaseDetailsGST"
      );
    }
  );

  // Listen to item number text box in purchase details tab
  $("#purchaseDetailsItemNumber").keyup(function () {
    showSuggestions(
      "purchaseDetailsItemNumber",
      showItemNumberForPurchaseTabFile,
      "purchaseDetailsItemNumberSuggestionsDiv"
    );
  });

  // remove the item numbers suggestions dropdown in the purchase details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#purchaseDetailsItemNumberSuggestionsList li",
    function () {
      $("#purchaseDetailsItemNumber").val($(this).text());
      $("#purchaseDetailsItemNumberSuggestionsList").fadeOut();

      // Display the item name for the selected item number
      getItemName(
        "purchaseDetailsItemNumber",
        getItemNameFile,
        "purchaseDetailsItemName"
      );

      // Display the current stock for the selected item number
      getItemStockToPopulate(
        "purchaseDetailsItemNumber",
        getItemStockFile,
        "purchaseDetailsCurrentStock"
      );
    }
  );

  // Listen to CustomerID text box in customer details tab
  $("#customerDetailsCustomerID").keyup(function () {
    showSuggestions(
      "customerDetailsCustomerID",
      showCustomerIDSuggestionsFile,
      "customerDetailsCustomerIDSuggestionsDiv"
    );
  });

  // Remove the CustomerID suggestions dropdown in the customer details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#customerDetailsCustomerIDSuggestionsList li",
    function () {
      $("#customerDetailsCustomerID").val($(this).text());
      $("#customerDetailsCustomerIDSuggestionsList").fadeOut();
      getCustomerDetailsToPopulate();
    }
  );

  // Listen to CustomerName text box in sale details tab
  $("#saleDetailsCustomerName").keyup(function () {
    showSuggestions(
      "saleDetailsCustomerName",
      showCustomerNameSuggestionsForSaleTabFile,
      "saleDetailsCustomerNameSuggestionsDiv"
    );
  });

  // Remove the CustomerName suggestions dropdown in the sale details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#saleDetailsCustomerNameSuggestionsList li",
    function () {
      $("#saleDetailsCustomerName").val($(this).text());
      $("#saleDetailsCustomerNameSuggestionsList").fadeOut();
      getCustomersDetailsToPopulateSaleTab();
    }
  );

  // Listen to CustomerID text box in sale details tab
  $("#saleDetailsCustomerID").keyup(function () {
    showSuggestions(
      "saleDetailsCustomerID",
      showCustomerIDSuggestionsForSaleTabFile,
      "saleDetailsCustomerIDSuggestionsDiv"
    );
  });

  // Remove the CustomerID suggestions dropdown in the sale details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#saleDetailsCustomerIDSuggestionsList li",
    function () {
      $("#saleDetailsCustomerID").val($(this).text());
      $("#saleDetailsCustomerIDSuggestionsList").fadeOut();
      getCustomerDetailsToPopulateSaleTab();
    }
  );

  // Listen to VendorID text box in vendor details tab
  $("#vendorDetailsVendorID").keyup(function () {
    showSuggestions(
      "vendorDetailsVendorID",
      showVendorIDSuggestionsFile,
      "vendorDetailsVendorIDSuggestionsDiv"
    );
  });

  // Remove the VendorID suggestions dropdown in the vendor details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#vendorDetailsVendorIDSuggestionsList li",
    function () {
      $("#vendorDetailsVendorID").val($(this).text());
      $("#vendorDetailsVendorIDSuggestionsList").fadeOut();
      getVendorDetailsToPopulate();
    }
  );

  // Listen to PurchaseID text box in purchase details tab
  $("#purchaseDetailsPurchaseID").keyup(function () {
    showSuggestions(
      "purchaseDetailsPurchaseID",
      showPurchaseIDSuggestionsFile,
      "purchaseDetailsPurchaseIDSuggestionsDiv"
    );
  });

  // Remove the PurchaseID suggestions dropdown in the customer details tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#purchaseDetailsPurchaseIDSuggestionsList li",
    function () {
      $("#purchaseDetailsPurchaseID").val($(this).text());
      $("#purchaseDetailsPurchaseIDSuggestionsList").fadeOut();
      console.log("Hi");
      getPurchaseDetailsToPopulate();
    }
  );
  
  // Listen to PaymentID text box in payment and receipts tab
  $("#paymentDetailsPaymentID").on("click", function () {
    console.log("xyz");
    showSuggestionPayment(
      "paymentDetailsPaymentID",
      showPaymentIDSuggestionsFile,
      "paymentDetailsPaymentIDSuggestionsDiv"
    );
  });

  // Remove the PaymentID suggestions dropdown in the payment and receipts tab
  // when user selects an item from it
  $(document).on(
    "click",
    "#paymentDetailsPaymentIDSuggestionsList li",
    function () {
      $("#paymentDetailsPaymentID").val($(this).text());
      $("#paymentDetailsPaymentIDSuggestionsList").fadeOut();
      getPaymentDetailsToPopulate();
    }
  );

  // Listen to saleID text box in sale details tab
  $("#saleDetailsSaleID").keyup(function () {
    showSuggestions(
      "saleDetailsSaleID",
      showSaleIDSuggestionsFile,
      "saleDetailsSaleIDSuggestionsDiv"
    );
  });

  // Remove the SaleID suggestions dropdown in the sale details tab
  // when user selects an item from it
  $(document).on("click", "#saleDetailsSaleIDSuggestionsList li", function () {
    $("#saleDetailsSaleID").val($(this).text());
    $("#saleDetailsSaleIDSuggestionsList").fadeOut();
    getSaleDetailsToPopulate();
  });

  // Listen to image update button
  $("#updateImageButton").on("click", function () {
    processImage("imageForm", updateImageFile, "itemImageMessage");
  });

  // Listen to image delete button
  $("#deleteImageButton").on("click", function () {
    processImage("imageForm", deleteImageFile, "itemImageMessage");
  });

  // Initiate datepickers
  $(".datepicker").datepicker({
    format: "yyyy-mm-dd",
    todayHighlight: true,
    todayBtn: "linked",
    orientation: "bottom left",
  });

  // Calculate Total in purchase tab
  $("#purchaseDetailsQuantity, #purchaseDetailsUnitPrice, #purchaseDetailsGST, #purchaseDetailsDiscount").change(function () {
    calculateTotalInPurchaseTab();
  });

  // Calculate Total in sale tab
  $("#saleDetailsDiscount, #saleDetailsQuantity, #saleDetailsUnitPrice, #saleDetailsGST").change(
    function () {
      calculateTotalInSaleTab();
    }
  );

  // Close any suggestions lists from the page when a user clicks on the page
  $(document).on("click", function () {
    $(".suggestionsList").fadeOut();
  });

  // Load searchable datatables for customer, purchase, item, vendor, sale
  searchTableCreator(
    "itemDetailsTableDiv",
    itemDetailsSearchTableCreatorFile,
    "itemDetailsTable"
  );
  searchTableCreator(
    "purchaseDetailsTableDiv",
    purchaseDetailsSearchTableCreatorFile,
    "purchaseDetailsTable"
  );
  searchTableCreator(
    "customerDetailsTableDiv",
    customerDetailsSearchTableCreatorFile,
    "customerDetailsTable"
  );
  searchTableCreator(
    "saleDetailsTableDiv",
    saleDetailsSearchTableCreatorFile,
    "saleDetailsTable"
  );
  searchTableCreator(
    "vendorDetailsTableDiv",
    vendorDetailsSearchTableCreatorFile,
    "vendorDetailsTable"
  );

  // Load searchable datatables for customer, purchase, item, vendor, sale reports
  reportsTableCreator(
    "itemReportsTableDiv",
    itemReportsSearchTableCreatorFile,
    "itemReportsTable"
  );
  reportsPurchaseTableCreator(
    "purchaseReportsTableDiv",
    purchaseReportsSearchTableCreatorFile,
    "purchaseReportsTable"
  );
  reportsTableCreator(
    "customerReportsTableDiv",
    customerReportsSearchTableCreatorFile,
    "customerReportsTable"
  );
  reportsSaleTableCreator(
    "saleReportsTableDiv",
    saleReportsSearchTableCreatorFile,
    "saleReportsTable"
  );
  reportsTableCreator(
    "vendorReportsTableDiv",
    vendorReportsSearchTableCreatorFile,
    "vendorReportsTable"
  );

  // Initiate popovers
  $(document).on("mouseover", ".itemDetailsHover", function () {
    // Create item details popover boxes
    $(".itemDetailsHover").popover({
      container: "body",
      title: "Item Details",
      trigger: "hover",
      html: true,
      placement: "right",
      content: fetchData,
    });
  });

  // Listen to refresh buttons
  $("#searchTablesRefresh, #reportsTablesRefresh").on("click", function () {
    searchTableCreator(
      "itemDetailsTableDiv",
      itemDetailsSearchTableCreatorFile,
      "itemDetailsTable"
    );
    searchTableCreator(
      "purchaseDetailsTableDiv",
      purchaseDetailsSearchTableCreatorFile,
      "purchaseDetailsTable"
    );
    searchTableCreator(
      "customerDetailsTableDiv",
      customerDetailsSearchTableCreatorFile,
      "customerDetailsTable"
    );
    searchTableCreator(
      "vendorDetailsTableDiv",
      vendorDetailsSearchTableCreatorFile,
      "vendorDetailsTable"
    );
    searchTableCreator(
      "saleDetailsTableDiv",
      saleDetailsSearchTableCreatorFile,
      "saleDetailsTable"
    );

    reportsTableCreator(
      "itemReportsTableDiv",
      itemReportsSearchTableCreatorFile,
      "itemReportsTable"
    );
    reportsPurchaseTableCreator(
      "purchaseReportsTableDiv",
      purchaseReportsSearchTableCreatorFile,
      "purchaseReportsTable"
    );
    reportsTableCreator(
      "customerReportsTableDiv",
      customerReportsSearchTableCreatorFile,
      "customerReportsTable"
    );
    reportsTableCreator(
      "vendorReportsTableDiv",
      vendorReportsSearchTableCreatorFile,
      "vendorReportsTable"
    );
    reportsSaleTableCreator(
      "saleReportsTableDiv",
      saleReportsSearchTableCreatorFile,
      "saleReportsTable"
    );
  });

  // Listen to purchase report show button
  $("#showPurchaseReport").on("click", function () {
    filteredPurchaseReportTableCreator(
      "purchaseReportStartDate",
      "purchaseReportEndDate",
      purchaseFilteredReportCreatorFile,
      "purchaseReportsTableDiv",
      "purchaseFilteredReportsTable"
    );
  });

  // Listen to sale report show button
  $("#showSaleReport").on("click", function () {
    filteredSaleReportTableCreator(
      "saleReportStartDate",
      "saleReportEndDate",
      saleFilteredReportCreatorFile,
      "saleReportsTableDiv",
      "saleFilteredReportsTable"
    );
  });
});

// Function to fetch data to show in popovers
function fetchData() {
  var fetch_data = "";
  var element = $(this);
  var id = element.attr("id");

  $.ajax({
    url: "model/item/getItemDetailsForPopover.php",
    method: "POST",
    async: false,
    data: { id: id },
    success: function (data) {
      fetch_data = data;
    },
  });
  return fetch_data;
}

// Function to call the script that process imageURL in DB
function processImage(imageFormID, scriptPath, messageDivID) {
  var form = $("#" + imageFormID)[0];
  var formData = new FormData(form);
  $.ajax({
    url: scriptPath,
    method: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: function (data) {
      $("#" + messageDivID).html(data);
    },
  });
}

// Function to create searchable datatables for customer, item, purchase, sale
function searchTableCreator(tableContainerDiv, tableCreatorFileUrl, table) {
  var tableContainerDivID = "#" + tableContainerDiv;
  var tableID = "#" + table;
  $(tableContainerDivID).load(tableCreatorFileUrl, function () {
    // Initiate the Datatable plugin once the table is added to the DOM
    $(tableID).DataTable();
  });
}

// Function to create reports datatables for customer, item, purchase, sale
function reportsTableCreator(tableContainerDiv, tableCreatorFileUrl, table) {
  var tableContainerDivID = "#" + tableContainerDiv;
  var tableID = "#" + table;
  $(tableContainerDivID).load(tableCreatorFileUrl, function () {
    // Initiate the Datatable plugin once the table is added to the DOM
    $(tableID).DataTable({
      dom: "lBfrtip",
      //dom: 'lfBrtip',
      //dom: 'Bfrtip',
      buttons: [
        "copy",
        "csv",
        "excel",
        { extend: "pdf", orientation: "landscape", pageSize: "LEGAL" },
        "print",
      ],
    });
  });
}

// Function to create reports datatables for purchase
function reportsPurchaseTableCreator(
  tableContainerDiv,
  tableCreatorFileUrl,
  table
) {
  var tableContainerDivID = "#" + tableContainerDiv;
  var tableID = "#" + table;
  $(tableContainerDivID).load(tableCreatorFileUrl, function () {
    // Initiate the Datatable plugin once the table is added to the DOM
    $(tableID).DataTable({
      dom: "lBfrtip",
      buttons: [
        "copy",
        { extend: "csv", footer: true, title: "Purchase Report" },
        { extend: "excel", footer: true, title: "Purchase Report" },
        {
          extend: "pdf",
          footer: true,
          orientation: "landscape",
          pageSize: "LEGAL",
          title: "Purchase Report",
        },
        { extend: "print", footer: true, title: "Purchase Report" },
      ],
      footerCallback: function (row, data, start, end, display) {
        var api = this.api(),
          data;

        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
          return typeof i === "string"
            ? i.replace(/[\$,]/g, "") * 1
            : typeof i === "number"
            ? i
            : 0;
        };

        // Quantity total over all pages
        quantityTotal = api
          .column(6)
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Quantity for current page
        quantityFilteredTotal = api
          .column(6, { page: "current" })
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Unit price total over all pages
        unitPriceTotal = api
          .column(7)
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Unit price for current page
        unitPriceFilteredTotal = api
          .column(7, { page: "current" })
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Full price total over all pages
        fullPriceTotal = api
          .column(8)
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Full price for current page
        fullPriceFilteredTotal = api
          .column(8, { page: "current" })
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Update footer columns
        $(api.column(6).footer()).html(
          quantityFilteredTotal + " (" + quantityTotal + " total)"
        );
        $(api.column(7).footer()).html(
          unitPriceFilteredTotal + " (" + unitPriceTotal + " total)"
        );
        $(api.column(8).footer()).html(
          fullPriceFilteredTotal + " (" + fullPriceTotal + " total)"
        );
      },
    });
  });
}

// Function to create reports datatables for sale
function reportsSaleTableCreator(
  tableContainerDiv,
  tableCreatorFileUrl,
  table
) {
  var tableContainerDivID = "#" + tableContainerDiv;
  var tableID = "#" + table;
  $(tableContainerDivID).load(tableCreatorFileUrl, function () {
    // Initiate the Datatable plugin once the table is added to the DOM
    $(tableID).DataTable({
      dom: "lBfrtip",
      buttons: [
        "copy",
        { extend: "csv", footer: true, title: "Sale Report" },
        { extend: "excel", footer: true, title: "Sale Report" },
        {
          extend: "pdf",
          footer: true,
          orientation: "landscape",
          pageSize: "LEGAL",
          title: "Sale Report",
        },
        { extend: "print", footer: true, title: "Sale Report" },
      ],
      footerCallback: function (row, data, start, end, display) {
        var api = this.api(),
          data;

        // Remove the formatting to get integer data for summation
        var intVal = function (i) {
          return typeof i === "string"
            ? i.replace(/[\$,]/g, "") * 1
            : typeof i === "number"
            ? i
            : 0;
        };

        // Quantity Total over all pages
        quantityTotal = api
          .column(7)
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Quantity Total over this page
        quantityFilteredTotal = api
          .column(7, { page: "current" })
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Unit price Total over all pages
        unitPriceTotal = api
          .column(8)
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Unit price total over current page
        unitPriceFilteredTotal = api
          .column(8, { page: "current" })
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Full price Total over all pages
        fullPriceTotal = api
          .column(9)
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Full price total over current page
        fullPriceFilteredTotal = api
          .column(9, { page: "current" })
          .data()
          .reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0);

        // Update footer columns
        $(api.column(7).footer()).html(
          quantityFilteredTotal + " (" + quantityTotal + " total)"
        );
        $(api.column(8).footer()).html(
          unitPriceFilteredTotal + " (" + unitPriceTotal + " total)"
        );
        $(api.column(9).footer()).html(
          fullPriceFilteredTotal + " (" + fullPriceTotal + " total)"
        );
      },
    });
  });
}

// Function to create filtered datatable for sale details with total values
function filteredSaleReportTableCreator(
  startDate,
  endDate,
  scriptPath,
  tableDIV,
  tableID
) {
  var startDate = $("#" + startDate).val();
  var endDate = $("#" + endDate).val();

  $.ajax({
    url: scriptPath,
    method: "POST",
    data: {
      startDate: startDate,
      endDate: endDate,
    },
    success: function (data) {
      $("#" + tableDIV).empty();
      $("#" + tableDIV).html(data);
    },
    complete: function () {
      // Initiate the Datatable plugin once the table is added to the DOM
      $("#" + tableID).DataTable({
        dom: "lBfrtip",
        buttons: [
          "copy",
          { extend: "csv", footer: true, title: "Sale Report" },
          { extend: "excel", footer: true, title: "Sale Report" },
          {
            extend: "pdf",
            footer: true,
            orientation: "landscape",
            pageSize: "LEGAL",
            title: "Sale Report",
          },
          { extend: "print", footer: true, title: "Sale Report" },
        ],
        footerCallback: function (row, data, start, end, display) {
          var api = this.api(),
            data;

          // Remove the formatting to get integer data for summation
          var intVal = function (i) {
            return typeof i === "string"
              ? i.replace(/[\$,]/g, "") * 1
              : typeof i === "number"
              ? i
              : 0;
          };

          // Total over all pages
          quantityTotal = api
            .column(7)
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Total over this page
          quantityFilteredTotal = api
            .column(7, { page: "current" })
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Total over all pages
          unitPriceTotal = api
            .column(8)
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Quantity total
          unitPriceFilteredTotal = api
            .column(8, { page: "current" })
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Full total over all pages
          fullPriceTotal = api
            .column(9)
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Full total over current page
          fullPriceFilteredTotal = api
            .column(9, { page: "current" })
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Update footer columns
          $(api.column(7).footer()).html(
            quantityFilteredTotal + " (" + quantityTotal + " total)"
          );
          $(api.column(8).footer()).html(
            unitPriceFilteredTotal + " (" + unitPriceTotal + " total)"
          );
          $(api.column(9).footer()).html(
            fullPriceFilteredTotal + " (" + fullPriceTotal + " total)"
          );
        },
      });
    },
  });
}

// Function to create filtered datatable for purchase details with total values
function filteredPurchaseReportTableCreator(
  startDate,
  endDate,
  scriptPath,
  tableDIV,
  tableID
) {
  var startDate = $("#" + startDate).val();
  var endDate = $("#" + endDate).val();

  $.ajax({
    url: scriptPath,
    method: "POST",
    data: {
      startDate: startDate,
      endDate: endDate,
    },
    success: function (data) {
      $("#" + tableDIV).empty();
      $("#" + tableDIV).html(data);
    },
    complete: function () {
      // Initiate the Datatable plugin once the table is added to the DOM
      $("#" + tableID).DataTable({
        dom: "lBfrtip",
        buttons: [
          "copy",
          { extend: "csv", footer: true, title: "Purchase Report" },
          { extend: "excel", footer: true, title: "Purchase Report" },
          {
            extend: "pdf",
            footer: true,
            orientation: "landscape",
            pageSize: "LEGAL",
            title: "Purchase Report",
          },
          { extend: "print", footer: true, title: "Purchase Report" },
        ],
        footerCallback: function (row, data, start, end, display) {
          var api = this.api(),
            data;

          // Remove the formatting to get integer data for summation
          var intVal = function (i) {
            return typeof i === "string"
              ? i.replace(/[\$,]/g, "") * 1
              : typeof i === "number"
              ? i
              : 0;
          };

          // Quantity total over all pages
          quantityTotal = api
            .column(6)
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Quantity for current page
          quantityFilteredTotal = api
            .column(6, { page: "current" })
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Unit price total over all pages
          unitPriceTotal = api
            .column(7)
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Unit price for current page
          unitPriceFilteredTotal = api
            .column(7, { page: "current" })
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Full price total over all pages
          fullPriceTotal = api
            .column(8)
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Full price for current page
          fullPriceFilteredTotal = api
            .column(8, { page: "current" })
            .data()
            .reduce(function (a, b) {
              return intVal(a) + intVal(b);
            }, 0);

          // Update footer columns
          $(api.column(6).footer()).html(
            quantityFilteredTotal + " (" + quantityTotal + " total)"
          );
          $(api.column(7).footer()).html(
            unitPriceFilteredTotal + " (" + unitPriceTotal + " total)"
          );
          $(api.column(8).footer()).html(
            fullPriceFilteredTotal + " (" + fullPriceTotal + " total)"
          );
        },
      });
    },
  });
}

// Calculate Total Purchase value in purchase details tab
function calculateTotalInPurchaseTab() {
  var quantityPT = $("#purchaseDetailsQuantity").val();
  var DiscountPT = $("#purchaseDetailsDiscount").val();
  var GSTPT = $("#purchaseDetailsGST").val();
  var unitPricePT = $("#purchaseDetailsUnitPrice").val();
  $("#purchaseDetailsTotal").val(Number(quantityPT) * Number(unitPricePT) * ((100 - Number(DiscountPT)) / 100) * ((100 + Number(GSTPT)) / 100));
  var totalPrice = Number(quantityPT) * Number(unitPricePT) * ((100 - Number(DiscountPT)) / 100) * ((100 + Number(GSTPT)) / 100);
  return totalPrice;
}

// Calculate Total sale value in sale details tab
function calculateTotalInSaleTab() {
  var quantityST = $("#saleDetailsQuantity").val();
  var unitPriceST = $("#saleDetailsUnitPrice").val();
  var discountST = $("#saleDetailsDiscount").val();
  var GSTST = $("#saleDetailsGST").val();
  console.log(GSTST);
  $("#saleDetailsTotal").val(Number(quantityST) * Number(unitPriceST) * ((100 - Number(discountST)) / 100) * ((100 + Number(GSTST)) / 100));
  var totalPrice = Number(quantityST) * Number(unitPriceST) * ((100 - Number(discountST)) / 100) * ((100 + Number(GSTST)) / 100);
  return totalPrice;
}

// Function to call the insertCustomer.php script to insert customer data to db
function addCustomer() {
  var customerDetailsCustomerFullName = $(
    "#customerDetailsCustomerFullName"
  ).val();
  var customerDetailsCustomerEmail = $("#customerDetailsCustomerEmail").val();
  var customerDetailsCustomerMobile = $("#customerDetailsCustomerMobile").val();
  var customerDetailsCustomerPhone2 = $("#customerDetailsCustomerPhone2").val();
  var customerDetailsDrugLicenseNumber = $("#customerDetailsDrugLicenseNumber").val();
  var customerDetailsGSTRNumber = $("#customerDetailsGSTRNumber").val();
  var customerDetailsCustomerAddress = $(
    "#customerDetailsCustomerAddress"
  ).val();
  var customerDetailsCustomerAddress2 = $(
    "#customerDetailsCustomerAddress2"
  ).val();
  var customerDetailsCustomerCity = $("#customerDetailsCustomerCity").val();
  var customerDetailsCustomerDistrict = $(
    "#customerDetailsCustomerDistrict option:selected"
  ).text();
  var customerDetailsStatus = $(
    "#customerDetailsStatus option:selected"
  ).text();

  $.ajax({
    url: "model/customer/insertCustomer.php",
    method: "POST",
    data: {
      customerDetailsCustomerFullName: customerDetailsCustomerFullName,
      customerDetailsDrugLicenseNumber: customerDetailsDrugLicenseNumber,
      customerDetailsGSTRNumber: customerDetailsGSTRNumber,
      customerDetailsCustomerEmail: customerDetailsCustomerEmail,
      customerDetailsCustomerMobile: customerDetailsCustomerMobile,
      customerDetailsCustomerPhone2: customerDetailsCustomerPhone2,
      customerDetailsCustomerAddress: customerDetailsCustomerAddress,
      customerDetailsCustomerAddress2: customerDetailsCustomerAddress2,
      customerDetailsCustomerCity: customerDetailsCustomerCity,
      customerDetailsCustomerDistrict: customerDetailsCustomerDistrict,
      customerDetailsStatus: customerDetailsStatus,
    },
    success: function (data) {
      $("#customerDetailsMessage").fadeIn();
      $("#customerDetailsMessage").html(data);
    },
    complete: function (data) {
      populateLastInsertedID(
        customerLastInsertedIDFile,
        "customerDetailsCustomerID"
      );
      searchTableCreator(
        "customerDetailsTableDiv",
        customerDetailsSearchTableCreatorFile,
        "customerDetailsTable"
      );
      reportsTableCreator(
        "customerReportsTableDiv",
        customerReportsSearchTableCreatorFile,
        "customerReportsTable"
      );
    },
  });
}

// Function to call the insertVendor.php script to insert vendor data to db
function addVendor() {
  var vendorDetailsVendorFullName = $("#vendorDetailsVendorFullName").val();
  var vendorDetailsVendorEmail = $("#vendorDetailsVendorEmail").val();
  var vendorDetailsVendorMobile = $("#vendorDetailsVendorMobile").val();
  var vendorDetailsVendorPhone2 = $("#vendorDetailsVendorPhone2").val();
  var vendorDetailsVendorAddress = $("#vendorDetailsVendorAddress").val();
  var vendorDetailsVendorAddress2 = $("#vendorDetailsVendorAddress2").val();
  var vendorDetailsVendorCity = $("#vendorDetailsVendorCity").val();
  var vendorDetailsVendorDistrict = $(
    "#vendorDetailsVendorDistrict option:selected"
  ).text();
  var vendorDetailsStatus = $("#vendorDetailsStatus option:selected").text();

  $.ajax({
    url: "model/vendor/insertVendor.php",
    method: "POST",
    data: {
      vendorDetailsVendorFullName: vendorDetailsVendorFullName,
      vendorDetailsVendorEmail: vendorDetailsVendorEmail,
      vendorDetailsVendorMobile: vendorDetailsVendorMobile,
      vendorDetailsVendorPhone2: vendorDetailsVendorPhone2,
      vendorDetailsVendorAddress: vendorDetailsVendorAddress,
      vendorDetailsVendorAddress2: vendorDetailsVendorAddress2,
      vendorDetailsVendorCity: vendorDetailsVendorCity,
      vendorDetailsVendorDistrict: vendorDetailsVendorDistrict,
      vendorDetailsStatus: vendorDetailsStatus,
    },
    success: function (data) {
      $("#vendorDetailsMessage").fadeIn();
      $("#vendorDetailsMessage").html(data);
    },
    complete: function (data) {
      populateLastInsertedID(vendorLastInsertedIDFile, "vendorDetailsVendorID");
      searchTableCreator(
        "vendorDetailsTableDiv",
        vendorDetailsSearchTableCreatorFile,
        "vendorDetailsTable"
      );
      reportsTableCreator(
        "vendorReportsTableDiv",
        vendorReportsSearchTableCreatorFile,
        "vendorReportsTable"
      );
      $("#purchaseDetailsVendorName").load("model/vendor/getVendorNames.php");
    },
  });
}

// Function to call the insertItem.php script to insert item data to db
function addItem() {
  var itemDetailsItemNumber = $("#itemDetailsItemNumber").val();
  var itemDetailsItemName = $("#itemDetailsItemName").val();
  // var itemDetailsDiscount = $("#itemDetailsDiscount").val();
  var itemDetailsQuantity = $("#itemDetailsQuantity").val();
  var itemDetailsUnitPrice = $("#itemDetailsUnitPrice").val();
  var itemDetailsStatus = $("#itemDetailsStatus").val();
  var itemDetailsDescription = $("#itemDetailsDescription").val();
  var itemDetailsCategory = $("#itemDetailsCategory").val();
  var itemDetailsMRP = $("#itemDetailsMRP").val();
  var itemDetailsGST = $("#itemDetailsGST").val();

  $.ajax({
    url: "model/item/insertItem.php",
    method: "POST",
    data: {
      itemDetailsItemNumber: itemDetailsItemNumber,
      itemDetailsItemName: itemDetailsItemName,
      // itemDetailsDiscount: itemDetailsDiscount,
      itemDetailsQuantity: itemDetailsQuantity,
      itemDetailsUnitPrice: itemDetailsUnitPrice,
      itemDetailsStatus: itemDetailsStatus,
      itemDetailsDescription: itemDetailsDescription,
      itemDetailsCategory: itemDetailsCategory,
      itemDetailsMRP: itemDetailsMRP,
      itemDetailsGST: itemDetailsGST,
    },
    success: function (data) {
      $("#itemDetailsMessage").fadeIn();
      $("#itemDetailsMessage").html(data);
    },
    complete: function () {
      populateLastInsertedID(itemLastInsertedIDFile, "itemDetailsProductID");
      getItemStockToPopulate(
        "itemDetailsItemNumber",
        getItemStockFile,
        itemDetailsTotalStock
      );
      searchTableCreator(
        "itemDetailsTableDiv",
        itemDetailsSearchTableCreatorFile,
        "itemDetailsTable"
      );
      reportsTableCreator(
        "itemReportsTableDiv",
        itemReportsSearchTableCreatorFile,
        "itemReportsTable"
      );
    },
  });
}

// Function to call the insertPayment.php script to insert Payment data to db
function addPayment() {
  
  var paymentDetailsVendorName = $("#paymentDetailsVendorName").val();
  var paymentDetailsPaymentDate = $("#paymentDetailsPaymentDate").val();
  var paymentDetailsPaymentID = $("#paymentDetailsPaymentID").val();
  var paymentDetailsInvoiceNumber = $("#paymentDetailsInvoiceNumber").val();
  var paymentDetailsPaymentStatus = $("#paymentDetailsPaymentStatus").val();
  var paymentDetailsPaidAmount = $("#paymentDetailsPaidAmount").val();
  var paymentDetailsModeofPayment = $("#paymentDetailsModeofPayment").val();
  var paymentDetailsDescription = $("#paymentDetailsDescription").val();

  $.ajax({
    url: "model/payment/insertPayment.php",
    method: "POST",
    data: {
	  paymentDetailsVendorName: paymentDetailsVendorName,
      paymentDetailsPaymentDate: paymentDetailsPaymentDate,
      paymentDetailsPaymentID: paymentDetailsPaymentID,
      paymentDetailsInvoiceNumber: paymentDetailsInvoiceNumber,
      paymentDetailsPaymentStatus: paymentDetailsPaymentStatus,
      paymentDetailsPaidAmount: paymentDetailsPaidAmount,
      paymentDetailsModeofPayment: paymentDetailsModeofPayment,
      paymentDetailsDescription: paymentDetailsDescription,
    },
    success: function (data) {
      $("#paymentDetailsMessage").fadeIn();
      $("#paymentDetailsMessage").html(data);
    },
  });
  
}

// Function to call the insertReceipt.php script to insert Receipt data to db
function addReceipt() {
  
  var receiptDetailsCustomerName = $("#receiptDetailsCustomerName").val();
  var receiptDetailsPaymentDate = $("#receiptDetailsPaymentDate").val();
  var receiptDetailsReceiptID = $("#receiptDetailsReceiptID").val();
  var receiptDetailsBillNumber = $("#receiptDetailsBillNumber").val();
  var receiptDetailsPaymentStatus = $("#receiptDetailsPaymentStatus").val();
  var receiptDetailsPaidAmount = $("#receiptDetailsPaidAmount").val();
  var receiptDetailsModeofPayment = $("#receiptDetailsModeofPayment").val();
  var receiptDetailsDescription = $("#receiptDetailsDescription").val();

  $.ajax({
    url: "model/Receipt/insertReceipt.php",
    method: "POST",
    data: {
	    receiptDetailsCustomerName: receiptDetailsCustomerName,
      receiptDetailsPaymentDate: receiptDetailsPaymentDate,
      receiptDetailsReceiptID: receiptDetailsReceiptID,
      receiptDetailsBillNumber: receiptDetailsBillNumber,
      receiptDetailsPaymentStatus: receiptDetailsPaymentStatus,
      receiptDetailsPaidAmount: receiptDetailsPaidAmount,
      receiptDetailsModeofPayment: receiptDetailsModeofPayment,
      receiptDetailsDescription: receiptDetailsDescription,
    },
    success: function (data) {
      $("#receiptDetailsMessage").fadeIn();
      $("#receiptDetailsMessage").html(data);
    },
  });
  
}

// Function to call the insertPurchase.php script to insert purchase data to db
function addPurchase() {
  var purchaseDetailsItemNumber = $("#purchaseDetailsItemNumber").val();
  var purchaseDetailsPurchaseDate = $("#purchaseDetailsPurchaseDate").val();
  var purchaseDetailsItemName = $("#purchaseDetailsItemName").val();
  var purchaseDetailsQuantity = $("#purchaseDetailsQuantity").val();
  var purchaseDetailsUnitPrice = $("#purchaseDetailsUnitPrice").val();
  var purchaseDetailsVendorName = $("#purchaseDetailsVendorName").val();
  var purchaseDetailsInvoiceNumber = $("#purchaseDetailsInvoiceNumber").val();
  var purchaseDetailsBatchNumber = $("#purchaseDetailsBatchNumber").val();
  var purchaseDetailsExpiryDate = $("#purchaseDetailsExpiryDate").val();
  var purchaseDetailsMRP = $("#purchaseDetailsMRP").val();
  var purchaseDetailsDiscount = $("#purchaseDetailsDiscount").val();
  var purchaseDetailsGST = $("#purchaseDetailsGST").val();
  var purchaseDetailsTotal = calculateTotalInPurchaseTab();

  $.ajax({
    url: "model/purchase/insertPurchase.php",
    method: "POST",
    data: {
      purchaseDetailsItemNumber: purchaseDetailsItemNumber,
      purchaseDetailsPurchaseDate: purchaseDetailsPurchaseDate,
      purchaseDetailsItemName: purchaseDetailsItemName,
      purchaseDetailsQuantity: purchaseDetailsQuantity,
      purchaseDetailsUnitPrice: purchaseDetailsUnitPrice,
      purchaseDetailsVendorName: purchaseDetailsVendorName,
      purchaseDetailsInvoiceNumber: purchaseDetailsInvoiceNumber,
      purchaseDetailsBatchNumber: purchaseDetailsBatchNumber,
      purchaseDetailsExpiryDate: purchaseDetailsExpiryDate,
      purchaseDetailsMRP: purchaseDetailsMRP,
      purchaseDetailsDiscount: purchaseDetailsDiscount,
      purchaseDetailsGST: purchaseDetailsGST,
      purchaseDetailsTotal: purchaseDetailsTotal,
    },
    success: function (data) {
      $("#purchaseDetailsMessage").fadeIn();
      $("#purchaseDetailsMessage").html(data);
    },
    complete: function () {
      getItemStockToPopulate(
        "purchaseDetailsItemNumber",
        getItemStockFile,
        "purchaseDetailsCurrentStock"
      );
      populateLastInsertedID(
        purchaseLastInsertedIDFile,
        "purchaseDetailsPurchaseID"
      );
      searchTableCreator(
        "purchaseDetailsTableDiv",
        purchaseDetailsSearchTableCreatorFile,
        "purchaseDetailsTable"
      );
      reportsPurchaseTableCreator(
        "purchaseReportsTableDiv",
        purchaseReportsSearchTableCreatorFile,
        "purchaseReportsTable"
      );
      searchTableCreator(
        "itemDetailsTableDiv",
        itemDetailsSearchTableCreatorFile,
        "itemDetailsTable"
      );
      reportsTableCreator(
        "itemReportsTableDiv",
        itemReportsSearchTableCreatorFile,
        "itemReportsTable"
      );
    },
  });
}

// Function to call the insertSale.php script to insert sale data to db
function addSale() {
  var saleDetailsItemNumber = $("#saleDetailsItemNumber").val();
  var saleDetailsItemName = $("#saleDetailsItemName").val();
  var saleDetailsBillNumber= $("#saleDetailsBillNumber").val();
  var saleDetailsDiscount = $("#saleDetailsDiscount").val();
  var saleDetailsQuantity = $("#saleDetailsQuantity").val();
  var saleDetailsUnitPrice = $("#saleDetailsUnitPrice").val();
  var saleDetailsCustomerID = $("#saleDetailsCustomerID").val();
  var saleDetailsCustomerName = $("#saleDetailsCustomerName").val();
  var saleDetailsSaleDate = $("#saleDetailsSaleDate").val();
  var saleDetailsBatchNumber = $("#saleDetailsBatchNumber").val();
  var saleDetailsExpiryDate = $("#saleDetailsExpiryDate").val();
  var saleDetailsMRP = $("#saleDetailsMRP").val();
  var saleDetailsGST = $("#saleDetailsGST").val();
  var saleDetailsTotal = calculateTotalInSaleTab();

  $.ajax({
    url: "model/sale/insertSale.php",
    method: "POST",
    data: {
      saleDetailsItemNumber: saleDetailsItemNumber,
      saleDetailsItemName: saleDetailsItemName,
      saleDetailsBillNumber: saleDetailsBillNumber,
      saleDetailsDiscount: saleDetailsDiscount,
      saleDetailsQuantity: saleDetailsQuantity,
      saleDetailsUnitPrice: saleDetailsUnitPrice,
      saleDetailsCustomerID: saleDetailsCustomerID,
      saleDetailsCustomerName: saleDetailsCustomerName,
      saleDetailsSaleDate: saleDetailsSaleDate,
      saleDetailsBatchNumber: saleDetailsBatchNumber,
      saleDetailsExpiryDate: saleDetailsExpiryDate,
      saleDetailsMRP: saleDetailsMRP,
      saleDetailsGST: saleDetailsGST,
      saleDetailsTotal: saleDetailsTotal,
    },
    success: function (data) {
      $("#saleDetailsMessage").fadeIn();
      $("#saleDetailsMessage").html(data);
    },
    complete: function () {
      getItemStockToPopulate(
        "saleDetailsItemNumber",
        getItemStockFile,
        "saleDetailsTotalStock"
      );
      populateLastInsertedID(saleLastInsertedIDFile, "saleDetailsSaleID");
      searchTableCreator(
        "saleDetailsTableDiv",
        saleDetailsSearchTableCreatorFile,
        "saleDetailsTable"
      );
      reportsSaleTableCreator(
        "saleReportsTableDiv",
        saleReportsSearchTableCreatorFile,
        "saleReportsTable"
      );
      searchTableCreator(
        "itemDetailsTableDiv",
        itemDetailsSearchTableCreatorFile,
        "itemDetailsTable"
      );
      reportsTableCreator(
        "itemReportsTableDiv",
        itemReportsSearchTableCreatorFile,
        "itemReportsTable"
      );
    },
  });
}

function getPaymentDetailsToPopulate() {
  // Get the itemName entered in the text box
  var paymentDetailsPaymentID = $("#paymentDetailsPaymentID").val();

  // Call the populatePaymentDetails.php script to get item details
  // relevant to the paymentID which the user entered
  $.ajax({
    url: "model/payment/populatePaymentDetails.php",
    method: "POST",
    data: { paymentDetailsPaymentID: paymentDetailsPaymentID },
    dataType: "json",
    success: function (data) {
      $("#paymentDetailsVendorName").val(data.vendorName).trigger("chosen:updated");
      $("#paymentDetailsPaymentDate").val(data.paymentDate);
      $("#paymentDetailsInvoiceNumber").val(data.invoiceNumber);
      $("#paymentDetailsPaymentStatus").val(data.paymentStatus).trigger("chosen:updated");
      $("#paymentDetailsPaidAmount").val(data.paidAmount);
      $("#paymentDetailsModeofPayment").val(data.paymentMode).trigger("chosen:updated");
      $("#paymentDetailsDescription").val(data.description); 
    },
  });
}

// Function to send itemName so that item details can be pulled from db
// to be displayed on item details tab
function getItemsDetailsToPopulate() {
  // Get the itemName entered in the text box
  var itemName = $("#itemDetailsItemName").val();
  var defaultImgUrl = "data/item_images/imageNotAvailable.jpg";
  var defaultImageData =
    '<img class="img-fluid" src="data/item_images/imageNotAvailable.jpg">';

  // Call the populateItemsDetails.php script to get item details
  // relevant to the itemName which the user entered
  $.ajax({
    url: "model/item/populateItemsDetails.php",
    method: "POST",
    data: { itemName: itemName },
    dataType: "json",
    success: function (data) {
      $("#itemDetailsItemNumber").val(data.itemNumber);
      $("#itemDetailsProductID").val(data.productID);
      //$('#itemDetailsItemName').val(data.itemName);
      $("#itemDetailsDiscount").val(data.discount);
      $("#itemDetailsTotalStock").val(data.stock);
      $("#itemDetailsUnitPrice").val(data.unitPrice);
      $("#itemDetailsDescription").val(data.description);
      $("#itemDetailsStatus").val(data.status).trigger("chosen:updated");
      $("#itemDetailsGST").val(data.GST);
      $("#itemDetailsMRP").val(data.MRP);

      newImgUrl = "data/item_images/" + data.itemNumber + "/" + data.imageURL;

      // Set the item image
      if (data.imageURL == "imageNotAvailable.jpg" || data.imageURL == "") {
        $("#imageContainer").html(defaultImageData);
      } else {
        $("#imageContainer").html(
          '<img class="img-fluid" src="' + newImgUrl + '">'
        );
      }
    },
  });
}

// Function to send itemNumber so that item details can be pulled from db
// to be displayed on item details tab
function getItemDetailsToPopulate() {
  // Get the itemNumber entered in the text box
  var itemNumber = $("#itemDetailsItemNumber").val();
  var defaultImgUrl = "data/item_images/imageNotAvailable.jpg";
  var defaultImageData =
    '<img class="img-fluid" src="data/item_images/imageNotAvailable.jpg">';

  // Call the populateItemDetails.php script to get item details
  // relevant to the itemNumber which the user entered
  $.ajax({
    url: "model/item/populateItemDetails.php",
    method: "POST",
    data: { itemNumber: itemNumber },
    dataType: "json",
    success: function (data) {
      //$('#itemDetailsItemNumber').val(data.itemNumber);
      $("#itemDetailsProductID").val(data.productID);
      $("#itemDetailsItemName").val(data.itemName);
      $("#itemDetailsDiscount").val(data.discount);
      $("#itemDetailsTotalStock").val(data.stock);
      $("#itemDetailsUnitPrice").val(data.unitPrice);
      $("#itemDetailsDescription").val(data.description);
      $("#itemDetailsStatus").val(data.status).trigger("chosen:updated");

      newImgUrl = "data/item_images/" + data.itemNumber + "/" + data.imageURL;

      // Set the item image
      if (data.imageURL == "imageNotAvailable.jpg" || data.imageURL == "") {
        $("#imageContainer").html(defaultImageData);
      } else {
        $("#imageContainer").html(
          '<img class="img-fluid" src="' + newImgUrl + '">'
        );
      }
    },
  });
}

// Function to send itemName so that item details can be pulled from db
// to be displayed on sale details tab
function getItemsDetailsToPopulateForSaleTab() {
  // Get the itemName entered in the text box
  var itemName = $("#saleDetailsItemName").val();
  var defaultImgUrl = "data/item_images/imageNotAvailable.jpg";
  var defaultImageData =
    '<img class="img-fluid" src="data/item_images/imageNotAvailable.jpg">';

  // Call the populateItemsDetails.php script to get item details
  // relevant to the itemName which the user entered
  $.ajax({
    url: "model/item/populateItemsDetails.php",
    method: "POST",
    data: { itemName: itemName },
    dataType: "json",
    success: function (data) {
      $("#saleDetailsItemNumber").val(data.itemNumber);
      //$('#saleDetailsItemName').val(data.itemName);
      $("#saleDetailsDiscount").val(data.discount);
      $("#saleDetailsTotalStock").val(data.stock);
      $("#saleDetailsUnitPrice").val(data.unitPrice);
      $("#saleDetailsMRP").val(data.MRP);
      $("#saleDetailsGST").val(data.GST);

      newImgUrl = "data/item_images/" + data.itemNumber + "/" + data.imageURL;

      // Set the item image
      if (data.imageURL == "imageNotAvailable.jpg" || data.imageURL == "") {
        $("#saleDetailsImageContainer").html(defaultImageData);
      } else {
        $("#saleDetailsImageContainer").html(
          '<img class="img-fluid" src="' + newImgUrl + '">'
        );
      }
    },
    complete: function () {
      //$('#saleDetailsDiscount, #saleDetailsQuantity, #saleDetailsUnitPrice').trigger('change');
      calculateTotalInSaleTab();
    },
  });
}

// Function to send itemNumber so that item details can be pulled from db
// to be displayed on sale details tab
function getItemDetailsToPopulateForSaleTab() {
  // Get the itemNumber entered in the text box
  var itemNumber = $("#saleDetailsItemNumber").val();
  var defaultImgUrl = "data/item_images/imageNotAvailable.jpg";
  var defaultImageData =
    '<img class="img-fluid" src="data/item_images/imageNotAvailable.jpg">';

  // Call the populateItemDetails.php script to get item details
  // relevant to the itemNumber which the user entered
  $.ajax({
    url: "model/item/populateItemDetails.php",
    method: "POST",
    data: { itemNumber: itemNumber },
    dataType: "json",
    success: function (data) {
      //$('#saleDetailsItemNumber').val(data.itemNumber);
      $("#saleDetailsItemName").val(data.itemName);
      $("#saleDetailsDiscount").val(data.discount);
      $("#saleDetailsTotalStock").val(data.stock);
      $("#saleDetailsUnitPrice").val(data.unitPrice);

      newImgUrl = "data/item_images/" + data.itemNumber + "/" + data.imageURL;

      // Set the item image
      if (data.imageURL == "imageNotAvailable.jpg" || data.imageURL == "") {
        $("#saleDetailsImageContainer").html(defaultImageData);
      } else {
        $("#saleDetailsImageContainer").html(
          '<img class="img-fluid" src="' + newImgUrl + '">'
        );
      }
    },
    complete: function () {
      //$('#saleDetailsDiscount, #saleDetailsQuantity, #saleDetailsUnitPrice').trigger('change');
      calculateTotalInSaleTab();
    },
  });
}

// Function to send itemNumber so that item name can be pulled from db
function getItemName(itemNumberTextBoxID, scriptPath, itemNameTextbox) {
  // Get the itemNumber entered in the text box
  var itemNumber = $("#" + itemNumberTextBoxID).val();

  // Call the script to get item details
  $.ajax({
    url: scriptPath,
    method: "POST",
    data: { itemNumber: itemNumber },
    dataType: "json",
    success: function (data) {
      $("#" + itemNameTextbox).val(data.itemName);
    },
    error: function (xhr, ajaxOptions, thrownError) {},
  });
}

// Function to send itemName so that item number can be pulled from db
function getItemNumber(itemNameTextBoxID, scriptPath, itemNumberTextbox) {
  // Get the itemName entered in the text box
  var itemName = $("#" + itemNameTextBoxID).val();

  // Call the script to get item details
  $.ajax({
    url: scriptPath,
    method: "POST",
    data: { itemName: itemName },
    dataType: "json",
    success: function (data) {
      $("#" + itemNumberTextbox).val(data.itemNumber);
    },
    error: function (xhr, ajaxOptions, thrownError) {},
  });
}

// Function to send itemName so that item stock can be pulled from db
function getItemsStockToPopulate(
  itemNameTextbox,
  scriptPath,
  stockTextbox,
  unitPriceTextbox,
  MRPTextbox,
  GSTTextbox
) {
  // Get the itemName entered in the text box
  var itemName = $("#" + itemNameTextbox).val();

  // Call the script to get stock details
  $.ajax({
    url: scriptPath,
    method: "POST",
    data: { itemName: itemName },
    dataType: "json",
    success: function (data) {
      $("#" + stockTextbox).val(data.stock);
      $("#" + unitPriceTextbox).val(data.unitPrice);
      $("#" + MRPTextbox).val(data.MRP);
      $("#" + GSTTextbox).val(data.GST);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      //alert(xhr.status);
      //alert(thrownError);
      //console.warn(xhr.responseText)
    },
  });
}

// Function to send itemNumber so that item stock can be pulled from db
function getItemStockToPopulate(itemNumberTextbox, scriptPath, stockTextbox) {
  // Get the itemNumber entered in the text box
  var itemNumber = $("#" + itemNumberTextbox).val();

  // Call the script to get stock details
  $.ajax({
    url: scriptPath,
    method: "POST",
    data: { itemNumber: itemNumber },
    dataType: "json",
    success: function (data) {
      $("#" + stockTextbox).val(data.stock);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      //alert(xhr.status);
      //alert(thrownError);
      //console.warn(xhr.responseText)
    },
  });
}

// Function to populate last inserted ID
function populateLastInsertedID(scriptPath, textBoxID) {
  $.ajax({
    url: scriptPath,
    method: "POST",
    dataType: "json",
    success: function (data) {
      $("#" + textBoxID).val(data);
    },
  });
}

// Function to show suggestions
function showSuggestion(scriptPath, suggestionsDivID) {
  // Get the value entered by the user
  var purchaseDetailsBatchNumber = $("#purchaseDetailsBatchNumber").val();
  var purchaseDetailsItemName = $("#purchaseDetailsItemName").val();

    $.ajax({
      url: scriptPath,
      method: "POST",
      data: { 
        purchaseDetailsBatchNumber: purchaseDetailsBatchNumber,
        purchaseDetailsItemName: purchaseDetailsItemName,
      },
      success: function (data) {
        $("#" + suggestionsDivID).fadeIn();
        $("#" + suggestionsDivID).html(data);
      },
    });
}

// Function to show suggestions
function showSuggestionPayment(textBoxID, scriptPath, suggestionsDivID) {
  // Get the value entered by the user
  var textBoxValue = $("#" + textBoxID).val();

  // Call the showPurchaseIDs.php script only if there is a value in the
  // purchase ID textbox
    $.ajax({
      url: scriptPath,
      method: "POST",
      data: { textBoxValue: textBoxValue },
      success: function (data) {
        $("#" + suggestionsDivID).fadeIn();
        $("#" + suggestionsDivID).html(data);
      },
    });
}

// Function to show suggestions
function showSuggestions(textBoxID, scriptPath, suggestionsDivID) {
  // Get the value entered by the user
  var textBoxValue = $("#" + textBoxID).val();

  // Call the showPurchaseIDs.php script only if there is a value in the
  // purchase ID textbox
  if (textBoxValue != "") {
    $.ajax({
      url: scriptPath,
      method: "POST",
      data: { textBoxValue: textBoxValue },
      success: function (data) {
        $("#" + suggestionsDivID).fadeIn();
        $("#" + suggestionsDivID).html(data);
      },
    });
  }
}

// Function to delte item from db
function deleteItem() {
  // Get the item number entered by the user
  var itemDetailsItemNumber = $("#itemDetailsItemNumber").val();

  // Call the deleteItem.php script only if there is a value in the
  // item number textbox
  if (itemDetailsItemNumber != "") {
    $.ajax({
      url: "model/item/deleteItem.php",
      method: "POST",
      data: { itemDetailsItemNumber: itemDetailsItemNumber },
      success: function (data) {
        $("#itemDetailsMessage").fadeIn();
        $("#itemDetailsMessage").html(data);
      },
      complete: function () {
        searchTableCreator(
          "itemDetailsTableDiv",
          itemDetailsSearchTableCreatorFile,
          "itemDetailsTable"
        );
        reportsTableCreator(
          "itemReportsTableDiv",
          itemReportsSearchTableCreatorFile,
          "itemReportsTable"
        );
      },
    });
  }
}

// Function to delete item from db
function deleteCustomer() {
  // Get the customerID entered by the user
  var customerDetailsCustomerID = $("#customerDetailsCustomerID").val();

  // Call the deleteCustomer.php script only if there is a value in the
  // item number textbox
  if (customerDetailsCustomerID != "") {
    $.ajax({
      url: "model/customer/deleteCustomer.php",
      method: "POST",
      data: { customerDetailsCustomerID: customerDetailsCustomerID },
      success: function (data) {
        $("#customerDetailsMessage").fadeIn();
        $("#customerDetailsMessage").html(data);
      },
      complete: function () {
        searchTableCreator(
          "customerDetailsTableDiv",
          customerDetailsSearchTableCreatorFile,
          "customerDetailsTable"
        );
        reportsTableCreator(
          "customerReportsTableDiv",
          customerReportsSearchTableCreatorFile,
          "customerReportsTable"
        );
      },
    });
  }
}

// Function to delete payment from db
function deletePayment() {
  // Get the paymentID entered by the user
  var paymentDetailsPaymentID = $("#paymentDetailsPaymentID").val();

  // Call the deletePayment.php script only if there is a value in the
  // item number textbox
  if (paymentDetailsPaymentID != "") {
    $.ajax({
      url: "model/payment/deletePayment.php",
      method: "POST",
      data: { paymentDetailsPaymentID: paymentDetailsPaymentID },
      success: function (data) {
        $("#paymentDetailsMessage").fadeIn();
        $("#paymentDetailsMessage").html(data);
      },
    });
  }
}

// Function to delete receipt from db
function deleterReceipt() {
  // Get the receiptID entered by the user
  var receiptDetailsReceiptID = $("#receiptDetailsReceiptID").val();

  // Call the deleteReceipt.php script only if there is a value in the
  // item number textbox
  if (receiptDetailsReceiptID != "") {
    $.ajax({
      url: "model/receipt/deleteReceipt.php",
      method: "POST",
      data: { receiptDetailsReceiptID: receiptDetailsReceiptID },
      success: function (data) {
        $("#receiptDetailsMessage").fadeIn();
        $("#receiptDetailsMessage").html(data);
      },
    });
  }
}

// Function to delete vendor from db
function deleteVendor() {
  // Get the vendorID entered by the user
  var vendorDetailsVendorID = $("#vendorDetailsVendorID").val();

  // Call the deleteVendor.php script only if there is a value in the
  // vendor ID textbox
  if (vendorDetailsVendorID != "") {
    $.ajax({
      url: "model/vendor/deleteVendor.php",
      method: "POST",
      data: { vendorDetailsVendorID: vendorDetailsVendorID },
      success: function (data) {
        $("#vendorDetailsMessage").fadeIn();
        $("#vendorDetailsMessage").html(data);
      },
      complete: function () {
        searchTableCreator(
          "vendorDetailsTableDiv",
          vendorDetailsSearchTableCreatorFile,
          "vendorDetailsTable"
        );
        reportsTableCreator(
          "vendorReportsTableDiv",
          vendorReportsSearchTableCreatorFile,
          "vendorReportsTable"
        );
      },
    });
  }
}

// Function to send customerID so that customer details can be pulled from db
// to be displayed on customer details tab
function getCustomerDetailsToPopulate() {
  // Get the customerID entered in the text box
  var customerDetailsCustomerID = $("#customerDetailsCustomerID").val();

  // Call the populateItemDetails.php script to get item details
  // relevant to the itemNumber which the user entered
  $.ajax({
    url: "model/customer/populateCustomerDetails.php",
    method: "POST",
    data: { customerID: customerDetailsCustomerID },
    dataType: "json",
    success: function (data) {
      //$('#customerDetailsCustomerID').val(data.customerID);
      $("#customerDetailsCustomerFullName").val(data.fullName);
      $("#customerDetailsCustomerMobile").val(data.mobile);
      $("#customerDetailsCustomerPhone2").val(data.phone2);
      $("#customerDetailsCustomerEmail").val(data.email);
      $("#customerDetailsCustomerAddress").val(data.address);
      $("#customerDetailsCustomerAddress2").val(data.address2);
      $("#customerDetailsCustomerCity").val(data.city);
      $("#customerDetailsCustomerDistrict")
        .val(data.district)
        .trigger("chosen:updated");
      $("#customerDetailsStatus").val(data.status).trigger("chosen:updated");
    },
  });
}

// Function to send customerName so that customer details can be pulled from db
// to be displayed on sale details tab
function getCustomersDetailsToPopulateSaleTab() {
  // Get the customerName entered in the text box
  var customerDetailsCustomerName = $("#saleDetailsCustomerName").val();

  // Call the populateCustomersDetails.php script to get customer details
  // relevant to the customerName which the user entered
  $.ajax({
    url: "model/customer/populateCustomersDetails.php",
    method: "POST",
    data: { fullName: customerDetailsCustomerName },
    dataType: "json",
    success: function (data) {
      $("#saleDetailsCustomerID").val(data.customerID);
      //$("#saleDetailsCustomerName").val(data.fullName);
    },
  });
}

// Function to send customerID so that customer details can be pulled from db
// to be displayed on sale details tab
function getCustomerDetailsToPopulateSaleTab() {
  // Get the customerID entered in the text box
  var customerDetailsCustomerID = $("#saleDetailsCustomerID").val();

  // Call the populateCustomerDetails.php script to get customer details
  // relevant to the customerID which the user entered
  $.ajax({
    url: "model/customer/populateCustomerDetails.php",
    method: "POST",
    data: { customerID: customerDetailsCustomerID },
    dataType: "json",
    success: function (data) {
      //$('#saleDetailsCustomerID').val(data.customerID);
      $("#saleDetailsCustomerName").val(data.fullName);
    },
  });
}

// Function to show suggestions to display batch number in sale tab
function showSuggestionforSale(scriptPath, suggestionsDivID) {
  // Get the value entered by the user
  var saleDetailsBatchNumber = $("#saleDetailsBatchNumber").val();
  var saleDetailsItemName = $("#saleDetailsItemName").val();

    $.ajax({
      url: scriptPath,
      method: "POST",
      data: { 
        saleDetailsBatchNumber: saleDetailsBatchNumber,
        saleDetailsItemName: saleDetailsItemName,
      },
      success: function (data) {
        $("#" + suggestionsDivID).fadeIn();
        $("#" + suggestionsDivID).html(data);
      },
    });
}

// Function to send vendorID so that vendor details can be pulled from db
// to be displayed on vendor details tab
function getVendorDetailsToPopulate() {
  // Get the vendorID entered in the text box
  var vendorDetailsVendorID = $("#vendorDetailsVendorID").val();

  // Call the populateVendorDetails.php script to get vendor details
  // relevant to the vendorID which the user entered
  $.ajax({
    url: "model/vendor/populateVendorDetails.php",
    method: "POST",
    data: { vendorDetailsVendorID: vendorDetailsVendorID },
    dataType: "json",
    success: function (data) {
      //$('#vendorDetailsVendorID').val(data.vendorID);
      $("#vendorDetailsVendorFullName").val(data.fullName);
      $("#vendorDetailsVendorMobile").val(data.mobile);
      $("#vendorDetailsVendorPhone2").val(data.phone2);
      $("#vendorDetailsVendorEmail").val(data.email);
      $("#vendorDetailsVendorAddress").val(data.address);
      $("#vendorDetailsVendorAddress2").val(data.address2);
      $("#vendorDetailsVendorCity").val(data.city);
      $("#vendorDetailsVendorDistrict")
        .val(data.district)
        .trigger("chosen:updated");
      $("#vendorDetailsStatus").val(data.status).trigger("chosen:updated");
    },
  });
}

// Function to send purchaseID so that purchase details can be pulled from db
// to be displayed on purchase details tab
function getPurchaseDetailsToPopulate() {
  // Get the purchaseID entered in the text box
  var purchaseDetailsPurchaseID = $("#purchaseDetailsPurchaseID").val();
  console.log(calculateTotalInPurchaseTab());
  // Call the populatePurchaseDetails.php script to get item details
  // relevant to the itemNumber which the user entered
  $.ajax({
    url: "model/purchase/populatePurchaseDetails.php",
    method: "POST",
    data: { purchaseDetailsPurchaseID: purchaseDetailsPurchaseID },
    dataType: "json",
    success: function (data) {
      //$('#purchaseDetailsPurchaseID').val(data.customerID);
      $("#purchaseDetailsItemNumber").val(data.itemNumber);
      $("#purchaseDetailsPurchaseDate").val(data.purchaseDate);
      $("#purchaseDetailsItemName").val(data.itemName);
      $("#purchaseDetailsQuantity").val(data.quantity);
      $("#purchaseDetailsUnitPrice").val(data.unitPrice);
      $("#purchaseDetailsVendorName")
        .val(data.vendorName)
        .trigger("chosen:updated");
    },
    complete: function () {
      calculateTotalInPurchaseTab();
      getItemStockToPopulate(
        "purchaseDetailsItemNumber",
        getItemStockFile,
        "purchaseDetailsCurrentStock"
      );
    },
  });
}

// Function to send saleID so that sale details can be pulled from db
// to be displayed on sale details tab
function getSaleDetailsToPopulate() {
  // Get the saleID entered in the text box
  var saleDetailsSaleID = $("#saleDetailsSaleID").val();

  // Call the populateSaleDetails.php script to get item details
  // relevant to the itemNumber which the user entered
  $.ajax({
    url: "model/sale/populateSaleDetails.php",
    method: "POST",
    data: { saleDetailsSaleID: saleDetailsSaleID },
    dataType: "json",
    success: function (data) {
      //$('#saleDetailsSaleID').val(data.saleID);
      $("#saleDetailsItemNumber").val(data.itemNumber);
      $("#saleDetailsCustomerID").val(data.customerID);
      $("#saleDetailsCustomerName").val(data.customerName);
      $("#saleDetailsItemName").val(data.itemName);
      $("#saleDetailsSaleDate").val(data.saleDate);
      $("#saleDetailsDiscount").val(data.discount);
      $("#saleDetailsQuantity").val(data.quantity);
      $("#saleDetailsUnitPrice").val(data.unitPrice);
      $("#saleDetailsBatchNumber").val(data.batchNumber);
      $("#saleDetailsExpiryDate").val(data.expiryDate);
      $("#saleDetailsMRP").val(data.MRP);
      $("#saleDetailsGST").val(data.GST);
      $("#saleDetailsBillNumber").val(data.billNumber);
    },
    complete: function () {
      calculateTotalInSaleTab();
      getItemStockToPopulate(
        "saleDetailsItemNumber",
        getItemStockFile,
        "saleDetailsTotalStock"
      );
    },
  });
}

// Function to call the upateItemDetails.php script to UPDATE item data in db
function updateItem() {
  var itemDetailsItemNumber = $("#itemDetailsItemNumber").val();
  var itemDetailsItemName = $("#itemDetailsItemName").val();
  var itemDetailsDiscount = $("#itemDetailsDiscount").val();
  var itemDetailsQuantity = $("#itemDetailsQuantity").val();
  var itemDetailsUnitPrice = $("#itemDetailsUnitPrice").val();
  var itemDetailsStatus = $("#itemDetailsStatus").val();
  var itemDetailsDescription = $("#itemDetailsDescription").val();

  $.ajax({
    url: "model/item/updateItemDetails.php",
    method: "POST",
    data: {
      itemNumber: itemDetailsItemNumber,
      itemDetailsItemName: itemDetailsItemName,
      itemDetailsDiscount: itemDetailsDiscount,
      itemDetailsQuantity: itemDetailsQuantity,
      itemDetailsUnitPrice: itemDetailsUnitPrice,
      itemDetailsStatus: itemDetailsStatus,
      itemDetailsDescription: itemDetailsDescription,
    },
    success: function (data) {
      var result = $.parseJSON(data);
      $("#itemDetailsMessage").fadeIn();
      $("#itemDetailsMessage").html(result.alertMessage);
      if (result.newStock != null) {
        $("#itemDetailsTotalStock").val(result.newStock);
      }
    },
    complete: function () {
      searchTableCreator(
        "itemDetailsTableDiv",
        itemDetailsSearchTableCreatorFile,
        "itemDetailsTable"
      );
      searchTableCreator(
        "purchaseDetailsTableDiv",
        purchaseDetailsSearchTableCreatorFile,
        "purchaseDetailsTable"
      );
      searchTableCreator(
        "saleDetailsTableDiv",
        saleDetailsSearchTableCreatorFile,
        "saleDetailsTable"
      );
      reportsTableCreator(
        "itemReportsTableDiv",
        itemReportsSearchTableCreatorFile,
        "itemReportsTable"
      );
      reportsPurchaseTableCreator(
        "purchaseReportsTableDiv",
        purchaseReportsSearchTableCreatorFile,
        "purchaseReportsTable"
      );
      reportsSaleTableCreator(
        "saleReportsTableDiv",
        saleReportsSearchTableCreatorFile,
        "saleReportsTable"
      );
    },
  });
}

// Function to call the upateCustomerDetails.php script to UPDATE customer data in db
function updateCustomer() {
  var customerDetailsCustomerID = $("#customerDetailsCustomerID").val();
  var customerDetailsCustomerFullName = $(
    "#customerDetailsCustomerFullName"
  ).val();
  var customerDetailsCustomerMobile = $("#customerDetailsCustomerMobile").val();
  var customerDetailsCustomerPhone2 = $("#customerDetailsCustomerPhone2").val();
  var customerDetailsCustomerAddress = $(
    "#customerDetailsCustomerAddress"
  ).val();
  var customerDetailsCustomerEmail = $("#customerDetailsCustomerEmail").val();
  var customerDetailsCustomerAddress2 = $(
    "#customerDetailsCustomerAddress2"
  ).val();
  var customerDetailsCustomerCity = $("#customerDetailsCustomerCity").val();
  var customerDetailsCustomerDistrict = $(
    "#customerDetailsCustomerDistrict"
  ).val();
  var customerDetailsStatus = $(
    "#customerDetailsStatus option:selected"
  ).text();

  $.ajax({
    url: "model/customer/updateCustomerDetails.php",
    method: "POST",
    data: {
      customerDetailsCustomerID: customerDetailsCustomerID,
      customerDetailsCustomerFullName: customerDetailsCustomerFullName,
      customerDetailsCustomerMobile: customerDetailsCustomerMobile,
      customerDetailsCustomerPhone2: customerDetailsCustomerPhone2,
      customerDetailsCustomerAddress: customerDetailsCustomerAddress,
      customerDetailsCustomerEmail: customerDetailsCustomerEmail,
      customerDetailsCustomerAddress2: customerDetailsCustomerAddress2,
      customerDetailsCustomerCity: customerDetailsCustomerCity,
      customerDetailsCustomerDistrict: customerDetailsCustomerDistrict,
      customerDetailsStatus: customerDetailsStatus,
    },
    success: function (data) {
      $("#customerDetailsMessage").fadeIn();
      $("#customerDetailsMessage").html(data);
    },
    complete: function () {
      searchTableCreator(
        "customerDetailsTableDiv",
        customerDetailsSearchTableCreatorFile,
        "customerDetailsTable"
      );
      reportsTableCreator(
        "customerReportsTableDiv",
        customerReportsSearchTableCreatorFile,
        "customerReportsTable"
      );
      searchTableCreator(
        "saleDetailsTableDiv",
        saleDetailsSearchTableCreatorFile,
        "saleDetailsTable"
      );
      reportsSaleTableCreator(
        "saleReportsTableDiv",
        saleReportsSearchTableCreatorFile,
        "saleReportsTable"
      );
    },
  });
}

// Function to call the upateVendorDetails.php script to UPDATE vendor data in db
function updateVendor() {
  var vendorDetailsVendorID = $("#vendorDetailsVendorID").val();
  var vendorDetailsVendorFullName = $("#vendorDetailsVendorFullName").val();
  var vendorDetailsVendorMobile = $("#vendorDetailsVendorMobile").val();
  var vendorDetailsVendorPhone2 = $("#vendorDetailsVendorPhone2").val();
  var vendorDetailsVendorAddress = $("#vendorDetailsVendorAddress").val();
  var vendorDetailsVendorEmail = $("#vendorDetailsVendorEmail").val();
  var vendorDetailsVendorAddress2 = $("#vendorDetailsVendorAddress2").val();
  var vendorDetailsVendorCity = $("#vendorDetailsVendorCity").val();
  var vendorDetailsVendorDistrict = $("#vendorDetailsVendorDistrict").val();
  var vendorDetailsStatus = $("#vendorDetailsStatus option:selected").text();

  $.ajax({
    url: "model/vendor/updateVendorDetails.php",
    method: "POST",
    data: {
      vendorDetailsVendorID: vendorDetailsVendorID,
      vendorDetailsVendorFullName: vendorDetailsVendorFullName,
      vendorDetailsVendorMobile: vendorDetailsVendorMobile,
      vendorDetailsVendorPhone2: vendorDetailsVendorPhone2,
      vendorDetailsVendorAddress: vendorDetailsVendorAddress,
      vendorDetailsVendorEmail: vendorDetailsVendorEmail,
      vendorDetailsVendorAddress2: vendorDetailsVendorAddress2,
      vendorDetailsVendorCity: vendorDetailsVendorCity,
      vendorDetailsVendorDistrict: vendorDetailsVendorDistrict,
      vendorDetailsStatus: vendorDetailsStatus,
    },
    success: function (data) {
      $("#vendorDetailsMessage").fadeIn();
      $("#vendorDetailsMessage").html(data);
    },
    complete: function () {
      searchTableCreator(
        "purchaseDetailsTableDiv",
        purchaseDetailsSearchTableCreatorFile,
        "purchaseDetailsTable"
      );
      searchTableCreator(
        "vendorDetailsTableDiv",
        vendorDetailsSearchTableCreatorFile,
        "vendorDetailsTable"
      );
      reportsPurchaseTableCreator(
        "purchaseReportsTableDiv",
        purchaseReportsSearchTableCreatorFile,
        "purchaseReportsTable"
      );
      reportsTableCreator(
        "vendorReportsTableDiv",
        vendorReportsSearchTableCreatorFile,
        "vendorReportsTable"
      );
    },
  });
}

// Function to call the updatePurchase.php script to update purchase data to db
function updatePurchase() {
  var purchaseDetailsItemNumber = $("#purchaseDetailsItemNumber").val();
  var purchaseDetailsPurchaseDate = $("#purchaseDetailsPurchaseDate").val();
  var purchaseDetailsItemName = $("#purchaseDetailsItemName").val();
  var purchaseDetailsQuantity = $("#purchaseDetailsQuantity").val();
  var purchaseDetailsUnitPrice = $("#purchaseDetailsUnitPrice").val();
  var purchaseDetailsPurchaseID = $("#purchaseDetailsPurchaseID").val();
  var purchaseDetailsVendorName = $("#purchaseDetailsVendorName").val();

  $.ajax({
    url: "model/purchase/updatePurchase.php",
    method: "POST",
    data: {
      purchaseDetailsItemNumber: purchaseDetailsItemNumber,
      purchaseDetailsPurchaseDate: purchaseDetailsPurchaseDate,
      purchaseDetailsItemName: purchaseDetailsItemName,
      purchaseDetailsQuantity: purchaseDetailsQuantity,
      purchaseDetailsUnitPrice: purchaseDetailsUnitPrice,
      purchaseDetailsPurchaseID: purchaseDetailsPurchaseID,
      purchaseDetailsVendorName: purchaseDetailsVendorName,
    },
    success: function (data) {
      $("#purchaseDetailsMessage").fadeIn();
      $("#purchaseDetailsMessage").html(data);
    },
    complete: function () {
      getItemStockToPopulate(
        "purchaseDetailsItemNumber",
        getItemStockFile,
        "purchaseDetailsCurrentStock"
      );
      searchTableCreator(
        "purchaseDetailsTableDiv",
        purchaseDetailsSearchTableCreatorFile,
        "purchaseDetailsTable"
      );
      reportsPurchaseTableCreator(
        "purchaseReportsTableDiv",
        purchaseReportsSearchTableCreatorFile,
        "purchaseReportsTable"
      );
      searchTableCreator(
        "itemDetailsTableDiv",
        itemDetailsSearchTableCreatorFile,
        "itemDetailsTable"
      );
      reportsTableCreator(
        "itemReportsTableDiv",
        itemReportsSearchTableCreatorFile,
        "itemReportsTable"
      );
    },
  });
}

// Function to call the updatePayment.php script to update payment data to db
function updatePayment() {
  var paymentDetailsVendorName = $("#paymentDetailsVendorName").val();
  var paymentDetailsPaymentDate = $("#paymentDetailsPaymentDate").val();
  var paymentDetailsPaymentID = $("#paymentDetailsPaymentID").val();
  var paymentDetailsInvoiceNumber = $("#paymentDetailsInvoiceNumber").val();
  var paymentDetailsPaymentStatus = $("#paymentDetailsPaymentStatus").val();
  var paymentDetailsPaidAmount = $("#paymentDetailsPaidAmount").val();
  var paymentDetailsModeofPayment = $("#paymentDetailsModeofPayment").val();
  var paymentDetailsDescription = $("#paymentDetailsDescription").val();
  console.log("up");
  $.ajax({
    url: "model/payment/updatePayment.php",
    method: "POST",
    data: {
      paymentDetailsVendorName: paymentDetailsVendorName,
      paymentDetailsPaymentDate: paymentDetailsPaymentDate,
      paymentDetailsPaymentID: paymentDetailsPaymentID,
      paymentDetailsInvoiceNumber: paymentDetailsInvoiceNumber,
      paymentDetailsPaymentStatus: paymentDetailsPaymentStatus,
      paymentDetailsPaidAmount: paymentDetailsPaidAmount,
      paymentDetailsModeofPayment: paymentDetailsModeofPayment,
      paymentDetailsDescription: paymentDetailsDescription,
    },
    success: function (data) {
      $("#paymentDetailsMessage").fadeIn();
      $("#paymentDetailsMessage").html(data);
    },

  });
}

// Function to call the updateReceipt.php script to update receipt data to db
function updateReceipt() {
  var receiptDetailsCustomerName = $("#receiptDetailsCustomerName").val();
  var receiptDetailsReceiptDate = $("#receiptDetailsReceiptDate").val();
  var receiptDetailsReceiptID = $("#receiptDetailsReceiptID").val();
  var receiptDetailsBillNumber = $("#receiptDetailsBillNumber").val();
  var receiptDetailsPaymentStatus = $("#receiptDetailsPaymentStatus").val();
  var receiptDetailsPaidAmount = $("#receiptDetailsPaidAmount").val();
  var receiptDetailsModeofPayment = $("#receiptDetailsModeofPayment").val();
  var receiptDetailsDescription = $("#receiptDetailsDescription").val();
  console.log("up");
  $.ajax({
    url: "model/receipt/updateReceipt.php",
    method: "POST",
    data: {
      receiptDetailsCustomerName: receiptDetailsCustomerName,
      receiptDetailsReceiptDate: receiptDetailsReceiptDate,
      receiptDetailsReceiptID: receiptDetailsReceiptID,
      receiptDetailsBillNumber: receiptDetailsBillNumber,
      receiptDetailsPaymentStatus: receiptDetailsPaymentStatus,
      receiptDetailsPaidAmount: receiptDetailsPaidAmount,
      receiptDetailsModeofPayment: receiptDetailsModeofPayment,
      receiptDetailsDescription: receiptDetailsDescription,
    },
    success: function (data) {
      $("#receiptDetailsMessage").fadeIn();
      $("#receiptDetailsMessage").html(data);
    },

  });
}

// Function to call the updateSale.php script to update sale data to db
function updateSale() {
  var saleDetailsItemNumber = $("#saleDetailsItemNumber").val();
  var saleDetailsSaleDate = $("#saleDetailsSaleDate").val();
  var saleDetailsItemName = $("#saleDetailsItemName").val();
  var saleDetailsQuantity = $("#saleDetailsQuantity").val();
  var saleDetailsUnitPrice = $("#saleDetailsUnitPrice").val();
  var saleDetailsSaleID = $("#saleDetailsSaleID").val();
  var saleDetailsCustomerName = $("#saleDetailsCustomerName").val();
  var saleDetailsDiscount = $("#saleDetailsDiscount").val();
  var saleDetailsCustomerID = $("#saleDetailsCustomerID").val();
  var saleDetailsBatchNumber = $("#saleDetailsBatchNumber").val();
  var saleDetailsExpiryDate = $("#saleDetailsExpiryDate").val();
  var saleDetailsMRP = $("#saleDetailsMRP").val();
  var saleDetailsGST = $("#saleDetailsGST").val();
  var saleDetailsBillNumber = $("#saleDetailsBillNumber").val();

  $.ajax({
    url: "model/sale/updateSale.php",
    method: "POST",
    data: {
      saleDetailsItemNumber: saleDetailsItemNumber,
      saleDetailsSaleDate: saleDetailsSaleDate,
      saleDetailsItemName: saleDetailsItemName,
      saleDetailsQuantity: saleDetailsQuantity,
      saleDetailsUnitPrice: saleDetailsUnitPrice,
      saleDetailsSaleID: saleDetailsSaleID,
      saleDetailsCustomerName: saleDetailsCustomerName,
      saleDetailsDiscount: saleDetailsDiscount,
      saleDetailsCustomerID: saleDetailsCustomerID,
      saleDetailsBatchNumber: saleDetailsBatchNumber,
      saleDetailsExpiryDate: saleDetailsExpiryDate,
      saleDetailsMRP: saleDetailsMRP,
      saleDetailsGST: saleDetailsGST,
      saleDetailsBillNumber: saleDetailsBillNumber,
    },
    success: function (data) {
      $("#saleDetailsMessage").fadeIn();
      $("#saleDetailsMessage").html(data);
    },
    complete: function () {
      getItemStockToPopulate(
        "saleDetailsItemNumber",
        getItemStockFile,
        "saleDetailsTotalStock"
      );
      searchTableCreator(
        "saleDetailsTableDiv",
        saleDetailsSearchTableCreatorFile,
        "saleDetailsTable"
      );
      reportsSaleTableCreator(
        "saleReportsTableDiv",
        saleReportsSearchTableCreatorFile,
        "saleReportsTable"
      );
      searchTableCreator(
        "itemDetailsTableDiv",
        itemDetailsSearchTableCreatorFile,
        "itemDetailsTable"
      );
      reportsTableCreator(
        "itemReportsTableDiv",
        itemReportsSearchTableCreatorFile,
        "itemReportsTable"
      );
    },
  });
}
