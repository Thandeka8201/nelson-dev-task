module.exports = (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const { data } = req.body;
  
    if (!data || typeof data !== "string") {
      return res.status(400).json({ error: "Invalid input: 'data' must be a string" });
    }
  
    const sortedChars = data.split("").sort();
  
    res.json({ word: sortedChars });
  };
  
