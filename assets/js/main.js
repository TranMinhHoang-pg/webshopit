
const USER_ADMIN = "admin";
const PASS_ADMIN = "123";



var switchLogin = document.getElementById("switch-login");
var switchRegister = document.getElementById("switch-register");
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");
var modal = document.getElementById("modal");
var userAccount = document.getElementById("USER-ACCOUNT");
var passAccount = document.getElementById("PASSWORD-ACCOUNT");
var loginButton = document.getElementById("login-button");
var loginNone = document.getElementById("login-none");
var logged = document.getElementById("logged");

var adminPageSwitch = document.getElementById("admin-page-switch");
var adminPageSwitchMobile = document.getElementById("admin-page-switch_mobile");

adminPageSwitch.addEventListener( 'click',function() {
    
    adminApp.style.display = 'flex';
    
})

adminPageSwitchMobile.addEventListener( 'click',function() {
    
    adminApp.style.display = 'flex';
    


})

switchLogin.addEventListener( 'click',function() {
    loginForm.style.display = 'block';
    modal.style.display = 'flex';
    
})
switchRegister.addEventListener( 'click',function() {
    registerForm.style.display = 'block';
    modal.style.display = 'flex';
})

loginButton.addEventListener('click', function() {
    var user = userAccount.value;
    var password = passAccount.value;
    if(user === USER_ADMIN && password === PASS_ADMIN) {
        loginSuccsess();
        mobileLogged.classList.remove("mobile-login-none");
    }
})

function loginSuccsess() {
    modal.style.display = 'none';
    loginNone.style.display = "none";
    logged.style.display = "flex";
} 
/*MOBILE     LOGIN */
var mobileLoginSwitch = document.getElementById("mobile-login")
var mobileLogged = document.querySelector(".header__menu-mobile-list")



mobileLoginSwitch.addEventListener( 'click',function() {
    loginForm.style.display = 'block';
    modal.style.display = 'flex';
    
})


/*---------- DETAIL PRODUCT--------------*/

function product_click(current_id) {
    var current_product_img = document.getElementById(current_id +"-img").style.backgroundImage;
    var current_product_name = document.getElementById(current_id +"-name");
    var current_product_oldCost = document.getElementById(current_id +"-old-cost");
    var current_product_newCost = document.getElementById(current_id +"-new-cost");
    var current_product_soldNumber = document.getElementById(current_id +"-sold-number");
    var current_product_address = document.getElementById(current_id +"-address");
    
    

    /*show */
    
    disPlay(current_product_img,current_product_name,current_product_oldCost,current_product_newCost,current_product_soldNumber,current_product_address);
    product_detail.style.display = 'flex';
}

let product_detail = document.getElementById("product-detail");

function disPlay(img,name,oldCost,newCost,soldnumber,address) {
    var imgBackground = img.replace( /"/g, "");
    product_detail.innerHTML = `
                            
                            <div id="back-home"  onClick="backHome()">
                                <i class=" fas fa-times"></i>
                            </div>
                            <div class="product-detail-img" style="background-image:  ${imgBackground};"></div>
                            <div class="product-detail-infor">
                                <h4 class="product-detail-name">${name.innerHTML}</h4>
                                <p class="product-detail-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque nam placeat tempore dolorum quidem libero tenetur illum suscipit ipsa quaerat minus voluptatum, saepe fugit eligendi sit ab necessitatibus. Tenetur.</p>
                                <div class="product-detail-money">
                                    <span class="product-detail-old-cost">Giá gốc: ${oldCost.innerHTML}</span>
                                    <span class ="product-detail-new-cost">Giá ưu đãi: ${newCost.innerHTML}</span>
                                </div>
                                <div class="product-detail-sold-number">Đã bán: ${soldnumber.innerHTML}</div>
                                <div class="product-detail-address">${address.innerHTML}</div>
                                <div class="product-detail-buy">
                                    <button class="product-detail-btn btn btn-primary">Mua</button>
                                </div>
                            </div>
    
    `
   
}



/*  shutdown PRODUCT  */


 function backHome() {

    product_detail.style.display = 'none';
    adminApp.style.display = 'none';
}


/*ADMIN=----------------------------------------------- */
var adminApp = document.getElementById("admin-app");
var addButton = document.getElementById("add-button");
var productLists = document.getElementById("product-lists");

addButton.addEventListener( 'click',function() {
    var idInpuy = document.getElementById("id-input");
    var imageInput = document.getElementById("image-input");
    var nameInput = document.getElementById("name-input");
    var oldCostInput = document.getElementById("old-cost-input");
    var newCostInput = document.getElementById("new-cost-input");
    var soldNumberInput = document.getElementById("sold-number-input");
    var addressInput = document.getElementById("address-input");
    var addButton = document.getElementById("add-button");

        

    let li = document.createElement("li")
li.classList.add("col", "l-2-4", "m-4", "c-6");
li.id = idInpuy.value;
li.setAttribute("onclick","product_click(this.id)");

li.innerHTML = `
                            

<a id ="${idInpuy.value}" class="product__main-wrap">
    <div id ="${idInpuy.value}-img" class="product__main-wrap--img" style ="background-image: url(${imageInput});"></div>
    <div class="product__main-wrap--detail">
        <h4 id ="${idInpuy.value}-name" class ="product__main-wrap--name">${nameInput.value}</h4>
        <div class="product__main-wrap--money">
            <span id ="${idInpuy.value}-old-cost" class="product__main-wrap--money-origin">₫${oldCostInput.value}</span>
            <span id ="${idInpuy.value}-new-cost" class="product__main-wrap--money-current">₫${newCostInput.value}</span>
        </div>
        <div class="product__main-wrap--interaction">
            <!--  Has class:  product__main-wrap--interaction--like  -->
            <div class=" ">
                <i class=" product__main-wrap--interaction--empty far fa-heart"></i>
                <i class=" product__main-wrap--interaction--fill fas fa-heart"></i>
            </div>
            <div class="product__main-wrap--interaction--rating">
                 <i class=" star__rating-gold fas fa-star"></i>
                 <i class=" star__rating-gold fas fa-star"></i>
                 <i class=" star__rating-gold fas fa-star"></i>
                 <i class=" star__rating-gold fas fa-star"></i>
                 <i class="fas fa-star"></i>
             </div>
             <span class="product__main-wrap--interaction--sold">Đã bán 
                 <span id ="${idInpuy.value}-sold-number" class="product__main-wrap--interaction--sold--number">${soldNumberInput.value}</span>
             </span>
        </div>
        <div id ="${idInpuy.value}-address" class="product__main-wrap--address">${addressInput.value}</div>
    </div>
    <div class="product__main-wrap--favourite">
        <i class="fas fa-check"></i>
        <span>Yêu thích</span>
    </div>
    <div class="product__main-wrap--sale-off">
        <span class = "product__main-wrap--sale-off--percent ">43%</span>
        <span class="product__main-wrap--sale-off--label">Giảm</span>
    </div>
</a>

    
    `
   
productLists.appendChild(li);
    
    
})

