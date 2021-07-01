<!DOCTYPE html>
<html lang="en">
<head>
    <title> Research Experiment</title>
    <link rel="stylesheet" href="./css/experiment_style.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
<?php
    $random_num = rand();
    $kbm_file_lines = array();
    $kbt_file_lines = array();
    if ($random_num % 2 == 0) {
        $kbm_file_lines = file("./txt/sentences1.txt");
        $kbt_file_lines = file("./txt/sentences2.txt");
    }
    else {
        $kbt_file_lines = file("./txt/sentences1.txt");
        $kbm_file_lines = file("./txt/sentences2.txt");
    }
?>
<h1> 1) External Keyboard and Mouse </h1>
<h2> ---- Directions ----</h2>
<p> 1) If not already plugged in, plug in the external keyboard and external mouse, verify you are able to type and navigate <strong>(But do NOT enter any info in the text boxes or click any buttons yet). </strong> This can be done by opening a new tab and typing in the search box. If working, close that new tab and navigate back to this page. <strong>This section requires use of the external keyboard and mouse to type and navigate.</strong></p>
<p> 2) Take notice of the start, submit, and stop buttons in this section (There are 10 submit buttons.) The start button will turn green when clicked, as will the submit buttons. When the stop button is clicked, the start and stop buttons will turn red, indicating the end of the task for that section. A button being colored means you don't interact with it again.</p>
<p> 3) When ready to perform the task, press the start button. Then, click into the first text box to be able to type, and type the sentence that appears <strong>above</strong> the text box. <strong>IMPORTANT: Click the submit button associated with the text box immediately after finishing typing the sentence.</strong> </p>
<p> <strong>IMPORTANT NOTE: The backspace key and enter key are disabled, this is so the researcher can get an accuracy reading with the sentences and so that you, the participant, have to navigate to the submit buttons with the mouse. </strong> </p>
<p> 4) Repeat with each subsequent text box in the order the sentences appear on the screen. <strong>(NOTE: You only press the start button ONCE at the very beginning of the task). </strong></p>
<p> 5) After typing all the sentences and all submit buttons are clicked (colored green), click the stop button. </p>
<p> 6) Clicking the stop button with all submit buttons turned green signifies completing the task and you can move on to the other section (or if done with both sections, move on to the survey). </p>
<h2 id="task"> ---- Task ---- </h2>
<button type="button" id="start"> Start </button>
<?php
    shuffle($kbm_file_lines);
    $sentence = "sentence0";
    $sent = "sent0";
    $butt = "butt0";
    foreach ($kbm_file_lines as $line) {
        echo'<h3>'.$line.'<h3>';
        echo'<form method="post" autocomplete="off">';
            echo'<input type="text" name ="'.$sentence.'" id='.$sent.' spellcheck="false">';
            echo'<button type="button" id='.$butt.'> Submit </button>';
        echo'</form>';
        $sentence++;
        $sent++;
        $butt++;
    }
?>
<button type="button" id="stop"> Stop </button>
<br><br><br>
<hr>
<br>
<h1> 2) Native Laptop Keyboard and Trackpad </h1>
<h2> ---- Directions ----</h2>
<p> 1) Make sure no peripherals are connected to the laptop, <strong>this section requires the use of the native keyboard and trackpad on the laptop to type and navigate.</strong> </p>
<p> 2) Take notice of the start, submit, and stop buttons in this section (There are 10 submit buttons.) The start button will turn green when clicked, as will the submit buttons. When the stop button is clicked, the start and stop buttons will turn red, indicating the end of the task for that section. A button being colored means you don't interact with it again.</p>
<p> 3) When ready to perform the task, press the start button. Then, click into the first text box to be able to type, and type the sentence that appears <strong>above</strong> the text box. <strong>IMPORTANT: Click the submit button associated with the text box immediately after finishing typing the sentence.</strong> </p>
<p> <strong>IMPORTANT NOTE: The backspace key and enter key are disabled, this is so the researcher can get an accuracy reading with the sentences and so that you, the participant, have to navigate to the submit buttons with the trackpad. </strong> </p>
<p> 4) Repeat with each subsequent text box in the order the sentences appear on the screen. <strong>(NOTE: You only press the start button ONCE at the very beginning of the task). </strong></p>
<p> 5) After typing all the sentences and all submit buttons are clicked (colored green), click the stop button. </p>
<p> 6) Clicking the stop button with all submit buttons turned green signifies completing the task and you can move on to the other section (or if done with both sections, move on to the survey). </p>
<h2 id="task"> ---- Task ---- </h2>
<button type="button" id="start_kbt"> Start </button>
<?php
shuffle($kbt_file_lines);
$sentence_kbt = "sentence_kbt_0";
$sent_kbt = "sent_kbt_0";
$butt_kbt = "butt_kbt_0";
foreach ($kbt_file_lines as $line) {
    echo'<h3>'.$line.'<h3>';
    echo'<form method="post" autocomplete="off">';
        echo'<input type="text" name ="'.$sentence_kbt.'" id='.$sent_kbt.' spellcheck="false">';
        echo'<button type="button" id='.$butt_kbt.'> Submit </button>';
    echo'</form>';
    $sentence_kbt++;
    $sent_kbt++;
    $butt_kbt++;
}
?>
<button type="button" id="stop_kbt"> Stop </button>
<br><br><br>
<hr>
<br>
<a href="./survey.php"<button class="button"><span>Proceed to Survey</span></button></a>

<script type="text/javascript" src="./js/stop_refresh.js"></script>
<script type="text/javascript" src="./js/stop_refresh_kbt.js"></script>
<script type="text/javascript" src="./js/time.js"></script>
<script type="text/javascript" src="./js/disable_enter.js"></script>

</body>
</html>
