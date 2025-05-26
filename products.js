let products={
    data:[/*{
        image:"images/epoxy a81.png",
        title:"Cosmos Epoxy A-81",
        category:"epoxy",
        description: ["Superior resistance", "aeronautical coating"],  
        link:"a81.html"  
    },*/
    {
        image:"images/epoxy b81.png",
        title:"Cosmos Epoxy B-81",
        category:"epoxy",
        description: ["Superior resistance", "harsh environments"],
        link:"b81.html"     
    },
    {
        image:"images/epoxy b81.png",
        title:"Cosmos Epoxy E-65",
        category:"epoxy",
        description: ["Cost efficient", "good resistance"],
        link:"e65.html"     
    },
    {
        image:"images/epoxy m81.png",
        title:"Cosmos Epoxy M-81",
        category:"epoxy",
        description: ["extremely harsh environments", "mining, petrochemical epoxy coating"],
        link:"m81.html"     
    },
    {
        image:"images/poly p65.png",
        title:"Cosmos Polyurethane",
        category:"poly",
        description: ["good aesthetics", "UV & exterior resistance"],
        link:"poly.html"     
    },
    {
        image:"images/prim (1).png",
        title:"Cosmos Prim",
        category:"prim",
        description: ["Superior adhesion", "stainless & galvaized steel"],
        link:"prim.html"     
    }
   
]
}

let index=0;
for (let i of products.data) {
    let ancle=document.createElement("a");
    ancle.setAttribute("href",i.link);
    let card=document.createElement("div");
    ancle.classList.add("product-card",i.category,"hide");
    card.classList.add("product-card__inner");
    let imgContainer=document.createElement("div");
    imgContainer.classList.add("product-card__img-container")
    let image=document.createElement("img");
    image.classList.add("product-card__img");
    image.setAttribute("src",i.image);
    let name=document.createElement("h4");
    name.classList.add("product-card__name")
    name.innerText=i.title;
    let description=document.createElement("ul");
    description.classList.add("product-card__description");
      i.description.forEach(descItem => {
        let li = document.createElement("li");
        li.innerText = descItem;
        description.appendChild(li);
    });
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    card.appendChild(name);
    card.appendChild(description);
    ancle.appendChild(card);
    let container=document.querySelector(".products-grid__grid");
    container.appendChild(ancle);
    index++;
}

function FilterProduct(value){

    let checkboxes=document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox=>{
        if(value==checkbox.value){
            checkbox.checked=true;
        }
        else {
            checkbox.checked=false;
        }
    })

    let elements=document.querySelectorAll(".product-card");
    elements.forEach((element)=>{


        if (value=="All") {
            element.classList.remove("hide");
        }
        else {

            if (element.classList.contains(value)) {
                element.classList.remove("hide");
                console.log("hola");
            }
            else {
                element.classList.add("hide");
            }
        }
    })

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
          const id = this.dataset.id;
          localStorage.setItem("articleId", id); // guarda el id para la siguiente página
        });
      });
      
}


window.onload=()=>{
    FilterProduct("All");
}



