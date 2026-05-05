function is_youtubelink(url) {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false;
}
function is_imagelink(url) {
    var p = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
    return (url.match(p)) ? true : false;
}
function is_vimeolink(url,el) {
    var id = false;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                var response = JSON.parse(xmlhttp.responseText);
                id = response.video_id;
                console.log(id);
                el.classList.add('lightbox-vimeo');
                el.setAttribute('data-id',id);

                el.addEventListener("click", function(event) {
                    event.preventDefault();
                    document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://player.vimeo.com/video/'+el.getAttribute('data-id')+'/?autoplay=1&byline=0&title=0&portrait=0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>';
                    document.getElementById('lightbox').style.display = 'block';

                    setGallery(this);
                });
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };
    xmlhttp.open("GET", 'https://vimeo.com/api/oembed.json?url='+url, true);
    xmlhttp.send();
}
function setGallery(el) {
    var elements = document.body.querySelectorAll(".gallery");
    elements.forEach(element => {
        element.classList.remove('gallery');
	});
	var galleryContainer = el.closest('ul, p, .image-gallery, .dataviz-project__gallery');
	if(galleryContainer) {
		var link_elements = galleryContainer.querySelectorAll("a[class*='lightbox-']");
		link_elements.forEach(link_element => {
			link_element.classList.remove('current');
		});
		link_elements.forEach(link_element => {
			if(el.getAttribute('href') == link_element.getAttribute('href')) {
				link_element.classList.add('current');
			}
		});
		if(link_elements.length>1) {
			document.getElementById('lightbox').classList.add('gallery');
			link_elements.forEach(link_element => {
				link_element.classList.add('gallery');
			});
		}
		var currentkey;
		var gallery_elements = document.querySelectorAll('a.gallery');
		Object.keys(gallery_elements).forEach(function (k) {
			if(gallery_elements[k].classList.contains('current')) currentkey = k;
		});
		if(currentkey==(gallery_elements.length-1)) var nextkey = 0;
		else var nextkey = parseInt(currentkey)+1;
		if(currentkey==0) var prevkey = parseInt(gallery_elements.length-1);
		else var prevkey = parseInt(currentkey)-1;
		document.getElementById('next').addEventListener("click", function() {
			gallery_elements[nextkey].click();
		});
		document.getElementById('prev').addEventListener("click", function() {
			gallery_elements[prevkey].click();
		});
	}
}

function lightboxNavigate(direction) {
    var galleryElements = document.querySelectorAll('a.gallery');
    if (!galleryElements.length) return;

    var currentKey;
    Object.keys(galleryElements).forEach(function(k) {
        if (galleryElements[k].classList.contains('current')) currentKey = parseInt(k);
    });

    if (currentKey === undefined) return;

    var targetKey = direction === 'next'
        ? (currentKey === galleryElements.length - 1 ? 0 : currentKey + 1)
        : (currentKey === 0 ? galleryElements.length - 1 : currentKey - 1);

    galleryElements[targetKey].click();
}

