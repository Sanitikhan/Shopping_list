function addToBasket(item) {
    const Basket = document.getElementById("Basket");
    const row = document.createElement("row");
    const cell = document.createElement("cell");
    const text = document.createTextNode(item);

    cell.appendChild(text);
    row.appendChild(cell);
    Basket.appendChild(row);
}