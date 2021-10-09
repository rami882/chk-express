const dateRequest = new Date()
const midleware = (req,res,next) => {
    let day = dateRequest.getDay()
    let hour = dateRequest.getHours()
    if(day>1 && day <7 && hour>=9 && hour<=17){
        return next()
    }
    else console.log("We are closed now")
}
module.exports = midleware