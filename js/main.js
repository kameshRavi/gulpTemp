document.getElementById('boxOne').onkeypress = function(event) {
    return (event.charCode >= 48 && event.charCode <= 57);
}

document.getElementById('boxTwo').onkeypress = function(event) {
    return (event.charCode >= 48 && event.charCode <= 57);
}

document.getElementById('addition').onclick=function(event){
	event.preventDefault();
	document.getElementById('mulsdf').style.display='none';
	document.getElementById('add').style.display='block';
	document.getElementById('operation').style.display='block';
	document.getElementById('msg').innerHTML="Enter two numbers";
	document.getElementById('addition').style.display='none';
	document.getElementById('multiply').style.display='none';
}

document.getElementById('multiply').onclick=function(event){
	event.preventDefault();
	document.getElementById('add').style.display='none';
	document.getElementById('mul').style.display='block';
	document.getElementById('operation').style.display='block';
	document.getElementById('msg').innerHTML="Enter two numbers";
	document.getElementById('addition').style.display='none';
	document.getElementById('multiply').style.display='none';
}

document.getElementById('add').onclick= function(event){
	event.preventDefault();
	if((document.getElementById('boxOne').value.length < 1) || (document.getElementById('boxTwo').value.length < 1)) {
		if(document.getElementById('boxOne').value.length < 1 )
			document.getElementById('boxOne').className += ' error';
		if(document.getElementById('boxTwo').value.length < 1 )
			document.getElementById('boxTwo').className += ' error';
	} else {
		document.getElementById('boxOne').classList.remove('error');
		document.getElementById('boxTwo').classList.remove('error');	
		add();
		document.getElementById('add').style.display='none';
		document.getElementById('result').style.display='block';
	}
}

document.getElementById('mul').onclick= function(event){
	event.preventDefault();
	if((document.getElementById('boxOne').value.length < 1) || (document.getElementById('boxTwo').value.length < 1)) {
		if(document.getElementById('boxOne').value.length < 1 )
			document.getElementById('boxOne').className += ' error';
		if(document.getElementById('boxTwo').value.length < 1 )
			document.getElementById('boxTwo').className += ' error';
	} else {
		document.getElementById('boxOne').classList.remove('error');
		document.getElementById('boxTwo').classList.remove('error');
		multiply();
		document.getElementById('mul').style.display='none';
		document.getElementById('result').style.display='block';
	}
}