<html>
	<head>
		<title>Week 11 : Problem 5</title>
		<style>
			table{
				border-collapse: collapse;
				width: 20%;
				margin-left: 50px;
				margin-top: 50px;
			}
			td, th{
				border: 1px solid black;
				text-align: center;
			}
			tr:nth-child(even){background-color: #f2f2f2}
		</style>
	</head>
	<body>
		<table>
			<tr>
				<th>N</th>
				<th>X<sup>2</sup></th>
			</tr>
			<?php
				$x = $_POST['x'];
				$n = $_POST['n'];
				for ($i = 1; $i <= $n; $i++) {
					$answer = pow($x, $i);
					echo "<tr><td>".$i."</td>";
					echo "<td>".$answer."</td></td>";
				}
			?>	
		</table>
	</body>
</html>