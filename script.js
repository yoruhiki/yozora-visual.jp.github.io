document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị slide đầu tiên
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Thay đổi slide mỗi 3 giây
    }

    // Mở và đóng modal thư viện ảnh
    let modal = document.getElementById("gallery-modal");
    let btn = document.getElementById("open-gallery");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        loadGallery();
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Tải ảnh lên dịch vụ lưu trữ miễn phí
    document.getElementById('upload-btn').addEventListener('click', function() {
        let fileInput = document.getElementById('upload-image');
        let file = fileInput.files[0];
        if (file) {
            let formData = new FormData();
            formData.append("image", file);

            // Sử dụng dịch vụ 0
