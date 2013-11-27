// Tiffy's Theme Switcher

/* 
Usage - add following to JS theme in head element:
<!-- START TIFFY FORUM THEME CODE -->
  <script type="text/javascript">
     var FORUM_COOKIE_NAME = 'REPLACE_WITH_FORUM_NAME';
  </script>
  <script type="text/javascript" language="javascript" src="http://tiffany.pwnsu.com/neo/jquery.cookie.js"></script>
  <script type="text/javascript" language="javascript" src="http://tiffany.pwnsu.com/neo/tiffyThemeSelector.js"></script>
<!-- END TIFFY FORUM THEME CODE -->

Add to forum header:
<div align="right" id="forumtheme">
    <select id="themeselection">
        <option value="">--select theme--</option>
        <option value="">Neo Default</option>
        <option value="URL TO CSS FILE">THEME NAME 1</option>
        <!-- Add more options as needed. -->
    </select>
</div>
*/

// Constant for cookie name should be set in script element in Neo forum settings.  Here we append _theme to it:
var FORUM_COOKIE_NAME = FORUM_COOKIE_NAME + '_theme';

function setStyle() {
// Sets the stylesheet from the cookie and appends to document head.
    var tStyle = "<link id='customtheme' rel='stylesheet' href='" + $.cookie(FORUM_COOKIE_NAME) + "' type='text/css' />";
    $("head").append(tStyle);
};

function removeStyle() {
// Kill the cookie and remove any custom stylesheet from the head.
    $.cookie(FORUM_COOKIE_NAME, "", { path: '/', expires: -5 });
    $("head #customtheme").remove();
}

$(function() {
    if($.cookie(FORUM_COOKIE_NAME)) { // If a cookie is set, set the style.
        setStyle();
    }

    $("#styleswitch li a").click(function() { // Handler for link clicks within ul id=styleswitch"/li hierachy
        if($(this).attr('rel')) { // Using rel attribute from the html links to pass the stylesheet val
            $.cookie(FORUM_COOKIE_NAME,$(this).attr('rel'), {expires: 30, path: '/'});
            setStyle();
        }
        else {
            removeStyle();
        }
        return false;
    });

    $('#themeselection').change(function() { // Handler for drop-down option box id="themeselection", css files passed via option value
        if($(this).val()) {
            $.cookie(FORUM_COOKIE_NAME,$(this).val(), {expires: 30, path: '/'});
                setStyle();
        }
        else {
            removeStyle();
        }
     });
});
