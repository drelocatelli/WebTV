
/*
    Tokens lb.kstream.org
    3deda4e4566da958779d69fccd9e6329
    805384f96e55c15e3eb7be0e6d616a36
    0132859690ab23b715461893914849e8
    7aa5b671dd0f02ece58a23c2d1991916
    f084b0de09125af8f85f302e27a0bb64
    db85ea8a0c959af662aed48cf011ff87
    9d8ba1da9c2a41dab0af237afe9ed6d9

*/

function getListOfChannels() {
    var html = document.querySelector('html');
    let channelOptions = document.querySelector('select#channel')
    let titleCard = document.querySelector("div.titleChannel")
    switch (channelOptions.value) {
        case 'globo':
        // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_GLOBO_SP/video.m3u8?token=01b6146097c9e0841e696bba239af043"
            titleCard.innerText = channelOptions.value
            break;
            
        case 'globo hd':
        // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/HD_GLOBO_SP/video.m3u8?token=01b6146097c9e0841e696bba239af043"
            titleCard.innerText = channelOptions.value
            break;

        case 'band':
            channel.value = "https://evpp.mm.uol.com.br/geob_band/app/chunklist_w2109694991.m3u8"
            titleCard.innerText = channelOptions.value
            break;

        case 'sbt':
            channel.value = "https://evpp.mm.uol.com.br/ne10/ne10.smil/chunklist_w2067742926_b216000_sleng.m3u8"
            titleCard.innerText = channelOptions.value
            break;

        case 'tcm':
            channel.value = "http://live.tcm10.com.br/tcm10.m3u8"
            titleCard.innerText = channelOptions.value
            break;
            
            case 'cartoon network 2':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_CARTOON_NETWORK/video.m3u8?token=01b6146097c9e0841e696bba239af043"
            titleCard.innerText = channelOptions.value
            break;

        case 'rdc':
            channel.value = "https://5a7d54e35f9d2.streamlock.net/rdctv/smil:rdctv.smil/chunklist_w891027107_b1000000.m3u8"
            titleCard.innerText = channelOptions.value
            break;

        case 'agro brasil':
            channel.value = "http://177.54.152.243:1935/agrobrasiltv/agrobrasiltv/playlist.m3u8"
            titleCard.innerText = channelOptions.value
            break;

        case 'redetv':
            channel.value = "https://evpp.mm.uol.com.br/redetv1/redetv1/chunklist_w1956210905.m3u8"
            titleCard.innerText = channelOptions.value
            break;

        case 'tv cultura':
            channel.value = "http://wowza4.catve.com.br:1935/live/livestream/chunklist_w1766700799.m3u8";
            titleCard.innerText = channelOptions.value
            break;

        case 'bloomberg':
            channel.value = "https://liveproduseast.akamaized.net/us/Channel-USTV-AWS-virginia-1/Source-USTV-1000-1_live.m3u8"
            titleCard.innerText = channelOptions.value
            break;

        case 'record':
            channel.value = "http://playplusspo-lh.akamaihd.net/i/pp_sp@350176/index_720_av-p.m3u8"
            titleCard.innerText = channelOptions.value
            break;

        case 'tve':
            channel.value = "http://streaming.procergs.com.br:1935/tve/stve/playlist.m3u8"
            titleCard.innerText = channelOptions.value
            break;
            
            case 'nickelodeon':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_NICKELODEON/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'dazn 1':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/HD_DAZN_1/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'dazn 2':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/HD_DAZN_2/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
 

        case 'canal ricos':
            channel.value = "http://video01.kshost.com.br/canalricos548/canalricos548/playlist.m3u8";
            titleCard.innerText = channelOptions.value
            break;

        case 'canção nova':
            channel.value = "http://tvajuhls-lh.akamaihd.net/i/tvdesk_1@147040/master.m3u8";
            titleCard.innerText = channelOptions.value
            break;

        case 'fm o dia':
            channel.value = "http://c2901-slbps-sambavideos.akamaized.net/livet/FMoDiaVideo_14d480346fa04ebcb4f03173f2dae707/ngrp:livestream/playlist.m3u8?fluxustv.m3u8";
            titleCard.innerText = channelOptions.value
            break;

        case 'in paradise':
            channel.value = "https://cdn.jmvstream.com/w/inpara/_definst_/inpara/chunklist_w1305866021.m3u8?fluxustv.m3u8";
            titleCard.innerText = channelOptions.value
            break;

        case 'novo tempo':
            channel.value = "http://stream.live.novotempo.com/tv/smil:tvnovotempo.smil/chunklist_b2128000_slpor.m3u8";
            titleCard.innerText = channelOptions.value
            break;

        case 'animal planet':
        // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_ANIMAL_PLANET/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;

        case 'cartoon network':
        // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_CARTOON_NETWORK/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;

        case 'a e e':
        // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_AE/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;

        case 'discovery channel':
        // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_DISCOVERY/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;

        case 'discovery home e health':
        // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_DISCOVERY_HOMEHEALTH/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'band sports':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_BAND_SPORTS/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;

        case 'discovery kids':
        // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_DISCOVERY_KIDS/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'telecine premium':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_TC_PREMIUM/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            
             case 'sexy kpop tv':
            channel.value = "https://59f2354c05961.streamlock.net:1443/canaisforadoar/_definst_/canaisforadoar/chunklist.m3u8";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'music top':
            channel.value = "http://live-edge01.telecentro.net.ar/live/smil:musictop.smil/playlist.m3u8";
            titleCard.innerText = channelOptions.value
            break;
            
             case 'e!':
             // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_E/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'e! hd':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/HD_E/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'espn':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_ESPN/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'fox':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_FOX/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'fox hd':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/FHD_FOX/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'fox sports':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_FOX_SPORTS/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'gloob':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_GLOOB/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'gloobinho':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_GLOOBINHO/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'gnt':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_GNT/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'hbo':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_HBO/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
             case 'megapix':
             // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_MEGAPIX/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'natgeo kids':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_NATGEOKIDS/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'natgeo wild':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_NAT_GEO_WILD/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'premiere':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_PFC_2/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
             case 'sport tv':
             // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_SPORTV_1/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'syfy':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_SYFY/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'syfy hd':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/HD_SYFY/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'history channel':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_HISTORY/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'history channel hd':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/FHD_H2/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'boomerang':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/SD_BOOMERANG/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            
            case 'boomerang hd':
            // inconsistente
            channel.value = "http://lb.kstream.org/aovivo/HD_BOOMERANG/video.m3u8?token=01b6146097c9e0841e696bba239af043";
            titleCard.innerText = channelOptions.value
            break;
            
            case 'master tv':
            channel.value = "http://wowza4.catve.com.br:1935/mastertv/livestream/live.m3u8";
            titleCard.innerText = channelOptions.value
            break;

//////////////////////////////////////////////////////////

             case 'padrão':
            channel.value = "http://wowza4.catve.com.br:1935/mastertv/livestream/live.m3u8";
            titleCard.innerText = channelOptions.value
            break;
            
  



        default:
            channel.value = "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8";
            titleCard.innerText = channelOptions.value
            break;

        // default:
        //     channel.value = "http://c2901-slbps-sambavideos.akamaized.net/livet/FMoDiaVideo_14d480346fa04ebcb4f03173f2dae707/ngrp:livestream/playlist.m3u8?fluxustv.m3u8";
        //     titleCard.innerText = channelOptions.value
        //     break;
    }
}

