---
layout: project
title: "Amigoscode Spring Backend Project"
short_description: "Developed a basic Spring Boot application with MySQL integration, showcasing backend concepts such as entity modeling, service logic, and repository patterns."
image: "/assets/images/projects/ProjectAmigoscodeSpringBackend/amigoscode.jpeg"
category: "Springboot Projects"
githubRepo: https://github.com/Szilvi489/amigoscodeSpringBackendProject
---

# 🎓 Student Management System (Spring Boot)

A **Spring Boot Monolithic Application** designed for managing students, including **adding, deleting, updating, and retrieving students from a MySQL database**. This project follows a **single-module Maven structure** and was developed as a learning exercise using **Spring Boot, Spring Data JPA, and REST APIs**.

---

## **📌 Project Overview**
This **Student Management System** is a simple CRUD (Create, Read, Update, Delete) application built using **Spring Boot**. It allows users to:
- **Retrieve all students** or search by specific criteria (ID, Email, Age, Name).
- **Add a new student** to the database.
- **Delete a student** by name.
- **Update a student's email** based on their name.

This project follows a **monolithic architecture** where all logic is contained in a single Spring Boot application and interacts with a **MySQL database** using **Spring Data JPA**.

---

## **⚙️ Technologies Used**

| Technology         | Description |
|--------------------|------------|
| **Spring Boot 3**  | Java framework for building REST APIs |
| **Spring Data JPA**  | Simplifies database interaction |
| **MySQL**  | Relational database for storing student records |
| **Hibernate**  | ORM framework used for JPA implementation |
| **Maven**  | Dependency management and build tool |
| **Postman**  | API testing tool |

---

## **📜 Architecture Overview**
```
+---------------------+
|  Student Service   |
|  (Spring Boot App) |
+---------------------+
         │
         ▼
+---------------------+
|   MySQL Database   |
|  (JPA & Hibernate) |
+---------------------+
```
### **Key Components:**
✅ **REST Controller** → Handles HTTP requests.
✅ **Service Layer** → Business logic for managing students.
✅ **Repository Layer** → Interacts with MySQL via JPA.
✅ **Entity Layer** → Defines the Student model.

---

## **🛠️ Setting Up the Project**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo/student-management.git
cd student-management
```

### **2️⃣ Configure MySQL Database**
Ensure you have **MySQL running**, then configure `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

### **3️⃣ Run the Application**
```bash
./mvnw spring-boot:run
```
📌 **Application will be available at:** [`http://localhost:8080/`](http://localhost:8080/)

---

## **📂 API Endpoints**
### **1️⃣ Retrieve Students**
**Get all students:**
```http
GET /api/v1/student
```
📌 **Example Response:**
```json
[
  {
    "id": 1,
    "name": "Mariam",
    "age": 24,
    "dob": "2000-01-05",
    "email": "mariam@gmail.com"
  }
]
```

✅ **Search by Specific Criteria:**
```http
GET /api/v1/student/by-id?id=1
GET /api/v1/student/by-email?email=mariam@gmail.com
GET /api/v1/student/by-age?age=24
```

### **2️⃣ Add a New Student**
```http
POST /api/v1/student
```
📌 **Example Request Body:**
```json
{
  "name": "John Doe",
  "dob": "1999-12-15",
  "email": "john.doe@gmail.com"
}
```

### **3️⃣ Delete a Student**
```http
DELETE /api/v1/student?name=John Doe
```

### **4️⃣ Update a Student's Email**
```http
PUT /api/v1/student?name=Mariam&email=newemail@gmail.com
```

---

## **📂 Code Breakdown**

### **1️⃣ Student Entity (`Student.java`)**
Defines the **Student** model with attributes: `id`, `name`, `dob`, `email`.
```java
@Entity
@Table
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private LocalDate dob;
    private String email;

    @Transient
    private int age;

    public int getAge() {
        return Period.between(this.dob, LocalDate.now()).getYears();
    }
}
```

### **2️⃣ Student Repository (`StudentRepository.java`)**
Handles database interactions using **Spring Data JPA**.
```java
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findStudentByEmail(String email);
    Student findStudentByName(String name);
}
```

### **3️⃣ Student Service (`StudentService.java`)**
Contains business logic for **fetching, adding, deleting, and updating students**.
```java
@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
}
```

### **4️⃣ Student Controller (`StudentController.java`)**
Exposes REST endpoints for managing students.
```java
@RestController
@RequestMapping("api/v1/student")
public class StudentController {
    private final StudentService studentService;
    
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    
    @GetMapping
    public List<Student> getStudents() {
        return studentService.getStudents();
    }
}
```

---

## **💡 Key Takeaways**
✅ **Spring Boot simplifies REST API development**.  
✅ **Spring Data JPA handles database interactions efficiently**.  
✅ **MySQL provides reliable data storage**.  
✅ **The layered architecture makes the application maintainable**.

---

## **📝 Future Improvements**
- **Add Spring Security for authentication**.
- **Implement Swagger for API documentation**.
- **Dockerize the application for easy deployment**.

---

## **📌 Conclusion**
This **Student Management System** is a simple, **Spring Boot-based** project that demonstrates how to build **REST APIs** with **Spring Data JPA and MySQL**. It follows **best practices** by using a **service layer, repository pattern, and entity classes**.

🚀 **Now fully documented!** 🎉 Let me know if you need modifications! 😊