function setupProjectGalleries() {
    var galleryShells = document.querySelectorAll('[data-gallery-shell]');

    function updateShell(shell) {
        var isDesktop = window.innerWidth >= 981;
        var track = shell.querySelector('.dataviz-project__gallery');
        var figures = shell.querySelectorAll('.dataviz-project__figure');
        var prev = shell.querySelector('[data-gallery-prev]');
        var next = shell.querySelector('[data-gallery-next]');
        var status = shell.querySelector('[data-gallery-status]');
        var visibleCount = 3;
        var maxIndex = Math.max(0, figures.length - visibleCount);

        if (!isDesktop) {
            shell.dataset.galleryIndex = '0';
            track.style.transform = '';
            if (prev) prev.disabled = true;
            if (next) next.disabled = true;
            if (status) status.textContent = '1 / ' + figures.length;
            return;
        }

        var index = parseInt(shell.dataset.galleryIndex || '0', 10);
        if (Number.isNaN(index)) index = 0;
        index = Math.max(0, Math.min(index, maxIndex));
        shell.dataset.galleryIndex = String(index);

        var gap = 14.4;
        if (window.getComputedStyle(track).gap) {
            gap = parseFloat(window.getComputedStyle(track).gap) || gap;
        }

        var viewport = shell.querySelector('.dataviz-project__gallery-viewport');
        var viewportWidth = viewport.clientWidth;
        var itemWidth = (viewportWidth - gap * (visibleCount - 1)) / visibleCount;
        var offset = index * (itemWidth + gap);

        track.style.transform = 'translateX(-' + offset + 'px)';

        if (prev) prev.disabled = index === 0;
        if (next) next.disabled = index >= maxIndex;
        if (status) status.textContent = (index + 1) + '–' + Math.min(index + visibleCount, figures.length) + ' / ' + figures.length;
    }

    galleryShells.forEach(function(shell) {
        var prev = shell.querySelector('[data-gallery-prev]');
        var next = shell.querySelector('[data-gallery-next]');

        if (shell.dataset.galleryBound === 'true') return;
        shell.dataset.galleryBound = 'true';
        shell.dataset.galleryIndex = '0';

        if (prev) {
            prev.addEventListener('click', function() {
                var current = parseInt(shell.dataset.galleryIndex || '0', 10);
                shell.dataset.galleryIndex = String(Math.max(0, current - 1));
                updateShell(shell);
            });
        }

        if (next) {
            next.addEventListener('click', function() {
                var current = parseInt(shell.dataset.galleryIndex || '0', 10);
                shell.dataset.galleryIndex = String(current + 1);
                updateShell(shell);
            });
        }

        updateShell(shell);
    });

    window.addEventListener('resize', function() {
        galleryShells.forEach(updateShell);
    });
}

document.addEventListener("DOMContentLoaded", function() {

    //create lightbox div in the footer
    var newdiv = document.createElement("div");
    newdiv.setAttribute('id',"lightbox");
    document.body.appendChild(newdiv);

    //add classes to links to be able to initiate lightboxes
    var elements = document.querySelectorAll('a');
    elements.forEach(element => {
        var url = element.getAttribute('href');
        if(url) {
            if(url.indexOf('vimeo') !== -1 && !element.classList.contains('no-lightbox')) {
                is_vimeolink(url,element);
            }
            if(is_youtubelink(url) && !element.classList.contains('no-lightbox')) {
                element.classList.add('lightbox-youtube');
                element.setAttribute('data-id',is_youtubelink(url));
            }
            if(is_imagelink(url) && !element.classList.contains('no-lightbox')) {
                element.classList.add('lightbox-image');
                var href = element.getAttribute('href');
                var filename = href.split('/').pop();
                var split = filename.split(".");
                var name = split[0];
                element.setAttribute('title',name);
            }
        }
    });

    //remove the clicked lightbox
    document.getElementById('lightbox').addEventListener("click", function(event) {
        if(event.target.id != 'next' && event.target.id != 'prev'){
            this.innerHTML = '';
            document.getElementById('lightbox').style.display = 'none';
        }
    });

    document.addEventListener("keydown", function(event) {
        var lightbox = document.getElementById('lightbox');
        if (!lightbox || lightbox.style.display !== 'block') return;

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            lightboxNavigate('next');
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            lightboxNavigate('prev');
        }

        if (event.key === 'Escape') {
            lightbox.innerHTML = '';
            lightbox.style.display = 'none';
        }
    });
    
    //add the youtube lightbox on click
    var elements = document.querySelectorAll('a.lightbox-youtube');
    elements.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://www.youtube.com/embed/'+this.getAttribute('data-id')+'?autoplay=1&showinfo=0&rel=0"></iframe></div>';
            document.getElementById('lightbox').style.display = 'block';

            setGallery(this);
        });
    });

    //add the image lightbox on click
    var elements = document.querySelectorAll('a.lightbox-image');
    elements.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            var caption = this.getAttribute('data-caption') || this.getAttribute('title') || '';
            document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="img" style="background: url(\''+this.getAttribute('href')+'\') center center / contain no-repeat;" title="'+this.getAttribute('title')+'" ><img src="'+this.getAttribute('href')+'" alt="'+this.getAttribute('title')+'" /></div><span>'+caption+'</span>';
            document.getElementById('lightbox').style.display = 'block';

            setGallery(this);
        });
    });

    setupProjectGalleries();

});
