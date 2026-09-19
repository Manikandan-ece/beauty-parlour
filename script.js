// =====================================
// PRIYA'S BEAUTY PARLOUR
// Website JavaScript
// =====================================


// Wait until the page is completely loaded
document.addEventListener("DOMContentLoaded", function () {

    // ---------------------------------
    // Scroll Reveal Animation
    // ---------------------------------

    const sections = document.querySelectorAll("section");

    const revealSections = () => {

        sections.forEach((section) => {

            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }

        });

    };

    window.addEventListener("scroll", revealSections);

    revealSections();


    // ---------------------------------
    // Active Navigation
    // ---------------------------------

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach((link) => {

        link.addEventListener("click", function () {

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    // ---------------------------------
    // WhatsApp Booking
    // ---------------------------------

    const whatsappButtons =
        document.querySelectorAll(".whatsapp-btn");

    whatsappButtons.forEach((button) => {

        button.addEventListener("click", function () {

            console.log(
                "WhatsApp appointment button clicked."
            );

        });

    });


    // ---------------------------------
    // Current Year in Footer
    // ---------------------------------

    const copyright =
        document.querySelector(".copyright");

    if (copyright) {

        const currentYear =
            new Date().getFullYear();

        copyright.innerHTML =
            `© ${currentYear} PRIYA'S BEAUTY PARLOUR. All Rights Reserved.`;

    }

});