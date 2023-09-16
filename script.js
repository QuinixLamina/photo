let isBackgroundDark = false;

function toggleBackground() {
    const body = document.body;
    isBackgroundDark = !isBackgroundDark;
    body.style.backgroundColor = isBackgroundDark ? "#000000" : "#ffffff";
}

function openPhoto(photoNumber) {
    const modal = document.getElementById("photoModal");
    const modalContent = document.getElementById("modalContent");
    const photoSrc = `photo${photoNumber}.jpg`;
    modalContent.innerHTML = `<img src="${photoSrc}" alt="Photo ${photoNumber}">`;
    modal.style.display = "block";
}

function closePhotoModal() {
    const modal = document.getElementById("photoModal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function (event) {
    const modal = document.getElementById("photoModal");
    if (event.target === modal) {
        closePhotoModal();
    }
};
