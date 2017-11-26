// http://www.neoseeker.com/forums/51385/
// now http://www.neoseeker.com/f/pokelounge/
// Originally found at https://neo.thegreatchai.com/pokemon.phpjs
// Updated 18-06-15
// No cheating! =P

var quotes = new Array('',
'Rw Bxernc Adbbrj, Yxtnvxw ljclq hxd!',
'Lxwpajcdujcrxwb, hxd jan cqn 999, 999cq erbrcxa xo cqrb oxadv!',
'Jmvrc rc. Hxd bcruu qxum mxfw cqn J kdccxw.',
'Tjtdwj Ajccjcj! (Rc vnjwb wx fxaarnb)',
'Byjv: Njc rc, mxw\'c yxbc rc.',
'R\'v wxc pxrwp cx Ajrlqd j uxen bxwp, \'ljdbn hxd jbtnm Odaanc.',
'Cqnbn sxtnb fnan vjmn dy kh cqn vnvknab xo yxtnuxdwpn, bx mxw\'c ngynlc jwhcqrwp cxx odwwh.',
'Yunjbn cdaw xoo juu Yxtnmng, YxtnWje, Eb Bnntna, jwm PCB dymjcna mnerlnb knoxan yxbcrwp.',
'&zdxc;R bcjwm oxa axlt qjam mncnavrwjcrxw&zdxc; - Kaxlt Xkjvj.',
'Uxdwprw\' frcq j Ajan Ljwmh.',
'Cqn kdhrwp xa bnuurwp xo Buxfyxtncjru rb yaxqrkrcnm rw cqrb oxadv.',
'Fqx wnnmb Lnunkr fqnw hxd\'an j Crvn Uxam?',
'Lxwenwrnwcuh nwxdpq, cqrb oxadv mxnbw\'c jlcdjuuh qjen jwhcqrwp cx mx frcq Yxtnvxw.',
'Hxd ljw\'c rpwxan Pjah\'b pracq.',
'Wx, wxc wnamb. Fn yanona, &zdxc;Yxtnvxw Vjbcnab.&zdxc;',
'Jan hxd j kxh? Xa j prau?',
'Yxt&njldcn;uxdwpn dbnm Vnjw Uxxt! Wnx vnvknab ljwwxc nbljyn wxf!',
'Hnb, fn JUU twxf cqn orabc cqnvn bxwp fjb cqn knbc',
'Fxdum hxd urtn cqjc Shwg Wjdpqch xa Bjbbh?',
'*Rwbnac vjprtjay sxtn qnan*',
'Rc\'b mroonanwc oaxv anpduja uxdwpnb. Rc\'b urtn rc\'b rw cqn cxy ynalnwcjpn xo uxdwpnb.',
'Fn Urnt Vdmtryi',
'Fqnw hxd\'an qnan, hxd\'an ojvruh. Bxacj.',
'Cqjc fjb Xwrg-ynlcnm.',
'Frum Idkjc jyynjanm! Frum Idkjc jyynjanm! Frum Idkjc jyynjanm!',
'Hxd uxxtrwp oxa Yxtnvxw? Fnuu cqnan\'b j Pnwnaju Yxtnvxw Oxadv j onf kuxltb jfjh.',
'Fqjc rb vh pajwmbxw\'b wjvn jpjrw?',
'Fqnan fn mxw\'c sdbc bcjut hxd, fn Yrtjlqd.',
'Hxda ancanjc oaxv cqn Cnwcjlxxub.',
'Yxtnvxw Ojwb jan Pjvn Oanjtb.',
'ORWRBQ RC XOO FRCQ OJUBN BFRYN!!',
'Wx, cqn vxmb jan xw mdch, hxd\'an sdbc wxc jb kjmjbb jb hxd cqxdpqc.',
'Oxa cqn ujbc crvn, Yxtnvxw rbw\'c j trm\'b pjvn. Rc\'b bnarxdb kdbrwnbb.',
'Bnaynarxa cx juu xcqna uxdwpnb, Lxwcajah cx yxyduja knurno.',
'Ntjwb bnn lunjauh wxf, cqn ajrw rb pxwn.',
'R urtn uxdwpnb, cqnh\'an odw jwm njbh cx fnja',
'Udmrlxux pxc Vxenb urtn Sjppna',
'Anvxerwp cqn Vdt jwm lunjwrwp xdc cqn Cadkkrbq anpdujauh--fn mxw\'c fjwc j Pjakxmxa oaxv cqn Parvna.',
'Nenahkxmh mx cqn Byujbq!',
'Hxda chyrlju Uxdwprw\', kdc wxf Bfraurg oujexdanm!',
'Fqh Yxt&njldcn;uxdwpn? Fhwjdc?!',
'Fqnan Tjavj Tnlunxw lxvnb jwm pxnb',
'Fqnan cqn Ouh oxutb fqx Bdao cqn fnk Mren rw fqnw cqnh mxw\'c qjen cqn Bcanwpcq cx Ldc cqaxdpq cqn Fqrauyxxu xo wdkb.',
'Vjhkn Jnprbujbq mxnbw\'c fjwc cqn fqxun Yxt&njldcn;ydoo. Vjhkn qn xwuh fjwcb... j burln.',
'Cqn vxmb qxyrwp cqnh bnn vn Aqhmxw mrach.',
'R\'uu sdbc dbn vh cadbch oahrwp yjw!',
'Tjwcx Lqxrln Jfjamb: Jarjwj Pajwkduu eb Cjruuxf Bfroc',
'Yunjbn anvnvkna cqjc cqnan rb wx Bqjhvrw uxbrwp.',
'Yunjbn mxw\'c Cqaxq hxda Bjftb jc jwhxwn fqrun rw cqn uxdwpn.',
'Fqh mxw\'c hxd Lxvknn frcq db rw cqn oxadvb?',
'Uxam Bcjat unjawnm j wnf vxen, Bwxf Fjawrwp!',
'Unc\'b lnunkajcn frcq j pujbb xo Vjlqjvyjpwn!',
'R ljw lxdwc: Jacrldwx, Ijymxb, Vxucanb.',
'&zdxc;Nenahxwn twxfb cqjc cqn rln mdwpnxw lxvnb ujbc.&zdxc; - Ojfodu 2t15',
'Ynaonlc oxa lqrumanw frcq wx wnltb!',
'Qxw-qxw-qxwnmpn.',
'J urccun Ojaonclq\'m fxdumw\'c hxd bjh?',
'Sdbc qxf buxf ljw j Buxfyxtn yxtn ro j Buxfyxtn lxdum yxtn buxf?',
'Pxxm Nnennwrwp ujmrnb jwm pnwcunvnw.',
'R CQAXF J BQNUUMNA XW VH CJRU BXVNCRVNB! BJHRW\' JHHHXXXX WXF R\'V J BUXFFFKAX!',
'Mnfxcc v8?',
'Hxd\'an wxc raanunyqjwc.',
'Cqn Nbydaab jan lxvrwp! Cqn Nbydaab jan lxvrwp! Xwn ro kh ujwm, cfx ro kh bnj, cqann ro kh cnunyxacjcrxw!',
'Jwhcqrwp Pxnb!',
'Ljw R pnc j Qxxcqxxc?!',
'Cqn yujln cx orwm ynxyun Bujtrwp xoo.',
'Cjtnb xw hx twx xwa',
'Mx hxd qjen j vxvnwc cx cjut jkxdc xda uxam jwm bjerxa Qnurg?',
'Mnunununun Fqxxxy!',
'Qn\'b Yqru, Yqru cqn yqxcx pdh, cqn 6cq pnwnajcrxw vjw!',
'Cqn cann\'b lxvrwp mxfw!  Crvkdaa!');

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