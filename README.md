# Livrio

Livrio は図書管理用アプリケーションです。
お気に入りの本を会社で回し読みしたいとき、
あるいは他のチームメイトに推薦したい本があるときなどの
ユースケースを想定しています。
主な実装は、本の貸出履歴の管理と本へのコメント機能、
また Qiita の本に関する記事を閲覧できる機能です。

## directory

src  
┣━ components // View に関するもの  
┣━ containers // State と View をつなぐもの(mapStateToProps など)  
┣━ ducks // Redux に関するもの(reducer や actionCreator など)  
┣━ images // 画像フォルダ  
┣━ Layout // ヘッダーなどの共通する Layout  
┗━ Shared // styled-components で作成した UI コンポーネント

## Libraries

MainLibrary: React  
StateManagement: Redux  
Middleware: redux-thunk  
Database: Firebase Cloudstore  
Authentication: Firebase Authentication  
StylingLibrary: styled-components  
Testing: Jest and Enzyme  
FormValidation: formik and Yup  
DateFormatter: moment  
ReduxAxiliary: react-redux react-redux-firebase

## DevelopmentLog

このアプリに関する開発ブログは Quranch に公開しております。  
url: <https://101378.qrunch.io/entries/SU2orLU1to7MPyvJ>
