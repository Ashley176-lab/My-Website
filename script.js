document.addEventListener("DOMContentLoaded", function () {
  /* ================= PROJECTS ================= */

  const projectBoxes = document.querySelectorAll(".project-box");

  projectBoxes.forEach(function (box) {
    box.addEventListener("click", function (event) {
      event.preventDefault();

      const projectId = box.getAttribute("href");
      const project = document.querySelector(projectId);

      if (!project) {
        return;
      }

      /* Close the project if it is already open */
      if (project.classList.contains("show-project")) {
        project.classList.remove("show-project");
      } else {
        /* Close all other projects */
        document.querySelectorAll(".project-item").forEach(function (item) {
          item.classList.remove("show-project");
        });

        /* Open selected project */
        project.classList.add("show-project");

        /* Scroll to the selected project */
        setTimeout(function () {
          project.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    });
  });

  /* ================= CERTIFICATES ================= */

  const certificateButtons = document.querySelectorAll(
    '.certificate-card a[href^="#"]',
  );

  certificateButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const certificateId = button.getAttribute("href");
      const certificate = document.querySelector(certificateId);

      if (!certificate) {
        return;
      }

      /* Close the certificate if it is already open */
      if (certificate.classList.contains("show-certificate")) {
        certificate.classList.remove("show-certificate");
      } else {
        /* Close all other certificates */
        document
          .querySelectorAll(".certificate-details")
          .forEach(function (item) {
            item.classList.remove("show-certificate");
          });

        /* Open selected certificate */
        certificate.classList.add("show-certificate");

        /* Scroll to the selected certificate */
        setTimeout(function () {
          certificate.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    });
  });
});
