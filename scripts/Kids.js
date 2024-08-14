import { getKids } from "./database.js"

const children = getKids()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-childforeignkey="${child.celebrityId}" data-type="children" data-wish="${child.wish}"> Child name: ${child.name}</li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener(
    "click",
    (clickEvt) => {
        const childrenTarget = clickEvt.target

        const childrenId = childrenTarget.dataset.id
        if(childrenTarget.dataset.type === "children"){
            for(const child of children){
                if(child.id === parseInt(childrenId)){
                    window.alert(` ${child.name} 's wish is ${childrenTarget.dataset.wish}`);
                }
            }
        }
    }
)
