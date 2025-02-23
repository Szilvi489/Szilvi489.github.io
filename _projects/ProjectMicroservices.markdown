---
layout: project
title: "Project Microservices"
short_description: "Microservices-based E-Commerce System."
image: "/assets/images/projects/ProjectMicroservices/SpringCloudMicroservices.jpg"
category: "Springboot Projects"
url: "/_projects/Project3/"
githubRepo:
---
# Microservices-based E-Commerce System

A Spring Boot microservices project implementing Product, Inventory, and Order services, using Eureka Service Discovery, Feign Clients, and MongoDB, all deployed using Docker.

---

## Project Overview
This project is a microservices-based architecture for an e-commerce system. It consists of three main microservices:
- **Product Service** → Manages product catalog (name, description, price).
- **Inventory Service** → Keeps track of product stock availability.
- **Order Service** → Handles customer orders, checks stock, and fetches product details before saving orders.

Each microservice is independent, communicates via Feign Clients, and registers itself with Eureka Service Discovery.

---

## Technologies Used

| Technology         | Description |
|--------------------|------------|
| Spring Boot 3  | Framework for building Java microservices |
| Spring Cloud  | Provides tools for microservices communication |
| Spring Data MongoDB  | Simplifies interaction with MongoDB |
| Spring Cloud OpenFeign | Makes inter-service communication easy |
| Eureka Server  | Service discovery for microservices |
| Docker  | Containerization for running services |
| Postman  | API testing tool |

---

## Architecture Overview
```
                      +--------------------+
                      |    Eureka Server   |
                      |   (Service Discovery)  |
                      +--------------------+
                               ▲
           ┌───────────────────┼───────────────────┐
           │                   │                   │
+----------------+    +----------------+    +----------------+
| Product Service|    | Inventory Service |    |  Order Service |
|  - GET Products|    |  - Check Stock    |    |  - Place Orders |
|  - GET Details |    |  - Update Stock   |    |  - Fetch Products|
|  - MongoDB     |    |  - MongoDB        |    |  - MongoDB       |
+----------------+    +----------------+    +----------------+
                               ▲
                               │
                      +----------------+
                      |  API Gateway (Future)  |
                      +----------------+
```
Each microservice:
- Registers itself with Eureka
- Uses Feign Clients for communication
- Stores data in MongoDB
- Runs inside a Docker container

---

## Setting Up the Project
### 1. Clone the Repository
```bash
git //TODO
cd microservices-project
```

### 2. Run Eureka Server
Eureka is a service registry that enables microservices to discover each other.
```bash
cd eureka-server
./mvnw spring-boot:run
```
Eureka UI is available at: [`http://localhost:8761/`](http://localhost:8761/)

### 3. Start Microservices
Start each microservice one by one:

#### Product Service
```bash
cd product-service
./mvnw spring-boot:run
```
#### Inventory Service
```bash
cd inventory-service
./mvnw spring-boot:run
```
#### Order Service
```bash
cd order-service
./mvnw spring-boot:run
```

---

## Running with Docker
We use Docker Compose to containerize and run all microservices.

### 1. Build the Docker Containers
```bash
docker-compose up -d
```
To check running containers:
```bash
docker ps
```

### 2. Services and Ports

| Service        | Port  |
|---------------|------|
| Eureka    | 8761 |
| Order     | 8081 |
| Inventory | 8082 |
| Product   | 8083 |
| MongoDB (Order) | 27018 |
| MongoDB (Inventory) | 27019 |

---

## Microservices Breakdown

### Product Service (`product-service`)
**Responsibilities:**
- Stores and retrieves product information (id, name, description, price).
- Exposes a REST API to fetch product details by skuCode.

**Endpoints:**
```http
GET /api/product/getProductDetails?skuCode=APPLE-123
```

**Example Response:**
```json
{
  "id": "1",
  "name": "Apple",
  "description": "Fresh red apples",
  "price": 15.00
}
```

---

### Inventory Service (`inventory-service`)
**Responsibilities:**
- Checks if a product is in stock.
- Reduces stock after an order is placed.

**Endpoints:**
```http
GET /api/inventory/check?skuCode=APPLE-123&quantity=3
PUT /api/inventory/reduce
```

**Example Response:**
```json
{
  "skuCode": "APPLE-123",
  "isInStock": true
}
```

---

### Order Service (`order-service`)
**Responsibilities:**
- Calls Inventory Service to check stock.
- Calls Product Service to fetch product details.
- Saves order with calculated total price.

**Endpoints:**
```http
POST /api/order
GET /api/order
```

**Example Order Request:**
```json
{
  "skuCode": "STRAWBERRY-123",
  "quantity": 3
}
```

**Example Order Response (MongoDB Entry):**
```json
{
  "id": "123abc",
  "orderNumber": "ORD-98765",
  "skuCode": "STRAWBERRY-123",
  "price": 45.00,
  "quantity": 3
}
```

## Conclusion
This microservices-based e-commerce system demonstrates scalability, modularity, and flexibility. With Eureka for service discovery, Feign for communication, and MongoDB for persistence, this architecture is ready for production enhancements.

