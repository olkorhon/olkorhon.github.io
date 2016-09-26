function openTab(evt, tab_name) 
{
    var i;
	var tabcontent;
	var tablinks;
	
	/* Initially hide all tabs */
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
	{
        tabcontent[i].style.display = "none";
    }
	
	/* Rename link with active */
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) 
	{
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
	evt.currentTarget.className += " active";
	
	/* Display the block denoted by tab_name */
    document.getElementById(tab_name).style.display = "block"; 
}