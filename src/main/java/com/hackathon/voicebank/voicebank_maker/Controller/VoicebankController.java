package com.hackathon.voicebank.voicebank_maker.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VoicebankController {

    @GetMapping(path = "/voicebank")
    public String Voicebank() {
        return "Voicebank";
    }
}
