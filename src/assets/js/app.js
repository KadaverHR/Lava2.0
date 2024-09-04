

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



  let floorMap = document.querySelector('.floor__map')
  let floorListContainer = document.querySelector('.main__floor-box')
  $(floorList).on('click', '.main__floor', function () {
    event.preventDefault()
    floorListContainer.classList.add('d-n')
    floorMap.classList.remove('d-n')

    let thisCoutFloor = this.getAttribute('atr')

    addMap(thisCoutFloor)





  })







  let addMap = (thisCoutFloor) => {

    let hakaList = floorsArray(thisCoutFloor)

    // let optionFloor = hakaList.length

    // floorMap 

    // console.log(hakaList.length)


    hakaList.forEach(element => {





      let count = -1
      let i = -1

      floorMap



      let hakaBox = document.createElement('div')
      hakaBox.classList.add('haka__box')
    
      element.forEach(element => {
        i++
        let hakaBlock = document.createElement('div')
        hakaBlock.classList.add('haka__block')

        switch (element) {
          case "NULL":
            hakaBlock.innerHTML = `	<div value="" class="haka">
   
      </div>`
            break;
          case 'miniBoss':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/MB.png" >
      </div>`
            break;
          case 'stone':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/S.png" >
      </div>`
            break;
          case 'boss':
            hakaBlock.innerHTML = `	<div value="block" class="haka">
        <img src="assets/img/B.png" >
      </div>`
            break;
          case 'bigBoss':
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
        }
        count = count + 1

        hakaBox.append(hakaBlock)


      })
      floorMap.append(hakaBox)
    });

  }


  let floorsArray = (thisCoutFloor) => {

    let floor = new Array(50)

    floor[1] = [
      // 1-1
      [`door`, `miniBoss`, `miniBoss`, null, `miniBoss`, null, null, null, `miniBoss`, `boss`, `stone`, `miniBoss`, `miniBoss`, `miniBoss`, null, null, `miniBoss`, `miniBoss`, `miniBoss`, null, `boss`, null, `boss`, `stone`, `stone`, `stone`, null, null, `bigBoss`, `boss`, null, null, `stone`, null, null, `start`, null, null, null, `miniBoss`],
      // 1-2
      [`door`, `miniBoss`, null, null, `miniBoss`, null, `stone`, null, null, null, null, `miniBoss`, null, `miniBoss`, `stone`, `miniBoss`, null, `miniBoss`, `miniBoss`, `boss`, `boss`, `miniBoss`, `boss`, null, `stone`, `miniBoss`, null, null, `miniBoss`, `bigBoss`, null, null, null, `stone`, `miniBoss`, `start`, null, `stone`, `miniBoss`, null],
      // 1-3
      [`door`, `miniBoss`, null, null, `miniBoss`, null, `stone`, null, null, null, null, `miniBoss`, null, `miniBoss`, `stone`, `miniBoss`, null, `miniBoss`, `miniBoss`, `boss`, `boss`, `miniBoss`, `boss`, null, `stone`, `miniBoss`, null, null, `miniBoss`, `bigBoss`, null, null, null, `stone`, `miniBoss`, `start`, null, `stone`, `miniBoss`, null],
    ]

    floor[2] = [
      [`door`, `miniBoss`, `miniBoss`, null, `miniBoss`, null, null, null, `miniBoss`, `boss`, `stone`, `miniBoss`, `miniBoss`, `miniBoss`, null, null, `miniBoss`, `miniBoss`, `miniBoss`, null, `boss`, null, `boss`, `stone`, `stone`, `stone`, null, null, `bigBoss`, `boss`, null, null, `stone`, null, null, `start`, null, null, null, `miniBoss`],

      [`door`, `miniBoss`, null, null, `miniBoss`, null, `stone`, null, null, null, null, `miniBoss`, null, `miniBoss`, `stone`, `miniBoss`, null, `miniBoss`, `miniBoss`, `boss`, `boss`, `miniBoss`, `boss`, null, `stone`, `miniBoss`, null, null, `miniBoss`, `bigBoss`, null, null, null, `stone`, `miniBoss`, `start`, null, `stone`, `miniBoss`, null],

      [`door`, `miniBoss`, null, null, `miniBoss`, null, `stone`, null, null, null, null, `miniBoss`, null, `miniBoss`, `stone`, `miniBoss`, null, `miniBoss`, `miniBoss`, `boss`, `boss`, `miniBoss`, `boss`, null, `stone`, `miniBoss`, null, null, `miniBoss`, `bigBoss`, null, null, null, `stone`, `miniBoss`, `start`, null, `stone`, `miniBoss`, null],
    ]

    console.log(floor[thisCoutFloor])

    return floor[thisCoutFloor]

    // let hakaList = [`door`, `miniBoss`, `miniBoss`, null, `miniBoss`,
    //   null, null, null, `miniBoss`, `boss`,
    //   `stone`, `miniBoss`, `miniBoss`, `miniBoss`, null,
    //   null, `miniBoss`, `miniBoss`, `miniBoss`, null,
    //   `boss`, null, `boss`, `stone`, `stone`,
    //   `stone`, null, null, `bigBoss`, `boss`,
    //   null, null, `stone`, null, null,
    //   'start', null, null, null, `miniBoss`]

    return hakaList
  }
})