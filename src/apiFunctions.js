import $ from 'jquery';


const URL = 'https://log-book-api.herokuapp.com/api/';

function callApi(url, type, body, cb, errCb, authHeader) {
	if (!authHeader){
		authHeader = ''
	}
	$.ajax({
		url: url,
		type: type,
		data: body,
		headers: {
			"Content-Type": "application/json",
			"Authorization": authHeader
		},
		success: function (resp) {
			if (cb) {
				cb(resp);
			}
		}
	}).fail(function (err) {
		// Maybe put something better here?
		if(errCb){
			errCb(err);
		}
		else {
			console.error(err);
		}
	});
}

function getAllFlights(cb) {
    let url = URL + 'flightTimes/';
    callApi(url, 'GET', {}, cb);
}

export {
    getAllFlights
};
