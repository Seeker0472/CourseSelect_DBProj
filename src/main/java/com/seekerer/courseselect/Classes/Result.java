package com.seekerer.courseselect.Classes;

public class Result {
    //响应码
    private Integer code;
    //响应信息
    private String msg;
    //响应数据
    private Object data;
    public Result() {
    }
    public Result(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }
    public Result(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public static Result success() {
        return new Result(200, "success");
    }
    public static Result success(Object data) {
        return new Result(200, "success", data);
    }
    public static Result error() {
        return new Result(500, "error");
    }
    public static Result error(String msg) {
        return new Result(500, msg);
    }
    public static Result error(Integer code, String msg) {
        return new Result(code, msg);
    }
    public static Result error(Integer code, String msg, Object data) {
        return new Result(code, msg, data);
    }
    //getter和setter方法
    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
