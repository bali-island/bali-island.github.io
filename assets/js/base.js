$('document').ready(function(){
    // Mobile menu toggle with CSS animations
    $('.navicon').click(function(e) {
        e.preventDefault();
        $('.navbar').toggleClass('active');
        $('.navicon').toggleClass('active');
    });

    // Close mobile menu when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.navicon, .navbar').length) {
            $('.navbar').removeClass('active');
            $('.navicon').removeClass('active');
        }
    });
});
