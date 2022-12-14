package com.db.webapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "v10")
public class V10 {

    @Id
    @Column(name = "time")
    private String time;
    @Column(name = "y")
    private String y;
    @Column(name = "info")
    private String info;

    public V10() {
    }

    public V10(String time, String y, String info) {
        this.time = time;
        this.y = y;
        this.info = info;
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getY() {
        return this.y;
    }

    public void setY(String y) {
        this.y = y;
    }

    public String getInfo() {
        return this.info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public V10 time(String time) {
        setTime(time);
        return this;
    }

    public V10 y(String y) {
        setY(y);
        return this;
    }

    public V10 info(String info) {
        setInfo(info);
        return this;
    }

}