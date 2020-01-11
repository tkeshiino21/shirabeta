//operations とは1つ以上のactionを組み合わせたもの、
//個別のactionは単純なままに必要に応じて複雑なoperationsを作成できる
//selectors とはstateから必要な値を算出する関数のこと

//問題の1つは、内部で保持しているデータ（state）の構造を
//コンポーネント側が知っていなきゃいけないということと、
//もう1つは、フィルタリング処理などのロジック部分をコンポーネント側に持たせてしまうと
//そのロジックを別のところで再利用することが難しくなるということだった。

//selectorの役割はフィルタリング処理？
//selectorを使うとcontainerの記述が減り、
//containerはボイラテンプレートと名前付けだけになりそうな予感。

//const visibilityFilterSelector = state => state.visibilityFilter;
//const todosSelector = state => state.todos;
//最初に上のようなstateのオブジェクトの階層を絞り込むようなコードを書く
//createSelectorの第一引数は配列もしくは上の２つを配列とり、
//第２引数は上の２つが返すのstateの中身(todosなど)である。

//component側にdispatchはもたせない。
//onClinkだけもたせて何も知らないバカなやつにしておく。

//コンポーネント側がStateを受け取ってそれをそのままDispatchにpayloadとして渡すと、
//コンポーネントが知らなくていいことを知ってしまう、要するに賢くなってしまうのでバツ。
//mergePropsを使うことでコンポーネントを還さないで
//duckの中だけで処理を完結させることができる。
