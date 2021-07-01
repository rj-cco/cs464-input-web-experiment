<!DOCTYPE html>
<html lang="en">
<head>
    <title> Experiment: Survey </title>
    <link rel="stylesheet" href="./css/survey_style.css">
</head>
<body>
    <h1> Survey Questions </h1>
    <hr>
    <form method="post">
    <p>Which keyboard did you prefer typing with? </p>
        <div>
        <input type="radio" id="ext_keyboard" name="keyboard" value="External Keyboard">
        <label for="ext_keyboard">External Keyboard</label>
        </div>
        <div>
        <input type="radio" id="nat_keyboard" name="keyboard" value="Native Laptop Keyboard">
        <label for="nat_keyboard">Native Laptop Keyboard</label>
        </div>
    <p>Which input device did you prefer using for navigation? </p>
        <div>
            <input type="radio" id="trackpad" name="navigation" value="TrackPad">
            <label for="trackpad">Trackpad</label>
        </div>
        <div>
            <input type="radio" id="ext_mouse" name="navigation" value="External Mouse">
            <label for="ext_mouse">External Mouse</label>
        </div>
    <p>Which combination of devices did you feel gave the best typing/navigation experience overall? </p>
        <div>
        <input type="radio" id="kbm" name="combo" value="External Keyboard/Mouse">
        <label for="kbm">External Keyboard/Mouse</label>
        </div>
        <div>
        <input type="radio" id="kbt" name="combo" value="Native Laptop Keyboard/Trackpad">
        <label for="kbt">Native Laptop Keyboard/Trackpad</label>
        </div>
        <div>
        <button type="submit">Submit Answers</button>
        </div>
    </form>
<?php
    if (isset($_POST['keyboard']) and isset($_POST['navigation']) and isset($_POST['combo'])) {
        echo'<p style="margin-left: 10%; margin-top: 50px; color: red;"> Thank you for your input! Your answers have been recorded, you can now close out of this page.</p>';
        $data = 'Participants Answers: 1) '.$_POST['keyboard'].' 2) '.$_POST['navigation'].
                ' 3) '.$_POST['combo'];
        $file_name = './txt/survey/survey_responses.txt';
        file_put_contents($file_name, $data."\n", FILE_APPEND);
    }
?>
    <footer>Researcher Contact Information - Name: Bobby Calkins, Email: rjcalk@rams.colostate.edu </footer>
</body>
</html>