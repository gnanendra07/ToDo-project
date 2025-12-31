const input=document.querySelector("#todo");
const inputBtn=document.querySelector("#btn");
const listCon=document.querySelector("#list-con");

function addTask(){
    if(input.value === ""){
        alert("Enter some task");
    }
    else{
        const li=document.createElement('li');
        li.innerText=input.value;
        
        const spn=document.createElement('span');
        spn.innerText="\u00d7";
        li.appendChild(spn);

        listCon.appendChild(li);
    }

    input.value="";
}

inputBtn.addEventListener('click', ()=>{
    addTask();
})

listCon.addEventListener('click',(event)=>{
    if(event.target.tagName == 'LI'){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName == 'SPAN'){
        event.target.parentElement.remove();
    }
})