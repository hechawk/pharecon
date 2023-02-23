<?php if (strlen(session_id()) < 1) {
session_start();
} ?><?php ob_start(); ?>
<?php header('pwa-no-cache: true'); ?>

<?php if (file_exists('../../rw_common/plugins/stacks/total-cms/interim.check')) setcookie("total-interim",true,time()+10); ?><!doctype html>
<html class="no-js no-touch"  lang="de">
<head>
    <meta charset="utf-8" />
	<title>Admin - Stellenanzeigen</title>

	<meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

	<meta name="theme-version" content="6.11.7" />
	<meta name="foundation-version" content="6.7.5" />
	<meta name="theme-jquery" content="../../rw_common/themes/foundation6/jquery.min.js" />

	<link rel="preload" as="script" href="../../rw_common/themes/foundation6/foundation.js?rwcache=689175030" />

	
<script type="application/javascript" src="https://app.usercentrics.eu/latest/main.js" id="eSdtMIxWg"></script>

<meta data-privacy-proxy-server="https://privacy-proxy-server.usercentrics.eu">
<script type="application/javascript" src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js">
</script>

<script>
var gaProperty = 'UA-177602663-1';
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
	window[disableStr] = true;
}
function gaOptout() {
	document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
	window[disableStr] = true;
	alert('Das Tracking durch Google Analytics wurde in Ihrem Browser f&uuml;r diese Website deaktiviert.');
}
</script>
<script type="text/plain" data-usercentrics="Google Analytics" async src="https://www.googletagmanager.com/gtag/js?id=UA-177602663-1"></script>
<script type="text/plain" data-usercentrics="Google Analytics">
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-177602663-1', { 'anonymize_ip': true });
</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="language" content="de" />
		<meta name="description" content="Admin-Bereich von Pharecon, Personalberatung in D-A-CH, die Experten im Sektor Life Science mit &uuml;ber 20 Jahren Erfahrung." />
		<meta name="robots" content="index, follow" />
		<meta name="generator" content="RapidWeaver" />
		<link rel="apple-touch-icon" sizes="180x180" href="https://www.pharecon.de/resources/large.png" />
<link rel="apple-touch-icon" sizes="167x167" href="https://www.pharecon.de/resources/medium.png" />
<link rel="icon" type="image/png" href="https://www.pharecon.de/resources/favicon_large.png" sizes="64x64" />
<link rel="icon" type="image/png" href="https://www.pharecon.de/resources/favicon_medium.png" sizes="32x32" />
<link rel="apple-touch-icon" sizes="152x152" href="https://www.pharecon.de/resources/small.png" />
<link rel="icon" type="image/x-icon" href="https://www.pharecon.de/resources/favicon.ico" sizes="16x16" />

	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="Admin - Stellenanzeigen">
	<meta name="twitter:description" content="Admin-Bereich von Pharecon, Personalberatung in D-A-CH, die Experten im Sektor Life Science mit über 20 Jahren Erfahrung.">
	<meta name="twitter:url" content="https://www.pharecon.de/admin/admin-stellenanzeigen/index.php">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="Personalberatung Direktansprache von Fach- und Führungskräften">
	<meta property="og:title" content="Admin - Stellenanzeigen">
	<meta property="og:description" content="Admin-Bereich von Pharecon, Personalberatung in D-A-CH, die Experten im Sektor Life Science mit über 20 Jahren Erfahrung.">
	<meta property="og:url" content="https://www.pharecon.de/admin/admin-stellenanzeigen/index.php">

	

	<template id="plugin-header">
	<link rel="stylesheet" type="text/css" media="all" href="../../rw_common/themes/foundation6/consolidated.css?rwcache=689175030" />
		
			<link rel='stylesheet' type='text/css' media='all' href='../../rw_common/plugins/stacks/stacks.css?rwcache=689175030' />
<link rel="stylesheet" type="text/css" media="all" href="../../rw_common/plugins/stacks/wysiwyg-content.css?rwcache=689175030" /><link rel="stylesheet" type="text/css" media="all" href="../../rw_common/plugins/stacks/wysiwyg-editor.css?rwcache=689175030" />		<link rel='stylesheet' type='text/css' media='all' href='files/stacks_page_page12.css?rwcache=689175030' />
        <script type='text/javascript' charset='utf-8' src='../../rw_common/plugins/stacks/jquery-2.2.4.min.js?rwcache=689175030'></script>
        
        <link rel="stylesheet" href="../../rw_common/plugins/stacks/font-awesome.min.css?rwcache=689175030">
        
<script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/jscookie.min.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/Sortable.min.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/afterselect.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/fullscreen.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/dropzone.min.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/base64.min.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/moment-with-locales.min.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/wysiwyg-editor.min.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/markdown.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/textrange.min.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/foundation-datepicker.min.js?rwcache=689175030"></script><script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/awesomplete.min.js?rwcache=689175030"></script>		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <link rel="stylesheet" href="../../rw_common/plugins/stacks/utility.css?rwcache=689175030" /> 

		<script type='text/javascript' charset='utf-8' src='files/stacks_page_page12.js?rwcache=689175030'></script>
        <meta name="formatter" content="Stacks v4.2.5 (6054)" >
		<meta class="stacks4 stack version" id="ws.foundation.topbar" name="Top Bar" content="6.11.7">
		<meta class="stacks4 stack version" id="com.bigwhiteduck.stacks.sections_pro.fixed_element" name="Sections Fix Pro" content="3.1.0">
		<meta class="stacks4 stack version" id="ws.foundation.styles.padding" name="Padding" content="6.11.7">
		<meta class="stacks4 stack version" id="spacer" name="Spacer" content="">
		<meta class="stacks4 stack version" id="horizontal-line" name="Horizontal Line" content="">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.extracontent" name="Extra Content" content="1.10.22">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.date" name="Date" content="1.10.22">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.title" name="Title" content="1.10.22">
		<meta class="stacks4 stack version" id="ws.foundation.styles.shadow" name="Shadow v6.8.9" content="6.11.7">
		<meta class="stacks4 stack version" id="com.marathia.stacks.smart2columns2" name="Smart2columns2" content="2.4.2">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.draft" name="Draft" content="1.10.22">
		<meta class="stacks4 stack version" id="ws.foundation.styles.menu" name="Menu Styles" content="6.11.7">
		<meta class="stacks4 stack version" id="ws.foundation.utilityclasses" name="Utility Classes" content="6.11.7">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.pagesafe" name="Page Safe" content="1.8.2">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.styles" name="Admin Core" content="1.10.22">
		<meta class="stacks4 stack version" id="ws.foundation.drilldown" name="Drilldown" content="6.11.7">
		<meta class="stacks4 stack version" id="ws.foundation.link" name="Link" content="6.11.7">
		<meta class="stacks4 stack version" id="com.bigwhiteduck.stacks.stylepro.background" name="Background" content="3.1.2">
		<meta class="stacks4 stack version" id="com.bigwhiteduck.stacks.menulab.chroma" name="Chroma" content="1.1.0">
		<meta class="stacks4 stack version" id="com.bigwhiteduck.stacks.menulab.chroma.marker" name="Chroma Marker" content="1.1.0">
		<meta class="stacks4 stack version" id="ws.foundation.svg" name="SVG" content="6.11.7">
		<meta class="stacks4 stack version" id="ws.foundation.1col" name="1 Column" content="6.11.7">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.permalink2" name="Permalink" content="1.10.22">
		<meta class="stacks4 stack version" id="ws.foundation.submenu" name="SubMenu" content="6.11.7">
		<meta class="stacks4 stack version" id="ws.foundation.sticky" name="Sticky" content="6.11.7">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.summary" name="Summary" content="1.10.22">
		<meta class="stacks4 stack version" id="uk.co.doobox.bellboy" name="Bell Boy" content="1.0.3">
		<meta class="stacks4 stack version" id="ws.foundation.visibility" name="Visibility" content="6.11.7">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.tags" name="Tags" content="1.10.22">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.categories" name="Categories" content="1.10.22">
		<meta class="stacks4 stack version" id="ws.foundation.styles.bg2" name="Background v6.7.5" content="6.11.7">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.save" name="Button" content="1.10.22">
		<meta class="stacks4 stack version" id="ws.foundation.styles.topbar" name="Top Bar Styles" content="6.11.7">
		<meta class="stacks4 stack version" id="com.bigwhiteduck.stacks.headerpro" name="Header Pro" content="1.2.2">
		<meta class="stacks4 stack version" id="ws.foundation.styles" name=" Site Styles" content="6.11.7">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.content" name="Content" content="1.10.22">
		<meta class="stacks4 stack version" id="ws.foundation.menu.item" name="Menu Item" content="6.11.7">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.featured" name="Featured" content="1.10.22">
		<meta class="stacks4 stack version" id="ws.foundation.container" name=" Container" content="6.11.7">
		<meta class="stacks4 stack version" id="com.bigwhiteduck.stacks.paragraphpro" name="Paragraph Pro" content="1.2.0">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog" name="Blog Form" content="1.10.22">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.jack4" name="Jack" content="4.1.9">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.totalcms.admin.blog.genre" name="Genre" content="1.10.22">
		<meta class="stacks4 stack version" id="com.bigwhiteduck.stacks.sections_pro.section" name="Sections Pro" content="3.1.0">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.fontpro.webfont" name="Web Font Pro" content="1.4.6">
		<meta class="stacks4 stack version" id="ws.pen" name="Pen" content="1.7.0">
		<meta class="stacks4 stack version" id="com.joeworkman.stacks.fluidimage" name="Fluid Image" content="2.1.1">
		<meta class="stacks4 stack version" id="ws.foundation.group" name="Group" content="6.11.7">
		<meta class="stacks4 stack version" id="ws.foundation.preloader" name="Preloader" content="6.11.7">
		

	</template>

	<script integrity="sha384-MTMlLIIJtfy2emLVMZ21l4DeLBPlPopFgvIHycCZbD6KPmcb2gyh+UZ0jgZ3zFya">if(!window.navigator.userAgent.match("Trident")){var pluginHeader=document.getElementById("plugin-header").content.cloneNode(!0),f6jq3=document.getElementById("f6jq3")||pluginHeader.getElementById("f6jq3"),jqueryMatch=/jquery-\d\.\d\.\d\.min\.js/;!function(){if("127.0.0.1"!==window.document.domain){const e=e=>{const t=document.createElement("link");t.rel="preload",t.as="script",t.href=e.src,document.head.appendChild(t)},t=Array.from(pluginHeader.querySelectorAll("script"));for(const n of t)n.src&&(f6jq3&&n.src.match(jqueryMatch)||e(n))}const e=Array.from(pluginHeader.querySelectorAll("link")),t=document.getElementById("csspref")||pluginHeader.getElementById("csspref"),n=document.getElementById("no-utility-css")||pluginHeader.getElementById("no-utility-css");let r=!1;for(const c of e)c.href.match("stacks.css")||(c.href.match("fa5pro.css")&&(r=!0),c.href.match("js-fa5pro.css")||!0===r&&c.href.match("font-awesome.min.css")||n&&c.href.match("utility.css")||(t||c.href.match("fa5pro")||c.href.match("animate.min.css")?document.head.appendChild(c):document.write(c.outerHTML)))}()}</script>
	
	<!-- 03.11.22 -->
</head>

<body class="antialiased">



<div id='stacks_out_1' class='stacks_top'><div id='stacks_in_1' class=''><div id='stacks_out_1143' class='stacks_out'><div id='stacks_in_1143' class='stacks_in '>  <div id="foundation-preloader"  style="margin:0;padding:24px;display:flex;align-items:center;background-color:rgba(255, 255, 255, 1.00);position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:999999;transition:1s opacity ease-out;"> <div style="margin:0 auto;text-align:center">  <style> #foundation-preloader .color-fill{fill:rgba(118, 184, 42, 1.00);} #foundation-preloader .color-stroke{stroke:rgba(118, 184, 42, 1.00);} </style> <svg class="color-stroke" width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6" stroke-opacity="0"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"/><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="6" stroke-opacity="0"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"/><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"/></circle></g></svg> <p style="margin-top:8px;color:rgba(255, 255, 255, 1.00)"></p> </div> </div>  <script> window.addEventListener('load', (event) => { var preloader=document.getElementById('foundation-preloader'); setTimeout(function(){ preloader.style.opacity=0; setTimeout(() => preloader.style.display='none',1200); },0); }); </script>  
 
   
 
 
 
 
 
 
 
 
       
    
    
    
    
    
    
    
    
    
    
  
  
 
 
 
 
 
 
 
  
  
 
 
  
  <div class='slice empty out'><div class='slice empty in'></div></div>   
</div></div>

