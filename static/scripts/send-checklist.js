$(document).ready(function () {
  $('#checklist').submit(function (event) {
		// prevent submitting form
		event.preventDefault();

    let checklist = $(this).serialize();
    let submit = $('#checklist').find('[type=submit]');
    let submitText = $(submit).html();
    // disabled submit button till form is validated
    $(submit).prop('disabled', true);
    $(submit).html('Ihre Bestellung wird bearbeitet...');
    setTimeout(function () {
      // request validation and submit form to API
      $.ajax({
        method: 'POST',
        url: 'https://muellerprints.de/api/checklist',
        dataType: 'json',
        crossDomain: true,
        data: checklist,
        success: function () {
          $('#checklist').hide();
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
