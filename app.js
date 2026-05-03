// Danh sách ảnh nền chất lượng cao
const danangImages = [
    "https://booking.muongthanh.com/upload_images/images/H%60/cau-vang-da-nang.jpg",
    "https://tourism.danang.vn/wp-content/uploads/2023/02/tour-du-lich-da-nang-1.jpg",
    "https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20%C4%91%C3%A0%20n%E1%BA%B5ng/anh-dep-da-nang-5.jpg"
];


danangImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

let currentIndex = 0;
const body = document.body;

function changeBackground() {
    currentIndex = (currentIndex + 1) % danangImages.length;
    body.style.backgroundImage = `url('${danangImages[currentIndex]}')`;
}

setInterval(changeBackground, 7000);


const btnMore = document.querySelector(".btn-more");
const boxInfo = document.querySelector(".boxinfo");
const details = document.querySelector(".more-details");

btnMore.addEventListener("click", function() {
    const isExpanded = boxInfo.classList.toggle("expanded");
    
    if (isExpanded) {
        details.style.display = "block";
        btnMore.innerText = "Thu gọn cẩm nang";

        setTimeout(() => details.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 300);
    } else {
        details.style.display = "none";
        btnMore.innerText = "Xem chi tiết cẩm nang";
    }
});