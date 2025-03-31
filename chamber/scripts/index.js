const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
const justYear = {year: 'numeric'};
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());
const todaysday = new Date();


document.getElementById('date').textContent = new Date (document.lastModified).toLocaleDateString('en-US', options);
document.getElementById('year').textContent = new Date ().toLocaleDateString('en-US', justYear);
document.querySelector(".today").innerHTML = `${fulldate}`;


function hambButton() {
    var x = document.getElementById("hambLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }