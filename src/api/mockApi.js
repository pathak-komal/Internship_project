export async function fetchPrediction(data) {
  // Fake API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        price: "₹2500/quintal",
        schemes: [
          "PM-Kisan Samman Nidhi",
          "Soil Health Card Scheme",
          "Crop Insurance Scheme",
        ],
      });
    }, 1000);
  });
}