<?php
$cookie = str_replace(" ", "", 'pagesafe');
if (isset($_GET["logout"])) {
    setcookie($cookie, '', 1, '/');
    unset($_SESSION[$cookie]);
    session_unset();
    session_destroy();
    session_start();
    $current_url = explode("?", $_SERVER['REQUEST_URI']);
    header('Location: '.$current_url[0]);
}
$_SESSION[$cookie] = false;
if (isset($_COOKIE[$cookie])) {
    $_SESSION[$cookie] = password_verify($cookie.session_id(), $_COOKIE[$cookie]);
}
if ($_SESSION[$cookie] === false) {
    ob_get_clean(); // discard everything above
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
	<meta name="ROBOTS" content="NOINDEX, NOFOLLOW">

	<title>Enter the passcode to login</title>

	<?php
    // Support PWA if it exists on the page
    echo $pageSpeedHeader??""; ?>

	<link rel="stylesheet" href="files/stacks_in_1381_pagesafe.css?rwcache=689175030" />
</head>
<body class="color linear  ">

<section id="pagesafe-wrapper" class="">

	<form id="pagesafe" class="input-password icon-keyhole digits4" method="post" action="files/stacks_in_1381_pagesafe.php" data-action="files/stacks_in_1381_pagesafe.php">

		
		<svg id="icon" width="50%" height="50%" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stop-color="#B4ED50" offset="0%"></stop><stop stop-color="#429321" offset="43.3992347%"></stop></linearGradient><linearGradient x1="50%" y1="12.8926772%" x2="50%" y2="129.707617%" id="linearGradient-2"><stop stop-color="#42AD3F" offset="0%"></stop><stop stop-color="#B4ED50" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="97.9174516%" x2="50%" y2="19.7989543%" id="linearGradient-3"><stop stop-color="#B4ED50" offset="0%"></stop><stop stop-color="#356921" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-4"><stop stop-color="#F55160" offset="0%"></stop><stop stop-color="#9F031B" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-5"><stop stop-color="#E91D2F" offset="0%"></stop><stop stop-color="#CC1C36" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="97.5050407%" x2="50%" y2="2.58208243%" id="linearGradient-6"><stop stop-color="#F5515F" offset="0%"></stop><stop stop-color="#9F031B" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="43.3992347%" id="linearGradient-7"><stop stop-color="#FFFFFF" offset="0%"></stop><stop stop-color="#4E534C" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="12.8926772%" x2="50%" y2="129.707617%" id="linearGradient-8"><stop stop-color="#989898" offset="0%"></stop><stop stop-color="#F8F8F8" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="97.9174516%" x2="50%" y2="19.7989543%" id="linearGradient-9"><stop stop-color="#FFFFFF" offset="0%"></stop><stop stop-color="#565656" offset="100%"></stop></linearGradient><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-10"><feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetInner1"></feOffset><feGaussianBlur stdDeviation="1.5" in="shadowOffsetInner1" result="shadowBlurInner1"></feGaussianBlur><feComposite in="shadowBlurInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.35 0" in="shadowInnerInner1" type="matrix" result="shadowMatrixInner1"></feColorMatrix><feMerge><feMergeNode in="SourceGraphic"></feMergeNode><feMergeNode in="shadowMatrixInner1"></feMergeNode></feMerge></filter><radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="86.8979379%" id="radialGradient-11"><stop stop-color="#FFFFFF" offset="0%"></stop><stop stop-color="#000000" offset="100%"></stop></radialGradient><linearGradient x1="50%" y1="38.8427734%" x2="50%" y2="100%" id="linearGradient-12"><stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop><stop stop-color="#000000" stop-opacity="0.6" offset="100%"></stop></linearGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="lock" sketch:type="MSLayerGroup" transform="translate(7.000000, 7.000000)"><path d="M284.522,142.363 C284.522,220.723 220.999,284.244 142.638,284.244 C64.277,284.244 0.755,220.723 0.755,142.363 C0.755,64.002 64.277,0.48 142.638,0.48 C220.999,0.48 284.522,64.002 284.522,142.363" id="outer-ring" fill="#1D1E1C" sketch:type="MSShapeGroup"></path><g id="success-ring" transform="translate(3.000000, 3.000000)" sketch:type="MSShapeGroup"><path d="M278.367,139.363 C278.367,215.98 216.258,278.092 139.638,278.092 C63.02,278.092 0.909,215.98 0.909,139.363 C0.909,62.745 63.02,0.632 139.638,0.632 C216.258,0.632 278.367,62.745 278.367,139.363" id="Success-Out" fill="url(#linearGradient-1)"></path><path d="M272.692,139.363 C272.692,212.848 213.124,272.415 139.638,272.415 C66.151,272.415 6.584,212.848 6.584,139.363 C6.584,65.876 66.151,6.309 139.638,6.309 C213.124,6.309 272.692,65.876 272.692,139.363" id="Success" fill="url(#linearGradient-2)"></path><path d="M253.775,139.363 C253.775,202.398 202.676,253.496 139.636,253.496 C76.6,253.496 25.502,202.398 25.502,139.363 C25.502,76.327 76.6,25.227 139.636,25.227 C202.676,25.227 253.775,76.327 253.775,139.363" id="Success-In" fill="url(#linearGradient-3)"></path></g><g id="error-ring" transform="translate(3.000000, 3.000000)" sketch:type="MSShapeGroup"><path d="M278.367,139.363 C278.367,215.98 216.258,278.092 139.638,278.092 C63.02,278.092 0.909,215.98 0.909,139.363 C0.909,62.745 63.02,0.632 139.638,0.632 C216.258,0.632 278.367,62.745 278.367,139.363" id="Error-Out" fill="url(#linearGradient-4)"></path><path d="M272.692,139.363 C272.692,212.848 213.124,272.415 139.638,272.415 C66.151,272.415 6.584,212.848 6.584,139.363 C6.584,65.876 66.151,6.309 139.638,6.309 C213.124,6.309 272.692,65.876 272.692,139.363" id="Error" fill="url(#linearGradient-5)"></path><path d="M253.775,139.363 C253.775,202.398 202.676,253.496 139.636,253.496 C76.6,253.496 25.502,202.398 25.502,139.363 C25.502,76.327 76.6,25.227 139.636,25.227 C202.676,25.227 253.775,76.327 253.775,139.363" id="Error-In" fill="url(#linearGradient-6)"></path></g><g id="default-ring" transform="translate(3.000000, 3.000000)" sketch:type="MSShapeGroup"><path d="M278.367,139.363 C278.367,215.98 216.258,278.092 139.638,278.092 C63.02,278.092 0.909,215.98 0.909,139.363 C0.909,62.745 63.02,0.632 139.638,0.632 C216.258,0.632 278.367,62.745 278.367,139.363" id="Default-Out" fill="url(#linearGradient-7)"></path><path d="M272.692,139.363 C272.692,212.848 213.124,272.415 139.638,272.415 C66.151,272.415 6.584,212.848 6.584,139.363 C6.584,65.876 66.151,6.309 139.638,6.309 C213.124,6.309 272.692,65.876 272.692,139.363" id="Default" fill="url(#linearGradient-8)"></path><path d="M253.775,139.363 C253.775,202.398 202.676,253.496 139.636,253.496 C76.6,253.496 25.502,202.398 25.502,139.363 C25.502,76.327 76.6,25.227 139.636,25.227 C202.676,25.227 253.775,76.327 253.775,139.363" id="Default-In" fill="url(#linearGradient-9)"></path></g><g id="keyhole" transform="translate(35.000000, 36.000000)" sketch:type="MSShapeGroup"><path d="M107.638,3.155 C165.184,3.155 211.846,49.819 211.846,107.363 C211.846,158.666 174.395,202.468 123.747,210.329 L123.559,210.357 L123.559,201.086 C123.559,198.494 121.548,196.361 118.962,196.208 C110.494,195.71 107.793,185.116 107.793,178.187 C107.793,171.296 109.774,160.147 118.675,160.147 C121.364,160.147 123.559,157.952 123.559,155.262 L123.559,118.061 C123.559,115.372 121.364,113.176 118.675,113.176 L115.521,113.176 C111.264,113.176 107.793,109.706 107.793,105.449 L107.793,104.462 C107.793,102.61 108.381,100.976 109.559,99.546 L113.839,94.355 C115.083,92.849 115.678,91.197 115.678,89.243 L115.678,76.679 C115.678,75.728 114.9,74.948 113.943,74.948 L101.333,74.948 C100.381,74.948 99.599,75.728 99.599,76.679 L99.599,85.688 C99.599,88.304 98.778,90.596 97.114,92.611 L92.834,97.802 C92.074,98.72 91.717,99.716 91.717,100.909 L91.717,113.737 C91.717,116.424 93.911,118.62 96.602,118.62 C105.499,118.62 107.481,129.772 107.481,136.662 C107.481,143.589 104.783,154.188 96.314,154.685 C93.729,154.835 91.717,156.968 91.717,159.559 L91.717,210.357 L91.53,210.329 C40.883,202.468 3.43,158.666 3.43,107.363 C3.43,49.819 50.094,3.155 107.638,3.155 L107.638,3.155 Z M214.68,107.363 C214.68,48.255 166.748,0.322 107.638,0.322 C48.529,0.322 0.597,48.255 0.597,107.363 C0.597,166.467 48.529,214.404 107.638,214.404 C166.748,214.404 214.68,166.467 214.68,107.363 L214.68,107.363 Z" id="Fill-275" fill="#1F201E"></path><path d="M93.159,211.976 C97.891,212.626 102.728,212.96 107.638,212.96 C112.549,212.96 117.386,212.626 122.117,211.976 L122.117,201.086 C122.117,199.256 120.699,197.755 118.876,197.65 C109.514,197.099 106.352,185.96 106.352,178.187 C106.352,170.398 108.792,158.704 118.675,158.704 C120.571,158.704 122.117,157.154 122.117,155.262 L122.117,118.061 C122.117,116.167 120.571,114.617 118.675,114.617 L115.521,114.617 C110.469,114.617 106.352,110.501 106.352,105.449 L106.352,104.462 C106.352,102.275 107.055,100.315 108.445,98.629 L112.728,93.44 C113.763,92.19 114.235,90.863 114.235,89.243 L114.235,76.679 C114.235,76.522 114.101,76.389 113.943,76.389 L101.333,76.389 C101.177,76.389 101.042,76.522 101.042,76.679 L101.042,85.688 C101.042,88.638 100.103,91.254 98.227,93.529 L93.946,98.717 C93.398,99.381 93.159,100.05 93.159,100.909 L93.159,113.737 C93.159,115.628 94.711,117.18 96.602,117.18 C106.48,117.18 108.924,128.873 108.924,136.662 C108.924,144.438 105.76,155.575 96.401,156.123 C94.577,156.23 93.159,157.731 93.159,159.559 L93.159,211.976" id="Fill-284" fill="#2D2E2B" filter="url(#filter-10)"></path><path d="M107.64,3.314 C165.104,3.314 211.692,49.908 211.692,107.363 C211.692,159.347 173.55,202.437 123.726,210.171 L123.726,201.086 C123.726,198.409 121.646,196.204 118.977,196.046 C110.601,195.557 107.957,184.999 107.957,178.187 C107.957,171.419 109.883,160.305 118.683,160.305 C121.458,160.305 123.726,158.038 123.726,155.262 L123.726,118.061 C123.726,115.283 121.458,113.016 118.683,113.016 L115.529,113.016 C111.356,113.016 107.957,109.617 107.957,105.449 L107.957,104.462 C107.957,102.646 108.53,101.049 109.687,99.649 L113.968,94.457 C115.237,92.922 115.841,91.237 115.841,89.243 L115.841,76.679 C115.841,75.637 114.993,74.787 113.951,74.787 L101.335,74.787 C100.292,74.787 99.44,75.637 99.44,76.679 L99.44,85.688 C99.44,88.267 98.633,90.519 96.994,92.509 L92.715,97.7 C91.929,98.649 91.56,99.675 91.56,100.909 L91.56,113.737 C91.56,116.513 93.827,118.782 96.604,118.782 C105.402,118.782 107.327,129.895 107.327,136.662 C107.327,143.473 104.685,154.035 96.309,154.524 C93.64,154.681 91.56,156.883 91.56,159.559 L91.56,210.171 C41.739,202.437 3.593,159.347 3.593,107.363 C3.593,49.908 50.188,3.314 107.64,3.314" id="Fill-295" fill="#FFFFFF"></path><path d="M110.215,107.436 C136.006,108.773 156.519,130.107 156.519,156.234 C156.519,176.871 143.712,194.522 125.617,201.685 L125.617,201.083 C125.617,197.409 122.758,194.374 119.087,194.16 C111.922,193.742 109.847,183.851 109.847,178.187 C109.847,172.654 111.223,162.198 118.683,162.198 C122.502,162.198 125.617,159.081 125.617,155.262 L125.617,118.061 C125.617,114.239 122.502,111.125 118.683,111.125 L115.529,111.125 C113.103,111.125 111.022,109.587 110.215,107.436 L110.215,107.436 Z M58.769,156.234 C58.769,135.593 71.572,117.943 89.669,110.781 L89.669,113.737 C89.669,117.558 92.783,120.673 96.604,120.673 C104.068,120.673 105.432,131.127 105.432,136.662 C105.432,142.329 103.363,152.217 96.199,152.637 C92.528,152.852 89.669,155.882 89.669,159.559 L89.669,201.685 C71.572,194.522 58.769,176.871 58.769,156.234 L58.769,156.234 Z" id="key-circle" fill-opacity="0.5" fill="url(#radialGradient-11)"></path></g><circle id="keyhole-overlay" fill="url(#linearGradient-12)" sketch:type="MSShapeGroup" cx="143" cy="144" r="104"></circle></g></g></svg>
		

		

		<p id="cookie-warning">You have cookies disabled in your browser. Enable cookies to login.</p>

		

		
		<input id="code" name="code" type="password" placeholder="Enter Password" tabindex="1" autofocus="autofocus">
		

		
	</form>
</section>

<footer id="pagesafe-footer">
	

	
</footer>


	<script src="files/stacks_in_1381_pagesafe.js?rwcache=689175030"></script>
<?php
    // hack for RW7 so that it does not add Body content
    echo '</bo'.'dy>'; ?>
</html>
<?php
    if (ob_get_level()) {
        ob_end_flush();
    } // send buffer
    exit;
}
?>




	
		<?php
		if (!isset($cms_foundation_checker)) {
			$cms_foundation_checker = true;
			$page_check = ob_get_clean();
			ob_start();
			echo $page_check;
			if (strpos($page_check,"foundation-version") === false) {
				echo '<link rel="stylesheet" type="text/css" media="all" href="../../rw_common/plugins/stacks/total-cms/total-cms.css"/>'.
					'<script type="text/javascript" charset="utf-8" src="../../rw_common/plugins/stacks/total-cms/total-cms.js"></script>';
			}
		}
		?>
	
	






