package com.authendicationjwt.security.auth_mobile;

import com.authendicationjwt.security.entity.student.StudentRole;
import com.authendicationjwt.security.entity.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MobileRegisterRequest {
    private String studentName;
    private String indexNumber;
    private String studentEmail;
    private String userName;
    private String password;
    private StudentRole studentRole;
    private Integer departmentId;
    private Integer currentSemester;
}
