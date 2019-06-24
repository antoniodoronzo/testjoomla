/**
 * Field Validation for HD Video Share
 *
 * This file is to validate the fields of Commenting users in HD Video Share component
 *
 * @category   Apptha
 * @package    Com_Contushdvideoshare
 * @version    3.8
 * @author     Apptha Team <developers@contus.in>
 * @copyright  Copyright (C) 2015 Apptha. All rights reserved.
 * @license    GNU General Public License http://www.gnu.org/copyleft/gpl.html
 */
function videoupload(){if(document.getElementById("filetype2")&&document.getElementById("filetype2").checked===!0){if(""===document.getElementById("Youtubeurl").value||" "===document.getElementById("Youtubeurl").value)return alert("Please Enter the Video URL"),document.getElementById("Youtubeurl").focus(),!1;var e=document.getElementById("Youtubeurl").value;if(!(e.indexOf("youtube.com")>-1||e.indexOf("vimeo.com")>-1||e.indexOf("viddler.com")>-1||e.indexOf("dailymotion.com")>-1||e.indexOf("youtu.be")>-1))return alert("URL invalid. Try again."),document.getElementById("Youtubeurl").focus(),!1}if(document.getElementById("filetype3")&&document.getElementById("filetype3").checked===!0){if(""==document.getElementById("Youtubeurl").value||" "==document.getElementById("Youtubeurl").value)return alert("Please Enter the Video URL"),document.getElementById("Youtubeurl").focus(),!1;var e=document.getElementById("Youtubeurl").value,t=/(http:\/\/|https:\/\/)[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/;if(!t.test(e))return alert("URL invalid. Try again."),document.getElementById("Youtubeurl").focus(),!1}if(document.getElementById("filetype4")&&document.getElementById("filetype4").checked===!0){var l=document.getElementById("streamname").value,u=document.getElementById("islive2").checked;if(""==l)return alert("You must provide a streamer path!"),!1;var t=/(rtmp:\/\/|rtmpe:\/\/)[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}|(rtmp:\/\/|rtmpe:\/\/)/;if(!t.test(l))return alert("Please enter a valid streamer path"),document.getElementById("streamname").focus(),!1;if(document.getElementById("streamerpath-value").value=l,1==u?document.getElementById("islive-value").value=1:document.getElementById("islive-value").value=0,""==document.getElementById("Youtubeurl").value||" "==document.getElementById("Youtubeurl").value)return alert("Please Enter the Video URL"),document.getElementById("Youtubeurl").focus(),!1}return!document.getElementById("filetype5")||document.getElementById("filetype5").checked!==!0||""!=document.getElementById("embed_code").value&&" "!=document.getElementById("embed_code").value?document.getElementById("filetype6")&&document.getElementById("filetype6").checked===!0&&""==document.getElementById("ffmpeg").value&&6==document.getElementById("seltype").value?(alert("Please Select Upload Video"),document.getElementById("ffmpeg").focus(),!1):document.getElementById("Youtubeurl")&&""===document.getElementById("Youtubeurl").value&&2===document.getElementById("seltype").value?(alert("Please Enter Video Url"),document.getElementById("normalvideoformval").focus(),!1):""==document.getElementById("normalvideoformval").value&&1==document.getElementById("seltype").value?(alert("Please Select Upload Video"),document.getElementById("normalvideoformval").focus(),!1):""==document.getElementById("thumbimageformval").value&&1==document.getElementById("seltype").value?(alert("Please Select Thumb Image"),document.getElementById("thumbimageformval").focus(),!1):""==document.getElementById("videotitle").value?(alert("Please Enter Your Video Title"),document.getElementById("videotitle").focus(),!1):""==document.getElementById("tagname").value?(alert("Please Choose Video Category"),document.getElementById("tagname").focus(),!1):!0:(alert("Please Enter the Embed Code"),document.getElementById("embed_code").focus(),!1)}
