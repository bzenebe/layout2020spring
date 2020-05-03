$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed' , {
    strings: [
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2' , {
    strings: [
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// create variable equal to all gallery images in document. 
// select all elements with class .imgContainer
let galleryImages = document.querySelectorAll(".imgContainer");
// this one keeps track of opened images, should not equal anything.
let getLastOpenedImage;
// grab current width of window
let windowWidth = window.innerWidth;


// run condition to see if images exist here.
if(galleryImages){
	galleryImages.forEach(function(image, index){
		image.onclick = function(){
			let getElementCss = window.getComputedStyle(image);
			let getFullImgUrl = getElementCss.getPropertyValue("background-image");
			let getImgUrlPos = getFullImgUrl.split("/assets/");
			let setNewImgUrl = getImgUrlPos[1].replace('")', '');
			
			getLastOpenedImage = index + 1;

			let box = document.body;
			let imgBox = document.createElement("div");
			box.appendChild(imgBox);
			imgBox.setAttribute("class", "image-window");
			imgBox.setAttribute("onclick", "closeImg()");

			let newImg = document.createElement("img");
			imgBox.appendChild(newImg);
			newImg.setAttribute("src", "assets/" + setNewImgUrl);
			newImg.setAttribute("id", "currentImage");


			newImg.onload = function(){

				let imageWidth = this.width;
				let edge = ((windowWidth-imageWidth)/2)-80;

				let pButton = document.createElement("a");
				let buttonPText = document.createTextNode("<");
				pButton.appendChild(buttonPText);
				box.appendChild(pButton);
				pButton.setAttribute("class","Previous");
				pButton.setAttribute("onclick","changeImage(0)");
				pButton.style.cssText = "left: " + edge + "px;";


				let nButton = document.createElement("a");
				let buttonNText = document.createTextNode(">");
				nButton.appendChild(buttonNText);
				box.appendChild(nButton);
				nButton.setAttribute("class","Next");
				nButton.setAttribute("onclick","changeImage(1)");
				nButton.style.cssText = "right: " + edge + "px;";

				let xButton = document.createElement("a");
				let buttonxText = document.createTextNode("X");
				xButton.appendChild(buttonxText);
				box.appendChild(xButton);
				xButton.setAttribute("class","X");
				xButton.setAttribute("onclick","closeImg");
				xButton.style.cssText = "right: " + edge + "px;";


				xButton.onclick = function(){
					document.querySelector(".image-window").remove();
	document.querySelector(".Next").remove();
	document.querySelector(".Previous").remove();
	document.querySelector(".X").remove();
				}

			}


		}
	});
}


function closeImg(){
	document.querySelector(".image-window").remove();
	document.querySelector(".Next").remove();
	document.querySelector(".Previous").remove();
	document.querySelector(".X").remove();

}

function changeImage(changed){
	document.querySelector("#currentImage").remove();

	let getimage = document.querySelector(".image-window");
	let newImg = document.createElement("img");
	getimage.appendChild(newImg);

	let calcnewImage;
	if(changed ===1){
		calcnewImage = getLastOpenedImage + 1;
		if(calcnewImage > galleryImages.length) {
			calcnewImage = 1;
		}
	}
	else if(changed === 0){
		calcnewImage = getLastOpenedImage - 1;
		if(calcnewImage < 1){
			calcnewImage = galleryImages.length;
		}
	}
	newImg.setAttribute("src", "assets/" + calcnewImage + ".jpg");
	newImg.setAttribute("id", "currentImage");

	getLastOpenedImage = calcnewImage;

	newImage.onload = function(){
		let imageWidth = this.width;
		let edge = ((windowWidth-imageWidth)/2)-80;

		let nButton = document.querySelector(".Next");
		nButton.style.cssText = "right: " + edge +"px;";

		let pButton = document.querySelector(".Next");
		pButton.style.cssText = "right: " + edge +"px;";
	}


}




















