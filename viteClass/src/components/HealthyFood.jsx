// import './style.css'

export const HealthyFood = (props) => {
    // let foodItem = ["dal" ,"rice"," Green Vegetable" , "Roti" , "Salad"];
    let foodItem = [];


    // first way
    // if(foodItem.length === 0){
    //     return <h3>I am hungry</h3>
    // }

//  let message  = foodItem.length === 0 ? <h3>i am still hungry</h3>:null;

  return (
    <div>
    <h1 className="heading1">Lorem ipsum dolor sit amet consectetur.</h1>
    {/* // second way */}

    {/* {foodItem.length === 0 ? <h3> i am still hungry</h3> : null} */}

  {/* third way */}
    {/* {message} */}

    {/* fourthway */}
    {foodItem.length === 0 && <h3> i am still hungry</h3>}
    <ol className="list-group">
        {foodItem.map((x, index) => (
            <li key={index} className="list-group-item">{x}</li>
        ))}
    </ol>

    <p>{props.helthypara}</p>
</div>

  )
}

HealthyFood.defaultProps ={
  helthypara:"set name here"
}