<!--
	File Preview Template
-->
<template id="file-preview-template">
<div class="dz-preview dz-file-preview">
	<div class="actionbar">
		<a class="filebar-link left float-left"  href="javascript:void(0)" title="Copy File Path"><i class="fa fa-link"></i></a>
		<a class="filebar-trash right float-right" href="javascript:void(0)" title="Delete File"><i class="fa fa-trash-o"></i></a>
	</div>
	<i class="fa file-icon fa-file-o fa-3x"></i>
	<p class="filename"></p>
	<div class="dz-progress">
		<span class="dz-upload" data-dz-uploadprogress></span>
		<span class="dz-upload-progress-label" data-dz-uploadprogress>0%</span>
	</div>
	<i class="fa fa-check-circle"></i>
	<i class="fa fa-times-circle"></i>
</div>
</template>
<!--
	Copy File Path Reveal Template
-->
<template id="imagebar-link-template">
<div id="imagebar-link" class="reveal reveal-modal" data-reveal>
	<h4>Copy File Path</h4>
	<hr/>
	<label>File Path</label>
	<input type="text" name="file" readonly/>
	<a class="close-reveal-modal close-button" data-close>&#215;</a>
</div>
</template>

<!--
	Feed Image Template
-->
<template id="feed-preview-template">
<div class="dz-preview dz-file-preview">
	<div class="actionbar">
		<a class="imagebar-tag left float-left" href="javascript:void(0)" title="Image Description">
			<i class="fa fa-tag"></i>
		</a>
	</div>
	<img oncontextmenu="return false;" draggable="false" data-dz-thumbnail />
	<div class="dz-progress">
		<span class="dz-upload" data-dz-uploadprogress></span>
		<span class="dz-upload-progress-label" data-dz-uploadprogress>0%</span>
	</div>
	<i class="fa fa-check-circle"></i>
	<i class="fa fa-times-circle"></i>
</div>
</template>
<!--
	Feed Edit Template
-->
<template id="feed-edit-template">
<div id="feed-edit" class="reveal reveal-modal" data-reveal>
	<h4>Edit Post</h4>
	<form autocomplete="off" id="form_feed_stacks_in_1333" class="total-form feed-form feed-edit-form" method="post" action="../../rw_common/plugins/stacks/total-cms/totalapi.php">

		<fieldset class="image-box filedrop">

			<div class="total-preview">
				<div class="dz-overlay"><i class="fa  fa-newspaper-o fa-4x"></i></div>
				<div class="dz-preview dz-file-preview empty"></div>
			</div>

		</fieldset>


		<fieldset class="text-box textarea">

			<textarea class="format-selection" spellcheck="true" rows="5" name="feed" data-widearea="enable"></textarea>

		</fieldset>

		<input type="hidden" name="type" value="feed" />
		<input type="hidden" name="timestamp"/>
		<input type="hidden" name="alt"      />
		<input type="hidden" name="strip"    />
		<input type="hidden" name="slug"     />
		<input type="hidden" name="resize"   />
		<input type="hidden" name="quality"  />
		<input type="hidden" name="scale"    />
		<input type="hidden" name="scale_th" />
		<input type="hidden" name="scale_sq" />

		<input type="hidden" name="feed_title"       />
		<input type="hidden" name="feed_description" />
		<input type="hidden" name="feed_link"        />
		<input type="hidden" name="feed_baseurl"     />

		<button class="button radius local" type="submit">Save</button>
	</form>

	<a class="close-reveal-modal close-button" data-close>&#215;</a>
</div>
</template>
<!--
	Feed Edit Hipwig Template
-->
<template id="feed-edit-hipwig-template">
<div id="feed-edit-hipwig" class="reveal reveal-modal" data-reveal>
	<h4>Edit Post</h4>
	<form autocomplete="off" id="form_feed_hipwig_stacks_in_1333" class="total-form feed-form feed-edit-form" method="post" action="../../rw_common/plugins/stacks/total-cms/totalapi.php">

		<fieldset class="image-box filedrop">

			<div class="total-preview">
				<div class="dz-overlay"><i class="fa  fa-newspaper-o fa-4x"></i></div>
				<div class="dz-preview dz-file-preview empty"></div>
			</div>

		</fieldset>


		<fieldset class="text-box textarea hipwig">

			<textarea class="hipwig" data-height="200" spellcheck="true" rows="5" name="feed"></textarea>

		</fieldset>

		<input type="hidden" name="type" value="feed" />
		<input type="hidden" name="timestamp"/>
		<input type="hidden" name="alt"      />
		<input type="hidden" name="strip"    />
		<input type="hidden" name="slug"     />
		<input type="hidden" name="resize"   />
		<input type="hidden" name="quality"  />
		<input type="hidden" name="scale"    />
		<input type="hidden" name="scale_th" />
		<input type="hidden" name="scale_sq" />

		<input type="hidden" name="feed_title"       />
		<input type="hidden" name="feed_description" />
		<input type="hidden" name="feed_link"        />
		<input type="hidden" name="feed_baseurl"     />

		<button class="button radius local" type="submit">Save</button>
	</form>

	<a class="close-reveal-modal close-button" data-close>&#215;</a>
</div>
</template>
<!--
	Blog List Template
-->
<template id="blog-list-template">
<li class="post">
	<time class="post-date"></time>
	<div class="post-action">
		<i class="fa fa-newspaper-o"></i>
		<i class="fa fa-video-camera"></i>
		<i class="fa fa-quote-left float-left"></i>
		<i class="fa fa-link"></i>
		<i class="fa fa-headphones"></i>

		<div class="actionbar fill">
			<a class="blogbar-draft left float-left"    href="javascript:void(0)" title="Set Draft"><i class="fa fa-bookmark"></i><i class="fa fa-bookmark-o"></i></a>
			<a class="blogbar-featured left float-left" href="javascript:void(0)" title="Set Featured"><i class="fa fa-star"></i><i class="fa fa-star-o"></i></a>
			<a class="blogbar-links left float-left"    href="javascript:void(0)" title="Copy Post Links"><i class="fa fa-link"></i></a>
			<a class="blogbar-trash right float-right"   href="javascript:void(0)" title="Delete Post"><i class="fa fa-trash-o"></i></a>
		</div>
	</div>
	<h5 class="post-title"><a class=""href="#"></a><small class="author"></small></h5>
	<div class="post-tags">
		<i class="fa fa-star fa-fw"></i>
		<i class="fa fa-bookmark fa-fw"></i>
	</div>
</li>
</template>
<!--
	Copy Blog Links Reveal Template
-->
<template id="blog-links-template">
<div id="blogbar-links" class="reveal reveal-modal" data-reveal>
	<h4>Copy Post Links</h4>
	<hr/>
	<label>Post Link <a class="right float-right permalink" href="#" target="_blank"><i class="fa fa-external-link"></i></a></label>
	<input type="text" name="permalink" readonly/>
	<label>Blog RSS <a class="right float-right rss" href="#" target="_blank"><i class="fa fa-external-link"></i></a></label>
	<input type="text" name="rss" readonly/>
	<label>Blog Sitemap <a class="right float-right sitemap" href="#" target="_blank"><i class="fa fa-external-link"></i></a></label>
	<input type="text" name="sitemap" readonly/>
	<a class="close-reveal-modal close-button" data-close>&#215;</a>
</div>
</template>
<!--
	Feed List Template
-->
<template id="feed-list-template">
<li class="post">
	<div class="post-image">
		<div class="actionbar fill">
			<a class="feedbar-tag left float-left"    href="javascript:void(0)" title="Image Description"><i class="fa fa-tag"></i></a>
			<a class="feedbar-edit left float-left"   href="javascript:void(0)" title="Edit Post"><i class="fa fa-pencil-square-o"></i></a>
			<a class="feedbar-rss left float-left"    href="javascript:void(0)" title="Copy Feed Links"><i class="fa fa-rss"></i></a>
			<a class="feedbar-trash right float-right" href="javascript:void(0)" title="Delete Feed Post"><i class="fa fa-trash-o"></i></a>
		</div>
	</div>
	<div class="post-text feedbar-edit"></div>
	<time class="post-date"></time>
</li>
</template>
<!--
	Copy Feed RSS Reveal Template
-->
<template id="feed-rss-template">
<div id="feed-rss" class="reveal reveal-modal" data-reveal>
	<h4>Copy Feed Links</h4>
	<hr/>
	<label>Feed RSS</label>
	<input type="text" name="rss" readonly/>
	<a class="close-reveal-modal close-button" data-close>&#215;</a>
</div>
</template>
<!--
	Datastore Reveal Template
-->
<template id="datastore-template">
<div id="datastore-bulk-edit" class="reveal reveal-modal" data-reveal>
	<h4>Bulk Edit</h4>
	<hr/>

	<form class="total-form datastore-form" autocomplete="off" method="post" action="../../rw_common/plugins/stacks/total-cms/totalapi.php" data-baseurl="https://www.pharecon.de/">

		<fieldset class="text-box textarea">
			<textarea class="track-selection" name="datastore" spellcheck="true" rows="10"></textarea>
		</fieldset>

		<input type="hidden" name="_METHOD" value="PUT"/>
		<input type="hidden" name="type"    value="datastore"/>
		<input type="hidden" name="ext"     value="csv"/>
		<input type="hidden" name="slug"    value=""/>

		<button class="button radius" type="submit" value="Save">Save</button>
	</form>

	<a class="close-reveal-modal close-button" data-close>&#215;</a>
</div>
</template>







<div id="cms-alertbox-success" class="cms-alertbox"><i class="fa fa-check fa-3x"></i></div>
<div id="cms-alertbox-error" class="cms-alertbox"><i class="fa fa-times fa-3x"></i></div>

<!--
	Image Preview Template
-->
<template id="image-preview-template">
<div class="dz-preview dz-file-preview">
	<div class="actionbar">
		<a class="imagebar-tag left float-left"   href="javascript:void(0)" title="Image Description"><i class="fa fa-tag"></i></a>
		<a class="imagebar-image left float-left" href="javascript:void(0)" title="Copy Image Paths"><i class="fa fa-image"></i></a>
		<a class="imagebar-featured left float-left"  href="javascript:void(0)" title="Featured Image"><i class="fa fa-star-o"></i><i class="fa fa-star"></i></a>
		<a class="imagebar-trash right float-right" href="javascript:void(0)" title="Delete Image"><i class="fa fa-trash-o"></i></a>
		<i class="fa fa-fw fa-bars imagebar-move"></i>
	</div>
	<img oncontextmenu="return false;" draggable="false" data-dz-thumbnail />
	<div class="dz-progress">
		<span class="dz-upload" data-dz-uploadprogress></span>
		<span class="dz-upload-progress-label" data-dz-uploadprogress>0%</span>
	</div>
	<i class="fa fa-check-circle"></i>
	<i class="fa fa-times-circle has-tip" data-tooltip title="Error"></i>
</div>
</template>
<!--
	Copy Image Path Reveal Template
-->
<template id="imagebar-image-template">
<div id="imagebar-image" class="reveal reveal-modal" data-reveal>
	<h4>Copy Image Paths</h4>
	<hr/>
	<label>Full Image <a class="right float-right image" href="#" target="_blank"><i class="fa fa-external-link"></i></a></label>
	<input type="text" name="image" readonly/>
	<label>Thumbnail <a class="right float-right thumb" href="#" target="_blank"><i class="fa fa-external-link"></i></a></label>
	<input type="text" name="thumb" readonly/>
	<label>Square Thumb <a class="right float-right square" href="#" target="_blank"><i class="fa fa-external-link"></i></a></label>
	<input type="text" name="square" readonly/>

	<img src="" alt=""/>
	<a class="close-reveal-modal close-button" data-close>&#215;</a>
</div>
</template>
<!--
	Alt Tag Reveal Template
-->
<template id="altbox-template">
<div id="altbox" class="reveal reveal-modal" data-reveal>
	<h4>Image Description</h4>
	<hr/>

	<form class="total-form alt-form" autocomplete="off" method="post" action="../../rw_common/plugins/stacks/total-cms/totalapi.php" data-baseurl="https://www.pharecon.de/">

		<img src="" alt=""/>

		<fieldset class="text-box textarea">
			<textarea class="track-selection" name="alt" spellcheck="true" rows="2" placeholder="Enter Image Description"></textarea>
		</fieldset>

		<input type="hidden" name="_METHOD" value="PUT"/>
		<input type="hidden" name="type"  value="image"/>
		<input type="hidden" name="filename" value="false"/>
		<input type="hidden" name="isGallery" value="false"/>
		<input type="hidden" name="timestamp" />
		<input type="hidden" name="ext"   value="jpg"/>
		<input type="hidden" name="slug"  value=""/>
		<input type="hidden" name="permalink" value=""/>

		<button class="button radius" type="submit" value="Save">Save</button>
	</form>

	<a class="close-reveal-modal close-button" data-close>&#215;</a>
</div>
</template>


 
 
   
<div id='stacks_out_878' class='stacks_out'><div id='stacks_in_878' class='stacks_in uk_co_doobox_bellboy_stack'><!-- Start Bellboy Each html Template -->

<div class="stacks_in_878bellboywrapper">
	<div class="stacks_in_878bellboy">
		<i class="fa fa-chevron-up fa-fw"></i>
	</div>
</div>

