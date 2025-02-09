document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    const productDetails = {
        shoes: { name: "Running Shoes", price: "$49.99", img: "shoe.jpg" },
        bag: { name: "Leather Bag", price: "$79.99", img: "bag.jpg" },
        watch: { name: "Smart Watch", price: "$129.99", img: "watch.jpg" },
        lamp: { name: "Home Decor Lamp", price: "$39.99", img: "lamp.jpg" },
        skincare: { name: "CBD Skincare ", price: "$24.99", img: "skincare.jpg" },
        supplements: { name: "Mental Health Supplements", price: "$34.99", img: "supplements.jpg" },
        ebook: { name: "Ebook on Productivity", price: "$9.99", img: "ebook.jpg" },
        candles: { name: "Handmade Candles", price: "$19.99", img: "candle.jpg" },
        kids-Clothing : { name: "Organic Kids Clothing", price: "$29.99", img: "kids-clothing.jpg" },
        Smart Speaker: { name: "Smart Speaker", price: "$149.99", img: "smartspeaker.jpg" },
        earbuds: { name: "nice experience", price: "$49.99", img: "earbuds.jpg" },
    };

    if (product && productDetails[product]) {
        document.getElementById("product-name").innerText = productDetails[product].name;
        document.getElementById("product-price").innerText = productDetails[product].price;
        document.getElementById("product-image").src = productDetails[product].img;
    }
});

