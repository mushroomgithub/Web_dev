//�Զ��庯��
function jiSuan(num1,num2,operator){//�Զ��庯���Ĳ����б��ܼ�var
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
	return res;	//����ֵ�ǿ�ѡ�ģ������Ҫ����ֵ����returnһ��ֵ����
}

function test(val){
	window.alert('������ı���ֵ�ǣ�'+val);
}

//��дһ�����������Խ����������������������ǵĺͣ�js����Ȼ֧�ֿɱ������Ŀ��ֵ��
function abc(){//abc���в�������û�в�����js���涼���ܣ�ֻ������������js��֧�ֺ�������
	//��js����һ������arguments,���Է������д���ֵ
	//window.alert(arguments.length);
	for(var i=0;i<arguments.length;i++)
		window.alert("�±�Ϊ"+i+"�Ĳ����ǣ�"+arguments[i]);
}