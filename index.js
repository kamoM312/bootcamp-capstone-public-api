import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

app.use(express.static('public'));

app.get("/", async (req, res) => {
    const response = await axios.get(URL);
   
    const drink = {
        name: response.data.drinks[0]['strDrink'],
        recipe: response.data.drinks[0]['strInstructions'],
        image: response.data.drinks[0]['strDrinkThumb']
    }

    console.log(drink);

    res.render("index.ejs", drink)
})

app.listen(PORT, () => {
    console.log(`Connected on Port: ${PORT}`);
})