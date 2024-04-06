# File Explorer
Using HTML, CSS, and JavaScript tried to mimic a file explorer kind of thing, in which we can upload the folder and then check the files present inside the folder and more info about files.

## Description of Project:
Made a page using HTML, CSS, and JavaScript that will allow the user to select a folder. On selecting the folder, the user should be able to see an HTML table with 3 columns:

- File name (without its extension)
- File size
- Button with text “Info” (more details given below) These columns will represent the appropriate data for each file.

## Some constraints to take care of:
The input button should be custom, and its inner text should be “Choose Folder”.
The files should be sorted with respect to their extension in alphabetical order. (this is optional but it may be considered for bonus marks, therefore leading to higher chances of getting shortlisted).
File size for each file should be displayed keeping in mind the following :
- If a file’s size is greater than 0 bytes and smaller than 1 kB, the unit used should be “bytes”
- If a file’s size is greater than or equal to 1 kB and smaller than 1 MB, the unit used should be “kB”
- If a file’s size is greater than or equal to 1 MB and smaller than 1 GB, the unit used should be “MB”
- If a file’s size is greater than or equal to 1 GB and smaller than 1 TB, the unit used should be “MB”
- If a file’s size is greater than or equal to 1 TB the unit used should be “TB”.
On hovering over the “Info” button, the user should see a dialog box/modal/tooltip with the file’s information neatly formatted, such as:
- File name
- File extension
- File size
- Other accessible information with respect to the file
