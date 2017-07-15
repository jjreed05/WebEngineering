<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
	<head>
		<style>
		.tableTop{
			background:blue;
			color:white;
		}
		.tableBody{
			border:2px solid black;
		}
		</style>
	</head>
	<body>
		<table>
			<tr>
				<td class="tableTop">Name</td>
				<td class="tableTop">Size</td>
				<td class="tableTop">Type</td>
			</tr>
			<xsl:for-each select="directory/file">
			<tr>
				<td class="tableBody"><xsl:value-of select="@name"/></td>
				<td class="tableBody"><xsl:value-of select="@type"/></td>
				<td class="tableBody"><xsl:value-of select="@size"/></td>
			</tr>
			</xsl:for-each>
		</table>
	</body>
</html>
</xsl:template>

</xsl:stylesheet>