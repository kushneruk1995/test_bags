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


$('.products__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.bags__next',
    speed: 100,
    swipe: false,
    prevArrow: '.bags__prev',
    responsive: [
      {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
      },
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
      }
    ]
  });



function formValidate(form ,id) {
	var id;
	var form;

	 $(form).validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      phone: "required"
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      phone: "Please enter a phone"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form, id) {
      form.submit();
      PopUpHide(id);
    }
  });
}

$(document).ready(function() {
  $('.products .slick-current').next().addClass('slick-center');
  $('.product__next, .product__prev').click(function(){
    $('.products .slick-current').next().addClass('slick-center');
  });
})

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