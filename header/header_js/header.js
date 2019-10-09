if(screen.width<='600'){
    function search(){
        let ampliar=document.getElementById('search_text');
        if(ampliar.style.display='none') {
            document.getElementById('search_text').style.display='block';
            document.getElementById('cross').style.display='block';
            document.getElementById('search_button').style.background='#66CC66';
            document.getElementById('home').style.display='none';
            document.getElementById('user').style.display='none';
            document.getElementById('submain').style.display='none';
        }
    }
    function exit_search(){
        let contraer=document.getElementById('search_text');
        if(contraer.style.display='block'){
            document.getElementById('search_text').style.display='none';
            document.getElementById('cross').style.display='none';
            document.getElementById('search_button').style.background='none';
            document.getElementById('home').style.display='block';
            document.getElementById('user').style.display='block';
            document.getElementById('submain').style.display='block';
        }
    }

}
    