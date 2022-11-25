const {Sequelize} = require('sequelize')


let db  = ""
if(false){
    //Online
    db  = new Sequelize( "deivistm_freedom" , "deivistm" , 'DTM02030362406@'  , {
        host:"mysql-deivistm.alwaysdata.net", 
        dialect:"mysql"
    })
}else{
    //Local
    db  = new Sequelize( "deivistm_freedom" , "root" , ''  , {
        host:"localhost", 
        dialect:"mysql"
    })
}






module.exports = {db}