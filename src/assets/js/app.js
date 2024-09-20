

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
    floor[26] = [
      // 1
      [
        `door`, null, `hammer`, `mob`, `stone`,
        null, `mob`, `mob`, null, `elite`,
        `elite`, `mob`, `mob`, null, `mob`,
        `elite`, `elite`, null, `mob`, null,
        `stone`, null, `stone`, `elite`, null,
        `elite`, `stone`, `mob`, null, null,
        null, `mob`, `mob`, null, null,
        `start`, null, null, `mob`, `haka`
      ],
      //  2
      [
        `mob`, `elite`, `door`, `mob`, `mob`,
        `mob`, `mob`, `mob`, `haka`, null,
        `mob`, null, `stone`, `mob`, null,
        `stone`, `elite`, `elite`, null, null,
        null, `mob`, null, `stone`, `stone`,
        `mob`, null, null, `hammer`, null,
        null, null, `elite`, `elite`, `elite`,
        `start`, null, null, `mob`, null
      ],
      //  3
      [
        `elite`, `haka`, `door`, `stone`, `mob`,
        `elite`, `elite`, `mob`, null, `stone`,
        `stone`, `elite`, null, `mob`, `mob`,
        `stone`, `mob`, `elite`, null, `mob`,
        `mob`, null, null, `hammer`, null,
        `elite`, `mob`, `mob`, null, null,
        null, `mob`, null, `mob`, null,
        `start`, null, null, null, null
      ],
      // 4
      [
        `mob`, `mob`, `mob`, `door`, `mob`,
        `elite`, `mob`, null, `elite`, `stone`,
        `stone`, null, null, null, null,
        `mob`, `hammer`, null, null, `mob`,
        null, `elite`, `haka`, null, `mob`,
        `mob`, null, `mob`, `stone`, null,
        null, `elite`, null, `elite`, `elite`,
        `start`, null, `mob`, null, `stone`
      ],
      //  5
      [
        null, `haka`, `elite`, `stone`, `door`,
        null, `mob`, `mob`, `mob`, null,
        `mob`, `hammer`, null, `stone`, `mob`,
        `mob`, `mob`, `elite`, `mob`, null,
        `elite`, null, null, `elite`, null,
        null, null, `mob`, null, `stone`,
        null, `elite`, `elite`, `stone`, null,
        `start`, null, `mob`, `mob`, null
      ],
    ]

    floor[27] = [
      // 1
      [
        `elite`, `door`, `stone`, null, `elite`,
        null, `haka`, `mob`, `mob`, null,
        `elite`, `stone`, `mob`, `stone`, null,
        `mob`, `elite`, null, `mob`, `stone`,
        null, `elite`, null, `mob`, null,
        `mob`, `mob`, `elite`, `stylus`, `mob`,
        null, null, null, null, null,
        `start`, null, null, `mob`, `mob`
      ],
      //  2
      [
        `mob`, null, `elite`, `door`, `elite`,
        `mob`, `mob`, `mob`, `stone`, `mob`,
        null, `stone`, null, null, null,
        `elite`, null, `elite`, `mob`, `mob`,
        null, `elite`, `mob`, null, `haka`,
        `mob`, null, `stylus`, null, `stone`,
        null, `stone`, `mob`, null, `mob`,
        `start`, null, null, null, `elite`
      ],
      //  3
      [
        `door`, null, `mob`, `stone`, null,
        `haka`, null, `elite`, `elite`, null,
        `stylus`, `mob`, `mob`, `stone`, `mob`,
        null, `mob`, null, `stone`, `mob`,
        `elite`, `stone`, null, `elite`, `mob`,
        `mob`, `mob`, null, `elite`, `elite`,
        null, null, null, null, null,
        `start`, null, `mob`, null, `mob`
      ],
      // 4
      [
        `elite`, `mob`, `door`, null, null,
        `elite`, `stylus`, `mob`, `elite`, `mob`,
        null, `stone`, `mob`, null, `haka`,
        null, `mob`, `stone`, `mob`, `elite`,
        `mob`, null, `elite`, `stone`, null,
        null, null, `elite`, null, `mob`,
        null, `stone`, `mob`, `mob`, `mob`,
        `start`, null, null, null, null
      ],
      //  5
      [
        `mob`, `door`, `elite`, null, `elite`,
        `mob`, `mob`, `stone`, null, null,
        `stone`, null, `mob`, null, `mob`,
        `mob`, `stone`, `stylus`, null, `mob`,
        `mob`, `elite`, null, `mob`, null,
        `elite`, `elite`, null, null, `mob`,
        null, `haka`, `stone`, null, null,
        `start`, null, `mob`, `elite`, null
      ],
    ]

    floor[28] = [
      // 1
      [
        `elite`, `mob`, `door`, `mob`, `elite`,
        `mob`, `mob`, `elite`, `stone`, `map`,
        null, null, `mob`, `haka`, `mob`,
        `mob`, `mob`, null, null, `stone`,
        `elite`, `stone`, `stone`, null, null,
        `mob`, `mob`, null, null, null,
        null, null, null, `elite`, `mob`,
        `start`, null, null, null, `elite`
      ],
      //  2
      [
        null, null, `haka`, `elite`, `door`,
        `mob`, `elite`, `mob`, `stone`, `mob`,
        null, `mob`, `stone`, null, null,
        `mob`, null, `elite`, null, `mob`,
        null, `elite`, `mob`, `elite`, null,
        `mob`, `mob`, null, null, `mob`,
        null, `stone`, `mob`, `stone`, `elite`,
        `start`, null, null, `map`, null
      ],
      //  3
      [
        `haka`, null, `door`, `elite`, `elite`,
        null, null, null, `mob`, null,
        `mob`, `mob`, `stone`, `mob`, `mob`,
        `mob`, `mob`, `map`, null, `stone`,
        null, `mob`, `mob`, null, `elite`,
        `stone`, `elite`, null, `elite`, `mob`,
        null, null, `stone`, null, null,
        `start`, null, `elite`, null, `mob`
      ],
      // 4
      [`elite`, null, `mob`, `mob`, `door`,
        `mob`, null, `elite`, `elite`, `mob`,
        `mob`, null, `stone`, `elite`, null,
        null, null, `elite`, null, null,
        null, `mob`, `stone`, `mob`, `map`,
        `elite`, `mob`, `mob`, null, `stone`,
        null, `mob`, `stone`, null, `mob`,
        `start`, null, null, null, `haka`
      ],
      //  5
      [
        `mob`, null, `door`, `mob`, `mob`,
        `stone`, null, null, `elite`, `stone`,
        `stone`, null, `elite`, null, null,
        `elite`, `mob`, `elite`, `mob`, null,
        `mob`, null, `map`, null, `stone`,
        `haka`, `mob`, `mob`, null, `mob`,
        null, `mob`, null, null, `mob`,
        `start`, null, null, `elite`, `elite`
      ],
    ]

    floor[29] = [
      // 1
      [
        null, `mob`, null, null, `door`,
        null, null, `mob`, null, null,
        `stone`, `mob`, `mob`, null, `mob`,
        `elite`, `elite`, null, `mob`, null,
        `elite`, null, `mob`, `elite`, null,
        `mob`, `haka`, `mob`, `elite`, `elite`,
        null, `mob`, `mob`, `stone`, `ball`,
        `start`, null, `stone`, null, `stone`
      ],
      //  2
      [
        `elite`, null, `elite`, `mob`, `door`,
        `ball`, `elite`, null, null, `elite`,
        `mob`, null, null, `mob`, `mob`,
        `stone`, null, `stone`, `mob`, `elite`,
        `mob`, `mob`, `mob`, `mob`, null,
        null, null, `stone`, `stone`, `elite`,
        null, `mob`, `mob`, null, null,
        `start`, null, null, `haka`, null
      ],
      //  3
      [`elite`, `door`, null, null, `mob`,
        `mob`, `mob`, null, null, `stone`,
        null, `elite`, `stone`, `haka`, null,
        null, `mob`, `mob`, null, `mob`,
        null, null, `mob`, `mob`, null,
        null, `mob`, `stone`, `elite`, `mob`,
        null, null, `elite`, `elite`, `stone`,
        `start`, null, `ball`, `elite`, `mob`
      ],
      // 4
      [
        `door`, null, `elite`, `elite`, `ball`,
        `stone`, `mob`, `mob`, null, null,
        `mob`, null, `mob`, `elite`, null,
        `stone`, `mob`, `elite`, null, `stone`,
        `mob`, `stone`, `elite`, null, `haka`,
        null, `mob`, null, `mob`, `mob`,
        null, `mob`, `mob`, null, null,
        `start`, null, null, `elite`, null
      ],
      //  5
      [
        `door`, `stone`, null, null, null,
        null, `mob`, `elite`, `haka`, null,
        `mob`, `mob`, null, null, `mob`,
        `mob`, `mob`, null, `stone`, `mob`,
        `mob`, `elite`, `mob`, `mob`, null,
        `elite`, `elite`, `elite`, `ball`, `stone`,
        null, null, null, `elite`, `stone`,
        `start`, null, null, null, `mob`
      ],
    ]
    floor[30] = [
      // 1
      [
        `elite`, `stone`, `elite`, `door`, `mob`,
        null, `mob`, `stone`, `elite`, null,
        null, null, null, null, null,
        null, null, `mob`, `elite`, `elite`,
        `mob`, `mob`, `mob`, `book`, null,
        null, `haka`, null, `mob`, `mob`,
        null, `stone`, `mob`, `mob`, `mob`,
        `start`, null, null, `elite`, `stone`
      ],
      //  2
      [
        `mob`, `mob`, `door`, `stone`, null,
        `mob`, `elite`, `elite`, `mob`, null,
        null, `mob`, null, null, null,
        null, `elite`, `elite`, `mob`, `mob`,
        null, `mob`, null, `stone`, `stone`,
        `mob`, `elite`, `haka`, null, null,
        null, `elite`, null, `stone`, `mob`,
        `start`, null, null, `mob`, `book`
      ],
      //  3
      [
        `elite`, null, `stone`, `door`, `stone`,
        `haka`, null, `mob`, null, `elite`,
        `elite`, `mob`, `mob`, `mob`, `mob`,
        `stone`, `elite`, null, null, `mob`,
        null, `elite`, null, `mob`, null,
        `stone`, null, null, `mob`, `mob`,
        null, null, `elite`, `mob`, `book`,
        `start`, null, null, `mob`, null
      ],
      // 4
      [
        `mob`, `elite`, `door`, null, null,
        `elite`, `mob`, `mob`, null, null,
        `mob`, `stone`, null, `elite`, `mob`,
        `mob`, `stone`, `mob`, null, `elite`,
        `mob`, `mob`, null, null, null,
        null, null, null, `book`, `haka`,
        null, `stone`, `stone`, `elite`, `mob`,
        `start`, null, `mob`, null, `elite`
      ],
      //  5
      [
        `stone`, `elite`, `stone`, `door`, null,
        `mob`, `book`, `mob`, null, null,
        `elite`, null, null, null, `mob`,
        `mob`, `haka`, `mob`, `mob`, null,
        `stone`, `mob`, null, null, `mob`,
        `mob`, null, null, `elite`, `mob`,
        null, null, `elite`, null, `mob`,
        `start`, null, `elite`, `elite`, `stone`
      ],
    ]


    floor[31] = [
      // 1
      [`mob`, `mob`, `door`, `mob`, null,
        null, null, `mob`, `stone`, `elite`,
        null, null, `mob`, `haka`, `mob`,
        null, `mob`, `stone`, null, `mob`,
        null, `mob`, `mob`, `stylus`, `stone`,
        `mob`, null, `hammer`, `elite`, `elite`,
        null, `mob`, null, `stone`, `elite`,
        `start`, null, `elite`, null, `elite`],
      //  2
      [`mob`, `mob`, `door`, `stylus`, `mob`,
        `stone`, `elite`, null, `mob`, `mob`,
        null, null, null, `mob`, `stone`,
        `elite`, null, null, null, null,
        `elite`, `elite`, `mob`, `mob`, `stone`,
        `mob`, null, `stone`, null, `mob`,
        null, `mob`, `hammer`, `elite`, `elite`,
        `start`, null, `mob`, `haka`, null],
      //  3
      [null, `mob`, null, `door`, `mob`,
        `mob`, null, `stone`, `mob`, `mob`,
        `haka`, `elite`, `elite`, `stone`, `stylus`,
        `mob`, `mob`, `stone`, `mob`, `mob`,
        `mob`, `elite`, null, null, null,
        null, `hammer`, null, `mob`, null,
        null, `elite`, `elite`, `elite`, `stone`,
        `start`, null, null, null, `mob`],
      // 4
      [`stone`, null, `hammer`, `elite`, `door`,
        `mob`, `elite`, null, `elite`, `stone`,
        `stone`, `haka`, `mob`, `mob`, `elite`,
        null, `stylus`, `mob`, null, null,
        `mob`, `mob`, null, `stone`, `mob`,
        `mob`, `elite`, null, `elite`, `mob`,
        null, `mob`, null, null, `mob`,
        `start`, null, null, null, `mob`],
      //  5
      [null, `elite`, `door`, `mob`, `stone`,
        null, `elite`, `elite`, `stone`, null,
        `mob`, `mob`, `mob`, `mob`, `hammer`,
        `mob`, `stone`, null, `mob`, null,
        `mob`, null, `mob`, `stylus`, `mob`,
        null, null, `elite`, null, null,
        null, `mob`, `elite`, `haka`, null,
        `start`, null, `elite`, `mob`, `stone`],
    ]

    floor[32] = [
      // 1
      [
        `stone`, `elite`, `door`, `mob`, `stone`,
        `mob`, null, `mob`, null, `mob`,
        `haka`, null, null, `hammer`, `mob`,
        `mob`, null, null, null, `elite`,
        null, null, `elite`, `mob`, `mob`,
        `map`, null, `elite`, `elite`, `mob`,
        null, `stone`, null, `mob`, `elite`,
        `start`, null, `mob`, `stone`, `mob`
      ],
      //  2
      [
        `door`, `elite`, null, `mob`, null,
        null, `hammer`, `haka`, `elite`, null,
        `mob`, `mob`, null, `map`, `mob`,
        null, `elite`, `mob`, `mob`, `mob`,
        `mob`, `mob`, null, `mob`, `elite`,
        `stone`, `stone`, null, `stone`, `elite`,
        null, null, `elite`, null, `stone`,
        `start`, null, null, `mob`, `mob`
      ],
      //  3
      [
        `door`, `mob`, `elite`, `mob`, null,
        `stone`, `stone`, null, `elite`, `elite`,
        null, null, null, `elite`, null,
        `mob`, `mob`, `stone`, `haka`, `mob`,
        null, `stone`, `map`, null, `mob`,
        `mob`, null, `mob`, null, `mob`,
        null, `mob`, `mob`, `hammer`, `elite`,
        `start`, null, `elite`, `mob`, null
      ],
      // 4
      [
        `mob`, `mob`, `map`, `door`, `stone`,
        null, `mob`, `mob`, null, null,
        `mob`, `elite`, null, `mob`, null,
        `stone`, `mob`, null, null, `stone`,
        `elite`, `mob`, `elite`, null, null,
        `hammer`, `elite`, `mob`, null, `mob`,
        null, `stone`, null, `elite`, `mob`,
        `start`, null, `mob`, `haka`, `elite`
      ],
      //  5
      [
        `haka`, null, `elite`, `mob`, `door`,
        null, `mob`, `mob`, null, `mob`,
        null, `mob`, `mob`, `mob`, `elite`,
        `elite`, `elite`, `stone`, `elite`, null,
        `mob`, null, `stone`, `mob`, null,
        `mob`, null, `map`, `elite`, `stone`,
        null, null, `hammer`, null, null,
        `start`, null, `stone`, `mob`, `mob`
      ],
    ]

    floor[33] = [
      // 1
      [
        `ball`, `elite`, `door`, `stone`, null,
        null, null, `mob`, `elite`, `mob`,
        `stone`, `mob`, `haka`, `elite`, null,
        `mob`, null, `mob`, `elite`, `elite`,
        null, `mob`, `mob`, `stone`, null,
        `mob`, null, `hammer`, `stone`, `mob`,
        null, null, `mob`, null, `elite`,
        `start`, null, `mob`, `elite`, null
      ],
      //  2
      [
        `elite`, null, null, `stone`, `door`,
        `haka`, null, `stone`, null, `stone`,
        null, `mob`, `mob`, `stone`, null,
        `elite`, `elite`, `mob`, null, `mob`,
        `ball`, `mob`, `mob`, `hammer`, null,
        `elite`, `mob`, `elite`, `elite`, null,
        null, `mob`, `mob`, null, `mob`,
        `start`, null, `elite`, `mob`, null
      ],
      //  3
      [
        `elite`, `door`, null, null, `elite`,
        `hammer`, `elite`, `elite`, `stone`, `mob`,
        `elite`, null, null, `mob`, `mob`,
        `ball`, null, `stone`, null, `mob`,
        `stone`, null, `mob`, `mob`, null,
        null, null, `haka`, `mob`, `elite`,
        null, `elite`, `mob`, `mob`, null,
        `start`, null, `mob`, `mob`, `stone`
      ],
      // 4
      [
        `hammer`, `elite`, `stone`, `door`, null,
        `mob`, `stone`, `mob`, null, `elite`,
        `stone`, `mob`, `mob`, `haka`, `mob`,
        `mob`, null, null, `stone`, null,
        `mob`, null, null, `elite`, `mob`,
        `elite`, `ball`, `mob`, `elite`, null,
        null, `elite`, null, `mob`, `elite`,
        `start`, null, null, `mob`, null
      ],
      //  5
      [
        `mob`, `door`, `elite`, `hammer`, `elite`,
        null, `stone`, `elite`, `mob`, `stone`,
        null, null, `elite`, `ball`, `mob`,
        `elite`, `elite`, null, `mob`, `mob`,
        null, `mob`, null, null, `haka`,
        null, `mob`, `mob`, `mob`, `elite`,
        null, null, `mob`, `stone`, `mob`,
        `start`, null, null, `stone`, null
      ],
    ]
    floor[34] = [
      // 1
      [
        `elite`, `door`, `mob`, `elite`, `mob`,
        `stone`, `hammer`, `elite`, `elite`, null,
        `mob`, `elite`, null, `mob`, null,
        `mob`, null, null, null, `elite`,
        null, null, `stone`, `mob`, `mob`,
        `mob`, `stone`, null, `mob`, `mob`,
        null, `stone`, `mob`, null, `haka`,
        `start`, null, `elite`, `book`, null
      ],
      //  2
      [
        `stone`, null, `elite`, `door`, `stone`,
        `stone`, `mob`, `elite`, `mob`, null,
        `book`, `mob`, `haka`, `mob`, `mob`,
        `elite`, `elite`, `elite`, `mob`, `elite`,
        null, `elite`, null, null, null,
        `mob`, `mob`, `mob`, null, `stone`,
        null, null, null, `mob`, `mob`,
        `start`, null, null, null, `hammer`
      ],
      //  3
      [
        null, `haka`, `elite`, `door`, null,
        null, `mob`, null, `elite`, `mob`,
        `mob`, null, `book`, `mob`, `stone`,
        `mob`, `mob`, null, `mob`, `stone`,
        `elite`, null, `stone`, `mob`, `elite`,
        `elite`, `mob`, null, `stone`, null,
        null, `elite`, `hammer`, null, null,
        `start`, null, `mob`, `elite`, `mob`
      ],
      // 4
      [
        null, null, null, `stone`, `door`,
        null, `elite`, `mob`, `mob`, `mob`,
        `mob`, null, `book`, null, `mob`,
        `stone`, `mob`, `elite`, `elite`, null,
        `elite`, `stone`, `mob`, `mob`, `mob`,
        `elite`, `haka`, null, `stone`, `hammer`,
        null, null, `mob`, null, `mob`,
        `start`, null, null, `elite`, `elite`
      ],
      //  5
      [
        `mob`, `door`, `haka`, `elite`, null,
        `mob`, `elite`, `mob`, null, null,
        `elite`, `mob`, `elite`, `stone`, `elite`,
        `hammer`, null, null, `mob`, `elite`,
        null, `stone`, null, `mob`, `elite`,
        `stone`, null, `book`, null, `stone`,
        null, `mob`, null, `mob`, `mob`,
        `start`, null, null, `mob`, `mob`
      ],
    ]
    floor[35] = [
      // 1
      [
        `mob`, `elite`, `elite`, `door`, `mob`,
        null, `mob`, `mob`, `mob`, `mob`,
        `stone`, `mob`, `mob`, null, null,
        `mob`, `map`, `stone`, `haka`, null,
        null, null, `elite`, null, `elite`,
        null, null, `mob`, null, `elite`,
        null, null, `mob`, `elite`, `stone`,
        `start`, null, `elite`, `stone`, `stylus`
      ],
      //  2
      [
        `mob`, `door`, `elite`, `elite`, `elite`,
        `stone`, null, `mob`, `mob`, null,
        `mob`, null, `mob`, null, `haka`,
        `elite`, `stone`, null, `stylus`, null,
        `mob`, `elite`, `mob`, `elite`, null,
        `mob`, `mob`, null, null, `mob`,
        null, `elite`, `mob`, `stone`, `stone`,
        `start`, null, null, null, `map`
      ],
      //  3
      [
        `elite`, `mob`, `door`, null, `mob`,
        `mob`, `stone`, `stone`, `mob`, `elite`,
        `stylus`, null, `elite`, `mob`, `stone`,
        `mob`, `elite`, `stone`, null, `mob`,
        `haka`, `elite`, null, null, `mob`,
        null, `elite`, `mob`, null, `map`,
        null, `mob`, `elite`, null, null,
        `start`, null, `mob`, null, null
      ],
      // 4
      [
        null, null, `elite`, null, `haka`,
        `stone`, `elite`, `stone`, `stylus`, `mob`,
        `mob`, null, null, null, null,
        `mob`, `mob`, `mob`, `mob`, `mob`,
        `mob`, `elite`, null, `elite`, `mob`,
        null, `mob`, null, `map`, `elite`,
        null, `elite`, null, null, `stone`,
        `start`, null, `elite`, `mob`, `stone`
      ],
      //  5
      [
        null, null, null, `elite`, `door`,
        null, `elite`, `mob`, `mob`, `stylus`,
        `elite`, null, `mob`, null, `stone`,
        null, `mob`, null, `elite`, `mob`,
        `elite`, null, `mob`, `stone`, `mob`,
        `mob`, `mob`, `mob`, `elite`, `elite`,
        null, `haka`, null, `stone`, `stone`,
        `start`, null, `map`, `mob`, null
      ],
    ]

    floor[36] = [
      // 1
      [null, `elite`, `haka`, `elite`, `door`,
        null, `mob`, `elite`, `elite`, null,
        `mob`, null, `mob`, `mob`, `mob`,
        `mob`, `mob`, `elite`, null, `elite`,
        null, `stone`, `stylus`, `stone`, null,
        `elite`, null, `mob`, `mob`, `stone`,
        null, null, `ball`, `stone`, null,
        `start`, null, null, `mob`, `mob`],
      //  2
      [null, `door`, `mob`, `stone`, null,
        null, `elite`, `ball`, `mob`, null,
        `elite`, `mob`, `stylus`, `elite`, `mob`,
        `mob`, `mob`, null, `mob`, `mob`,
        `stone`, null, `mob`, null, `elite`,
        `haka`, `elite`, null, `elite`, `elite`,
        null, `mob`, `stone`, null, null,
        `start`, null, null, `stone`, `mob`],
      //  3
      [`stone`, `door`, `mob`, `stone`, `elite`,
        `mob`, `mob`, `stone`, null, `mob`,
        null, `mob`, `mob`, `elite`, `mob`,
        null, null, `mob`, `elite`, null,
        null, null, `mob`, `elite`, `elite`,
        null, null, `haka`, `ball`, `stylus`,
        null, `mob`, `elite`, `mob`, `elite`,
        `start`, null, null, `stone`, null],
      // 4
      [`stone`, null, `door`, `mob`, null,
        null, `stone`, null, `mob`, `elite`,
        null, `mob`, `elite`, null, `mob`,
        null, `elite`, `elite`, null, `haka`,
        null, `stone`, `stone`, `mob`, `stylus`,
        null, `mob`, `elite`, `mob`, `mob`,
        null, `mob`, `mob`, `mob`, `elite`,
        `start`, null, `ball`, `elite`, null],
      //  5
      [`ball`, null, `door`, `mob`, `elite`,
        null, `elite`, `stone`, null, null,
        `mob`, null, `elite`, `mob`, `haka`,
        `elite`, `mob`, `stone`, null, null,
        null, null, `mob`, `mob`, `elite`,
        `elite`, `elite`, null, null, `mob`,
        null, `mob`, `mob`, `mob`, `mob`,
        `start`, null, null, `stone`, `stone`],
    ]
    floor[37] = [
      // 1
      [`door`, 0, `stone`, `mob`, `stone`,
        `mob`, null, 0, `elite`, 0,
        `elite`, null, `mob`, 0, null,
        null, `haka`, `elite`, 0, `stone`,
        `mob`, `elite`, `book`, `stone`, `elite`,
        0, 0, 0, 0, 0,
        null, 0, `mob`, `mob`, 0,
        `start`, null, `elite`, `mob`, `elite`],
      //  2
      [`stylus`, `elite`, `stone`, `door`, `elite`,
        null, null, null, `mob`, null,
        null, `mob`, null, `mob`, `mob`,
        null, `elite`, `mob`, `elite`, `stone`,
        `mob`, `stone`, null, `mob`, null,
        `book`, null, `mob`, `stone`, `elite`,
        null, `elite`, `elite`, null, `mob`,
        `start`, null, `mob`, `mob`, `haka`],
      //  3
      [null, `door`, `mob`, `mob`, `mob`,
        `mob`, null, `elite`, `elite`, null,
        `elite`, `stylus`, null, null, `mob`,
        null, `mob`, `book`, `mob`, null,
        `stone`, null, null, `elite`, `haka`,
        `stone`, `elite`, `stone`, null, `mob`,
        null, `elite`, `stone`, `elite`, `mob`,
        `start`, null, `mob`, `mob`, null],
      // 4
      [`stone`, `door`, `mob`, `haka`, `elite`,
        null, `stone`, `book`, null, `mob`,
        `elite`, null, `mob`, `stone`, `elite`,
        null, `stylus`, null, `mob`, `mob`,
        `mob`, null, `elite`, `elite`, null,
        null, null, `mob`, `stone`, `elite`,
        null, `mob`, `mob`, `elite`, `mob`,
        `start`, null, `mob`, null, null],
      //  5
      [null, `mob`, `elite`, `stylus`, `door`,
        `stone`, null, null, `stone`, `mob`,
        `book`, `stone`, `mob`, null, `stone`,
        null, `mob`, `mob`, `haka`, null,
        `elite`, `elite`, `mob`, `elite`, `mob`,
        `elite`, `mob`, `mob`, null, null,
        null, `mob`, null, `mob`, `elite`,
        `start`, null, `elite`, null, null],
    ]

    floor[38] = [
      // 1
      [`door`, `elite`, `mob`, null, `elite`,
        `mob`, `stone`, null, `stone`, `mob`,
        `elite`, null, `mob`, `mob`, `haka`,
        `elite`, `ball`, `mob`, `mob`, `elite`,
        null, `mob`, `elite`, null, `mob`,
        null, `stone`, `mob`, null, null,
        null, null, `stone`, null, null,
        `start`, null, `elite`, `map`, `mob`],
      //  2
      [`mob`, `stone`, `door`, `mob`, `elite`,
        `mob`, null, `mob`, null, null,
        null, `stone`, `mob`, null, null,
        `elite`, `elite`, null, `elite`, `mob`,
        `haka`, null, `mob`, `map`, `stone`,
        `elite`, null, `mob`, `stone`, null,
        null, null, null, `elite`, `mob`,
        `start`, null, `mob`, `mob`, `elite`],
      //  3
      [`door`, `mob`, `elite`, `elite`, null,
        `mob`, null, `mob`, `elite`, `mob`,
        null, `mob`, null, `map`, null,
        `mob`, `elite`, null, `ball`, `stone`,
        `mob`, null, null, `elite`, `elite`,
        null, `mob`, null, `stone`, `elite`,
        null, `mob`, `stone`, null, `stone`,
        `start`, null, `haka`, `mob`, `mob`],
      // 4
      [`door`, `stone`, null, null, `map`,
        `mob`, `elite`, `mob`, `elite`, null,
        `mob`, `mob`, `mob`, null, `elite`,
        `mob`, `mob`, `elite`, null, `stone`,
        `stone`, `mob`, null, `haka`, null,
        `ball`, `mob`, `elite`, `elite`, `mob`,
        null, null, null, null, `elite`,
        `start`, null, null, `mob`, `stone`],
      //  5
      [`elite`, `stone`, `door`, `mob`, `stone`,
        null, null, `elite`, `elite`, `mob`,
        `mob`, null, `mob`, `mob`, `ball`,
        null, `elite`, null, `map`, null,
        `stone`, `mob`, `mob`, `elite`, null,
        `elite`, `mob`, `mob`, null, `mob`,
        null, null, `elite`, null, `stone`,
        `start`, null, `mob`, `haka`, null],
    ]

    floor[39] = [
      // 1
      [`door`, `elite`, `elite`, `elite`, `elite`,
        null, null, `mob`, `mob`, `map`,
        `mob`, `stone`, `book`, null, `elite`,
        `mob`, null, `stone`, `mob`, `elite`,
        `haka`, `mob`, `mob`, `stone`, null,
        `mob`, 0, 0, 0, 0,
        null, 0, `mob`, 0, 0,
        `start`, null, `elite`, `mob`, `stone`],
      //  2
      [`stone`, null, `mob`, null, `door`,
        null, `elite`, `map`, `mob`, null,
        null, `elite`, `stone`, `elite`, `mob`,
        null, `book`, null, null, null,
        `elite`, `mob`, null, `mob`, `mob`,
        `haka`, `mob`, null, `elite`, `mob`,
        null, `mob`, `stone`, `elite`, `stone`,
        `start`, null, `mob`, `mob`, `elite`],
      //  3
      [`door`, `mob`, `stone`, `stone`, `elite`,
        `mob`, `mob`, null, `haka`, `mob`,
        `mob`, `mob`, `mob`, null, `mob`,
        null, `elite`, null, null, `elite`,
        `stone`, null, null, `stone`, null,
        `mob`, null, null, `elite`, `elite`,
        null, `elite`, `elite`, `mob`, `elite`,
        `start`, null, null, `book`, `map`],
      // 4
      [`elite`, `stone`, `mob`, `door`, `mob`,
        `elite`, `stone`, `elite`, `mob`, `elite`,
        `mob`, null, null, `haka`, `elite`,
        `map`, null, null, `mob`, null,
        `stone`, null, `mob`, null, `elite`,
        `mob`, null, `mob`, null, `mob`,
        null, null, `mob`, `book`, `mob`,
        `start`, null, null, `stone`, `elite`],
      //  5
      [null, `elite`, `door`, `elite`, null,
        `mob`, `mob`, `mob`, `stone`, `elite`,
        null, null, `stone`, `book`, `mob`,
        null, `elite`, `mob`, `mob`, `stone`,
        `elite`, `map`, `elite`, `mob`, null,
        null, `mob`, null, null, `mob`,
        null, `stone`, null, `mob`, `mob`,
        `start`, null, null, null, `haka`],
    ]

    floor[40] = [
      // 1
      [null, null, `elite`, `elite`, `door`,
        `elite`, 0, 0, 0, 0,
        `mob`, 0, 0, 0, `haka`,
        `stone`, null, `stone`, 0, 0,
        0, 0, 0, 0, 0,
        0, `stone`, 0, `elite`, 0,
        null, `stone`, `ball`, 0, 0,
        `start`, null, 0, 0, `elite`],
      //  2
      [null, `mob`, `elite`, `door`, `elite`,
        null, `elite`, `mob`, `stone`, null,
        `mob`, null, null, `stone`, null,
        `stone`, `mob`, null, `mob`, null,
        `mob`, `mob`, null, null, `ball`,
        `elite`, `elite`, null, `mob`, `mob`,
        null, `haka`, `elite`, `mob`, `book`,
        `start`, null, `elite`, `stone`, `mob`],
      //  3
      [`door`, `elite`, `stone`, `elite`, `stone`,
        `mob`, `book`, `mob`, `stone`, `mob`,
        `mob`, null, null, `mob`, null,
        null, `mob`, `mob`, `elite`, `mob`,
        `mob`, null, null, null, null,
        `mob`, `mob`, `stone`, 0, `elite`,
        null, `elite`, null, `elite`, 0,
        `start`, null, null, `elite`, `haka`],
      // 4
      [`mob`, `elite`, `stone`, `door`, `mob`,
        `mob`, null, `mob`, `elite`, null,
        `mob`, `mob`, `elite`, `mob`, `haka`,
        null, null, null, null, `elite`,
        `elite`, null, `ball`, `mob`, `elite`,
        `mob`, `stone`, `elite`, null, `stone`,
        null, null, null, null, `mob`,
        `start`, null, `mob`, `book`, `stone`],
      //  5
      [`stone`, `door`, `mob`, `mob`, null,
        `elite`, `elite`, `elite`, null, null,
        `mob`, `ball`, null, null, `mob`,
        `elite`, null, null, null, `book`,
        `stone`, null, `mob`, `mob`, `mob`,
        `stone`, `mob`, `elite`, `elite`, `elite`,
        null, `mob`, `haka`, `elite`, `elite`,
        `start`, null, `stone`, null, null],
    ]
    floor[41] = [
      // 1
      [
        null, `door`, `stone`, `mob`, `haka`,
        null, `mob`, `elite`, null, `elite`,
        `mob`, `stone`, null, `elite`, `stone`,
        `mob`, `mob`, `elite`, `mob`, `elite`,
        `elite`, null, `mob`, null, `mob`,
        `stone`, `ball`, `mob`, null, null,
        null, `mob`, `elite`, `book`, `elite`,
        `start`, null, `mob`, `map`, null
      ],
      //  2
      [
        null, `elite`, `elite`, `door`, `ball`,
        null, `mob`, `stone`, `stone`, `elite`,
        `book`, null, `mob`, null, `mob`,
        `mob`, `mob`, `elite`, null, `mob`,
        `mob`, `elite`, `elite`, `haka`, `map`,
        `mob`, `stone`, `elite`, `mob`, null,
        null, null, `stone`, `mob`, `elite`,
        `start`, null, null, `mob`, null
      ],
      //  3
      [
        `mob`, `elite`, `elite`, `door`, `elite`,
        null, null, `stone`, null, `elite`,
        null, `stone`, null, null, `ball`,
        `elite`, `mob`, `mob`, `mob`, `map`,
        `elite`, null, null, `mob`, `mob`,
        `elite`, `book`, `stone`, `mob`, `mob`,
        null, null, `mob`, `mob`, `elite`,
        `start`, null, `haka`, `stone`, `mob`
      ],
      // 4
      [
        `elite`, null, `mob`, `mob`, `door`,
        `stone`, `ball`, `elite`, `mob`, `haka`,
        `stone`, `elite`, `elite`, `elite`, `map`,
        `book`, `mob`, null, `stone`, `elite`,
        null, null, `elite`, `elite`, `stone`,
        null, `mob`, `mob`, null, null,
        null, `mob`, `mob`, `mob`, `mob`,
        `start`, null, null, null, `mob`
      ],
      //  5
      [
        `door`, null, `elite`, null, `elite`,
        `mob`, `mob`, `mob`, null, `book`,
        null, `stone`, null, `mob`, `mob`,
        `mob`, `mob`, `mob`, `elite`, null,
        null, `mob`, `stone`, `ball`, null,
        `stone`, `elite`, `elite`, `elite`, `map`,
        null, `mob`, `haka`, null, `stone`,
        `start`, null, `elite`, `elite`, `mob`,
      ],
    ]

    floor[42] = [
      // 1
      [
        null, `stylus`, null, `door`, `elite`,
        `mob`, `mob`, `ball`, `haka`, `mob`,
        null, `mob`, `book`, null, `mob`,
        `mob`, `stone`, `stone`, null, `mob`,
        null, `elite`, `mob`, `elite`, `mob`,
        null, null, `mob`, `stone`, null,
        null, `stone`, `elite`, `elite`, `elite`,
        `start`, null, `elite`, `mob`, `elite`
      ],
      //  2
      [
        `mob`, `door`, `stone`, `mob`, `mob`,
        `mob`, `elite`, `elite`, null, `elite`,
        `book`, `mob`, null, null, `haka`,
        `elite`, `mob`, `stone`, `elite`, `stone`,
        `mob`, null, `stylus`, null, null,
        null, `stone`, `elite`, null, `ball`,
        null, `elite`, `mob`, `mob`, `mob`,
        `start`, null, null, `elite`, `mob`
      ],
      //  3
      [
        `mob`, `elite`, `door`, `mob`, `elite`,
        `elite`, `elite`, `haka`, null, null,
        `stone`, null, `mob`, null, `elite`,
        `stone`, null, `mob`, `mob`, `stylus`,
        `mob`, `mob`, `mob`, null, `book`,
        null, null, null, `elite`, `stone`,
        null, `mob`, `mob`, `mob`, `ball`,
        `start`, null, `stone`, `elite`, `elite`
      ],
      // 4
      [
        `mob`, `mob`, null, `mob`, `door`,
        null, `elite`, null, `elite`, null,
        `mob`, `mob`, `mob`, `mob`, null,
        `ball`, `mob`, null, `mob`, null,
        `stylus`, `stone`, `elite`, `mob`, `elite`,
        `stone`, `book`, `mob`, `elite`, `elite`,
        null, null, null, `elite`, `haka`,
        `start`, null, `stone`, `elite`, `stone`
      ],
      //  5
      [
        `door`, null, `elite`, null, `elite`,
        `mob`, `mob`, `mob`, null, `book`,
        null, `stone`, null, `mob`, `mob`,
        `mob`, `mob`, `mob`, `elite`, null,
        null, `mob`, `stone`, `ball`, null,
        `stone`, `elite`, `elite`, `elite`, `map`,
        null, `mob`, `haka`, null, `stone`,
        `start`, null, `elite`, `elite`, `mob`,
      ],
    ]

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
        'start', null, 'mob', null, 'elite'],
    ]

    floor[44] = [
      // 44-1
      ['elite', 'mob', 'stone', 'door', 'mob',
        'mob', null, null, 'elite', 'stylus',
        'mob', null, 'mob', null, 'elite',
        null, 'mob', 'mob', null, 'stone',
        'stone', 'elite', 'mob', null, 'ball',
        null, null, 'elite', 'elite', null,
        null, 'haka', 'map', 'elite', 'mob',
        'start', null, 'elite', 'mob', 'mob'],
      // 44-2
      ['mob', 'door', 'mob', 'stylus', 'stone',
        'elite', null, null, 'stone', null,
        'elite', null, 'haka', null, 'mob',
        'mob', 'elite', 'stone', null, 'mob',
        'mob', null, 'elite', 'elite', 'elite',
        'elite', 'mob', 'stone', 'mob', 'map',
        null, null, 'ball', 'mob', 'mob',
        'start', null, 'mob', null, 'elite'],
      // 44 - 3
      ['mob', 'door', 'mob', 'elite', 'stone',
        'mob', 'stone', null, null, 'haka',
        'mob', 'mob', 'elite', 'stone', null,
        'mob', 'stylus', 'elite', 'elite', 'elite',
        'elite', 'mob', 'mob', 'elite', null,
        'elite', 'ball', null, 'mob', 'mob',
        null, 'stone', null, null, null,
        'start', null, 'map', 'mob', null],
      // 44 - 4
      ['elite', 'door', 'elite', 'mob', 'stone',
        null, 'mob', 'elite', 'mob', 'mob',
        null, 'stone', 'mob', 'haka', null,
        'stone', 'elite', 'stylus', 'elite', 'elite',
        'map', null, null, 'stone', 'elite',
        'elite', null, 'mob', 'ball', null,
        null, 'mob', null, 'mob', 'mob',
        'start', null, 'mob', null, 'mob'],
      // 44 - 5
      ['elite', 'door', 'mob', 'stone', 'mob',
        'mob', 'elite', null, 'elite', null,
        null, 'elite', 'stone', null, 'stone',
        'elite', 'mob', 'mob', 'mob', 'mob',
        'elite', 'mob', null, null, 'stone',
        null, 'mob', 'map', null, 'elite',
        null, 'elite', 'haka', null, 'stylus',
        'start', null, 'mob', 'mob', 'ball'],
    ]

    floor[45] = [
      // 45-1
      ['door', 'mob', 'elite', 'elite', 'mob',
        'hammer', null, null, 'elite', null,
        'stone', 'stone', 'elite', 'elite', null,
        null, 'mob', 'stone', null, 'mob',
        'mob', 'mob', 'mob', 'book', null,
        'mob', 'elite', 'mob', 'mob', 'mob',
        null, 'elite', 'ball', null, null,
        'start', null, 'stone', 'elite', 'haka'],
      // 45-2
      ['stone', 'door', null, null, 'hammer',
        'mob', 'mob', null, 'mob', 'stone',
        'mob', 'haka', null, 'mob', 'elite',
        'stone', null, 'elite', null, 'mob',
        'mob', 'mob', 'mob', null, 'ball',
        'stone', 'elite', 'elite', 'book', 'elite',
        null, 'elite', 'mob', 'elite', null,
        'start', null, 'elite', null, 'mob'],
      // 45 - 3
      [0, 0, 0, 'door', 0,
        0, 0, 0, 0, 0,
        0, 0, 'haka', 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        'start', 0, 0, 0, 0],
      // 45 - 4
      [null, 'door', 'elite', 'mob', null,
        null, 'mob', 'elite', 'mob', null,
        'stone', 'elite', 'elite', 'mob', 'mob',
        'mob', 'elite', 'mob', 'stone', 'elite',
        'elite', 'elite', 'mob', null, null,
        'ball', null, 'mob', 'stone', 'book',
        null, 'mob', 'stone', 'haka', 'mob',
        'start', null, null, null, 'hammer'],
      // 45 - 5
      [0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        'start', 0, 0, 0, 0],
    ]


    floor[46] = [
      // 46-1
      ['mob', 'mob', 'elite', 'door', 'mob',
        'mob', 'elite', 'map', 'elite', 'mob',
        'elite', 'stone', 'elite', null, 'mob',
        'elite', 'mob', 'stone', null, 'mob',
        'stone', 'hammer', 'mob', 'elite', null,
        'elite', 'mob', null, 'book', null,
        null, null, 'haka', null, null,
        'start', null, null, 'mob', 'stone'],
      // 46-2
      ['book', 'mob', 'elite', 'stone', 'door',
        'haka', 'elite', 'elite', null, 'mob',
        0, 0, 'elite', 'stone', 'elite',
        0, 'mob', 'elite', 'mob', null,
        0, 'stone', 'mob', 'elite', 'mob',
        0, 'mob', 0, 'stone', null,
        null, 0, 0, 0, 'mob',
        'start', null, 0, null, 'mob'],
      // 46 - 3
      [null, 'hammer', 'stone', 'mob', 'door',
        'elite', null, 'elite', 'book', 'elite',
        'stone', 'haka', 'mob', 'elite', 'mob',
        'stone'.null, 'mob', 'mob', 'elite',
        'mob', null, null, null, 'elite',
        'elite', 'mob', 'elite', 'mob', 'mob',
        null, 'map', 'mob', 'stone', null,
        'start', null, null, null, 'mob'],
      // 46 - 4
      ['map', 'door', 'mob', 'mob', 'mob',
        'hammer', 'mob', 'mob', null, null,
        null, null, 'mob', 'elite', 'mob',
        'elite', 'mob', null, 'stone', null,
        'mob', 'elite', 'haka', 'stone', 'book',
        'mob', 'elite', null, 'stone', 'mob',
        null, null, 'stone', null, 'elite',
        'start', null, 'elite', 'elite', 'elite'],
      // 46 - 5
      ['elite', null, 'door', null, 'mob',
        'mob', null, null, 'elite', 'stone',
        'mob', 'mob', 'stone', 'elite', 'haka',
        'mob', 'hammer', 'book', 'elite', null,
        'elite', 'elite', 'mob', 'elite', 'mob',
        'mob', 'mob', 'map', null, 'mob',
        null, 'stone', null, null, null,
        'start', null, 'elite', 'mob', 'stone'],
    ]

    floor[47] = [
      // 47-1
      [null, 'hammer', 'door', 'elite', 'mob',
        'stone', 'ball', 'elite', 'haka', 'mob',
        null, 'stone', 'mob', 'mob', 'mob',
        'mob', 'elite', null, 'elite', null,
        'mob', null, null, 'stone', 'mob',
        'mob', 'elite', 'map', 'elite', 'mob',
        null, 'elite', 'elite', null, 'stone',
        'start', null, 'mob', null, null],
      // 47-2
      ['stone', null, 'door', 'stone', 'hammer',
        'haka', null, 'mob', 'elite', null,
        null, 'elite', 'map', 'ball', null,
        null, 'mob', 'mob', 'stone', 'elite',
        'elite', 'mob', null, null, 'mob',
        'mob', 'elite', null, 'stone', 'elite',
        null, 'mob', 'mob', 'mob', 'mob',
        'start', null, 'elite', 'mob', 'elite'],
      //  47- 3
      ['mob', 'haka', null, 'mob', null,
        'mob', 'mob', null, 'mob', 'mob',
        'mob', 'stone', 'mob', 'elite', null,
        'elite', 'elite', null, 'stone', null,
        null, null, 'stone', 'mob', null,
        'elite', 'elite', 'elite', 'ball', 'mob',
        null, 'map', 'mob', 'stone', null,
        'start', null, 'elite', 'hammer', 'elite',],
      // 47 - 4
      ['mob', null, 'elite', 'door', 'elite',
        null, 'map', 'stone', 'mob', 'elite',
        null, null, 'mob', 'stone', null,
        'hammer', 'mob', 'stone', null, 'mob',
        'elite', 'mob', 'mob', 'elite', 'ball',
        'haka', 'stone', null, 'elite', 'elite',
        null, 'mob', 'mob', 'mob', null,
        'start', null, 'elite', null, 'mob'],
      // 47 - 5
      ['door', null, 'stone', 'elite', 'elite',
        'elite', 'mob', null, null, null,
        'mob', 'elite', 'elite', null, null,
        'mob', 'elite', 'hammer', 'stone', 'map',
        'mob', 'mob', 'mob', 'mob', 'stone',
        null, 'elite', 'ball', 'mob', 'mob',
        null, null, 'haka', 'mob', null,
        'start', null, 'elite', 'mob', 'stone'],
    ]

    floor[48] = [
      // 48-1
      ['mob', 'mob', 'door', null, 'elite',
        'hammer', 'mob', null, 'stylus', 'elite',
        'elite', 'mob', null, 'elite', 'elite',
        'mob', 'stone', 'mob', null, null,
        null, 'stone', 'mob', 'stone', 'mob',
        null, null, 'haka', 'mob', null,
        null, 'elite', 'mob', 'stone', 'elite',
        'start', null, 'elite', 'mob', 'book'],
      // 48-2
      [null, 'door', 'stone', 'mob', 'mob',
        null, 'elite', 'elite', 'elite', 'mob',
        null, 'mob', 'mob', 'mob', 'elite',
        'mob', 'haka', 'stone', 'stylus', null,
        'elite', 'mob', 'mob', null, 'stone',
        'hammer', 'mob', 'book', 'elite', 'elite',
        null, null, 'elite', null, null,
        'start', null, null, 'stone', 'mob'],
      //  48- 3
      ['mob', 'book', null, 'door', null,
        'haka', null, 'elite', 'elite', 'mob',
        'mob', 'elite', 'mob', 'mob', null,
        'elite', null, 'hammer', 'mob', 'stone',
        'mob', 'mob', null, null, 'mob',
        'elite', 'elite', null, 'stylus', 'mob',
        null, 'mob', 'elite', 'stone', null,
        'start', null, 'stone', 'elite', 'stone'],
      // 48 - 4
      ['stylus', null, null, null, 'door',
        'elite', 'elite', 'mob', 'mob', 'mob',
        'mob', null, null, 'mob', 'elite',
        'mob', 'mob', 'stone', 'mob', 'book',
        'elite', 'elite', 'elite', null, 'elite',
        'mob', null, 'mob', 'stone', 'elite',
        null, null, 'stone', 'mob', 'hammer',
        'start', null, 'haka', 'stone', null],
      // 48 - 5
      ['haka', 'mob', 'door', null, 'mob',
        'stylus', 'elite', 'elite', 'elite', null,
        'stone', 'mob', 'stone', null, 'elite',
        'mob', null, 'stone', 'elite', 'hammer',
        'elite', 'elite', null, 'elite', 'mob',
        'stone', 'mob', 'mob', 'book', null,
        null, null, null, 'mob', 'mob',
        'start', null, null, 'mob', 'mob'],
    ]

    floor[49] = [
      // 49-1
      ['mob', 'door', 'elite', null, 'mob',
        null, 'stone', 'elite', 'mob', 'elite',
        'mob', 'hammer', 'mob', 'elite', 'mob',
        null, 'stone', 'stone', 'elite', null,
        'ball', 'elite', null, 'haka', 'mob',
        'mob', 'stone', null, 'mob', null,
        null, 'mob'.null, null, 'stylus',
        'start', null, 'elite', 'elite', 'elite'],
      // 49-2
      [null, 'mob', null, 'elite', 'door',
        'elite', 'elite', 'elite', null, 'elite',
        'elite', 'stone', 'mob', 'stylus', 'stone',
        null, 'mob', 'mob', 'mob', null,
        'mob', null, 'stone', 'haka', 'elite',
        'mob', 'ball', 'elite', 'mob', 'hammer',
        null, null, 'mob', null, 'mob',
        'start', null, 'stone', null, 'elite'],
      //  49- 3
      [null, null, 'hammer', 'door', 'stylus',
        'elite', 'elite', 'mob', 'elite', 'mob',
        'elite', 'stone', 'elite', 'mob', 'stone',
        'stone', null, 'mob', 'mob', 'mob',
        null, null, 'mob', null, null,
        null, 'mob', 'elite', 'elite', 'haka',
        null, null, 'mob', 'elite', 'stone',
        'start', null, 'mob', 'elite', 'ball'],
      // 49 - 4
      ['door', null, null, 'mob', 'mob',
        'elite', 'haka', 'elite', 'elite', 'mob',
        null, 'mob', 'mob', null, 'stone',
        null, 'mob', 'elite', null, 'mob',
        'stone', 'stylus', 'hammer', 'mob', 'elite',
        'elite', null, 'elite', 'mob', null,
        null, 'elite', 'mob', null, 'stone',
        'start', null, 'elite', 'mob', 'stone'],
      // 49 - 5
      [0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        null, 0, 0, 0, 0,
        'start', null, 0, 0, 0],
    ]

    floor[50] = [
      // 50-1
      ['door', 'mob', 'mob', 'elite', 'mob',
        null, 'hammer', 'elite', 'elite', null,
        null, 'mob', 'mob', 'elite', 'mob',
        'elite', 'stone', 'stone', 'elite', null,
        null, 'elite', 'mob', 'stylus', 'mob',
        'mob', 'stone', 'haka', null, 'elite',
        null, null, 0, 'stone', 'mob',
        'start', null, 0, 'elite', null],
      // 50-2
      ['mob', 'elite', 'mob', 'mob', 'door',
        'stone', 'elite', null, 'elite', 'mob',
        'mob', null, null, 'stone', 'hammer',
        null, 'elite', 'map', null, null,
        null, null, 'elite', 'mob', 'stone',
        'elite', 'mob', null, 'stylus', 'elite',
        null, 'elite', 'mob', 'mob', 'elite',
        'start', null, 'stone', 'mob', 'haka'],
      //  50- 3
      [null, 'mob', 'door', 'mob', null,
        'elite', 'elite', 'stone', 'elite', 'mob',
        null, 'haka', null, , null, 'stylus',
        'hammer', 'mob', 'stone', 'stone', null,
        'mob', null, 'mob', 'map', 'mob',
        'elite', 'elite', 'mob', 'stone', null,
        null, null, 'mob', 'mob', 'elite',
        'start', null, 'elite', 'elite', 'elite'],
      // 50 - 4
      [null, 'stone', 'elite', 'door', 'map',
        'mob', null, 'mob', 'stone', 'elite',
        'elite', 'mob', 'elite', 'haka', null,
        'elite', null, 'stone', 'elite', null,
        null, 'mob', 'elite', 'mob', 'mob',
        null, 'mob', 'mob', 'mob', 'elite',
        null, 'mob', null, null, 'elite',
        'start', null, 'stone', 'hammer', 'stylus'],
      // 50 - 5
      ['mob', 'elite', 'map', 'door', 'mob',
        'hammer', 'stone', 'stylus', 'stone', 'elite',
        null, 'mob', 'mob', 'elite', null,
        'haka', 'stone', 'elite', null, 'elite',
        null, 'mob', 'mob', null, null,
        'elite', null, 'elite', 'elite', 'elite',
        null, 'mob', null, 'mob', 'mob',
        'start', null, 'stone', null, 'mob'],
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