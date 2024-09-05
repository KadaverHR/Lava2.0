

$(document).ready(function () {


  let floorList = document.querySelector('.main__list')

  let floors = new Array(50)

  for (i = 1; i < 51; i++) {
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

  })


  btnBack.addEventListener('click', () => {
    location.reload()
  })





  let addMap = (thisCoutFloor) => {
    let l = 1
    let hakaList = floorsArray(thisCoutFloor)
    hakaList.forEach(element => {



      let count = -1
      let i = -1

      let mapTitle = document.querySelector('.floor__map-title')

      mapTitle.innerText = 'Этаж ' + thisCoutFloor

      let hakaBox = document.createElement('div')
      hakaBox.classList.add('haka__box')


      let hakaBoxTitle = document.createElement('div')
      hakaBoxTitle.classList.add('haka__box-title')
      hakaBoxTitle.innerHTML = `Версия ${l}`
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
            hakaBlock.innerHTML = `	<div value="start" class="haka start">
       
      </div>`
            break;
          case 'ball':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/ball.png" >
      </div>`
            break;
          case 'map':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/map.png" >
      </div>`
            break;
          case 'stylus':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/stylus.png" >
      </div>`
            break;
          case 'hammer':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/hammer.png" >
      </div>`
            break;
          case 'book':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/book.png" >
      </div>`
            break;
          case '0':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/0.png" >
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


  let floorsArray = (thisCoutFloor) => {

    let floor = new Array(50)

    floor[1] = [
      // 1-1
      [`door`, `mob`, `mob`, null, `mob`, null, null, null, `mob`, `elite`, `stone`, `mob`, `mob`, `mob`, null, null, `mob`, `mob`, `mob`, null, `elite`, null, `elite`, `stone`, `stone`, `stone`, null, null, `haka`, `elite`, null, null, `stone`, null, null, `start`, null, null, null, `mob`],
      // 1-2
      [`door`, `mob`, null, null, `mob`, null, `stone`, null, null, null, null, `mob`, null, `mob`, `stone`, `mob`, null, `mob`, `mob`, `elite`, `elite`, `mob`, `elite`, null, `stone`, `mob`, null, null, `mob`, `haka`, null, null, null, `stone`, `mob`, `start`, null, `stone`, `mob`, null],
      // 1-3
      [`door`, `mob`, null, null, `mob`, null, `stone`, null, null, null, null, `mob`, null, `mob`, `stone`, `mob`, null, `mob`, `mob`, `elite`, `elite`, `mob`, `elite`, null, `stone`, `mob`, null, null, `mob`, `haka`, null, null, null, `stone`, `mob`, `start`, null, `stone`, `mob`, null],
    ]

    floor[2] = [
      [`door`, `mob`, `mob`, null, `mob`, null, null, null, `mob`, `elite`, `stone`, `mob`, `mob`, `mob`, null, null, `mob`, `mob`, `mob`, null, `elite`, null, `elite`, `stone`, `stone`, `stone`, null, null, `haka`, `elite`, null, null, `stone`, null, null, `start`, null, null, null, `mob`],

      [`door`, `mob`, null, null, `mob`, null, `stone`, null, null, null, null, `mob`, null, `mob`, `stone`, `mob`, null, `mob`, `mob`, `elite`, `elite`, `mob`, `elite`, null, `stone`, `mob`, null, null, `mob`, `haka`, null, null, null, `stone`, `mob`, `start`, null, `stone`, `mob`, null],

      [`door`, `mob`, null, null, `mob`, null, `stone`, null, null, null, null, `mob`, null, `mob`, `stone`, `mob`, null, `mob`, `mob`, `elite`, `elite`, `mob`, `elite`, null, `stone`, `mob`, null, null, `mob`, `haka`, null, null, null, `stone`, `mob`, `start`, null, `stone`, `mob`, null],
    ]









    //Танечка

    floor[43] = [
      // 43-1
      ['door', 'stone', 'mob', 'stone', null,
        'elite', 'mob', 'map', 'book', 'mob',
        'haka', null, 'mob', 'mob', 'stone',
        null, null, 'mob', 'elite', 'mob',
        null, 'mob', 'stone', 'elite', 'mob',
        null, 'elite', null, 'elite', null,
        null, 'elite', 'elite', null, 'elite',
        'start', null, 'stylus', 'mob', 'mob'],
      // 43 - 2
      [null, 'door', 'stylus', 'mob', 'mob',
        'mob', null, 'mob', 'elite', 'elite',
        'stone', 'mob', 'haka', null, null,
        'elite', null, 'mob', 'stone', 'stone',
        'map', 'mob', 'mob', 'stone', 'elite',
        'elite', null, null, 'elite', 'mob',
        null, 'book', null, 'mob', null,
        'start', null, 'elite', 'mob', 'elite'],
      // 43 - 3
      ['door', 'elite', 'stone', 'elite', null,
        'elite', 'book', 'elite', 'mob', 'mob',
        'stone', 'map', 'haka', 'stone', null,
        'elite', 'mob', 'stone', null, 'mob',
        'stylus', 'mob', 'mob', null, 'mob',
        'elite', 'mob', 'elite', 'elite', null,
        null, 'mob', 'mob', null, 'mob',
        'start', null, null, null, null],
      // 43 - 4
      ['stylus', 'door', 'elite', 'mob', 'mob',
        'elite', null, 'elite', null, 'elite',
        'stone', 'stone', 'map', null, null,
        null, null, 'elite', 'book', null,
        'mob', null, 'mob', 'mob', 'stone',
        null, 'elite', 'haka', 'mob', 'mob',
        null, 'stone', 'elite', 'elite', 'mob',
        'start', null, 'mob', 'mob', 'mob'],
      // 43 - 5
      ['elite', 'door', null, 'elite', 'mob',
        'stone', 'stone', 'mob', 'mob', null,
        'mob', 'stylus', null, null, 'stone',
        'mob', 'elite', 'map', 'mob', null,
        'elite', 'elite', 'stone', 'mob', 'elite',
        'book', 'elite', 'mob', null, 'haka',
        null, 'mob', 'mob', 'elite', null,
        'start', null, 'mob', null, 'elite']

    ]

    console.log(floor[thisCoutFloor])

    return floor[thisCoutFloor]

    // let hakaList = [`door`, `mob`, `mob`, null, `mob`,
    //   null, null, null, `mob`, `elite`,
    //   `stone`, `mob`, `mob`, `mob`, null,
    //   null, `mob`, `mob`, `mob`, null,
    //   `elite`, null, `elite`, `stone`, `stone`,
    //   `stone`, null, null, `haka`, `elite`,
    //   null, null, `stone`, null, null,
    //   'start', null, null, null, `mob`]

    return hakaList
  }
})