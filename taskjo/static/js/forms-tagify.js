/**
 * Tagify
 */

'use strict';

(function () {
  // Skills List suggestion
  //------------------------------------------------------
  const skillsList = JSON.parse(skills.replace(/&quot;/g, '"'));
  const selected_skills_list = JSON.parse(selected_skills.replace(/&quot;/g, '"'));
  const TagifySkillsListEl = document.querySelector('#TagifySkillsList');


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
    tagTextProp: 'name', // very important since a custom template is used with this property as text. allows typing a "value" or a "name" to match input with whitelist
    enforceWhitelist: true,
    skipInvalid: true, // do not remporarily add invalid tags
    dropdown: {
      closeOnSelect: false,
      enabled: 0,
      classname: 'users-list',
      searchKeys: ['name','id'] // very important to set by which keys to search for suggesttions when typing
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

    // if (TagifySkillsList.suggestedListItems.length > 1) {
    //   addAllSuggestionsEl = getAddAllSuggestionsEl();

    //   // insert "addAllSuggestionsEl" as the first element in the suggestions list
    //   dropdownContentEl.insertBefore(addAllSuggestionsEl, dropdownContentEl.firstChild);
    // }
  }

  function onSelectSuggestion(e) {
    if (e.detail.elm == addAllSuggestionsEl) TagifySkillsList.dropdown.selectAll.call(TagifySkillsList);
  }

  // create an "add all" custom suggestion element every time the dropdown changes
  function getAddAllSuggestionsEl() {
    // suggestions items should be based on "dropdownItem" template
    return TagifySkillsList.parseTemplate('dropdownItem', [
      {
        class: 'addAll',
        name: 'افزودن همه',
        email:
          TagifySkillsList.settings.whitelist.reduce(function (remainingSuggestions, item) {
            return TagifySkillsList.isTagDuplicate(item.id) ? remainingSuggestions : remainingSuggestions + 1;
          }, 0) + ' کاربر'
      }
    ]);
  }

  

  TagifySkillsList.addTags(selected_skills_list);

  
  
  // TagifySkillsListEl.addEventListener('change', onChange)
  
  
  // function onChange(e){
  //   var data = e.target.value
  //   if (data.length != 0){
  //     data = JSON.parse(data)
  //     const newArray= data.map(element => element.id);
  //     // TagifySkillsList.selectAll()
  //   }

  // }

  $("#formAuthentication").submit( function(eventObj) {
    var data = TagifySkillsListEl.target.value
    if (data.length != 0){
      data = JSON.parse(data)
      const newArray= data.map(element => element.id);
    }
    $("<input />").attr("type", "hidden")
        .attr("name", "skills")
        .attr("value", newArray )
        .appendTo("#formAuthentication");
    return true;
  });



  function onInvalidTag(e) {
    console.log('invalid', e.detail);
    
  }

 

})();
