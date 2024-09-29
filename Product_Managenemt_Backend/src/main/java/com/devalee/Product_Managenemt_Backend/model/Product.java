package com.devalee.Product_Managenemt_Backend.model;

import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;


@Document(collection = "product")
@Data

public class Product {
    @Id
    private String id;

    @NonNull
    private String productName;

    @NonNull
    private String description;

    @NonNull
    private Double price;

    @NonNull
    private String status;

}
