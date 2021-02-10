!function () {
  var duration = 30

  $('.action').on('click', 'button', function (e) {
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 60
        break
      case 'normal':
        duration = 30
        break
      case 'fast':
        duration = 10
        break
    }
  })

  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    container.innerHTML = prefix || ''
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    //用setTimeout代替setInterval, setTimeout会调用一次结束，为了改变time。
    // setTimeout比setInterval，更容易控制。
    let id = setTimeout(function run() { //让id是最新的setTimeout
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
        fn && fn.call()
      }
    }, duration)
  }
 
let code = `
/*
* 皮卡丘的皮
*/

.preview {
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
}
.wrapper {
width: 100%;
height: 220px;
position: relative;
}
/*
* 皮卡丘的鼻子
*/
.nose {
  width: 0;
  height: 0;
  border: 11px solid red;
  border-radius: 12px;
  border-color: black transparent transparent;
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translate(-12px);
}
/*
* 皮卡丘的眼睛
*/
.eye {
  width: 49px;  
  height: 49px;
  background-color: #2e2e2e;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #000;
}
/*
* 皮卡丘的眼珠
*/
.eye::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: 6px;
  top: -1px;
  border: 2px solid #000;

}
.eye.left {
  right: 50%;
  margin-right: 90px;
}
.eye.right {
  left: 50%;
  margin-left: 90px;
}
/*
* 皮卡丘的脸
*/
.face {
  width: 65px;
  height: 68px;
  background-color: #f92726;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px;
}
.face.left {
  right: 50%;
  margin-right: 116px;
}
.face.right {
  left: 50%;
  margin-left: 116px;
}
/*
* 皮卡丘的上嘴唇
*/
.upperLip {
  height: 20px;
  width: 80px;
  border: 3px solid black;
  background-color: yellow;
  position: absolute;
  top: 52px;
  z-index: 1;
}
.upperLip.left {
  right: 50%;
  border-bottom-left-radius: 40px 20px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right {
  left: 50%;
  border-bottom-right-radius: 40px 20px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
/*
* 皮卡丘的下嘴唇
*/
.lowerLip-wrapper {
  width: 120px;
  height: 130px;
  /* background-color: pink; */
  position: absolute;
  left: 50%;
  margin-left: -60px;
  margin-top: 56px;
  overflow: hidden;
}

.lowerLip {
  height: 1000px;
  width: 120px;
  background-color: #971818;
  border: 2px solid black;
  border-radius: 200px/800px;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
* 皮卡丘的舌头
*/
.tongues {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  left: 8px;
  background-color: #f95364;
  position: absolute;
  bottom: 0;
  z-index: 2;
};
/*
* 一只可爱的皮卡丘
*/
 ` 
  writeCode('', code)
}.call()




