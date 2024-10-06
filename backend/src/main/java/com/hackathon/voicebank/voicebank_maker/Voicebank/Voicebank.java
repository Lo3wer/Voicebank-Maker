package com.hackathon.voicebank.voicebank_maker.Voicebank;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.io.File;

public class Voicebank {

    private Integer id;
    @Size(min = 2, message = "Name must be at least 2 characters")
    private String name;
    @NotNull(message = "Input file")
    private File file;

    public Voicebank(Integer id, String name, File file) {
        super();
        this.id = id;
        this.name = name;
        this.file = file;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public File getFile() {
        return file;
    }

    public void setFile(File file) {
        this.file = file;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "Voicebank{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", file=" + file +
                '}';
    }
}
