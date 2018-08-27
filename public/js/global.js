var nainclude = [
	'identifier',
	'latitude',
	'longitude',
	'elevation',
	'display name',
	'device identifier',
	'instance',
	'submission date',
	'submitter',
	'duration'
];

function getDetails(a) {
	let id = $(a).attr('data');
    $.get('/api/details/'+ id ).done(function(data){
		$('#school_name').text(data['name of school?']);
		$('#school_desc').children().remove();
		$('#school_feature').html("");
		Object.keys(data).forEach(function (key) {
			var features = nainclude.includes(key);
			if (!features) {
				if (data[key]){
					let body;
					var str = data[key];
					if (str.startsWith("https://")){
						body = "<img src='"+data[key]+"' class='img-fluid img-thumbnail rounded'>";
					} else if(str.startsWith("Yes")){
						body = "<div class='badge badge-success'>" + str + "</div>";
					} else if(str.startsWith("No")){
						body = "<div class='badge badge-danger'>" + str + "</div>";
                    }else {
						body = "<div class='badge badge-primary'>" + str + "</div>";
					}
					$('#school_desc').append(
						"<div class='card card-custom'><div class='card-body'><div class='card-title'>" +
						key + "</div><div class='card-text'>" + body + "</div></div></div>"
					);
				};
			}
		});
		$('#myModal').modal('show');
    });
}

function autoQuestion() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = $('#school_detail');
 	card = $('div.card');
    li = $('div.card-body');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}

function autoAnswer() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myOutput');
    filter = input.value.toUpperCase();
    ul = $('#school_detail');
 	card = $('div.card');
    li = $('div.card-text');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
		if(a){
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				card[i].style.display = "";
			} else {
				card[i].style.display = "none";
			}
		}
	}
}
