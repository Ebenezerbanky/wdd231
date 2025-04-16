const directoryUrl = "https://giyip.github.io/wdd230/chamber/json/data.json";
const directoryCont = document.querySelector(".directory-container");
const listBtn = document.querySelector(".list-view-icon");
const gridBtn = document.querySelector(".grid-view-icon");
let company ;
let companyInfo ;


gridBtn.addEventListener("click", () => {
    gridBtn.classList.add("active-switch");
    listBtn.classList.remove("active-switch");
    company.forEach(company=> company.classList.replace("list-company","grid-company"));

    companyInfo.forEach(info => info.classList.replace("list-info", "grid-info"));
    directoryCont.classList.replace("flex-directory", "grid-directory");
});
listBtn.addEventListener("click", () => {
    listBtn.classList.add("active-switch");
    gridBtn.classList.remove("active-switch");
    company.forEach(company=> company.classList.replace("grid-company","list-company"));

    companyInfo.forEach(info => info.classList.replace("grid-info", "list-info"));
    directoryCont.classList.replace("grid-directory", "flex-directory");
});

async function getandshowDirectory() {
    const response = await fetch(directoryUrl);
    const jsonObject = await response.json();
    const directory = jsonObject.directory;

    directoryCont.innerHTML = "";
    directory.forEach((company) => {
        directoryCont.insertAdjacentHTML("beforeend", 
        `
                    <div id="company" class="company grid-company abel-text">
                        <img class="company-img" src="${company.logoURL}" loading="lazy" alt="logo of ${company.name}">
                        <div class="company-info grid-info">
                            <h2 class="mono-text">${company.name} <img src="images/star_FILL0_wght400_GRAD0_opsz24.svg" alt="${company.membership} tag" class="${company.membership}"></h2>
                            <ul>
                            <li>${company.email}</li>
                            <li>${company.websiteURL}</li>
                            <li>${company.address}</li>
                            <li>${company.phoneNumber}</li>
                            </ul>
                            <p class="transparent">${company.description}</p>
                        </div>
                    </div>`)

                    
    });
    company = document.querySelectorAll("#company");
    companyInfo = document.querySelectorAll(".company-info");



    
};
getandshowDirectory();