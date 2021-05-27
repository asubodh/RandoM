//UPPERCASE LOWER CASE

function lowerupper() {
    var str = document.getElementById('upper').value
    document.getElementById('upper').value = str.toUpperCase();
    var s = document.getElementById('lower').value
    document.getElementById('lower').value = s.toLowerCase();
};

//COPY TEXT

function myFunction() {
    var copyText = document.getElementById("upper");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
};

function my_Function() {
    var copyText = document.getElementById("lower");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
};