package com.devalee.Product_Managenemt_Backend.controller;

import com.devalee.Product_Managenemt_Backend.model.Product;
import com.devalee.Product_Managenemt_Backend.service.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController()
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductServices productServices;

    @PostMapping
    public ResponseEntity<String> saveProduct(@RequestBody Product product){
        productServices.saveProduct(product);
        return new ResponseEntity<>(product.toString(), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Product>> GetAllProduct(){
        List<Product> list = productServices.getAllProduct();
        return list.isEmpty() ? new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(list);
    }

    @GetMapping("id/{myid}")
    public ResponseEntity<Product> GetProductById(@PathVariable String myid){
        Optional<Product> product = productServices.getProductById(myid);
        return product.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("id/{myid}")
    public ResponseEntity<String> DeleteProductById(@PathVariable String myid){
        Optional<Product> product = productServices.getProductById(myid);

        if (product.isPresent()){
            productServices.deleteProductById(myid);
            return new ResponseEntity<>("Delete SuccessFully",HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>("Document Not Founded",HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("id/{myid}")
    public ResponseEntity<String> EditById(@RequestBody Product product,@PathVariable String myid){
        Product old = productServices.getProductById(myid).orElse(null);

        if (old!=null){
            old.setProductName(product.getProductName()!=null && !product.getProductName().equals("")?product.getProductName():old.getProductName());
            old.setDescription(product.getDescription()!=null && !product.getDescription().equals("")?product.getDescription():old.getDescription());
            old.setPrice(product.getPrice()!=null && !product.getPrice().equals("0")?product.getPrice():old.getPrice());
            old.setStatus(product.getStatus()!=null && !product.getStatus().equals("")?product.getStatus():old.getStatus());
            productServices.saveProduct(old);
            return new ResponseEntity<>("Update SuccessFully",HttpStatus.ACCEPTED);
        }
        else {
            return new ResponseEntity<>("Document Not Founded",HttpStatus.NOT_FOUND);
        }

    }

}
