let expr=prompt("color?")
switch (expr) {
    case "red":
        document.getElementsByClassName('red')[0].style.background = "#FF1F2A";
        alert("STOP");
        break;
    case "yellow":
        document.getElementsByClassName('yellow')[0].style.background = "#FAFF3E";
        alert("wait");
        break;
    case "green":
        document.getElementsByClassName('green')[0].style.background = "#5CC430";
        alert("GO");
        break;
    default:
        alert('undefined')
}
