﻿# Twitterでほしいと思ったUserScriptを置いてるだけ
そうだよ

### インスコ方法
基本的にUserScriptでFirefoxくんかChromeくんでの利用を想定しています。  
ですので、インスコ方法はGreaseMonkeyやTamperMonkeyくんに聞いてください  
多分、各スクリプトのページを開いてRawを開けば勝手にTamperMonkey君がインスコしてくれます。

## TwImage-large.user.js
画像ツイートの画像を直接個別で開いた時、縮小画像だったりするので、  
~~そのURL末尾に:largeをつけてでっかくするだけ。~~
そのURL末尾に&name=4096x4096をつけてでっかくするだけ。
https://pbs.twimg.com/media/ で始まるURLで動作します。  
jpg, png, gif, webpの拡張子に反応するようにしておきました。
現状、4096x4096以上の解像度のURLを見かけてないので、便宜的に4096x4096にしておきました。

### How to use
TamperMonkey用で動くように作ったので、ChromeのTamperMonkeyで読み込ますと動くはずです。
多分GreaseMonkeyでも動くはずです。

## TwImage-showURL.user.js
画像ツイートの画像を個別で開きたいとき、複数の画像ツイートでは拡大した後個別で開けず、  
さらに縮小画像でワンテンポが必要だったりするので、画像URLを直接リンクとしてツイートに埋め込んで表示するだけ。  
表示場所をツイート本文か日時のあたりか変更できるように。  
Monkeyの機能でもなんでも良いので、編集して、上部の`var Metadata = true;`を変更してください  
`true`で日時、`false`でツイート本文です。  
https://twitter.com/***/status/*** で始まるURLで動作します。  

### How to use
TamperMonkey用で動くように作ったので、ChromeのTamperMonkeyで読み込ますと動くはずです。
多分GreaseMonkeyでも動くはずです。

## FanboxShowPixiv.user.js
PixivFanboxでPixiv自体のアカウントページをFanbox内でリンクさせていない人が多かったり、  
そもそもPixiv側がFanbox内で元のアカウントページとリンクさせてないのが悪いと思ったので、  
プロフィールや投稿等のボタンの横にpixivアカウントページへのリンクを追加するだけ。  
たまに表示されないときがあるけど、再リロードすれば追加されるはずです。

### How to use
TamperMonkey用で動くように作ったので、ChromeのTamperMonkeyで読み込ますと動くはずです。
多分GreaseMonkeyでも動くはずです。
