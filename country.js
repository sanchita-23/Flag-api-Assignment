// country.js

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');

    // Fetch data from REST Countries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Iterate over the first 6 countries and create HTML elements
            for (let i = 0; i < 9; i++) {
                const country = data[i];
                const flagSrc = country.flags.png;
                const countryName = country.name.common;
                const googleMapsLink = `https://www.google.com/maps/place/${countryName}`;

                // Create flag container
                const flagContainer = document.createElement('div');
                flagContainer.className = i < 0 ? 'flag country-info' : 'flag';

                // Create flag image
                const flagImg = document.createElement('img');
                flagImg.src = flagSrc;
                flagImg.alt = `${countryName} Flag`;
                flagImg.style.width = '100px';

                // Append flag image and country info
                flagContainer.appendChild(flagImg);

                if (i < 9) {
                    // Add country name and Google Maps link for the flags
                    const countryInfo = document.createElement('div');
                    countryInfo.innerHTML = `
                        <div>${countryName}</div>
                        <div><a href="${googleMapsLink}" target="_blank">Google Map</a></div>
                    `;
                    flagContainer.appendChild(countryInfo);
                }

                // Append the flag container to the main container
                container.appendChild(flagContainer);
            }
        })
        .catch(error => console.error('Error fetching country data:', error));
});

