
        //  get overlay and imagebox
        let overlay= document.querySelector(".gallery-overlay");
      
        let imageBox=document.querySelector(".imgBox");
        
        var img=document.querySelector(".imgBox img");
        
       let close=document.querySelector(".imgBox span")

        // navigation

        overlay.addEventListener("click",(e)=>{
                if (e.target === overlay)
                overlay.display = "none";
        })

        let gallery=document.querySelector("#gallery");
        // open image in lightbox
        gallery.addEventListener("click",(event)=>{
        //   console.log(event.target)  
        let currentimagepath=event.target.src;

        if(currentimagepath!==undefined)

        // overlay open krne ka program--

        overlay.classList.add('gallery-overlayShow');
        imageBox.classList.add('imgBoxShow');
        img.src=currentimagepath;


        console.log(currentimagepath);
        })

        // when user clicks on the overlay, hide the lightbox
        // overlay.addEventListener("click",
        //     ()=>{
        //          overlay.classList.remove('gallery-overlayShow');
        // imageBox.classList.remove('imgBoxShow');
        // })
        
        close.addEventListener("click",()=>{
        overlay.classList.remove('gallery-overlayShow');
        imageBox.classList.remove('imgBoxShow');
        })