const dataPath='./app/utils/productdetails.json'
const fs=require('fs')
class FileRead{
    putProdData(data){
        const stringifyData = JSON.stringify(data)
        fs.writeFileSync(dataPath, stringifyData)
    }
    getProdData(){
        const jsonData = fs.readFileSync(dataPath)
        return JSON.parse(jsonData)   
    }
}

module.exports=new FileRead()