app.service('myserv', function() {
          this.getServiceList = function () {
    return [];
}
this.getISEndpoint = function() { 
 return 'http://IBM-9468H24:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "03-09-2026 21:50:35 IST";
}
this.getPackageInfo = function(){
 return{"packageName":"DemoPub","createdDate":"30-07-2026 15:22:15 IST","version":"1.0"};
}
});
