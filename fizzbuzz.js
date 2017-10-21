 
    var current = 0;
	var score = 0;
		var r=0;
	var inicio= false; 
 function fizzbuzz() {


    if (score>=0)
	{
		if (current%3==0 && current%5!==0) // Fizz
		{
			r=1;
		}
		if(current%3!=0 && current%5==0) // Buzz
		{
			r=2;
		}
		if (current%3==0 && current%5==0) // Fizzbuzz
		{
			r=3;
		}
		if (current%3!= 0 && current%5!=0) //Nada
		{
		r=0;	
		} 
		
		
	}
 }
	
	function gameover() {
		if (score <0)
		{
			alert("Game Over");
			alert(score);
			inicio=false;
			document.write("<h1>FizzBuzz By Rafael Faustini</h1><br>");
			document.write("<h2>Game Over</h2><br>");
			document.write("<b>Recarregue a página para tentar novamente</b><br><br>");
			document.write("Você chegou até o número "+current+"<br>");
			document.write("Este jogo está em versão de testes, caso encontre algum problema contatar(contato@rafaelfaustini.com.br)<br>");
			
			
		}
	}
	
	function check()
	{
		if (lol=="Fizz" && r==1)
		{
			score+= 5;
		}
		else if (lol!="Fizz" && r==1)
		{
			score-=10;
		}
		
		if (lol=="Buzz" && r==2) {
			
			score+= 5;			
		}
		else if (lol!= "Buzz" && r==2)
		{
			score-=10;
		}
		
	    if (lol=="FizzBuzz" && r==3) {
			
			score+= 5;			
		}
		else if (lol!= "FizzBuzz" && r==3)
		{
			score-=10;
		}
		if (lol=="" && r==0) {
			
			score+= 5;			
		}
		else if (lol!= "" && r==0)
		{
			score-=10;
		}
	}
	
		
	alert("Fizz - Números divisíveis por 3");
	alert("Buzz - Números divisíveis por 5");
	alert("FizzBuzz - Números Divisíveis por 3 e 5");
	alert("'Caso não seja nenhum dos três, deixe em branco");
	inicio=true;
	
	while (inicio==true)
	{
		current+=1;
		alert("O número é "+current);
		var lol= prompt("Fizz,Buzz,FizzBuzz, ou nenhum(deixe em branco) ? ");
	fizzbuzz();
    check();
    gameover();
	alert("Seu score é "+score);
    
		
		
	}









	
	
	
	