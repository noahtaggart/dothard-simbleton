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


const agentsListArray = agents(businessArray)
const agentsList = () => {
    agentTarget.innerHTML = `<h1>Purchasing Agents</h1>`

    agentsListArray.forEach(
        (fullName) => {
            agentTarget.innerHTML += agentHTML(fullName)
        }
    )
}
const agentApplicationHTML = agentsList()

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener(
        "keypress",
        keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                /*
                    When the user presses 'Enter', find the matching business.

                    You can use the `.includes()` string method to
                    see if a smaller string is part of a larger string.

                    Example: business.companyName.includes(keyPressEvent.target.value)
                */
                const inputField = document.getElementById("companySearch").value
                const foundBusiness = businessArray.find(business => business.companyName.includes(inputField))/** implement .find() method here */
                if (foundBusiness === undefined) {
                    window.alert(`Company not found`)
                } else {
                    companySearchResultArticle.innerHTML = businessHTML(foundBusiness);
                }
            }
        });

const agentSearchResultArticle = document.querySelector(".foundAgents")
document
    .querySelector("#agentSearch")
    .addEventListener(
        "keypress",
        keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                /*
                    When the user presses 'Enter', find the matching business.
 
                    You can use the `.includes()` string method to
                    see if a smaller string is part of a larger string.
 
                    Example: business.companyName.includes(keyPressEvent.target.value)
                */
                const inputField = document.getElementById("agentSearch").value
                const foundAgent = agentsListArray.find(agent => agent.fullName.includes(inputField))/** implement .find() method here */
                if (foundAgent === undefined) {
                    window.alert(`Agent not found`)
                } else {
                    agentSearchResultArticle.innerHTML = agentHTML(foundAgent);
                }
            }
        });

/*
export const findCompanies = (searchCondition) => {
    const matchingCompany = businessArray.find(business => business.companyName === searchCondition)
    
    return matchingCompany
}
*/

