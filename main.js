document.addEventListener("mousemove", function (event) {
  const x = event.pageX
  const y = event.pageY
  const cursor = document.querySelector("span");
  const section = document.querySelector("section")
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
   

  document.querySelectorAll("div").forEach(div => {

    const dx = (div.offsetLeft + 50) - x
    const dy = (div.offsetTop + 50) - y

    const centerPoint = [dx/2, dy/2];
    let angle = Math.atan2(event.pageX - centerPoint[0], - (event.pageY - centerPoint[1]) )*(180 / Math.PI);   
    const saturate = angle*Math.PI;
    const dist = Math.sqrt(dx * dx + dy * dy)



    // use this function as a template for angle calculation
    const score = Math.exp(dist * -0.003)
    
    div.style.transform = "scale(" + score * 3 + ")" + `rotate(${saturate}deg)`;
    // div.style.fontWeight = 100 + (100 * Math.floor(8 * score))

    // var score = Math.floor((Math.exp(dist*-0.003))*800)
    // div.style.fontVariationSettings = "\"wght\" " + dist;



    // div.style.transform = `rotate(${saturate}deg)`; 
    // div.style.fontStretch = score+"%";
  })
})

//this is from p5
function map(n, start1, stop1, start2, stop2) {
  const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    return newval;
  if (start2 < stop2) {
    return this.constrain(newval, start2, stop2);
  } else {
    return this.constrain(newval, stop2, start2);
  }
};

function adjustWidth(val){
  var width = map(val, -1, 1, 100, 200)
  return width
}



document.addEventListener('mousemove', function(e) {
  let body = document.querySelector('body');
  let year = document.getElementById('year');
  let left = e.offsetX;
  let top = e.offsetY;
  year.style.left = left + 'px';
  year.style.top = top + 'px';
});


let circle = document.getElementById('year');const onMouseMove = (e) =>{
  year.style.left = e.pageX + 'px';
  year.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);