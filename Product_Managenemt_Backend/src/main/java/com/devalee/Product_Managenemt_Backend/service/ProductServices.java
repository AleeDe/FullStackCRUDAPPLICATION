package com.devalee.Product_Managenemt_Backend.service;

import com.devalee.Product_Managenemt_Backend.model.Product;
import com.devalee.Product_Managenemt_Backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ProductServices {
    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product){
        productRepository.save(product);
        return product;
    }

    public List<Product> getAllProduct(){
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(String id){
        return productRepository.findById(id);
    }

    public boolean deleteProductById(String id){
        productRepository.deleteById(id);
        return true;
    }






}
