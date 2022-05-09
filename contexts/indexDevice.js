

export default class DeviceStore {
   types = [
      {id: 1, name: "Smartphones"},
      {id: 2, name: "Laptops"}
   ]
   brands = [
      {id: 1, name: "Apple"},
      {id: 2, name: "Sumsung"}
   ]
   devices = [
      {id: 1, name: "Iphone 11", price: 3000, raiting: 5, img: '#'},
      {id: 2, name: "Iphone 13", price: 3000, raiting: 5, img: '#'},
      {id: 3, name: "Iphone 13", price: 3000, raiting: 5, img: '#'},
      {id: 4, name: "Iphone 13", price: 3000, raiting: 5, img: '#'},
      {id: 5, name: "Iphone 13", price: 3000, raiting: 5, img: '#'},
   ]
   
}


// export default class DeviceStore {
//    constructor() {
//        this._types = []
//    this._brands = [
//       {id: 1, name: "Apple"},
//       {id: 2, name: "Sumsung"}
//    ]
//    this._devices = [
//       {id: 1, name: "Iphone 11", price: 3000, raiting: 5, img: '#'},
//       {id: 2, name: "Iphone 13", price: 3000, raiting: 5, img: '#'},
//       {id: 3, name: "Iphone 13", price: 3000, raiting: 5, img: '#'},
//       {id: 4, name: "Iphone 13", price: 3000, raiting: 5, img: '#'},
//       {id: 5, name: "Iphone 13", price: 3000, raiting: 5, img: '#'},
//    ]
//        this._selectedType = {}
//        this._selectedBrand = {}
//        this._page = 1
//        this._totalCount = 0
//        this._limit = 3
//    }

//    setTypes(types) {
//        this._types = types
//    }
//    setBrands(brands) {
//        this._brands = brands
//    }
//    setDevices(devices) {
//        this._devices = devices
//    }
// }