<script type='text/javascript'>
//<![CDATA[
function labelthumbs(json) {
    for (var i = 0; i < numposts; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                var commenttext = entry.link[k].title;
                var commenturl = entry.link[k].href;
            }
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
            }
        }
        var thumburl;	
        try {
            thumburl = entry.media$thumbnail.url;
			thumburl = thumburl.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/");
        } catch (error) {
            s = entry.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                thumburl = d;
            } else thumburl = no_thumb;
        }
        var postdate = entry.published.$t;
        var cdyear = postdate.substring(0, 4);
        var cdmonth = postdate.substring(5, 7);
        var cdday = postdate.substring(8, 10);
		document.write('<ul class="rp_thumbs">');
        document.write('<li>');
        if (showpostthumbnails == true)
            document.write('<a href="' + posturl + '"><div class="rp_thumb"><span class="rollover"></span><img width="' + thumb_width + '" height="' + thumb_height + '" alt="' + posttitle + '" src="' + thumburl + '"/></div></a>');
        document.write('<span class="rp_title"><a href="' + posturl + '" target ="_top">' + posttitle + '</a></span>');
        var towrite = '';
        document.write('<span class="rp_meta">');
        if (showpostdate == true) {
            towrite = towrite + '<span class="rp_meta_date">' + cdday + '/' + cdmonth + '/' + cdyear + '</span>';
        }
        if (showcommentnum == true) {
            if (commenttext == '1 Comments') commenttext = '1 Comment';
            if (commenttext == '0 Comments') commenttext = 'No Comments';
            commenttext = '<span class="rp_meta_comment"><a href="' + commenturl + '" target ="_top">' + commenttext + '</a></span>';
            towrite = towrite + commenttext;
        }
        if (displaymore == true) {
            towrite = towrite + '<span class="rp_meta_more"><a href="' + posturl + '" class="url" target ="_top">Read More...</a></span>';
        }
        document.write(towrite);
		document.write('</span>');
		document.write('<span class="rp_summary">');
        if ("content" in entry) {
            var postcontent = entry.content.$t;
        } else
        if ("summary" in entry) {
            var postcontent = entry.summary.$t;
        } else var postcontent = "";
        var re = /<\S[^>]*>/g;
        postcontent = postcontent.replace(re, "");
        if (showpostsummary == true) {
            if (postcontent.length < numchars) {
                document.write('');
                document.write(postcontent);
                document.write('');
            } else {
                document.write('');
                postcontent = postcontent.substring(0, numchars);
                var quoteEnd = postcontent.lastIndexOf(" ");
                postcontent = postcontent.substring(0, quoteEnd);
                document.write(postcontent + '...');
                document.write('');
            }
        }
		document.write('</span>');
        document.write('</li>');
		document.write('</ul>');	
    }
    document.write('<ul class="rp_thumbs2">');
    for (var i = 1; i < numposts2; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;

        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 1; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                var commenttext = entry.link[k].title;
                var commenturl = entry.link[k].href;
            }
            if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
            }
        }
        var thumburl2;	
        try {
            thumburl2 = entry.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/");
        } catch (error) {
            s = entry.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                thumburl2 = d;
            } else thumburl2 = no_thumb2;
        }
        var postdate = entry.published.$t;
        var cdyear = postdate.substring(0, 4);
        var cdmonth = postdate.substring(5, 7);
        var cdday = postdate.substring(8, 10);
		if (showpostthumbnails2 == true)
            document.write('<a href="' + posturl + '"><div class="rp_thumb2"><img width="' + thumb_width2 + '" height="' + thumb_height2 + '" alt="' + posttitle + '" src="' + thumburl2 + '"/></div></a>');
		document.write('<li>');
		document.write('<span class="rp_title rp_title2"><a href="' + posturl + '" target ="_top">' + posttitle + '</a></span>');
        var towrite = '';
        document.write('<span class="rp_meta rp_meta2">');
        if (showpostdate2 == true) {
            towrite = towrite + '<span class="rp_meta_date rp_meta_date2">' + cdday + '/' + cdmonth + '/' + cdyear + '</span>';
        }
        if (showcommentnum2 == true) {
            if (commenttext == '1 Comments') commenttext = '1 Comment';
            if (commenttext == '0 Comments') commenttext = 'No Comments';
            commenttext = '<span class="rp_meta_comment rp_meta_comment2"><a href="' + commenturl + '" target ="_top">' + commenttext + '</a></span>';
            towrite = towrite + commenttext;
        }
        if (displaymore2 == true) {
            towrite = towrite + '<span class="rp_meta_more rp_meta_more2"><a href="' + posturl + '" class="url" target ="_top">Read More...</a></span>';
        }
        document.write(towrite);
		document.write('</span>');
		document.write('</li>');
    }
    document.write("</ul>")
}
//]]>
</script>
<script type='text/javascript'>
var numposts = 1;
var numposts2 = 4;
var showpostthumbnails = true;
var showpostthumbnails2 = true;
var displaymore = true;
var displaymore2 = false;
var showcommentnum = true;
var showcommentnum2 = true;
var showpostdate = true;
var showpostdate2 = true;
var showpostsummary = true;
var numchars = 100;
var thumb_width = 300;
var thumb_height = 140;
var thumb_width2 = 60;
var thumb_height2 = 60;
var no_thumb = &#39;http://1.bp.blogspot.com/-7vDs5hMaDho/U268E2ecF4I/AAAAAAAADY8/RBHVTTuJrxc/w300-h140-c/no-image.png&#39;
var no_thumb2 = &#39;http://3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/s60-c/no-image.png&#39;
</script>
<script type='text/javascript'>
//<![CDATA[
function bp_thumbnail_resize(image_url,post_title)
{
var image_width=200;
var image_height=150;
image_tag='<img width="'+image_width+'" height="'+image_height+'" src="'+image_url.replace('/s72-c/','/w'+image_width+'-h'+image_height+'-c/')+'" alt="'+post_title.replace(/"/g,"")+'" title="'+post_title.replace(/"/g,"")+'"/>';
if(post_title!="") return image_tag; else return ""; 
}
//]]>
</script>
</b:if>
</b:if>

<script src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'/>
<script type='text/javascript'>
$(function() {
$(&quot;.set-1&quot;).mtabs();                                
});
</script>
