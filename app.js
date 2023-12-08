const progress = document.querySelector(".progress")

window.onscroll = ()=>scrollProgress()

function scrollProgress(){
    // 0 บนสุด - 1 ล่างสุด
    // คำนวณหาความสูงของ webpage เราก่อน แล้วแปลงเป็น %
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = (scrollTop/pageHeight)*100
    // class progress 
    progress.style.visibility = "visible"
    progress.style.width = scrollPercentage+"%";
}