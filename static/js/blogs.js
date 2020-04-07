const BLOG_API = `/api/blog`;

function BlogHandler() {

  let getBlogList = async () => {
    let resp = await $.ajax({
      url: BLOG_API
    })
    return resp.data
  }

  let renderBlogList = async (_target_element) => {
    let article_list = [];
    let blog_list = await getBlogList();

    for (let i=0; i < blog_list.length; i++) {
      let cur_blog = blog_list[i];

      article_list.push(
        `<div class="item card">
          <div class="blog_card">
            <h2> ${cur_blog.title} </h2>
            <h5> ${cur_blog.subtitle}... </h5>
            <span> ${cur_blog.timestamp} </span><br/>
            <a href="${cur_blog.type== "medium"? cur_blog.link: "/blog/" + cur_blog.link}" target="_blank">View More > </a>
          </div>
        </div>`
      )
    }


    let frame = `
    <div id= "owl-carousel2" class="owl-theme owl-carousel">
      ${article_list.join("")}
    </div>`;

    console.log(frame)

    $(_target_element).html(frame);
  }

  let renderCarousel = (_target) => {
    const options = {
      items: 3,
      loop: false,
      margin: 15
    }

    $(_target).owlCarousel(options)
  }

  this.init = async ()=>{
    await renderBlogList("#blog_list_of_titles");
    renderCarousel("#owl-carousel2");
  }

  return {
    ...this
  }
}
