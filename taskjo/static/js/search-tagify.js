/**
 * Tagify
 */

 'use strict';

 (function () {
   // Skills List suggestion
   //------------------------------------------------------
   const skillsList = JSON.parse(skills.replace(/&quot;/g, '"'));
   const TagifySkillsListEl = document.querySelector('#skill');

 
   function tagTemplate(tagData) {
    return `
    <tag title="${tagData.name}"
      contenteditable='false'
      spellcheck='false'
      tabIndex="-1"
      class="${this.settings.classNames.tag} ${tagData.class ? tagData.class : ''}"
      ${this.getAttributes(tagData)}
    >
      <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
      <div>
        <span class='tagify__tag-text'>${tagData.name}</span>
      </div>
    </tag>
  `;
  }

  function suggestionItemTemplate(tagData) {
    return `
    <div ${this.getAttributes(tagData)}
      class='tagify__dropdown__item align-items-center ${tagData.class ? tagData.class : ''}'
      tabindex="0"
      role="option"
    >
      <strong>${tagData.name}</strong>
    </div>
  `;
  }

  // initialize Tagify on the above input node reference
  let TagifySkillsList = new Tagify(TagifySkillsListEl, {
    tagTextProp: 'name', 
    enforceWhitelist: true,
    maxTags: 10,
    skipInvalid: true,
    dropdown: {
      closeOnSelect: false,
      enabled: 0,
      classname: 'users-list',
      searchKeys: ['name','id']
    },
    templates: {
      tag: tagTemplate,
      dropdownItem: suggestionItemTemplate
    },
    whitelist: skillsList
  });

  TagifySkillsList.on('dropdown:show dropdown:updated', onDropdownShow);
  TagifySkillsList.on('dropdown:select', onSelectSuggestion);

  let addAllSuggestionsEl;

  function onDropdownShow(e) {
    let dropdownContentEl = e.detail.tagify.DOM.dropdown.content;
  }
  function onSelectSuggestion(e) {
    if (e.detail.elm == addAllSuggestionsEl) TagifySkillsList.dropdown.selectAll.call(TagifySkillsList);
  }


  // INIT search parameter
  const endpoint = '/advance_search/'
  const delay_by_in_ms = 700
  let scheduled_function = false
  
  const categories = document.getElementById('category'); // get selected
  const website = document.getElementById('website');
  const search_category = $('#category'); // onchange
  const search_website = $('#website');
  const user_input = $("#user-input")
  const sort_by = $('#sort_by')
  const page = $('#page');

  TagifySkillsListEl.addEventListener('change', onTagifyChange)
  // pageEl.addEventListener("click", ChnagePage);

  
  // const search_icon = $('#search-icon')

  var init = function(){

    var skills_selected = ''
    var category_selected = [...categories.options]
                      .filter(option => option.selected)
                      .map(option => option.value);

    var website_selected = [...website.options]
                      .filter(option => option.selected)
                      .map(option => option.value);

    var data = TagifySkillsListEl.value  // tagify
    if (data.length != 0){
      data = JSON.parse(data)
      skills_selected= data.map(element => element.id);
    }
    const request_parameters = {
        q: user_input.val(), // value of user_input: the HTML element with ID user-input
        skills : skills_selected,
        websites:website_selected,
        categories:category_selected,
        sort_by : sort_by.val(),
        page : page.val()
    }
    return request_parameters

  }

  let ajax_call = function (endpoint, request_parameters) {
      const projects_div = $('#replaceable-content')
      $.getJSON(endpoint,request_parameters)
          .done(response => {
                projects_div.fadeTo('slow', 0).promise().then(() => {
                  document.getElementById('replaceable-content').innerHTML = response['html_from_view']
                  // fade-in the div with new contents
                  projects_div.fadeTo('slow', 1)
              })
          })
          .fail(response => {
              console.log("error")
              console.log(response)
          })
  }

  user_input.on('keyup', function () {
      var request_parameters= init()
      // if scheduled_function is NOT false, cancel the execution of the function
      if (scheduled_function) {
          clearTimeout(scheduled_function)
      }
      // setTimeout returns the ID of the function to be executed
      scheduled_function = setTimeout(ajax_call, delay_by_in_ms, endpoint, request_parameters)
  })

   // On Change
  search_category.change(function() {
    var request_parameters= init()
    ajax_call(endpoint, request_parameters)
  });
  search_website.change(function() {
    var request_parameters= init()
    ajax_call(endpoint, request_parameters)
  });
  sort_by.change(function() {
    var request_parameters= init()
    ajax_call(endpoint, request_parameters)
  });
    $(document).on('keyup mouseup', '#page', function() {                                                                                                                  
      var request_parameters= init()
      ajax_call(endpoint, request_parameters)
    });

  
  function onTagifyChange(e){
    var request_parameters= init()
      // call these methods on load
    ajax_call(endpoint, request_parameters)

  }


   function onInvalidTag(e) {
     console.log('invalid', e.detail);
     
   }
 
  
 
 })();
 