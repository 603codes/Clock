setInterval(() => {
    date = new Date()
    hr = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()
    mils = date.getMilliseconds()

    hr_rotate = hr * 30 + min/2
    min_rotate = min * 6 + sec/10
    sec_rotate = sec * 6 + mils/1000 * 6

    console.log(`Hour hand rotation: ${hr_rotate} degrees`)
    console.log(`Minute hand rotation: ${min_rotate} degrees`)
    conole.log(`Second hand rotation: ${sec_rotate} degrees`)

}, 1);
alarm_h3 = document.getElementById("alarm_h3")
alarm_btn = document.getElementById("alarm_btn")
alarm_stop = document.getElementById("alarm_btn_stop")
var audio = new Audio('audio.mp3')

function set_alarm() {
    alarm_time = document.getElementById("time").value
    alarm_hr = parseInt(alarm_time.split(":")[0])
    alarm_min = parseInt(alarm_time.split(":")[1])
    //Alarm h3 to alarm set at .. and alarm set button to change
    
    alarm_h3.innerHTML = `Alarm set at ${alarm_hr}:${alarm_min}`
    
    alarm_btn.innerHTML = "Change Alarm"

}

check_alarm = setInterval(() => {
    
    if (hr == alarm_hr && min == alarm_min && sec == 0) {
        console.log("Alarm ringing!")
        //suppose with audio.mp3 file in the same directory
        audio.play()
        alarm_btn.style = "display: none;"
        alarm_btn_stop.style = "display: block;"
        alarm_h3.innerHTML = `Alarm set at ${alarm_hr}:${alarm_min} ringing!`
        
    }
}, 1);

alarm_stop.addEventListener("click", () => {
    audio.pause()
    alarm_h3.innerHTML = `Alarm set at ${alarm_hr}:${alarm_min}`
}
)

// What if 1 alarm set and user change alarm?