# props の渡し方に関するメモ

## 種類について

### props を使う方法

`<Foo props.name="hoge" props.email="hoge@com" props.password:"hogehoge" />`
`<Foo props={name: "hoge", email:"hoge@com", password: "hogehoge"} />`
`<Foo props={userData} />`
`<Foo props={...userData} />`

1.即バラす
`<Foo props.name="hoge" props.email="hoge@com" props.password:"hogehoge" />`
`<Foo props={name: "hoge", email:"hoge@com", password: "hogehoge"} />`
`const Foo = ({name, email, password}) =>`

2.一旦 props として即まとめてバラす
`<Foo props.name="hoge" props.email="hoge@com" props.password:"hogehoge" />`
`<Foo props={name: "hoge", email:"hoge@com", password: "hogehoge"} />`
`<Foo props={userData} />`
`const Foo = (...props) =>`

3.一旦 props として即個別にバラす
`<Foo props.name="hoge" props.email="hoge@com" props.password:"hogehoge" />`
`<Foo props={name: "hoge", email:"hoge@com", password: "hogehoge"} />`
`<Foo props={userData} />`
`const Foo = (props) =>`
`const name = props.name`
`const email = props.email`
`const password = props.passord`

4.バラしながら使う
`<Foo props.name="hoge" props.email="hoge@com" props.password:"hogehoge" />`
`<Foo props={name: "hoge", email:"hoge@com", password: "hogehoge"} />`
`<Foo props={userData} />`
`const Foo = (props) =>`
（使う箇所で props.name などとする）

5.渡す側でバラす
`<Foo props={...userData} />`

### props を使わない方法

`<Foo name="hoge" email="password" password="hogehoge" />`
`<Foo userData={name: "hoge", email:"hoge@com", password: "hogehoge"} />`
`<Foo userData={userData} />`
`<Foo userData={...userData} />`

1.バラで渡す
`<Foo name="hoge" email="password" password="hogehoge" />`
`<Foo userData={...userData} />`
`const Foo = ({name, email, password}) =>`
rest も使える
`const Foo = ({name, ...rest}) =>`

2.まとめて渡し、即まとめてバラす
`<Foo userData={name: "hoge", email:"hoge@com", password: "hogehoge"} />`
`<Foo userData={userData} />`
`<Foo props={userData} />`
`const Foo = ({...userData}) =>`

★3.まとめて渡し、即個別にバラす
`<Foo userData={userData} />`
`const Foo = ({userData}) =>`
`const name = userData.name`
`const email = userData.email`
`const password = userData.passord`
rest も使える
`const Foo = ({userData.name, ...rest}) =>`

★4.バラしながら使う
`<Foo userData={userData} />`
`const Foo = ({userData}) =>`
（使う箇所で userData.name などとする）
rest も使える
`const Foo = ({userData.name, ...rest}) =>`

結論:props を使わない方法の 3 と 4 を適宜使い分ける。
使うか箇所が飛び飛びになる場合、即バラしたほうがいい。
使う箇所がまとまっているようであれば、即バラさなくてもいい。
要するに汚いコードの中では即バラしたほうが見やすいということなので、
なるべく即バラさなくても何が props として受け取ったもののすべてかが、
ざっと見てわかるようなコードを書くのが理想的だと思う。

追記:propTypes を使うなら即バラさなくても props として受け取ったもののすべてが
一覧として見られるのでぱっと見でわかるかも。
