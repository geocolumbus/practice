const body = document.getElementsByTagName("body")[0]

const init = function (){
  body.style.backgroundColor="black"
  body.style.position="relative"
}

const drawPixels = function() {
  for (let i=0; i<1000; i++) {
     const row=Math.floor(Math.random()*700+50)
     const col=Math.floor(Math.random()*1000+50)
     const node=document.createElement("div")
     node.style.width="12px"
     node.style.height="12px"
     node.style.backgroundColor="red"
     node.style.borderRadius="6px"
     node.style.top=`${row}px`
     node.style.left=`${col}px`
     node.style.position="absolute"
     body.appendChild(node)
  }
}

init()
drawPixels()

