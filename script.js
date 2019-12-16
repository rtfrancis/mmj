console.log("trying");


(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);

//   $(window).scroll(function(event) {
  
//     $(".body").each(function(i, el) {
//       var el = $(".features__grid");
//       if (el.visible(true)) {
//         el.addClass("come-in"); 
//       } 
//     });

//     $(".app").each(function(i, el) {
//         var el = $(".app__phone");
//         if (el.visible(true)) {
//           el.addClass("come-in"); 
//         } 
//       });
    
//   });


//   var win = $(window);
//   var allMods = $(".body2");
  
//   // Already visible modules
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("already-visible"); 
//     } 
//   });
  
//   win.scroll(function(event) {
    
//     allMods.each(function(i, el) {
//       var el = $(el);
//       if (el.visible(true)) {
//         el.addClass("come-in"); 
//       } 
//     });
    
//   });

// var win = $(window);

// var allMods = $(".features");

// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible"); 
//   } 
// });

// win.scroll(function(event) {
  
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in"); 
//     } 
//   });
  
// });