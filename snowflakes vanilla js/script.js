
	
	// pahulja.remove()

	var gas = setInterval(function(){
		var pahulja = document.getElementsByClassName('snowflake')[0];
		var pah2 = pahulja.cloneNode(true);
		pah2.classList.remove('snowflake')

		var w = window.innerWidth;
		var h = window.innerHeight;

		var randW = Math.floor(Math.random()* (w-16));
		var randH = Math.floor(Math.random()* (h-16));
		var randomLeftRight = Math.floor(Math.random()* 2)+1;
		console.log(randomLeftRight)


		pah2.style = 'left:' + randW + 'px; top: -16px';
		pahulja.parentNode.appendChild(pah2);

		setInterval(function(){
			var topStar = parseInt(pah2.style.top);
			var windowHeight = window.innerHeight;


			var leftStar = parseInt(pah2.style.left);
			if(topStar > windowHeight) {
				pah2.remove()
			} else {
				pah2.style.top = parseInt(topStar) + 1 + 'px';
			}

			if(topStar <= h / 4){
				leftRight('right',randomLeftRight)
			} else if(topStar > h / 4 &&  topStar <= h/2) {
				leftRight('left', randomLeftRight)
			} else if (topStar > h/2 && topStar <= h/4*3){
				leftRight('right', randomLeftRight)
			} else {
				leftRight('left', randomLeftRight)
			}

			//for left and right movement, used up
			function leftRight(sign, inc){
				var leftStar= parseInt(pah2.style.left);

				if(sign === 'left'){	
				pah2.style.left = parseInt(leftStar) - inc + 'px';
				} else if( sign === 'right'){
				pah2.style.left = parseInt(leftStar) + inc + 'px';
				// console.log('it is RIGHT')
				}
			}
		},20)

},1000)

	// setTimeout(function(){
	// 	clearInterval(gas)
	// },3005)
