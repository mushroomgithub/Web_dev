//自定义函数
function jiSuan(num1,num2,operator){//自定义函数的参数列表不能加var
	var res=0;
	if(operator=="+"){
		res=num1+num2;
	}else if(operater=="-"){
		res=num1-num2;
	}else if(operater=="*"){
		res=num1*num2;
	}else{
		res=num1/num2;
	}
	return res;	//返回值是可选的，如果需要返回值，则return一个值即可
}

function test(val){
	window.alert('你输入的变量值是：'+val);
}

//编写一个函数，可以接受任意多个数，并计算他们的和，js是天然支持可变参数数目传值的
function abc(){//abc中有参数或者没有参数，js引擎都不管，只看函数名所以js不支持函数重载
	//在js中有一个变量arguments,可以访问所有传入值
	//window.alert(arguments.length);
	for(var i=0;i<arguments.length;i++)
		window.alert("下标为"+i+"的参数是："+arguments[i]);
}