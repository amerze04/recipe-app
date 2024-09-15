import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard";


function App() {

  const apiKey = import.meta.env.VITE_API_KEY;

  const [recipes, setRecipes] = useState([]);

  async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`);
    const data =  await response.json();

    return data.recipes;
}

async function initialize() {
  let temp = await getRecipes();
  setRecipes(temp);
}

async function showMoreRecipes() {
  let temp = await getRecipes();
  setRecipes([...recipes, ...temp]);
}


  useEffect(() => {
      initialize();
  }, []);

  console.log(recipes);
  

  return (
    <>

    <header>
        <h1>Food Recipe App</h1> 
    </header>

    <div className="recipes">
    {recipes.length && recipes.map((recipe, index) => <RecipeCard key={index} image={recipe.image} title={recipe.title} ingredients={recipe.extendedIngredients} />)}
    </div>

    <button onClick={showMoreRecipes} className="show-more-btn">Show more</button>
      
    </>
  )
}

export default App