<!-- End Bellboy Each html Template --></div></div><div        class='container   overflow-hidden   '>  <div class="grid-container full">  <div id='stacks_out_1146' class='stacks_out'><div id='stacks_in_1146' class='stacks_in '><div class="show-for-small-only" > <div id='stacks_out_1146_70' class='stacks_out'><div id='stacks_in_1146_70' class='stacks_in com_joeworkman_stacks_jack4_stack'><div class="jack  align-center width-fill            bg-transparent bg-size-auto bg-repeat      corner-shadow-right corner-shadow-left     "
 data-width="16" data-height='9'> <div class="svg full-width stacks_in_1146_68 text-left   "> <a href="../../" title="Startseite - Pharecon"> <svg id="e46e9c6f-51c5-4a8f-827a-9e7cb45a9f78" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.99499 83.1849"><defs><style>.be9150ec-fc64-404e-877f-4038ed75b086{fill:#76b72a;}.ec51f683-0e4c-42e5-9a72-1e725b8cabdc{fill:#00547e;}</style></defs><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="0.289 70.356 0.289 83.011 7.095 83.011 7.095 81.646 1.88 81.646 1.88 77.162 6.355 77.162 6.355 75.796 1.88 75.796 1.88 71.72 7.008 71.72 7.008 70.356 0.289 70.356"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="15.064 70.356 12.684 75.206 10.284 70.356 8.425 70.356 11.736 76.632 8.354 83.011 10.241 83.011 12.684 78.074 15.117 83.011 17.003 83.011 13.639 76.632 16.933 70.356 15.064 70.356"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M46.6523,102.9959h2.442a2.05745,2.05745,0,0,0,1.625-.635,2.65048,2.65048,0,0,0,.566-1.82,2.74175,2.74175,0,0,0-.582-1.828,1.98524,1.98524,0,0,0-1.6-.688h-2.451Zm0,1.365v4.954h-1.59V96.6599h4.032a3.65083,3.65083,0,0,1,2.773,1.056,4.50677,4.50677,0,0,1,.048,5.624,3.71577,3.71577,0,0,1-2.707,1.021Z" transform="translate(-26.1299 -26.3043)"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="28.796 70.356 28.796 83.011 35.602 83.011 35.602 81.646 30.387 81.646 30.387 77.162 34.863 77.162 34.863 75.796 30.387 75.796 30.387 71.72 35.515 71.72 35.515 70.356 28.796 70.356"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M65.3648,102.8309h1.93a2.06917,2.06917,0,0,0,1.595-.644,2.445,2.445,0,0,0,.596-1.724q0-2.4375-2.208-2.438h-1.913Zm2.226,1.365h-2.226v5.119h-1.598V96.6599h3.546a3.78978,3.78978,0,0,1,2.815.969,3.8767,3.8767,0,0,1,.956,2.838,3.9476,3.9476,0,0,1-.516,2.047,3.27309,3.27309,0,0,1-1.465,1.317l2.451,5.38v.104h-1.712Z" transform="translate(-26.1299 -26.3043)"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="45.545 70.356 45.545 71.72 48.866 71.72 48.866 83.011 50.455 83.011 50.455 71.72 53.785 71.72 53.785 70.356 45.545 70.356"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="55.654 70.356 55.654 83.011 62.459 83.011 62.459 81.646 57.243 81.646 57.243 77.162 61.72 77.162 61.72 75.796 57.243 75.796 57.243 71.72 62.372 71.72 62.372 70.356 55.654 70.356"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="71.177 70.356 71.177 80.152 66.093 70.356 64.494 70.356 64.494 83.011 66.093 83.011 66.093 73.258 71.16 83.011 72.759 83.011 72.759 70.356 71.177 70.356"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M101.5302,108.4717a1.00644,1.00644,0,0,1,.248-.695.94518.94518,0,0,1,.743-.278.97449.97449,0,0,1,.752.278.98477.98477,0,0,1,.256.695.93016.93016,0,0,1-.256.669.9894.9894,0,0,1-.752.27.89515.89515,0,0,1-.991-.939" transform="translate(-26.1299 -26.3043)"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M117.04469,101.8841a5.42879,5.42879,0,0,0-.656-2.986,2.52164,2.52164,0,0,0-3.998.013,5.25324,5.25324,0,0,0-.683,2.921v2.268a5.36164,5.36164,0,0,0,.674,2.955,2.528,2.528,0,0,0,3.993.078,5.26439,5.26439,0,0,0,.67-2.877Zm1.59,2.216a6.3078,6.3078,0,0,1-1.104,3.989,3.76274,3.76274,0,0,1-3.137,1.4,3.807,3.807,0,0,1-3.09-1.361,6.01872,6.01872,0,0,1-1.178-3.845v-2.382a6.32061,6.32061,0,0,1,1.121-3.976,3.744,3.744,0,0,1,3.129-1.439,3.78787,3.78787,0,0,1,3.116,1.378,6.20182,6.20182,0,0,1,1.143,3.933Z" transform="translate(-26.1299 -26.3043)"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M122.6855,102.9959h2.442a2.06028,2.06028,0,0,0,1.625-.635,2.65031,2.65031,0,0,0,.565-1.82,2.73648,2.73648,0,0,0-.582-1.828,1.98183,1.98183,0,0,0-1.599-.688h-2.451Zm0,1.365v4.954h-1.591V96.6599h4.033a3.65383,3.65383,0,0,1,2.773,1.056,4.51033,4.51033,0,0,1,.048,5.624,3.71819,3.71819,0,0,1-2.708,1.021Z" transform="translate(-26.1299 -26.3043)"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="103.986 70.356 103.986 71.72 107.306 71.72 107.306 83.011 108.897 83.011 108.897 71.72 112.226 71.72 112.226 70.356 103.986 70.356"/><rect class="be9150ec-fc64-404e-877f-4038ed75b086" x="114.164" y="70.3555" width="1.59" height="12.655"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="127.201 70.356 123.899 80.682 120.596 70.356 118.545 70.356 118.545 83.011 120.136 83.011 120.136 78.083 119.987 73.181 123.282 83.011 124.499 83.011 127.809 73.146 127.663 78.083 127.663 83.011 129.253 83.011 129.253 70.356 127.201 70.356"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M162.04019,98.8852l1.73,5.754h-3.451Zm-.678-2.225-4.076,12.655h1.633l.983-3.312h4.276l.999,3.312h1.634l-4.085-12.655Z" transform="translate(-26.1299 -26.3043)"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="142.404 70.356 142.404 83.011 148.964 83.011 148.964 81.646 144.001 81.646 144.001 70.356 142.404 70.356"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M186.5927,106.1168a1.94516,1.94516,0,0,0-.513-1.452,5.256,5.256,0,0,0-1.85-.982,8.0177,8.0177,0,0,1-2.047-1.004,3.54456,3.54456,0,0,1-1.061-1.199,3.5576,3.5576,0,0,1,.652-4.02,3.61905,3.61905,0,0,1,2.63-.973,3.92407,3.92407,0,0,1,1.981.496,3.39182,3.39182,0,0,1,1.338,1.382,4.08862,4.08862,0,0,1,.47,1.946h-1.6a2.66434,2.66434,0,0,0-.564-1.817,2.05151,2.05151,0,0,0-1.625-.643,2.00222,2.00222,0,0,0-1.496.54,2.07231,2.07231,0,0,0-.53,1.515,1.77142,1.77142,0,0,0,.573,1.341,5.08477,5.08477,0,0,0,1.774.966,6.10762,6.10762,0,0,1,2.673,1.522,3.42978,3.42978,0,0,1,.803,2.364,3.1949,3.1949,0,0,1-1,2.464,3.8439,3.8439,0,0,1-2.719.926,4.377,4.377,0,0,1-2.038-.482,3.643,3.643,0,0,1-1.469-1.356,3.75433,3.75433,0,0,1-.535-2.004h1.599a2.45523,2.45523,0,0,0,.657,1.825,2.41884,2.41884,0,0,0,1.786.652,2.12827,2.12827,0,0,0,1.582-.538,2.01022,2.01022,0,0,0,.529-1.469" transform="translate(-26.1299 -26.3043)"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M197.831,96.6602v8.996a3.84405,3.84405,0,0,1-1.043,2.816,3.8681,3.8681,0,0,1-6.735-2.816v-8.996h1.582v8.928a2.85072,2.85072,0,0,0,.543,1.906,2.75945,2.75945,0,0,0,3.51,0,2.85072,2.85072,0,0,0,.544-1.906v-8.928Z" transform="translate(-26.1299 -26.3043)"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M208.2177,105.291a4.68581,4.68581,0,0,1-1.144,3.116,3.87258,3.87258,0,0,1-2.932,1.082,3.62823,3.62823,0,0,1-3.026-1.448,6.24724,6.24724,0,0,1-1.121-3.923v-2.295a6.05518,6.05518,0,0,1,1.153-3.903,3.81026,3.81026,0,0,1,3.141-1.434,3.65766,3.65766,0,0,1,2.838,1.096,4.80324,4.80324,0,0,1,1.091,3.137h-1.608a3.91135,3.91135,0,0,0-.652-2.207,2.04248,2.04248,0,0,0-1.669-.661,2.26676,2.26676,0,0,0-1.99,1.013,5.23815,5.23815,0,0,0-.695,2.968v2.32a5.55108,5.55108,0,0,0,.647,2.947,2.10092,2.10092,0,0,0,1.891,1.025,2.287,2.287,0,0,0,1.79-.617,3.88257,3.88257,0,0,0,.678-2.216Z" transform="translate(-26.1299 -26.3043)"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="190.927 70.356 190.927 75.796 185.834 75.796 185.834 70.356 184.243 70.356 184.243 83.011 185.834 83.011 185.834 77.162 190.927 77.162 190.927 83.011 192.526 83.011 192.526 70.356 190.927 70.356"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="195.281 70.356 195.281 83.011 202.087 83.011 202.087 81.646 196.872 81.646 196.872 77.162 201.347 77.162 201.347 75.796 196.872 75.796 196.872 71.72 201.999 71.72 201.999 70.356 195.281 70.356"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="210.804 70.356 210.804 80.152 205.719 70.356 204.121 70.356 204.121 83.011 205.719 83.011 205.719 73.258 210.787 83.011 212.385 83.011 212.385 70.356 210.804 70.356"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M241.1582,108.4717a1.00571,1.00571,0,0,1,.247-.695.94658.94658,0,0,1,.743-.278.973.973,0,0,1,.752.278.98546.98546,0,0,1,.257.695.93091.93091,0,0,1-.257.669.98791.98791,0,0,1-.752.27.96075.96075,0,0,1-.743-.27.94911.94911,0,0,1-.247-.669" transform="translate(-26.1299 -26.3043)"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M255.55949,106.1168a1.94512,1.94512,0,0,0-.513-1.452,5.253,5.253,0,0,0-1.851-.982,8.01787,8.01787,0,0,1-2.047-1.004,3.566,3.566,0,0,1-1.061-1.199,3.5609,3.5609,0,0,1,.653-4.02,3.61665,3.61665,0,0,1,2.629-.973,3.91876,3.91876,0,0,1,1.981.496,3.38788,3.38788,0,0,1,1.339,1.382,4.10026,4.10026,0,0,1,.47,1.946h-1.6a2.6697,2.6697,0,0,0-.565-1.817,2.04871,2.04871,0,0,0-1.625-.643,2.00376,2.00376,0,0,0-1.496.54,2.07231,2.07231,0,0,0-.53,1.515,1.76877,1.76877,0,0,0,.574,1.341,5.07881,5.07881,0,0,0,1.773.966,6.10758,6.10758,0,0,1,2.673,1.522,3.425,3.425,0,0,1,.803,2.364,3.1977,3.1977,0,0,1-.999,2.464,3.84651,3.84651,0,0,1-2.72.926,4.383,4.383,0,0,1-2.038-.482,3.64935,3.64935,0,0,1-1.469-1.356,3.75363,3.75363,0,0,1-.534-2.004h1.598a2.45523,2.45523,0,0,0,.657,1.825,2.42042,2.42042,0,0,0,1.786.652,2.12825,2.12825,0,0,0,1.582-.538,2.00665,2.00665,0,0,0,.53-1.469" transform="translate(-26.1299 -26.3043)"/><rect class="be9150ec-fc64-404e-877f-4038ed75b086" x="233.194" y="70.3555" width="1.589" height="12.655"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M271.6386,105.291a4.68546,4.68546,0,0,1-1.143,3.116,3.87492,3.87492,0,0,1-2.933,1.082,3.62641,3.62641,0,0,1-3.025-1.448,6.24736,6.24736,0,0,1-1.121-3.923v-2.295a6.06072,6.06072,0,0,1,1.152-3.903,3.81157,3.81157,0,0,1,3.141-1.434,3.65623,3.65623,0,0,1,2.838,1.096,4.79258,4.79258,0,0,1,1.091,3.137h-1.607a3.91064,3.91064,0,0,0-.653-2.207,2.04116,2.04116,0,0,0-1.669-.661,2.26792,2.26792,0,0,0-1.99,1.013,5.24629,5.24629,0,0,0-.695,2.968v2.32a5.55108,5.55108,0,0,0,.647,2.947,2.102,2.102,0,0,0,1.891,1.025,2.288,2.288,0,0,0,1.791-.617,3.89,3.89,0,0,0,.678-2.216Z" transform="translate(-26.1299 -26.3043)"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="254.348 70.356 254.348 75.796 249.255 75.796 249.255 70.356 247.665 70.356 247.665 83.011 249.255 83.011 249.255 77.162 254.348 77.162 254.348 83.011 255.947 83.011 255.947 70.356 254.348 70.356"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="258.703 70.356 258.703 83.011 265.508 83.011 265.508 81.646 260.292 81.646 260.292 77.162 264.769 77.162 264.769 75.796 260.292 75.796 260.292 71.72 265.421 71.72 265.421 70.356 258.703 70.356"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M295.271,102.8309H297.2a2.07142,2.07142,0,0,0,1.596-.644,2.4445,2.4445,0,0,0,.595-1.724q0-2.4375-2.207-2.438h-1.913Zm2.225,1.365h-2.225v5.119h-1.599V96.6599h3.546a3.7923,3.7923,0,0,1,2.816.969,3.88091,3.88091,0,0,1,.956,2.838,3.94811,3.94811,0,0,1-.517,2.047,3.2758,3.2758,0,0,1-1.464,1.317l2.45,5.38v.104h-1.712Z" transform="translate(-26.1299 -26.3043)"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="281.066 70.356 281.066 83.011 282.655 83.011 282.655 77.423 286.932 77.423 286.932 76.057 282.655 76.057 282.655 71.72 287.654 71.72 287.654 70.356 281.066 70.356"/><rect class="be9150ec-fc64-404e-877f-4038ed75b086" x="289.68799" y="70.3555" width="1.59" height="12.655"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="300.752 70.356 300.752 80.152 295.668 70.356 294.068 70.356 294.068 83.011 295.668 83.011 295.668 73.258 300.734 83.011 302.333 83.011 302.333 70.356 300.752 70.356"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M332.80968,98.025v9.925h1.277a2.95923,2.95923,0,0,0,2.451-.961,4.53242,4.53242,0,0,0,.791-2.849v-2.244a4.58474,4.58474,0,0,0-.769-2.936,2.83206,2.83206,0,0,0-2.324-.935Zm-1.591,11.29V96.66h3.017a4.35546,4.35546,0,0,1,3.441,1.386,5.694,5.694,0,0,1,1.226,3.899v2.12a5.56419,5.56419,0,0,1-1.244,3.881,4.61991,4.61991,0,0,1-3.606,1.369Z" transform="translate(-26.1299 -26.3043)"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="315.249 70.356 315.249 83.011 322.054 83.011 322.054 81.646 316.839 81.646 316.839 77.162 321.315 77.162 321.315 75.796 316.839 75.796 316.839 71.72 321.968 71.72 321.968 70.356 315.249 70.356"/><polygon class="be9150ec-fc64-404e-877f-4038ed75b086" points="330.772 70.356 330.772 80.152 325.688 70.356 324.088 70.356 324.088 83.011 325.688 83.011 325.688 73.258 330.755 83.011 332.354 83.011 332.354 70.356 330.772 70.356"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M361.1259,108.4717a1.0057,1.0057,0,0,1,.247-.695.94518.94518,0,0,1,.743-.278.9745.9745,0,0,1,.752.278.98542.98542,0,0,1,.257.695.93087.93087,0,0,1-.257.669.98941.98941,0,0,1-.752.27.95933.95933,0,0,1-.743-.27.9491.9491,0,0,1-.247-.669" transform="translate(-26.1299 -26.3043)"/><path class="ec51f683-0e4c-42e5-9a72-1e725b8cabdc" d="M31.7289,53.5853h8.241c8.881,0,13.44-3.2,13.44-10.721,0-8.08-4.8-10.96-13.92-10.96h-7.761Zm6.481-27.281c6.08,0,10.4.48,13.521,2.32a15.69278,15.69278,0,0,1,7.759,14,16.26368,16.26368,0,0,1-6.88,13.761c-3.36,2.24-7.68,2.88-13.44,2.88h-7.441v23.92h-5.599V26.3043Z" transform="translate(-26.1299 -26.3043)"/><path class="ec51f683-0e4c-42e5-9a72-1e725b8cabdc" d="M71.6494,26.3043v18.96c3.12-3.839,7.6-5.92,13.2-5.92,12.72,0,17.361,7.28,17.361,22.001v21.84h-5.441v-21.92c0-10.88-2.32-16.641-12.24-16.641-5.04,0-8.88,2.08-11.04,5.841-1.84,3.2-1.84,6.879-1.84,11.84v20.88h-5.44V26.3043Z" transform="translate(-26.1299 -26.3043)"/><path class="ec51f683-0e4c-42e5-9a72-1e725b8cabdc" d="M131.08849,44.38471c-8.799,0-16.639,7.28-16.639,17.76a16.73629,16.73629,0,0,0,16.479,17.041c8.32,0,16.32-7.521,16.32-17.761,0-9.36-7.919-17.04-16.16-17.04m-.319,39.921c-12.961,0-22.001-10.16-22.001-22.4,0-12.641,9.36-22.641,22.48-22.641a19.24117,19.24117,0,0,1,16,7.84v-6.88h5.361v42.961h-5.361v-6.8c-3.439,4.88-9.599,7.92-16.479,7.92" transform="translate(-26.1299 -26.3043)"/><path class="ec51f683-0e4c-42e5-9a72-1e725b8cabdc" d="M161.248,83.1856V40.2246h5.2v4.96c2.8-3.92,5.92-5.52,10.08-5.6v6c-7.52.64-9.679,4.48-9.679,11.681v25.92Z" transform="translate(-26.1299 -26.3043)"/><path class="ec51f683-0e4c-42e5-9a72-1e725b8cabdc" d="M200.76839,44.22431c-8.16,0-14.56,5.44-15.92,14.561h32.561c-2.08-9.601-7.681-14.561-16.641-14.561m-16.08,19.201c.72,9.6,7.6,15.68,16.48,15.68a15.86479,15.86479,0,0,0,14.72-9.52h6.24c-4,9.6-11.44,14.8-20.8,14.8-12.88,0-22.321-10.64-22.321-22.72,0-12.801,9.12-22.641,22.561-22.641,12.721,0,21.921,9.601,21.921,24.001v.4Z" transform="translate(-26.1299 -26.3043)"/><path class="ec51f683-0e4c-42e5-9a72-1e725b8cabdc" d="M249.3271,44.2246c-8.64,0-15.92,7.36-15.92,17.521,0,9.919,7.04,17.36,16.16,17.36a15.42093,15.42093,0,0,0,14.641-9.36h6.08c-3.36,9.36-10.801,14.64-20.481,14.64-12.8,0-22.16-10.48-22.16-22.56a22.437,22.437,0,0,1,22.321-22.801c9.2,0,16.719,5.12,20.32,14.4h-6.08c-3.36-6.16-8.08-9.2-14.881-9.2" transform="translate(-26.1299 -26.3043)"/><path class="be9150ec-fc64-404e-877f-4038ed75b086" d="M334.96825,27.5039a1.46878,1.46878,0,0,0-1.48435-1.1996,2.28629,2.28629,0,0,0-.40889.03885c-2.169.40342-4.02209,1.94606-5.72516,3.45854-2.77015,2.45957-4.28938,5.191-6.28721,8.3-2.01614,3.13624-4.04253,6.15139-6.06841,9.14719q-1.74869,2.58606-3.49449,5.17343c-1.761,2.61844-3.51692,5.26356-5.25978,8.00461-1.33223,2.095-2.69193,4.17379-4.113,6.20617a1.86471,1.86471,0,0,1-1.46533.96981,2.017,2.017,0,0,1-1.3428-.657,15.082,15.082,0,0,1-2.72791-3.1284,68.51633,68.51633,0,0,1-3.26035-6.41549c-.71944-1.56746-1.26355-3.22012-1.87421-4.83934a2.47135,2.47135,0,0,0-2.23029-1.58905,1.75559,1.75559,0,0,0-1.07443.35166,6.79282,6.79282,0,0,0-1.30688,1.23305,3.58014,3.58014,0,0,0-.83042,2.807,19.03076,19.03076,0,0,0,.5652,2.37437,28.01541,28.01541,0,0,0,2.78285,6.19973,53.16377,53.16377,0,0,0,5.68712,8.17712,7.3867,7.3867,0,0,0,4.55666,2.53943,11.80214,11.80214,0,0,0,1.27522.07553,5.53893,5.53893,0,0,0,4.0633-1.50274,14.78511,14.78511,0,0,0,2.72256-3.423c2.04541-3.48224,4.07071-6.9764,6.14779-10.43922.01928-.0322.03908-.06407.05836-.09627q2.08761-3.47779,4.20535-6.93808,1.7397-2.85323,3.47508-5.70926a103.69709,103.69709,0,0,1,9.64267-13.544c1.22344-1.438,1.82565-2.589,3.11352-3.97206A1.70748,1.70748,0,0,0,334.96825,27.5039Z" transform="translate(-26.1299 -26.3043)"/><path class="ec51f683-0e4c-42e5-9a72-1e725b8cabdc" d="M319.869,56.95271c-.7492,1.20813-1.50293,2.41382-2.24536,3.62579-1.28119,2.09149-2.56085,4.2301-3.80987,6.32019a16.16435,16.16435,0,0,1-15.60822,12.20709c-9.359,0-16.479-7.51995-16.479-17.441a18.595,18.595,0,0,1,2.444-9.38239,16.65267,16.65267,0,0,1,4.56457-5.12012,15.2495,15.2495,0,0,1,8.99146-3.01751,16.54249,16.54249,0,0,1,11.70825,4.60846q.82864-1.20273,1.64886-2.38874c.46344-.67059.93793-1.36444,1.4068-2.04443a22.31837,22.31837,0,0,0-14.68389-5.45526c-11.601,0-21.841,10-21.841,22.88,0,12,9.361,22.641,22.24,22.641,12.401,0,22.081-10.48,22.081-23.201A21.8266,21.8266,0,0,0,319.869,56.95271Z" transform="translate(-26.1299 -26.3043)"/><path class="ec51f683-0e4c-42e5-9a72-1e725b8cabdc" d="M359.98259,46.1403c-2.8-4.32-7.84-6.8-14.24-6.8-.335,0-.65.028-.976.041-.326-.013-.641-.041-.976-.041-6.4,0-11.44,2.48-14.24,6.8-2.48,3.76-2.8,8.32-2.8,14.56v22.481h5.471v-20.88c0-4.961,0-8.64,1.84-11.841,2.111-3.674,5.834-5.73,10.705-5.822,4.871.092,8.594,2.148,10.705,5.822,1.84,3.201,1.84,6.88,1.84,11.841v20.88h5.471v-22.481c0-6.24-.32-10.8-2.8-14.56" transform="translate(-26.1299 -26.3043)"/></svg> </a> </div> 
