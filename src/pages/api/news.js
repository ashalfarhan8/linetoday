import { API_ENDPOINT, API_URL } from "../../helper/constant";

export default async (req, res) => {
  try {
    const response = await fetch(`${API_URL}${API_ENDPOINT}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.statusCode = 500;
    res.json({ err });
  }
};
