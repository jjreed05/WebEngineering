<html>
	<head>
		<title>Week 11 : Problem 4</title>
	</head>
	<body>
		<p>
			<?php
				$english = $_POST['input4'];
				$translate = array( 'one' => 'uno', 'two' => 'dos',
									'three' => 'tres', 'four' => 'cuatro',
									'five' => 'cinco', 'six' => 'seis',
									'seven' => 'siete', 'eight' => 'ocho',
									'nine' => 'nueve', 'ten' => 'diez',
									'eleven' => 'once', 'twelve' => 'doce',
									'thirteen' => 'trece', 'fourteen' => 'catorce',
									'fifteen' => 'quince', 'sixteen' => 'dieciseis',
									'seventeen' => 'diecisiete', 'eighteen' => 'dieciocho',
									'nineteen' => 'diecinueve', 'twenty' => 'viente');
				$spanish = $translate[$english];
				if($spanish != null){
					echo "The word \"$english\" in Spanish is \"$spanish\"";
				}
				else {
					echo "The English cardinal \"$english\" is not between \"one\" and \"twenty\"";
				}
			?>	
		</p>
	</body>
</html>