package com.authendicationjwt.security.functionalities.module_creation;

import com.authendicationjwt.security.entity.module.Module;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
public class ModuleCreationController {

    private final ModuleCreationService moduleCreationService;

    @PostMapping("createmodule")
    public Module createModule(@RequestBody ModuleCreationRequest request){
        return moduleCreationService.createModule(request);
    }

    @DeleteMapping("deletemodule")
    public String deleteModule(@RequestBody ModuleDeletionRequest moduleDeletionRequest){
        moduleCreationService.deleteModule(moduleDeletionRequest);
        return "module deleted.";
    }



}
