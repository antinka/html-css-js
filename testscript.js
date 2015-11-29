function CallFRes()
 {	  
	var points = 0,tempBal = 0,procent=0;
				
	var question1 = document.getElementsByName("kv1")[3].checked;
	if( question1 == true){points+=2;}
	var question2 = document.getElementsByName("kv2")[2].checked;
	if( question2 == true){points+=2;}
	var question3 = document.getElementsByName("kv3")[3].checked;
	if( question3 == true){points+=2;}				
	var question5 = document.getElementsByName("kv5");
	for(i=0; i<question5.length; i++){
	tempBal = 0;
		if(question5[i].checked) {
			if(i==1 || i==2 ){
				points+=1;
			}  
			else 
				tempBal+=1;
				points-=tempBal;
		}
	}
	var question4 = document.getElementsByName("kv4");
	for(i=0; i<question4.length; i++){
	tempBal = 0;
		if(question4[i].checked) {
			if(i==1 || i==3 ){
				points+=1;
			}  
			else 
				tempBal+=1;
				points-=tempBal;
		}
	}	
	procent = points * 10;
	alert(" вы набрали "+points + " балла(ов), ваш процент готовности "+ procent + "%");
}
