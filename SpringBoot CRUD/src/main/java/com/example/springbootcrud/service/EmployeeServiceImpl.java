package com.example.springbootcrud.service;

import com.example.springbootcrud.exception.ResourceNotFoundException;
import com.example.springbootcrud.model.Employee;
import com.example.springbootcrud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getEmployees() {
        List<Employee> employeeList;
        employeeList = employeeRepository.findAll();
        return employeeList;
        }

    @Override
    public Employee createEmployee(Employee employee) {
        Employee createdEmployee = employeeRepository.save(employee);
        return createdEmployee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employeeDetails){
        Employee employeeToBeUpdated = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with Id :" + id));

        employeeToBeUpdated.setFirstName(employeeDetails.getFirstName());
        employeeToBeUpdated.setLastName(employeeDetails.getLastName());
        employeeToBeUpdated.setEmail(employeeDetails.getEmail());

        employeeRepository.save(employeeToBeUpdated);

        return employeeToBeUpdated;
    }

    @Override
    public Employee getEmployeeById(Long id){
        return employeeRepository.findById(id).get();
//                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with Id :" + id));
    }

    @Override
    public ResponseEntity<String> deleteEmployee(Long id){
           employeeRepository.deleteById(id);
        return ResponseEntity.ok("Employee deleted");
    }
}

