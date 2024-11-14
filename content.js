chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.favoritedPrices) {
    const container = document.querySelector(".image-overlay-body");
    console.log("message:", message, "container:", container);
    if (container) {
      container.innerHTML = ""; // Eski fiyatları temizle
      message.favoritedPrices.forEach((price, index) => {
        const priceElement = document.createElement("div");
        priceElement.textContent = `Ürün ${
          index + 1
        } Favori Fiyatı: ${price} TL`;
        container.appendChild(priceElement);
      });
    }
  }
});

const container = document.querySelector(".image-overlay");
//container.innerHTML = 555;
console.log("container:", container);
