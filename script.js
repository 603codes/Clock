hour = document.getElementById("hour")
minute = document.getElementById("min")
second = document.getElementById("sec")
alarmhand = document.getElementById("alarm")
let alarm_hr;
let alarm_min;
let hr;
let min;
let sec;
setInterval(() => {
    date = new Date()
    hr = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()
    mils = date.getMilliseconds()
// 0 deg means 9 hrs, 0deg means 45min also 45sec
    hr_rotate = hr * 30 + min/2 +  90
    min_rotate = min * 6 + sec/10 + 90
    sec_rotate = sec * 6 + mils/1000 * 6 + 90

    hour.style.transform = `rotate(${hr_rotate}deg)`
    minute.style.transform = `rotate(${min_rotate}deg)`
    second.style.transform = `rotate(${sec_rotate}deg)`
    // Is there problem with seccond hand?

}, 1);

alarm_h3 = document.getElementById("alarm_h3")
alarm_btn = document.getElementById("alarm_btn")
alarm_stop = document.getElementById("alarm_btn_stop")
var audio = new Audio('audio.mp3')

alarm_btn.addEventListener("click", () => {
    // Always only have 1 to 12 alarm rings on both
    alarm_time = document.getElementById("alarm-time").value
    alarm_hr = parseInt(alarm_time.split(":")[0]) > 12 ? parseInt(alarm_time.split(":")[0]) - 12 : parseInt(alarm_time.split(":")[0])
    alarm_min = parseInt(alarm_time.split(":")[1])
    //Alarm h3 to alarm set at .. and alarm set button to change

    alarm_h3.innerHTML = alarm_min > 9 ? `Alarm set at ${alarm_hr}:${alarm_min}` : `Alarm set at ${alarm_hr}:0${alarm_min}`
    alarmhand.style.transform = `rotate(${alarm_hr * 30 + alarm_min / 2 + 90}deg)`
    alarm_btn.innerHTML = "Change Alarm"
    alarmhand.style.display = "block"
})

check_alarm = setInterval(() => {
    
    if (hr == alarm_hr && min == alarm_min && sec == 0) {
        console.log("Alarm ringing!")
        //suppose with audio.mp3 file in the same directory
        audio.play()
        alarm_btn.style = "display: none;"
        alarm_btn_stop.style = "display: inline-block;"
        alarm_h3.innerHTML = alarm_min > 9 ? `Alarm set at ${alarm_hr}:${alarm_min} ringing!` : `Alarm set at ${alarm_hr}:0${alarm_min} ringing!`
        
    }
}, 1);

alarm_stop.addEventListener("click", () => {
    audio.pause()
    alarm_h3.innerHTML = alarm_min > 9 ? `Alarm set at ${alarm_hr}:${alarm_min}` : `Alarm set at ${alarm_hr}:0${alarm_min}`
    alarm_btn_stop.style = "display: none;"
    alarm_btn.style = "display: inline-block;"
}
)

// What if 1 alarm set and user change alarm?