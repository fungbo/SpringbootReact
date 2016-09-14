package com.thoughtworks.controller;

import com.thoughtworks.model.Head;
import com.thoughtworks.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ReportController {
    @Autowired
    ReportService reportService;

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "head", headers = "x-requested-with=XMLHttpRequest")
    @ResponseBody
    public List<Head> getTableHead() {
        return reportService.getTablehead();
    }
}
