var parseddata;
var data;
var cobs;
function init(){
	 data=document.querySelector("script#data").innerHTML;
	 parseddata=JSON.parse(data);
	//console.log(parseddata);
	var ele=document.getElementById("main");
		ele.innerHTML=parseddata.home.title+"   "+parseddata.home.content;
	cobs=document.querySelectorAll("[href='#']");
	for(var i=0;i<cobs.length;i++){
		cobs[i].addEventListener('click',func);
	}
}
function func(){
	
	if(this.id=="about")
	{
		var ele=document.getElementById("main");
		ele.innerHTML=parseddata.about.title+parseddata.about.content;
	}
	else if(this.id=="contact")
	{
		var ele=document.getElementById("main");
		ele.innerHTML=parseddata.contact.title+parseddata.contact.content;
	}
	else if(this.id=="recent")
	{
		var ele=document.getElementById("main");
		ele.innerHTML=parseddata.recent.title+"<br>"+parseddata.recent.newsArray[0].title+"<br>"+parseddata.recent.newsArray[0].news+"<br>"+parseddata.recent.newsArray[1].title+"<br>"+parseddata.recent.newsArray[1].news;
	}

}