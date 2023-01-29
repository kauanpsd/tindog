// Remember to import the data and Dog class!
import {dogs} from './data.js'
import DogsProfile from './Dog.js'

    
let currentDogIndex = 0
let currentDog = new DogsProfile(dogs[currentDogIndex])

function getNewDog() {
    currentDogIndex+=1
    currentDog = new DogsProfile(dogs[currentDogIndex])
    render()
}
    
document.querySelector('.select-buttons').addEventListener('click', (e)=> {
        if(e.target.id === 'yesimg'){
             setTimeout(()=>{getNewDog()},1500)
             currentDog.yesResult()
             document.querySelector(".choice-badge").innerHTML = `<img src="images/badge-like.png" alt="">`

        } else if (e.target.id === 'noimg'){
            setTimeout(()=>{getNewDog()},1500)
            currentDog.yesResult()
            document.querySelector(".choice-badge").innerHTML = `<img src="images/badge-nope.png" alt="">`
        }
    })

    function render(){
        document.querySelector(".main").innerHTML = currentDog.getDogHtml()
    }


render()
