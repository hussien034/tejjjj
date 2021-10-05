

var productNameInput=document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var productCategoryInput=document.getElementById("productCategory");
var productDescription=document.getElementById("productDescrption");
var button=document.getElementById("button");
var productscontinar=[];
if(JSON.parse(localStorage.getItem("allproducts"))!=null){
    productscontinar=JSON.parse(localStorage.getItem("allproducts"));
    displayProducts()
}
else{
    productscontinar=[];
}
button.addEventListener("click",function(){
    var products={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        description:productDescription.value,
    }
    productscontinar.push(products)
    localStorage.setItem("allproducts",JSON.stringify(productscontinar));
    displayProducts();
    clearform()
 
})
function displayProducts(){
    var cartona="";
    for(var i=0;i<productscontinar.length;i++)
    {
        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${productscontinar[i].name}</td>
        <td>${productscontinar[i].price}</td>
        <td>${productscontinar[i].category}</td>
        <td>${productscontinar[i].description}</td>
        <td><button>Update</button></td>
        <td><button onclick="delteProduct(${i})">Delete</button></td>
        </tr>
        `

    }
    document.getElementById("tbody").innerHTML=cartona;
}
function clearform(){
    productNameInput.value="";
    productPriceInput.value="";
    productDescription.value="";
    productCategoryInput.value=""
}
function delteProduct(index){
    productscontinar.splice(index,1);
    localStorage.setItem("allproducts",JSON.stringify(productscontinar));
    displayProducts()
}