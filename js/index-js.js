// Function createTugas untuk membuat tugas baru
const btnTambahTugas = document.querySelector(".titlecta .cta");
const tambahTugas = document.querySelector(".isitask");

btnTambahTugas.addEventListener('click', function(){
    tambahTugas.classList.toggle("d-none")
    // tambahTugas.style.display = "block"
})

//function subTask untuk menambahkan subTask
var arrow = document.getElementById("arrow")
const subTask = document.querySelector(".sub-task");
arrow.addEventListener('click', function(){
    subTask.classList.toggle("d-none")  // function untuk merotasi tombol arrow 180 derajat
    arrow.classList.toggle("rotated") 
})

// function sortBy untuk sort tugas menurut waktu
var popupFilter = document.querySelector(".popup-filter")
var arrowFilter = document.getElementById("arrow-filter")
const dropDown = document.querySelector(".dropdown")
const filterTitle = document.querySelector(".bytanggal")
arrowFilter.addEventListener('click', function(){
    popupFilter.classList.toggle("d-none")
    arrowFilter.classList.toggle("rotated") // function untuk merotasi tombol arrow 180 derajat
    filterTitle.style.color = ("grey")
    dropDown.style.border = ("1px solid grey") 
})


// function taskDone untuk tugas terselesaikan
const arrowFooter = document.getElementById("arrow-footer")
var taskDone = document.querySelector(".list-task-done")
arrowFooter.addEventListener('click', function(){
    taskDone.classList.toggle("d-none")
    arrowFooter.classList.toggle("rotated")
    
})




