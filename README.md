# MERN To-Do App
This is a simple To-Do application built using the MERN stack (MongoDB, Express, React, Node.js). The initial project structure and core functionality of this To-Do app were set up by following an online tutorial. Additional features such as MongoDB integration, axios for HTTP requests, and deployment via Vercel were added to extend the functionality.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

## Features
- Add, edit, and delete tasks
- Mark tasks as completed
- Reorder tasks using drag-and-drop
- Delete all tasks at once

## Usage
- Use the form to add new tasks.
- Click on a task to mark it as completed.
- Use the "edit" button to modify a task.
- Use the "x" button to delete a task.
- Drag and drop tasks to reorder them.
- Click "Delete All" to remove all tasks.

## Project Structure
```plaintext
mern-todo-app/
├── backend/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Form.js
│   │   │   ├── List.js
│   │   │   ├── Lists.js
│   │   ├── App.js
│   │   ├── api.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── ...
└── README.md
```

## License
This project is licensed under the MIT License.