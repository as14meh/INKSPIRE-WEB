$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        $('.fa-bars').toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
        if($(window).scrollTop()>30){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');
        }
    });
});
$(function(){
    "use strict";
    
var list=document.getElementsByClassName('data-bg-image');
for(var i=0;i<list.length;i++){
    var bgimg=list[i].getAttribute('data-bg-image');
    list[i].style.backgroundImage="url('"+bgimg+"')";
}
});