var ValidateUtil = new function() 
{

	// 验证正则表达式
	this.RegExp_Integer = new RegExp(/^(-|\+)?(\d)*$/);// 验证整数,包含正整数和负整数
	this.RegExp_UnsignedInteger = new RegExp(/^\d+$/);// 检查是否为正整数

	this.RegExp_Number = new RegExp(/^(\d)*$/);// 验证数字
	this.RegExp_Moblie = new RegExp(/^(13[0-9]{9})|(18[0-9]{9})|(15[0-9][0-9]{8})$/);//手机格式
	
	this.RegExp_Phone = new RegExp(/^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/); //开头必须为0区号为三位或者四位且必须加-，后面为七位到八位,后面可加四位区号
	
	this.RegExp_Email = new RegExp(/^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/);// 邮箱格式
	

	this.RegExp_NSRSBH = new RegExp(/^[0-9]{15}$|^[0-9]{18}$|^[0-9]{20}$/);// 纳税人识别号验证(15或18或20位数字的验证)
	

};

/**
 * 验证格式
 * 
 * @param {正则表达式} reg
 *            
 * @param {验证字符串} str
 *           
 * @return {Boolean} true 正则表达式匹配  false 正则表达式不匹配
 */
ValidateUtil.check = function(reg, str) 
{
	if(null == str)
	{
		return false;
	}
	else
	{
		if(reg.test(str))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}



/**
 * 验证是否为整数，包含正整数和负整数
 *            
 * @param {验证字符串} str
 *           
 * @return {Boolean} true 数字为整数  false 数字不为整数
 */

ValidateUtil.checkInteger = function(str) 
{
	return ValidateUtil.check(ValidateUtil.RegExp_Integer, str);
}

/**
 * 验证是否为正整数
 *            
 * @param {验证字符串} str
 *           
 * @return {Boolean} true 数字为正整数  false 数字不是正整数
 */

ValidateUtil.checkUnsignedInteger = function(str) 
{
	return ValidateUtil.check(ValidateUtil.RegExp_UnsignedInteger, str);
}

/**
 * 验证是否为数字
 * @param {验证字符串} str
 * 
 * @return {Boolean} true 为数字 false 不是数字
 */
ValidateUtil.checkNumber = function(str)
{
	return ValidateUtil.check(ValidateUtil.RegExp_Number, str);
}


/**
 * 验证手机格式
 *            
 * @param {验证字符串} str
 *           
 * @return {Boolean} true 手机号码格式正确 false 手机号码格式错误
 */
ValidateUtil.checkMobile = function(str) 
{
	return ValidateUtil.check(ValidateUtil.RegExp_Moblie, str);
}

/**
 * 验证电话格式
 *            
 * @param {验证字符串} str
 *           
 * @return {Boolean} true 电话号码格式正确 false 电话号码格式不正确
 */

ValidateUtil.checkPhone = function(str)
{
	return ValidateUtil.check(ValidateUtil.RegExp_Phone, str);
}

/**
 * 验证邮箱格式
 *            
 * @param {验证字符串} str
 *           
 * @return {Boolean} true 邮箱地址正确  false 邮箱地址错误
 */
ValidateUtil.checkEmail = function(str) 
{
	return ValidateUtil.check(ValidateUtil.RegExp_Email, str);
}

/**
 * 检查输入的字符串是否包含汉字
 * @param {str} 待验证字符串
 * @return {Boolean} true 包含汉字  false 不包含汉字
 */
ValidateUtil.checkChinese = function(str)
{
    if (escape(str).indexOf("%u") != -1) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}
/**
 * 验证用户名格式
 * @param {} str 待验证字符串
 * @param {} minLength  字符串最小长度
 * @param {} maxLength  字符串最长长度
 * @return {Boolean} true 表示验证成功  false  表示验证不成功
 */
ValidateUtil.checkUserName = function(str, minLength, maxLength)
{
	str = trim(str);
	if(null != str && "" != str)
	{
		if(ValidateUtil.isContainSpecialSym(str))
		{
			alert("用户名不能有特殊符号！");
			return false;
		}
		if(ValidateUtil.checkChinese(str))
		{
			alert("用户名不能有中文！");
			return false;
		}
		if(minLength > 0)
		{
			if(str.length < minLength)
			{
				alert("用户名长度不能小于" + minLength + "个字符！");
				return false;
			}
		}
		if(maxLength > 0)
		{
			if(str.length > maxLength)
			{
				alert("用户名长度不能大于" + maxLength + "个字符！");
				return false;
			}
		}
		return true;
	}
	alert("请输入用户名！");
	return false;
}

/**
 * 验证用户名格式，不做长度要求
 * @param {} str 待验证字符串
 * @return {} true 验证成功  false 验证不成功
 */
ValidateUtil.checkUserNameV2 = function(str)
{
	return ValidateUtil.checkUserName(str, 0, 0);
}

/**
 * 验证密码
 * @param {} str 待验证字符串
 * @param {} minLength  密码最小长度
 * @param {} maxLength  密码最大长度
 * @return {Boolean} true 验证成功 false 验证不成功
 */
ValidateUtil.checkPassWord = function(str, minLength, maxLength)
{
	str = trim(str);
	if(null != str && "" != str)
	{
		if(minLength > 0)
		{
			if(str.length < minLength)
			{
				alert("密码长度不能小于" + minLength + "个字符！");
				return false;
			}
		}
		if(maxLength > 0)
		{
			if(str.length > maxLength)
			{
				alert("密码长度不能大于" + maxLength + "个字符！");
				return false;
			}
		}
		return true;
		
	}
	alert("请输入密码！");
	return false;
	
}

ValidateUtil.isRangeNum = function(num, min, max)
{
	if(null != num && "" != num)
	{
	    if (!ValidateUtil.checkInteger(num)) // 检查是否为数字
	    {
	        return false
	    }
	    if (min == "" && max == "")
	    {
	    	alert("未给出最小值和最大值！");
	    	return false;
	    }
	    if (min != "") 
	    {
	        if (num < min)
	        {
	            return false;
	        }
	    }
	    if (max != "") 
	    {
	        if (num > max)
	        {
	            return false;
	        }
	    }
	    return true;
	}
	return false;
}


/**
 * 验证数字位数是否正确
 * @param {} num 待验证数字
 * @param {} count 验证数字长度
 * @return {Boolean} true 数字长度正确  false 数字长度不正确
 */

ValidateUtil.isTrueNumCount = function(num, count)
{
	if(ValidateUtil.checkUnsignedInteger(num))
	{ 
		if(ValidateUtil.checkUnsignedInteger(count))
		{
			if(String(num).length == count)
			{
				return true;
			}
			return false;
		}
		alert("请输入正确的数字长度！");
		return false;
	}
	return false;
}



/**
 * 检查输入的字符是否具有特殊字符
 * 输入:str  字符串
 * 返回:true 或 flase; true表示包含特殊字符
 * 主要用于注册信息的时候验证
 */

ValidateUtil.isContainSpecialSym = function(str)
{
    var items = new Array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "{", "}", "[", "]", "(", ")", "-");
    items.push(":", ";", "'", "|", "\\", "<", ">", "?", "/", "<<", ">>", "||", "//");
    str = str.toLowerCase();
    for (var i = 0; i < items.length; i++) 
    {
        if (str.indexOf(items[i]) >= 0) 
        {
            return true;
        }
    }
    return false;
}

   

