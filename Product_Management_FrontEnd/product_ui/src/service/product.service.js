import axios from "axios";

const API_URL = "http://localhost:8080";

class ProductService {

    saveProduct(product){
        return axios.post(API_URL,product);
    }
    getAllProduct(){
        return axios.get(API_URL+"/");
    }

    getProductById(id){
        return axios.get(API_URL+"/id/"+id);
    }

    DeleteProductById(id){
        return axios.delete(API_URL+"/id/"+id);
    }

    editProductById(product,id){
        return axios.put(API_URL+"/id/"+id,product);
    }
}
export default new ProductService;

