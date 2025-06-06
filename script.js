
let ispink = true;

function toggleColor() {

    document.querySelectorAll('a').forEach(el => {
        el.style.backgroundColor = ispink ? 'white' : '#3CB371';
        el.style.color = ispink ? 'black' : 'white';
    });
    document.querySelectorAll('.card').forEach(el => {
        el.style.backgroundColor = ispink ? 'black' : 'rgba(255, 255, 255, 0.8)';
        el.style.color = ispink ? 'black' : 'white';

    });
    //  document.querySelectorAll('h1').forEach(el => {
    //     el.innerHTML = ispink ? 'Anime website' : '动漫网址';

    // });
    document.querySelectorAll('p').forEach(el => {
        el.innerHTML = ispink ? '一键跳转！！！' : '网站收集';

    });
    document.querySelectorAll('h1').forEach(el => {
        el.style.color = ispink ? 'white' : 'black';

    });

    ispink = !ispink;

    setTimeout(toggleColor, 2000);
}

toggleColor();  // 启动
function toggleText() {
    document.getElementById('a1').innerText = "动漫网址";
}


const bgImg = new Image();
bgImg.src = '/image/MIKU\ \ \(12\).png'; // 确保路径正确
bgImg.onload = function () {
    document.body.classList.add('bg-loaded');
};


