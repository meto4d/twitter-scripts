// ==UserScript==
// @name         show TwImage URL
// @namespace    https://github.com/meto4d/twitter-scripts/
// @version      0.1
// @description  image URLs extracted on the tweet
// @author       Ruth
// @match        https://twitter.com/*/status/*/photo/1
// @include      https://twitter.com/*/status/*/photo/1
// @grant        none
/* load jQuery */
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var atag = ['<a href="', '", target="_blank">Image', '</a>'];
    var twe = $('div.PermalinkOverlay-body').find('div.js-tweet-text-container').find('p.TweetTextSize.TweetTextSize--jumbo.js-tweet-text.tweet-text');
    $('meta[property="og:image"]').each((index, elm) => {
        twe.append("<br />");
        twe.append(atag[0] + elm.content + atag[1] + index + atag[2]);
    });

    console.log(twe);

})();