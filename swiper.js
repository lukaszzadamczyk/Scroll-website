class Swiper{
    constructor(){
        this.initialY = null;
        this.initialX = null;

        document.addEventListener('touchstart', (event)=> this.startTouch(event))
        document.addEventListener('touchmove', (event)=>this.moveTouch(event))

        this.events = {
            swipeUp: new Event('swipeUp'),
            swipeDown: new Event('swipeDown'),
            swipeLeft: new Event('swipeLeft'),
            swipeRight: new Event('swipeRight'),
        }
    }

    startTouch(event){
        event.preventDefault()
        
        this.initialY = event.touches[0].clientY
        this.initialX =event.touches[0].clientX
        
    }

    moveTouch(event){
        if(!this.initialX || !this.initialY) return

        const currentY = event.touches[0].clientY;
        const currentX = event.touches[0].clientX;

        const diffrentY = this.initialY - currentY;
        const diffrentX= this.initialX - currentX;

        if(Math.abs(diffrentX) > Math.abs(diffrentY)){
            if(diffrentX > 0){
                document.dispatchEvent(this.events.swipeLeft)
            }else{
                document.dispatchEvent(this.events.swipeRight)
            }
        }else{
            if(diffrentY > 0){
                document.dispatchEvent(this.events.swipeUp)
            }else{
                document.dispatchEvent(this.events.swipeDown)
            }
        }
        this.initialY = null
        this.initialX = null
    }
    
}

new Swiper()