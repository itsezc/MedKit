const Say=require('say').Say;
const say=new Say('darwin'||'win32'||'Linux');

say.speak('Hello',(err)=>{
	if(err){
		throw err;
	}
	console.log("It's working");
});
