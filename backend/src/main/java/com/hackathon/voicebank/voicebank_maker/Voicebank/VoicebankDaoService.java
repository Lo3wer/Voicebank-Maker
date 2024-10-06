package com.hackathon.voicebank.voicebank_maker.Voicebank;

import org.springframework.stereotype.Component;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Component
public class VoicebankDaoService {

    private static List<Voicebank> voicebanks = new ArrayList<>();

    private static int count = 0;

    static {
        voicebanks.add(new Voicebank(++count, "recording 1", new File("rec1.wav")));
        voicebanks.add(new Voicebank(++count, "recording 2", new File("rec2.wav")));
        voicebanks.add(new Voicebank(++count, "recording 3", new File("rec3.wav")));
    }

    public List<Voicebank> getVoicebanks() {
        return voicebanks;
    }

    public Voicebank getVoicebank(int id) {
        Predicate<? super Voicebank> predicate = voicebank -> voicebank.getId().equals(id);
        return voicebanks.stream().filter(predicate).findFirst().orElse(null);
    }

    public Voicebank save(Voicebank voicebank) {
        voicebank.setId(++count);
        voicebanks.add(voicebank);
        return voicebank;
    }
}
