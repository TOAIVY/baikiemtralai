// Hàm để hiển thị thời gian hiện tại
function showCurrentTime() {
    const currentTimeElement = document.getElementById('clock-time');
    const currentTime = new Date().toLocaleTimeString('vi-VN', {hour12: false});
    currentTimeElement.textContent = currentTime;
}

// Gọi hàm showCurrentTime() mỗi giây
setInterval(showCurrentTime, 1000);