</div>

</div></div> </div> 
<div class='grid-x              '> <div class="cell small-12 medium-auto ">  <div data-sticky-container id="stacks_in_1146_13"> <div class="sticky mymenu"  data-margin-top="0.00"  data-sticky-on="small" data-stick-to="top"  data-top-anchor="stacks_in_1146_13"    data-sticky>  <div class='chroma ' id='stacks_in_1146_11'> <div class='su-pad spacer-stacks_in_1146_11  hide-never posFixed allow-overlay  su-left  	'></div> <div class='chroma-scroll pre-load facet-mb    mob-full-width  hide-never  su-left   slide-down slide-fresh  ' data-style=""> <div class='slide-head  '>  <div class='slice empty out'><div class='slice empty in'></div></div>  </div> <div class="su-content oc-toggle">  <div class="title-bar  align-left mymenu" data-responsive-toggle="topbarstacks_in_1146_7" data-hide-for="large">  <button class="menu-icon" type="button" data-toggle="topbarstacks_in_1146_7"></button>   <div class="title-bar-title" data-toggle="topbarstacks_in_1146_7">Menu</div>   </div>  <nav id="topbarstacks_in_1146_7" class="top-bar mui-behind       mymenu " >  <div class="top-bar-left"><div class="show-for-large" > <div class="svg full-width stacks_in_1146_64 text-left   "> <a href="../../" title="Startseite - Pharecon"> <svg id="f9658d59-0840-477d-96bc-47e5a70b3cb7" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389.2548 135.6191"><defs><style>.a924af04-ba73-4b67-bb52-c06fa78cc842{fill:#76b72a;}.b70cd4b1-f2d3-4b26-80ed-308c6714b0df{fill:#00547e;}</style></defs><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="26.419 96.66 26.419 109.315 33.225 109.315 33.225 107.95 28.01 107.95 28.01 103.466 32.485 103.466 32.485 102.1 28.01 102.1 28.01 98.024 33.138 98.024 33.138 96.66 26.419 96.66"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="41.194 96.66 38.814 101.51 36.414 96.66 34.555 96.66 37.866 102.936 34.484 109.315 36.371 109.315 38.814 104.378 41.247 109.315 43.133 109.315 39.769 102.936 43.063 96.66 41.194 96.66"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M46.6523,102.9959h2.442a2.05745,2.05745,0,0,0,1.625-.635,2.65048,2.65048,0,0,0,.566-1.82,2.74175,2.74175,0,0,0-.582-1.828,1.98524,1.98524,0,0,0-1.6-.688h-2.451Zm0,1.365v4.954h-1.59V96.6599h4.032a3.65083,3.65083,0,0,1,2.773,1.056,4.50677,4.50677,0,0,1,.048,5.624,3.71577,3.71577,0,0,1-2.707,1.021Z"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="54.926 96.66 54.926 109.315 61.732 109.315 61.732 107.95 56.517 107.95 56.517 103.466 60.993 103.466 60.993 102.1 56.517 102.1 56.517 98.024 61.645 98.024 61.645 96.66 54.926 96.66"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M65.3648,102.8309h1.93a2.06917,2.06917,0,0,0,1.595-.644,2.445,2.445,0,0,0,.596-1.724q0-2.4375-2.208-2.438h-1.913Zm2.226,1.365h-2.226v5.119h-1.598V96.6599h3.546a3.78978,3.78978,0,0,1,2.815.969,3.8767,3.8767,0,0,1,.956,2.838,3.9476,3.9476,0,0,1-.516,2.047,3.27309,3.27309,0,0,1-1.465,1.317l2.451,5.38v.104h-1.712Z"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="71.675 96.66 71.675 98.024 74.996 98.024 74.996 109.315 76.585 109.315 76.585 98.024 79.915 98.024 79.915 96.66 71.675 96.66"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="81.784 96.66 81.784 109.315 88.589 109.315 88.589 107.95 83.373 107.95 83.373 103.466 87.85 103.466 87.85 102.1 83.373 102.1 83.373 98.024 88.502 98.024 88.502 96.66 81.784 96.66"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="97.307 96.66 97.307 106.456 92.222 96.66 90.623 96.66 90.623 109.315 92.222 109.315 92.222 99.562 97.289 109.315 98.888 109.315 98.888 96.66 97.307 96.66"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M101.5302,108.4717a1.00644,1.00644,0,0,1,.248-.695.94518.94518,0,0,1,.743-.278.97449.97449,0,0,1,.752.278.98477.98477,0,0,1,.256.695.93016.93016,0,0,1-.256.669.9894.9894,0,0,1-.752.27.89515.89515,0,0,1-.991-.939"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M117.04469,101.8841a5.42879,5.42879,0,0,0-.656-2.986,2.52164,2.52164,0,0,0-3.998.013,5.25324,5.25324,0,0,0-.683,2.921v2.268a5.36164,5.36164,0,0,0,.674,2.955,2.528,2.528,0,0,0,3.993.078,5.26439,5.26439,0,0,0,.67-2.877Zm1.59,2.216a6.3078,6.3078,0,0,1-1.104,3.989,3.76274,3.76274,0,0,1-3.137,1.4,3.807,3.807,0,0,1-3.09-1.361,6.01872,6.01872,0,0,1-1.178-3.845v-2.382a6.32061,6.32061,0,0,1,1.121-3.976,3.744,3.744,0,0,1,3.129-1.439,3.78787,3.78787,0,0,1,3.116,1.378,6.20182,6.20182,0,0,1,1.143,3.933Z"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M122.6855,102.9959h2.442a2.06028,2.06028,0,0,0,1.625-.635,2.65031,2.65031,0,0,0,.565-1.82,2.73648,2.73648,0,0,0-.582-1.828,1.98183,1.98183,0,0,0-1.599-.688h-2.451Zm0,1.365v4.954h-1.591V96.6599h4.033a3.65383,3.65383,0,0,1,2.773,1.056,4.51033,4.51033,0,0,1,.048,5.624,3.71819,3.71819,0,0,1-2.708,1.021Z"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="130.116 96.66 130.116 98.024 133.436 98.024 133.436 109.315 135.027 109.315 135.027 98.024 138.356 98.024 138.356 96.66 130.116 96.66"/><rect class="a924af04-ba73-4b67-bb52-c06fa78cc842" x="140.2939" y="96.6598" width="1.59" height="12.655"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="153.331 96.66 150.029 106.986 146.726 96.66 144.675 96.66 144.675 109.315 146.266 109.315 146.266 104.387 146.117 99.485 149.412 109.315 150.629 109.315 153.939 99.45 153.793 104.387 153.793 109.315 155.383 109.315 155.383 96.66 153.331 96.66"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M162.04019,98.8852l1.73,5.754h-3.451Zm-.678-2.225-4.076,12.655h1.633l.983-3.312h4.276l.999,3.312h1.634l-4.085-12.655Z"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="168.533 96.66 168.533 109.315 175.094 109.315 175.094 107.95 170.131 107.95 170.131 96.66 168.533 96.66"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M186.5927,106.1168a1.94516,1.94516,0,0,0-.513-1.452,5.256,5.256,0,0,0-1.85-.982,8.0177,8.0177,0,0,1-2.047-1.004,3.54456,3.54456,0,0,1-1.061-1.199,3.5576,3.5576,0,0,1,.652-4.02,3.61905,3.61905,0,0,1,2.63-.973,3.92407,3.92407,0,0,1,1.981.496,3.39182,3.39182,0,0,1,1.338,1.382,4.08862,4.08862,0,0,1,.47,1.946h-1.6a2.66434,2.66434,0,0,0-.564-1.817,2.05151,2.05151,0,0,0-1.625-.643,2.00222,2.00222,0,0,0-1.496.54,2.07231,2.07231,0,0,0-.53,1.515,1.77142,1.77142,0,0,0,.573,1.341,5.08477,5.08477,0,0,0,1.774.966,6.10762,6.10762,0,0,1,2.673,1.522,3.42978,3.42978,0,0,1,.803,2.364,3.1949,3.1949,0,0,1-1,2.464,3.8439,3.8439,0,0,1-2.719.926,4.377,4.377,0,0,1-2.038-.482,3.643,3.643,0,0,1-1.469-1.356,3.75433,3.75433,0,0,1-.535-2.004h1.599a2.45523,2.45523,0,0,0,.657,1.825,2.41884,2.41884,0,0,0,1.786.652,2.12827,2.12827,0,0,0,1.582-.538,2.01022,2.01022,0,0,0,.529-1.469"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M197.831,96.6602v8.996a3.84405,3.84405,0,0,1-1.043,2.816,3.8681,3.8681,0,0,1-6.735-2.816v-8.996h1.582v8.928a2.85072,2.85072,0,0,0,.543,1.906,2.75945,2.75945,0,0,0,3.51,0,2.85072,2.85072,0,0,0,.544-1.906v-8.928Z"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M208.2177,105.291a4.68581,4.68581,0,0,1-1.144,3.116,3.87258,3.87258,0,0,1-2.932,1.082,3.62823,3.62823,0,0,1-3.026-1.448,6.24724,6.24724,0,0,1-1.121-3.923v-2.295a6.05518,6.05518,0,0,1,1.153-3.903,3.81026,3.81026,0,0,1,3.141-1.434,3.65766,3.65766,0,0,1,2.838,1.096,4.80324,4.80324,0,0,1,1.091,3.137h-1.608a3.91135,3.91135,0,0,0-.652-2.207,2.04248,2.04248,0,0,0-1.669-.661,2.26676,2.26676,0,0,0-1.99,1.013,5.23815,5.23815,0,0,0-.695,2.968v2.32a5.55108,5.55108,0,0,0,.647,2.947,2.10092,2.10092,0,0,0,1.891,1.025,2.287,2.287,0,0,0,1.79-.617,3.88257,3.88257,0,0,0,.678-2.216Z"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="217.057 96.66 217.057 102.1 211.964 102.1 211.964 96.66 210.373 96.66 210.373 109.315 211.964 109.315 211.964 103.466 217.057 103.466 217.057 109.315 218.656 109.315 218.656 96.66 217.057 96.66"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="221.411 96.66 221.411 109.315 228.217 109.315 228.217 107.95 223.002 107.95 223.002 103.466 227.477 103.466 227.477 102.1 223.002 102.1 223.002 98.024 228.129 98.024 228.129 96.66 221.411 96.66"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="236.934 96.66 236.934 106.456 231.849 96.66 230.251 96.66 230.251 109.315 231.849 109.315 231.849 99.562 236.917 109.315 238.515 109.315 238.515 96.66 236.934 96.66"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M241.1582,108.4717a1.00571,1.00571,0,0,1,.247-.695.94658.94658,0,0,1,.743-.278.973.973,0,0,1,.752.278.98546.98546,0,0,1,.257.695.93091.93091,0,0,1-.257.669.98791.98791,0,0,1-.752.27.96075.96075,0,0,1-.743-.27.94911.94911,0,0,1-.247-.669"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M255.55949,106.1168a1.94512,1.94512,0,0,0-.513-1.452,5.253,5.253,0,0,0-1.851-.982,8.01787,8.01787,0,0,1-2.047-1.004,3.566,3.566,0,0,1-1.061-1.199,3.5609,3.5609,0,0,1,.653-4.02,3.61665,3.61665,0,0,1,2.629-.973,3.91876,3.91876,0,0,1,1.981.496,3.38788,3.38788,0,0,1,1.339,1.382,4.10026,4.10026,0,0,1,.47,1.946h-1.6a2.6697,2.6697,0,0,0-.565-1.817,2.04871,2.04871,0,0,0-1.625-.643,2.00376,2.00376,0,0,0-1.496.54,2.07231,2.07231,0,0,0-.53,1.515,1.76877,1.76877,0,0,0,.574,1.341,5.07881,5.07881,0,0,0,1.773.966,6.10758,6.10758,0,0,1,2.673,1.522,3.425,3.425,0,0,1,.803,2.364,3.1977,3.1977,0,0,1-.999,2.464,3.84651,3.84651,0,0,1-2.72.926,4.383,4.383,0,0,1-2.038-.482,3.64935,3.64935,0,0,1-1.469-1.356,3.75363,3.75363,0,0,1-.534-2.004h1.598a2.45523,2.45523,0,0,0,.657,1.825,2.42042,2.42042,0,0,0,1.786.652,2.12825,2.12825,0,0,0,1.582-.538,2.00665,2.00665,0,0,0,.53-1.469"/><rect class="a924af04-ba73-4b67-bb52-c06fa78cc842" x="259.3239" y="96.6598" width="1.589" height="12.655"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M271.6386,105.291a4.68546,4.68546,0,0,1-1.143,3.116,3.87492,3.87492,0,0,1-2.933,1.082,3.62641,3.62641,0,0,1-3.025-1.448,6.24736,6.24736,0,0,1-1.121-3.923v-2.295a6.06072,6.06072,0,0,1,1.152-3.903,3.81157,3.81157,0,0,1,3.141-1.434,3.65623,3.65623,0,0,1,2.838,1.096,4.79258,4.79258,0,0,1,1.091,3.137h-1.607a3.91064,3.91064,0,0,0-.653-2.207,2.04116,2.04116,0,0,0-1.669-.661,2.26792,2.26792,0,0,0-1.99,1.013,5.24629,5.24629,0,0,0-.695,2.968v2.32a5.55108,5.55108,0,0,0,.647,2.947,2.102,2.102,0,0,0,1.891,1.025,2.288,2.288,0,0,0,1.791-.617,3.89,3.89,0,0,0,.678-2.216Z"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="280.478 96.66 280.478 102.1 275.385 102.1 275.385 96.66 273.795 96.66 273.795 109.315 275.385 109.315 275.385 103.466 280.478 103.466 280.478 109.315 282.077 109.315 282.077 96.66 280.478 96.66"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="284.833 96.66 284.833 109.315 291.638 109.315 291.638 107.95 286.422 107.95 286.422 103.466 290.899 103.466 290.899 102.1 286.422 102.1 286.422 98.024 291.551 98.024 291.551 96.66 284.833 96.66"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M295.271,102.8309H297.2a2.07142,2.07142,0,0,0,1.596-.644,2.4445,2.4445,0,0,0,.595-1.724q0-2.4375-2.207-2.438h-1.913Zm2.225,1.365h-2.225v5.119h-1.599V96.6599h3.546a3.7923,3.7923,0,0,1,2.816.969,3.88091,3.88091,0,0,1,.956,2.838,3.94811,3.94811,0,0,1-.517,2.047,3.2758,3.2758,0,0,1-1.464,1.317l2.45,5.38v.104h-1.712Z"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="307.196 96.66 307.196 109.315 308.785 109.315 308.785 103.727 313.062 103.727 313.062 102.361 308.785 102.361 308.785 98.024 313.784 98.024 313.784 96.66 307.196 96.66"/><rect class="a924af04-ba73-4b67-bb52-c06fa78cc842" x="315.81789" y="96.6598" width="1.59" height="12.655"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="326.882 96.66 326.882 106.456 321.798 96.66 320.198 96.66 320.198 109.315 321.798 109.315 321.798 99.562 326.864 109.315 328.463 109.315 328.463 96.66 326.882 96.66"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M332.80968,98.025v9.925h1.277a2.95923,2.95923,0,0,0,2.451-.961,4.53242,4.53242,0,0,0,.791-2.849v-2.244a4.58474,4.58474,0,0,0-.769-2.936,2.83206,2.83206,0,0,0-2.324-.935Zm-1.591,11.29V96.66h3.017a4.35546,4.35546,0,0,1,3.441,1.386,5.694,5.694,0,0,1,1.226,3.899v2.12a5.56419,5.56419,0,0,1-1.244,3.881,4.61991,4.61991,0,0,1-3.606,1.369Z"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="341.379 96.66 341.379 109.315 348.184 109.315 348.184 107.95 342.969 107.95 342.969 103.466 347.445 103.466 347.445 102.1 342.969 102.1 342.969 98.024 348.098 98.024 348.098 96.66 341.379 96.66"/><polygon class="a924af04-ba73-4b67-bb52-c06fa78cc842" points="356.902 96.66 356.902 106.456 351.818 96.66 350.218 96.66 350.218 109.315 351.818 109.315 351.818 99.562 356.885 109.315 358.484 109.315 358.484 96.66 356.902 96.66"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M361.1259,108.4717a1.0057,1.0057,0,0,1,.247-.695.94518.94518,0,0,1,.743-.278.9745.9745,0,0,1,.752.278.98542.98542,0,0,1,.257.695.93087.93087,0,0,1-.257.669.98941.98941,0,0,1-.752.27.95933.95933,0,0,1-.743-.27.9491.9491,0,0,1-.247-.669"/><path class="b70cd4b1-f2d3-4b26-80ed-308c6714b0df" d="M31.7289,53.5853h8.241c8.881,0,13.44-3.2,13.44-10.721,0-8.08-4.8-10.96-13.92-10.96h-7.761Zm6.481-27.281c6.08,0,10.4.48,13.521,2.32a15.69278,15.69278,0,0,1,7.759,14,16.26368,16.26368,0,0,1-6.88,13.761c-3.36,2.24-7.68,2.88-13.44,2.88h-7.441v23.92h-5.599V26.3043Z"/><path class="b70cd4b1-f2d3-4b26-80ed-308c6714b0df" d="M71.6494,26.3043v18.96c3.12-3.839,7.6-5.92,13.2-5.92,12.72,0,17.361,7.28,17.361,22.001v21.84h-5.441v-21.92c0-10.88-2.32-16.641-12.24-16.641-5.04,0-8.88,2.08-11.04,5.841-1.84,3.2-1.84,6.879-1.84,11.84v20.88h-5.44V26.3043Z"/><path class="b70cd4b1-f2d3-4b26-80ed-308c6714b0df" d="M131.08849,44.38471c-8.799,0-16.639,7.28-16.639,17.76a16.73629,16.73629,0,0,0,16.479,17.041c8.32,0,16.32-7.521,16.32-17.761,0-9.36-7.919-17.04-16.16-17.04m-.319,39.921c-12.961,0-22.001-10.16-22.001-22.4,0-12.641,9.36-22.641,22.48-22.641a19.24117,19.24117,0,0,1,16,7.84v-6.88h5.361v42.961h-5.361v-6.8c-3.439,4.88-9.599,7.92-16.479,7.92"/><path class="b70cd4b1-f2d3-4b26-80ed-308c6714b0df" d="M161.248,83.1856V40.2246h5.2v4.96c2.8-3.92,5.92-5.52,10.08-5.6v6c-7.52.64-9.679,4.48-9.679,11.681v25.92Z"/><path class="b70cd4b1-f2d3-4b26-80ed-308c6714b0df" d="M200.76839,44.22431c-8.16,0-14.56,5.44-15.92,14.561h32.561c-2.08-9.601-7.681-14.561-16.641-14.561m-16.08,19.201c.72,9.6,7.6,15.68,16.48,15.68a15.86479,15.86479,0,0,0,14.72-9.52h6.24c-4,9.6-11.44,14.8-20.8,14.8-12.88,0-22.321-10.64-22.321-22.72,0-12.801,9.12-22.641,22.561-22.641,12.721,0,21.921,9.601,21.921,24.001v.4Z"/><path class="b70cd4b1-f2d3-4b26-80ed-308c6714b0df" d="M249.3271,44.2246c-8.64,0-15.92,7.36-15.92,17.521,0,9.919,7.04,17.36,16.16,17.36a15.42093,15.42093,0,0,0,14.641-9.36h6.08c-3.36,9.36-10.801,14.64-20.481,14.64-12.8,0-22.16-10.48-22.16-22.56a22.437,22.437,0,0,1,22.321-22.801c9.2,0,16.719,5.12,20.32,14.4h-6.08c-3.36-6.16-8.08-9.2-14.881-9.2"/><path class="a924af04-ba73-4b67-bb52-c06fa78cc842" d="M334.96825,27.5039a1.46878,1.46878,0,0,0-1.48435-1.1996,2.28629,2.28629,0,0,0-.40889.03885c-2.169.40342-4.02209,1.94606-5.72516,3.45854-2.77015,2.45957-4.28938,5.191-6.28721,8.3-2.01614,3.13624-4.04253,6.15139-6.06841,9.14719q-1.74869,2.58606-3.49449,5.17343c-1.761,2.61844-3.51692,5.26356-5.25978,8.00461-1.33223,2.095-2.69193,4.17379-4.113,6.20617a1.86471,1.86471,0,0,1-1.46533.96981,2.017,2.017,0,0,1-1.3428-.657,15.082,15.082,0,0,1-2.72791-3.1284,68.51633,68.51633,0,0,1-3.26035-6.41549c-.71944-1.56746-1.26355-3.22012-1.87421-4.83934a2.47135,2.47135,0,0,0-2.23029-1.58905,1.75559,1.75559,0,0,0-1.07443.35166,6.79282,6.79282,0,0,0-1.30688,1.23305,3.58014,3.58014,0,0,0-.83042,2.807,19.03076,19.03076,0,0,0,.5652,2.37437,28.01541,28.01541,0,0,0,2.78285,6.19973,53.16377,53.16377,0,0,0,5.68712,8.17712,7.3867,7.3867,0,0,0,4.55666,2.53943,11.80214,11.80214,0,0,0,1.27522.07553,5.53893,5.53893,0,0,0,4.0633-1.50274,14.78511,14.78511,0,0,0,2.72256-3.423c2.04541-3.48224,4.07071-6.9764,6.14779-10.43922.01928-.0322.03908-.06407.05836-.09627q2.08761-3.47779,4.20535-6.93808,1.7397-2.85323,3.47508-5.70926a103.69709,103.69709,0,0,1,9.64267-13.544c1.22344-1.438,1.82565-2.589,3.11352-3.97206A1.70748,1.70748,0,0,0,334.96825,27.5039Z"/><path class="b70cd4b1-f2d3-4b26-80ed-308c6714b0df" d="M319.869,56.95271c-.7492,1.20813-1.50293,2.41382-2.24536,3.62579-1.28119,2.09149-2.56085,4.2301-3.80987,6.32019a16.16435,16.16435,0,0,1-15.60822,12.20709c-9.359,0-16.479-7.51995-16.479-17.441a18.595,18.595,0,0,1,2.444-9.38239,16.65267,16.65267,0,0,1,4.56457-5.12012,15.2495,15.2495,0,0,1,8.99146-3.01751,16.54249,16.54249,0,0,1,11.70825,4.60846q.82864-1.20273,1.64886-2.38874c.46344-.67059.93793-1.36444,1.4068-2.04443a22.31837,22.31837,0,0,0-14.68389-5.45526c-11.601,0-21.841,10-21.841,22.88,0,12,9.361,22.641,22.24,22.641,12.401,0,22.081-10.48,22.081-23.201A21.8266,21.8266,0,0,0,319.869,56.95271Z"/><path class="b70cd4b1-f2d3-4b26-80ed-308c6714b0df" d="M359.98259,46.1403c-2.8-4.32-7.84-6.8-14.24-6.8-.335,0-.65.028-.976.041-.326-.013-.641-.041-.976-.041-6.4,0-11.44,2.48-14.24,6.8-2.48,3.76-2.8,8.32-2.8,14.56v22.481h5.471v-20.88c0-4.961,0-8.64,1.84-11.841,2.111-3.674,5.834-5.73,10.705-5.822,4.871.092,8.594,2.148,10.705,5.822,1.84,3.201,1.84,6.88,1.84,11.841v20.88h5.471v-22.481c0-6.24-.32-10.8-2.8-14.56"/></svg> </a> </div> 
 </div> 
