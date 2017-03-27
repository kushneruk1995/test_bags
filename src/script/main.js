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

// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"

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

// function checkSize(form, id) {
// 	var id;
// 	var form;
// 	if ($(window).width() <= '767') {
// 		PopUpShow(id);
// 	} else {
// 		formValidate(form ,id);
// 	}
// }