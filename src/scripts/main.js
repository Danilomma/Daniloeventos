AOS.init();

const dataDoEvento = new Date("Dec 17, 2023 20:00:00");
const timestampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora =new Date();
    const timeStampAtual =agora.getTime();

    const distanciaAteEvento = timestampDoEvento - timeStampAtual;
    
    const diaEmMs = 1000 * 60 * 60 *24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
    const minutosAteOevento = Math.floor((diasAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000);


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOevento}m ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);