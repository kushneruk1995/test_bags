function PopUpShow(id){
	var elem = id;
	console.log(elem);
    $(id).show();
}
function PopUpHide(id){
    $(id).hide();
}

	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});



// function slick() {
  
// }

// $(window).resize(function() {
//   $('.products__slider').unslick();
// });

// $(window).on('orientationchange', function() {
//   $('.products__slider').slick('resize');
// });


function slick() {
  $('.products__slider').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.bags__next',
    speed: 100,
    swipe: false,
    prevArrow: '.bags__prev',
    responsive: [
      {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      }
      },
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
      }
    ]
  });
  $('.products .slick-active.slick-center').prev().css('left', '14px');
  $('.products .slick-active.slick-center').next().css('right', '32px');
}

function formValidate(form ,id) {
	var id;
	var form;

	 $(form).validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      phone: "required"
    },
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      phone: "Please enter a phone"
    },
    submitHandler: function(form, id) {
      form.submit();
      PopUpHide(id);
    }
  });
}

function showProducts(el) {
      var data = $(el).data('color');
      var parents = $(el).parent().parent().find('.product__circle img');
      $(parents).css('display', 'none');
      $.each( parents, function(i) {
        var dataImg = $(parents[i]).data('color');
        if (dataImg == data) {
          $(parents[i]).css('display', 'block');
        } else {
          $(parents[i]).css('display', 'none');
        }
      });
}


function changeHeight() {
  $('.earn__item-content').css('min-height', 'auto');
  var widthWindow = $(window).width();
  if (widthWindow > 767) {
    var img =$('.earn__img-wrapper');
    $.each( img, function(i) {
        var imgHeight = $(img[i]).height();
        var block = $(img[i]).parent().find('.earn__item-content');
        $(block).css('min-height', imgHeight);
    });
  }
  
}

$(window).resize(function() {
  changeHeight();
    $(".products__slider").slick('destroy');
    $(".products__slider").slick('init');
    $('.products .slick-active.slick-center').prev().css('left', '14px');
    $('.products .slick-active.slick-center').next().css('right', '32px');
});

changeHeight();
slick();