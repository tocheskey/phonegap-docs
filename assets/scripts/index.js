document.addEventListener("DOMContentLoaded", function(event) {

  var getScrollTopElement =  function (e){
    var top = 0;
    while (e.offsetParent != undefined && e.offsetParent != null){
      top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
      e = e.offsetParent;
    }
    return top;
  };

  var sectionLinks = Sizzle('nav.sidebar__list ul a');
  var sections = [];
  for (var i = 0; i < sectionLinks.length; i++) {
    var link = sectionLinks[i].href;
    var section = {
      link: sectionLinks[i],
      anchor: link.substr(link.indexOf('#'))
    };
    section.position = getScrollTopElement(Sizzle(section.anchor)[0]);
    sections.push(section);
  }
  document.onscroll = function(e) {
    var scrollTop = (document.body || document.documentElement || document.body.parentNode).scrollTop;
    var totalHeight = document.body.offsetHeight;
    var visibleHeight = document.documentElement.clientHeight;
    var currentSection;
    if (totalHeight <= scrollTop + visibleHeight ) {
      currentSection = sections[sections.length - 1];
    } else {
      for (var i = sections.length - 1; i >= 0; i--) {
        if(scrollTop >= sections[i].position) {
          currentSection = sections[i];
          break;
        }
      }
      if(!currentSection){
        currentSection = sections[0];
      }
    }
    if(!currentSection.link.classList.contains('current')) {
      for (var i = 0; i < sections.length; i++) {
        sections[i].link.classList.remove("current");
      }
      currentSection.link.classList.add("current");
    }
  }
});
