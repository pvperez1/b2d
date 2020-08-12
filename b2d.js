let decimal = 0;

document.getElementById('bulb7').onclick = function changeBit(){
	if (document.getElementById('bit7').value == 0) {
		document.getElementById('bit7').value = 1
		document.getElementById('bulb7').src = 'on.svg'
		document.getElementById('b7').innerHTML = 1
		decimal += 128
	} else {
		document.getElementById('bit7').value = 0
		document.getElementById('bulb7').src = 'off.svg'
		document.getElementById('b7').innerHTML = 0
		decimal -= 128
	}
	document.getElementById('decimal').innerHTML = decimal
}

document.getElementById('bulb6').onclick = function changeBit(){
	if (document.getElementById('bit6').value == 0) {
		document.getElementById('bit6').value = 1
		document.getElementById('bulb6').src = 'on.svg'
		document.getElementById('b6').innerHTML = 1
		decimal += 64
	} else {
		document.getElementById('bit6').value = 0
		document.getElementById('bulb6').src = 'off.svg'
		document.getElementById('b6').innerHTML = 0
		decimal -= 64
	}
	document.getElementById('decimal').innerHTML = decimal
}

document.getElementById('bulb5').onclick = function changeBit(){
	if (document.getElementById('bit5').value == 0) {
		document.getElementById('bit5').value = 1
		document.getElementById('bulb5').src = 'on.svg'
		document.getElementById('b5').innerHTML = 1
		decimal += 32
	} else {
		document.getElementById('bit5').value = 0
		document.getElementById('bulb5').src = 'off.svg'
		document.getElementById('b5').innerHTML = 0
		decimal -= 32
	}
	document.getElementById('decimal').innerHTML = decimal
}

document.getElementById('bulb4').onclick = function changeBit(){
	if (document.getElementById('bit4').value == 0) {
		document.getElementById('bit4').value = 1
		document.getElementById('bulb4').src = 'on.svg'
		document.getElementById('b4').innerHTML = 1
		decimal += 16
	} else {
		document.getElementById('bit4').value = 0
		document.getElementById('bulb4').src = 'off.svg'
		document.getElementById('b4').innerHTML = 0
		decimal -= 16
	}
	document.getElementById('decimal').innerHTML = decimal
}

document.getElementById('bulb3').onclick = function changeBit(){
	if (document.getElementById('bit3').value == 0) {
		document.getElementById('bit3').value = 1
		document.getElementById('bulb3').src = 'on.svg'
		document.getElementById('b3').innerHTML = 1
		decimal += 8
	} else {
		document.getElementById('bit3').value = 0
		document.getElementById('bulb3').src = 'off.svg'
		document.getElementById('b3').innerHTML = 0
		decimal -= 8
	}
	document.getElementById('decimal').innerHTML = decimal
}

document.getElementById('bulb2').onclick = function changeBit(){
	if (document.getElementById('bit2').value == 0) {
		document.getElementById('bit2').value = 1
		document.getElementById('bulb2').src = 'on.svg'
		document.getElementById('b2').innerHTML = 1
		decimal += 4
	} else {
		document.getElementById('bit2').value = 0
		document.getElementById('bulb2').src = 'off.svg'
		document.getElementById('b2').innerHTML = 0
		decimal -= 4
	}
	document.getElementById('decimal').innerHTML = decimal
}

document.getElementById('bulb1').onclick = function changeBit(){
	if (document.getElementById('bit1').value == 0) {
		document.getElementById('bit1').value = 1
		document.getElementById('bulb1').src = 'on.svg'
		document.getElementById('b1').innerHTML = 1
		decimal += 2
	} else {
		document.getElementById('bit1').value = 0
		document.getElementById('bulb1').src = 'off.svg'
		document.getElementById('b1').innerHTML = 0
		decimal -= 2
	}
	document.getElementById('decimal').innerHTML = decimal
}

document.getElementById('bulb0').onclick = function changeBit(){
	if (document.getElementById('bit0').value == 0) {
		document.getElementById('bit0').value = 1
		document.getElementById('bulb0').src = 'on.svg'
		document.getElementById('b0').innerHTML = 1
		decimal += 1
	} else {
		document.getElementById('bit0').value = 0
		document.getElementById('bulb0').src = 'off.svg'
		document.getElementById('b0').innerHTML = 0
		decimal -= 1
	}
	document.getElementById('decimal').innerHTML = decimal
}


document.getElementById('reset').onclick = function(){
	decimal = 0
	document.getElementById('bit7').value = 0
	document.getElementById('bulb7').src = 'off.svg'
	document.getElementById('b7').innerHTML = 0
	document.getElementById('bit6').value = 0
	document.getElementById('bulb6').src = 'off.svg'
	document.getElementById('b6').innerHTML = 0
	document.getElementById('bit5').value = 0
	document.getElementById('bulb5').src = 'off.svg'
	document.getElementById('b5').innerHTML = 0
	document.getElementById('bit4').value = 0
	document.getElementById('bulb4').src = 'off.svg'
	document.getElementById('b4').innerHTML = 0
	document.getElementById('bit3').value = 0
	document.getElementById('bulb3').src = 'off.svg'
	document.getElementById('b3').innerHTML = 0
	document.getElementById('bit2').value = 0
	document.getElementById('bulb2').src = 'off.svg'
	document.getElementById('b2').innerHTML = 0
	document.getElementById('bit1').value = 0
	document.getElementById('bulb1').src = 'off.svg'
	document.getElementById('b1').innerHTML = 0
	document.getElementById('bit0').value = 0
	document.getElementById('bulb0').src = 'off.svg'
	document.getElementById('b0').innerHTML = 0
	document.getElementById('decimal').innerHTML = decimal
}