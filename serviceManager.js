/**
 * 
 */

//serializ object with key pair
$.fn.serializeObject = function()
{
    var object = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (object[this.name] !== undefined) {
            if (!object[this.name].push) {
            	object[this.name] = [object[this.name]];
            }
            object[this.name].push(this.value || '');
        } else {
        	object[this.name] = this.value || '';
        }
    });
    return object;
};


// for ajax success response
var sucessCallbackfn=function(successResponse){
	// do it for success response
};

//for ajax error response
var errorCallbackfn=function(errorResponse){
	// do it for error response
};


// login request
var loginManager=function(){
	var data=$('form').serializeObject();
	var restURL=globalURL+"/login";
	var methodType=methodTypePost;
	var headers=header;
	var jsonObject=JSON.stringify(data);
	var dataTypes=dataType;
	
	//call rest function for communicate with rest API
	callRest(jsonObject,restURL,methodType,headers,dataTypes,sucessCallbackfn,errorCallbackfn);
};

var signUpManager=function(){
	var fromData=$('form').serializeObject();
	var restURL=globalURL+"/signup";
	var methodType=methodTypePost;
	var headers=header;
	var jsonObject=JSON.stringify(fromData);
	var dataTypes=dataType;
	
	//call rest function for communicate with rest API
	callRest(jsonObject,restURL,methodType,headers,dataTypes,sucessCallbackfn,errorCallbackfn);
};

