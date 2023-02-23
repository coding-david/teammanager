package de.vw.faculty.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TeammateController {

    @Autowired
    private TeammateRepository teammateRepository;


    @GetMapping("/team")
    private ResponseEntity<List<Teammate>> getAllTeammates(){
        return ResponseEntity.ok(this.teammateRepository.findAll());
    }

    @PostMapping("/team")
    private ResponseEntity<Teammate> postTeammate(@RequestBody Teammate teammate){
        this.teammateRepository.save(teammate);
        return ResponseEntity.ok(teammate);
    }
}
