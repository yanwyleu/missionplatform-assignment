**Assignment: Build a Task Management Application**

**Objective:**

Create a simple task management web application where users can create, read, update, and delete (CRUD) tasks. The app should have a clean UI, a functional backend, and persistent data storage.

**Requirements:**

1.  Backend (Node.js, Express.js, MongoDB):
    
    *   Set up a RESTful API with the following endpoints:
        
        *   POST /tasks: Create a new task.
            
        *   GET /tasks: Retrieve all tasks.
            
        *   GET /tasks/:id: Retrieve a specific task by ID.
            
        *   PUT /tasks/:id: Update a specific task by ID.
            
        *   DELETE /tasks/:id: Delete a specific task by ID.
            
    *   Use MongoDB to store tasks with at least the following fields:
        
        *   title (string, required)
            
        *   description (string, optional)
            
        *   status (string, e.g., "To Do", "In Progress", "Done")
            
        *   createdAt (timestamp)
            
    *   Include basic error handling (e.g., return appropriate status codes and messages for invalid requests).
        
    *   Use environment variables (e.g., .env) for configuration (MongoDB URI, port, etc.).
        
2.  Frontend (React):
    
    *   Build a single-page application (SPA) with the following features:
        
        *   A form to add a new task (title and description inputs).
            
        *   A list of tasks displaying title, description, status, and creation date.
            
        *   Buttons to edit or delete each task.
            
        *   A way to update the task status (e.g., dropdown or buttons).
            
    *   Use React hooks (e.g., useState, useEffect) for state management and API calls.
        
    *   Style the app with CSS (or a library like Tailwind CSS/Bootstrap) to make it visually appealing and responsive.
        
3.  Integration:
    
    *   Connect the React frontend to the Express backend using fetch or Axios to perform CRUD operations.
        
    *   Ensure the app updates in real-time (e.g., the task list refreshes after adding, editing, or deleting a task).
        
4.  Bonus (Optional, to Assess Extra Skills):
    
    *   Add user authentication (e.g., login/logout with JWT or a simple username/password system).
        
    *   Implement sorting or filtering of tasks (e.g., by status or creation date).
        
    *   Deploy the app to a platform like Heroku, Vercel, or Netlify and provide a live URL.
        

**Deliverables:**

*   A GitHub repository with:
    
    *   Separate folders for frontend and backend.
        
    *   A README.md file explaining how to set up and run the project (e.g., npm install, MongoDB setup, environment variables).
        
*   A brief explanation (in the README or a short video) of the approach taken and any challenges faced.
    

**Evaluation Criteria:**

*   Code Quality: Clean, organized, and commented code with consistent formatting.
    
*   Functionality: All CRUD operations work as expected without major bugs.
    
*   MERN Stack Usage: Proper use of MongoDB schemas, Express routing, React components, and Node.js.
    
*   Problem-Solving: How edge cases (e.g., empty task list, invalid inputs) are handled.
    
*   UI/UX: Basic usability and responsiveness of the frontend.
    
*   Documentation: Clear instructions for running the app.
    

**Time Expectation:**

*   Junior: 8-12 hours 
    
*   Intermediate: 6-8 hours
    
*   AI: 10 minutes + 0.5 hour to debug.