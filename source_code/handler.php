<?php
    if ((isset($_POST['sentence']) or isset($_POST['sentence_kbt'])) and isset($_POST['userID'])) {
        #Load in sentence files here, get strings, compare
            // Do something
        if ($_POST['sentence']) {
            file_put_contents('./txt/accuracy/uid_'. $_POST['userID'] .'_a_kbm.txt', $_POST['sentence'] . "\n", FILE_APPEND);
            // Do something else
        }
        if ($_POST['sentence_kbt']) {
            file_put_contents('./txt/accuracy/uid_' . $_POST['userID'] . '_a_kbt.txt', $_POST['sentence_kbt'] . "\n", FILE_APPEND);
        }
    }