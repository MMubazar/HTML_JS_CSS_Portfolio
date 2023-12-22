(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

function downloadCV() {
  // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
  const cvPath = "./assets/Resume..pdf";

  // Create a link element
  const link = document.createElement("a");

  // Set the download attribute with the filename
  link.download = "Resume.pdf";

  // Set the href attribute with the path to your CV file
  link.href = cvPath;

  // Append the link to the document
  document.body.appendChild(link);

  // Trigger a click on the link to start the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
}
