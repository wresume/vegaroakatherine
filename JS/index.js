// Cajas
	var d,
			footer,
			download,
			closeFooter,
			loading, nowLoading;

// Archivo
	d = document;
	footer = d.getElementById('footer');
	download = d.getElementById('download');
	closeFooter = d.getElementById('closeFooter');
	loading = d.getElementById('loading');
	nowLoading = d.getElementsByClassName('nowLoading');

// Métodos
	function hideLoadingCircles(){
		nowLoading[0].style = 'opacity: 0; transition: 1s;';
		setTimeout(function(){
			nowLoading[1].style = 'opacity: 0; transition: 1s;';
			setTimeout(function(){
				nowLoading[2].style = 'opacity: 0; transition: 1s;';
			}, 500);
		}, 500);
		setTimeout(function(){
			loading.style = 'opacity: 0; transition: 1s linear;';
			setTimeout(function(){
				loading.style = 'display: none;';
			}, 1800);
		}, 1600);
	};

	function showF(){
		footer.style = 'display: inline-block;';
	};

	function hideF(){
		footer.style = 'display: none;';
	};

// Eventos
	download.addEventListener('click', function(){
		showF();
	});

	closeFooter.addEventListener('click', function(){
		hideF();
	});

	setTimeout(hideLoadingCircles, 1500);