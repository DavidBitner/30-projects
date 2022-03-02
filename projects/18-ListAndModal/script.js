const btnAdd = document.querySelector("#add");
const btnDelete = document.querySelector("#delete");

const table = document.querySelector("#table");
const tableBody = document.querySelector("#body");

const modalAdd = document.querySelector("#modal-add");
const modalAddBtnConfirm = document.querySelector("#modal-add-confirm");
const modalAddBtnCancel = document.querySelector("#modal-add-cancel");
const modalAddName = document.querySelector("#name");
const modalAddType = document.querySelector("#type");
const modalAddDetails = document.querySelector("#details");

const modalDelete = document.querySelector("#modal-delete");
const modalDeleteBtnConfirm = document.querySelector("#modal-delete-confirm");
const modalDeleteBtnCancel = document.querySelector("#modal-delete-cancel");
const modalDeleteId = document.querySelector("#id");
const modalDeleteStatus = document.querySelector("#status");

let tableData = [];
let rowData = {};

// Functions
function setLocalStorage() {
  localStorage.setItem("storage", JSON.stringify(tableData));
}

(function getLocalStorage() {
  const data = JSON.parse(localStorage.getItem("storage"));

  if (!data) {
    return;
  }

  tableData = data;

  showTable();
})();

function showModal(display = "none", option = 0) {
  if (option == 0) {
    modalAdd.style.display = display;
  } else {
    modalDelete.style.display = display;
  }
}

function modalStatus(visibility = "hidden", text = "none", color = "#61a824") {
  modalDeleteStatus.style.visibility = visibility;
  modalDeleteStatus.innerHTML = text;
  modalDeleteStatus.style.color = color;
}

function showTable() {
  tableBody.innerHTML = "";

  tableData.forEach(function (thing) {
    let row = tableBody.insertRow(-1);

    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);

    cell0.innerHTML = thing.id;
    cell1.innerHTML = thing.name;
    cell2.innerHTML = thing.type;
    cell3.innerHTML = thing.details;
    cell4.innerHTML = thing.data;
  });
}

// Event listeners
btnAdd.addEventListener("click", function () {
  showModal("block");
});

btnDelete.addEventListener("click", function () {
  modalStatus("hidden");
  showModal("block", 1);
});

modalAddBtnConfirm.addEventListener("click", function () {
  rowData.id = Date.now();
  rowData.name = modalAddName.value;
  rowData.type = modalAddType.value;
  rowData.details = modalAddDetails.value;
  rowData.data = new Date().toLocaleDateString();

  tableData.push({ ...rowData });
  setLocalStorage();
  showTable();
});

modalAddBtnCancel.addEventListener("click", function () {
  showModal();
});

modalDeleteBtnConfirm.addEventListener("click", function () {
  let idi = modalDeleteId.value;
  tableData.every((dict, index) => {
    if (dict.id == idi) {
      modalStatus(
        "visible",
        `Index ${index + 1} removed. Name: "${dict.name}", ID "${dict.id}"`
      );
      tableData.splice(index, 1);
      setLocalStorage();
      showTable();
      return false;
    } else {
      modalStatus(
        "visible",
        `ID "${dict.id}" não encontrado na lista`,
        "#ff727e"
      );
      return true;
    }
  });
});

modalDeleteBtnCancel.addEventListener("click", function () {
  showModal("none", 1);
});

window.addEventListener("click", function (event) {
  if (event.target == modalAdd) {
    showModal();
  } else if (event.target == modalDelete) {
    showModal("none", 1);
  }
});
