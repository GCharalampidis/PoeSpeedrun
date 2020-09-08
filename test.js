window.onload=function()
{
	var list = document.querySelector('ul');
	if(list)
	{
		list.addEventListener('click', function(ev) {
		  if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
			ev.target.classList.remove('button-glow');
			var step = parseInt(ev.target.id);
			step++;
			var nextstep = step;
			var nextLiItem = document.getElementById(nextstep);
			nextLiItem.classList.add('button-glow'); 
			var liContent = ev.target.innerHTML;
			liContent = liContent.replace('&gt;',':');
			const elem = document.createElement('textarea');
			elem.value = liContent;
			document.body.appendChild(elem);
			elem.select();
			document.execCommand('copy');
			document.body.removeChild(elem);
		  }
		}, false);
			
	}

	//Modal Section
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}


function saveText() 
{
	var fulltext = document.getElementById("fulltext").value;
	var textarea = document.getElementById("textarea");
	var listarea = document.getElementById("listarea");
	var mylist = document.getElementById("mylist");
	mylist.innerHTML = "";
	var n = fulltext.split("\n");
	for(var x in n){   

		var li = document.createElement("li");
		li.id = x;
		li.classList.add("step");
		var inputValue = n[x];
		var t = document.createTextNode(inputValue);
		li.appendChild(t);
		if (inputValue !== '') {
			document.getElementById("mylist").appendChild(li);
		}
	}
	textarea.setAttribute("style", "display: none");
	listarea.setAttribute("style", "display: inline-block");
	document.getElementById("saveBtn").classList.add('disabled');
	document.getElementById("editBtn").classList.remove('disabled');
}

function editList()
{
	var listarea = document.getElementById('listarea');
	var textarea = document.getElementById("textarea");
	listarea.setAttribute("style", "display: none");
	textarea.setAttribute("style", "display: inline-block");
	document.getElementById("editBtn").classList.add('disabled');
	document.getElementById("saveBtn").classList.remove('disabled');
}

function prevImage() {
	var currentImg = document.getElementsByClassName("talentImg");
	var imgNumber = parseInt(currentImg[0].id);
	var prevImgNum = imgNumber - 1 ;
	var prevImgNumString = prevImgNum.toString();
	var newUrl = "img/talents/" + prevImgNum + ".png";
	if (prevImgNum >= 1)
	{
		document.getElementsByClassName("talentImg")[0].src = newUrl;
		document.getElementsByClassName("talentImg")[0].id = prevImgNum;
		document.getElementById("talentstep").innerHTML = "Step " + prevImgNumString;
		if(prevImgNum === 1)
		{
			document.getElementById("prevTalentBtn").classList.add('disabled');
		}
		if(prevImgNum === 6)
		{
			document.getElementById("nextTalentBtn").classList.remove('disabled');
		}
	}
}

function nextImage() {
	var currentImg = document.getElementsByClassName("talentImg");
	var imgNumber = parseInt(currentImg[0].id);
	var nextImgNum = imgNumber + 1 ;
	var nextImgNumString = nextImgNum.toString();
	var newUrl = "img/talents/" + nextImgNum + ".png";
	if (nextImgNum <= 7)
	{
		document.getElementsByClassName("talentImg")[0].src = newUrl;
		document.getElementsByClassName("talentImg")[0].id = nextImgNum;
		document.getElementById("talentstep").innerHTML = "Step " + nextImgNumString;
		if(nextImgNum === 7)
		{
			document.getElementById("nextTalentBtn").classList.add('disabled');
		}
		if(nextImgNum === 2)
		{
			document.getElementById("prevTalentBtn").classList.remove('disabled');
		}
	} 
}

// function nextStep()
// {
// 	var stepList = getElementsByClassName('')
// }

