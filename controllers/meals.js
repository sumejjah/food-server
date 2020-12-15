import axios from 'axios';

export const getMeals = async (req, res) => {
  const { body } = req;

  if(!body.q) {
    return res.status(400).json({ message: "Search keyword missing." });
  } 

  try {
    const result = await axios.get(
      `${process.env.ROOT_URL}/search?app_id=${
        process.env.APPLICATION_ID
      }&app_key=${encodeURIComponent(process.env.API_KEY)}&q=${req.body.q}`
    );

    res.status(200).json(result.data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const downloadMeal = (req, res) => {
  const { body } = req;

  if(!body.label || !body.ingredients || !body.ingredients.length) {
    return res.status(400).json({ message: "Missing meal name or ingredients." });
  }
  try {
    const result = {
      name: body.label,
      calories: body.calories,
      labels: body.healthLabels,
      ingredients: body.ingredients
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};