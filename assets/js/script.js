//ドキュメント(HTML)準備が整った段階で実行
$(function () {
    // $('#header-btn').click((){})
    $('#header-btn').on('click', () => {
        $('body').toggleClass('is-openMenu');
    });
});

//Swiperの設定
(function () {
    const kv = new Swiper('#kv', {
        effect: "fade",
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    });

    //Swiper - 商品詳細（サムネイル）の設定
    const thumbs = new Swiper('#thumbs', {
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        // watchSlidesVisibility: true,//廃止(標準設定に入ったため)
    });

    //Swiper - 商品詳細（メイン）の設定
    const main = new Swiper('#main', {
        // サムネイルと連動させる
        thumbs: {
            swiper: thumbs
        },
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        // },

    })
})();

//即時関数　※(関数定義)＋()関数呼び出し

function test() { }//関数定義
test() //関数呼び出し