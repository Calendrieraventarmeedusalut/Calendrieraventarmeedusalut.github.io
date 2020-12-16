var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function toogle_video_on(id, display) {
    var x = document.querySelector("iframe");
    var v = document.querySelector(".video");
    var c = document.querySelector(".close_vid");
    // if (isMobile) {
    //     window.location.href = "https://www.youtube.com/embed/ljVKJillJwg?autoplay=1";
    // }
    if (display != "none") {
        if (id == "1")
            x.setAttribute("src", "https://www.youtube.com/embed/ljVKJillJwg?autoplay=1");
        if (id == "2")
            x.setAttribute("src", "https://www.youtube.com/embed/tK3mRcfkHio?autoplay=1");
        if (id == "3")
            x.setAttribute("src", "https://www.youtube.com/embed/yXQViqx6GMY?autoplay=1");
        if (id == "4")
            x.setAttribute("src", "https://www.youtube.com/embed/3bxihqPKF08?autoplay=1");
        if (id == "5")
            x.setAttribute("src", "https://www.youtube.com/embed/tnIbmIVu2sw?autoplay=1");
        if (id == "6")
            x.setAttribute("src", "https://www.youtube.com/embed/lC7Qc_KS_ZY?autoplay=1");
        if (id == "7")
            x.setAttribute("src", "https://www.youtube.com/embed/lC7Qc_KS_ZY?autoplay=1");
        if (id == "8")
            x.setAttribute("src", "https://www.youtube.com/embed/kIFESP4GpXw?autoplay=1");
        if (id == "9")
            x.setAttribute("src", "https://www.youtube.com/embed/f06xdEb-YUg?autoplay=1");
        if (id == "10")
            x.setAttribute("src", "https://www.youtube.com/embed/KFzvo_o95aU?autoplay=1");
        if (id == "11")
            x.setAttribute("src", "https://www.youtube.com/embed/KFzvo_o95aU?autoplay=1");
        if (id == "12")
            x.setAttribute("src", "https://www.youtube.com/embed/in2cspltkLg?autoplay=1");
        if (id == "14")
            x.setAttribute("src", "https://www.youtube.com/embed/8T1tjhMZEXk?autoplay=1");
        if (id == "15")
            x.setAttribute("src", "https://www.youtube.com/embed/V77ZKMXKCQ4?autoplay=1");
        if (id == "16")
            x.setAttribute("src", "https://www.youtube.com/embed/WOQcvQVdmfY?autoplay=1");
        if (id == "17")
            x.setAttribute("src", "https://www.youtube.com/embed/TJT-k50MtUg?autoplay=1");
        if (id == "18")
            x.setAttribute("src", "https://www.youtube.com/embed/vT-UmYiPrmY?autoplay=1");
        if (id == "19")
            x.setAttribute("src", "https://www.youtube.com/embed/cQ3ubkrm6Bs?autoplay=1");
        if (id == "20")
            x.setAttribute("src", "https://www.youtube.com/embed/jO9Y1e7nz2M?autoplay=1");
        if (id == "21")
            x.setAttribute("src", "https://www.youtube.com/embed/lvDL6-xdoqE?autoplay=1");
        if (id == "22")
            x.setAttribute("src", "https://www.youtube.com/embed/IcmTp5vjfEw?autoplay=1");
        if (id == "23")
            x.setAttribute("src", "https://www.youtube.com/embed/cEp5mA66RBg?autoplay=1");
        if (id == "24")
            x.setAttribute("src", "https://www.youtube.com/embed/IcmTp5vjfEw?autoplay=1");
        console.log(id);
        v.style.display = "flex";
    }
}
function toogle_video_off() {
    var x = document.querySelector(".video");
    var c = document.querySelector(".close_vid");
    var i = document.querySelector("iframe");
    i.setAttribute("src", "https://www.youtube.com");
    x.style.display = "none";
}

