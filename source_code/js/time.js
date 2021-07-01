let start_time = new Date();
let stop_time = new Date();
let start_time_kbt = new Date();
let stop_time_kbt = new Date();
let userID = Math.floor(Math.random() * 1000);
sessionStorage.setItem("userID", userID);
/* Code for the external keyboard and mouse */
document.getElementById("start").onclick = function() {
    start_time = Date.now();
    document.getElementById("start").style.backgroundColor = "rgba(0,175,0,.50)";
}
document.getElementById("stop").onclick = function() {
    if (start_time !=0) {
        stop_time = Date.now();
        document.getElementById("start").style.backgroundColor = "rgba(175,0,0,.50)";
        document.getElementById("stop").style.backgroundColor = "rgba(175,0,0,.50)";
        let speed = (stop_time - start_time) / 1000;
        $.ajax({
            type: "POST",
            url: 'speed.php',
            data: { speed: speed, userID: userID},
            success: function (data) {
                alert("Success!");
            }
        });
    }
    start_time = 0;
    stop_time = 0;
}

/* Code for the native kayboard and trackpad */
document.getElementById("start_kbt").onclick = function() {
    document.getElementById("start_kbt").style.backgroundColor = "rgba(0,175,0,.50)";
    start_time_kbt = Date.now();
}
document.getElementById("stop_kbt").onclick = function() {
    if (start_time_kbt !=0) {
        stop_time_kbt = Date.now();
        document.getElementById("start_kbt").style.backgroundColor = "rgba(175,0,0,.50)";
        document.getElementById("stop_kbt").style.backgroundColor = "rgba(175,0,0,.50)";
        let speed_kbt = (stop_time_kbt - start_time_kbt) / 1000;
        $.ajax({
            type: "POST",
            url: 'speed.php',
            data: { speed_kbt: speed_kbt, userID: userID},
            success: function (data) {
                alert("Success!");
            }
        });
    }
    start_time_kbt = 0;
    stop_time_kbt = 0;
}