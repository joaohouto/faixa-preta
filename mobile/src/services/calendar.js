export const parseTime = (timerTime) => {
  const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  return hours + ':' + minutes + ':' + seconds;
}

export const nextMonth = (day, month, year) => {
  if (month > 11)
    return [day, "01", tratarNumero(+year + 1)];

  return [day, tratarNumero(+month + 1), year]
}

export const previousMonth = (day, month, year) => {
  if (month < 2)
    return [day, "12", tratarNumero(year - 1)];

  return [day, tratarNumero(month - 1), year]
}

export const gerarCalendario = (anoAtual, mesAtual) => { 

  mesAtual--;

  let semanasMes = [];
  let qtdDiasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(new Date(anoAtual, 1, 29).getMonth() == 1) {
      qtdDiasMeses[1] = 29;
  }

  let diaUm = new Date(anoAtual, mesAtual, 1);
  let diaUmSemana = diaUm.getDay(); 

  let semana = [];

  if(diaUmSemana > 0) {
      for(let i=diaUmSemana-1; i>=0; i--){
          let qtdDiasMesPassado = qtdDiasMeses[mesAtual-1];
          semana.push(qtdDiasMesPassado -i + '/' + tratarNumero(mesAtual) + "/" + anoAtual);
      }
  }

  for(let contagemDiasMes=1; contagemDiasMes<=qtdDiasMeses[mesAtual]; contagemDiasMes++){
      if(semana.length < 7){
          semana.push(tratarNumero(contagemDiasMes) + '/' + tratarNumero(mesAtual + 1) + "/" + anoAtual);
      } else {
          semanasMes.push(semana);
          semana = [];

          semana.push(tratarNumero(contagemDiasMes) + '/' + tratarNumero(mesAtual + 1) + "/" + anoAtual);
      }
  }

  for(let contagemDiasMes=1; contagemDiasMes<=semana.length+1; contagemDiasMes++){
      if(semana.length < 7){
          semana.push(tratarNumero(contagemDiasMes) + '/' + tratarNumero(mesAtual + 2) + "/" + anoAtual);
      } else {
          semanasMes.push(semana);
          semana = [];
      }
  }

  return semanasMes;
}

const tratarNumero = (num) => {
  num < 10 ? num = "0" + num : num = num;
  return num;        
}

export const pegarSemanaAtual = () => {
  let now = new Date();

  let dia = now.getDate();
  let mes = now.getMonth()+1;
  let ano = now.getFullYear();

  let dataAtual = tratarNumero(dia) +"/"+ tratarNumero(mes) +"/"+ ano;
  let calendario = gerarCalendario(ano, mes);

  let semanaAtual;

  calendario.forEach(semana => {
      for(let i=0; i<7; i++){
          if(semana[i] == dataAtual){
            semanaAtual = semana;
          }
      }
  });

  return semanaAtual;
}

export const getDate = () => {
  var data = new Date();

  var dia     = data.getDate();          
  var mes     = data.getMonth();          
  var ano4    = data.getFullYear();       
  mes += 1;

  if(dia < 10){
    dia = "0" + dia;
  }

  if(mes < 10){
    mes = "0" + mes;
  }

  return dia + '/' + mes + '/' + ano4;
}

export const getDay = () => {
  var data = new Date();
  var day = data.getDay();  
  
  return day;
}