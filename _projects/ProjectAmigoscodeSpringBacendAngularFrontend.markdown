---
layout: project
title: "Amigoscode Spring Backend Project"
short_description: "Developed a basic Spring Boot application with MySQL integration, showcasing backend concepts such as entity modeling, service logic, and repository patterns with an Angular frontend."
image: "/assets/images/projects/ProjectAmigoscodeSpringBackendAngularFrontend/ProjectAmigoscodeSpringBackendAngularFrontend.jpg"
category: "Springboot Projects"
githubRepo:
---
# Employee Management System

A full-stack **Employee Management System** built with **Spring Boot** for the backend and **Angular** for the frontend. The application provides functionality for managing employees, including adding, updating, deleting, and retrieving employee records. The backend is built using **Spring Boot, Spring Data JPA, and MySQL**, while the frontend is developed with **Angular**.

## Project Overview

This project follows a **monolithic architecture**, where the **backend and frontend communicate via REST APIs**. The backend handles all **business logic and database interactions**, while the frontend provides a **user-friendly interface** for managing employees.

### Features
- Retrieve all employees or search by specific attributes (ID, email, job title, name).
- Add a new employee.
- Delete an employee by ID.
- Update employee details.
- Store employee images.
- Secure backend communication with **CORS configuration**.
- Integration tests for backend functionality.

---

## Technologies Used

| Technology        | Description |
|-------------------|-------------|
| **Spring Boot 3** | Backend framework for REST APIs |
| **Spring Data JPA** | ORM for database interactions |
| **MySQL** | Relational database for storing employee records |
| **Hibernate** | JPA implementation for database queries |
| **Angular** | Frontend framework for user interface |
| **TypeScript** | Language used in Angular for frontend logic |
| **Docker** | Containerization for deploying the backend |
| **Postman** | API testing tool |

---

## Architecture

```
+------------------+       +----------------------+
| Angular Frontend | <---> | Spring Boot Backend |
+------------------+       +----------------------+
                                   │
                                   ▼
                           +----------------+
                           |   MySQL DB     |
                           +----------------+
```

- **Spring Boot Backend** exposes REST APIs for CRUD operations.
- **Angular Frontend** consumes the backend APIs.
- **MySQL** serves as the data storage for employee records.
- **Docker** is used for running backend services in a containerized environment.

---

## Setting Up the Project

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/employee-management.git
cd employee-management
```

### 2. Configure MySQL Database
Ensure **MySQL is running** and update `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employeemanager?allowPublicKeyRetrieval=true&useSSL=false
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

### 3. Run the Backend
```bash
./mvnw spring-boot:run
```
Backend will start on [`http://localhost:8080/`](http://localhost:8080/).

### 4. Run the Frontend
Navigate to the Angular project directory:
```bash
cd frontend
npm install
ng serve
```
Frontend will be available at [`http://localhost:4200/`](http://localhost:4200/).

---

## API Endpoints

### 1. Retrieve Employees
**Get all employees:**
```http
GET /employee/all
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "jobTitle": "Software Engineer",
    "phone": "1234567890",
    "imageUrl": "http://example.com/image.jpg",
    "employeeCode": "EMP001"
  }
]
```

### 2. Add Employee
```http
POST /employee/add
```
**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "jobTitle": "Product Manager",
  "phone": "9876543210",
  "imageUrl": "http://example.com/image.jpg"
}
```

### 3. Update Employee
```http
PUT /employee/update/{id}
```
**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "jobTitle": "Senior Product Manager",
  "phone": "9876543210",
  "imageUrl": "http://example.com/image-updated.jpg"
}
```

### 4. Delete Employee
```http
DELETE /employee/delete/{id}
```

### 5. Find Employee by ID
```http
GET /employee/findById/{id}
```

### 6. Find Employee by Email
```http
GET /employee/findByEmail/{email}
```

---

## Frontend (Angular)

### **Service Layer (EmployeeService.ts)**
Handles communication with the backend API.
```typescript
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl + '/employee';

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/update/${employee.id}`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${employeeId}`);
  }
}
```


### Services and Ports
| Service        | Port  |
|---------------|------|
| **Backend**   | `8080` |
| **Frontend**  | `4200` |
| **MySQL**     | `3306` |

---

## Conclusion

This Employee Management System demonstrates how **Spring Boot and Angular** can be integrated to create a complete web application. The backend efficiently handles employee data using **Spring Data JPA and MySQL**, while the frontend provides a smooth user experience with **Angular and TypeScript**. The project is structured for **easy scalability and maintenance**.

