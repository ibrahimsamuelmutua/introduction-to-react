
function Fruit(){

  const fruit1 = "Banana";
  const fruit2 = "Mango";
  const fruit3 = "Pineapple";
  return(
    <ul>
      <li>{fruit1}</li>
      <li>{fruit2}</li>
      <li>{fruit3.toUpperCase()}</li>
    </ul>
  );
}

export default Fruit;