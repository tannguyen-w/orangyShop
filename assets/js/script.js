const discounted = () => {
    const productItems = $$(".product-item");
    productItems.forEach((item) => {
        const discountTag = item.querySelector(".tag__discount");
        const priceElement = item.querySelector(".product-item__price");
        const priceOld = item.querySelector(".product-item__price--old");
        if (discountTag && priceElement) {
            priceOld.classList.add("discounted");
        }
    });
};

discounted();
