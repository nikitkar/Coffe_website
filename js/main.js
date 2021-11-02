function sliderImage(){
    let offset = 0;
    const sliderToShow = 1;
    const sliderToScroll = 1;
    const slider = document.querySelector('.carousel__inner');
    const items = document.querySelectorAll('.carousel__item');
    const itemsCount = items.length; // количество объектов 
    const itemWidth = slider.clientWidth / sliderToShow; // рамер сколько надо показать объектов
    const movePosition = sliderToScroll * itemWidth; // размер на соклько прокручивать

    const btnPrev = document.querySelector('.btn__prev');
    const btnPrevId = document.getElementById('btn__prev');
    const btnNext = document.querySelector('.btn__next');
    const btnNextId = document.getElementById('btn__next');

    items.forEach((item) => {
        item.style.minWidth = itemWidth + 'px'; // вывод нужного количества объектов на экран
    });

    btnNext.addEventListener('click', function(){
        offset += movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        checkBtns();
    });

    btnPrev.addEventListener('click', function(){
        offset -= movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        checkBtns();
    });

    const checkBtns = () => {
        if(btnPrev.disabled = offset === 0){
            btnPrevId.style.opacity = '.4';
        }
        else btnPrevId.style.opacity = '1';

        if(btnNext.disabled = offset >= (itemsCount - sliderToShow) * itemWidth){
            btnNextId.style.opacity = '.4';
        }
        else btnNextId.style.opacity = '1';
    }    

    checkBtns();
}

sliderImage();

function sliderComment(){

    let offset = 0;
    let sliderToShow = 2;

    var x = window.matchMedia("(max-width: 1000px)");
    if (x.matches) { // Если медиа запрос совпадает
        sliderToShow = 1;
    };
    
    const sliderToScroll = 1;
    const slider = document.querySelector('.comment__box--inner');
    const items = document.querySelectorAll('.box__comment');
    const itemsCount = items.length; // количество объектов 
    let itemWidth = slider.clientWidth / sliderToShow - 40; // рамер сколько надо показать объектов
    let movePosition = sliderToScroll * itemWidth + 80; // размер на соклько прокручивать

    const btnPrev = document.querySelector('.btn__comm-prev');
    const btnPrevId = document.getElementById('btn__prev-comm');
    const btnNext = document.querySelector('.btn__comm-next');
    const btnNextId = document.getElementById('btn__next-comm');

    if (x.matches) { 
        itemWidth = slider.clientWidth / sliderToShow - 20;
        movePosition = sliderToScroll * itemWidth + 20;
    };

    items.forEach((item) => {
        item.style.minWidth = itemWidth + 'px'; // вывод нужного количества объектов на экран
    });

    btnNext.addEventListener('click', function(){
        offset += movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        checkBtns();
    });

    btnPrev.addEventListener('click', function(){
        offset -= movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        checkBtns();
        
    });

    const checkBtns = () => {
        if(btnPrev.disabled = offset === 0){
            btnPrevId.style.opacity = '.4';
        }
        else btnPrevId.style.opacity = '1';

        if(btnNext.disabled = offset >= (itemsCount - sliderToShow) * itemWidth){
            btnNextId.style.opacity = '.4';
        }
        else btnNextId.style.opacity = '1';
    }    

    checkBtns();
}

sliderComment();

////////////////////////////////////
//
////////////////////////////////////

function getName (str){ //добавление файла
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}

////////////////////////////////////
//
////////////////////////////////////
// const body = document.body;
const modalClose = document.querySelector('.okno__close');
const modal = document.querySelector('.comment__okno');
const btn = document.querySelector('.btn_comment');
const okno__content = document.querySelector('.okno__content');

btn.addEventListener('click', () => {
    modal.classList.add('show');
    body.classList.add('no-scroll');

    okno__content.addEventListener('click', () => {
        event.stopPropagation();
    });
});

modalClose.addEventListener('click', () =>{
    modal.classList.remove('show');
    body.classList.remove('no-scroll');
})

modal.addEventListener('click', () =>{
    modal.classList.remove('show');
    body.classList.remove('no-scroll');
})

////////////////////////////////////
//
////////////////////////////////////

const add__menu = document.querySelector('.add__menu');
const price__second = document.querySelector('.price__second');

add__menu.addEventListener('click', () =>{
    price__second.classList.add('price__second--show');
    add__menu.classList.add('add__menu--close');
})

////////////////////////////////////
//
////////////////////////////////////

const o1 = document.getElementById('o1');
const o2 = document.getElementById('o2');
const o3 = document.getElementById('o3');
const o4 = document.getElementById('o4');
const o5 = document.getElementById('o5');

let s1 = true;
let s2, s3, s4, s5 = false;

function starOknoFirst(){
    o1.src = "image/star.svg";
    o2.src = "image/star__no.svg";
    o3.src = "image/star__no.svg";
    o4.src = "image/star__no.svg";
    o5.src = "image/star__no.svg";
    
    s1 = true;
    s2 = false;
    s3 = false;
    s4 = false;
    s5 = false;
};

function starOknoSecond(){
    o1.src = "image/star.svg";
    o2.src = "image/star.svg";
    o3.src = "image/star__no.svg";
    o4.src = "image/star__no.svg";
    o5.src = "image/star__no.svg";

    s1 = false;
    s2 = true;
    s3 = false;
    s4 = false;
    s5 = false;
};

function starOknoThird(){
    o1.src = "image/star.svg";
    o2.src = "image/star.svg";
    o3.src = "image/star.svg";
    o4.src = "image/star__no.svg";
    o5.src = "image/star__no.svg";

    s1 = false;
    s2 = false;
    s3 = true;
    s4 = false;
    s5 = false;
};

