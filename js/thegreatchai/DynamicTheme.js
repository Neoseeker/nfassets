var DynamicThemeManager=function(){var usingDynamicTheme=false;var headElement=document.getElementsByTagName("head")[0];var themeHeader;var defaultThemeHeaderSrc;var selectorElement;var forumId=/forums\/(\d+)/.exec(document.location.href)[1];function addTheme(cssLocation){var link=document.createElement("link");link.id="dynamicTheme";link.rel="stylesheet";link.href=cssLocation;headElement.appendChild(link);}
function removeTheme(){var childNodes=headElement.childNodes;headElement.removeChild(document.getElementById("dynamicTheme"));}
function getStyleCookie(){var results=document.cookie.match(new RegExp("f"+forumId+"style=(.*?)(?:;|$)"));if(results!==null&&results.length>1){return results[1];}}
function setStyleCookie(cssStyleKey){setCookie("f"+forumId+"style="+cssStyleKey+"; expires=",!cssStyleKey);}
function setCookie(cookie,remove){var date=new Date(),offset=1000*60*60*24*365;if(remove){offset=-offset;}
date.setTime(date.getTime()+offset);cookie+=date.toGMTString();document.cookie=cookie;}
return{changeTheme:function(themeName){var theme,shouldRevert;theme=this.themes[themeName];if(usingDynamicTheme){removeTheme();if(themeHeader){themeHeader.src=defaultThemeHeaderSrc;}}
if(theme){if(theme.cssHref){addTheme(theme.cssHref);setStyleCookie(themeName);usingDynamicTheme=true;}
if(themeHeader){if(theme.headerSrc){themeHeader.src=theme.headerSrc;}else{themeHeader.src=defaultThemeHeaderSrc;}}
if(!theme.cssHref&&!theme.headerSrc){shouldRevert=true;}}else{shouldRevert=true;}
if(shouldRevert){setStyleCookie("");usingDynamicTheme=false;}},initialize:function(selector){var themeName,options,optionCount,option,cssLocation,headerImage,key,themes,theme,firstThemeName;themeHeader=document.getElementById("theme_header");if(themeHeader){defaultThemeHeaderSrc=themeHeader.src;}
selectorElement=selector;themeName=getStyleCookie();themes={};options=selectorElement.options;optionCount=options.length;for(var i=0;i<optionCount;++i){option=options[i];key=option.value;if(i===0){firstThemeName=key;}
cssLocation=option.getAttribute("csshref");headerImage=option.getAttribute("headersrc");if(themeName===key){selectorElement.selectedIndex=i;}
theme={cssHref:cssLocation,headerSrc:headerImage};themes[key]=theme;}
this.themes=themes;if(themeName){DynamicThemeManager.changeTheme(themeName);}else{DynamicThemeManager.changeTheme(firstThemeName);}}};}();function onChange(){DynamicThemeManager.changeTheme(selector[selector.selectedIndex].value);}
var selector=document.getElementById("theme_selector");if(selector){if(selector.addEventListener){selector.addEventListener("change",onChange,false);}else{selector.attachEvent("onchange",onChange);}
DynamicThemeManager.initialize(selector);}