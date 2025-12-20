exports.getAllContent = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "Demo Movie",
      type: "video",
      category: "Entertainment",
      duration: "2h 05m"
    },
    {
      id: 2,
      title: "Demo Song",
      type: "audio",
      category: "Music",
      duration: "4m 30s"
    }
  ]);
};

exports.searchContent = (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Search query required" });
  }

  res.status(200).json([
    {
      id: 1,
      title: `Result for "${query}"`,
      type: "video"
    }
  ]);
};