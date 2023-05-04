 //Declare your genre arrays here
let Action=["https://idsb.tmgrup.com.tr/ly/uploads/images/2021/08/27/139855.jpg", "https://w0.peakpx.com/wallpaper/415/224/HD-wallpaper-ertugrul-ghazi-halime.jpg", "https://i.ytimg.com/vi/x39VsZt535k/maxresdefault.jpg"];


let Romance=
    ["https://m.media-amazon.com/images/M/MV5BMTY3MjQ3MjgzN15BMl5BanBnXkFtZTgwMTU1OTIwMjE@._V1_.jpg", "https://static.onecms.io/wp-content/uploads/sites/6/2016/03/me-before-you_0.jpg", "https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/6/8/2/1151682_The-Lucky-One.jpg"];


let Comedy=["https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2022/04/24/2026378307988/JMGL_SAlone_16_9_1920x1080_1378845_1920x1080.jpg", "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/Collage-Maker-21-Jun-2022-0352-PM-1.jpg", "https://i.ytimg.com/vi/LXv0fvIhUzU/movieposter.jpg"];


//Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");
let Button1 = document.querySelector(".button1");
let Button2 = document.querySelector(".button2");
 // Submit Button 
let submitButton = document.querySelector(".button1");
submitButton.onclick = function(){
    let generInput = document.querySelector(".input1").value;
    
    if (generInput==="romance"){
        for (let RomanceMovie of Romance) {
            let img ="<img src=" +RomanceMovie+">";
            result.insertAdjacentHTML("beforeend",img);
        } 
    } else if (generInput==="Comedy"){
        for (let ComedyMovie of Comedy) {
            let img ="<img src=" +ComedyMovie+">";
            result.insertAdjacentHTML("beforeend",img);
        } 
    } else if (generInput==="Action"){
        for (let ActionMovie of Action) {
            let img ="<img src=" +ActionMovie+">";
            result.insertAdjacentHTML("beforeend",img);
        } 
    }
  
    
};
let suggestButton = document.querySelector(".button2");

suggestButton.onclick= function() {
        let photoInput=
            document.querySelector(".input2").value;
        Romance.push(photoInput);
        Action.push(photoInput);
        Comedy.push(photoInput);
        let img = "<img src=" + photoInput + ">";
        result.insertAdjacentHTML("beforebegin", img  +  "Mohammed");    
    
};