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

