import { data } from "./data";

var Inputfilter = document.querySelector("#myInput");
Inputfilter.addEventListener("keyup", (event) => {
  jobFilter(event.target.value);
});
var mainBox = document.querySelector(".job-container"); // Selecting the mainbox div
function renderJobCards(jobs) {
  jobs.forEach((job) => {
    var parentDiv,
      logoWidth,
      img,
      jobDescription,
      jobDescriptionDetail,
      header,
      undefineList,
      languageData,
      parentDiv = document.createElement("div");
    parentDiv.classList.add("job-box", "padding");
    parentDiv.setAttribute("data-role", job.role);
    parentDiv.setAttribute("data-level", job.level);
    parentDiv.setAttribute("data-languages", job.languages);
    parentDiv.setAttribute("data-tools", job.tools);

    // 2. Creating logo block.

    logoWidth = document.createElement("div");
    logoWidth.classList.add("logo-width");

    img = document.createElement("img");
    img.src = job.logo;

    logoWidth.append(img);
    parentDiv.append(logoWidth);

    // 3. Job Description block with if else statement

    jobDescription = document.createElement("div");
    jobDescription.classList.add("job-description");

    jobDescriptionDetail = document.createElement("div");
    jobDescriptionDetail.classList.add("job-description-detail");

    jobDescriptionDetail.append(spanList(job.company, ["companies"]));

    if (job.new) {
      jobDescriptionDetail.append(spanList("NEW", ["new", "padding"]));
    }

    if (job.featured) {
      jobDescriptionDetail.append(
        spanList("FEATURED", ["featured", "padding"])
      );
    }

    jobDescription.append(jobDescriptionDetail);
    parentDiv.append(jobDescription);

    // 4. Creating Header

    header = document.createElement("h4");
    header.classList.add("header");
    header.innerHTML = job.position;
    jobDescription.append(header);

    // 5. Creating Undefine List

    undefineList = document.createElement("ul");
    undefineList.classList.add("job-description-detail");

    undefineList.append(createList(job.postedAt, ["li-style-not"]));
    undefineList.append(createList(job.contract, []));
    undefineList.append(createList(job.location, []));
    jobDescription.append(undefineList);

    // 6. Language Data

    languageData = document.createElement("div");
    languageData.classList.add("language-data", "items-in-center");
    job.languages.forEach((language) => {
      languageData.append(
        spanList(language, ["padding", "back-ground", "margin-right"])
      );
    });

    parentDiv.append(languageData);
    mainBox.append(parentDiv);
  });

  function spanList(value, classList = []) {
    var span = document.createElement("span");
    span.innerHTML = value;
    span.classList.add(...classList);
    return span;
  }

  function createList(value, classList = []) {
    var list = document.createElement("li");
    list.innerHTML = value;
    list.classList.add(...classList);
    return list;
  }
}

function jobFilter(value) {
  var allJobs = document.querySelectorAll(".job-box");
  allJobs.forEach((job) => {
    if (
      job.dataset.role.toLowerCase().indexOf(value) > -1 ||
      job.dataset.level.toLowerCase().indexOf(value) > -1 ||
      job.dataset.languages.toLowerCase().indexOf(value) > -1 ||
      job.dataset.tools.toLowerCase().indexOf(value) > -1
    ) {
      job.style.display = "grid";
    } else {
      job.style.display = "none";
    }
  });
}

/** Clear Fields */
function clrField() {
  Inputfilter.value = "";
  mainBox.innerHTML = "";
  renderJobCards(data);
}
renderJobCards(data);
var clrBtn = document.querySelector(".clear");
clrBtn.classList.add("clear");
clrBtn.addEventListener("click", clrField);
