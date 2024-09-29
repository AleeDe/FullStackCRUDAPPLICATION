import React, { useState } from 'react'
import ProductService from '../service/product.service';
import axios from 'axios';

const API_URL = "http://localhost:8080";

const AddProduct = () => {

    const [product,setProduct]=useState({
        productName:"",
        description:"",
        price:0,
        status:""
    });

    const [msg,setMsg]=useState("");

    const handleChange=(e)=>{
        const value = e.target.value;
        setProduct({...product,[e.target.name]:value});
    }

    const productRegsiter=async (e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080",product);
            console.log("SuccessFully Uploaded");
            setMsg("SuccessFully Uploaded");
            setProduct({
                productName:"",
                description:"",
                price:0,
                status:""
            });
        } catch (error) {
            console.log("catch error: ",error)
        }
    };
  return (
   <>
   <div className='container mt-3 row '>
    <div className='row'>
        <div className='col-md-6 offset-ms-3'>
        {
        msg && <p className='fs-1 text-center text-success'>{msg}</p>
      }
        <div className='card'>
        <div className='card-body'>
            <div className='card-header fs-2 text-center'> 
            
            <h1 className='fs-1 text-center text-success pb-md-3'>Add Product</h1>
      </div>
            <form onSubmit={(e)=>productRegsiter(e)}>
            <div className="mb-3">
                    </div>
                <div className="mb-3">
                    <label>Enter Product Name</label>
                    <input type='text' name="productName" className='form-control' onChange={(e)=>handleChange(e)}
                    value={product.productName}/> 
                    
                    </div>

                    <div className="mb-3">
                    <label>Enter Description</label>
                    <input type='text' name="description" className='form-control' onChange={(e)=>handleChange(e)}
                    value={product.description}/> 
                    </div>

                    <div className="mb-3">
                    <label>Enter Product Price</label>
                    <input type='number' name="price" className='form-control' onChange={(e)=>handleChange(e)}
                    value={product.price}/> 
                
                    </div>

                    <div className="mb-3">
                    <label>Product Status</label>
                    <input type='text' name="status" className='form-control' onChange={(e)=>handleChange(e)}
                    value={product.status}/> 
                    </div>
                    <button className='btn btn-primary col-md-12'>Add Product</button>
                    
            </form>
        
        </div>
        </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default AddProduct
