# AI Chatbot Builder

## Overview
This repository contains a chatbot builder application built using Firebase, React, and Material UI. It provides an intuitive interface for creating and managing chatbots that can be integrated into various applications. The application leverages Firebase for backend services and Material UI for a sleek and responsive frontend design.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/shivbhoj/ai-chatbot-saas-firebase.git
   cd ai-chatbot-saas-firebase
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore and Authentication services.
   - Copy your Firebase configuration and create a `.env` file in the root directory with the following format:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

4. **Start the development server**:
   ```bash
   npm start
   ```
   Your application should now be running at [http://localhost:3000](http://localhost:3000).

## Usage
- After setting up the application, you can create a new chatbot by navigating to the chatbot creation page.
- Use the provided UI components from Material UI to design your chatbot interface.
- Chatbot data is stored in Firestore, allowing for real-time updates and easy management.
- You can also integrate your chatbot into your existing applications using the provided APIs.

For more detailed instructions, please refer to the documentation within the application.