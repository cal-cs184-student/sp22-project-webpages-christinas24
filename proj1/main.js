const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");


// loop through all, adding event listener for the click event
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

       
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active")
        
        
        
        // Only one accordion can open at a time
        // if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader){
        //     //remove active class from this element
        //     currentlyActiveAccordionItemHeader.classList.toggle("active");
        //     currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        // }



        // toggle the active class
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling; 
        
        if (accordionItemHeader.classList.contains("active")) {
            //scrollHeight returns the entire height of an element in pixels, including the height that is not viewable due to overflow
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});
