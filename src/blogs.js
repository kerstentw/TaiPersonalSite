const DEBUG = true;

BLOGS = {
  sample: {
    title: "Sample Blog",
    subtitle: "This is a sample blog",
    show: DEBUG,
    timestamp: new Date(),
    body: []
  }
}

let b_list = Object.keys(BLOGS).map(bl=>BLOGS[bl].show? {id: bl, title: BLOGS[bl].title, timestamp: BLOGS[bl].timestamp, subtitle: BLOGS[bl].timestamp} : null);
const BLOG_LIST = b_list.filter(blog=> !blog? false : blog);


module.exports = {
  articles: BLOGS,
  listing: BLOG_LIST
};
