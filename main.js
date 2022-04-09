const input = document.querySelector("input");
const btnSubmit = document.querySelector("form button");


const taskList = document.querySelector(".hold-tasks");

btnSubmit.addEventListener("click", (e) =>{
    e.preventDefault();
    const p = document.createElement("p");
    const div = document.createElement("div");
    const btncheck = document.createElement("button");
    const btnRemove = document.createElement("button");

    if(input.value == "") return


    div.classList.add("task");

    
    btncheck.innerHTML = "<i class='fa-solid fa-check'></i>";
    btnRemove.innerHTML = "<i class='fa-solid fa-xmark'></i>";

    p.textContent = input.value;

    div.append(p, btncheck, btnRemove);

    taskList.append(div);
    input.value = ""; 

    btncheck.addEventListener("click", (e) =>{
        e.target.style.color = "lime";
        p.style.textDecoration = "line-through";
        p.style.color = "lime";
    })

    btnRemove.addEventListener("click", function () {
        div.remove();
    })
})
