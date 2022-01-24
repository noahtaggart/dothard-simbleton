import { getBusinesses } from "./database.js";
import { businessHTML } from "./BusinessList.js";

const contentTarget = document.querySelector('#container')

const businessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = `<h1>Active Businesses</h1>`

    businessArray.forEach(
        (companyName) => {
            contentTarget.innerHTML += businessHTML(companyName)
        }
    )
}
const applicationHTML = businessList()

