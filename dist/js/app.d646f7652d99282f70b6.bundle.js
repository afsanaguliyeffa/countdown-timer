(()=>{"use strict";function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var e=function(){function e(t,i){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.time=t,this.element=i,!this.vars())return!1;this.setUpEvents()}var i,s;return i=e,(s=[{key:"vars",value:function(){return this.selectors={card:this.element,timerFront:"data-front",timerBack:"data-back",screenReaderEle:"data-sr",activeClass:"running"},this.card=document.querySelector("[".concat(this.selectors.card,"]")),this.timerFront=this.card.querySelector("[".concat(this.selectors.timerFront,"]")),this.timerBack=this.card.querySelector("[".concat(this.selectors.timerBack,"]")),this.screenReaderEle=document.querySelector("[".concat(this.selectors.screenReaderEle,"]")),!!(this.card&&this.timerFront&&this.timerBack)&&(this.cardDataset=this.card.dataset.card,this.countdown,this.currentTime=0,this.nextTime=0,this.initialTime=0,this.duration=500,this.firstAnimation=!1,this.isCardFlipping=!1,!0)}},{key:"setUpEvents",value:function(){this.timer(this.time)}},{key:"timer",value:function(t){var e=this,i=Date.now()+1e3*t;this.firstAnimation=!0;var s=setInterval((function(){var t=Math.round((i-Date.now())/1e3);t<0?clearInterval(s):e.displayTimeLeft(t)}),1e3)}},{key:"displayTimeLeft",value:function(t){if(this.days=Math.floor(t/86400),this.remainderHours=t%86400,this.hours=Math.floor(this.remainderHours/3600),this.remainderMinutes=t%3600,this.minutes=Math.floor(this.remainderMinutes/60),this.remainderSeconds=t%60,this.firstAnimation)switch(this.cardDataset){case"days":this.currentTime="".concat(this.days+1),this.initialTime!=this.currentTime&&(this.nextTime=this.days,this.flipDown(this.currentTime,this.nextTime));break;case"hours":this.currentTime="".concat(this.hours+1),this.initialTime!=this.currentTime&&(this.nextTime=this.hours,this.flipDown(this.currentTime,this.nextTime));break;case"minutes":this.currentTime="".concat(this.minutes+1),this.initialTime!=this.currentTime&&(this.nextTime=this.minutes,this.flipDown(this.currentTime,this.nextTime),this.handleScreenReaders());break;default:this.currentTime="".concat(this.remainderSeconds+1),this.nextTime=this.remainderSeconds,this.flipDown(this.currentTime,this.nextTime)}}},{key:"flipDown",value:function(t,e){var i=this;if(this.isCardFlipping)return!1;this.isCardFlipping=!0,this.cardFrontTime(t),this.cardBackTime(e),this.card.classList.add("".concat(this.selectors.activeClass)),setTimeout((function(){i.card.classList.remove("".concat(i.selectors.activeClass)),i.isCardFlipping=!1,i.cardFrontTime(e)}),this.duration)}},{key:"cardFrontTime",value:function(t){this.initialTime=+t+1,"days"===this.cardDataset?this.setTime(t,this.days,this.timerFront,"front"):"hours"===this.cardDataset?this.setTime(t,23,this.timerFront,"front"):this.setTime(t,59,this.timerFront,"front")}},{key:"cardBackTime",value:function(t){this.setTime(t,59,this.timerBack,"back")}},{key:"setTime",value:function(t,e,i,s){t>e?i.dataset[s]="00":t>=10?i.dataset[s]=t:t<10&&(i.dataset[s]="0".concat(t))}},{key:"handleScreenReaders",value:function(){this.screenReaderEle.innerHTML="Time before launch: ".concat(this.days," days ").concat(this.hours," hours ").concat(this.minutes," minutes")}}])&&t(i.prototype,s),Object.defineProperty(i,"prototype",{writable:!1}),e}(),i=777600;new e(i,'data-card="days"'),new e(i,'data-card="hours"'),new e(i,'data-card="minutes"'),new e(i,'data-card="seconds"')})();