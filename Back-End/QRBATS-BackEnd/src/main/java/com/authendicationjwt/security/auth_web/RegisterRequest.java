package com.authendicationjwt.security.auth_web;

import com.authendicationjwt.security.entity.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String userName;
    private String password;
    private Role role;
    private Integer departmentId;
}
