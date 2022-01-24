export const businessHTML = (company) => {
    return `
    <section class='company'>
        <h2 class='company-name'>${company.companyName}</h2>
        <div class='addressFullStreet'>${company.addressFullStreet}</div>
        <div class='addressFullStreet'>${company.addressCity}, ${company.addressStateCode} ${company.addressZipCode}
    </section>
    `
}