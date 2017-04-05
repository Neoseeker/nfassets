function addCommas(nStr){
 nStr += '';
 x=nStr.split('.');
 x1=x[0];
 x2=x.length > 1 ? '.' + x[1] : '';
 var rgx = /(\d+)(\d{3})/;
 while (rgx.test(x1)){
  x1=x1.replace(rgx,'$1' + ',' + '$2');
 }
 return x1 + x2;
}

$.ajax
(
  {
    url: 'https://www.runescape.com/g=runescape/player_count.js?varname=iPlayerCount',
    dataType: 'jsonp',
    success: function(iPlayerCount)
    {
      if(iPlayerCount > 0 )
      {
        $('span#playerCount').html(addCommas(iPlayerCount));
      }
    }
  }
);


var headers = new Array()
var credit = new Array()

headers[0] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/11/header1r.jpg'
credit[0] = 'Thug Angel, Unknown Warrior'
headers[1] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/48/header2r.jpg'
credit[1] = 'Thug Angel, Unknown Warrior'
headers[2] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/46/header3r.jpg'
credit[2] = 'Thug Angel, Unknown Warrior'
headers[3] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/58/header4r.jpg'
credit[3] = 'Thug Angel, Unknown Warrior'
headers[4] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/54/header5r.jpg'
credit[4] = 'Unknown Warrior'
headers[5] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/40/header6r.jpg'
credit[5] = 'Unknown Warrior'
headers[6] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/45/header7r.jpg'
credit[6] = 'Unknown Warrior'
headers[7] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/29/header8r.jpg'
credit[7] = 'Thug Angel, Unknown Warrior'
headers[8] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/18/header9r.jpg'
credit[8] = 'Thug Angel, Unknown Warrior'
headers[9] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/46/header10r.jpg'
credit[9] = 'Thug Angel, Unknown Warrior'
headers[10] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/48/header11r.jpg'
credit[10] = 'Unknown Warrior'
headers[11] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/35/header12.jpg'
credit[11] = 'Unknown Warrior'
headers[12] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/1/header13r.jpg'
credit[12] = 'Unknown Warrior'
headers[13] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/43/header14r.jpg'
credit[13] = 'Unknown Warrior'
headers[14] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/19/header15a.jpg'
credit[14] = 'Unknown Warrior'
headers[15] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/31/header16.jpg'
credit[15] = 'Unknown Warrior'
headers[16] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/47/header173.jpg'
credit[16] = 'Unknown Warrior'
headers[17] = 'https://i.neoseeker.com/mgv/124733-ACY3/733/47/header182.jpg'
credit[17] = 'Anime'

var size = headers.length;
var preload = new Array()
for (i = 0; i < size; i++){
    preload[i] = new Image()
    preload[i].src = headers[i]
}
var id = Math.round(Math.random()*(size-1));

document.getElementById('theme_header').src=headers[id];
document.getElementById('theme_header').title=credit[id];