async function LanuchSpaceXData(){

const Response = await fetch("https://api.spacexdata.com/v3/launches",{
   method : "GET"
});
 
const Data = await Response.json();

console.log(Data);


}

 LanuchSpaceXData();

    
