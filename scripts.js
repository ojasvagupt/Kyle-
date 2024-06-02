$(document).ready(function() {
    $('.card-hover').hover(
        function() {
            $(this).addClass('shadow-lg');
        },
        function() {
            $(this).removeClass('shadow-lg');
        }
    );

    $('#contactUsBtn').click(function() {
        $('#popupOverlay').fadeIn();
        $('#popupForm').fadeIn();
    });

    $('#popupOverlay').click(function() {
        $('#popupOverlay').fadeOut();
        $('#popupForm').fadeOut();
    });
});


document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('mouseover', function() {
        const imageSrc = this.getAttribute('data-image');
        document.getElementById('main-image').setAttribute('src', imageSrc);
    });
});

$(document).ready(function() {
    function adjustImageHeight() {
        var sectionsHeight = 0;
        $('.sections .section').each(function() {
            sectionsHeight += $(this).outerHeight();
        });
        $('#main-image').height(sectionsHeight);
    }
    adjustImageHeight();
    $(window).resize(adjustImageHeight);
});

$(document).ready(function() {
    let currentSlide = 0;
    const totalSlides = $('.slide').length;

    function updateSlider() {
        let slideIndexes = [];
        if (currentSlide === 0) {
            slideIndexes = [totalSlides - 1, currentSlide, currentSlide + 1];
        } else if (currentSlide === totalSlides - 1) {
            slideIndexes = [currentSlide - 1, currentSlide, 0];
        } else {
            slideIndexes = [currentSlide - 1, currentSlide, currentSlide + 1];
        }

        const offset = -slideIndexes[1] * (100 / 3 + 3.33) + '%';
        $('.slider').css('transform', 'translateX(' + offset + ')');
        $('.dot').removeClass('active');
        $('.dot[data-slide="' + slideIndexes[1] + '"]').addClass('active');
    }

    $('.dot').on('click', function() {
        currentSlide = $(this).data('slide');
        updateSlider();
    });

    $('.next-button').on('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    $('.prev-button').on('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
});
