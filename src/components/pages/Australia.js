import Country from "../Country";

const Australia = ({ setRecipes, recipes }) => {
  return (
    <div>
      <Country recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
};

export default Australia;