function starOknoFourth(){
    o1.src = "image/star.svg";
    o2.src = "image/star.svg";
    o3.src = "image/star.svg";
    o4.src = "image/star.svg";
    o5.src = "image/star__no.svg";
    
    s1 = false;
    s2 = false;
    s3 = false;
    s4 = true;
    s5 = false;
};

function starOknoFifth(){
    o1.src = "image/star.svg";
    o2.src = "image/star.svg";
    o3.src = "image/star.svg";
    o4.src = "image/star.svg";
    o5.src = "image/star.svg";    

    s1 = false;
    s2 = false;
    s3 = false;
    s4 = false;
    s5 = true;    
};


////////////////////////////////////
//
////////////////////////////////////

const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    let textAreaH = item.offsetHeight;
    
    item.addEventListener('input', event => {
        let $this = event.target;
        
        $this.style.height = textAreaH + 'px';
        $this.style.height = $this.scrollHeight + 'px';
    });
});

////////////////////////////////////
//
////////////////////////////////////

function verificationComment(){
    const value1 = document.getElementById('upload');
    const value2 = document.getElementById('nameModal');
    const value3 = document.getElementById('textModal');

    if (value1.value.length === 0  || 
        value2.value.length === 0  ||
        value3.value.length === 0){
        alert("Пожалуйста, введите данные");
        return false;
    }
    else {
        alert('Спасибо, ваш комментрий добавлен');

        createGrade();
        sliderComment();
        return true; 
    }
}

function verificationPost(){
    const value1 = document.getElementById('namePost');
    const value2 = document.getElementById('textPost');
    const value3 = document.getElementById('textareaPost');

    if (value1.value.length === 0  || 
        value2.value.length === 0  ||
        value3.value.length === 0){
        alert("Пожалуйста, введите данные");
        return false;
    }
    else {
        alert('Спасибо, ваш комментрий добавлен');

        return true; 
    }
}

////////////////////////////////////
//
////////////////////////////////////

let a = 1;

function createBlock(grade){
    const comment__box__inner = document.getElementById('comment__box--inner');

    const box__comment = document.createElement('div');
    const box__commentInner = document.createElement('div');
    const box__commentImg = document.createElement('div');
    const box__commentTitle = document.createElement('div');
    const box__commentGrade = document.createElement('div');
    const box__commentText = document.createElement('div');

    const box__commentImage = document.createElement('img');
    box__commentImage.id = "myimage";
    
    const name = document.getElementById('nameModal').value;
    const text = document.getElementById('textModal').value;

    
    comment__box__inner.append(box__comment);
    box__comment.classList.add('box__comment')
    box__comment.id = 'box__comment';

    box__comment.append(box__commentInner);
    box__commentInner.classList.add('box__comment--inner');
    
    box__commentInner.append(box__commentImg);
    box__commentImg.append(box__commentImage);
    box__commentImg.classList.add('box__comment--img');
    box__commentImg.id = 'IMG_comm' + a;
    box__commentImg.style.fontSize = 0;
    box__commentImg.append(displayImg());

    box__commentInner.append(box__commentTitle);
    box__commentTitle.classList.add('box__comment--title');
    box__commentTitle.innerHTML = "<p> " + name + "</p>";

    box__commentInner.append(box__commentGrade);
    box__commentGrade.classList.add('box__comment--grade');
    box__commentGrade.innerHTML = grade;

    box__commentInner.append(box__commentText);
    box__commentText.classList.add('box__comment--text');
    box__commentText.innerHTML = "<p> " + text + "</p>";

    a++;
};

var uploadedFileURL;
function handleFile() {
  var fileUploadControl = document.getElementById('upload');

  var file = fileUploadControl.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function() {
      uploadedFileURL = reader.result;
    };
    reader.readAsDataURL(file);
  }

}

function displayImg() {
  var fileUpload = document.getElementById("upload").value;
  var com_img = document.getElementById("IMG_comm" + a);
  com_img.innerHTML = `<img src="${uploadedFileURL}">`;
}

const gradeFirst = '<img src="image/star.svg"><img src="image/star__no.svg"><img src="image/star__no.svg"><img src="image/star__no.svg"><img src="image/star__no.svg">'; 

const gradeSecond = '<img src="image/star.svg"><img src="image/star.svg"><img src="image/star__no.svg"><img src="image/star__no.svg"><img src="image/star__no.svg">'; 

const gradeThird = '<img src="image/star.svg"><img src="image/star.svg"><img src="image/star.svg"><img src="image/star__no.svg"><img src="image/star__no.svg">'; 

const gradeFourth = '<img src="image/star.svg"><img src="image/star.svg"><img src="image/star.svg"><img src="image/star.svg"><img src="image/star__no.svg">'; 

const gradeFifth = '<img src="image/star.svg"><img src="image/star.svg"><img src="image/star.svg"><img src="image/star.svg"><img src="image/star.svg">';



function createGrade(){
    if(s1 === true){
        createBlock(gradeFirst);
        // alert('Спасибо, ваш комментрий добавлен');
    }
    else if(s2 === true){
        createBlock(gradeSecond);
        // alert('Спасибо, ваш комментрий добавлен');
    }
    else if(s3 === true){
        createBlock(gradeThird);
        // alert('Спасибо, ваш комментрий добавлен');
    }
    else if (s4 === true){
        createBlock(gradeFourth);
        // alert('Спасибо, ваш комментрий добавлен');
    }
    else if (s5 === true){
        createBlock(gradeFifth);
    }
}