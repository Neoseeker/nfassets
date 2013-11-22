// Tiffy's tag cloud prettifier.

/* Usage - add following JS to "below subheader" js element:

<!-- START TIFFY TAG CLOUD PRETTIFIER CODE -->
  <script type="text/javascript">
     var TIFFY_FORUM_NAME_IN_TAG_CLOUD = 'Replace this with short name that appears in the tag cloud, e.g: RFS';
  </script>
  <script type="text/javascript" language="javascript" src="http://tiffany.pwnsu.com/neo/tiffyApplyNeoTagCloudStyle.js"></script>
<!-- END TIFFY TAG CLOUD PRETTIFIER CODE -->

*/

$(function() {
	var fname = (typeof TIFFY_FORUM_NAME_IN_TAG_CLOUD === 'undefined' ? "Forum" : TIFFY_FORUM_NAME_IN_TAG_CLOUD);
	$("head").append("<style type='text/css'>#cloud { display: inline-block; background-color: #eef0f9; width: 75% !important; border: 1px solid rgb(198, 208, 231); } #cloudtxt { width: 75% !important; font-size: 12px; color: #fff; font-weight: bold; background-color: #336699; padding: 0px 6px 0px 6px; margin-bottom: 0; }</style>")
	$('#cloud').before('<p id="cloudtxt">'+fname+' Tag Cloud</p>');
	$('<br /><br />').insertAfter('#cloud');
});
