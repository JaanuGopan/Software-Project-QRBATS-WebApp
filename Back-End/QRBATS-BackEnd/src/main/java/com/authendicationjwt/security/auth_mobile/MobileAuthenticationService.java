package com.authendicationjwt.security.auth_mobile;


import com.authendicationjwt.security.config_web.JwtService;
import com.authendicationjwt.security.entity.student.Student;
import com.authendicationjwt.security.entity.student.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MobileAuthenticationService {

    private final StudentRepository repository;
    private final PasswordEncoder mobilePasswordEncoder;

    private final JwtService mobileJwtService;

    private final AuthenticationManager authenticationManager;
    public MobileAuthenticationResponse register(MobileRegisterRequest request) {
        var student = Student.builder()
                .studentName(request.getStudentName())
                .indexNumber(request.getIndexNumber())
                .studentEmail(request.getStudentEmail())
                .userName(request.getUserName())
                .password(mobilePasswordEncoder.encode(request.getPassword()))
                .currentSemester(request.getCurrentSemester())
                .departmentId(request.getDepartmentId())
                .studentRole(request.getStudentRole())
                .build();
        repository.save(student);
        var mobileJwtToken = mobileJwtService.generateToken(student);
        return MobileAuthenticationResponse.builder()
                .token(mobileJwtToken)
                .build();
    }

    public MobileAuthenticationResponse authenticate(MobileAuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUserName(),
                        request.getPassword()
                )
        );
        var student = repository.findByUserName(request.getUserName())
                .orElseThrow();

        var mobileJwtToken = mobileJwtService.generateToken(student);
        return MobileAuthenticationResponse.builder()
                .token(mobileJwtToken)
                .build();
    }
}
