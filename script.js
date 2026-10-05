const closeBtn = document.getElementById("closeBtn"); 
const banner = document.getElementById("banner"); 

if (closeBtn && banner) {
    closeBtn.onclick = () => {
        banner.style.display = 'none'; 
    }
}

const blogver = '2026100404.r'; 
const meta = document.querySelector('meta[name="version"]'); 
const verLabel = document.getElementById('verLabel'); 

meta.content = blogver; 

if (verLabel) {
    verLabel.textContent = '当前版本：' + blogver; 
}

const goTop = document.getElementById("goTop"); 

goTop.onclick = () => {
    window.scroll({
        top: 0, 
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', function() {
    const goTop = document.getElementById('goTop');
    if (!goTop) return;

    const scrollBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

    if (scrollBottom < 170) {
        goTop.style.backgroundColor = 'rgb(255, 255, 255, 0.1)';
        goTop.style.border = 'solid 3px rgb(72, 111, 174)'; 
    } else {
        goTop.style.backgroundColor = 'rgb(255, 255, 255, 0.01)'; 
        goTop.style.border = 'solid 1px rgb(255, 255, 255, 0.1)'; 
    }
});

const toMain = document.getElementById('toMain'); 

if (toMain) {
    toMain.onclick = () => {
        document.getElementById('atcs').scrollIntoView({ behavior: 'smooth' }); 
    }
}