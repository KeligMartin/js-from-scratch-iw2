const title = document.getElementById("title")
title.innerText = "j'ai été modifié "

// <div> blabla </div> blabla => innerText

const button = document.getElementById('btn-1')
button.addEventListener('click', () => console.log('test'))

function write()  {
	console.log('tu es en train d ecrire')
}

const input = document.getElementById('input-text')
input.addEventListener('focus', write)
input.addEventListener('blur', () => console.log('tu as fini d ecrire'))