var frm = $("form#stack_search");
$(frm).removeAttr('onsubmit');

var btn4 = $('#stack_search a:last-child');
$(btn4).removeAttr('onclick');

function icon(fa){
    return "<i class='fas fa-"+fa+"'></i>";
}
function col(id, order, searchable){
    return {data:id,name:id,orderable:order,searchable:searchable};
}

$.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

$.fn.dataTable.Buttons.defaults.dom.button.className = 'btn btn-light my-2 my-sm-0';

var data_table = $('#school_table').DataTable({
    pageLength:10,
    scrollX:true,
    autoWidth:false,
	processing: true,
	serverSide: true,
	ajax: {
		url: 'api/database',
		method: 'POST'
	},
	columns: [
        col('L', true, true),
        col('province', true, true),
        col('school_type', true, true),
        col('registration', true, true),
        col('R', true, true),
        col('total_students', true, false),
        col('total_teacher', true, false),
        col('total_toilet', true, false),
        col('bg_toilet', false, false),
        col('washing_facilities', true, false),
        col('safe_to_drink', true, false),
        col('annual_grant', true, false),
        col('community_support', true, false),
	],
    lengthMenu: [
        [ 10, 25, 50, 100, -1 ],
        [ '10 rows', '25 rows', '50 rows', '100 rows', 'Show all' ]
    ],
	dom: 'Brtpi',
    buttons: [
        { extend: 'print',
          text: icon('print'),
          key: { key: 'p', altkey: true }
        },
        { extend: 'excel',
          text: icon('file-excel'),
          key: { key: 'x', altkey: true }},
        { extend: 'pdf',
          text: icon('file-pdf'),
          key: { key: 'd', altkey: true }},
        { extend: 'csv',
          text: icon('file-contract'),
          key: { key: 'c', altkey: true }},
        { extend: 'colvis', fade:0, text: icon('table')},
        { extend: 'pageLength', fade:0},
    ],
	initComplete: function () {
		$('.dt-buttons.btn-group').prependTo('.form-inline');
		$('.dt-buttons.btn-group').show();
	}
});

$("#find").removeAttr('onkeydown');
$('#school_table tbody').on('click', 'tr', function () {
	var data = data_table.row( this ).data();
    console.log(data);
	getDetails(data['A'],'id');
});

$(btn4).on('click', function () {
	searchTable();
    //var column = data_table.column( $(this).attr('data-column') );
    //column.visible( ! column.visible() );
});

$(frm).on('submit', function() {
    event.preventDefault()
	searchTable();
});

function searchTable(){
	let search_val = $('#find').val();
	data_table.search(search_val).draw();
}
