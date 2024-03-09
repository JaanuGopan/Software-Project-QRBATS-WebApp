package com.authendicationjwt.security.entity.event;

import com.authendicationjwt.security.entity.user.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data // lombok Data to add setters and getters and more automatically (reduce the boilerplate)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Event_id")
    private Integer eventId;

    @Column(name = "Event_name")
    private String eventName;

    @Column(name = "Event_date")
    private LocalDate eventDate;

    @Column(name = "Event_venue")
    private String eventVenue;

    @Column(name = "Event_time")
    private LocalTime eventTime;

    @Column(name = "Event_assigned_user_id")
    private Integer eventAssignedUserId;

    @Column(name = "Event_module_id")
    private Integer eventModuleId;

    @Enumerated(EnumType.STRING)
    private EventRole eventRole;


}
