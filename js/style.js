
$(function () {
    refresh_slide_content();
    refresh_code_div();

    $(window).resize(function () {
        refresh_slide_content();
        refresh_code_div();
    });
});


/* 设置虚线边框大小 */
function refresh_slide_content(){
    var slide_content = $(".slide_content");

    slide_content.height($(window).height() - 80);
    slide_content.width($(window).width() - 80);
    slide_content.css({"margin-left": "39px", "margin-top": "39px" });

}

/* 设置 page3 代码百分比内容的位置 */
function refresh_code_div(){
    var window_width = $(window).width();
    var code_ul_width = $(".code_ul").outerWidth();
    var code_div = $(".code_div");
    var code_div_width;

    if(window_width > 500){
        code_div_width = ( code_ul_width * 2 / window_width ) * 100;
    }
    if(window_width <= 500){
        code_div_width = ( code_ul_width  / window_width ) * 100 +5;
    }

    var code_div_left = ( 100 - code_div_width ) / 2;

    code_div.css("width", code_div_width + "%");
    code_div.css("left", code_div_left + "%");
}

