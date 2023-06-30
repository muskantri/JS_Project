function showFiles(e) {
  const files = Array.from(e.target.files);
  const sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name));
  const tableBody = document.querySelector("#fileTable tbody");
  
  tableBody.innerHTML = "";
  
  sortedFiles.forEach((file) => {
    const fileName = file.name.split(".")[0];
    const fileExtension = file.name.split(".").pop();
    const fileSize = getFileSize(file.size);
    
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const sizeCell = document.createElement("td");
    const buttonCell = document.createElement("td");
    const infoButton = document.createElement("button");
    
    nameCell.textContent = fileName;
    sizeCell.textContent = fileSize;
    
    infoButton.textContent = "Info";
    infoButton.addEventListener("click", function() {
      showModal(file);
    });
    
    buttonCell.appendChild(infoButton);
    row.appendChild(nameCell);
    row.appendChild(sizeCell);
    row.appendChild(buttonCell);
    
    tableBody.appendChild(row);
  });
}

function getFileSize(size) {
  if (size < 1024) {
    return size + ' bytes';
  } 
  else if (size < 1048576) {
    return (size / 1024).toFixed(2) + ' kB';
  } 
  else if (size < 1073741824) {
    return (size / 1048576).toFixed(2) + ' MB';
  } 
  else if (size < 1099511627776) {
    return (size / 1073741824).toFixed(2) + ' GB';
  } 
  else {
    return (size / 1099511627776).toFixed(2) + ' TB';
  }
}

function showModal(file) {
  const modal = document.getElementById("infoModal");
  const span = document.getElementsByClassName("close")[0];
  const modalFileName = document.getElementById("modalFileName");
  const modalFileExtension = document.getElementById("modalFileExtension");
  const modalFileSize = document.getElementById("modalFileSize");
  const modalOtherInfo = document.getElementById("modalOtherInfo");
  
  modalFileName.textContent = "File Name: " + file.name;
  modalFileExtension.textContent = "File Extension: " + file.name.split(".").pop();
  modalFileSize.textContent = "File Size: " + getFileSize(file.size);
  modalOtherInfo.textContent = "Other accessible information";
  
  modal.style.display = "block";
  
  span.onclick = function() {
    modal.style.display = "none";
  };
  
  window.onclick = function(e) { //This is optional feature. 
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
}

const customButton = document.getElementById("customButton");
const folderInput = document.getElementById("folder");

customButton.addEventListener("click", function() {
  folderInput.click(showFiles);
});

folderInput.addEventListener("change", showFiles);
folderInput.dispatchEvent(new Event("change"));
