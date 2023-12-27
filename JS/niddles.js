setInterval( () => {
    // get the current time
    let curr_hr = new Date().getHours();
    let curr_min = new Date().getMinutes();
    let curr_sec = new Date().getSeconds();
    // select the circles from the html file

    let hr = document.getElementById("hr");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    // rotate the dot min =6 (360/60)  , hr = 30(360 / 12), sec = 6
    sec.style.transform =`rotate(${curr_sec * 6}deg)`;
    min.style.transform =`rotate(${curr_min * 6}deg)`;
    hr.style.transform =`rotate(${curr_hr * 30}deg)`;
}); 