
function bonafidesHandler(_targets_array) {
  let getBonefides = async () => {
    const options = {
      url: "/bonefides",
      methods: "GET"
    }

    let bone_data = await $.ajax(options);

    return bone_data;
  }

  let renderAccordion = (_target) => {
    //var acc = document.getElementsByClassName(_target);
    console.log("acc of: ", _target)

    let acc = document.getElementById(_target);

    acc.addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  let structureEduExpDataToHTML = (_bon_object) => {
    let keys = Object.keys(_bon_object);
    let bona_arr = [];
    let bona_frame = '';

    for (let i = 0; i < keys.length; i++) {
      let curr_key = keys[i];
      let bonafides = _bon_object[curr_key];

      bona_frame += `
        <button id="${bonafides.id}" class="accordion">
          <div class="row">
            <div class="col-md-5">
              <strong>${bonafides.name}</strong>
            </div>
            <div class="col-md-7">
              ${bonafides.dates[0]} - ${bonafides.dates[1]}
            </div>
          </div>
        </button>

        <div class="panel">
          <br/>
          <div class="row">
            <div class="col-md-2">
              <img class="pro_logo_img" src=${bonafides.logo}>
            </div>
            <div class="col-md-10">
              <div>
                <h4>${bonafides.location} </h4>
              </div>
              <div>
               <h5> ${bonafides.title} </h5>
              </div>
              <ul>
                <li>${bonafides.bullet_1}</li>
                <li>${bonafides.bullet_2}</li>
                <li>${bonafides.bullet_3}</li>
              </ul>
            </div>
          </div>
        </div>
        `

        bona_arr.push(bonafides.id);
    }

    return [bona_arr,bona_frame];
  }

  let structureSkillsToHTML = (_bon_object) => {
    let keys = Object.keys(_bon_object);
    let bona_arr = [];
    let bona_frame = '';

    for (let i = 0; i < keys.length; i++) {
      let curr_key = keys[i];
      let bonafides = _bon_object[curr_key];

      bona_frame += `
      <button id="${bonafides.id}" class="accordion"> ${bonafides.name}</button>
      <div class="panel">
        <br/>
        ${bonafides.blurb}
        <br/>
        <br/>
      </div>
      `

      bona_arr.push(bonafides.id);
    }

    return [bona_arr, bona_frame];
  }

  let renderWorkDataToDom = (_html_frame, _work_tar) => {
      $(_work_tar).html(_html_frame);
  }

  let renderSkillsDataToDom = (_html_frame_array, _skill_tars) => {

  }

  let accordifyElements = (_target) => {

  }


  this.init = async (_work_tars, _skills_tars) => {
    let bonafide_data = await getBonefides();
    let edu_struct = structureEduExpDataToHTML(bonafide_data.education);
    let work_struct = structureEduExpDataToHTML(bonafide_data.work_exp);
    let skills_struct = structureSkillsToHTML(bonafide_data.related_exp);

    renderWorkDataToDom(edu_struct[1], _work_tars[0]);
    renderWorkDataToDom(work_struct[1], _work_tars[1]);
    renderWorkDataToDom(skills_struct[1], _skills_tars[0]);

    let to_accord = new Array();
    to_accord.push(...work_struct[0]);
    to_accord.push(...edu_struct[0]);
    to_accord.push(...skills_struct[0]);

    console.log(to_accord)

    for (acc of to_accord) {
      renderAccordion(acc);
    }
  }

  return {
    ...this
  }

}

$(document).ready(async ()=>{
  const REGISTERED_EDU_WORK = ["#education_accord", "#work_accord"];
  const REGISTERED_SKILLS = ["#skills_accord"];

  let bonaHandler = new bonafidesHandler();
  bonaHandler.init(REGISTERED_EDU_WORK, REGISTERED_SKILLS);
})
