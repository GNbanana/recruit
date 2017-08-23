/* page7表单 */

jQuery.fn.foxholder = function(number) {
    this.addClass("form-container").attr("id", "example-2");

    //adding labels with placeholders content. Removing placeholders
    this.find('form').find('input,textarea').each(function() {
        var placeholderText, formItemId, inputType;

        //wrapping form elements in their oun <div> tags
        jQuery(this).wrap('<div class="form-item-block"></div>');

        //creating labels
        inputType = jQuery(this).attr('type');

        if (inputType == 'hidden') {

        } else {
            placeholderText = jQuery(this).attr('placeholder');
            formItemId = jQuery(this).attr('id');
            jQuery(this).after('<label for="'+ formItemId +'"><span>'+ placeholderText +'</span></label>');
            jQuery(this).removeAttr('placeholder');
        }
    });

    //adding class on blur
    jQuery('.form-container form').find('input,textarea').blur(function(){
        if (jQuery.trim(jQuery(this).val())!="") {
            jQuery(this).addClass("active");
        } else {
            jQuery(this).removeClass("active");
        }
    });

    //adding line-height for block with textarea
    jQuery('.form-item-block').each(function() {
        if (jQuery(this).has('textarea').length > 0) {
            jQuery(this).css({'line-height': '0px'});
        }
    });



    //example-2 adding top property for label
    jQuery('#example-2 input').focus(function() {
        var labelTop;
        labelTop = parseInt(jQuery(this).css('padding-top'));
        jQuery(this).next('label').css({'top': 0 - (labelTop + 6)});
        console.log(labelTop);
    });

    jQuery('#example-2 input').blur(function() {
        if (jQuery(this).hasClass('active')) {
        } else {
            jQuery(this).next('label').css({'top': 0});
        }
    });


};

jQuery('document').ready(function() {

    jQuery('.form-container-2').foxholder({
        demo: 2,
    });

});





$(function () {
    refresh_slide_content();
    refresh_code_div();
    refresh_footer_text();
    refresh_change_img();
    refresh_flower_img();

    $(window).resize(function () {
        refresh_slide_content();
        refresh_code_div();
        refresh_footer_text();
        refresh_change_img();
        refresh_flower_img();
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

/* 设置 page7 text的位置 */
function refresh_footer_text(){
    var window_width = $(window).width();
    var footer_text = $(".footer_text");
    var footer_text_width = footer_text.outerWidth();

    var footer_text_left = ( 100 - ( footer_text_width / window_width ) * 100 ) / 2;

    footer_text.css("left", footer_text_left+ "%");
}

/* page5图片替换 */
function refresh_change_img(){
    var window_width = $(window).width();
    var slide5_img = $(".slide5_img2");

    if(window_width > 700){
        slide5_img.attr("src","images/slide5_img3.png");
    }
    if(window_width <= 700){
        slide5_img.attr("src","images/slide5_img2.png");
    }
}

/* 设置page6图片大小 */
function refresh_flower_img(){
    var window_width = $(window).width();
    var slide6_img2 = $(".slide6_img2");
    var slide6_img3 = $(".slide6_img3");

    var img2_width = window_width - 80;

    var img3_width = window_width - 80;
    var img3_height = img3_width * 121 / 2000;

    var img2_height;


    if(window_width > 700){
        slide6_img2.attr("src","images/slide6_img2.png");
        img2_height = img2_width * 308 / 1354;
    }
    if(window_width <= 700){
        slide6_img2.attr("src","images/slide6_img4.png");
        img2_height = img2_width * 308 / 652;
    }

    slide6_img2.width(img2_width);
    slide6_img2.height(img2_height);
    slide6_img3.width(img3_width);
    slide6_img3.height(img3_height);
}