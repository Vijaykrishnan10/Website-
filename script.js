function searchProperties() {
  const text = document.getElementById("searchInput").value.toLowerCase();
  const type = document.getElementById("typeFilter").value;
  const list = document.getElementById("propertyList");
  list.innerHTML = "";

  const filtered = properties.filter(p =>
    (p.location.toLowerCase().includes(text) ||
     p.type.toLowerCase().includes(text) ||
     p.title.toLowerCase().includes(text)) &&
    (type === "" || p.type === type)
  );

  if (filtered.length === 0) {
    list.innerHTML = "<p>No Properties Yet</p>";
    return;
  }

  filtered.forEach(p => {
    let imgs = p.images.map(i => `<img src="${i}">`).join("");

    list.innerHTML += `
      <div class="property">
        ${imgs}
        <h3>${p.title}</h3>
        <p><b>Type:</b> ${p.type}</p>
        <p><b>Location:</b> ${p.location}</p>
        <p><b>Water:</b> ${p.water}</p>
        <p><b>EB:</b> ${p.eb}</p>
        <p><b>Approval:</b> ${p.approval}</p>
        <p><b>Price:</b> ${p.price}</p>

        <a class="whatsapp"
           href="https://wa.me/919876543210?text=I'm interested in ${p.title}">
           Enquire on WhatsApp
        </a>

        <a class="map" href="${p.map}" target="_blank">
          📍 View on Google Maps
        </a>
      </div>
    `;
  });
}