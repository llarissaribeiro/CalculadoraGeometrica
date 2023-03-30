function areaDoTriangulo (){
  const base = prompt ("Informe a base do triângulo")
  const altura = prompt ("Informe a altura do triângulo")
  return (base * altura) / 2
}

function areaDoRetângulo (){
  const base = prompt ("Informe a base do retângulo")
  const altura = prompt("Informe a altura do retângulo");
  return base * altura
}

function areaDoQuadrado (){
  const lado = prompt ("Informe o lado do quadrado")
  return lado * lado
}

function areaDoTrapezio (){
  const baseMaior = parseFloat(prompt ("Informe a base maior do trapézio")) //parsefloat para converter em número para que a string consiga somar
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio"));
  const altura = prompt("Informe a altura do trapézio");
  return ((baseMaior + baseMenor) * altura) / 2
}

function areaDoCirculo (){
  const raio = prompt("Informe o raio do círculo");
  return 3,14 * raio * raio 
}

function exibirMenu(){
  return prompt(
    "Calculado Geométrica\n\n" +
      "Escolha a figura geométrica que deseja calcular a área:" +
      "\n1. Triângulo" +
      "\n2. Retângulo" +
      "\n3. Quadrado" +
      "\n4. Trapézio" +
      "\n5. Círculo" +
      "\n6. Sair"
  )
}

function executar(){
  let opcao = ""

  do{
    opcao = exibirMenu()
    let resultado

    switch (opcao){
      case "1":
        resultado = areaDoTriangulo()
        break

      case "2":
        resultado = areaDoRetângulo()
        break

      case "3":
        resultado = areaDoQuadrado()
        break

      case "4":
        resultado = areaDoTrapezio()
        break

      case "5":
        resultado = areaDoCirculo()
        break

      case "6":
        alert("Encerrando...")
        break

      default:
        alert("Opcão Inválida")
    }

    if(resultado){ 
      alert("Resultado: " + resultado)
    }
    
  }while (opcao !== "6")
}

executar()