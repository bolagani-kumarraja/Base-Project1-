package com.CurdOperations.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.CurdOperations.entity.RegisterEntity;
import com.CurdOperations.entity.Student; // MUST match your Student class name
import com.CurdOperations.repository.RegisterRepository;
import com.CurdOperations.repository.StudentRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    private final RegisterRepository registerRepository;
    public StudentService(RegisterRepository registerRepository ,StudentRepository studentRepository) {
		this.registerRepository = registerRepository;
		this.studentRepository = studentRepository;
    }
 
    @Transactional
    public Student postStudentEntity(Student student) {
        return studentRepository.save(student);
    }
    @Transactional
    public RegisterEntity postRegisterEntity(RegisterEntity registerEntity) {
    	return registerRepository.save(registerEntity);
    }
    public List<RegisterEntity> getAllFaculty(){
    	return registerRepository.findAll();
    }
    
    public List<Student> getAllStudents(){
    	return studentRepository.findAll();
    }
    
    public void deleteStudent(Long id) {
    	if(!studentRepository.existsById(id)) {
    		throw new EntityNotFoundException("Student with ID "+id+" not found");
    	}
    studentRepository.deleteById(id);
    }
    
    public void deleteFaculty(Long id) {
    	if(!registerRepository.existsById(id)) {
    		throw new EntityNotFoundException("Student with ID "+id+" not found");
    	}
    registerRepository.deleteById(id);
    }
    
    public Student getStudentById(Long id) {
    	return studentRepository.findById(id).orElse(null);
    }
    public Student updateStudent(Long id, Student student) {
    	Optional<Student> optionalStudent = studentRepository.findById(id);
    	if( optionalStudent.isPresent()) {
    		Student existingStudent = optionalStudent.get();
    		existingStudent.setName(student.getName());
    		existingStudent.setEmail(student.getEmail());
    		existingStudent.setPhone(student.getPhone());
    		existingStudent.setDept(student.getDept());
    		return studentRepository.save(existingStudent);
    	}
    	return null;
    }
    public RegisterEntity getFacultyById(Long id) {
    	return registerRepository.findById(id).orElse(null);
    }
    public RegisterEntity updateFaculty(Long id, RegisterEntity faculty) {
    	Optional<RegisterEntity> optionalStudent = registerRepository.findById(id);
    	if( optionalStudent.isPresent()) {
    		RegisterEntity existingFaculty = optionalStudent.get();
    		existingFaculty.setName(faculty.getName());
    		existingFaculty.setEmail(faculty.getEmail());
    		existingFaculty.setPhone(faculty.getPhone());
    		existingFaculty.setPassword(faculty.getPassword());
    		return registerRepository.save(existingFaculty);
    	}
    	return null;
    }
     
}