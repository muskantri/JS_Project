# Pw_JavaScriptAssignment(File Explorer)
A kind of file explorer project.
Make a page using HTML, CSS, and JavaScript that will allow the user to
select a folder. On selecting the folder, the user should be able to see an HTML table with 3
columns:
1. File name (without its extension)
2. File size
3. Button with text “Info” (more details given below)
These columns will represent the appropriate data for each file.
Some constraints to take care of:
1. The input button should be custom, and its inner text should be “Choose Folder”.
2. The files should be sorted with respect to their extension in alphabetical order. (this is
optional but it may be considered for bonus marks, therefore leading to higher chances of
getting shortlisted).
3. File size for each file should be displayed keeping in mind the following :
a. If a file’s size is greater than 0 bytes and smaller than 1 kB, the unit used should
be “bytes”
b. If a file’s size is greater than or equal to 1 kB and smaller than 1 MB, the unit
used should be “kB”
c. If a file’s size is greater than or equal to 1 MB and smaller than 1 GB, the unit
used should be “MB”
d. If a file’s size is greater than or equal to 1 GB and smaller than 1 TB, the unit used
should be “MB”
e. If a file’s size is greater than or equal to 1 TB the unit used should be “TB”.
4. On hovering over the “Info” button, the user should see a dialog box/modal/tooltip with
the file’s information neatly formatted, such as:
a. File name
b. File extension
c. File size
d. Other accessible information with respect to the file
