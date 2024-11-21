# Cloud File Manager - Project Document

## Project Overview
A simple web application that allows users to upload, download, and view files easily.

## Objectives
- Users can create and maintain their own accounts.
- Users can upload files from their computer and mobile. 
- Users can download files that were previously uploaded.
- Users can view uploaded files.

## Features
### **User Authentication**  
Allow users to create and manage accounts securely. Users must log in with a username (or email) and password to access their files. Authentication ensures each user has a private workspace and prevents unauthorized access.  
- **Sign-up**: Users provide a username/email and password to create an account.  
- **Login**: Users authenticate to access the platform.


### **File Upload**  
Enable users to upload files from their devices to the server. The uploaded files are associated with the user's account and stored securely in the cloud.  
- **File size limit**: Individual files can be up to x MB.  
- **Supported file types**: Images, videos, PDFs, documents, etc.  

### **File Download**  
Provide users the ability to download files they have previously uploaded. This feature allows users to retrieve their stored data at any time.  
- **File selection**: Users can select files to download from the file list.

### **File List**  
Display a list of all files uploaded by the user, organized by name, date, or type. This feature provides an overview of the user's stored data.  
- **Sorting**: Users can sort files by date, size, or name.  
- **Search bar**: Allows users to find files quickly by entering a keyword.  

### **File Delete**  
Allow users to delete files from their account. Deleted files are removed permanently from the server.  
- **Confirmation**: Prompt users to confirm the deletion to avoid accidental removals.  
- **Status**: Show a message once the file is successfully deleted.  


### **File Rename**  
Enable users to rename their files for better organization.  
- **Editable names**: Users can update file names directly in the file list.  
- **Validation**: Ensure new names meet character length and format requirements.

## Optional Features
- **Gallery for images and video**
- **Upload limit**


## Authentication Logic
- Sign-Up: Users create an account using available username and password.
- Sign-in: Users enter username and password.
- Logout: Users end their session by logging out

## User Account Logic:

### Attributes to Store:
- Username: A unique identifier for the user.
- Password: A minimum 6 character password.
- Storage Limit: The maximum storage space allocated to the user.
- Storage Used: The current amount of space used by the user.
- File Information: Name, Size, Type, URL.

### Storage:
- User Account Information: This should be stored in a relational database (MySQL)
- File Information: This should be stored in a separate table.
- File Storage: Files are stored on the server in a directory structure. Uploaded and retrieved via API calls.

### Tools and Technologies:
- Database: MySQL
- File Storage: Cloud
  