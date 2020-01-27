# Livrio

Livrio は図書管理用アプリケーションです。
お気に入りの本を会社で回し読みしたいとき、
あるいは他のチームメイトに推薦したい本があるときなどにご活用ください。
主な実装は、本の貸出履歴の管理と本へのコメント機能、
また Qiita の本に関する記事を閲覧できる機能です。
全体として「ついつい技術書を読みたくなってしまうサイト」を目指して作りました。

## directory

src  
┣━ components // View に関するもの  
┣━ containers // State と View をつなぐもの(mapStateToProps など)  
┣━ ducks // Redux に関するもの(reducer や actionCreator など)  
┗━ images // 画像フォルダ

## Libraries

フレームワーク: React  
状態管理: Redux  
データベース: Firebase Cloudstore  
認証: Firebase Authentication  
スタイリングライブラリ: styled-components

## 今回の課題点

1: 構想を練る  
どれが使い回すコンポーネントでどれが使い回さないコンポーネントなのか、はじめから決めておく。行き当たりばったりになってしまって時間をロスしてしまったと思う。

## TODO

1: 装丁  
装丁が見えた方が本を選びやすい。Firebase の CloudStorage を使って画像を追加できる機能を実装したい。

2: お知らせ  
右上にベルのアイコンを設置して、返却日が近づいたときに通知する機能を実装したい。

## DevelopmentLog

このアプリに関する開発ブログは Quranch に公開しております。  
url: <https://101378.qrunch.io/entries/SU2orLU1to7MPyvJ>
