package com.devalee.Product_Managenemt_Backend.repository;

import com.devalee.Product_Managenemt_Backend.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;


public interface ProductRepository extends MongoRepository<Product,String> {
}
