import React, { FC } from 'react';
import LayoutCommon from 'components/organisms/LayoutCommon';
import { Text, theme, Spacing } from 'components/atoms';

const HowToUse: FC = () => {
  return (
    <LayoutCommon>
      <div>
        <section>
          <Text className="h4" as="h1">
            主な機能の紹介
          </Text>
          <div>
            <Text className="body1" as="h3">
              今読むべき技術書がわかる＆探せる
              <br />
              おすすめの本をいいねしたりコメントを書ける
              <br />
              SBNコードを使って本を登録＆管理できる
            </Text>
          </div>
        </section>
        <Spacing mTop={theme.medium} />
        <section>
          <Text className="h5" as="h4">
            ユースケース
          </Text>
          <div>
            <Text className="body2" as="p">
              チーム内での本の回し読みしたいとき
              <br />
              「なんかええ技術書ないかな」というとき
              <br />
              他の人にも勧めたい本があるとき
            </Text>
          </div>
        </section>
        <Spacing mTop={theme.medium} />
        <section>
          <Text className="h6" as="h5">
            詳しい使い方
          </Text>
          <div>
            <Text className="subtitle1" as="h6">
              閲覧機能
            </Text>
            <div>
              <Text className="body2" as="h6">
                本の閲覧は"Home"より可能です。 絞り込み検索ができます。
                <br />
                タイトルを押すと本の詳細ページにジャンプします。
              </Text>
            </div>
            <Spacing mTop={theme.small} />
            <Text className="subtitle1" as="h6">
              ソーシャル機能
            </Text>
            <div>
              <Text className="body2" as="h6">
                本の詳細ページよりコメントとお気に入り登録が可能です。
                <br />
                自身のコメントやお気に入りはMyPageから確認できます。
              </Text>
            </div>
            <Spacing mTop={theme.small} />
            <Text className="subtitle1" as="h6">
              図書管理機能
            </Text>
            <div>
              <Text className="body1" as="h6">
                右上のメニューーボタンより"BookRegister"で本の登録が可能です。
                <br />
                本の詳細ページより"BORROW"ボタンを押すと本の貸出を申請できます。
                <br />
                貸出期限は２週間となっています。
              </Text>
            </div>
          </div>
        </section>
      </div>
    </LayoutCommon>
  );
};

export default HowToUse;
