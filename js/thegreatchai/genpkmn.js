// http://www.neoseeker.com/forums/21237/
// Updated 28-08-11
// No cheating! =P

var quotes = new Array('',
'Sdppuna: Xxyb! Maxyynm vh kjuub!',
'Ljw hxd anvnvkna cqn Idkjcb rw cqn ljenb? Hnjq, fn\'an bcruu bcdlt cqnan cxx.',
'Intaxv qjb wxcqrwp jpjrwbc Ijymxb.',
'Fqjc mx cqnh mx cx cqn Buxfyxtnb frcqxdc cqn cjrub?',
'Anvnvkna cqn vjw frcq cqn Pxum Cnncq? Qn uxbc cqnv jpjrw.',
'Rw 13 hnjab, cqnh bcruu qjenw\'c rvyaxenm cqn Xum Axm.',
'Hxd mxw\'c fjwwj twxf fqjc cqnh ydc rwcx anynub.',
'Cqn PB Kjuu; WNENA OXAPNC!',
'Lqjavjwmnab jan anm, Bzdracunb jan kudn. Ro hxd fnan j Yxtnvxw, R\'m lqxxbn hxd. ',
'Yxtnvxw jan blrnwcrorljuuh lxxuna cqjw yxwrnb. ',
'Dbrwp Byujbq 100 crvnb rw j axf ljdbnb j 1QTX. Bnarxdbuh.',
'Fn mjan hxd cx yduu j Wrwncjrub\' cjru ',
'Fqh rb cqn N4 wxc cqn N5?',
'Sdbcrw Krnkna dbnm Brwp. Nwnvh Yxtnvxw ojrwcnm.',
'Oann qnjucq ljan? Fqh ljw\'c fn uren rw cqn Yxtnvxw fxaum! ):',
'Mrpuncc\'b wxbn rb j cxxcq. Fqjc rb bnnw ljwwxc kn dwbnnw. ',
'Fn\'an wxc wnamb, fn\'an Yxtnvxw Vjbcnab. ',
'Cnuurwp hxda oarnwmb hxd\'an pxrwp cx cqn phv, jlcdjuuh kjccurwp Vrbch.',
'Hxd twxf cqn Pqxbc Vjaxfjt hxd truunm? Fnuu, fqjcnena hxd mx, mxw\'c cdaw jaxdwm.',
'Rb cqn Laxkjc NEnm?',
'Mxwc urn, hxd fjwc j onvjun vjlqjvy.',
'Unc vn pnc cqn Yqrxwn jwm pren hxd j ljuu ujcna.',
'Jan fn qdvjwb? Xa jan fn Udmrlxux?',
'Jakxt nexuenb rwcx Bneryna. Jbq bjrm bx, bx rc vdbc kn cadn.',
'rBnnmxcdmrmcqja.',
'Oren pnwnajcrxwb jwm fn BCRUU mxw\'c qjen j yaxonbbxa cqjc ljw cnuu j kxh oaxv j prau.',
'Qvv... fnram... Vh Buxfkax DBNM cx twxf Jvwnbrj...',
'&zdxc;Cqnh bnn vn axuurw\'. Cqnh qjcrw\'.&zdxc; - Fqrcwnh\'b Vrucjwt',
'Rc cxxt PJVN OANJT oren PNWNAJCRXWB cx orpdan xdc FN mxw\'c urtn qjerwp YXTNVXW WJVNB hnuunm jc db.',
'Byjv rb Xwrg-lnyycjkun.',
'WNENA PXWWJ PREN VNF DY, WNENA PXWWJ UNC VNF MXXXFFW...',
'Cqn vxbc mjvjpn cqjc ljw yxbbrkuh kn mnjuc rw cqn pjvn lxvnb oaxv j cdacun frcq j kjbn Jccjlt bcjc xo 10. Anjuuh.',
'Ljenb: J cajrwna\'b fxabc wrpqcvjan.',
'Cqrb oxadv rb Knuuxbbxv-rwp',
'Juu dbnab xo Oran chyn vxenb jan urjkun cx knrwp kjwwnm oxa oujvvrwp.',
'&zdxc;Qnh pdhb, qjen hxd bnnw cqn wnf yxtnvxw pjvn?!? ... Yxtnvxw Yrwkjuu?!?!&zdxc; - Buxfyxtn',
'Cqn Vjbcnakjuu rb sdbc j YxtnKjuu fnjarwp ydayun bynnmxb. Vrwm rb kuxfw.',
'Luxhbcna rb xwuh j Pjbcuh rw j bqnuu',
' Wjcrxwju Pnxpajyqrl yaxvrbnm j Vjlqx Yrlqd. Pxc adrwb rwbcnjm.',
'R ydc xw vh Lqjavjwmna yjwcb lxvn arpqc xoo.',
'Xw j bljun xo 1-10, R\'uu pren Wxjq\'b Jaljwrwn.',
'Ro hxd yanbb Dy, J, K, Mxfw, U jwm A jc cqn bjvn crvn xw cqn Yxtnpnja, hxd ljw kuxlt hxda vxv\'b ljuub.',
'Ro hxd blajclq Jakxt, fn\'uu blajclq hxdab.',
'Jujtjijv carnm jwm ojrunm cx dwmnabcjwm Wrwcnwmx uxprl...',
'Qnuux, qnuux, Vxvvh hxd ljuunm, R ljw\'c qnja j cqrwp. R qjen pxc wx bnaerln rw cqn ljen hxd bnn, bnn. Fqjc-fqjc-fqjc mrm hxd bjh, qdq, hxd\'an kanjtrwp dy xw vn. Bxaah R ljwwxc qnja hxd, ljdbn R jv cajrwrwp.',
'Xuwh Ajnu Yxntxvw Vcajbnb Ljw Ajnm Crqb',
'Bx hxd knjc cqn Rwmrpx Unjpdn, qdq? Pxxm sxk. Wxf px bcjwm xw j vxdwcjrw oxa cqann hnjab.',
'KJUCXHB, KJUCXHB, LDKLQXX PXWWJ MX? LDKLQXX PXWWJ MX FQNW CQNH LXVN OXA HXD?',
'Bqrwg\'b Rwcrvrmjcn ldc Chajwrcja\'b Jccjlt!',
'Fjut rwcx qxbyrcju oxa oann. Kdh Unvxwjmn oxa $250.',
'FQJC! Mrm hxd sdbc bwnjbun xena vh 3MB?!?',
'Mxw\'c px xdc rw cqn pajbb rc\'b mjwpnaxdb, rwbcnjm cah cx bcxy j UNJPDN xo mjwpnaxdb larvrwjub cahrwp cx cjtn xena cqn fxaum. ',
'YXTNVXW WJCDANB: J Qjbch Bwxaujg J Kjbqodu Chajwrcja J Zdrnc Ngyuxdm',
'R Urtn Bqxacb Cqnh\'an Odw jwm Njbh cx Fnja!',
'Ljclq JUU 649 Yxtnvxw, Xwuh Dbn Brg.',
'Jan HXD j wjdpqch Yanblqxxuna?');

function decode(text, offset)
{
    alpha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    size = text.length;
    output = "";
    key = alpha;
    decoded_char = "";
    offset = alpha.length - (offset * 2);
    alpha_char = key.charAt(offset);
    loc   = key.indexOf(alpha_char);
    key = key.substring(loc, alpha.length) + key.substring(0, loc);

    for(i=0; i<size; i++)
    {
        char = text.charAt(i);
        charloc  = alpha.indexOf(char);

        if (charloc == -1)
        {
            decoded_char = char;
        }
        else
        {
            decoded_char = key.charAt(charloc);
        }

        output = output + decoded_char;
    }

    $('#quotes').replaceWith(output);
}

var num = Math.floor(Math.random() * (quotes.length - 1) + 1);
decode(quotes[num], 9);