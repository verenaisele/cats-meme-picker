import {catsData} from "./data.js"


const emotionRadios = document.getElementById('emotion-radios')


function getEmotionsArray(cats){
    let emotionsArray = []
    for(let cat of cats){
        for (let emotion of cat.emotionTags){

            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)

    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for=${emotion}>${emotion}</label>
            <input
            type="radio"
            id=${emotion}
            value=${emotion}
            name="emotion-radios"
            >
        </div>
        `
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionRadios(catsData)