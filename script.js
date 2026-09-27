document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // NAVBAR AUTO CLOSE ON MOBILE
    // ================================

    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {
                const bootstrapCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bootstrapCollapse) {
                    bootstrapCollapse.hide();
                }
            }

        });

    });


    // ================================
    // CURRENT YEAR IN FOOTER
    // ================================

    const footerText = document.querySelector(".footer p");

    if (footerText) {
        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            `© ${currentYear} Data Intelligence. All Rights Reserved.`;
    }


    // ================================
    // BUTTON CLICK MESSAGE
    // ================================

    const contactButton =
        document.querySelector(".contact-section .btn");

    if (contactButton) {

        contactButton.addEventListener("click", function () {

            console.log(
                "Thank you for contacting Data Intelligence!"
            );

        });

    }


    // ================================
    // SIMPLE SCROLL EFFECT
    // ================================

    window.addEventListener("scroll", function () {

        const navbar = document.querySelector(".navbar");

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 5px 20px rgba(0, 0, 0, 0.25)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

});