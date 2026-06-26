/*
==========================================
Accordion Module
==========================================
*/

function initializeAccordion(){

    const headers=document.querySelectorAll(".accordion-header");

    headers.forEach(header=>{

        header.addEventListener("click",()=>{

            const content=header.nextElementSibling;

            const opened=content.style.display==="block";

            document.querySelectorAll(".accordion-content")
            .forEach(item=>{

                item.style.display="none";

            });

            if(!opened){

                content.style.display="block";

            }

        });

    });

}
