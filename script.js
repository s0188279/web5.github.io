document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');

    calculateButton.addEventListener('click', function() {
        const products = document.querySelectorAll('.product');
        let totalCost = 0;
        let totalQuantity = 0;

        products.forEach(product => {
            const checkbox = product.querySelector('.product-checkbox');
            const quantityInput = product.querySelector('.quantity');
            const price = parseFloat(product.getAttribute('data-price'));

            if (checkbox.checked) {
                const quantity = parseInt(quantityInput.value);
                totalCost += price * quantity;
                totalQuantity += quantity;
            }
        });

        document.getElementById('total-cost').textContent = totalCost;
        document.getElementById('total-quantity').textContent = totalQuantity;
    });
});
