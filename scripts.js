document.getElementById('button').onclick = function(argument) {
	var password = document.getElementById('password').value;
	if(password === 'crucifix')  // cheating, aren't we? :)
		document.getElementById('location').style.visibility='visible'; 
	return false;
};

document.getElementById('password').focus();
console.log("You will be persecuted by the word of the High Inqusitior if you don't turn away immidiately!")