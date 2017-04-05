// http://www.neoseeker.com/forums/index.php?fn=browse_forum&f=36342

var imgs = new Array('http://img505.imageshack.us/img505/6858/pes2008headerwh0ht2.jpg',
'http://img158.imageshack.us/img158/5134/owen1hg5.jpg',
'http://img151.imageshack.us/img151/869/pesbanner1fp2sf9.jpg',
'http://img526.imageshack.us/img526/8624/pesheader4vr4qs4.jpg',
'http://img88.imageshack.us/img88/2613/trezpes1pn4.png',
'http://img457.imageshack.us/img457/2151/headreh2mt0.jpg',
'http://img457.imageshack.us/img457/4337/proevoheaderln9ef1.jpg',
'http://img512.imageshack.us/img512/6/newbanner2fi3ai5.gif',
'http://img512.imageshack.us/img512/9076/pesheaderzq0jp1.jpg',
'http://img144.imageshack.us/img144/121/iamwhatiamtw5.jpg',
'http://img505.imageshack.us/img505/3421/pesheaderlp6ch6.png',
'http://img522.imageshack.us/img522/6880/pes20084lb4hs8.jpg',
'http://i16.tinypic.com/4kmg2fo.jpg',
'http://img511.imageshack.us/img511/1059/headeryr8ia6.png');

var max = imgs.length;
var num = Math.floor((Math.random() * max));

document.images.headerimg.src = imgs[num];