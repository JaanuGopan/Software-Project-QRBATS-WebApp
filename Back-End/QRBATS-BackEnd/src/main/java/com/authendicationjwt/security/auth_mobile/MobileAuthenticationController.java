package com.authendicationjwt.security.auth_mobile;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class MobileAuthenticationController {

    private final MobileAuthenticationService service;

    @PostMapping("/mobileregister")
    public ResponseEntity<MobileAuthenticationResponse> register(
             @RequestBody MobileRegisterRequest request
    ){
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/mobileauthendicate")
    public ResponseEntity<MobileAuthenticationResponse> register(
            @RequestBody MobileAuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }


}
