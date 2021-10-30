/**import('./data.json').then((data) => {
    renderJobCards(data);
})
const markup = `<div class=" job-box div-left-border-active padding  " data-keyword = "">
            <div class="logo-width">
                <img class="" src="./dist/images/photosnap.svg">
            </div>
            <div class="job-description ">
                <div class="job-description-detail">
                    <span class="companies">Photosnap</span>
                    <span class="new padding">NEW!</span>
                    <span class="featured padding">FEATURED</span>
                </div>
                <h4 class="header">Senior Frontend Developer</h4>
                <ul class=job-description-detail>
                    <li class="li-style-not">1d ago</li>

                    <li>Full Time</li>

                    <li>USA Only</li>
                </ul>
            </div>
            <div class="language-data items-in-center">
                <span class="padding back-ground margin-right">Frontend</span>
                <span class="padding back-ground margin-right">Senior</span>
                <span class="padding back-ground margin-right">HTML</span>
                <span class="padding back-ground margin-right">CSS</span>
                <span class="padding back-ground margin-right">Javascript</span>
            </div>
        </div>`
function renderJobCards(cards) {
    var mainBox = document.querySelector('.main-box');
    cards.forEach(card => {
        var parentDiv = document.createElement('div');
        parentDiv.classList.add('job-box', 'div-left-border-active', 'padding');
        var logoDiv = document.createElement('div');
        logoDiv.classList.add('logo-width');
        var img = document.createElement('img');
        img.src = card.logo;
        logoDiv.append(img);
        parentDiv.append(logoDiv);

        var jobDescription = document.createElement('div');
        jobDescription.classList.add('job-description');
        var jobDescriptionDetail = document.createElement('div');
        jobDescriptionDetail.classList.add('job-description-detail');
        jobDescriptionDetail.append(createSpan(card.company, ['companies']));

        if (card.new) {
            jobDescriptionDetail.append(createSpan('NEW', ['new', 'padding']));
        }
        if (card.featured) {
            jobDescriptionDetail.append(createSpan('FEATURED', ['featured', 'padding']));
        }

        jobDescription.append(jobDescriptionDetail);

        var header = document.createElement('h4');
        header.classList.add('header');
        header.innerHTML = card.position;
        jobDescription.append(header);

        var undefineList = document.createElement('ul');
        undefineList.classList.add('job-description-detail');
        undefineList.append(createList(card.postedAt, ['li-style-not"']));
        undefineList.append(createList(card.contract));
        undefineList.append(createList(card.location));
        jobDescription.append(undefineList);

        var langugageData = document.createElement('div');
        langugageData.classList.add('language-data', 'items-in-center');

        card.languages.forEach(language => {
            langugageData.append(createSpan(language, ['padding', 'back-ground', 'margin-right']));

        });

        parentDiv.append(jobDescription);
        parentDiv.append(langugageData);
        mainBox.append(parentDiv);

    });
}

function createSpan(value, classList= []) {

    var span = document.createElement('span');
    span.innerHTML = value;
    span.classList.add(...classList);
    return span;
}

function createList(value, classList= []) {

    var list = document.createElement('li');
    list.innerHTML = value;
    list.classList.add(...classList);
    return list;
}

/**
 * job-box data-keywords = 
 * 
 * 
 */
/*
import('./data.json').then((data) => {
    renderJobCards(data);
});

const markup = `<div class=" job-box div-left-border-active padding  " data-keyword = "">
<div class="logo-width">
    <img class="" src="./dist/images/photosnap.svg">
</div>

<div class="job-description ">
    <div class="job-description-detail">
        <span class="companies">Photosnap</span>
        <span class="new padding">NEW!</span>
        <span class="featured padding">FEATURED</span>
    </div>
    <h4 class="header">Senior Frontend Developer</h4>
    <ul class=job-description-detail>
        <li class="li-style-not">1d ago</li>

        <li>Full Time</li>

        <li>USA Only</li>
    </ul>
</div>

<div class="language-data items-in-center">
    <span class="padding back-ground margin-right">Frontend</span>
    <span class="padding back-ground margin-right">Senior</span>
    <span class="padding back-ground margin-right">HTML</span>
    <span class="padding back-ground margin-right">CSS</span>
    <span class="padding back-ground margin-right">Javascript</span>
</div>
</div>`

function renderJobCards(cards) {

    var mainBox = document.querySelector('.main-box');

    cards.forEach(card => {
        // 1.  Div of Logo 
        var parentDiv, logoDiv, img, jobDescription, jobDescriptionDetail, header, undefineList, languageData;
        parentDiv = document.createElement('div');
        parentDiv.classList.add('job-box', 'div-left-border-active', 'padding');

        logoDiv = document.createElement('div');
        logoDiv.classList.add('logo-width');
        img = document.createElement('img');
        img.src = card.logo;
        logoDiv.append(img);
        parentDiv.append(logoDiv);

        // 2. Second Div of Job Description
        jobDescription = document.createElement('div');
        jobDescription.classList.add('job-description');

        jobDescriptionDetail = document.createElement('div');
        jobDescriptionDetail.classList.add('job-description-detail');

        jobDescriptionDetail.append(createSpan(card.company, ['companies']));

        if (card.new) {
            jobDescriptionDetail.append(createSpan('NEW', ['new', 'padding']));
        }
        if (card.featured) {
            jobDescriptionDetail.append(createSpan('FEATURED', ['featured', 'padding']));
        }

        jobDescription.append(jobDescriptionDetail);

        // Header 4 

        var header = document.createElement('h4');
        header.classList.add('header');
        header.innerHTML = card.position;
        jobDescription.append(header);

        // 4.1 Undefined List 
        undefineList = document.createElement('ul');
        undefineList.classList.add('job-description-detail');
        undefineList.append(createList(card.postedAt, ['li-style-not']));
        undefineList.append(createList(card.contract))
        undefineList.append(createList(card.location))
        jobDescription.append(undefineList);

        // 5 Language Data 
        languageData = document.createElement('div');
        languageData.classList.add('language-data', 'items-in-center'); // Error languageData instead of card.languages
        card.languages.forEach(languages => {
            languageData.append(createSpan(languages, ['padding', 'back-ground', 'margin-right']));
        });

        // 6  Now appending all child divs in parent Div 
        parentDiv.append(jobDescription);
        parentDiv.append(languageData);


        // 7 Putting all child divs includinf parentDiv in main div
        mainBox.append(parentDiv);
    });
}

function createSpan(value, classList = []) {

    var span = document.createElement('span');
    span.innerHTML = value;
    span.classList.add(...classList);
    return span;
}
function createList(value, classList = []) {
    var list = document.createElement('li');
    list.innerHTML = value;
    list.classList.add(...classList);
    return list;
}
*/
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
