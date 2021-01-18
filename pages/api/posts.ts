import Cors from "cors";

const init = (middleware) => {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

const cors = init(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

async function posts(req, res) {
  await cors(req, res);
  const { page = 1, slug = null } = req.query;
  let op = null;
  let value = null;
  if (slug) {
    op = "slug";
    value = slug;
  } else {
    op = "page";
    value = page;
  }
  const baseUrl = "https://www.diogocezar.com/wp-json/wp/v2/posts";
  const url = `${baseUrl}?${op}=${value}`;
  const posts = await fetch(url);
  const total = parseInt(posts.headers.get("x-wp-total"), 10);
  const totalPages = parseInt(posts.headers.get("x-wp-totalpages"), 10);
  const postsJson = await posts.json();
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  res.json({
    date: new Date().toUTCString(),
    posts: postsJson,
    total: total,
    totalPages: totalPages,
  });
}

export default posts;
