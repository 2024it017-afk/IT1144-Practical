const title=document.getElementById("title");
const button=document.getElementById("changeBtn");

button.addEventListener("click",function(){
	title.textContent="Button clicked";
    title.style.color="red";});