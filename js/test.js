
function create()
{
    
	var usr = $("#usrInput").val();
	var pwd = $("#pwdInput").val();

    console.log(`Create: ${usr} | ${pwd}`);
	$("#usr").text(`Create Username: ${usr}`);
	$("#pwd").text(`Create Password: ${pwd}`);
}

function login()
{
    
	var usr = $("#usrInput").val();
	var pwd = $("#pwdInput").val();

    console.log(`Login: ${usr} | ${pwd}`);
	$("#usr").text(`Login username: ${usr}`);
	$("#pwd").text(`Login password: ${pwd}`);
}
