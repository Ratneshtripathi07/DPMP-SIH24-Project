# District Projects Management Platform (DPMP) Prototype Selected in SIH'24

## Overview

The **District Projects Management Platform** is a web-based solution as a part of the **Smart India Hackathon 2024**, designed to facilitate inter-departmental cooperation at the city level departments in the country. The platform enables seamless sharing of data and resources, unified project phasing, planning, and implementation among multiple departments. The goal is to enhance efficiency, collaboration, and resource management within city governance and catering to the needs of the diverse stakeholders viz. citizens, NGOs, tourists, investors etc.

## Code-simplified:
- **LP :** Landing Page 
- **ADM :** Administration

## Features

- **Centralized Dashboard**: A unified feed displaying updates and information from all connected departments.
- **Categorization of Stakeholders**: The platform categorizes stakeholders into citizens and Administration each with unique features, roles and interactions.
- **Project Management**: Departments can create and manage projects, assign timelines, and tag relevant departments for collaboration.
- **Interactive Maps**: Powered by **OpenLayers**, allowing users to visualize project locations and other geographical data.
- **Real-time Notifications**: Integrated with **Novu** to provide instant updates to all stakeholders on project developments.
- **Role-based Authentication**: Secure login using **Keycloak** with OTP verification.
- **Data Security**: Encryption of sensitive data using **OpenSSL** and session management with **connect-mongodb-session**.
- **Visualization**: Utilizes **Chart.js** for displaying project analytics and progress charts.
- **Real-time Communication**: Supports instant messaging and notifications between departments using **Socket.io**.

## Tech Stack

- **Frontend**:

  - HTML, CSS, JavaScript (Vanilla JS)
  - Tailwind CSS for styling
  - Responsive design with dark/light mode support

- **Backend**:

  - **Node.js** (version 20.15.0)
  - **Express.js** for API and server-side logic
  - **MongoDB** with **Mongoose** for database management
  - **bcrypt** for password hashing
  - **express-session** for session handling
  - **Keycloak** for authentication and OTP verification
  - **OpenSSL** for encryption

- **Real-time Communication**:

  - **Socket.io** for bi-directional messaging
  - **Novu** for real-time notifications

- **Mapping & Visualization**:
  - **OpenLayers** for maps
  - **Chart.js** for data visualization

## Usage

### Login

Users can log in using their credentials and an OTP sent via Keycloak.

### Project Creation

After logging in, departments can create projects, assign deadlines, and tag other departments for collaboration.

### Interactive Dashboard

View project statuses, notifications, and maps showing project locations.

## Contributing

Contributions are welcome! Here's how you can get involved:

1. Fork the repository.
2. Create a new branch
3. Install dependencies and Code your changes and commit them.
4. Push to the branch.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or feedback, please contact at ratneshgeetatripathi@gmail.com.
