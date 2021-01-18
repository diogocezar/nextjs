async function posts(req, res) {
  const { page = 1 } = req.query;
  const posts = await fetch(
    `https://www.diogocezar.com/wp-json/wp/v2/posts?page=${page}`
  );
  const postsJson = await posts.json();
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  res.json({
    date: new Date().toUTCString(),
    posts: postsJson,
  });
}

export default posts;
