$(document).ready(function() {
    $('#data').dataTable( {
        "ajax": "data/all.json",
	"sDom": '<"top">rtp<"bottom"><"clear">',
        "order": [[ 1, "desc" ]],
	"iDisplayLength": 999999,
 	"columnDefs": [
    		{ type: 'num-html', className: "dt-right", "targets": [ 0,1,2,3,4,5,6,7 ] }
  	]
    } );
} );

 
setInterval( function () {
	$('#data').DataTable().ajax.reload(null, false);
}, 1000 );

