module.exports = {
    gerarCalendario(anoAtual, mesAtual){

        mesAtual--;
      
        let semanasMes = [];
        let qtdDiasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      
        //Verifica se o ano é bissexto
        if(new Date(anoAtual, 1, 29).getMonth() == 1) {
            qtdDiasMeses[1] = 29;
        }
      
        let diaUm = new Date(anoAtual, mesAtual, 1);
        let diaUmSemana = diaUm.getDay(); //Dom, Seg, Ter, Qua, Qui, Sex ou Sáb - posição na semana do dia 01
      
        let semana = [];
      
        //Se o dia não começa no domingo, pega os outros dias da última semana do mes passado
        if(diaUmSemana > 0) {
            for(let i=diaUmSemana-1; i>=0; i--){
                let qtdDiasMesPassado = qtdDiasMeses[mesAtual-1];
                semana.push(qtdDiasMesPassado -i + '/' + this.tratarNumero(mesAtual) + "/" + anoAtual);
            }
        }
      
        //Preenche o mês todo
        for(let contagemDiasMes=1; contagemDiasMes<=qtdDiasMeses[mesAtual]; contagemDiasMes++){
            if(semana.length < 7){
                semana.push(this.tratarNumero(contagemDiasMes) + '/' + this.tratarNumero(mesAtual + 1) + "/" + anoAtual);
            } else {
                semanasMes.push(semana);
                semana = [];
      
                semana.push(this.tratarNumero(contagemDiasMes) + '/' + this.tratarNumero(mesAtual + 1) + "/" + anoAtual);
            }
        }
      
        //Preenche a última do mês com os dias do próximo mês
        for(let contagemDiasMes=1; contagemDiasMes<=semana.length+1; contagemDiasMes++){
            if(semana.length < 7){
                semana.push(this.tratarNumero(contagemDiasMes) + '/' + this.tratarNumero(mesAtual + 2) + "/" + anoAtual);
            } else {
                semanasMes.push(semana);
                semana = [];
            }
        }
      
        return semanasMes;
      },
      
      tratarNumero(num){
        num < 10 ? num = "0" + num : num = num;
        return num;        
      },
      
      pegarSemanaAtual(){
        let now = new Date();
      
        let dia = now.getDate();
        let mes = now.getMonth()+1;
        let ano = now.getFullYear();
      
        let dataAtual = this.tratarNumero(dia) +"/"+ this.tratarNumero(mes) +"/"+ ano;
        let calendario = this.gerarCalendario(ano, mes);
      
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
}