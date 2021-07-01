/* Catch form submission and redirect back to main.php so page doesn't refresh */
document.getElementById("butt_kbt_0").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_0").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_0").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt_kbt_1").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_1").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_1").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt_kbt_2").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_2").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_2").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt_kbt_3").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_3").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_3").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt_kbt_4").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_4").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_4").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt_kbt_5").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_5").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_5").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt_kbt_6").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_6").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_6").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt_kbt_7").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_7").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_7").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt_kbt_8").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_8").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_8").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt_kbt_9").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt_kbt_9").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence_kbt = $("#sent_kbt_9").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: { sentence_kbt : sentence_kbt, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}