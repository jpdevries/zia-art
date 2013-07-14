<?php

function get_heaader($class) {
	?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
		<title>Robb Sturtcman Portfolio</title>
		<link rel="apple-touch-icon-precomposed" href="assets/images/apple-touch-icon-precomposed.png"/>
		<link rel="stylesheet" type="text/css" href="assets/facebox/facebox.css" media="screen" />
		<script src="assets/javascript/vendor/modernizr-2.6.2.min.js"></script>
		<link rel="stylesheet" type="text/css" href="assets/css/main.css" media="screen" />
		<base href="http://localhost/~jP/zia/" />
		<!--script type="text/javascript" language="javascript" src="assets/javascript/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" language="javascript" src="assets/javascript/jcarousellite_1.0.1.min.js"></script-->

		<!--script type="text/javascript" language="javascript" src="assets/javascript/zia.jquery.js"></script>
		<script src="assets/fancybox/jquery.fancybox-1.3.1.pack.js" type="text/javascript" charset="utf-8"></script>
		<script src="assets/fancybox/jquery.easing-1.3.pack.js" type="text/javascript" charset="utf-8"></script>
		<script src="assets/javascript/iscroll.js" type="text/javascript" charset="utf-8"></script-->
			
		<link rel="stylesheet" href="assets/fancybox/jquery.fancybox-1.3.1.css" type="text/css" media="screen" title="no title" charset="utf-8" />
	</head>
	<body>
		<div id="wrapper" class="<?php echo $class; ?>">
			<a id="logo" href="http://zia-art.com" title="Zia Art">Home</a>
			<div id="main_nav">
				<ul>
					<li id='nav_home'><a href="index.php" title="Home">Home</a></li>
					<li id='nav_illustration'><a href="illustration.php" title="Illustration">Illustration</a></li>
					<li id='nav_design'><a href="design.php" title="Design">Design</a></li>
					<li id='nav_branding'><a href="branding.php" title="Branding">Branding</a></li>			
			  <!--  <li id='nav_web'><a href="web.php" title="Web">Web</a></li>		
				    <li id='nav_craft'><a href="craft.php" title="Craft">Craft</a></li>
					<li id='nav_print'><a href="print.php" title="Print">Print</a></li>
					<li id='nav_logos'><a href="logos.php" title="Logos">Logos</a></li>
					<li id='nav_packaging'><a href="packaging.php" title="Packaging">Packaging</a></li>  -->
				    <li id="kachina"></li>
				</ul>
			</div>
<?php }

?>

<?php
function get_footer() { ?>
	<div id="footer">
		<ul>
			<li><a href="mailto:robb@zia-art.com?" id="email">Email</a></li>
			<li id="phone"><a target="_self" id="phone">Phone</a></li>
		</ul>
	</div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="assets/javascript/vendor/jquery-1.4.2.min.js"><\/script>')</script>
    <script src="assets/javascript/main-min.js"></script>
<?php } ?>
