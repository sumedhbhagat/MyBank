module.exports = function(Customer) {
    Customer.discover = function(identity, name, dob, cb){
        Customer.find(
            {'where': 
                {'and':[
                    {'name': name},
                    {'dob':dob}
                ]}
            },
            function(err, customersResult){
                console.log(customersResult);
                if(customersResult.length == 1){
                    custId = customersResult[0].custId;
                }
                else {
                    custId = "";
                }

                cb(null, custId);
        });
        
    };

    Customer.remoteMethod('discover', {
        accepts: [
            {arg: 'identity', type: 'string'},
            {arg: 'name', type: 'string'},
            {arg: 'dob', type: 'string'}
        ],
        returns: {arg: 'customerId', type: 'string'}
    });
};