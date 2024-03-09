package com.authendicationjwt.security.functionalities.eventcreation;

import com.authendicationjwt.security.entity.event.Event;
import com.authendicationjwt.security.entity.event.EventRepository;
import com.authendicationjwt.security.entity.event.EventRole;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EventCreationService {

    private final EventRepository repository;



    public void createEvent(RegisterEventRequest request){
        Event event = new Event();
        event.setEventName(request.getEventName());
        event.setEventDate(request.getEventDate());
        event.setEventTime(request.getEventTime());
        event.setEventVenue(request.getEventVenue());
        event.setEventRole(EventRole.valueOf(request.getEventRole()));
        event.setEventAssignedUserId(request.getEventAssignedUserId());
        event.setEventModuleId(request.getEventModuleId());
        repository.save(event);
    }

}
