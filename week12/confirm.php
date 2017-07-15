<html>
<head>
	<title><?php echo $_POST['submit'] .' Order';?></title>
	<link rel="stylesheet" type="text/css" href="week07.css">
</head>
<body>
<br/>

<!--Title of the Page-->
<div class="header">
    <h1><?php echo $_POST['submit'] .' Order';?></h1>
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
	<h4>Home->Packages->Billing Information->Order Confirmation->Confirmed/Cancelled</h4>
</div>

<div class="mainBody">
	<?php
		if ($_POST['submit'] === "Confirmed"){
			echo '<h2>Your Order Has Been Confirmed!</h2>';
			echo '<p>Thank you for shopping with us. Please allow 3-5 days for the item to arrive</p>';
		}
		else{
			echo '<h2>Your Order Has Been Cancelled</h2>';
			echo '<p>The order that you placed was cancelled. Feel free to make another order</p>';
		}
	?>
</div>
</body>
</html>
