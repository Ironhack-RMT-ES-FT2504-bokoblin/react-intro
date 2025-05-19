
function Container(props) {
  console.log(props)
  return (
    <div style={{backgroundColor: props.color, padding: "20px"}}>

      {props.children}
      <p>{props.text}</p>

    </div>
  )
}

export default Container