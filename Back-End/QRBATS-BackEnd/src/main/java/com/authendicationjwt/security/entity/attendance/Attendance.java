package com.authendicationjwt.security.entity.attendance;

import com.authendicationjwt.security.entity.event.Event;
import com.authendicationjwt.security.entity.student.Student;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Attendance")
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Attendance_id")
    private Integer attendanceId;

    @ManyToOne
    @JoinColumn(name = "Event_id")
    private Event event;

    @ManyToOne
    @JoinColumn(name = "Attendee_id")
    private Student attendee;

    @Column(name = "Attendance_date")
    private LocalDate attendanceDate;

    @Column(name = "Attendance_time")
    private LocalTime attendanceTime;

}
