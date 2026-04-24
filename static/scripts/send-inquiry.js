// Use delegated submit handler so it works with Gatsby client-side navigation
$(document).on('submit', '#inquiry', function (event) {
  // prevent submitting form
  event.preventDefault();

  let $form = $(this);
  let inquiry = $form.serialize();
  let submit = $form.find('[type=submit]');
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
        $form.hide();
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
