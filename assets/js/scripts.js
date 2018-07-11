/*!
 * joglotech-hub
 * Joglotech Hub
 * http://joglotech.com/
 * @author Joglotech
 * @version 1.0.0
 * Copyright 2018. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  // Login image
  function loginImage() {
    if (jQuery(".login-img").length) {
      jQuery(".login-img").backstretch("//images.pexels.com/photos/450271/pexels-photo-450271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    }
  }

  // Burger button icon
  function burgerButton(){
    jQuery('.burger').on('click', function () {
      jQuery(this).toggleClass('active');
      jQuery('html').toggleClass('overlay-menu');
      jQuery('body').toggleClass('overlay-menu');
      jQuery('.overlay').toggleClass('active');
      jQuery('.sidebar').toggleClass('active');
    });
  }

  // JQuery niceScroll
  function customScroll(){
    if (jQuery(".custom-scroll").length) {
      jQuery(".custom-scroll").niceScroll({
        cursoropacitymax: 0.2
      });
    }
  }

  jQuery(function () {
    burgerButton();
    loginImage();
    customScroll();
  });

})(jQuery, window, document);
