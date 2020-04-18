$(function () {
  // Cache variables for increased performance on devices with slow CPUs.
  var flexContainer = $('div.flex-container')
  var searchBox = $('.search-box')
  var searchClose = $('.search-icon-close')
  var searchInput = $('#search-input')

  // Menu Settings
  $('.menu-icon, .menu-icon-close').click(function (e) {
    e.preventDefault()
    e.stopPropagation()
    flexContainer.toggleClass('active')
  })

  // Click outside of menu to close it
  flexContainer.click(function (e) {
    if (flexContainer.hasClass('active') && e.target.tagName !== 'A') {
      flexContainer.removeClass('active')
    }
  })

  // Press Escape key to close menu
  $(window).keydown(function (e) {
    if (e.key === 'Escape') {
      if (flexContainer.hasClass('active')) {
        flexContainer.removeClass('active')
      } else if (searchBox.hasClass('search-active')) {
        searchBox.removeClass('search-active')
      }
    }
  })

  // Search Settings
  $('.search-icon').click(function (e) {
    e.preventDefault()
    searchBox.toggleClass('search-active')
    searchInput.focus()

    if (searchBox.hasClass('search-active')) {
      searchClose.click(function (e) {
    		e.preventDefault()
    		searchBox.removeClass('search-active')
    	})
    }
  })
})

/** e-posta bültenine kayıt ol butonu bloğu */
$( "#mc-embedded-subscribe" ).click(function() {
  var input = document.getElementById("mce-EMAIL").value;
  sendMessage(input);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: input+' adresi kaydedildi',
    showConfirmButton: false,
    timer: 1500
  })
});

function sendMessage(message) {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discordapp.com/api/webhooks/701018182831439903/g9W-iB8sD16C5fgQn8B2s8l31uyZ3mpaGTnfbJRL9Zub5d6wjnS1wJWxw3D3EShDi3nR");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "yilmazalaca.com e-mail submit",
    avatar_url: "https://i.hizliresim.com/XRZuaQ.jpg",
    content: message
  }

  request.send(JSON.stringify(params));
}