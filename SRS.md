# Software Requirements Specification (SRS) for Cloud File Manager

## Product Features:
- **User Authentication:** Allow users to create and manage accounts securely.
- **File Upload**: Users can upload files from their local device to the cloud server.
- **File Download**: Users can download files that have been uploaded previously.
- **File List**: Users can view a list of their uploaded files.
- **File Delete**: Users can delete files they have uploaded.
- **File Rename**: Users can rename their uploaded files.

### Optional Features:
- **Gallery for Images and Videos**: View images and videos in a gallery.
- **Upload Limit**: Show storage limit for uploaded files.

## Functional Requirements

### 1. User Authentication
- Users must be able to sign up with a unique username and a password.
- Users must be able to log in with valid credentials.
- Users must be able to log out securely.

### 2. File Upload
- Users can upload files from their devices.
- The system must support multiple file types.
- Files must not exceed a specified size limit.(dont know yet)
- Uploaded files must be associated with the user’s account.

### 3. File Download
- Users can download files they have previously uploaded.
- Download functionality should ensure file integrity and security.

### 4. File List
- A list of all files uploaded by the user must be displayed.
- Users must be able to sort files by name, size or type.
- Users must be able to search for specific files using keywords.

### 5. File Delete
- Users must be able to delete files they have uploaded.
- A confirmation prompt must be shown before deleting a file.
- Deleted files must be permanently removed from the server.

### 6. File Rename
- Users can rename files to improve organization.
- The system must validate new file names to ensure they meet length and format requirements.

## Non-Functional Requirements

### 1. Usability
- The user interface should be simple and intuitive for individuals with basic technical skills.
- Responsive design to ensure usability on both desktop and mobile devices.

### 2. Storage Quota
- Each user should have a maximum storage limit of 10 GB.
- The system must check the remaining storage before allowing new uploads.
- The current storage usage should be displayed to the user.

### 3. Security
- User sessions must be managed securely (don't know)
- File access must be restricted to the authenticated user who uploaded the file.

### 4. Performance
- The system should handle concurrent uploads and downloads efficiently.
- File lists and metadata must be retrieved quickly from the database.

### 5. Scalability
- The file storage system must support future growth (e.g., integrating with cloud services like AWS S3 or Google Cloud Storage).
- The application should be able to handle an increasing number of users and files without significant performance degradation.

## Optional Requirements

### 1. Gallery View
- Display images and videos in a gallery format for easier preview.
- Support thumbnail generation for uploaded images.

### 2. Upload Limit Management
- Notify users when they are approaching their storage limit.
- Prevent uploads when the limit is exceeded, with appropriate messaging.