</div>   <div class="top-bar-right"><nav>  <ul class='menu drilldown vertical style-active  medium-horizontal  mydrilldown    '  data-responsive-menu="drilldown medium-dropdown"   data-back-button="&lt;li class&#x3D;&quot;js-drilldown-back&quot;&gt;&lt;a tabindex&#x3D;&quot;0&quot;&gt;Zurück&lt;/a&gt;&lt;/li&gt;" data-back-button-position="top" data-close-on-click="false" data-scroll-top="false" data-scroll-top-offset="0" data-animation-duration="500" data-animation-easing="swing" data-animate-height="true" data-auto-height="true" data-parent-link="false" >   <li class="  "    > <a href="../../" title="Startseite - Pharecon">WILLKOMMEN</a>  </li> 
<li class="  "    > <a href="../../unternehmen/" title="Für Unternehmen - Pharecon">FÜR UNTERNEHMEN</a> <div class='slice empty out'><div class='slice empty in'></div></div> </li> 
<li class="  "    > <a href="../../bewerber/" title="Für Bewerber - Pharecon">FÜR KANDIDATEN</a> <div class='slice empty out'><div class='slice empty in'></div></div> </li> 
<li class="  "    > <a href="../../referenzen/" title="Referenzen - Pharecon">REFERENZEN</a>  </li> 
<li class="  "    > <a href="../../wir-sind-pharecon/" title="Wir sind Pharecon - Pharecon">WIR SIND PHARECON</a>  </li> 
<li class="  "    > <a href="../../kontakt/" title="Kontakt - Pharecon">KONTAKT</a>  </li> 
 </ul> </nav> 
