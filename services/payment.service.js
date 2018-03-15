var payment = require("../config/main.json");
var stripe = require("stripe")(payment.stripekey);
var service = {};
var Q = require('q');

service.createToken = createToken;
service.createCharge = createCharge;
service.captureCharge = captureCharge;
service.createCustomer = createCustomer;

module.exports = service;

//function to create charge without capture using payment token
function createCharge(data)
{
    var deferred = Q.defer();
    var idempotency_key = makeid();
    var payment_details = {
      amount: data.amount,
      currency: "GBP",
      capture:false,
      customer:data.customer,
      description: data.description
    };
    if(data.payment_token)
        payment_details.source = data.payment_token;

    stripe.charges.create(payment_details,{
        idempotency_key: idempotency_key
    }, function(err, charge) {
      // asynchronously called
        if(err)
        {
           deferred.resolve({"status":"error","message":err.message});
        }
        else if(charge)
        {
          deferred.resolve({"status":"success","message":charge});
        }
    });

    return deferred.promise;
} 
//function to capture charge
function captureCharge(charge_id)
{
    var deferred = Q.defer();
    stripe.charges.capture(charge_id, function(err, charge) {
      // asynchronously called
        if(err)
           deferred.resolve({"status":"error","message":err.message});
        else if(charge)
          deferred.resolve({"status":"success","message":charge});
    });
    return deferred.promise;
}
//function to create token
function createToken(data)
{
    var deferred = Q.defer();
    stripe.tokens.create({
      card: {
        "number": '4242424242424242',
        "exp_month": 12,
        "exp_year": 2017,
        "cvc": '123'
      }
    }, function(err, token) {
      // asynchronously called
        
       if(err)
           deferred.resolve(err.message);
       else if(token){
          deferred.resolve(token);
       }
        
    });
    return deferred.promise;
    
}
function createRefunds(data)
{
    var deferred = Q.defer();
    var idempotency_key = makeid();
    stripe.refunds.create({
	  charge: data.id, // charge id 
	}, function(err, refund) {
	  // asynchronously called
		if(err)
        {
           deferred.resolve(err.message);
        }
        else if(charge)
        {
          deferred.resolve(refund);
        }
	}); 
    return deferred.promise;
} 
function createCustomer(token)
{
    var deferred = Q.defer();
    stripe.customers.create({
      description: 'Customer for andrew.jones@example.com',
      source: token // obtained with Stripe.js
    }, function(err, customer) {
      // asynchronously called
        if(err)
           deferred.resolve(err.message);
        else if(customer)
          deferred.resolve(customer);

    });
    return deferred.promise;
}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
