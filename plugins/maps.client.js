// export default function (context, inject) {
//   let isLoaded = false
//   let waiting = []

//   addScript()
//   inject('maps', {
//     showMap,
//     makeAutoComplete
//   })


//   function addScript() {
//     const script = document.createElement('script')
//     script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDrRGbF6Wb7-oT0Qt6rMYfTPXsL_rBClWI&libraries=places&callback=initGoogleMap"
//     script.async = true
//     window.initGoogleMap = initGoogleMap
//     document.head.appendChild(script)
//   }

//   function initGoogleMap() {
//     isLoaded = true
//     waiting.forEach((item) => {
//       if (typeof item.fn === 'function') {
//         item.fn(...item.arguments)
//       }
//     });
//     waiting = []

//   }

//   function showMap(canvas, lat, lng) {
//     if (!isLoaded) {
//       waiting.push({ fn: showMap, arguments })
//       return
//     }
//     const mapOptions = {
//       zoom: 16,
//       center: new window.google.maps.LatLng(lat, lng),

//     }
//     const map = new window.google.maps.Map(canvas, mapOptions)
//     // const position = new window.google.maps.LatLng(lat, lng)
//     // const marker = new window.google.maps.Marker({ position, icon: 'imagen/person.png' })
//     // marker.setMap(map)
//   }

//   function makeAutoComplete(input) {
//     if (!isLoaded) {
//       waiting.push({ fn: makeAutoComplete, arguments })
//       return
//     }
//     const autoComplete = new window.google.maps.places.Autocomplete(input, {})
//   }

// }
