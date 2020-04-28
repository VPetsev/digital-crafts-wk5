let orderList = document.getElementById('orderList')
let submitButton = document.getElementById('submitButton')
let emailInput = document.getElementById("emailInput")
let orderInput = document.getElementById("orderInput")

let orderLink = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/'
let emailOrderLink = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress'

let request = new XMLHttpRequest()

request.onload = function(){
    let orderItems = Object.values(JSON.parse(this.responseText))
    console.log(orderItems)
}


enterButton.addEventListener("click", function () {
    let email = userEmail.value
    let order = userOrder.value
    let user = {
        emailAddress: email
        coffee: order
    }
    let postRequest = new XMLHttpRequest()
    postRequest.open("POST", 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/')
    postRequest.setRequestHeader("")
    postRequest send
    postRequest.onload = function() {
        let newCoffee = json.parse(this.responseText)
        orderList.innerHTML += `
            newCoffee.emailAddress
            newCoffee.coffee
        `
    }

})

request = new XMLHttpRequest()
