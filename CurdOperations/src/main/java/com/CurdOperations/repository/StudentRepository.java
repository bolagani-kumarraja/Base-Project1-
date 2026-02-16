package com.CurdOperations.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CurdOperations.entity.Student;

import lombok.Data;

@Repository

public interface StudentRepository extends JpaRepository<Student, Long> {

}

