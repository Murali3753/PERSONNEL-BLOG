  function clickme(){
      alert("Thank You FOR SUBSCRIBING US !!")

};

const readMore = document.querySelector('.btn btn3');
const text=document.querySelector('.text');

readMore.addEventListener('.click',(e)=>{
 text.classList.toggle('show-more');
})