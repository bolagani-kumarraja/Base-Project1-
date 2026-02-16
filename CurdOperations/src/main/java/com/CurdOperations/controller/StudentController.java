package com.CurdOperations.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CurdOperations.entity.RegisterEntity;
import com.CurdOperations.entity.Student;
import com.CurdOperations.services.StudentService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController { 
	@Autowired    
	private final StudentService studentService;
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    

    @PostMapping("/student")
    public Student postStudentEntity(@RequestBody Student student) {
        return studentService.postStudentEntity(student);
    }
    @PostMapping("/register")
    public RegisterEntity postRegisterEntity(@RequestBody RegisterEntity  registerEntity) {
        return studentService.postRegisterEntity(registerEntity);
    }
    @GetMapping("/registers")
    public List<RegisterEntity> getAllFaculty(){
    	return studentService.getAllFaculty();
    }
    @GetMapping("/students")
    public List<Student> getAllStudents(){
    	return studentService.getAllStudents();
    }
    
    @DeleteMapping("/student/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable Long id){
    	try {
    		studentService.deleteStudent(id);
    		return new ResponseEntity<>("Student with this "+id+" Deleted sucessfully",HttpStatus.OK);
    	}catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
    }
    @DeleteMapping("/register/{id}")
    public ResponseEntity<?> deleteFaculty(@PathVariable Long id){
    	try {
    		studentService.deleteFaculty(id);
    		return new ResponseEntity<>("Student with this "+id+" Deleted sucessfully",HttpStatus.OK);
    	}catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
    }
    @GetMapping("/student/{id}")
    public ResponseEntity<?> getStudentById(@PathVariable Long id){
    	Student student = studentService.getStudentById(id);
    	if(student == null) return ResponseEntity.notFound().build();
    	return ResponseEntity.ok(student);
    }
    @PatchMapping("/student/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable Long id,@RequestBody Student student){
    	Student updateStudent = studentService.updateStudent(id, student);
    	if(updateStudent == null)return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    	return ResponseEntity.ok(updateStudent);
    }
    @GetMapping("/registerupdate/{id}")
    public ResponseEntity<?> getFacltyById(@PathVariable Long id){
    	RegisterEntity faculty = studentService.getFacultyById(id);
    	if(faculty == null) return ResponseEntity.notFound().build();
    	return ResponseEntity.ok(faculty);
    }
    @PatchMapping("/registerupdate/{id}")
    public ResponseEntity<?> updateFaculty(@PathVariable Long id,@RequestBody RegisterEntity faculty){
    	RegisterEntity updateFaculty = studentService.updateFaculty(id, faculty);
    	if(updateFaculty == null)return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    	return ResponseEntity.ok(updateFaculty);
    }
}