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

var qgroup = [
    {'n':'Interview Details','q': 10},
    {'n':'School Information','q': 13},
    {'n':'Water Supply','q': 20},
    {'n':'Sanitation','q':31},
    {'n':'Hygiene','q':9},
    {'n':'School Management','q':42},
    {'n':'Teacher','q':3},
    {'n':'Head Teacher','q':4},
    {'n':'Geolocation','q':1}
];

function getDetails(a) {
	let id = $(a).attr('data');
    $.get('/api/details/'+ id ).done(function(data){
		$('#school_name').text(data['name of school?']);
		$('#school_desc').children().remove();
		$('#school_feature').children().remove();
		Object.keys(data).forEach(function (key) {
			var features = nainclude.includes(key);
			if (!features) {
				if (data[key]){
					let body;
					var str = data[key];
                    if(!isNaN(str)){
                        key = "<i class='fas fa-hashtag'></i> " + key;
						body = "<div class='badge badge-warning'>" + str + "</div>";
                    } else if (str.startsWith("https://")){
						body = "<img src='"+data[key]+"' class='img-fluid img-thumbnail rounded'>";
                        key = "<i class='fas fa-camera'></i> " + key;
					} else if(str.startsWith("Yes")){
                        key = "<i class='fas fa-list-ul'></i> " + key;
						body = "<div class='badge badge-success'>" + str + "</div>";
					} else if(str.startsWith("No")){
                        key = "<i class='fas fa-list-ul'></i> " + key;
						body = "<div class='badge badge-danger'>" + str + "</div>";
                    } else {
                        key = "<i class='fas fa-align-justify'></i> " + key;
						body = "<div class='badge badge-primary'>" + str + "</div>";
					}
					$('#school_desc').append(
						"<div class='card card-custom'><div class='card-body'><div class='card-title'>" +
						key + "</div><div class='card-text'>" + body + "</div></div></div>"
					);
				};
			}
		});
		$('#detail_modal').modal('show');
    });
}

function getGroup(x,y) {
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
