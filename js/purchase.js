let originalPrice = 0;
const makePurchase = document.getElementById('make-purchase');
const couponApplyButton = document.getElementById('apply-btn');

function purchaseItems(data){
    const purchaseItemName = data.childNodes[5].innerText;
    const purchaseItemPriceString = data.childNodes[7].innerText.split(" ")[0]; 
    const purchaseItemPrice = parseFloat(purchaseItemPriceString) ;
    originalPrice = originalPrice + purchaseItemPrice;
    setElementInnerText("total-price", originalPrice);
    setElementInnerText('total-price-excludes-discount', originalPrice);
    const purchaseItemEntry = document.getElementById('purchase-items-entry')
    const count = purchaseItemEntry.childElementCount;
    const p = document.createElement('p');
    p.innerText = `${count + 1}. ${purchaseItemName}` ;
    purchaseItemEntry.appendChild(p);
    if (originalPrice > 0){
        makePurchase.removeAttribute('disabled')
    }
    if (originalPrice >= 200){
        couponApplyButton.removeAttribute('disabled')
    }
}

couponApplyButton.addEventListener('click', function(){
    const couponInputField = document.getElementById('coupon-field');
    const couponInputFieldValue = couponInputField.value;
    const discountPercentage = 0.2; // 20%
    const discount = originalPrice * discountPercentage;
    const totalPrice = originalPrice - discount;

    if (couponInputFieldValue === "SELL200") {
        setElementInnerText('discount', discount);
        setElementInnerText('total-price-excludes-discount', totalPrice);
    } else {
        setElementInnerText('discount', 0.00);
        setElementInnerText('total-price-excludes-discount', originalPrice);
    }
    couponInputField.value = "";
});

document.getElementById('back-to-home').addEventListener('click', function(){
    const purchaseItemsEntry = document.getElementById('purchase-items-entry');
    purchaseItemsEntry.innerHTML = "";
    setElementInnerText("total-price", 0.00);
    setElementInnerText('discount', 0.00);
    setElementInnerText('total-price-excludes-discount', 0.00);
    originalPrice = 0;
    makePurchase.setAttribute('disabled', 'true');
    couponApplyButton.setAttribute('disabled', 'true');

})



function setElementInnerText(elementId, price){
    const element = document.getElementById(elementId);
    element.innerText = price.toFixed(2);
}