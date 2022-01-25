export const businessHTML = (company) => {
    return `
    <section class='company'>
        <h2 class='company-name'>${company.companyName}</h2>
        <div class='addressFullStreet'>${company.addressFullStreet}</div>
        <div class='addressFullStreet'>${company.addressCity}, ${company.addressStateCode} ${company.addressZipCode}
    </section>
    `
}

export const agents = (company) => {
    const onlyAgents = company.map(agentObject => {
        const newObject = {}
            newObject.fullName = agentObject.purchasingAgent.nameFirst + ' ' + agentObject.purchasingAgent.nameLast
            newObject.companyName = agentObject.companyName
            newObject.phoneNumber = agentObject.phoneWork
            return newObject
        })
    return onlyAgents
}

export const agentHTML = (agent) => {
    let agentHTMLString = []
        agentHTMLString += 
        `
        <section class='agents'>
            <h2 class='agent-name'>${agent.fullName}</h2>
            <div class='agent-companyName'>${agent.companyName}</div>
            <div class='agent-phoneNumber'>${agent.phoneNumber}
        </section><br>
        `

    ;

    return agentHTMLString
}
