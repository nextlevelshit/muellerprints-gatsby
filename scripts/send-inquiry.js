$(document).ready(function () {
  $('#inquiry').submit(function (event) {

    let inquiry = $(this).serializeObject();
    let submit = $('#inquiry').find('[type=submit]');
    let submitText = $(submit).html();
    // disabled submit button till form is validated
    $(submit).prop('disabled', true);
    $(submit).html('Ihre Anfrage wird bearbeitet...');
    // prevent submitting form
    event.preventDefault();
    setTimeout(function () {
      // request validation and submit form to API
      $.ajax({
        method: 'POST',
        url: 'https://picasso.uber.space/api/v1/',
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

$.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function () {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};
