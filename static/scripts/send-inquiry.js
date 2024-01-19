$(document).ready(function () {
  $('#inquiry').submit(function (event) {
		// prevent submitting form
		event.preventDefault();

		let inquiry = $(this).serialize();
    let submit = $('#inquiry').find('[type=submit]');
    let submitText = $(submit).html();
    // disabled submit button till form is validated
    $(submit).prop('disabled', true);
    $(submit).html('Ihre Anfrage wird bearbeitet...');
    setTimeout(function () {
      // request validation and submit form to API
      $.ajax({
        method: 'POST',
        url: 'https://muellerprints.de/api/mail',
        dataType: 'json',
        crossDomain: true,
        data: inquiry,
        success: function (res) {
          $('#inquiry').hide();
          $('#success').show();
        },
        error: function (res) {
          let errors = res.responseJSON;
          // reset errors
          $('.form-group').removeClass('has-feedback has-error')
          $('.help-block').hide();
          // bind errors to specific input field
          $.each(errors, function (i, msg) {
            $('[name=' + i + ']').next('.help-block').html(msg).show();
            $('[name=' + i + ']').closest('.form-group').addClass('has-feedback has-error');
          });
          // enable submit button
          $(submit).prop('disabled', false);
          $(submit).html(submitText);
        }
      })
    }, 800);
  });
});
