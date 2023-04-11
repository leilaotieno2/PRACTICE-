const checkboxes = document.querySelectorAll('input[type=checkbox]');
const display = document.getElementById('display');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      const id = event.target.value;
      fetch(` http://localhost:3000/land_sizes?id=${id}`)
        .then(response => response.json())
        .then(data => {
          const result = `
            Property Name: ${data.prop1}
            Area in Acres: ${data.area_acres}
            Area in Sqm: ${data.area_sqm}
            Location: ${data.location}
          `;
          display.innerHTML = result;
        })
        .catch(error => console.error(error));
    }
  });
});
