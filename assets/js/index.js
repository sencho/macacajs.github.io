(function() {

  var doc = document.documentElement
  var body = document.body
  var sidebar = document.getElementById('sidebar')

  // listen for scroll event to do positioning
  window.addEventListener('scroll', toggleSidebarClass, false)
  window.addEventListener('resize', toggleSidebarClass, false)
  toggleSidebarClass()

  // init smooth scroll
  smoothScroll.init({
    speed: 400,
    offset: window.innerWidth > 720 ? 40 : 58
  })

  function toggleSidebarClass() {
    if (!sidebar || !sidebar.classList) {
      return
    }

    var top = doc && doc.scrollTop || body.scrollTop

    if (top > 70) {
      sidebar.classList.add('fixed')
    } else {
      sidebar.classList.remove('fixed')
    }
  }

})()
