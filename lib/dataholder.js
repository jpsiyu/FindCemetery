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
  getAllCemetery(){
    return this.cemeteryList
  }
  getOneCemetery(itemid){
    const itemMatch = element => element._id === itemid
    const res = this.cemeteryList.find(itemMatch)
    return res
  }
}

module.exports = Dataholder