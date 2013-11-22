function outputPosts(startOutput, postLimit) {
// function to handle the output of posts from the neo api into the chat box.
	$.getJSON('http://api.neoseeker.com/threads/'+tId[1]+'/messages?start='+startOutput+'&limit='+postLimit+'&callback=?', function(data) {
		var now = Math.round(new Date().getTime() / 1000)
		data.reverse()

		var ret = "<table style='width: 100%; border-collapse:collapse; table-layout: fixed;'>";

		if (typeof(dateLimit) != "undefined") { // check for optional dateLimit param - prevents display of posts earlier than passed date.
			var ldate = new Date(dateLimit).getTime();
		}

		$.each(data, function(key, val) {
			if (typeof(ldate) != "undefined") { // only check the date stuff if we really must.
				var cdate = new Date(val.created).getTime();

				if (cdate > ldate) {
					ret += __buildTableRow(key, val);
				}
			} else {
				ret += __buildTableRow(key, val);
			}
		});
		ret += "</table>";

		$('#chatbox').html(ret);
		$('#tiffyUpdatedTime').text("Last Update: Right now!");
		lastUpdateTime = now;
	}).fail(function(jhr, errorTxt, errorThrown) {
		$('#tiffyUpdatedTime').text("Error Loading - Still Trying to Update!");
		lastUpdateCache = 0;
	});
}

function outputScore() {
// function to handle the output of posts from the neo api into the chat box.
	$.getJSON('http://tiffany.pwnsu.com/neo/scoreapi.php?callback=?', function(data) {
		alert("Home: " + data[0]);
	});

}

