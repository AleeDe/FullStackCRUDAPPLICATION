import axios from 'axios';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
export default function Home() {

  const [products,setProduct]=useState([]);
  const [msg,setMsg]=useState("");

  useEffect(()=>{
    init();
  },[]);
  const init=()=>{
    loadProduct();
  }

  const loadProduct = async () => {
    try {
      const result = await axios.get("http://localhost:8080/");
      if (result.data.length === 0) {
        // Display a message or leave the page blank
        console.log("No products available in the inventory.");
        setProduct([]);
      } else {
        console.log(result.data);
        setProduct(result.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Handle 404 error
        console.log("No products available in the inventory.");
        setProduct([]);
      } else {
        // Handle other errors
        console.error("An error occurred:", error);
      }
    }
  };
  
  
  const deleteProduct = async (myid) => {
    const result = await axios.delete(`http://localhost:8080/id/${myid}`);
    setMsg("Delete SuccesFully");
    init();
    return result;
  };
  
  return (
    <div className="container">
      <div className="py-4">
      {
        msg && <p className='fs-3 text-center text-success'>{msg}</p>
      }
      <h1 className='fs-1 text-center text-success pb-md-3'>All Product List</h1>
      
      <table className="table border shadow">
      
  <thead>
    <tr>
      <th scope="col">S No</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price </th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      
  {
  products.map((product, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th> 
      <td>{product.productName}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.status}</td>
      <td>
        <Link to={"editProduct/" + product.id} className='btn btn-outline-primary mx-2'>Edit</Link>
        <button onClick={() => deleteProduct(product.id)} className='btn btn-danger mx-2'>Delete</button>
      </td>
    </tr>
  ))
}

    
    
  </tbody>
</table>
      </div>
    </div>
  )
}
