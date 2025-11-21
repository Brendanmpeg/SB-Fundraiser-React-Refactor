<?php
if ($_SERVER['REQUEST_METHOD'] == "GET"){
    header("HTTP/1.1 200 All Good");
    echo "You got what you came for?";
    return;
}
elseif ($_SERVER['REQUEST_METHOD'] == "POST") {
    header("HTTP/1.1 200 All Good");
    echo "The form was submitted";
}
else {
    echo "Not POST or GET";
}
