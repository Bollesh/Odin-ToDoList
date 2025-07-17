# Odin - ToDoList
**Todo List Manager**

### Description
The `ToDoList` is a web-based application designed to help users manage their daily tasks efficiently. It includes features such as adding and viewing tasks with different priorities.

### Features
- **Task Management**: Users can add, edit, and delete tasks.
- **Priority Levels**: Tasks can be marked with different priority levels (e.g., high, medium, low).
- **Date Input**: Users can specify the date for each task.
- **Modal Dialogs**: Informational modals are used to display invalid input or other notifications.

### Github Pages Link:
[To Do List](https://bollesh.github.io/Odin-ToDoList/)

### Installation
To set up and run the project locally:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd todo-manager
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

### Usage
To use the application, follow these steps:

1. Open your web browser and navigate to `http://localhost:3000` (or the appropriate URL if you have changed it). Or you could use this app through github pages.
2. You will see a form where you can add new tasks by entering a title, date, and priority level.
3. Click on the "Add" button to save the task.

### Dependencies
- `react`
- `framer-motion`
- Other npm packages used for state management and UI components.

### Contributing
Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

### Additional Notes
- The `context` directory contains state management files for handling tasks, modals, and other application states.
- The `public/index.html` file serves as the entry point for the web application.
