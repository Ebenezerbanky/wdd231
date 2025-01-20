document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members-container');
    const toggleButton = document.getElementById('toggle-view');
    let viewMode = 'grid';  // Default view mode

    // Fetch members data from JSON
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    // Display members in either grid or list view
    function displayMembers(members) {
        membersContainer.innerHTML = ''; // Clear existing content

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            if (viewMode === 'grid') {
                memberCard.classList.add('grid-item');
            } else {
                memberCard.classList.add('list-item');
            }

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membership_level)}</p>
                <p>${member.additional_info}</p>
            `;

            membersContainer.appendChild(memberCard);
        });
    }

    // Toggle between grid and list view
    toggleButton.addEventListener('click', () => {
        viewMode = (viewMode === 'grid') ? 'list' : 'grid';
        displayMembers(members);  // Re-render the members
    });

    // Return membership level text based on numeric value
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    // Display current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = `Copyright © ${currentYear} Timbuktu Chamber of Commerce`;

    // Display last modification date dynamically
    const lastModification = document.lastModified;
    document.getElementById('last-modification').textContent = `Last Modification: ${lastModification}`;

    // Fetch and display members when the page loads
    fetchMembers();
});
