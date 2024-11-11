//ドキュメント(HTML)準備が整った段階で実行
$(function(){
    // $('#header-btn').click((){})
    $('#header-btn').on('click',() => {
        $('body').toggleClass('is-openMenu');
    });
});
