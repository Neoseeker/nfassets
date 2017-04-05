// http://www.neoseeker.com/forums/53549/

var images = new Array('http://i.neoseeker.com/mgv/424318-Randome/318/95/sr32_display.gif',
'http://img803.imageshack.us/img803/3957/header2.png',
'http://i54.tinypic.com/2utlrtu.png',
'http://i56.tinypic.com/zu4c61.png',
'http://i55.tinypic.com/28su1xj.png',
'http://i56.tinypic.com/2ed6uiu.png',
'http://i.neoseeker.com/mgv/424318-Randome/318/14/header_2_display.png',
'http://i237.photobucket.com/albums/ff146/The_DW_Elmo/SR3.png',
'http://i237.photobucket.com/albums/ff146/The_DW_Elmo/SR3P.png',
'http://img810.imageshack.us/img810/442/unled1es.jpg');
var num = Math.floor(Math.random() * images.length);

$('#random').attr("src", images[num]);
