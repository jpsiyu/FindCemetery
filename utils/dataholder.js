const startId = 1000

class Dataholder{
  constructor(){
    this.cemeteryList = null
  }

  initCemetery(cemetery){
    this.cemeteryList = cemetery
  }

  addCemetery(stone){
    this.cemeteryList.push(stone) 
  }
  getCemetery(){
    return this.cemeteryList
  }
}

module.exports = Dataholder