const expr = prompt("Выберите цвет: Red, Yellow, Green")

switch (expr) {
    case "Red":
        alert("Stop");
        break;
    case "Yellow":
        alert("Wait");
        break;
    case "Green":
        alert("Go");
        break;
    default:
        alert("Упс, ошибка!")
}