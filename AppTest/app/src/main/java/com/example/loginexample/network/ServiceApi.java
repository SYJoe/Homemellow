package com.example.loginexample.network;

import com.example.loginexample.data.JoinData;
import com.example.loginexample.data.JoinResponse;
import com.example.loginexample.data.LoginData;
import com.example.loginexample.data.LoginResponse;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface ServiceApi {
    @POST("/user/login")
    Call<LoginResponse> userLogin(@Body LoginData data);

    @POST("/user/join")
    Call<JoinResponse> userJoin(@Body JoinData data);
}