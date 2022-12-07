var elementos = document.querySelectorAll('[type=radio]');

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('change', (e)=>{

        let marcado = e.target.value;

        if(marcado == "correta"){

            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = 'green';
            parentNode.style.borderRadius = '0.375rem';

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }

        }else if(marcado == "incorreta"){

            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = 'red';
            parentNode.style.borderRadius = '0.375rem';

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }

            let correta = parentNode.parentNode.querySelector('[value=correta]');
            correta.parentNode.style.backgroundColor = 'green';
            correta.parentNode.style.borderRadius = '0.375rem';

        }
    })
}