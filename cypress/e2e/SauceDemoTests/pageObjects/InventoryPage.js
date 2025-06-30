class InventoryPage {
  findMinPrice() {
    return cy.get('[data-test="inventory-item-price"]').then(($prices) => {
      const prices = $prices.toArray().map(el => 
        parseFloat(el.innerText.replace('$', ''))
      );
      
      const minPrice = Math.min(...prices);
      const minIndex = prices.indexOf(minPrice);
      
      return {
        price: minPrice,
        element: $prices.eq(minIndex)
      };
    });
  }
}

export default new InventoryPage();