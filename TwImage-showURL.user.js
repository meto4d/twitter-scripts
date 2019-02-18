// ==UserScript==
// @name         show TwImage URL
// @namespace    https://github.com/meto4d/twitter-scripts/
// @version      0.1
// @description  image URLs extracted on the tweet
// @author       Ruth
// @match        https://twitter.com/*/status/*
// @match        https://twitter.com/*/status/*/photo/1
// @include      https://twitter.com/*/status/*
// @include      https://twitter.com/*/status/*/photo/1
// @grant        none
/* load jQuery */
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

// URL shows in metadata
var Metadata = true; // false
var URLstr = "画像";
var Spacer = "&nbsp;";
var Front = "<br />";

(function() {
    'use strict';

    // Your code here...
    var atag = ['<a href="', '", target="_blank">'+URLstr, '</a>'];
    var twe = Metadata ? $('div.PermalinkOverlay-body').find('div.client-and-actions').find('span.metadata')
        : $('div.PermalinkOverlay-body').find('div.js-tweet-text-container').find('p.TweetTextSize.TweetTextSize--jumbo.js-tweet-text.tweet-text');
    if(Metadata) twe.append(Front);
    $('meta[property="og:image"]').each((index, elm) => {
        if(!elm.content.match(/\/(profile_images|ext_tw_video_thumb)\//)) {
            twe.append(atag[0] + elm.content + atag[1] + (index+1) + atag[2] + Spacer);
        }
    });

})();