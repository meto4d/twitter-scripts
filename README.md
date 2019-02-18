# Twitterでほしいと思ったUserScriptを置いてるだけ
そうだよ

### インスコ方法
基本的にUserScriptでFirefoxくんかChromeくんでの利用を想定しています。
ですので、インスコ方法は
GreaseMonkeyやTamperMonkeyくんに聞いてください

## TwImage-large.user.js
画像ツイートの画像を直接個別で開いた時、縮小画像だったりするので、  
そのURL末尾に:largeをつけてでっかくするだけ。  
https://pbs.twimg.com/media/ で始まるURLで動作します。  
jpg, png, gif, webpの拡張子に反応するようにしておきました。

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



