const DEBUG = process.env.DEBUG;

BLOGS = {
  sample: {
    type: "featured",
    link: "sample",
    title: "Sample Blog",
    subtitle: "This is a sample blog",
    show: DEBUG,
    timestamp: new Date(),
    body: []
  },
  risk_man: {
    type: "medium",
    link: "https://medium.com/proof-of-fintech/weekly-update-17-january-2020-some-thoughts-on-financial-risk-analysis-defi-c049139cfe94",
    title: "Some Thoughts on Financial Risk and Defi",
    subtitle: "Regardless of platform, we are interested in seeing if there are ways to compose structured products which help to offset, spread out, or mitigate certain risk factors.",
    show: true,
    timestamp: new Date(1579219200000),
    body: []
  },
  react_indicators: {
    type: "medium",
    link: "https://medium.com/proof-of-fintech/implementing-custom-line-indicators-with-react-stockcharts-alpha-ac30eb7aa7a7",
    title: "Implementing Custom Indicators with React Stockcharts",
    subtitle: "React Stockcharts is young which means many of the interfaces and the source itself can be a bit of a hassle to implement",
    show: true,
    timestamp: new Date(1539475200000),
    body: []
  },
  react_guide: {
    type: "medium",
    link: "https://medium.com/proof-of-fintech-devblog/an-hr-managers-guide-to-hiring-react-redux-developers-b1a47b827fb8",
    title: "An HR Manager's guide to hiring React",
    subtitle: "A look at what 'other' skills a developer's resume says.",
    show: true,
    timestamp: new Date(1537056000000),
    body: []
  }
}

let b_list = Object.keys(BLOGS).map(bl=>BLOGS[bl].show? {id: bl, type: BLOGS[bl].type, link: BLOGS[bl].link, title: BLOGS[bl].title, timestamp: BLOGS[bl].timestamp, subtitle: BLOGS[bl].subtitle} : null);
const BLOG_LIST = b_list.filter(blog=> !blog? false : blog);


module.exports = {
  articles: BLOGS,
  listing: BLOG_LIST
};
