// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import 'jquery'
import 'jquery_ujs'

const updateMenuBorderPosition = (top) => {
  $('#left__sidebar').css({top: top+'px'})
}

const changeActiveTab = (e) => {
  const cus_nav_items = $('.cus-nav-item')
  console.log('cus_nav_items', cus_nav_items)
  for (const nav of cus_nav_items) {
    $(nav).removeClass('active')
  }
  $(e.target).addClass('active')
  updateMenuBorderPosition($(e.target).position().top - 45)
}

const handleClickNav = (e) => {
  e.preventDefault()
  changeActiveTab(e)
}

const main = () => {
  const cus_nav_items = $('.cus-nav-item')
  for (const nav of cus_nav_items) {
    nav.addEventListener("click", (e) => handleClickNav(e))
  }
}

document.addEventListener("turbo:load", function () {

  main()
});