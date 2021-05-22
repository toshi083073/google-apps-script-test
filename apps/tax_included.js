/**
 * 税込金額を返す関数taxIncluded 
 * 
 * @param {Number} 金額
 * @return {Number} 税込金額
 * @customfunction
 */
function taxIncluded(price){
    const taxRate = 0.1;//税率
    return price * (1 + taxRate);
}