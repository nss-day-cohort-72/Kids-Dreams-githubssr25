import { getCelebrities, getKids } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    data-email="${star.email}">
                    ${star.name} is a ${star.sport}
                </li>`
    }

    html += "</ol>"
    return html
}
              // id="star--${celebrity.id}">

document.addEventListener(
    "click",
    (clickEvt) => {
        const celebrityTarget = clickEvt.target

        const celebrityId = celebrityTarget.dataset.id
        if(celebrityTarget.dataset.type === "celebrity"){
            for(const celeb of celebrities){
                if(celeb.id === parseInt(celebrityId)){
                    window.alert(` ${celeb.name} is a ${celebrityTarget.dataset.sport} star`);
                }
            }
        }
    }
)
