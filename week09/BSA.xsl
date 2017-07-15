<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

<xsl:template match="node()|@*">
	<xsl:copy>
		<xsl:apply-templates select="node()|@*"/>
	</xsl:copy>
</xsl:template>

<xsl:template match="/">
<html>
<head>
	<title>Boy Scouts of America</title>
	<style>
	table{
		border:2px solid black;
		border-collapse: collapse;
	}
	th{
		background-color: #168fd4;
	}
	td{
		border:1px solid black;
	}
	tr:nth-child(even){
		background-color: #f2f2f2;
	}
	.council{
		border: 2px solid red;
		background-color: lightgrey;
		padding: 10px;
		margin-bottom: 30px;
	}
	h1{
		text-align: center;
	}
	h3{
		font-style: italic;
	}	

	</style>
</head>

<body>
	<h1>Boy Scouts of America</h1>
	<xsl:for-each select="bsa/council">
		<div class="council">
		<h2><xsl:value-of select="@name"/></h2>
			<xsl:for-each select="troop">
		
			<h3>Troop <xsl:value-of select="@number"/>, <xsl:value-of 
				select="@name"/></h3>
		
			<table cellpadding="15">
				<tr class="Heading">
					<th>First Name</th>
					<th>Last Name</th>
					<th>Phone</th>
					<th>Street</th>
					<th>City</th>
					<th>Ranks</th>
					<th>Merit Badges</th>
				</tr>
			
				<xsl:for-each select="scout">
				<tr class="TableBody">
					<td><xsl:value-of select="firstname"/></td>
					<td><xsl:value-of select="lastname"/></td>
					<td><xsl:value-of select="phone"/></td>
					<td><xsl:value-of select="address/street"/></td>
					<td><xsl:value-of select="address/city"/></td>
					<td>
						<select>
							<xsl:for-each select="rank">
							<option><xsl:value-of select="current()"/> (<xsl:value-of
							select="@date-earned"/>)</option>
							</xsl:for-each>
						</select>
					</td>
					<td>
						<select>
							<xsl:for-each select="meritbadge">
							<option><xsl:value-of select="current()"/> (<xsl:value-of
							select="@date-earned"/>)</option>
							</xsl:for-each>
						</select>
					</td>
				</tr>
				</xsl:for-each>
			
			</table>
			</xsl:for-each>
		</div>
	</xsl:for-each>
		
</body>
</html>
</xsl:template>



</xsl:stylesheet>