</div>  </nav>  
 
 </div> </div> </div> 
  </div> </div>  
<div class="chroma-mark">  <div class= "chroma-marker" data-chroma-style="fix_now" id="stacks_in_1146_63"></div> </div> 
 </div> </div> 
</div></div><div id='stacks_out_69' class='stacks_out'><div id='stacks_in_69' class='stacks_in com_bigwhiteduck_stacks_sections_pro_section_stack'><section 

 class='s-pro sections-stack      top-margin-none bot-margin-none    sec-overflow   no-vault-z  ' ><div class="shear-wrapper preload-wrapper  " id="sections_stacks_in_69"><div class='shear-inner   style-pro-stacks_in_69    ovl-style-pro-stacks_in_69   fixed-height     '><div class="inner-content autoPad  "><div class='content-wrapper  '><div class="content "> <div id='stacks_out_1376' class='stacks_out stacks_l_hidden stacks_s_hidden'><div id='stacks_in_1376' class='stacks_in com_bigwhiteduck_stacks_sections_pro_fixed_element_stack'><div class="section-fix pre-load"> <div id='stacks_out_1378' class='stacks_out stacks_l_hidden stacks_s_hidden'><div id='stacks_in_1378' class='stacks_in com_joeworkman_stacks_fluidimage_stack'><div class="fluid-image define_max align-center">  
<div class='centered_image' >
    <a href="../../" title="Startseite - Pharecon"><img class='imageStyle' src='files/pharecon-logo-weissenhorn-2.png' alt='Admin-Bereich von Pharecon, Personalberatung in D-A-CH, die Experten im Sektor Life Science mit über 20 Jahren Erfahrung.' /></a>
</div>

  </div> 
</div></div></div> <div class="spacer_stacks_in_1376"></div> <div class='slice empty out'><div class='slice empty in'></div></div>

</div></div></div></div></div></div></div> <div class='sections-layer  '>  
 </div>  </section>

</div></div>  </div>  </div> 
<div        class='container   overflow-hidden   '>  <div class="grid-container">  <div class='grid-x            padding-columns  '> <div class="cell small-12 medium-auto "> <div id='stacks_out_1334' class='stacks_out'><div id='stacks_in_1334' class='stacks_in com_marathia_stacks_smart2columns2_stack'><!-- Start of Smart2columns2 Stack v2.4.2 -->

<div class="s2c_stacks_in_1334_cw"><!--
	--><div class="s2c_stacks_in_1334_col1">  <a href="../../admin/" role="button" target="_self" class="button    large hollow         expanded  "          >Zurück zur Übersicht</a>    
</div><!--
	--><div class="s2c_stacks_in_1334_spacer"></div><!--
	--><div class="s2c_stacks_in_1334_col2">  <a href="../../bewerber/" role="button" target="_self" class="button    large hollow         expanded  "          >Zurück zu den Anzeigen</a>    
</div><!--
--></div>
<!-- End of Smart2columns2 Stack --></div></div><div id='stacks_out_1335' class='stacks_out'><div id='stacks_in_1335' class='stacks_in spacer_stack'><div class="stacksSpacer" style="display:block; width:100%; height:90px;"></div></div></div><div id='stacks_out_1336' class='stacks_out'><div id='stacks_in_1336' class='stacks_in com_joeworkman_stacks_totalcms_admin_blog_stack'><!-- TotalCMS Blog Form -->
<form autocomplete="off" id="form_stacks_in_1336" class="total-form blog-form new-blog   " method="post" action="../../rw_common/plugins/stacks/total-cms/totalapi.php" data-slug="totalcms" data-newurl="" data-editurl="" 

	
	<?php echo isset($_GET["permalink"]) ? "data-permalink=\"".mb_strtolower($_GET["permalink"])."\">" : ">"; ?>
	

	<input type="hidden" name="slug" 	   value="totalcms" />
	<input type="hidden" name="type" 	   value="blog" />
	<input type="hidden" name="ext" 	   value="cms" />

	<input type="hidden" name="rss_title"       value="My News Feed" />
	<input type="hidden" name="rss_description" value="My news feed with important updates" />
	<input type="hidden" name="baseurl"         value="https://www.pharecon.de/" />

	<!-- the posturl could be modified by the JS in case its the full URL -->
	<!-- <input type="hidden" name="posturl" value="admin/admin-stellenanzeigen/../../referenzen/" /> -->

	

    <div id='stacks_out_1342' class='stacks_out'><div id='stacks_in_1342' class='stacks_in com_marathia_stacks_smart2columns2_stack'><!-- Start of Smart2columns2 Stack v2.4.2 -->

<div class="s2c_stacks_in_1342_cw"><!--
	--><div class="s2c_stacks_in_1342_col1"><fieldset class="text-box input"> <input type="text" spellcheck="true" placeholder="Titel" name="title" /> </fieldset> 
<fieldset class="text-box default permalink input unsaved">
	

	

	<?php if (isset($_GET["permalink"])) {?>
		<input disabled class="locked" type="text" name="permalink" value="<?php echo $_GET["permalink"]; ?>"/>
		<input type="hidden" name="permalink" value="<?php echo $_GET["permalink"]; ?>"/>
	<?php } else { ?>

	
	<input type="text" spellcheck="true" placeholder="Permalink" name="permalink"/>
	

	

	

	

	<?php } ?>

	
</fieldset>



 <fieldset class="text-box input"> <input type="text" class="autocomplete" spellcheck="true" placeholder="Ort" name="genre" data-prefill=""  /> </fieldset>  
<fieldset class="text-box textarea hipwig blog-summary">   <textarea class="hipwig" autocomplete="off" spellcheck="true" rows="2" data-height="200" placeholder="Zusammenfassung" name="summary" data-maxcount="300" ></textarea>      </fieldset> 
<fieldset class="text-box textarea hipwig blog-content">  <textarea class="hipwig" autocomplete="off" spellcheck="true" rows="5" data-height="400" placeholder="Linke Spalte" name="content" data-maxcount="-1" ></textarea>     </fieldset> 
<fieldset class="text-box textarea hipwig blog-extra">   <textarea class="hipwig" autocomplete="off" spellcheck="true" rows="5" data-height="400" placeholder="Rechte Spalte" name="extra" data-maxcount="-1" ></textarea>      </fieldset> 
<div id='stacks_out_1349' class='stacks_out'><div id='stacks_in_1349' class='stacks_in com_marathia_stacks_smart2columns2_stack'><!-- Start of Smart2columns2 Stack v2.4.2 -->

