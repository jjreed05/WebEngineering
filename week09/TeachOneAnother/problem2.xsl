<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xml:output method="xml"/>

<xsl:template match="node()|@*">
	<xsl:copy>
		<xsl:apply-templates select="node()|@*"/>
	</xsl:copy>
</xsl:template>

<xsl:template match="playlist">
	<xsl:copy>
		<tracklist>
			<xsl:apply-templates select="node()|@*"/>
		</tracklist>
	</xsl:copy>
</xsl:template>

</xsl:stylesheet>