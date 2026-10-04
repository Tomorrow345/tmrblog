const closeBtn = document.getElementById("closeBtn"); 
const banner = document.getElementById("banner"); 

closeBtn.onclick = () => {
    banner.style.display = 'none'; 
}

const blogver = '2026100402.b'; 
const meta = document.querySelector('meta[name="version"]'); 

meta.content = blogver; 