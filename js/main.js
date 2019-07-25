$(function(){
    var img_num = 1; // 이미지 번호
    var spead =7000;

    // 초기화
    $('.slider div').hide();
    $('.slider div').eq(0).show();

    // 재생
    setInterval(function(){
        if(img_num >= 2){img_num = 0;}

        $('.slider div').fadeOut();
        $('.slider div').eq(img_num).fadeIn();
        img_num++;
    },spead);
});