function addOptionValues() {
    let channelOptions = document.querySelector('select#channel');
    let htmlOptions = `<option value="default" disabled selected>Lista de canais</option>
                    <option value="default" disabled>---------------</option>
                    <option value="default" disabled>Canais abertos</option>
                    <option value="globo hd">Globo HD</option>
                    <option value="globo">Globo</option>
                    <option value="band">Band</option>
                    <option value="sbt">Sbt</option>
                    <option value="agro brasil">Agro Brasil</option>
                    <option value="redetv">RedeTV</option>
                    <option value="tv cultura">TV Cultura</option>
                    <option value="master tv">Master TV</option>
                    
                    <option value="default" disabled>---------------</option>
                    <option value="default" disabled>Sem categoria</option>
                    <option value="tve">TVE</option>
                    <option value="tcm">Tcm</option>
                    <option value="in paradise">In Paradise</option>
                    <option value="rdc">Rdc</option>
                    <option value="bloomberg">Bloomberg</option>
                    <option value="canal ricos">Canal Ricos</option>
                    <option value="gnt">GNT</option>
                    
                    <option value="default" disabled>---------------</option>
                    <option value="default" disabled>Religiosos</option>
                    <option value="novo tempo">Novo Tempo</option>
                    <option value="canção nova">Canção Nova</option>
                    
                    <option value="default" disabled>---------------</option>
                    <option value="default" disabled>Rádio e música</option>
                    <option value="fm o dia">FM O DIA</option>
                    <option value="music top">Music top</option>
                    <option value="sexy kpop tv">Sexy Kpop TV</option>
                    
                    <option value="default" disabled>---------------</option>
                    <option value="default" disabled>Internacionais</option>
                    <option value="animal planet">Animal Planet</option>
                    <option value="discovery channel">Discovery Channel</option>
                    <option value="discovery home e health">Discovery H&H</option>
                    <option value="a e e">A&E</option>
                    <option value="e! hd">E! HD</option>
                    <option value="fox hd">Fox HD</option>
                    <option value="natgeo wild">NATGEO Wild</option>
                    <option value="syfy hd">Syfy Channel HD</option>
                    <option value="syfy">Syfy Channel</option>
                    <option value="history channel">History Channel</option>
                    <option value="history channel hd">History Channel HD</option>
                	
                    
                    <option value="default" disabled>---------------</option>
                    <option value="default" disabled>Infantil</option>
                    <option value="cartoon network">Cartoon Network</option>
                    <option value="cartoon network 2">Cartoon Network 2</option>
                    <option value="discovery kids">Discovery Kids</option>
                    <option value="nickelodeon">Nickelodeon</option>
                    <option value="gloob">Gloob</option>
                    <option value="gloobinho">Gloobinho</option>
                    <option value="hbo">HBO</option>
                    <option value="natgeo kids">NATGEO Kids</option>
                    <option value="boomerang">Boomerang</option>
                    <option value="boomerang hd">Boomerang HD</option>
                    
                    <option value="default" disabled>---------------</option>
                    <option value="default" disabled>Esportes</option>
                    <option value="band sports">Band Sports</option>
                    <option value="espn">ESPN</option>
                    <option value="fox sports">FOX Sports</option>
                    <option value="dazn 1">dazn 1</option>
                    <option value="dazn 2">dazn 2</option>
                    <option value="premiere">Premiere</option>
                    <option value="sport tv">Sport Tv</option>
                    
                    <option value="default" disabled>---------------</option>
                    <option value="default" disabled>Filmes</option>
                    <option value="telecine premium">TC Premium</option>
                    <option value="megapix">Megapix</option>
                    
                `;
    channelOptions.innerHTML += htmlOptions
}

addOptionValues()