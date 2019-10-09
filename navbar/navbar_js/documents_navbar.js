
var contador=1;
function button_submain(){
  if(contador==1){
    document.getElementById('submain').style.display='block';
    document.getElementById('icon-triangle-down').style.display='none';
    document.getElementById('icon-triangle-up').style.display='inline';
    document.getElementById('submain').style.animationName='submain_down';
    contador = 0;
  }else {
    document.getElementById('submain').style.animationName='submain_up';
    document.getElementById('icon-triangle-down').style.display='inline';
    document.getElementById('icon-triangle-up').style.display='none';
    contador = 1;
  }
}


/*function button_submain1(){
    const ampliar=document.getElementById('submain');
    if(ampliar.style.display=='none') {
        document.getElementById('submain').style.display='block';
        document.getElementById('icon-triangle-down').style.display='none';
        document.getElementById('icon-triangle-up').style.display='inline';
        document.getElementById('submain').style.animationName='submain_down';
    }else{
      ampliar.addEventListener('animationend', (event)=>{
        console.log(event.animationName);
        if(event.animationName==='submain_down'){
          ampliar.style.animationName='submain_up';
        }
      });
        document.getElementById('submain').style.animationName='submain_up';
        document.getElementById('submain').style.display='none';
        document.getElementById('icon-triangle-down').style.display='inline';
        document.getElementById('icon-triangle-up').style.display='none';

    }
}*/


function button_main(){
  let ampliar=document.getElementById('navbar');
    if(ampliar.style.display=='none') {
      document.getElementById('navbar').style.animationName='despliegue_navbar';
      document.getElementById('navbar').style.display='grid';
      document.getElementById('submain').style.display='none';
      document.getElementById('submain').style.animationName='';
    }else{
      //document.getElementById('navbar').style.display='none';
      document.getElementById('navbar').style.animationName='pliegue_navbar';
    }
}


    /*function button_main2(){
        let ampliar=document.getElementById('navbar');
        if(ampliar.style.display=='none') {
          document.getElementById('navbar').style.animationName='despligue_navbar';
          document.getElementById('navbar').style.display='grid';
          document.getElementById('submain').style.display='none';
          document.getElementById('submain').style.animationName='';
          document.getElementById('overlay_navbar').style.display='block';
          document.getElementById('section_navbar').style.zIndex='2';
        }else{
          //document.getElementById('navbar').style.display='none';
          document.getElementById('overlay_navbar').style.display='none';
          document.getElementById('section_navbar').style.zIndex='0';
          document.getElementById('navbar').style.animationName='despliegue_navbar';
        }
}*/

    function button_main2(){
        if(contador==1){
            document.getElementById('navbar').style.display='block';
          document.getElementById('navbar').style.className='navbar1';
          document.getElementById('overlay_navbar').style.display='block';
            contador = 0;
        }else{
          document.getElementById('navbar').style.className='navbar';
          document.getElementById('overlay_navbar').style.display='none';
            contador = 1;
        }
}