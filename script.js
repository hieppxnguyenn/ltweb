document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const menuOptions = document.querySelectorAll('.menu-option');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Bắt sự kiện khi click vào mỗi tùy chọn
    menuOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Ẩn menu khi người dùng chọn một tùy chọn
            navbar.classList.remove('active');
        });
    });

    // Bắt sự kiện click ra ngoài để ẩn menu
    document.addEventListener('click', function (event) {
        if (window.innerWidth < 768 && !navbar.contains(event.target) && !menuToggle.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });

    // Bắt sự kiện trước khi rời trang
    window.addEventListener('beforeunload', function () {
        // Đảm bảo menu đã được đóng trước khi rời trang
        navbar.classList.remove('active');
    });
});
