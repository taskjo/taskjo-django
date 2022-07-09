/**
 *  Pages Authentication
 */

 'use strict';


function UserProjects(value,action){
    const endpoint = '/user_projects/'
    const request_parameters = {
        proj_id: value,
        action: action,
    }
    $.getJSON(endpoint,request_parameters)
        .done(response => {
            var modal = document.getElementById('status-modal');
            modal.style.display = "block";
            // setTimeout(() => {
            // modal.style.display = 'none';

            // }, 1000);
        })
        .fail(response => {
            console.log("error")
            console.log(response)
        })
    }
const btn = document.getElementById('btn-close');
btn.addEventListener('click', () => {
    var modal = document.getElementById('status-modal');
    modal.style.display = 'none';
    window.location.reload(true);
});
