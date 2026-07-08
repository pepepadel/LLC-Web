// Padel4Rent Consulting — shared landing page behavior
// Vanilla JS / jQuery-compatible, safe to embed in Odoo Website Builder snippets
(function () {
  "use strict";

  function initContactForm() {
    var form = document.getElementById("lp_contact_form");
    if (!form) return;

    var successEl = document.getElementById("lp_form_success");
    var errorEl = document.getElementById("lp_form_error");

    form.addEventListener("submit", function (evt) {
      var requiredFields = form.querySelectorAll("[required]");
      var valid = true;

      requiredFields.forEach(function (field) {
        if (!field.value || !field.value.trim()) {
          valid = false;
          field.classList.add("is-invalid");
        } else {
          field.classList.remove("is-invalid");
        }
      });

      var emailField = form.querySelector('[name="email_from"]');
      if (emailField && emailField.value) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
          valid = false;
          emailField.classList.add("is-invalid");
        }
      }

      if (!valid) {
        evt.preventDefault();
        if (errorEl) errorEl.style.display = "block";
        if (successEl) successEl.style.display = "none";
      }
      // If valid and the form has a real "action" (e.g. Odoo mail form controller),
      // let it submit normally. No preventDefault here.
    });
  }

  function initNavToggle() {
    var toggle = document.querySelector(".lp-nav-toggle");
    var nav = document.querySelector(".lp-nav-collapse");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      nav.classList.toggle("lp-nav-open");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initContactForm();
    initNavToggle();
  });
})();
