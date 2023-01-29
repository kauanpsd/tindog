// Create the Dog class here

class DogsProfile {
    constructor (data){
        Object.assign(this,data)
    }
        getDogHtml(){
            const { name, avatar, age, bio } = this
            return `
                <div class="main-photo">
                <div class="choice-badge">
                    
                 </div>
                    <img src=${avatar} alt="">
                    
                        <div class="text">
                            <h1>${name}, ${age}</h1>
                            <p>${bio}</p>
                        </div>
                </div>
            `
        }

        yesResult(){
            this.hasBeenSwiped = true
            this.hasBeenLiked = true
            
        }

        noResult(){
            this.hasBeenSwiped = true
            this.hasBeenLiked = false
        }
    }

export default DogsProfile