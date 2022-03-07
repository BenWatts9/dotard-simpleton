
export const Business = (businessObj) => {
    return `
        <section class="infoitems"><h2> ${businessObj.companyName}</h2>
        <p>${businessObj.addressFullStreet}</p>
        <p>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p></section>
    `
}