import React,{useState, useEffect} from 'react';

const FetchData = () => {
    const [product, setProduct] = useState([])
    const [skip, setSkip] = useState(0);
    
    const fetchApi = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,thumbnail`)
        const data = await response.json();
        console.log(data.products)
        setProduct([...data.products]) 
    }

    const handlePre = () => {
        if(skip <= 0){
            return
        }
        setSkip( skip - 10)
    }
    const handleNxt = () => {
        setSkip( skip + 10)
    }

    useEffect(() => {
        if(product){
        fetchApi();
        // react-hooks/exhaustive-deps
        }
    }, [skip])
    
  return (
      <>
      <h1>Dummy API List</h1>
        <div>
            <p>Page No {(skip === 0 || skip <= 0) ? '1' : (skip/10 + 1) }</p>
          <button onClick={handlePre}>Previous</button>
            ----
          <button onClick={handleNxt}>Next</button>
          </div>
      <ul style={{listStyle: 'none',  padding: '0'}}>
          {product.map((item, index) => (
          <li key={index} style={{border: '1px solid #ccc',margin: '10px auto 0',textAlign: 'center'}} >
              <img src={item.thumbnail} alt="" width="100" height="100" />
              <h4>{item.title}</h4>
          </li>
          ))}
      </ul>

      </>
  )
}

export default FetchData



