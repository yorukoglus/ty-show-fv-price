function logURL(details) {
  if (details.url?.includes("nonce=999")) {
    return true;
  }
  fetch(details.url + "&nonce=999")
    .then((response) => response.json())
    .then((data) => {
      if (data.isSuccess && data.result && data.result.products) {
        const prices = data.result.products.map(
          (product) => product.favoritedPrice
        );

        console.log("prices:", prices, details.tabId, chrome.tabs.sendMessage);

        chrome.tabs.sendMessage(details.tabId, { favoritedPrices: prices });
      }
    })
    .catch((error) => console.error("Hata:", error));
}

chrome.webRequest.onCompleted.addListener(
  logURL,
  {
    urls: [
      "https://apigw.trendyol.com/discovery-web-recogw-service/api/favorites*",
    ],
  },
  ["responseHeaders"]
);
