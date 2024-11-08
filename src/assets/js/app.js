// import './jquery.js';
import './floors.js';
import { floorsArray } from "./floors.js"
import $ from 'jquery'
import html2canvas from 'html2canvas';


$(document).ready(function () {

  //меню 

  let burger = document.querySelector('#hamburger-menu-mob');
  let menu = document.querySelector('#catalog-drop-mob');
  let menuLinks = menu.querySelectorAll('.catalog-link');
  let closeMenu = menu.querySelector('#close-mob')

  burger.addEventListener('click', function () {
    menu.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');
  });

  closeMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');
  });

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      menu.classList.remove('active');
      document.body.classList.remove('stop-scroll')
    })
  });


  let containerWidth = document.querySelector('.container').offsetWidth
  let windowWidth = window.innerWidth;
  let a = Math.ceil(containerWidth / 3 * 2 + (windowWidth - containerWidth) / 2);
  menu.style.width = `${a}px`

  ////



  let floorList = document.querySelector('.main__list')

  let floors = new Array(50)

  for (let i = 1; i < 51; i++) {
    floors[i] = i;
  }

  floors.forEach(element => {

    let floorCount = document.createElement('button')
    floorCount.classList.add('main__floor')
    floorCount.setAttribute('atr', element)
    floorCount.innerText = element
    floorList.append(floorCount)
  });


  let btnBack = document.querySelector('.header__btn-back')
  let floorMap = document.querySelector('.floor__map')
  let floorMapBox = document.querySelector('.floor__map-box')
  let floorListContainer = document.querySelector('.main__floor-box')

  $(floorList).on('click', '.main__floor', function () {
    event.preventDefault()
    floorListContainer.classList.add('d-n')
    floorMapBox.classList.remove('d-n')

    btnBack.classList.remove('d-n')

    let thisCoutFloor = this.getAttribute('atr')

    addMap(thisCoutFloor)

    // console.log(thisCoutFloor)
  })


  btnBack.addEventListener('click', () => {
    location.reload()
  })

  // console.log(floorsArray(14))

  let addMap = (thisCoutFloor) => {
    let l = 1
    // console.log(thisCoutFloor)
    let hakaList = floorsArray(thisCoutFloor)
    // console.log(hakaList)
    hakaList.forEach(element => {



      let count = -1
      let i = -1

      // let mapTitle = document.querySelector('.floor__map-title')

      // mapTitle.innerText = 'Этаж ' + thisCoutFloor

      let hakaBox = document.createElement('div')
      hakaBox.classList.add('haka__box')
      hakaBox.setAttribute('id', `${thisCoutFloor}-${l}`)


      let hakaBoxTitle = document.createElement('button')
      hakaBoxTitle.classList.add('haka__box-title')
      hakaBoxTitle.innerHTML = `Этаж ${thisCoutFloor} Версия ${l}`
      // hakaBoxTitle.setAttribute('id', `${thisCoutFloor}-${l}`)
      hakaBox.append(hakaBoxTitle)


      element.forEach(element => {
        i++
        let hakaBlock = document.createElement('div')
        hakaBlock.classList.add('haka__block')


        switch (element) {
          case "NULL":
            hakaBlock.innerHTML = `	<div value="" class="haka">
   
      </div>`
            break;
          case 'mob':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/MB.png" >
      </div>`
            break;
          case 'stone':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/S.png" >
      </div>`
            break;
          case 'elite':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/B.png" >
      </div>`
            break;
          case 'haka':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/BB.png" >
      </div>`
            break;
          case 'door':
            hakaBlock.innerHTML = `	<div value="" class="haka">
        <img src="assets/img/D.png" >
      </div>`
            break;
          case 'start':
            hakaBlock.innerHTML = `	<div value="" class="haka">
        <img src="assets/img/start.jpg" >
      </div>`

            break;
          case 'ball':
            hakaBlock.innerHTML = `	<div value = "block" class="haka" >
    <img src="assets/img/ball.png" >
    </div>`
            break;
          case 'map':
            hakaBlock.innerHTML = `	<div value = "block" class="haka" >
    <img src="assets/img/map.png" >
    </div>`
            break;
          case 'stylus':
            hakaBlock.innerHTML = `	<div value = "block" class="haka" >
    <img src="assets/img/stylus.png" >
    </div>`
            break;
          case 'hammer':
            hakaBlock.innerHTML = `	<div value = "block" class="haka" >
    <img src="assets/img/hammer.png" >
    </div>`
            break;
          case 'book':
            hakaBlock.innerHTML = `	<div value = "block" class="haka" >
    <img src="assets/img/book.png" >
    </div>`
            break;
          case 0:
            hakaBlock.innerHTML = `	<div value = "block" class="haka" >
    <img src="assets/img/0.png" >
    </div>`
            break;

          case null:
            hakaBlock.innerHTML = `	<div value = "block" class="haka" >
    <img src="assets/img/null2.png" >
    </div>`
            break;

        }
        count = count + 1

        hakaBox.append(hakaBlock)



      })

      l++
      floorMap.append(hakaBox)
    });

  }




  ///снимок экрана




  // html2canvas(document.getElementById('map'), {
  //   useCORS: true,
  //   taintTest: false,
  //   allowTaint: true
  // }).then(canvas => {
  //   // Полученный снимок мира легко редактируется!

  //   // Затем инициируем скачивание PNG-изображения
  //   const link = document.createElement('a');
  //   link.download = 'div-screenshot.png';
  //   link.href = canvas.toDataURL();
  //   link.click();
  // });



  $('.floor__map').on('click', '.haka__box-title', function () {
    let floorID = this.closest('.haka__box').getAttribute('id');
    // console.log('floorID', floorID)

    html2canvas(document.getElementById(floorID), {
      useCORS: true,
      taintTest: false,
      allowTaint: true
    }).then(canvas => {
      // Затем инициируем скачивание PNG-изображения
      const link = document.createElement('a');
      // link.download = 'div-screenshot.png';
      // link.href = canvas.toDataURL();
      link.click();
    });
  });

})