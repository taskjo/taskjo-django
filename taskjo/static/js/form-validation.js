'use strict';

(function () {
  // Init custom option check
  window.Helpers.initCustomOptionCheck();

  // Bootstrap validation example
  //------------------------------------------------------------------------------------------
  // const flatPickrEL = $('.flatpickr-validation');
  const flatPickrList = [].slice.call(document.querySelectorAll('.flatpickr-validation'));
  // Flat pickr
  if (flatPickrList) {
    flatPickrList.forEach(flatPickr => {
      flatPickr.flatpickr({
        allowInput: true,
        monthSelectorType: 'static',
        locale: 'fa',
        altInput: true,
        altFormat: 'Y/m/d',
        disableMobile: true
      });
    });
  }

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const bsValidationForms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(bsValidationForms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // Submit your form
          alert('ثبت شد!!!');
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
/**
 * Form Validation (https://formvalidation.io/guide/examples)
 * ? Primary form validation plugin for this template
 * ? In this example we've try to covered as many form inputs as we can.
 * ? Though If we've miss any 3rd party libraries, then refer: https://formvalidation.io/guide/examples/integrating-with-3rd-party-libraries
 */
//------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const formValidationExamples = document.getElementById('formValidationExamples'),
      formValidationSelect2Ele = jQuery(formValidationExamples.querySelector('[name="formValidationSelect2"]')),
      formValidationTechEle = jQuery(formValidationExamples.querySelector('[name="formValidationTech"]')),
      formValidationLangEle = formValidationExamples.querySelector('[name="formValidationLang"]'),
      formValidationHobbiesEle = jQuery(formValidationExamples.querySelector('.selectpicker')),
      tech = [
        'ReactJS',
        'Angular',
        'VueJS',
        'Html',
        'Css',
        'Sass',
        'Pug',
        'Gulp',
        'Php',
        'Laravel',
        'Python',
        'Bootstrap',
        'Material Design',
        'NodeJS'
      ];

    const fv = FormValidation.formValidation(formValidationExamples, {
      fields: {
        formValidationName: {
          validators: {
            notEmpty: {
              message: 'لطفا نام خود را وارد کنید'
            },
            stringLength: {
              min: 6,
              max: 30,
              message: 'نام وارد شده باید بیشتر از 6 و کمتر از 30 حرف باشد'
            },
            regexp: {
              regexp: /^[a-zA-Z0-9 ]+$/,
              message: 'نام فقط می‌تواند شامل حروف الفبا، عدد و فاصله باشد'
            }
          }
        },
        formValidationMobile: {
          validators: {
            notEmpty: {
              message: 'لطفا شماره موبایل خود را وارد کنید'
            },
            stringLength: {
              min: 11,
              max: 11,
              message: 'شماره موبایل وارد شده باید 11 رقم باشد'
            },
            regexp: {
              regexp: /^[0-9 ]+$/,
              message: 'شماره موبایل باید فقط از نوع عدد باشد'
            }
          }
        },
        formValidationEmail: {
          validators: {
            notEmpty: {
              message: 'لطفا ایمیل خود را وارد کنید'
            },
            emailAddress: {
              message: 'مقدار وارد شده یک آدرس ایمیل معتبر نیست'
            }
          }
        },
        formValidationPass: {
          validators: {
            notEmpty: {
              message: 'لطفا رمز عبور خود را وارد کنید'
            }
          }
        },
        formValidationConfirmPass: {
          validators: {
            notEmpty: {
              message: 'لطفا رمز عبور خود را تایید کنید'
            },
            identical: {
              compare: function () {
                return formValidationExamples.querySelector('[name="formValidationPass"]').value;
              },
              message: 'رمز عبور و تایید آن یکسان نیستند'
            }
          }
        },
        formValidationFile: {
          validators: {
            notEmpty: {
              message: 'لطفا فایل را انتخاب کنید'
            }
          }
        },
        formValidationDob: {
          validators: {
            notEmpty: {
              message: 'لطفا تاریخ تولد خود را انتخاب کنید'
            },
            date: {
              format: 'YYYY/MM/DD',
              message: 'مقدار وارد شده یک تاریخ معتبر نیست'
            }
          }
        },
        formValidationSelect2: {
          validators: {
            notEmpty: {
              message: 'لطفا کشور خود را انتخاب کنید'
            }
          }
        },
        formValidationLang: {
          validators: {
            notEmpty: {
              message: 'لطفا زبان خود را اضافه کنید'
            }
          }
        },
        formValidationTech: {
          validators: {
            notEmpty: {
              message: 'لطفا تکنولوژی را انتخاب کنید'
            }
          }
        },
        formValidationHobbies: {
          validators: {
            notEmpty: {
              message: 'لطفا سرگرمی‌های خود را انتخاب کنید'
            }
          }
        },
        formValidationBio: {
          validators: {
            notEmpty: {
              message: 'لطفا بیوگرافی خود را وارد کنید'
            },
            stringLength: {
              min: 100,
              max: 500,
              message: 'بیوگرافی باید شامل بیشتر از 100 و کمتر از 500 حرف باشد.'
            }
          }
        },
        formValidationGender: {
          validators: {
            notEmpty: {
              message: 'لطفا جنسیت خود را انتخاب کنید'
            }
          }
        },
        formValidationPlan: {
          validators: {
            notEmpty: {
              message: 'لطفا پلن مورد نظر خود را انتخاب کنید'
            }
          }
        },
        formValidationSwitch: {
          validators: {
            notEmpty: {
              message: 'لطفا اولویت خود را انتخاب کنید'
            }
          }
        },
        formValidationCheckbox: {
          validators: {
            notEmpty: {
              message: 'لطفا قوانین و مقررات ما را تایید کنید'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: function (field, ele) {
            // field is the field name & ele is the field element
            switch (field) {
              case 'formValidationName':
              case 'formValidationMobile':
              case 'formValidationEmail':
              case 'formValidationPass':
              case 'formValidationConfirmPass':
              case 'formValidationFile':
              case 'formValidationDob':
              case 'formValidationSelect2':
              case 'formValidationLang':
              case 'formValidationTech':
              case 'formValidationHobbies':
              case 'formValidationBio':
              case 'formValidationGender':
                return '.col-12';
              case 'formValidationPlan':
                return '.col-xl-3';
              case 'formValidationSwitch':
              case 'formValidationCheckbox':
                return '.col-12';
              default:
                return '.row';
            }
          }
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        // Submit the form when all fields are valid
        defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
        autoFocus: new FormValidation.plugins.AutoFocus()
      },
      init: instance => {
        instance.on('plugins.message.placed', function (e) {
          //* Move the error message out of the `input-group` element
          if (e.element.parentElement.classList.contains('input-group')) {
            // `e.field`: The field name
            // `e.messageElement`: The message element
            // `e.element`: The field element
            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
          }
          //* Move the error message out of the `row` element for custom-options
          if (e.element.parentElement.parentElement.classList.contains('custom-option')) {
            e.element.closest('.row').insertAdjacentElement('afterend', e.messageElement);
          }
        });
      }
    });

    //? Revalidation third-party libs inputs on change trigger

    // Flatpickr
    flatpickr(formValidationExamples.querySelector('[name="formValidationDob"]'), {
      enableTime: false,
      // See https://flatpickr.js.org/formatting/
      dateFormat: 'Y/m/d',
      locale: 'fa',
      // After selecting a date, we need to revalidate the field
      onChange: function () {
        fv.revalidateField('formValidationDob');
      },
      disableMobile: true
    });

    // Select2 (Country)
    if (formValidationSelect2Ele.length) {
      formValidationSelect2Ele.wrap('<div class="position-relative"></div>');
      formValidationSelect2Ele
        .select2({
          placeholder: 'انتخاب کشور',
          dropdownParent: formValidationSelect2Ele.parent()
        })
        .on('change.select2', function () {
          // Revalidate the color field when an option is chosen
          fv.revalidateField('formValidationSelect2');
        });
    }

    // Typeahead

    // String Matcher function for typeahead
    const substringMatcher = function (strs) {
      return function findMatches(q, cb) {
        var matches, substrRegex;
        matches = [];
        substrRegex = new RegExp(q, 'i');
        $.each(strs, function (i, str) {
          if (substrRegex.test(str)) {
            matches.push(str);
          }
        });

        cb(matches);
      };
    };

    // Check if rtl
    if (isRtl) {
      const typeaheadList = [].slice.call(document.querySelectorAll('.typeahead'));

      // Flat pickr
      if (typeaheadList) {
        typeaheadList.forEach(typeahead => {
          typeahead.setAttribute('dir', 'rtl');
        });
      }
    }
    formValidationTechEle.typeahead(
      {
        hint: !isRtl,
        highlight: true,
        minLength: 1
      },
      {
        name: 'tech',
        source: substringMatcher(tech)
      }
    );

    // Tagify
    let formValidationLangTagify = new Tagify(formValidationLangEle);
    formValidationLangEle.addEventListener('change', onChange);
    function onChange() {
      fv.revalidateField('formValidationLang');
    }

    //Bootstrap select
    formValidationHobbiesEle.on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
      fv.revalidateField('formValidationHobbies');
    });
  })();
});
