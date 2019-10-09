
    function icon_arrow_filter2(){
        const desplegar=document.getElementById('document_filter');
        if(desplegar.style.display=='none') {
          document.getElementById('document_filter_box').style.animationName='filter_box';  
          document.getElementById('document_filter').style.display='block'; 
          
        }else{
            document.getElementById('document_filter').style.display='none'; 
            document.getElementById('document_filter_box').style.animationName='filter_box2';  
        }
}

    function icon_button_filter(){
        let ampliar=document.getElementById('document_filter');
        if(ampliar.style.display=='none') {
          document.getElementById('document_filter').style.display='block';
          document.getElementById('shadow2').style.display='block';
        }else{
          document.getElementById('document_filter').style.display='none';
          document.getElementById('shadow2').style.display='none';
        }
    }

