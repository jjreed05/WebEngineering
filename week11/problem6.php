<html>
	<head>
		<title>Week 11 : Problem 6</title>
	</head>
	<body>
		<p>
			<?php
				$input = $_POST['input6'];
				$texts = explode(",",$input);
				sort($texts);
			
				foreach($texts as $text){
					echo "$text<br/>";
				}
			?>
		</p>
	</body>
</html>