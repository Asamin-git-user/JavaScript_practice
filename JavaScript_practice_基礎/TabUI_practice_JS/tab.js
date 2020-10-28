// console.log("TEST")

// ES6形式でコーディング

// 即時関数（グローバル変数の汚染を防ぐ＝外で競合しないように）
(() => {

    // ここに命令を書く
    // DOM要素は、＄を頭に変数を用意する。（一般的）
    const $doc = document;
    const $tab = $doc.getElementById("js-tab");
    // console.log($tab);
    const $nav = $tab.querySelectorAll("[data-nav]")
    //  console.log($nav);
    const $content = $tab.querySelectorAll("[data-content]")
    //  console.log($content);
    const ACTIVE_CLASS = "is-active";
    const navLen = $nav.length;

    // 初期化
    const init = () => {
        $content[0].style.display = "block";
    }
    init();

    // クリック処理
    const handleClick = (e) => {
        // １．ナビゲーション要素がクリックされたら、
        // ここでイベントを殺す（なかったことに）
        e.preventDefault();

        // ２．クリックされた要素をピンポイントで取得する。
        // nav要素の設定されている値＝datasetの値が取得できる。
        // この場合、HTML上のdata属性＝data-navの値を指す。
        const $this = e.target;
        const targetVal = $this.dataset.nav

        // ３．対象外のnav, contentを全てリセットする。
        // 一旦全部のコンテンツを非表示にする。＝「タブその０」の部分
        let index = 0;
        while (index < navLen) {
            $content[index].style.display = "none";
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        // ４．対象のコンテンツをアクティブ化する。
        // タブの色付け（選択されているように設定）
        // コンテンツもクリック対象のタブに併せて表示。
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = "block";
        $nav[targetVal].classList.add(ACTIVE_CLASS);
        // console.log($tab.querySelectorAll("[data-content=" + targetVal + "]"));
    }
    // $nav[0].addEventListener("click", (e) => handleClick(e));

    // nav要素の数分ループ（全nav要素に対して関数を適用）
    // Tab-0, Tab-1, Tab-2 と書かれている部分
    let index = 0;
    while (index < navLen) {
        $nav[index].addEventListener("click", (e) => handleClick(e));
        index++;
    }

})();
