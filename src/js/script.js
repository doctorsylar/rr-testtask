'use strict';
import 'owl.carousel2/dist/assets/owl.carousel.css';
import $ from 'jquery';
import 'owl.carousel2/dist/owl.carousel.min';
$(function () {
    // background slider
    let bgCarousel = $('.bg-slider');
    bgCarousel.owlCarousel({
        items: 1,
        mouseDrag: false,

    });
    // play/pause background slider
    $('.play-button').click(function (event) {
        let video;
        if (event.target.classList[0] === 'play-button') {
            $(event.target.children[0]).toggleClass('playing');
            video = event.target.parentElement.parentElement.children[0];
        }
        else {
            $(event.target).toggleClass('playing');
            video = event.target.parentElement.parentElement.parentElement.children[0];
        }
        if (video.paused)
            video.play();
        else
            video.pause();
    });
    // open/close menu
    $('.menu-toggler').click(function () {
        $('.outer-container').toggleClass('menu-open');
    });
    $('.menu-closer').click(function () {
        if ($('.outer-container').hasClass('menu-open')) {
            $('.outer-container').removeClass('menu-open');
        }
    });
    // registration popup
    $('.register').click(function () {
        $('.popup-registration').fadeIn(200);
    });
    $('.popup-closer').click(function () {
        $('.popup-registration').fadeOut(200);
    });
    $('.popup-registration').click(function (event) {
        if ($(event.target).hasClass('popup-registration')) {
            $('.popup-registration').fadeOut(200);
        }
    });
    $('.form-switch').click(function (event) {
        let target = $(event.target);
        if (!target.hasClass('active')) {
            $('.form-switch.active').removeClass('active');
            target.addClass('active');
        }
    });
});