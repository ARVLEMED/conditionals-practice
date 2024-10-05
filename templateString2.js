
    function productInfo(productName, price, isAvailable) {
        let availability;
        if (isAvailable) {
            availability = 'available';
        } else {
            availability = 'not available';
        }
        
        return `The ${productName} costs $${price}. It is ${availability}.`;
    }
    
    console.log(productInfo("Laptop", 999.99, true));  