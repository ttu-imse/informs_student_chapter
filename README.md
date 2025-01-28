# Project Setup Guide

---

## Requirements

Before you begin, ensure you have the following tools installed:
- **Code Editor** (e.g., Visual Studio Code)
- **npm** (Node Package Manager)
- **git**

---

## Running the Project

### Step 1: Clone or Download the Project
- **Option 1: Clone via git**  
  Open a terminal and run:  
  ```bash
  git clone <repository-url>
- **Option 2: Download ZIP**
    - Download the repository as a ZIP file from the project page at https://github.com/ttu-imse/informs_student_chapter by clicking in _Code_ green tab
    - Extract (unzip) the contents to a folder of your choice.
Example: save it to ~/Documents/dev/informs_student_chapter/.

### Step 2: Open the Project in a Code Editor
- Open your code editor (e.g., VSCode).
- Select File > Open Folder (or similar option) and navigate to the project directory.
Example: Open ~/Documents/dev/informs_student_chapter/.


### Step 3: Install Dependencies
- Open the terminal in your code editor (or a standalone terminal).
Ensure the terminal is pointing to the project folder.
Run the following command to install the required dependencies:
```
npm install --save
```

### Step 4: Start the Project
- After the dependencies are installed, start the project by running:
```
npm run dev
```
- This will launch a local development server, allowing you to preview and edit the project.
The website will be available in your browser at:
http://127.0.0.1:3000/ and your changes won't affect the website that is already published and running.

### Step 5: Edit and Preview
- Open the index.html file in your code editor.
- Make your changes.
- Save the file and check your browser to see the updates in real time, notice the changes don't affect yet the website that is already published and running, you are editing just a mock version locally which is only available in your computer.

# Deploying the Website
### Step 6: Push Changes to GitHub
-Once you’re satisfied with your edits and have verified everything works, open your terminal.
- Push your changes to the GitHub repository by running:
```
git pull
git add .
git commit -m "Your commit message"
git push
```
Your updates are now live!

# Project 

The group website is currently hosted at: 

https://ttu-imse.github.io/informs_student_chapter/