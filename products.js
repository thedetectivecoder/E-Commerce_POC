// use this in another file 
  var products = [
    {
        productName: "CL1",
        productPrice: "$21.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        category: "Men"
    },
    {
        productName: "CL2",
        productPrice: "$29.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        category: "Women"
    },{
        productName: "CL3",
        productPrice: "$49.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        category: "Women"
    },{
        productName: "CL4",
        productPrice: "$19.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        category: "Men"
    },{
        productName: "CL5",
        productPrice: "$10.99",
        productImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        category: "Kids"
    },
]

function renderProducts(products){ 
    console.log("Products:: ", products) 
    products.forEach(product => {
        renderEachProduct(product)});
}


//here ${product.attribVal} is template literal.
const findDiv = document.getElementById('clothes-box');

function renderEachProduct(product){
    console.log("redP", product);
    const findDiv = document.getElementById('clothes-box');
    console.log(findDiv)
    const newElement = document.createElement("div")
    newElement.className = "content"
    newElement.innerHTML = `
        <div class = "item-card">
            <div class="center">
                <img src="${product.productImg}" class="image">  
                <h2>${product.productName}</h2>
                <p>Price: $${product.productPrice}</p>
                <p>Category: $${product.category}</p>
                <button class="add-item>Add to cart</button>
            </div>
        </div>
    `
    findDiv.append(newElement)
}

function filterProducts(category){
    console.log("Cat", category)
    document.getElementById('clothes-box').innerHTML = "";
    if(category == "All"){
        renderProducts()
    }else{
        const filteredProducts = products.filter(product => product.category == category);
        console.log("FP : ",filteredProducts);
        document.getElementById('clothes-box').innerHTML = "";
        renderProducts(filteredProducts);
    }
    
}

