var jwt = localStorage.getItem("jwt")
if (jwt == null) {
    window.location.href = "./login.html"
}

/* global bootstrap: false */
(function() {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function(tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })

    const disble_group = document.querySelector('.disble_group')

    disble_group.addEventListener('change', function() {

        const groupname = this.dataset.group
        console.log(groupname);
        if (this.checked) {
            console.log('disble');
            document.querySelectorAll('.' + groupname).forEach(function(item) {
                item.disabled = true
            });
        } else {
            document.querySelectorAll('.' + groupname).forEach(function(item) {
                item.disabled = false
            });
        }
    });

})()

function logout() {
    localStorage.removeItem("jwt");
    window.location.href = "./login.html";
}