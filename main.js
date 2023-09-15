import {units} from './data'
const numberInput=document.getElementById('number-input')
const convertBtn=document.getElementById('convert-btn')
const unitHtml=document.getElementById('unit-html')
let isDark=false
const toggleDarkBtn=document.getElementById('toggle-dark-btn')
const clearInput=()=>numberInput.value=""
const renderUnits=()=>{unitHtml.innerHTML= units.map(({conversionFactor,metric,metricSingle,imperial,content,imperialSingle})=>{
        const inputValue= numberInput.value
        
        const imperialUnit=inputValue==='1' ? imperialSingle: imperial
        const metricUnit=inputValue==='1'?metricSingle: metric  

        const {item,title,itemContent}=getDarkStyle(isDark)

       return `<div class="${item} container flex-col justify-center">
        <h3 class=${title}>${content}</h3>
        <p class='${itemContent}'>${inputValue} ${metricUnit} = ${(inputValue*conversionFactor).toFixed(2)} ${imperial} | ${inputValue} ${imperialUnit} = ${(inputValue/conversionFactor).toFixed(2)} ${metric}</p>
      </div>`}
      
      )
    clearInput()
    }


const getDarkStyle=(isDark)=> ({
   
    item: isDark?'unit-item-dark': 'unit-item',
    title:isDark?'unit-item-title-dark':'unit-item-title',
    itemContent:isDark? 'unit-item-content-dark': 'unit-item-content'  
})
    
const toggleDarkMode=()=>{
    document.body.classList.toggle('body-dark')
    toggleDarkBtn.classList.toggle('bg-dark')
    isDark= isDark? false :true
 

    
    renderUnits(isDark)


}
convertBtn.addEventListener('click',renderUnits)

toggleDarkBtn.addEventListener('click',toggleDarkMode)



renderUnits()