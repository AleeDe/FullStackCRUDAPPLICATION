package com.devalee.Product_Managenemt_Backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class healthcheck {
    @GetMapping("/check")
    public String healthcheck(){
        return "ok runing SucceFully";
    }
}