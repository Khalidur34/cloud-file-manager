# Software Requirements Specification (SRS) for Cloud File Manager

## Product Features:

- **File Upload**: Users can upload files from their local device to the cloud server.
- **File Download**: Users can download files that have been uploaded previously.
- **File List**: Users can view a list of their uploaded files.
- **File Delete**: Users can delete files they have uploaded.
- **File Rename**: Users can rename their uploaded files.

### Optional Features:
- **Gallery for Images and Videos**: View images and videos in a gallery.
- **Upload Limit**: Show storage limit for uploaded files.

## Functional Requirements

### 1. File Upload:
- **Description**: Users can select files from their local device and upload them.
- **Input**: A file selected by the user
- **Output**: Confirmation of a successful upload or error message

### 2. File Download:
- **Description**: Users can download files they have previously uploaded.
- **Input**: A file selection made by the user from the file list.
- **Output**: The selected file is downloaded to the user’s device.

### 3. File List:
- **Description**: A list of all uploaded files is displayed to the user.
- **Inputs**: No input.
- **Outputs**: A list of uploaded files.

### 4. File Delete:
- **Description**: Users can delete files from the cloud storage.
- **Input**: A file selection for deletion.
- **Output**: Confirmation of file deletion.

### 5. File Rename:
- **Description**: Users can rename their uploaded files.
- **Input**: A new name entered by the user.
- **Output**: Updated file name in the file list.

## Non-Functional Requirements

- **Usability**: The user interface should be intuitive and easy to use for individuals with basic computer skills.
- **Storage Quota**: Each user is limited to **10 GB** of storage for their uploaded files.
