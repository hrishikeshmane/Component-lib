function handleOnClick(element) {
  srollHandler(element.innerText.toLowerCase());
}

const srollHandler = (selectedSection) => {
  let section = document.getElementById(selectedSection);
  section.scrollIntoView({
    behavior: "smooth",
  });
};

function showToast() {
  let toast = document.getElementById("show-toast");
  toast.className = "show";
  // After 3 seconds, remove the show class from the div
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

function openModal() {
  let modal = document.getElementById("open-modal");
  modal.style.display = "block";

  // Get the <span> element that closes the modal
  let span = document.getElementById("close");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
