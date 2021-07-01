/* Catch form submission and redirect back to main.php so page doesn't refresh */
document.getElementById("butt0").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt0").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent0").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt1").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt1").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent1").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt2").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt2").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent2").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt3").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt3").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent3").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt4").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt4").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent4").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt5").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt5").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent5").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt6").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt6").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent6").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt7").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt7").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent7").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt8").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt8").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent8").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}
document.getElementById("butt9").onclick = function() {
    let userID = sessionStorage.getItem("userID");
    document.getElementById("butt9").style.backgroundColor = "rgba(0,175,0,.50)";
    let sentence = $("#sent9").val();
    $.ajax({
        url: 'handler.php',
        type: "POST",
        data: {sentence: sentence, userID: userID},
        success: function (data) {
            console.log('Hoorah');
        }
    });
}