
import { getBusinessData } from "./BusinessData.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".businessInfo")

export const makeBusinessList = () => {
        const businessArray = getBusinessData()
        contentTarget.innerHTML = "<h1>Active Businesses</h1>"

        businessArray.forEach(
            (businessObject) => {
                contentTarget.innerHTML += Business(businessObject) 
            }
        );
        

}