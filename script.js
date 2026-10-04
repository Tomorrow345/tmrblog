const closeBtn = document.getElementById("closeBtn"); 
const banner = document.getElementById("banner"); 

closeBtn.onclick = () => {
    banner.style.display = 'none'; 
}

const blogver = '2026100403.p'; 
const meta = document.querySelector('meta[name="version"]'); 

meta.content = blogver; 

const goTop = document.getElementById("goTop"); 

goTop.onclick = function () {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', function() {
    const scrollBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
    
    if (scrollBottom < 180) {
        goTop.style.backgroundColor = 'rgb(255, 255, 255, 0.1)';
    } else {
        goTop.style.backgroundColor = 'rgb(255, 255, 255, 0.01)'; 
    }
});