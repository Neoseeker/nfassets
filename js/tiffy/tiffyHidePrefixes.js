// Tiffy's Neoseeker Thread Prefix Hider

/* 
Usage - add following to JS theme in head element:
<!-- START TIFFY HIDE PREFIXES CODE -->
  <script type="text/javascript">
     var FORUM_COOKIE_NAME = 'REPLACE_WITH_FORUM_NAME';
  </script>
  <script type="text/javascript" language="javascript" src="http://tiffany.pwnsu.com/neo/jquery.cookie.js"></script>
  <script type="text/javascript" language="javascript" src="http://tiffany.pwnsu.com/neo/tiffyHidePrefixes.js"></script>
<!-- END TIFFY HIDE PREFIXES CODE -->

Add to forum header:
<div id="optionalprefixes">
    <select id="prefixchoice">
        <option value="">--show/hide prefixes--</option>
        <option value="">Show Prefixes</option>
        <option value="hide">Hide Prefixes</option>
    </select>
</div>
*/

// Constant for cookie name initially passed from Neo and has prefixes appended to it.
var FORUM_COOKIE_NAME = FORUM_COOKIE_NAME + '_prefixes';

function hidePrefixes() {
// Disable thread prefixes. 
    $('span.prefix_tag_before_thread').hide();
    $('div.thread_caption a.label').hide();
};

function showPrefixes() {
// Kill the cookie and re-display the prefixes.
    $.cookie(FORUM_COOKIE_NAME, "", { path: '/', expires: -5 });
    $('span.prefix_tag_before_thread').show();
    $('div.thread_caption a.label').show();
}

$(function() {
    if($.cookie(FORUM_COOKIE_NAME)) { // If a cookie is set, hide the prefixes.
        hidePrefixes();
    }

    $("#prefixswitch li a").click(function() { // Handler for link clicks within ul id=prefixswitch"/li hierachy
        if($(this).attr('rel')) { // Using rel attribute from the html links to pass the hidden value.  Blank for default.
            $.cookie(FORUM_COOKIE_NAME,"hide", {expires: 365, path: '/'});
            hidePrefixes();
        }
        else {
            showPrefixes();
        }
        return false;
    });

    $('#prefixchoice').change(function() { // Handler for drop-down option box id="prefixchoice", choice passed via option value
        if($(this).val()) {
            $.cookie(FORUM_COOKIE_NAME,$(this).val(), {expires: 365, path: '/'});
                hidePrefixes();
        }
        else {
            showPrefixes();
        }
     });
});
