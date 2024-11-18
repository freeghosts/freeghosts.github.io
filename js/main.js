// Custom JavaScript for freeghosts.com


// Modal 
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("mod-button");

    btn.addEventListener("click", function() {
    var psmodal = bootstrap.Modal.getInstance(document.getElementById("ps-modal"));
        psmodal.handleUpdate();
    });
});

// Fix form reset issue on mobile 
window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        document.getElementById("contact_form").reset();
    }
});
