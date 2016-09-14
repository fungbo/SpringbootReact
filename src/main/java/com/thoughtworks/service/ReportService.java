package com.thoughtworks.service;

import com.thoughtworks.model.Head;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReportService {

    public List<Head> getTablehead() {
        List<Head> data = new ArrayList<Head>();
        data.add(new Head("SARAMPO 055_Menos de 9 meses"));
        data.add(new Head("SARAMPO 055_9-23 meses_Nāo Vacinados"));
        data.add(new Head("SARAMPO 055_9-23 meses_Vacinados"));
        data.add(new Head("SARAMPO 055_24 meses c mais"));
        data.add(new Head("037 TÉTANO RECÉM NASCIDOS"));
        data.add(new Head("MALARIA 084_0-4 anos"));
        data.add(new Head("MALARIA 084_5 anos +"));
        data.add(new Head("045 PARALISIA FLÁCIDA AGUDA"));
        data.add(new Head("071 RAIVA"));
        data.add(new Head("DIARREIA 009_0-4 anos"));
        data.add(new Head("DIARREIA 009_5-14 anos"));
        data.add(new Head("DIARREIA 009_15 anos +"));
        data.add(new Head("009.2 DISENTERIA"));
        data.add(new Head("001 CÓLERA"));
        data.add(new Head("020 PESTE"));
        data.add(new Head("MENINGITE *036_0-4 anos"));
        data.add(new Head("MENINGITE *036_5 anos +"));

        return data;
    }
}
