function FoodCard(props) {

  console.log(props)

  return (
    <div style={{backgroundColor: props.bg}}>
      <span>{props.emoji}</span>
      <h4>{props.foodType}: {props.foodName}</h4>
      <p>Description: {props.description}</p>
      <p>Lo mejor de nuestra cocina!</p>
    </div>
  )

}

export default FoodCard