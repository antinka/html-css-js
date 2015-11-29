function EnterNumber(num ){
	var calculator = document.calcul;
	if(calculator.res.value == "0")
	{
		calculator.res.value = num;
	}	
	else
		calculator.res.value += num;
}

function Clear () {
	var calculator = document.calcul;
	calculator.res.value = "0";
}
function Decimal(){
	var calculator = document.calcul;
	var temp = calculator.res.value;
	temp =".";
	calculator.res.value += temp;
}

function PlusMinus(){
	var calculator = document.calcul;
	calculator.res.value *=-1;
}

function CallOperration(oper)
{
	var calculator = document.calcul;
	calculator.res.value += oper;


}

function Result(){
	var calculator = document.calcul;
	calculator.res.value = eval(calculator.res.value)
}