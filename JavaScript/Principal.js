/* Header - Scroll */

const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
   if(window.scrollY >= navHeight){
      header.classList.add('scroll')
   }else{
      header.classList.remove('scroll')
   }
})

/* Scroll - Skills */

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function(){
	var $target = $('.progresso-valor'),
			animationClass = 'progresso-valor-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - 1000) {
				$(this).addClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

(function(){
	var $target = $('.progresso-valor-2'),
			animationClass = 'progresso-valor-2-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - 1000) {
				$(this).addClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

(function(){
	var $target = $('.progresso-valor-3'),
			animationClass = 'progresso-valor-3-start',
			offset = $(window).height() * 1/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - 1000) {
				$(this).addClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

(function(){
	var $target = $('.progresso-valor-4'),
			animationClass = 'progresso-valor-4-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - 1000) {
				$(this).addClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

/* Scroll - Auto */

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - 80
	}, 500); 
})

/* Hide - Show */

function Hide() {
	var x = document.getElementById("Divs");
	if (x.style.display === "") {
	  x.style.display = "block";
	} else {
	  x.style.display = "";
	}
}

const btnShowHide = document.querySelector(".mostrar-mais");

btnShowHide.addEventListener("click", (e) => {
  if (btnShowHide.innerText === "MOSTRAR MAIS") {
    btnShowHide.innerText = "MOSTRAR MENOS";
  } else {
    btnShowHide.innerText = "MOSTRAR MAIS";
  }
});