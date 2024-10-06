package com.hackathon.voicebank.voicebank_maker.Voicebank;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class VoicebankResource {

    private VoicebankDaoService service;

    public VoicebankResource(VoicebankDaoService service) {
        this.service = service;
    }

    // GET voicebanks
    @GetMapping("/voicebanks")
    public List<Voicebank> getAllVoicebanks() {
        return service.getVoicebanks();
    }

    //GET id of voicebank
    @GetMapping("/voicebanks/{id}")
    public Voicebank getVoicebank(@PathVariable int id) {
        return service.getVoicebank(id);
    }

    //POST /voicebanks
    @PostMapping("/voicebanks")
    public ResponseEntity<Voicebank> createVoicebank(@RequestBody Voicebank voicebank) {
        Voicebank savedVoicebank = service.save(voicebank);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(savedVoicebank.getId())
                    .toUri();
        return ResponseEntity.created(location).build();
    }
}
