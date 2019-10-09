function button_doc(){
    let ampliar=document.getElementById('overlay');
    if(ampliar.style.display='none') {
      document.getElementById('overlay').style.display='block';
      document.getElementById('form_doc').style.display='grid';
    }
}

function button_img(){
    let ampliar=document.getElementById('overlay');
    if(ampliar.style.display='none') {
      document.getElementById('overlay').style.display='block';
      document.getElementById('form_img').style.display='grid';
    }
}

function button_video(){
    let ampliar=document.getElementById('overlay');
    if(ampliar.style.display='none') {
      document.getElementById('overlay').style.display='block';
      document.getElementById('form_video').style.display='grid';
    }
}


function exit_agree(){
    let ampliar=document.getElementById('overlay');
    if(ampliar.style.display='block') {
      document.getElementById('overlay').style.display='none';
      document.getElementById('form_doc').style.display='none';
      document.getElementById('form_img').style.display='none';
      document.getElementById('form_video').style.display='none';
    }
}
