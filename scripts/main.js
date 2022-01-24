import { getBusinesses, newYorkCompanies, manufacturingCompanies } from "./database.js";
import { businessHTML } from "./BusinessList.js";

const mainTarget = document.querySelector('#container')
const newYorkTarget = document.querySelector('.businessList--newYork')
const manufacturingBusinessesTarget = document.querySelector('.businessList--manufacturing')

const businessList = () => {
    const businessArray = getBusinesses()
    mainTarget.innerHTML = `<h1>Active Businesses</h1>`
    //manufacturingBusinessesTarget.innerHTML = `<h1>Manufacturing Businesses</h1>`

    businessArray.forEach(
        (companyName) => {
            mainTarget.innerHTML += businessHTML(companyName)
        }
    )
}
const applicationMainHTML = businessList()

const nyBusinessList = () => {
    const nyBusinessArray = newYorkCompanies()
    newYorkTarget.innerHTML = `<h1>New York Businesses</h2>`

    nyBusinessArray.forEach(
        (companyName) => {
            newYorkTarget.innerHTML += businessHTML(companyName)
        }
    )
}
const nyApplicationHTML = nyBusinessList()

const manufacturingBusinessList = () => {
    const manufacturingBusinessArray = manufacturingCompanies()
    manufacturingBusinessesTarget.innerHTML = `<h1>Manufacturing Businesses</h2>`

    manufacturingBusinessArray.forEach(
        (companyName) => {
            manufacturingBusinessesTarget.innerHTML += businessHTML(companyName)
        }
    )
}
const manufacturingApplicationHTML = manufacturingBusinessList()

