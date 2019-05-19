'use strict';
import 'owl.carousel2/dist/assets/owl.carousel.css';
import $ from 'jquery';
import 'owl.carousel2/dist/owl.carousel.min';
$(function () {
    let bgCarousel = $('.bg-slider');
    bgCarousel.owlCarousel({
        items: 1,
        mouseDrag: false,

    });
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
});