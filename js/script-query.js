$(window).scroll(function(){
    if ($(window).scrollTop() >= 75) {
        $('.topnav a').addClass('smaller');
        $('.dropdown button').addClass('smaller');
        $('.topnav img').addClass('displayNone');
        $('.topnav > .bg').addClass('displayBG');
        $('.topnav > .scrolledLogo').addClass('displayShow');
        $('#hamburger span').addClass('hamburgerColor');
   }
    else {
        $('.topnav a').removeClass('smaller');
        $('.dropdown button').removeClass('smaller');
        $('.topnav img').removeClass('displayNone');
        $('.topnav > .bg').removeClass('displayBG');
        $('.topnav > .scrolledLogo').removeClass('displayShow');
        $('#hamburger span').removeClass('hamburgerColor');
    }
});

var parallax = function($object, multiplier){
  multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.75;
  multiplier = 1 - multiplier;
  var $doc = $(document);
  $object.css({"background-attatchment" : "fixed"});
     $(window).scroll(function(){
       var from_top = $doc.scrollTop(),
           bg_css = '0px ' +(multiplier * from_top) + 'px';
       $object.css({"background-position" : bg_css });
     });
};

parallax($(".whoAreWe"));
