let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');




function setUsername(){
	let myName = prompt("请输入你的名字！");
	
	if(!myName || myName === null){
		setUsername();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML =  "Mozilla 酷毙了!" + myName;
	}
}

if(!localStorage.getItem('name')){
	setUsername();
} else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent =  "Mozilla 酷毙了!" + storedName;
}


myButton.onclick = function(){
	setUsername();
}