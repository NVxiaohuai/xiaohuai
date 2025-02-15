// 初始化Swiper轮播
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,        // 旋转角度
        stretch: 0,        // 拉伸程度
        depth: 100,        // 深度
        modifier: 1,       // 效果乘数
        slideShadows: true // 开启阴影
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    touchRatio: 1,
    grabCursor: true,
});

// 微信二维码弹窗
const modal = document.getElementById('wechat-modal');
const wechatBtn = document.getElementById('wechat');
const closeBtn = document.getElementsByClassName('close')[0];

wechatBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 快手号弹窗
const kuaishouModal = document.getElementById('kuaishou-modal');
const kuaishouBtn = document.getElementById('kuaishou');
const kuaishouCloseBtn = kuaishouModal.getElementsByClassName('close')[0];

kuaishouBtn.onclick = function() {
    kuaishouModal.style.display = "block";
}

kuaishouCloseBtn.onclick = function() {
    kuaishouModal.style.display = "none";
}

// 修改window点击事件，同时处理微信和快手弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == kuaishouModal) {
        kuaishouModal.style.display = "none";
    }
}

// QQ联系功能
document.querySelector('.qq-link').addEventListener('click', function() {
    window.location.href = 'tencent://message/?uin=3382606608';
});

// 侧边栏控制
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

sidebarToggle.addEventListener('click', (e) => {
    e.stopPropagation();  // 阻止事件冒泡
    sidebar.classList.toggle('active');
    console.log('Sidebar toggled:', sidebar.classList.contains('active')); // 添加调试日志
});

// 点击侧边栏外部关闭侧边栏
document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target) || sidebarToggle.contains(event.target);
    if (!isClickInside && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// 阻止侧边栏内部点击事件冒泡
sidebar.addEventListener('click', (e) => {
    e.stopPropagation();
});

// 滚动监听
let lastScrollTop = 0;
const scrollThreshold = 100;  // 滚动多少距离后显示

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    // 向下滚动超过阈值时显示按钮
    if (currentScroll > scrollThreshold) {
        sidebarToggle.classList.add('show');
    } else {
        sidebarToggle.classList.remove('show');
    }
    
    lastScrollTop = currentScroll;
}); 