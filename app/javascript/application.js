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
  const cus_nav_items = $('.cus-nav-item')
  for (const nav of cus_nav_items) {
    $(nav).removeClass('active')
  }
  $(`#${e.target.id}`).addClass('active')
  updateMenuBorderPosition($(`#${e.target.id}`).position().top - 45)
}

const handleClickNav = (e) => {
  e.preventDefault()
  changeActiveTab(e)
}

window.addEventListener("load", () => {
  const cus_nav_items = $('.cus-nav-item')
  for (const nav of cus_nav_items) {
    nav.addEventListener("click", (e) => handleClickNav(e))
  }
})