const mostrarReloj = () =>{
    let fecha = new Date();
    let hour = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hour}:${minutos}:${segundos}`;
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let diaDeLaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto = `${diaDeLaSemana}, ${dia}, ${mes}, ${año}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar")
};



const formatoHora = (hora) =>{
if(hora < 10)
    hora = '0' + hora;
    return hora
};



setInterval(mostrarReloj,1000);

