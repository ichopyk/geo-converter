document.getElementById("convert-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;

  const response = await fetch("https://<твій-ngrok-адрес>/convert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ lat, lon })
  });

  const data = await response.json();

  document.getElementById("result").innerHTML = `
    <p><strong>UTM:</strong> ${data.utm.easting}, ${data.utm.northing} (${data.utm.zone})</p>
    <p><strong>MGRS:</strong> ${data.mgrs}</p>
  `;
});
