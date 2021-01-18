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
  const { page = 1 } = req.query;
  const posts = await fetch(
    `https://www.diogocezar.com/wp-json/wp/v2/posts?page=${page}`
  );
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
