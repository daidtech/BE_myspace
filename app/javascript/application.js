// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import 'jquery'
import 'jquery_ujs'


const removeActiveNav = () => {
  const cus_nav_items = $('.cus-nav-item')
  for (const nav of cus_nav_items) {
    console.log("🚀 ~ file: application.js:13 ~ removeActiveNav ~ nav.classList:", nav.classList)
  }
}

const handleClickNav = (e) => {
  // e.preventDefault()
}
window.addEventListener("load", () => {
  const cus_nav_items = $('.cus-nav-item')
  for (const nav of cus_nav_items) {
    nav.addEventListener("click", (e) => handleClickNav(e))
  }
})