// use this in another file 
  var products = [
    {
        productName: "CL1",
        productPrice: "$19.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
        productName: "CL1",
        productPrice: "$19.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
        productName: "CL1",
        productPrice: "$19.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
        productName: "CL1",
        productPrice: "$19.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
        productName: "CL1",
        productPrice: "$19.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
]

function renderProducts(){  
    console.log(products)
    products.forEach(product => {
        console.log("P : ", product)
        renderEachProduct(product)});
}


//here ${product.attribVal} is template literal.

console.log("FD out: ", findDiv)
function renderEachProduct(product){
    const findDiv = document.getElementById('clothes-box');
    console.log("ProEach: ", product)
    const newElement = document.createElement("div")
    newElement.className = "content"
    newElement.innerHTML = `
        <div class = "item-card">
            <div class="center">
                <img src="${product.productImg}" class="image">  
                <h2>${product.productName}</h2>
                <p>Price: $${product.productPrice}</p>
                <button class="add-item>Add to cart</button>
            </div>
        </div>
    `
    findDiv.append(newElement)
}

