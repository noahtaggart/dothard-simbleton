import { getBusinesses, newYorkCompanies, manufacturingCompanies } from "./database.js";
import { businessHTML, agents, agentHTML } from "./BusinessList.js";


const mainTarget = document.querySelector('#container')
const newYorkTarget = document.querySelector('.businessList--newYork')
const manufacturingBusinessesTarget = document.querySelector('.businessList--manufacturing')
const agentTarget = document.querySelector(".agents")

const businessArray = getBusinesses()
const businessList = () => {
    mainTarget.innerHTML = `<h1>Active Businesses</h1>`

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


const agentsList = () => {
    const agentsListArray = agents(businessArray)
    agentTarget.innerHTML = `<h1>Purchasing Agents</h1>`

    agentsListArray.forEach(
        (fullName) => {
            agentTarget.innerHTML += agentHTML(fullName)
        }
    )
}
const agentApplicationHTML = agentsList()


/*

const agentFunction = () => {
    const agentsBusinessArray = agents()
    agentTarget.innerHTML = `<h1>Purchasing Agents</h1>`

    agentsBusinessArray.forEach(
        (agentObject) => {
            agentTarget.innerHTML += agentHTML(agentObject)
        }
    )
}
const agentApplicationHTML = agentFunction()
*/ 