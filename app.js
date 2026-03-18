var btnmore = document.querySelector(".btn-more");
var box = document.querySelector(".boxinfo");

btnmore.addEventListener("click", function() {
    // Thêm hoặc xóa class 'expanded' mỗi khi click
    box.classList.toggle("expanded");

    // Đổi chữ trên nút để người dùng biết cách đóng lại
    if (box.classList.contains("expanded")) {
        btnmore.innerText = "Thu gọn";
    } else {
        btnmore.innerText = "Khám phá ngay";
    }
});