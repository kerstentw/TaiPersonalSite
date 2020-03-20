


function languageHandler(_languages){
  let lang_keys = Object.keys(_languages)

  //first in list is default
  this.current = lang_keys[0];

  let lolShiv = () => {
    window.location = "/willsmithrulez";
  }

  let __renderLanguageSelector = (_target) => {

    let op_frames = lang_keys.map(id_key =>
      `<option data-lang="${id_key}" class="lang_sel">${_languages[id_key].label}</option>`
    );

    op_frames.push('<option data-lang="lol" id="retro"> 1996 </option>');

    let html_frame = `<select id="lang_options"> ${op_frames.join("")} </select>`;

    $(_target).html(html_frame);

  }

  let renderLanguage = (_language_key) => {
    for (render_key of Object.keys(_languages[_language_key])) {
      $(render_key).text(_languages[_language_key][render_key])
    }

  }

  let __listenLanguageSelect = () => {
    $("#lang_options").on("change", (ev)=>{
      this.current = $("#lang_options option:selected").data().lang;

      if (this.current === "lol") {
        lolShiv();
      }

      renderLanguage(this.current);
    })
  }

  let setListeners = () => {
    __listenLanguageSelect();

  }

  this.init = ()=>{
    __renderLanguageSelector("#language_selector");
    setListeners();
    renderLanguage(this.current);


  }

  return {
    ...this
  }
}


function renderCarousel(_target) {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000
  }

  $(_target).owlCarousel(options);
}

// MAIN

$(document).ready( async ()=>{
  let langs = await $.ajax({url:"/languages"});

  let lang_handler = new languageHandler(langs);
  lang_handler.init();

  renderCarousel(".owl-carousel");

})
