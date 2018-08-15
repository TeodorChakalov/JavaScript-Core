function restaurantBill(items) {
    let products = items.filter((e, i) => i % 2 === 0).join(', ');
    let price = items.filter((e, i) => i % 2 !== 0).map(Number).reduce((a, b) => a+b);
    console.log(`You purchased ${products} for a total sum of ${price}`)
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);