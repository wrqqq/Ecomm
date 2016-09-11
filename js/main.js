//size window and replace dom elements for seo targets
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log(w + ' ' + h)
if (w >= 600 && h >= 500) {
	var card = document.getElementById("card");
	var title = document.getElementById("title");
	var wrapper = document.getElementById("wrapper");
	card.parentNode.replaceChild(title, card);
	wrapper.appendChild(card);
	card.style.marginTop = "50px";
}

//lung algorithm 

function valid_credit_card(value) {
	if (isNaN(value)) {
		return false
	}
	if (/[^0-9-\s]+/.test(value)) return false;

	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}
	return (nCheck % 10) == 0;
}
var card_val = document.getElementById("card_val");
card_val.onblur = function() {
  var value = this.value;
  valid_credit_card(value);
  if(valid_credit_card(value) == true) {
  	card_val.className = 'valid_card';
  } else {
  	card_val.className = 'invalid_card';
  }
  console.log(valid_credit_card(value));
  if (value.length > 15) {
  	card_val.oninput = function() {
  		valid_credit_card(value)
  	}
  }

};