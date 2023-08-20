let totalPrice = 0;

function purchaseItems(data){
    const purchaseItemName = data.childNodes[5].innerText;
    const purchaseItemPriceString = data.childNodes[7].innerText.split(" ")[0]; 
    const purchaseItemPrice = parseFloat(purchaseItemPriceString) ;
    totalPrice = totalPrice + purchaseItemPrice;
    setElementInnerText("total-price", totalPrice);
    const purchaseItemEntry = document.getElementById('purchase-items-entry')
    const count = purchaseItemEntry.childElementCount;
    const p = document.createElement('p');
    p.innerText = `${count + 1}. ${purchaseItemName}` ;
    purchaseItemEntry.appendChild(p);
}


function setElementInnerText(elementId, price){
    const element = document.getElementById(elementId);
    element.innerText = price.toFixed(2);
}