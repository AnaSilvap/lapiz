let canv = document.querySelector("#myCanvas")
let ctx = canv.getContext ("2d")
ctx.fillStyle = "#ffcc00"
ctx.strokeStyle = "#663300"
ctx.beginPath()
ctx.rect (200, 50, 70, 200)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#ffcc99"
ctx.strokeStyle = "#663300"
ctx.beginPath()
ctx.moveTo(200,250)
ctx.lineTo(235,325)
ctx.lineTo(270,250)
ctx.lineTo(200,250)
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.moveTo(262.5, 50)
ctx.lineTo(262.5, 250)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#000000"
ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.moveTo(210, 50)
ctx.lineTo(210, 250)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#000000"
ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.moveTo(235,325)
ctx.lineTo(250.5, 290)
ctx.lineTo(219, 290)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#ff5050"
ctx.strokeStyle = "#ff5050"
ctx.beginPath()
ctx.arc(235, 50, 35.8, 1*Math.PI,0*Math.PI)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#333333"
ctx.strokeStyle = "#000000"
ctx.beginPath()
ctx.rect (200, 50, 70, 20)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#ff9933"
ctx.strokeStyle = "#ff9933"
ctx.beginPath()
ctx.moveTo(200, 55)
ctx.lineTo(270, 55)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#ff9933"
ctx.strokeStyle = "#ff9933"
ctx.beginPath()
ctx.moveTo(200, 60)
ctx.lineTo(270, 60)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#ff9933"
ctx.strokeStyle = "#ff9933"
ctx.beginPath()
ctx.moveTo(200, 65)
ctx.lineTo(270, 65)
ctx.stroke()
ctx.fill()