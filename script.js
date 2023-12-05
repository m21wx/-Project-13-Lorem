	
	let arr =[
	` [ index [0] ] Lorem ipsum is the go to placeholder text for 
	websites. This is a fun project to show off your
	creativity and create your own text مربع البحث [1]`,
	` 
	[ index[1] ] In this tutorial, you will learn how to make a countdown 
	clock which can be used when a new product is coming out 
	or a sale is about to end on an ecommerce site مربع البحث [2].
	`,
	`
	[ index[2] ] In this tutorial, you will learn how to create tabs that will
	display different content which is useful when creating single 
	page applications مربع البحث [3].
	`,
	`
	[ index[3] ] In this tutorial , you will learn how to create a navbar that 
	slides down when scrolling and then stays at a fixed position
	at a certain height  مربع البحث [4].
	`,
	`
	[ index[4] ] In this tutorial, you will learn how to make a video 
	background with a play and pause feature.  This is a
	common feature 
	found in a lot of websites. [مربع البحث[5]]
	`,
	
	];
	

	let inputNumber = document.querySelector('.lorem #number')
	let Content 	= document.querySelector('.lorem .content')

	document.querySelector('.lorem form').addEventListener('submit',(e)=>{
			e.preventDefault();
			let inputValue = parseInt(inputNumber.value)
			let numberValue = Math.floor(Math.random() * arr.length);
			if(isNaN(inputValue) || inputValue <= 0 || inputValue > arr.length ){
				Content.innerHTML = arr[numberValue];
			}else{
				Content.innerHTML = arr[--inputValue];
			}

	});