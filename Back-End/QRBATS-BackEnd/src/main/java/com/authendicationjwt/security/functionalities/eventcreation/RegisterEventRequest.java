package com.authendicationjwt.security.functionalities.eventcreation;

import com.authendicationjwt.security.entity.event.EventRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterEventRequest {
    private String eventName;
    private LocalDate eventDate;
    private LocalTime eventTime;
    private String eventVenue;
    private Integer eventModuleId;
    private String eventRole;
    private Integer eventAssignedUserId;
}
