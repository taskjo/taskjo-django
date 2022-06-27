/**
 *  Pages Authentication
 */

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');
const formPassword = document.querySelector('#formPassword');

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const phoneNumber = document.querySelector('#username')
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
                message: 'لطفا شماره موبایل خود را وارد کنید'
              },
              stringLength: {
                min: 10,
                max: 10,
                message: 'شماره موبایل باید 10 رقم و بدون صفر اول باشد'
              },
              regexp: {
                regexp: /^[0-9 ]+$/,
                message: 'شماره موبایل باید فقط از نوع عدد باشد'
              }
            }
          },
          name: {
            validators: {
              notEmpty: {
                message: 'لطفا نام خود را وارد کنید'
              },
              stringLength: {
                max: 20,
                message: 'نام باید کمتر از 20 کاراکتر باشد'
              }
            }
          },
          family: {
            validators: {
              notEmpty: {
                message: 'لطفا نام خانوادگی خود را وارد کنید'
              },
              stringLength: {
                max: 40,
                message: 'نام خانوادگی باید کمتر از 40 کاراکتر باشد'
              }
            }
          },
          skill: {
            validators: {
              notEmpty: {
                message: 'لطفا مهارت های خود را انتخاب کنید'
              }
            }
          },
          job: {
            validators: {
              notEmpty: {
                message: 'لطفا موقعیت شغلی خود را انتخاب کنید'
              },
              stringLength: {
                max: 40,
                message: 'موقعیت شغلی باید کمتر از 40 کاراکتر باشد'
              }
            }
          },
          mobile: {
            validators: {
              notEmpty: {
                message: 'لطفا شماره موبایل خود را وارد کنید'
              },
              stringLength: {
                min: 10,
                max: 10,
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
              // stringLength: {
              //   min: 8,
              //   message: 'رمز عبور باید بیش از 8 کاراکتر باشد'
              // }
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
    if (formPassword) {
      const fv = FormValidation.formValidation(formPassword, {
        fields: {
          'old-password': {
            validators: {
              notEmpty: {
                message: 'لطفا رمز عبور فعلی خود را وارد کنید'
              },
              stringLength: {
                min: 8,
                message: 'رمز عبور باید بیش از 8 کاراکتر باشد'
              }
            }
          },
          password: {
            validators: {
              notEmpty: {
                message: 'لطفا رمز عبور جدید خود را وارد کنید'
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
                message: 'لطفا رمز عبور جدید خود را وارد کنید'
              },
              identical: {
                compare: function () {
                  return formPassword.querySelector('[name="password"]').value;
                },
                message: 'رمز عبور جدید و تایید آن یکسان نیستند'
              },
              stringLength: {
                min: 8,
                message: 'رمز عبور باید بیش از 8 کاراکتر باشد'
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
