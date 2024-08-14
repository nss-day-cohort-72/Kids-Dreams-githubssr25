import { getKids, getCelebrities} from "./database.js"

const kids = getKids()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrity = null

    for (const celebrityVal of celebrityArray) {

        let celebrityId = celebrityVal.id;

        // const kid = kidObject.find(kid = kid.id === celebrityId);

        if(kidObject.celebrityId === celebrityVal.id){

        celebrity = celebrityVal;
        }
    }

    return celebrity
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.Sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

