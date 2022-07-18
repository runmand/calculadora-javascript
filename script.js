let buttom = document.querySelector('.buttom');
		let answer = document.querySelector('.answer');

		

		buttom.addEventListener('click', function(e){
			e.preventDefault();
			
			let number1 = document.querySelector('#number1').value;
			let number2 = document.querySelector('#number2').value;
			let operator = document.querySelector('#operator').value;

			if (operator == '+') {
				answer.innerHTML = `<strong>Soma: </strong> ${parseFloat(number1) + parseFloat(number2)}`
			} else if (operator == '-') {
				answer.innerHTML = `<strong>Subtração: </strong> ${parseFloat(number1) - parseFloat(number2)}`
			} else if (operator == '*') {
				answer.innerHTML = `<strong>Multiplicação: </strong> ${parseFloat(number1) * parseFloat(number2)}`
			} else if (operator == '/') {
				answer.innerHTML = `<strong>Divisão: </strong> ${parseInt(number1 / number2)}<br>
				<strong>Resto: </strong> ${number1 % number2}
				`
			}
			else {
				resposta.innerHTML = `<strong> ERRO! - Digite um operador válido</strong>`
			}
});