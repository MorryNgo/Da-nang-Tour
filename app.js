var btnmore = document.querySelector(".btn-more");
var box = document.querySelector(".boxinfo");

btnmore.addEventListener("click", function() {
    box.classList.toggle("expanded");

    if (box.classList.contains("expanded")) {
        btnmore.innerText = "Thu gọn cẩm nang";
    } else {
        btnmore.innerText = "Xem chi tiết cẩm nang";
    }
});

// Danh sách các ảnh nền chất lượng cao về Đà Nẵng
const danangImages = [
    "https://booking.muongthanh.com/upload_images/images/H%60/cau-vang-da-nang.jpg",
    "https://tourism.danang.vn/wp-content/uploads/2023/02/tour-du-lich-da-nang-1.jpg",
    "https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20%C4%91%C3%A0%20n%E1%BA%B5ng/anh-dep-da-nang-5.jpg"
];

// --- KỸ THUẬT PRELOAD: Tải trước ảnh để không bị trắng trang ---
danangImages.forEach((src) => {
    const img = new Image();
    img.src = src;
});

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % danangImages.length;
    // Thay đổi background mượt mà
    document.body.style.backgroundImage = `url('${danangImages[currentIndex]}')`;
}

// Đổi ảnh sau mỗi 10 giây (10000ms) để người dùng kịp ngắm cảnh
setInterval(changeBackground, 5000);
