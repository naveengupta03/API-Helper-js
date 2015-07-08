/**
 * 
 */


// ajax request
var callRest = function(data,restURL,methodType,header,dataType,sucessCallbackfn,errorCallbackfn) {
	console.log(data);
	$.ajax({
		type : methodType,
		headers : header==null?"":header,
		url : restURL,
		dataType : dataType,
		data : data==null?"":data,
		success : function(successResponse) {
			// success function
			sucessCallbackfn(successResponse);
		},
		error : function(errorResponse) {
			// error function
			errorCallbackfn(errorResponse);
		}
	});
};