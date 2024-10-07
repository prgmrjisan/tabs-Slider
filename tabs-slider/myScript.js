//alert("hlel")
 
 const content1 = document.getElementById('content1');
 const content2 = document.getElementById('content2');
 const content3 = document.getElementById('content3'); 
 const btn1 = document.getElementById('btn1');
 const btn2 = document.getElementById('btn2');
 const btn3 = document.getElementById('btn3');
 /*
 function btnOne(){
	 
	 content1.style.transform = 'translateX(0px)';
	 content2.style.transform = 'translateX(10000px)';
	 content3.style.transform = 'translateX(10000px)';
 } 
 function btnTwo(){
	 
	 content2.style.transform = 'translateX(0px)';
	 content1.style.transform = 'translateX(10000px)';
	 content3.style.transform = 'translateX(10000px)';
 } 
 function btnThree(){
	 
	 content3.style.transform = 'translateX(0px)';
	 content2.style.transform = 'translateX(10000px)';
	 content1.style.transform = 'translateX(10000px)';
 }*/
 
  function btnOne(){
	 
	 content1.style.display = 'block';
	 content2.style.display = 'none';
	 content3.style.display = 'none';
	 
	} 
 	 btn1.addEventListener('click', function(){
		 btn1.classList.add('active');
		 btn2.classList.remove('active');
		 btn3.classList.remove('active');
	 } );
 
 function btnTwo(){
	 
	 content2.style.display = 'block';
	 content1.style.display = 'none';
	 content3.style.display = 'none';
	
	 
 } 
  
	  btn2.addEventListener('click', function(){
		 btn2.classList.add('active');
		 btn1.classList.remove('active');
		 btn3.classList.remove('active');
	 });
 function btnThree(){
	 
	 content3.style.display = 'block';
	 content2.style.display = 'none';
	 content1.style.display = 'none';
		 
	}
   btn3.addEventListener('click', function(){
		 btn3.classList.add('active');
		 btn2.classList.remove('active');
		 btn1.classList.remove('active');
	 });
 
 