

soptima twowaypoolingservice endpoints



PUT request -> transaction
http://localhost:3009/twoWayPoolingService/transaction
{
    "accountList": [
        "100003",
        "100004"
    ]
}

GET request -> history
http://localhost:3009/twoWayPoolingService/history

GET request -> getInstruction
http://localhost:3009/twoWayPoolingService/getInstruction


PUT request -> populateInstruction
http://localhost:3009/twoWayPoolingService/populateInstruction
    {
    "controlBankAccountNumber":"60161331926817",
    "contraBankAccountNumber":"60161331926818",
    "controlBusinessName":"CAFE WILSON",
     "contraBusinessName":"CAFE WILSON",
    "target":"5000"    
    }

   