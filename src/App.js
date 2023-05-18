import React,{useState} from 'react'
import Products from './Products.js';

const App= () => {
  const [search,setsearch]=useState('');
  const [data,setData] = useState([]);
const YOUR_APP_ID= "e9a45b87";
const YOUR_APP_KEY="a7bdb33f5b75f884d278317f45c8ce89" ;

  const submitHandler = e => {
    e.preventDefault();
  fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=60&calories=591-722&health=alcohol-free`).then(
  response => response.json()
  ).then(
    data => setData(data.hits)
  )
  }
  return (
    <div >
      <center>
        <h3>Food Recipe App</h3>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setsearch(e.target.value)}/>  <br/> <br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        {data.length>=1 ? <Products data={data} />:null}

      </center>
      
    </div>
  );
}

export default App;
