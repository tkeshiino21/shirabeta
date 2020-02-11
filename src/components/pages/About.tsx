import React from 'react';
import LayoutCommon from 'components/organisms/LayoutCommon';
import { Text, theme, Spacing } from 'components/atoms';

const About = () => {
  return (
    <LayoutCommon>
      <div>
        <section>
          <div>
            <Text className="subtitle1" as="h2" color={theme.primary}>
              チームのための図書管理アプリ
            </Text>
          </div>
          <Text className="h2" as="h1">
            Livrio
          </Text>

          <section>
            <Text className="body1" as="h6">
              プログラミングの学習は、ホームページの情報だけでは難しいことがあります。
              <br />
              ときには本を通して、体系的な知識を得ることもとても重要です。
              <br />
              では、どんな本を読めばいいのか。
              <br />
              他のチームメイトからの推薦は、それを知るための貴重な手がかかりです。
              <br />
              自分がいいと思った本は他の人に薦めていき、薦められた本はちょっと一度、手にとってみましょう。
              <br />
              きっといいつながりとエンジニアとしての成長が生まれるかもしれません。
            </Text>
          </section>
        </section>
        <Spacing mTop={theme.medium} />
        <section>
          <Text className="h5" as="h4">
            仕様
          </Text>
          <div>
            <Text
              as="a"
              color={theme.secondary}
              href="https://github.com/t-keshi-inoue/shirabeta"
            >
              GitHub
            </Text>
            <div>
              <Text className="body1" as="p">
                GoogleBooksAPI　⇢　firestoreに登録
              </Text>
            </div>
            <Spacing mTop={theme.small} />
            <Text className="body1" as="p">
              フレームワーク: React
              <br />
              状態管理: Redux
              <br />
              データベース: Firebase Cloudstore
              <br />
              認証: Firebase Authentication
              <br />
              スタイリングライブラリ: styled-components
            </Text>
          </div>
        </section>
      </div>
    </LayoutCommon>
  );
};

export default About;
