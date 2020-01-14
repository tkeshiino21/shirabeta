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
┣━ images // 画像フォルダ  
┣━ Layout // ヘッダーなどの共通する Layout  
┗━ Shared // styled-components で作成した UI コンポーネント

## Libraries

フレームワーク: React  
状態管理: Redux  
ミドルウェア: redux-thunk  
データベース: Firebase Cloudstore  
認証: Firebase Authentication  
Redux 関連ツール: react-redux react-redux-firebase
スタイリングライブラリ: styled-components  
テスト: Jest and Enzyme

## DevelopmentLog

このアプリに関する開発ブログは Quranch に公開しております。  
url: <https://101378.qrunch.io/entries/SU2orLU1to7MPyvJ>
