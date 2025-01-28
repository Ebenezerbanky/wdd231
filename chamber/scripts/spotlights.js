// spotlights.js
const members = [
    { 
        companyName: 'Gold Co', 
        membershipLevel: 'Gold', 
        logo: 'goldco-logo.jpg', 
        phone: '123-456-7890', 
        address: '123 Gold St, Ebenezer ', 
        website: 'https://www.goldco.com' 
    },
    { 
        companyName: 'Silver Solutions', 
        membershipLevel: 'Silver', 
        logo: 'silversolutions-logo.jpg', 
        phone: '987-654-3210', 
        address: '456 Silver Rd, Ebenezer ', 
        website: 'https://www.silversolutions.com' 
    },
    { 
        companyName: 'Elite Enterprises', 
        membershipLevel: 'Gold', 
        logo: 'eliteenterprises-logo.jpg', 
        phone: '555-123-4567', 
        address: '789 Elite Ave, Ebenezer ', 
        website: 'https://www.eliteenterprises.com' 
    },
    { 
        companyName: 'SilverTech', 
        membershipLevel: 'Silver', 
        logo: 'silvertech-logo.jpg', 
        phone: '123-789-6543', 
        address: '101 Silver Blvd, Ebenezer ', 
        website: 'https://www.silvertech.com' 
    },

];

// Filter gold and silver members
const spotlightMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');

// Function to display random spotlight cards
function displaySpotlights() {
    // Randomly select 2 or 3 members
    const randomMembers = [];
    while (randomMembers.length < 3 && spotlightMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
        randomMembers.push(spotlightMembers.splice(randomIndex, 1)[0]);
    }

    
    let spotlightHTML = '';
    randomMembers.forEach(member => {
        spotlightHTML += `
            <div class="spotlight-card">
                <img src="${member.logo}" alt="${member.companyName} Logo" class="spotlight-logo">
                <h3>${member.companyName}</h3>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            </div>
        `;
    });

    // Insert spotlight cards into the container
    document.getElementById('spotlights-container').innerHTML = spotlightHTML;
}

// Call the function to display spotlight cards
displaySpotlights();
