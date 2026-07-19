# AWS Cloud Operations Dashboard

## Project Overview

This project is a real-time AWS Cloud Operations Dashboard built using React, Spring Boot, and the AWS SDK for Java.

It monitors AWS resources such as EC2, S3, CloudWatch, and displays operational metrics through a clean web dashboard.

---

## Tech Stack

- React
- Spring Boot
- Java
- AWS SDK v2
- EC2
- S3
- CloudWatch
- STS
- Axios

---

## Features

- Live EC2 Monitoring
- Live S3 Bucket Count
- CPU Monitoring
- Auto Refresh
- Search Resources
- Sidebar Navigation
- React Router
- Error Handling
- Loading Skeleton
- Environment Details
- AWS Account Details

---

## Architecture

Browser

↓

React

↓

Spring Boot REST API

↓

AWS SDK

↓

AWS Cloud

---

## How to Run

### Backend

```bash
mvn spring-boot:run
```

### Frontend

```bash
npm install

npm run dev
```

---

## Future Improvements

- Login Authentication
- JWT Security
- ECS Monitoring
- DynamoDB Monitoring
- CloudWatch Graphs
- Deployment using Docker & ECS
