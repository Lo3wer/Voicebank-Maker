package com.hackathon.voicebank.voicebank_maker.Voicebank;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
