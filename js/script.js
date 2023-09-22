// collapse
$('.collapse').collapse()
// show sections while scroll add animate to every section
var secoundSectionContent = document.querySelector('.secound-section-content')
var squarsDiv = document.querySelector('.squares')
var squareOne = document.querySelector('.square-one')
var squareTwo = document.querySelector('.square-two')
var squareThree = document.querySelector('.square-three')
var squareFour = document.querySelector('.square-four')
var conectHeader = document.querySelector('.conect-header')
var fristLeftInputs = document.querySelector('.frist-left-inputs')
var secondLeftInputs = document.querySelector('.second-left-inputs')
var thirdLeftInputs = document.querySelector('.third-left-inputs')
var rightInputsContact = document.querySelector('.right-inputs')

function animated(section, fadeType, value) {
  var spaceFromTop = section.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - value) {
    section.style.visibility = 'visible'
    section.classList.add('animate__animated')
    section.classList.add(fadeType)
  }
}

window.addEventListener('scroll', () =>
  animated(secoundSectionContent, 'animate__fadeInLeft', 400),
)
window.addEventListener('scroll', animated2)
window.addEventListener('scroll', () =>
  animated(conectHeader, 'animate__fadeInLeft', 500),
)
window.addEventListener('scroll', () =>
  animated(rightInputsContact, 'fadeInRight', 500),
)
window.addEventListener('scroll', () =>
  animated(fristLeftInputs, 'animate__fadeInLeft', 480),
)
window.addEventListener('scroll', () =>
  animated(secondLeftInputs, 'animate__fadeInLeft', 550),
)
window.addEventListener('scroll', () =>
  animated(thirdLeftInputs, 'animate__fadeInLeft', 600),
)

function animated2() {
  var spaceFromTop = squarsDiv.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    squarsDiv.style.visibility = 'visible'
    squareOne.classList.add('animated')
    squareOne.classList.add('fadeInLeft')
    squareTwo.classList.add('animated2s')
    squareTwo.classList.add('fadeInUp')
    squareThree.classList.add('animated3s')
    squareThree.classList.add('fadeInUp')
    squareFour.classList.add('animated4s')
    squareFour.classList.add('fadeInRight')
  }
}

// // add class active to li
var secoundSection = document.querySelector('.secound-section')
var thirdSection = document.querySelector('.third-section')
var contactSection = document.querySelector('.contact-section ')

var homeUl = document.querySelector('.home')
var aboutUl = document.querySelector('.about')
var workUl = document.querySelector('.work')
var contactUl = document.querySelector('.contact')

var spaceFromTop = secoundSection.offsetTop
var spaceFromTop1 = thirdSection.offsetTop
var spaceFromTop7 = contactSection.offsetTop

window.addEventListener('scroll', activeAbout)

function activeHome() {
  var spaceFromTop = secoundSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll < spaceFromTop) {
    homeUl.classList.add('active')
    aboutUl.classList.remove('active')
  }
}

activeHome()
function activeAbout() {
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 300) {
    homeUl.classList.remove('active')
    aboutUl.classList.add('active')
    if (windowscroll >= spaceFromTop1 - 400) {
      aboutUl.classList.remove('active')
      workUl.classList.add('active')
      if (windowscroll >= spaceFromTop7 - 400) {
        workUl.classList.remove('active')
        contactUl.classList.add('active')
      } else {
        contactUl.classList.remove('active')
        workUl.classList.add('active')
      }
    } else {
      workUl.classList.remove('active')
      aboutUl.classList.add('active')
    }
  } else {
    aboutUl.classList.remove('active')
    homeUl.classList.add('active')
  }
}

// //click on every li to scroll to her section
function clickOnNavLinks(spaceTop, value) {
  scroll({
    top: spaceTop - value,
    behavior: 'smooth',
  })
}
homeUl.addEventListener('click', () => clickOnNavLinks(0, 0))

aboutUl.addEventListener('click', () => clickOnNavLinks(spaceFromTop, 100))

workUl.addEventListener('click', () => clickOnNavLinks(spaceFromTop1, 60))

contactUl.addEventListener('click', () => clickOnNavLinks(spaceFromTop7, 40))

// icon minue
var menuIcone = document.querySelector('.menu-icon ')
var fixedSection = document.querySelector('.fixed-section')
var pageMainContent = document.querySelector('.page-main-content')
var allPageContent = document.querySelector('.page-content')
const firstSection = document.querySelector('.frist-section')
var mood
menuIcone.addEventListener('click', showFixedSection)
function showFixedSection() {
  if (window.innerWidth < 770) {
    if (fixedSection.style.width == '0px') {
      firstSection.style.marginLeft = '300px'
      allPageContent.style.marginLeft = '300px'
      pageMainContent.style.overflow = 'hidden'
      fixedSection.style.display = 'block'
      fixedSection.style.zIndex = 10
      setTimeout(() => {
        fixedSection.style.width = '300px'
        fixedSection.style.opacity = '1'

        menuIcone.innerHTML = '<i class="fa-solid fa-xmark"></i>'
      }, 100)

      mood = 'show'
    } else {
      fixedSection.style.width = '0px'
      firstSection.style.marginLeft = '0px'
      allPageContent.style.marginLeft = '0px'
      setTimeout(() => {
        fixedSection.style.opacity = '0'
        fixedSection.style.display = 'none'
      }, 550)
      setTimeout(() => {
        menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
      }, 250)
    }
  } else {
    fixedSection.style.width = '300px'
    firstSection.style.marginLeft = '25%'
  }
}
window.addEventListener('resize', function () {
  if (window.innerWidth > 770) {
    fixedSection.style.width = '300px'
    firstSection.style.marginLeft = '25%'
    allPageContent.style.marginLeft = '27%'
    fixedSection.style.display = 'block'
    fixedSection.style.opacity = 1
    menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
  } else {
    fixedSection.style.width = '0px'
    firstSection.style.marginLeft = '0px'
    allPageContent.style.marginLeft = '0px'
    menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
  }
})
function removeFixedSection() {
  if (window.innerWidth < 770) {
    fixedSection.style.width = '0px'
  }
}
removeFixedSection()
window.addEventListener('click', hideLightBox)
window.addEventListener('scroll', hideLightBox)
function hideLightBox(e) {
  if (window.innerWidth < 770) {
    if (mood == 'show' && fixedSection.style.width == '300px') {
      fixedSection.style.width = '0px'
      firstSection.style.marginLeft = '0px'
      allPageContent.style.marginLeft = '0px'
      mood = ''
      setTimeout(() => {
        fixedSection.style.opacity = 0
        fixedSection.style.display = 'none'
        menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
      }, 200)
    }
  }
}
