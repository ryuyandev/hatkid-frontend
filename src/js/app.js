import axios from 'axios'

const types = {
  None: 'vanilla',
  AscensionAcademy: 'aa',
  CallousRow: 'cr',
  Mainverse: 'mv'
}

const images = {
  hatkid: {
    vanilla: require('../img/hatkid-vanilla.png'),
    aa: require('../img/hatkid-aa.png'),
    cr: require('../img/hatkid-cr.png'),
    mv: require('../img/hatkid-mv.png'),
  },
  speechBubble: {
    vanilla: require('../img/speech-bubble-vanilla.png'),
    aa: require('../img/speech-bubble-aa.png'),
    cr: require('../img/speech-bubble-cr.png'),
    mv: require('../img/speech-bubble-mv.png'),
  }
}

const resultElem = document.getElementById('result'),
  statusElem = document.getElementById('status')

axios.get(`${process.env.API_URL}status/hatkid`)
  .catch(console.log)
  .then(({ data: { status, title } }) => {
    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.has('stream')) {
      status = 'live'

      switch (urlParams.get('stream')) {
        case '1':
          title = '[Ascension Academy]'
          break
        case '2':
          title = '[Callous Row]'
          break
        case '3':
          title = '[Mainverse]'
          break
        default:
          title = ''
          break
      }
    }

    let type = types.None
    if (status === 'live') {
      if (title.includes('[Ascension Academy]'))
        type = types.AscensionAcademy
      else if (title.includes('[Callous Row]'))
        type = types.CallousRow
      else if (title.includes('[Mainverse]'))
        type = types.Mainverse

      resultElem.href = 'https://www.twitch.tv/hatkid'
      statusElem.innerHTML = `Yes, I'm live`
    }

    resultElem.classList.add(type)
    statusElem.style.backgroundImage = `url('${images.speechBubble[type]}')`
    const image = document.createElement('img')
    image.src = images.hatkid[type]
    resultElem.appendChild(image)

    document.getElementById('loader').classList.add('loaded')
    setTimeout(() => {
      document.querySelector('main').classList.add('loaded')
    }, 340)
  })