/**
 *  Pages Authentication
 */

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const phoneNumber = document.querySelector('#mobile')
    // Phone Mask
    if (phoneNumber) {
      new Cleave(phoneNumber, {
        phone: true,
        phoneRegionCode: 'US'
      });
    }
    // Form validation for Add new record
    if (formAuthentication) {
      const fv = FormValidation.formValidation(formAuthentication, {
        fields: {
          username: {
            validators: {
              notEmpty: {
                message: 'لطفا نام کاربری را وارد کنید'
              },
              stringLength: {
                min: 6,
                message: 'نام کاربری باید بیش از 6 کاراکتر باشد'
              }
            }
          },
          mobile: {
            validators: {
              notEmpty: {
                message: 'لطفا شماره موبایل خود را وارد کنید'
              },
              stringLength: {
                min: 12,
                max: 12,
                message: 'شماره موبایل باید 10 رقم و بدون صفر اول باشد'
              },
              regexp: {
                regexp: /^[0-9 ]+$/,
                message: 'شماره موبایل باید فقط از نوع عدد باشد'
              }
            }
          },
          email: {
            validators: {
              notEmpty: {
                message: 'لطفا ایمیل خود را وارد کنید'
              },
              emailAddress: {
                message: 'لطفا یک آدرس ایمیل معتبر وارد کنید'
              }
            }
          },
          'email-username': {
            validators: {
              notEmpty: {
                message: 'لطفا ایمیل / نام کاربری را وارد کنید'
              },
              stringLength: {
                min: 6,
                message: 'نام کاربری باید بیش از 6 کاراکتر باشد'
              }
            }
          },
          password: {
            validators: {
              notEmpty: {
                message: 'لطفا رمز عبور خود را وارد کنید'
              },
              stringLength: {
                min: 8,
                message: 'رمز عبور باید بیش از 8 کاراکتر باشد'
              }
            }
          },
          'confirm-password': {
            validators: {
              notEmpty: {
                message: 'لطفا رمز عبور را تایید کنید'
              },
              identical: {
                compare: function () {
                  return formAuthentication.querySelector('[name="password"]').value;
                },
                message: 'رمز عبور و تایید آن یکسان نیستند'
              },
              stringLength: {
                min: 8,
                message: 'رمز عبور باید بیش از 8 کاراکتر باشد'
              }
            }
          },
          terms: {
            validators: {
              notEmpty: {
                message: 'لطفا با قوانین و مقررات موافقت کنید'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.mb-3'
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),

          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus()
        },
        init: instance => {
          instance.on('plugins.message.placed', function (e) {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
            }
          });
        }
      });
    }

    //  Two Steps Verification
    const numeralMask = document.querySelectorAll('.numeral-mask');

    // Verification masking
    if (numeralMask.length) {
      numeralMask.forEach(e => {
        new Cleave(e, {
          numeral: true
        });
      });
    }
  })();
});
