let channel = document.querySelector('.channelurl');
let televisao = document.querySelector('#televisao')
let videoPlayer = document.createElement('video')
televisao.appendChild(videoPlayer)
let source = document.createElement('source')
source.src = channel.value
source.type = "application/x-mpegURL";
videoPlayer.appendChild(source)

function changeChannel() {
    let channelOptions = document.querySelector('select#channel')
    
    function listaCanais(){
        getListOfChannels()
        source.src = channel.value
        playTV()
    }


    channelOptions.onchange = function(){
        listaCanais()
    }


    channel.onkeypress = function(e){
        if(e.key == "Enter"){
            source.src = channel.value
            playTV()
            console.clear()
        }        
    }
}

function playTV(){

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(source.src);
        hls.attachMedia(videoPlayer);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            videoPlayer.play();
        });
        changeChannel()
    }

}

playTV()



function additional() {
    function imports() {
        function swal() {
            let swalScript = document.createElement('script');
            swalScript.src = "https://cdn.jsdelivr.net/npm/sweetalert2@9"
            document.querySelector('body').appendChild(swalScript)
        } swal()
        
        let aviso = `Canais atualizados 12/03 !`;
        
        let channelUrl = document.querySelector('.channelurl')
            
        
    } imports()


    function inputStyles() {
        let input = document.querySelector("input.channelurl")
        input.style.color = "#4d4d4d";
    } inputStyles()

    function downloadList() {
        let link = document.createElement("button");
        link.lista = "https://drive.google.com/open?id=16dOnca_tedvTrlFC2SjuR0lwomxTHjEozLuZ4s1JZN4";
        link.onclick = function () {
            Swal.fire({
                title: 'Atenção',
                text: 'Você possui o VLC Player?',
                icon: 'question',
                position: 'top',
                confirmButtonText: 'Cool',
                showCancelButton: true,
                confirmButtonText: "Sim",
                cancelButtonText: "Não, tenho que baixar!",
                backdrop: `
                rgba(0,0,123,0.4)
                url("https://sweetalert2.github.io//images/nyan-cat.gif")
                left top
                no-repeat
                `
            }).then((result) => {
                if (result.value) {
                    window.open(link.lista, "_blank");
                } else {
                    window.open("https://get.videolan.org/vlc/3.0.8/win32/vlc-3.0.8-win32.exe", "_blank")
                }
            })
        }
        link.innerText = "add"
        link.dataset.target = "more"
        link.classList.add("material-icons")
        document.querySelector('div.controls').appendChild(link)
    }
    downloadList()

    function retry() {
        let retryBtn = document.createElement('button');
        let controls = document.querySelector('div.controls');

        retryBtn.classList.add('material-icons')
        retryBtn.innerText = "import_export"
        retryBtn.dataset.target = "refresh"
        retryBtn.onclick = function(){
            let channelUrl = document.querySelector('.channelurl')
            Swal.fire({
                title: 'Corrigindo...',
                text: 'Tenha paciência, as vezes demora mais que 5 minutos!\nUsar VPN e internet via cabo ajuda na melhoria do sinal',
                icon: 'success',
                timer: 9000,
                position: 'top',
                showConfirmButton: false
            })
            document.querySelector("body > center > input").submit
            retryTV()
        }
        controls.appendChild(retryBtn)

    } retry()

    function retryTV(){
        source.src = channel.value
        playTV()
        console.clear()
    }


    function tooltip() {
        let controls = document.querySelector('div.controls');
        let controlsButtons = controls.querySelectorAll('button')
        controlsButtons.forEach(function (item) {
            switch (item.dataset.target) {
                case 'pausar':
                    item.title = "Rodar/Pausar"
                    break;
                case 'fullscreen':
                    item.title = "Modo Tela cheia"
                    break;
                case 'more':
                    item.title = "Obter mais canais"
                    break;
                case 'fixed':
                    item.title = "Fixar na tela"
                    break;
                case 'refresh':
                    item.title = "Clique para resolver erros"
                break;
            }
        })
    } tooltip()

    function changeTheme() {
        let colors = ["#9b59b6", "rgb(53, 100, 72)", "#e74c3c"]
        let controls = document.querySelector('div.controls');
        let controlsButtons = controls.querySelectorAll('button')
        controlsButtons.forEach(function (item) {
            item.style.background = colors[0]
            if (item.dataset.target == "more") {
                item.style.background = colors[1]
            }
            if (item.dataset.target == "refresh"){
                item.style = `background:${colors[2]};
                    position: absolute;
                    right: -63px;
                    font-size: 32px;
                    top: 19px;
                    padding: 2px;
                    border-bottom-left-radius: 0!important;
                    border-top-left-radius: 0!important;
                    padding-left: 12px;
                    padding-right: 9px;
                    color: white;
                    border-radius: 84px;`
            }

            let titleCard = document.querySelector('div.titleChannel');
            titleCard.style = `background:${colors[0]};border-top-left-radius: 26px; border-top-right-radius: 26px;`

        })
        channel.onkeypress = function(e){
            if(e.key == "Enter"){
                channel.style = `background:rgb(254, 65, 255); font-size:18px; color:black; transition:background 0.3s;`;
                setTimeout(function(){
                    channel.style = `background:transparent; color:rgb(77, 77, 77);`;
                },600)
            }
        } 
        
        
    } changeTheme()

}

additional()