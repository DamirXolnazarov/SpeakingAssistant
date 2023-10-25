<script setup>
</script>
<template>
   <div class="home">
      <div class="menu flex justify-center items-center overflow-hidden">
         <h1 class="text-white text-[40px] text-center">Speaking Assistant Web Site 2023</h1>
         <div class="belt bg-[red] w-[160px] rotate-[50deg] absolute right-0 h-[30px]">
            <span class="ml-[50px] text-white text-[20px]">New</span>
         </div>
      </div>
      <div class="bars">
        <div @click="touch('part1')"
            class="partOne cursor-pointer flex flex-row justify-between items-center transition-[.3s] hover:shadow-[2px_2px_7px_greenyellow]">
            <div class="flipSide w-[100%] px-[30px] h-[100%] items-center flex flex-row justify-between">
               <span class="text-[20px] text-black">Questions about yourself e.g Do you like reading books?</span>
               <span class="text-[20px] text-black">Num. Questions: 30</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-play-circle"
                  viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                     d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
               </svg>
            </div>
            <div class="inner_partOne">

               <div class="text1">
                  <span class="text-[30px]">Part 1</span>
               </div>
               <div class="lets">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="greenyellow"
                     class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                     <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
               </div>
            </div>
         </div>
      <div @click="touch('part2')"
            class="partTwo cursor-pointer flex flex-row justify-between items-center transition-[.3s] hover:shadow-[2px_2px_7px_aqua]">
            <div class="flipSide w-[100%] px-[30px] h-[100%] items-center flex flex-row justify-between">
               <span class="text-[20px] text-black">Cue cards about specific topic e.g Describe a time when you got lost</span>
               <span class="text-[20px] text-black">Num. Questions: 30</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-play-circle"
                  viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                     d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
               </svg>
            </div>
            <div class="inner_partTwo">
               <div class="text1">
                  <span class="text-[30px]">Part 2</span>
               </div>
               <div class="lets">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="aqua" class="bi bi-play-circle-fill"
                     viewBox="0 0 16 16">
                     <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
               </div>
            </div>
         </div>
         <div @click="touch('part3')"
            class="partThree cursor-pointer flex flex-row justify-between items-center transition-[.3s] hover:shadow-[2px_2px_7px_orangered]">
            <div class="flipSide w-[100%] px-[30px] h-[100%] items-center flex flex-row justify-between">
               <span class="text-[20px] text-black">Questions related to cue card e.g How do people find their ways?</span>
               <span class="text-[20px] text-black">Num. Questions: 30</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-play-circle"
                  viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                     d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
               </svg>
            </div>
            <div class="inner_partThree">

               <div class="text1">
                  <span class="text-[30px]">Part 3</span>
               </div>
               <div class="lets">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="orangered"
                     class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                     <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
               </div>
            </div>
         </div>
      </div>
      <div class="footer flex justify-center items-center w-[100%] h-[50px] bottom-0 absolute bg-[#333]">
         <div class="compsug w-[210px] absolute">
            <span class="text-[gray]">Complaints and Suggestions</span>
         </div>
         <span class="text-white">Created and Designed by <a class="text-[aqua]"
               href="https://t.me/D_amir777">Damir_dev</a></span>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         partNumber: '',
      };
   },
   methods: {
      touch(par){
         this.partNumber = par.toString().split('')[4]
         let head = document.querySelector('.home')
         let part = document.createElement('div')
         part.classList = 'num'
         let number = document.createElement('span')
         number.innerHTML = this.partNumber
         number.classList = 'numb'
         part.append(number)
         head.append(part)
         setTimeout(() => {
            this.$router.push(`/part${this.partNumber}`)
         }, 2000);
      }
   },
}
</script>
<style>
@keyframes comp {
   0% {
      left: 0%;
   }

   30% {
      left: 25%;
      opacity: 100%;
   }

   50% {
      left: 42.525%;
      opacity: 0%;
   }

   70% {
      left: 60%;
      opacity: 100%;
   }

   100% {
      left: 85.5%;
   }
}
@keyframes num{
   0%{
      transform: scale(0%);
   }
   100%{
      transform: scale(1000%);
      margin-left: 500px;
   }
}

.home {
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;
   align-items: center;
   justify-content: space-between;
   padding-top: 20px;
   padding-bottom: 20px;
}

.bars {
   width: 90%;
   height: 50%;
   margin: auto;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
}

.partOne {
   width: 100%;
   height: 100px;
   position: relative;
   background: greenyellow;
   perspective: 1000px;
   border: 1px solid #858585;
}

.inner_partOne {
   width: 100%;
   border: 1px solid black;
   display: flex;
   padding-left: 30px;
   background: white;
   padding-right: 30px;
   flex-direction: row;
   backface-visibility: hidden;
   align-items: center;
   transition: transform 0.6s;
   position: absolute;
   transform-style: preserve-3d;
   justify-content: space-between;
   height: 100%;
}

.inner_partTwo {
   width: 100%;
   display: flex;
   flex-direction: row;
   backface-visibility: hidden;
   align-items: center;
   border: 1px solid black;
   transition: transform 0.6s;
   position: absolute;
   transform-style: preserve-3d;
   background: white;
   padding-left: 30px;
   padding-right: 30px;
   justify-content: space-between;
   height: 100%;
}

.inner_partThree {
   width: 100%;
   display: flex;
   border: 1px solid black;
   flex-direction: row;
   backface-visibility: hidden;
   align-items: center;
   padding-left: 30px;
   background: white;
   padding-right: 30px;
   position: absolute;
   transition: transform 0.6s;
   transform-style: preserve-3d;
   justify-content: space-between;
   height: 100%;
}

.partOne:hover .inner_partOne {
   transform: rotateY(180deg);
}

.partTwo:hover .inner_partTwo {
   transform: rotateY(180deg);
}

.partThree:hover .inner_partThree {
   transform: rotateY(180deg);
}

.partTwo {
   position: relative;
   width: 100%;
   background: aqua;
   height: 100px;
   perspective: 1000px;
   border: 1px solid #858585;
}

.partThree {
   perspective: 1000px;
   width: 100%;
   height: 100px;
   background: orangered;
   position: relative;
   border: 1px solid #858585;
}

.menu {
   width: 90%;
   height: 100px;
   background: blue;
   border-bottom-right-radius: 15px;
   border-bottom-left-radius: 15px;
   position: absolute;
   top: 0;
}

.compsug {
   animation: comp 10s infinite alternate;
}
.num{
   position: absolute;
   width: 100%;
   background: blue;
   height: 100%;
   left: 0;
   overflow: hidden;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   top: 0;
}
.numb{
   font-size: 500px;
   line-height: 0;
   -webkit-text-stroke-color: white;
   color: transparent;
   -webkit-text-stroke-width: 2px;
   animation: num 5s;
   animation-delay: .5s;
}
</style>


