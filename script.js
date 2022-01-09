// $(function(){
//     $('#category').change(function () {
//       //選択したoptionのvalueを取得
//       var val = $(this).val();
//       //先頭に#を付けてvalueの値をidに変換
//       var categoryId = '#' + val;
//       //一度すべてのブロックを非表示にする
//       $('.buy-wrapper ul li ').hide();
//       //選択したブロックのみを表示
//       $(categoryId).show();
//     });
// });


function check() {
  let category = document.getElementById("category");
  let val = category.value;
  if(val == 'sample'){
    document.getElementById('box1').style.display = "";
    document.getElementById('box2').style.display = "none";
    document.getElementById('box3').style.display = "none";
  }else if(val == 'outer'){
    document.getElementById('box1').style.display = "none";
    document.getElementById('box2').style.display = "";
    document.getElementById('box3').style.display = "none";
  }else if(val == 'tops'){
    document.getElementById('box1').style.display = "none";
    document.getElementById('box2').style.display = "none";
    document.getElementById('box3').style.display = "";
  }
}

const mainImageElement = document.getElementById("mainImage");
const nextImageElement = document.getElementById("nextImage");
const prevImageElement = document.getElementById("prevImage");
let currentSlideNumber = 1;
let imageSlideNumber = 4;
// let now = mainImageElement.setAttribute('src' , `img/etop${currentSlideNumber}.png`);
// let prev = mainImageElement.setAttribute('src' , `img/etop${currentSlideNumber - 1}.png`);


mainImageElement.setAttribute('src','img/etop1.png');

prevImageElement.addEventListener('click' , ()=>{
  if(currentSlideNumber !== 1){
    currentSlideNumber--;
    mainImageElement.setAttribute('src' , `img/etop${currentSlideNumber}.png`);
    mainImageElement.classList.add("active");
  }
});

nextImageElement.addEventListener('click' , ()=>{
  if(currentSlideNumber !== imageSlideNumber){
    currentSlideNumber++
    mainImageElement.setAttribute('src' , `img/etop${currentSlideNumber}.png`)
    mainImageElement.classList.add("active");
  }
})


let modal = document.getElementById("modal");
let modalOpen = document.getElementById("modalOpen");
let modalClose = document.getElementById("modalClose");
let mask = document.getElementById("mask");

modalOpen.addEventListener('click' , ()=>{
  modal.classList.add("active");
  mask.classList.add("active");
});

modalClose.addEventListener('click' , ()=>{
  modal.classList.remove("active");
  mask.classList.remove("active");
});

let humb = document.getElementById("humburger");
let overLay = document.getElementById("overLay");
let table = document.getElementById("table")

humb.addEventListener('click' , ()=>{
  overLay.classList.add("active");
  table.classList.add("active");
})


let tableClose = document.getElementById("tableClose")

tableClose.addEventListener("click" , ()=>{
  overLay.classList.remove("active");
  table.classList.remove("active");
})


let Open = document.getElementById("open");

Open.addEventListener('click' , ()=>{
  modal.classList.add("active");
  mask.classList.add("active");
});








