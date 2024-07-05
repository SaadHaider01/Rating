const buttons = document.querySelectorAll(".but");
const rate = document.querySelector(".selected-text-color");
const sub = document.querySelector(".sub_but");
const C1 = document.querySelector(".container1");
const C2 = document.querySelector(".container2");

function removeC1(){
    C1.style.display = "none";
    C2.style.display = "block";
}

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        const buttonId = button.id;
        const option = document.createTextNode(buttonId);

        buttons.forEach(btn => btn.style.background = "#262e38");

        button.style.background = "orange";
        button.style.color = "white";
        rate.textContent = '';

        rate.appendChild(option);
    });
})

sub.addEventListener("click", function(){
    removeC1();
});
