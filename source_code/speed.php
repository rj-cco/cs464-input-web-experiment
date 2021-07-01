<?php
if ((isset($_POST['speed']) or isset($_POST['speed_kbt'])) and isset($_POST['userID'])) {
    if ($_POST['speed']) {
        file_put_contents('./txt/speed/uid_'. $_POST['userID'] .'_s_kbm.txt', $_POST['speed'] . "\n", FILE_APPEND);
        // Do something else
    }
    if ($_POST['speed_kbt']) {
        file_put_contents('./txt/speed/uid_' . $_POST['userID'] . '_s_kbt.txt', $_POST['speed_kbt'] . "\n", FILE_APPEND);
    }
}
