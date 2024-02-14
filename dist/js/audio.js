var doms = {
    containter:document.querySelector('.containter'),
    audio:document.querySelector('audio'),
    ul:document.querySelector('ul'),
}
function getTime(string){
    var str = string.substring(1)
    var array = str.split(':')
    return +array[0]*60+ +array[1]
}
function parseLrc(Lrc){
    var str = Lrc.split('\n')
    return str.map(item =>{
        let strData = item.split(']')
        return {
            time:getTime(strData[0]),
            words:strData[1]
        }
    })
}

function getIndex(){
    const currentTime = doms.audio.currentTime;
    for(var i =0;i<lrcData.length;i++){
        if(currentTime < lrcData[i].time){
            return i-1
        }
    }
    return lrcData.length -1
}


var lrcData = parseLrc(Lrc)
creatElements()
function creatElements(){
    var frameArg = document.createDocumentFragment()
    for (var index = 0; index < lrcData.length; index++) {
        var li = document.createElement('li')
        li.textContent = lrcData[index].words
        frameArg.appendChild(li)        
    }
    doms.ul.appendChild(frameArg)
}

const containterHeight = doms.containter.clientHeight;
const liHeight = doms.ul.children[0].clientHeight;
const maxOffsetHeight = doms.ul.clientHeight - containterHeight
console.log('maxOffsetHeight',maxOffsetHeight)
function setOffset(){
    var idx = getIndex()
    var offset =  liHeight * idx  + liHeight / 2 - containterHeight / 2
    console.log('offset',offset)
    if(offset < 0){
        offset = 0
    }
    if(offset > maxOffsetHeight){
        offset = maxOffsetHeight
    }
    doms.ul.style.transform = `translateY(-${offset}px)`
    var li = doms.ul.querySelector('.active')
    if(li){
        li.classList.remove('active')
    }

    li = doms.ul.children[idx]
    if(li){
        li.classList.add('active')
    }
}

doms.audio.addEventListener('timeupdate',()=>{
    // debugger
    console.log('变化了')
    setOffset()
})