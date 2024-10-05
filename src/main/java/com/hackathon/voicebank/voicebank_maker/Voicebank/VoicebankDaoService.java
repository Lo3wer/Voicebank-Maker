package com.hackathon.voicebank.voicebank_maker.Voicebank;

import org.springframework.stereotype.Component;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Component
public class VoicebankDaoService {

    private static List<Voicebank> voicebanks = new ArrayList<>();

    static {
        voicebanks.add(new Voicebank(1, "recording 1", new File("rec1.wav")));
    }

    public List<Voicebank> getVoicebanks() {
        return voicebanks;
    }
}
