package com.authendicationjwt.security.functionalities.module_creation;

import com.authendicationjwt.security.entity.module.Module;
import com.authendicationjwt.security.entity.module.ModuleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ModuleCreationService {

    private final ModuleRepository moduleRepository;

    public Module createModule(ModuleCreationRequest moduleCreationResponse) {
        if(moduleCreationResponse != null){
            Module module = new Module();
            module.setModuleCode(moduleCreationResponse.getModuleCode());
            module.setModuleName(moduleCreationResponse.getModuleName());
            module.setModuleEnrolmentKey(moduleCreationResponse.getModuleEnrolmentKey());
            module.setSemester(moduleCreationResponse.getSemester());
            module.setLectureId(moduleCreationResponse.getLectureId());
            module.setDepartmentId(moduleCreationResponse.getDepartmentId());

            Module createdModule = moduleRepository.save(module);

            if (createdModule == null) {
                throw new ModuleCreationException("Module not created.");
            }

            return createdModule;
        }else {
            throw new ModuleCreationException("Module creation response is empty.");
        }

    }

    public void deleteModule(ModuleDeletionRequest moduleDeletionRequest){
        String deleteModuleCode = moduleDeletionRequest.getModuleCode();
        List<Module> deleteModule = moduleRepository.findByModuleCode(deleteModuleCode);
        if(deleteModule != null){
            moduleRepository.delete(deleteModule.getFirst());
        }
        else {
            throw new RuntimeException("module not found.");
        }
    }
}
