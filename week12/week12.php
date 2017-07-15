<html>
<head>
	<title>Order Confirmation</title>
	<link rel="stylesheet" type="text/css" href="week07.css">

</head>
<body>
<br/>

<!--Title of the Page-->
<div class="header">
    <h1>Order Confirmation</h1>
</div>
<header>

<!--Navigation Bar-->
<div class="container">
	<nav>
	<ul>
		<li><a>Home</a></li>
    <li><a href="stub.html">Packages</a></li>
    <li><a>Supplements</a></li>
		<li><a>Contact us</a></li>
	</ul>
	</nav>
</div>
</header>
     
<div class="landmark">
	<h4>Home->Packages->Billing Information->Order Confirmation</h4>
</div>

<div class="mainBody">
<form action="confirm.php" method="post">
	<h2>Please Review the Following Information</h2>
	<h2>#1: Name</h2>
	<h3><?php 
		echo $_POST['firstname']; 
		echo ' ';
		echo $_POST['lastname']; ?>
	<h2>#2: Address</h2>
	<h3><?php 
		echo 'Street: ';
		echo $_POST['street'];
		echo '<br/>City: ';
		echo $_POST['city'];
		echo '<br/>State: ';
		echo $_POST['state'];
		echo '<br/>Zip: ';
		echo $_POST['zip'];
	?></h3>
	<h2>#3: Phone & Email</h2>
	<h3><?php
		echo $_POST['phone'];
		echo '<br/>' .$_POST['email'];
	?></h3>
	<h2>#4: Items</h2>
	<h3><?php
		echo $_POST['package'];
	?></h3>
	<h2>#5: Total</h2>
	<h3><?php
		$shipping = 0;
		if ($_POST['package'] === "Package 1: Pre-Workout"){
			$cost = 29.99;
			
		}
		else if ($_POST['package'] === "Package 2: Protein Powder"){
			$cost = 49.99;
		}
		else {
			$cost = 59.99;
		}
		$tax = round($cost * .06, 2);
		$total = round(($cost + $tax), 2);
		echo 'Cost: $' .$cost;
		echo '<br/>Shipping: $';
		echo number_format((float)$shipping, 2, '.', '');
		echo '<br/>Tax: $';
		echo number_format((float)$tax, 2, '.', '');
		echo '<br/>Total: $';
		echo number_format((float)$total, 2, '.', '');
	?></h3>
	<h2>#6: Payment</h2>
	<h3><?php
		$card = $_POST['card'];
	    switch (substr($card, 0, 1)){
            case "3":
				$cardType = 'American Express';
                break;
            case "4":
                $cardType = 'Visa';
                break;
            case "5":
                $cardType = 'Master Card';
                break;
            case "6":
                $cardType = 'Discover';
                break;
            default:
                $cardType = 'Unknown';
                break;
              }
        $month = array(1=>"January", "February", "March", "April",
							"May", "June", "July", "August",
                            "September", "October", "November", "December");
		echo $cardType .' card with the expiration date of ' .$month[$_POST['month']] .' ' .$_POST['year'];
	?></h3>	
    <button name="submit" value="Confirmed">Confirm</button> 
    <button name="submit" value="Canceled">Cancel</button>

</form>
</div> 

</body>
</html>