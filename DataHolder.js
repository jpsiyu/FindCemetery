const startId = 1000

var DataHolder = function(){
  this.cemeteryList = null
}

DataHolder.prototype.initCemetery = function(){
  this.cemeteryList = [
    { id: 1001, name: 'Tom', addr: [30, 50], addrName: '地址'  },
    { id: 1002, name: 'Max', addr: [18, 32], addrName: '地址'  },
    { id: 1003, name: 'Ryu', addr: [50, 72], addrName: '地址'  },
    { id: 1003, name: 'Ryu', addr: [50, 72], addrName: '地址'  },
    { id: 1003, name: 'Ryu', addr: [50, 72], addrName: '地址'  },
    { id: 1003, name: 'Ryu', addr: [50, 72], addrName: '地址'  },
    { id: 1003, name: 'Ryu', addr: [50, 72], addrName: '地址'  },
  ]
}

DataHolder.prototype.addCemetery = function(name, addr, addrName){
  var id = startId + this.cemeteryList.length + 1
  var cemetery = {
    id: id,
    name: name,
    addr: addr,
    addrName: addrName,
  }
  this.cemeteryList.push(cemetery)
}

DataHolder.prototype.getCemetery = function(){
  return this.cemeteryList
}

module.exports = DataHolder