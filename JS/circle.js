setInterval(()=>{
    // get the current time
    let curr_hr = new Date().getHours();
    let curr_min = new Date().getMinutes();
    let curr_sec = new Date().getSeconds();
    // select the circles from the html file

    let hour = document.getElementById("hh");
    let min = document.getElementById("mm");
    let sec = document.getElementById("ss");

    // now move the  circle by decrementing the dashoffsett
    hour.style.strokeDashoffset = 510 - ( curr_hr * 510) / 12;
    min.style.strokeDashoffset = 630 - (curr_min  * 630) / 60;
    sec.style.strokeDashoffset = 760 - (curr_sec * 760) / 60;
    
});