/**************************************************************************************/
/************************************身份证号码的验证*************************************/
/**************************************************************************************/

/**  
 * 身份证15位编码规则：dddddd yymmdd xx p
 * dddddd：地区码
 * yymmdd: 出生年月日
 * xx: 顺序类编码，无法确定
 * p: 性别，奇数为男，偶数为女
 * <p />
 * 身份证18位编码规则：dddddd yyyymmdd xxx y
 * dddddd：地区码
 * yyyymmdd: 出生年月日
 * xxx:顺序类编码，无法确定，奇数为男，偶数为女
 * y: 校验码，该位数值可通过前17位计算获得
 * <p />
 * 18位号码加权因子为(从右到左) Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,1 ]
 * 验证位 Y = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]
 * 校验位计算公式：Y_P = mod( ∑(Ai×Wi),11 )
 * i为身份证号码从右往左数的 2...18 位; Y_P为脚丫校验码所在校验码数组位置
 *
 */


/**
 * 验证身份证号是否正确
 * @param  idCard 15/18位身份证号码
 * @return Boolean
 */
ValidateUtil.checkIdCard = function(idCard)
{ 
    if(ValidateUtil.isValidityBrithBy15IdCard(idCard))//15位身份证验证
    {
    	return true;
    }
    else if(ValidateUtil.isValidityBrithBy18IdCard(idCard) && ValidateUtil.isTrueValidateCodeBy18IdCard(idCard))//18位身份证验证
    {
    	return true;
    }
    else
    {
    	return false;
    }
} 

