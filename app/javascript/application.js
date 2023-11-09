  // Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import 'jquery'
import 'jquery_ujs'
import 'bootstrap'

const updateMenuBorderPosition = (top) => {
  $('#left__sidebar').css({top: top+'px'})
}

const changeActiveTab = (e) => {
  $('.cus-nav-item').removeClass('active')
  $(e.target).addClass('active')
}

const handleClickNav = (e) => {
  setTimeout(()=> {
    changeActiveTab(e)
    const position = $(e.target).position().top || 250
    updateMenuBorderPosition(position - 45)
  }, 200)
}

document.addEventListener("turbo:load", function () {
  $('.cus-nav-item').on('click', (e) => handleClickNav(e));
});