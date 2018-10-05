// http://www.neoseeker.com/forums/53549/

var images = new Array('https://i.neoseeker.com/mgv/424318/318/95/sr32_display.gif',
'https://i.imgur.com/AJlqA59.png',
'http://i55.tinypic.com/28su1xj.png',
'https://i.imgur.com/qxCV5S5.png',
'https://i.neoseeker.com/mgv/424318/318/14/header_2_display.png',
);
var num = Math.floor(Math.random() * images.length);

$('#random').attr("src", images[num]);
