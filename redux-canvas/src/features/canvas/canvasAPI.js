export function fetchRandomColor(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve({
            data:getRandomColor()
        }),2000)
    })
}

const getRandomColor = ()=>{
    const colors = ['#693782','#034598','teal','#903456','#786A56'];
    return colors[getRandomNumber(0,colors.length-1)]
}

export const getRandomNumber = (min,max)=>{
    return Math.floor(Math.random() * (max - min+1))+min;
}