function onav(){
		document.querySelector('#msn').style.width = "250px"
	}
	function cnav()	{	
		document.querySelector('#msn').style.width = "0px"
	}
	function unFunctional(){
		alert("Oops! This function is currently unavailable. Please try again later")
		try{
			buy(price)
		}
         catch(err){
         	console.log("Ha! That's the problem " + err.message)
         }
	finally{
         	console.log("That's a fake error message, Don't think it's the promblem")
         }
	}
	alert("Hi! Welcome to UKFOODS")
	var impro = prompt("If you have any comments, please write them hear")
	alert("We heard that " + impro + " from you")
	for(let i = 0;i<10;i++){
           var p = document.querySelector("pl").innerHTML = impro;
		p.style.display = "none"
	}
        var learn = ["undefined","null"]