function __buildTableRow(key, val) {
// function to assist with building the output table.  exists as it needs to be called from multiple places depending on checks.
	var avatar = val.created_by.avatar_img.match(/[^\/]+$/); // need to fetch the filename of the avatar only so we can call the small ones instead.
	var notifexpr = new RegExp("\<a.+class=\"mention\".*>"+neousername+"\<\/a\>"); // expression to see if the post contains a mention for logged in user.
	var quoteexpr = new RegExp("<blockquote>.+<a.+directmessage\.php.+>"+neousername+"<\/a>.+<\/blockquote>"); // expression to see if the post contains a quote for logged in user.

	val.body = val.body.replace(/<iframe.+?src=\".+?embed\/([a-zA-Z0-9\-]+).+?<\/iframe>/g, "<a href='http://www.youtube.com/watch?v=$1' target='_blank'>YouTube Video</a>");

	if (notifexpr.test(val.body) || quoteexpr.test(val.body)) { var color = "#ffff99"; } // yellow background on posts containing a notif for this user.
	else { var color = (key % 2 ? '#c6d0e7' : '#eef0f9')} // otherwise standard neo blue/white colors.

	return "<tr style='width: 100%; background-color:"+color+"'><td style='text-align: center; width: 40px; border: 1px solid #fff;'><img src='http://i.neoseeker.com/m/s/"+avatar+"' /></td><td style='width: 100px; overflow: hidden; text-overflow:ellipsis; white-space:nowrap; border: 1px solid #fff; color: rgb(0, 51, 204);'><a href='#' onClick='addNotification(\""+val.created_by.username+"\"); return false;'>"+val.created_by.username+"</a></td><td style='border: 1px solid #fff;'>"+val.body+"</td><td style='width: 50px; text-align: center; border: 1px solid #fff;'><a style='border: 0;' onClick='tiffyQuickQuote("+val.forum.forumid+","+val.thread.threadid+","+val.messageid+");return false;' href='#'><img src='http://i.neoseeker.com/f/neo/replyquote.gif' /></a></td></tr>";
}

function checkForUpdate() {
// self-executing function to poll neo api for thread info and call for an update if the reported last_posted time is laster than cached.
	$.getJSON('http://api.neoseeker.com/threads/'+tId[1]+'?callback=?', function(data) {
		var now = Math.round(new Date().getTime() / 1000)

		if (data.last_posted != lastUpdateCache) {
			lastUpdateCache = data.last_posted;
			(data.num_posts < 100 ? outputPosts(0, (data.num_posts)) : outputPosts((data.num_posts - 100), 100));
		} else {
			$('#tiffyUpdatedTime').text("Last Update: " + (now - lastUpdateTime).toTextTimeOutputFormat());
		}
	});
	setTimeout("checkForUpdate()", 3000);
}

function tiffyPostToThread() {
// function to post to the thread via the standard post_reply neo function.
	$('#livechatthreadsubmit').attr('disabled', 'disabled');
	var body = $('#tiffyChatBoxInput').val();
	var subject = ($('h1.threadtitle a:not(.label)').text() ? "re: " + $('h1.threadtitle a:not(.label)').text() : "nLive Post");

	var post = $.post("http://www.neoseeker.com/forums/index.php", { subject: subject, body: body, fn: "post_reply", threadid: tId[1], submit: "true" });

	post.done(function(data) {
		$('#tiffyChatBoxInput').val('');
		$('#tiffyChatBoxInput').height('2em');
		$('#livechatthreadsubmit').removeAttr('disabled');
	});
	return false;
}

function addNotification(username) {
// function to handle adding notifications into chat box when username is clicked.
	var current = $('#tiffyChatBoxInput').val();
	var notif = "@"+username;

	// append @ to end if username has spaces:
	if (username.indexOf(" ") >= 0) { notif += "@"; }

	// add a space to the end of what's in the box, except if there's one already or a quote block just ended:
	if (current.length && !(/\s$/.test(current) || /\[\/quote\]$/.test(current))) { current += " " }

	$('#tiffyChatBoxInput').focus().val('').val(current+notif+" ");
	$("#tiffyChatBoxInput").trigger('autosize');	
}

function tiffyQuickQuote(forumid, threadid, messageid) {
// function piggybacking off forum quick quote ajax handler to provide quote functionality.
	var fetch = $.post("/forums/ajaxhandler.php", {act: "get_raw_msg_body", forumid: forumid, threadid: threadid, messageid: messageid});

	fetch.done(function(data) {
		var current = $('#tiffyChatBoxInput').val();

		if (current.length) {
			current += "\n\n";
		}
		$('#tiffyChatBoxInput').focus().val('').val(current+data); // fixes bug in forum quick quote function to put cusor to end of line.  neo's doesn't work in IE.
		$("#tiffyChatBoxInput").trigger('autosize'); // manual trigger for textarea resize plugin since we're updating the box via JS.
	});
}

function tiffySelectSmilie(smilie) {
	var current = $('#tiffyChatBoxInput').val();

	smilie = (/[^\S\n]$/.test(current) || !current.length ? smilie : " " + smilie);
	$('#tiffyChatBoxInput').focus().val('').val(current+smilie);
	$("select#smilieselector").prop('selectedIndex', 0);
	$("#tiffyChatBoxInput").trigger('autosize');	
	
}

// Globals (gross, should be wrapped in some anonymous function to simulate a namespace or something if i wasn't lazy):
var tId = window.location.pathname.match(/\/t([0-9]+)/); // Fetch the numeric thread id in match group 1.
var lastUpdateCache; // for storing previous value of the final post in thread time.
var lastUpdateTime = Math.round(new Date().getTime() / 1000); // user's local time for storing when the post list was updated.
var neousername = $("img.avatar").data("username"); // store username for use in determining if a user has been notified in the chat box.
var showScore = true;

$(function() {
	// plugin to handle the autoresize functionality of the chat textarea.
	$.getScript("http://tiffany.pwnsu.com/plugins/jquery.autosize-min.js", function() {
		$("#tiffyChatBoxInput").autosize();
	});

	// plugin for the drop-down image box.	
	$.getScript("http://tiffany.pwnsu.com/plugins/msdropdown/jquery.dd.min.js", function() {
		$('head').append('<link rel="stylesheet" href="http://tiffany.pwnsu.com/plugins/msdropdown/dd.css" type="text/css" />');
		$("select#smilieselector").msDropDown();
	});

	// smilie drop-down
	var smilies = [
		[':)', 'http://cdn.staticneo.com/neoassets/smileys/smile.gif'],
		[':P','http://cdn.staticneo.com/neoassets/smileys/a_tongue.gif'],
		[';)','http://cdn.staticneo.com/neoassets/smileys/wink.gif'],
		[':(','http://cdn.staticneo.com/neoassets/smileys/sad.gif'],
		[':|','http://cdn.staticneo.com/neoassets/smileys/nosmile.gif'],
		[';(','http://cdn.staticneo.com/neoassets/smileys/cry.gif'],
		[':D','http://cdn.staticneo.com/neoassets/smileys/bigsmile.gif'],
		[':confused:','http://cdn.staticneo.com/neoassets/smileys/confused.gif'],
		[':cool:','http://cdn.staticneo.com/neoassets/smileys/cool.gif'],
		[':#','http://cdn.staticneo.com/neoassets/smileys/mad.gif'],
		[':o','http://cdn.staticneo.com/neoassets/smileys/embarrassed.gif'],
		['^_^','http://cdn.staticneo.com/neoassets/smileys/animesmile.gif'],
		[':colored:','http://cdn.staticneo.com/neoassets/smileys/coloredsmile.gif'],
		[':thick:','http://cdn.staticneo.com/neoassets/smileys/thicksmile.gif'],
		[':angry:','http://cdn.staticneo.com/neoassets/smileys/animangry.gif'],
		[':ashamed:','http://cdn.staticneo.com/neoassets/smileys/ashamed.gif'],
		[':hypno:','http://cdn.staticneo.com/neoassets/smileys/hypno.gif'],
		[':_puke:','http://cdn.staticneo.com/neoassets/smileys/puke.gif'],
		[':sonic:','http://cdn.staticneo.com/neoassets/smileys/sonic.gif'],
		[':sonicshadow:','http://cdn.staticneo.com/neoassets/smileys/sonicshadow.gif'],
		['o_O','http://cdn.staticneo.com/neoassets/smileys/huh.gif'],
		[':laugh:','http://cdn.staticneo.com/neoassets/smileys/a_laugh.gif'],
		[':angelwings:','http://cdn.staticneo.com/neoassets/smileys/angelwings.gif'],
		[':_devil2:','http://cdn.staticneo.com/neoassets/smileys/devil2.gif'],
		[':angel:','http://cdn.staticneo.com/neoassets/smileys/angel.gif'],
		[':blackeye:','http://cdn.staticneo.com/neoassets/smileys/blackeye.gif'],
		[':_dead:','http://cdn.staticneo.com/neoassets/smileys/dead.gif'],
		[':_devil:','http://cdn.staticneo.com/neoassets/smileys/devil.gif'],
		[':eating:','http://cdn.staticneo.com/neoassets/smileys/eating.gif'],
		[':_phantom:','http://cdn.staticneo.com/neoassets/smileys/phantom.gif'],
		[':rainbow:','http://cdn.staticneo.com/neoassets/smileys/rainbow.gif'],
		[':sleeping:','http://cdn.staticneo.com/neoassets/smileys/sleeping.gif'],
		[':annoyed:','http://cdn.staticneo.com/neoassets/smileys/annoyed.gif'],
		['o.O','http://cdn.staticneo.com/neoassets/smileys/oO.gif'],
		[':_dumbfounded:','http://cdn.staticneo.com/neoassets/smileys/dumbfounded.gif'],
		['¬_¬','http://cdn.staticneo.com/neoassets/smileys/closed_eyes.gif'],
		[':blinkeyes:','http://cdn.staticneo.com/neoassets/smileys/blinky_eyes.gif'],
		[':rolleyes:','http://cdn.staticneo.com/neoassets/smileys/rolleyes.gif'],
		[':moony:','http://cdn.staticneo.com/neoassets/smileys/moony.gif'],
		[':_oooh:','http://cdn.staticneo.com/neoassets/smileys/oooh.gif'],
		[':shifty:','http://cdn.staticneo.com/neoassets/smileys/shifty.gif'],
		[':_oops:','http://cdn.staticneo.com/neoassets/smileys/oops.gif'],
		[':notamused:','http://cdn.staticneo.com/neoassets/smileys/notamused.gif'],
		[':whatever:','http://cdn.staticneo.com/neoassets/smileys/whatever.gif'],
		[':suikiasmile:','http://cdn.staticneo.com/neoassets/smileys/suikia_smiley.gif'],
		[':coolcat:','http://cdn.staticneo.com/neoassets/smileys/coolcat.gif'],
		[':lock:','http://cdn.staticneo.com/neoassets/smileys/lock.gif'],
		[':redanger:','http://cdn.staticneo.com/neoassets/smileys/redanger.gif'],
		[':frag:','http://cdn.staticneo.com/neoassets/smileys/redfrag.gif'],
		[':skully8:','http://cdn.staticneo.com/neoassets/smileys/skully8ball.png'],
		[':epic:','http://cdn.staticneo.com/neoassets/smileys/epic.gif'],
		[':bigfrown:','http://cdn.staticneo.com/neoassets/smileys/bigfrown.gif'],
		[':happy:','http://cdn.staticneo.com/neoassets/smileys/reallyhappy.gif'],
		[':salty:','http://cdn.staticneo.com/neoassets/smileys/salty.gif'],
		[':shocked:','http://cdn.staticneo.com/neoassets/smileys/shocked.gif'],
		[':_pointy2:','http://cdn.staticneo.com/neoassets/smileys/pointy2.gif'],
		[':XD;','http://cdn.staticneo.com/neoassets/smileys/xd.gif'],
		[':nothappy:','http://cdn.staticneo.com/neoassets/smileys/nothappy.gif'],
		[':ninja:','http://cdn.staticneo.com/neoassets/smileys/ninja.gif'],
		[':shroom:','http://cdn.staticneo.com/neoassets/smileys/shroom.gif'],
		[':1up:','http://cdn.staticneo.com/neoassets/smileys/1up.gif'],
		[':kirby:','http://cdn.staticneo.com/neoassets/smileys/kirby.gif'],
		[':_pokeball:','http://cdn.staticneo.com/neoassets/smileys/pokeball.gif'],
		[':yoshi:','http://cdn.staticneo.com/neoassets/smileys/yoshi.gif'],
		[':samus:','http://cdn.staticneo.com/neoassets/smileys/samus.gif'],
		[':snake:','http://cdn.staticneo.com/neoassets/smileys/snake.gif'],
		['<3;','http://cdn.staticneo.com/neoassets/smileys/heart.gif'],
		['</3;','http://cdn.staticneo.com/neoassets/smileys/brokenheart.gif'],
		[':yinyang:','http://cdn.staticneo.com/neoassets/smileys/yinyang.gif'],
		[':triforce:','http://cdn.staticneo.com/neoassets/smileys/triforce.gif'],
		[':mario:','http://cdn.staticneo.com/neoassets/smileys/mario.gif'],
		[':luigi:','http://cdn.staticneo.com/neoassets/smileys/luigi.gif'],
		[':holymateria:','http://cdn.staticneo.com/neoassets/smileys/holymateria.gif'],
		[':meteormateria:','http://cdn.staticneo.com/neoassets/smileys/meteormateria.gif'],
		[':_pointy1:','http://cdn.staticneo.com/neoassets/smileys/pointy1.gif'],
		[':_dragoniteballz:','http://cdn.staticneo.com/neoassets/smileys/yeahbaby.gif'],
	];

	// build smilies drop-down
	var selector = "<select onChange='tiffySelectSmilie(this.value)' style='width: 100px;' name='tiffychatsmilies' id='smilieselector'>";
	selector += "<option value=''>--smilies--</option>";
	for (n=0;n<smilies.length;n++) {
		selector += "<option value='" + smilies[n][0] + "' data-image='" + smilies[n][1] + "'></option>";
	}
	selector += "</select>";

	if (showScore) {
		var scoreoutput = "<p>scorelol</p>";
		$(scoreoutput).insertAfter('h1.threadtitle');
		outputScore();
	}

	// chat box main div container
	var container = "<div style='clear: both; margin-left: auto; margin-right: auto;' id='chatparentcontainer'><p style='color: #fff; font-size: 12px; font-weight: bold; margin-left: auto; margin-right: auto; width: 80%; background-color: #336699;'>nLive Chat<span id='tiffyUpdatedTime' style='float: right;'></span></p><div id='chatbox' style='resize: both; margin-left: auto; margin-right: auto; width: 80%; height: 400px; overflow-x: hidden; overflow-y: scroll;'></div><form onsubmit='return tiffyPostToThread();'><p style='text-align: center;'><textarea style='width: 80%; height: 2em;' id='tiffyChatBoxInput'></textarea><br /><input id='livechatthreadsubmit' value='Send to Chat' type='submit' />&nbsp;"+ selector +"</p></form></div>";

	// attach to neo directly under the thread title
	$(container).insertAfter('h1.threadtitle');
		
	// begin self-executing update check.
	checkForUpdate();
});

Number.prototype.toTextTimeOutputFormat = function () {
	var sec_num = parseInt(this, 10);
	var hours   = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (minutes == 0) { var time = seconds+' seconds ago'; }
	else if (hours == 0) { var time = minutes+(minutes > 1 ? ' minutes, ' : ' minute, ')+seconds+' seconds ago'; }
	else { var time = hours+(hours > 1 ? ' hours, ' : ' hour, ')+minutes+(minutes > 1 ? ' minutes, ' : ' minute, ')+seconds+' seconds ago'; }
	
	return time;
}