<div class="s2c_stacks_in_1349_cw"><!--
	--><div class="s2c_stacks_in_1349_col1"><div id='stacks_out_1351' class='stacks_out'><div id='stacks_in_1351' class='stacks_in com_joeworkman_stacks_totalcms_admin_blog_save_stack'>       <button aria-label="submit form" class="button local    custom   " value="Speichern" type="submit">Speichern</button>   
</div></div></div><!--
	--><div class="s2c_stacks_in_1349_spacer"></div><!--
	--><div class="s2c_stacks_in_1349_col2"><div id='stacks_out_1353' class='stacks_out'><div id='stacks_in_1353' class='stacks_in com_joeworkman_stacks_totalcms_admin_blog_save_stack'>     <div class="cms-delete"> <a aria-label="delete" class="button local delete    custom   " value="Löschen">Löschen</a> </div>     
</div></div></div><!--
--></div>
<!-- End of Smart2columns2 Stack --></div></div></div><!--
	--><div class="s2c_stacks_in_1342_spacer"></div><!--
	--><div class="s2c_stacks_in_1342_col2"> <fieldset class="text-box input date"> <input type="text" class="dateinput" placeholder="Datum" name="date" data-pick-time="false" data-date-format="DD-MM-YYYY"  /> <input type="hidden" name="timestamp" /> </fieldset>  
 <fieldset class="text-box input"> <input type="text" class="autocomplete" spellcheck="true" placeholder="Tags" name="tags" data-prefill="" data-multiple /> </fieldset>  
 <fieldset class="text-box input"> <input type="text" class="autocomplete" spellcheck="true" placeholder="Categories" name="categories" data-prefill="" data-multiple  /> </fieldset>  
<div id='stacks_out_1358' class='stacks_out'><div id='stacks_in_1358' class='stacks_in com_marathia_stacks_smart2columns2_stack'><!-- Start of Smart2columns2 Stack v2.4.2 -->

<div class="s2c_stacks_in_1358_cw"><!--
	--><div class="s2c_stacks_in_1358_col1"><div id='stacks_out_1360' class='stacks_out'><div id='stacks_in_1360' class='stacks_in text_stack'><span style="font-size:10px; ">Entwurf</span></div></div>  <fieldset id="switch_stacks_in_1362" class="switch  tiny  "> <input id="draft_stacks_in_1362" class="switch-input" type="checkbox" name="draft" value="false"  /> <label class="switch-paddle " for="draft_stacks_in_1362"></label> </fieldset>  
</div><!--
	--><div class="s2c_stacks_in_1358_spacer"></div><!--
	--><div class="s2c_stacks_in_1358_col2"><div id='stacks_out_1364' class='stacks_out'><div id='stacks_in_1364' class='stacks_in text_stack'><span style="font-size:10px; ">Fertig</span></div></div>  <fieldset id="switch_stacks_in_1366" class="switch  tiny  secondary"> <input id="featured_stacks_in_1366" class="switch-input" type="checkbox" name="featured" value="false"  /> <label class="switch-paddle " for="featured_stacks_in_1366"></label> </fieldset>  
</div><!--
--></div>
<!-- End of Smart2columns2 Stack --></div></div></div><!--
--></div>
<!-- End of Smart2columns2 Stack --></div></div>
</form>


 
</div></div> </div> </div> 
  </div>  </div> 
<div        class='container   overflow-hidden  padding-columns  '>  <div class="grid-container">  <div id='stacks_out_1152' class='stacks_out'><div id='stacks_in_1152' class='stacks_in '><div class='grid-x    grid-margin-x grid-margin-y  grid-padding-y       '> <div class="cell small-12  "> <div id='stacks_out_1152_9' class='stacks_out'><div id='stacks_in_1152_9' class='stacks_in com_marathia_stacks_smart2columns2_stack'><!-- Start of Smart2columns2 Stack v2.4.2 -->

<div class="s2c_stacks_in_1152_9_cw"><!--
	--><div class="s2c_stacks_in_1152_9_col1"><div id='stacks_out_1152_7' class='stacks_out'><div id='stacks_in_1152_7' class='stacks_in com_marathia_stacks_smart2columns2_stack'><!-- Start of Smart2columns2 Stack v2.4.2 -->

<div class="s2c_stacks_in_1152_7_cw"><!--
	--><div class="s2c_stacks_in_1152_7_col1"><div class='grid-x              '> <div class="cell small-12 medium-auto "> <div id='stacks_out_1152_3' class='stacks_out'><div id='stacks_in_1152_3' class='stacks_in com_bigwhiteduck_stacks_headerpro_stack'>    


	








<div class="hp-slice" hidden style="display:none;">__</div>
<h3 class="header-pro text-inherit   alt    " >

	 
	 

			<span class="h-pro"><!--
--><!--
--><span class="hTxt primary  ">KONTAKT</span><!--
--><!--
--><!--
--><!--
--></span>

		 
	
</h3> 



<div class='slice empty out'><div class='slice empty in'></div></div>




</div></div><div id='stacks_out_1152_18' class='stacks_out'><div id='stacks_in_1152_18' class='stacks_in com_bigwhiteduck_stacks_paragraphpro_stack'>
	












<p class='ppro text-inherit custom       ' draggable="false">

<strong>Pharecon <br />Experten. Optimal suchen. Sicher finden.<br /></strong>Hauptstra&szlig;e 14<br />89264 Weissenhorn<br />Telefon: <a href="tel:+497309/4263153" title="Telefon - Pharecon">+49 &ndash; 73 09 &ndash; 426 3153</a><br />E-Mail: <a href="mailto:info@pharecon.de" title="E-Mail - Pharecon">info@pharecon.de</a>


</p>
 


<div class='slice empty out'><div class='slice empty in'></div></div>




</div></div> </div> </div> 
</div><!--
	--><div class="s2c_stacks_in_1152_7_spacer"></div><!--
	--><div class="s2c_stacks_in_1152_7_col2"><div class='grid-x        medium-margin-collapse medium-padding-collapse     '> <div class="cell small-12 medium-12 large-12"> <div id='stacks_out_1152_21' class='stacks_out'><div id='stacks_in_1152_21' class='stacks_in com_bigwhiteduck_stacks_headerpro_stack'>    


	








<div class="hp-slice" hidden style="display:none;">__</div>
<h3 class="header-pro text-inherit   alt    " >

	 
	 

			<span class="h-pro"><!--
--><!--
--><span class="hTxt primary  ">NAVIGATION</span><!--
--><!--
--><!--
--><!--
--></span>

		 
	
</h3> 



<div class='slice empty out'><div class='slice empty in'></div></div>




</div></div><div id='stacks_out_1152_31' class='stacks_out'><div id='stacks_in_1152_31' class='stacks_in com_bigwhiteduck_stacks_paragraphpro_stack'>
	












<p class='ppro text-inherit custom       ' draggable="false">

<a href="../../" title="Startseite - Pharecon">Startseite</a><br /><a href="../../unternehmen/" title="Für Unternehmen - Pharecon">F&uuml;r Unternehmen</a><br /><a href="../../bewerber/" title="Für Bewerber - Pharecon">F&uuml;r Bewerber</a><br /><a href="../../referenzen/" title="Referenzen - Pharecon">Referenzen</a><br /><a href="../../wir-sind-pharecon/" title="Wir sind Pharecon - Pharecon">Wir sind Pharecon</a>


</p>
 


<div class='slice empty out'><div class='slice empty in'></div></div>




</div></div> </div> </div> 
</div><!--
--></div>
<!-- End of Smart2columns2 Stack --></div></div></div><!--
	--><div class="s2c_stacks_in_1152_9_spacer"></div><!--
	--><div class="s2c_stacks_in_1152_9_col2"><div id='stacks_out_1152_38' class='stacks_out'><div id='stacks_in_1152_38' class='stacks_in com_marathia_stacks_smart2columns2_stack'><!-- Start of Smart2columns2 Stack v2.4.2 -->

<div class="s2c_stacks_in_1152_38_cw"><!--
	--><div class="s2c_stacks_in_1152_38_col1"><div class='grid-x        medium-margin-collapse medium-padding-collapse     '> <div class="cell small-12 medium-12 large-12"> <div id='stacks_out_1152_34' class='stacks_out'><div id='stacks_in_1152_34' class='stacks_in com_bigwhiteduck_stacks_headerpro_stack'>    


	








<div class="hp-slice" hidden style="display:none;">__</div>
<h3 class="header-pro text-inherit   alt    " >

	 
	 

			<span class="h-pro"><!--
--><!--
--><span class="hTxt primary  ">NAVIGATION</span><!--
--><!--
--><!--
--><!--
--></span>

		 
	
</h3> 



<div class='slice empty out'><div class='slice empty in'></div></div>




</div></div><div id='stacks_out_1152_46' class='stacks_out'><div id='stacks_in_1152_46' class='stacks_in com_bigwhiteduck_stacks_paragraphpro_stack'>
	












<p class='ppro text-inherit custom       ' draggable="false">

<a href="../../kontakt/" title="Kontakt - Pharecon">Kontakt</a><br /><a href="../../impressum/" title="Impressum - Pharecon">Impressum</a><br /><a href="../../datenschutz/" title="Datenschutz - Pharecon">Datenschutz</a><br /><a href="../../admin/" title="Admin - Pharecon">Admin</a>


</p>
 


<div class='slice empty out'><div class='slice empty in'></div></div>




</div></div> </div> </div> 
</div><!--
	--><div class="s2c_stacks_in_1152_38_spacer"></div><!--
	--><div class="s2c_stacks_in_1152_38_col2"><div class='grid-x              '> <div class="cell small-12 medium-12 large-12"> <div id='stacks_out_1152_49' class='stacks_out'><div id='stacks_in_1152_49' class='stacks_in com_bigwhiteduck_stacks_headerpro_stack'>    


	








<div class="hp-slice" hidden style="display:none;">__</div>
<h3 class="header-pro text-inherit   alt    " >

	 
	 

			<span class="h-pro"><!--
--><!--
--><span class="hTxt primary  ">NETZWERKE</span><!--
--><!--
--><!--
--><!--
--></span>

		 
	
</h3> 



<div class='slice empty out'><div class='slice empty in'></div></div>




</div></div><div id='stacks_out_1152_59' class='stacks_out'><div id='stacks_in_1152_59' class='stacks_in com_bigwhiteduck_stacks_paragraphpro_stack'>
	












<p class='ppro text-inherit custom       ' draggable="false">

<a href="https://www.biolago.org" target="_blank" title="BioLago">BioLago </a><br />und <a href="https://www.bio-m.org" target="_blank" title="BioM">BioM</a>


</p>
 


<div class='slice empty out'><div class='slice empty in'></div></div>




</div></div> </div> </div> 
</div><!--
--></div>
<!-- End of Smart2columns2 Stack --></div></div></div><!--
--></div>
<!-- End of Smart2columns2 Stack --></div></div><div id='stacks_out_1152_64' class='stacks_out'><div id='stacks_in_1152_64' class='stacks_in horizontal-line_stack'><div class='myLine' style='display:block; height:auto; border-top-style:solid; border-top-color:#000000; border-top-width:1px; font-size:1%;'></div></div></div><div id='stacks_out_1152_62' class='stacks_out'><div id='stacks_in_1152_62' class='stacks_in com_bigwhiteduck_stacks_paragraphpro_stack'>
	












<p class='ppro text-inherit custom       ' draggable="false">

Versch&auml;rft von <strong><a href="https://www.pepperonidesign.de" target="_blank" title="PEPPERONIDESIGN">PEPPERONI</a></strong><a href="https://www.pepperonidesign.de" target="_blank" title="PEPPERONIDESIGN">DESIGN</a>


</p>
 


<div class='slice empty out'><div class='slice empty in'></div></div>




</div></div> </div> </div> 
</div></div>  </div>  </div> 
</div></div><!--  --><!--  -->



<script integrity="sha384-9D1wEBjetCqAYEsbDhctpug7u+bZe+Hrj2cCbVb1/ianjrbNfvT3RYX5C0DQntOP">if(!window.navigator.userAgent.match("Trident")){var loadInlineScript=e=>{document.write(e.outerHTML)},loadScript=e=>{const t=document.createElement("script");t.src=e,document.write(t.outerHTML)};window.loadThemeJQuery=()=>{loadScript(document.querySelector('meta[name="theme-jquery"]').content)},function(){let e=Array.from(pluginHeader.querySelectorAll("script"));f6jq3&&(e=e.filter(e=>!e.outerHTML.match(jqueryMatch)),window.loadThemeJQuery()),e.map(e=>e.src?loadScript(e.src):loadInlineScript(e))}()}</script>
<script integrity="sha384-Xms/IPSJWH3PcLTikHjruG7OS+SwF4dX3G/JzDYdVh06+2XvraddRH+/65qwJe3u">if("undefined"==typeof stacks)window.loadThemeJQuery();else var jQuery=stacks.jQuery,$=jQuery;</script>
<script data-cfasync="true" src="../../rw_common/themes/foundation6/foundation.js?rwcache=689175030"></script>

<script integrity="sha384-qRDjLKBnurzIEk3LoUNl2PqqiI2LI+34U5RuRRHWvJeEw8XGQWNOea741DzP0/YB">$(document).foundation();</script>
</body>
</html>