/**  
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param idCard 18位身份证号码
 * @return Boolean
 */
ValidateUtil.isTrueValidateCodeBy18IdCard = function(idCard)
{
	var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];// 加权因子   
	var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];// 身份证验证位值.10代表X 
	idCard = trim(idCard.replace(/ /g, ""));
	if(idCard.length == 18)
	{
		var a_idCard = idCard.split("");// 得到身份证数组   
	    var sum = 0; // 声明加权求和变量   
	    if (a_idCard[17].toLowerCase() == 'x') 
	    {
	        a_idCard[17] = 10;// 将最后位为x的验证码替换为10方便后续操作   
	    }
	    for (var i = 0; i < 17; i++) 
	    {
	        sum += Wi[i] * a_idCard[i];// 加权求和   
	    }
	    valCodePosition = sum % 11;// 得到验证码所位置   
	    if (a_idCard[17] == ValideCode[valCodePosition]) 
	    {
	        return true;
	    }
	    else 
	    {
	        return false;
	    }
		
	}
	return false;
}

/**  
 * 验证18位数身份证号码中的生日是否是有效生日
 * @param idCard 18位数身份证字符串
 * @return Boolean
 */

ValidateUtil.isValidityBrithBy18IdCard = function(idCard18)
{
	idCard18 = trim(idCard18.replace(/ /g, ""));
	if(idCard18.length == 18)
	{
	    var year = idCard18.substring(6, 10);
	    var month = idCard18.substring(10, 12);
	    var day = idCard18.substring(12, 14);
	    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	    // 这里用getFullYear()获取年份，避免千年虫问题   
	    if (temp_date.getFullYear() != parseFloat(year) ||
	    temp_date.getMonth() != parseFloat(month) - 1 ||
	    temp_date.getDate() != parseFloat(day)) 
	    {
	        return false;
	    }
	    else 
	    {
	        return true;
	    }
		
	}
	return false;
}

/**  
 * 验证15位数身份证号码中的生日是否是有效生日
 * @param idCard15 15位数身份证字符串
 * @return Boolean
 */

ValidateUtil.isValidityBrithBy15IdCard = function(idCard15)
{
	idCard15 = trim(idCard15.replace(/ /g, ""));
	if(idCard15.length == 15)
	{
	    var year = idCard15.substring(6, 8);
	    var month = idCard15.substring(8, 10);
	    var day = idCard15.substring(10, 12);
	    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
	    if (temp_date.getYear() != parseFloat(year) ||
	    temp_date.getMonth() != parseFloat(month) - 1 ||
	    temp_date.getDate() != parseFloat(day)) 
	    {
	        return false;
	    }
	    else 
	    {
	        return true;
	    }
		
	}
	return false;
}

//去掉字符串头尾空格   
function trim(str)
{
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//开启加载动画
var showLoading = function(){
	if($("#loading_pop_id").css("block") == "display")return;
    var pop = document.createElement("div"); 
    pop.style.width = document.body.scrollWidth;
    pop.style.height = document.body.scrollHeight;
    pop.setAttribute("id", "loading_pop_id");
    pop.className = "loading_pop";
    var loadingDiv = $('<div id="loadingId" class="loading-div"></div>');
    var iconDiv = $('<div id="iconDivId" class="loading-icon-div"></div>');
    var labelDiv = $('<div id="labelDivId" class="labelDiv"></div>');
    labelDiv.text("加载中,请稍后...");	
    loadingDiv.append(iconDiv).append(labelDiv);
    document.body.appendChild(pop);
    loadingDiv.insertAfter($('#loading_pop_id'));
    
};
//关闭加载动画
var closeLoading = function(time1, time2){
	if(time2 - time1 < 5000){
		setTimeout(function(){$('#loading_pop_id,#loadingId').remove();},500);
	}
}

var Dialog = {
	tips: function(str, hasCloseButton){
		if($(".dialog-tips").is(":visible")){
			$(".dialog-tips").remove();
		}
		var div = $("<div class='dialog-tips'><a class='dialog-close fn_hide' href='javascript:;'>×</a><p>"+str+"</p></div>");
		$("body").append(div);
		div.css("margin-left", 0-div.width()/2+"px");
		div.css("top", $(document).scrollTop()+150+"px");
		div.find(".dialog-close").on('click', function(){
			div.remove();
		});
		if(hasCloseButton){
			div.find(".dialog-close").show();
		}else{
			setTimeout(function(){
				div.remove();
			}, 2000);
		}
	}
}