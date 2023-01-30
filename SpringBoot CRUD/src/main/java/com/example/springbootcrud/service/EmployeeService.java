package com.example.springbootcrud.service;

import com.example.springbootcrud.model.Employee;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EmployeeService {
    public List<Employee> getEmployees();
    public Employee createEmployee(Employee employee);
    public Employee updateEmployee(Long id, Employee employee);
    public Employee getEmployeeById(Long id);
    public ResponseEntity<String> deleteEmployee(Long id);
}
