import React from 'react'

const RecipeCard = (props) => {

    const {image, title, ingredients} = props;

    
    

  return (
    <div className='recipe-card'>
        <img src={image} alt="Food Image" />
        <div className='card-txt'>
           <h1>{title}</h1>
           <p>Ingredients: {ingredients.map((element) => element.original).join(", ")}</p>
        </div>
    </div>
  )
}

export default RecipeCard