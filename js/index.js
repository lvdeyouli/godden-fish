$(function(){
//	活动页面的报名结束切换
	$('.W_H_div1').find('div').click(function(){
		$('.W_H_div1').find('div').removeClass('W_H_div1_active');
		$(this).addClass('W_H_div1_active');
		$('.content_div1').hide();
		$('.content_div1').eq($(this).index()).show();
	})
//	店铺详情页面的商品结束切换	
	$('.W_shop_RX').find('span').click(function(){
		$('.W_shop_RX').find('span').removeClass('span_active');
		$(this).addClass('span_active');
		$('.W_shop_nr').hide();
		$('.W_shop_nr').eq($(this).index()).show();
	});
	
//产品详情页面
//点击按钮 加减商品数量
	var W_details_number=1;
	$('.W_details_jia_right_img1 img').click(function(){
		if(W_details_number==0){
			return;
		}else{
				$('.W_details_nub').html(--W_details_number);
		}
	});
	
	$('.W_details_jia_right_img2 img').click(function(){
		$('.W_details_nub').html(++W_details_number);
	});

//商品评价分数 
	var pingjia_nubmer=parseInt($('.W_Commodity_evaluation_left').find('.em1').text());
	$('.W_Commodity_evaluation_left span').find('img').attr('src','img/details_anxing.png');	
	$('.W_Commodity_evaluation_left span:lt('+pingjia_nubmer+')').children('img').attr('src','img/details_xingxing.png');	
//点击加入购物车物品个数
	$('.nav_right').click(function(){
		if($('.W_details_nub').html()==0){
			$('.details_car_number').hide();
			$('.nav_left').find('i').hide();
			$('.details_car_jia').html('');
		}else{
			$('.nav_left').find('i').show();
			$('.details_car_number').html($('.W_details_nub').html()).show();	
			$('.details_car_jia').html(parseFloat($('.get_number').text())*parseInt($('.details_car_number').html()))		
		}	
	});
//	提交订单页面的小图标切换
//	圆形的图标切换
	$('.ti_dui1_parent').click(function(){
		if($(this).find('.ti_dui1').attr('src')=='img/ti_dui.png')
		{
			$(this).find('.ti_dui1').attr('src','img/ti_budui.png');
		}else{
			$(this).find('.ti_dui1').attr('src','img/ti_dui.png');
		}
	})
	$('.ti_dui_parent').click(function(){
		$('.shi_nr1').find('.ti_zhanghu1').attr('src','img/ti_zhanghu1.png');
		$('.ti_dui_parent').find('.ti_dui').attr('src','img/ti_budui.png');
		if($(this).find('.ti_dui').attr('src')=='img/ti_dui.png')
		{
			$(this).find('.ti_dui').attr('src','img/ti_budui.png');
		}else{
			$(this).find('.ti_dui').attr('src','img/ti_dui.png');
		}
	});
//	正方形的图标切换
	$('.shi_nr1').click(function(){
		$('.shi_nr1').find('.ti_zhanghu1').attr('src','img/ti_zhanghu1.png');
		$('.ti_dui_parent').find('.ti_dui').attr('src','img/ti_budui.png');
		if($(this).find('.ti_zhanghu1').attr('src')=='img/ti_zhanghu1.png')
		{
			$(this).find('.ti_zhanghu1').attr('src','img/ti_zhanghu2.png');
		}else{
			$(this).find('.ti_zhanghu1').attr('src','img/ti_zhanghu1.png');
		}
	})	;
	
//	商品价格计算
	$('.nav_left_tijiao').find('span').html($('.ti_jisuan').find('span').html())
	
//	提交订单页面	


//个人中心页面
//	点击订单管理链接到制定页面
	$('.W_Personal_nr1').click(function(){
		window.location.href='Order_list.html';
	});
//	点击地址管理链接到制定页面
	$('.W_Personal_nr1_dizhi').click(function(){
		window.location.href='Address_management.html';
	});
	
	$('.shopping_car').click(function(){
		window.location.href='Shopping_Cart.html'
	});
	
	$('.WL_XXZX').click(function(){
		window.location.href='Message_center.html'
	});
	
	$('.WL_J').click(function(){
		window.location.href='exchange.html'
	});
	
	
	
	
	
	

/*订单列表页面*/
//		删除订单
	$('.remove_DD').click(function(){
		$(this).parents('li').remove(); 
	});
	

	
	$('.WL_xinjian').bind('touchstart',function(){
		$(this).css('background','#d9d9d9')
	});
	$('.WL_xinjian').bind('touchend',function(){
		$(this).css('background','#fff')
	});

//地址管理页面
	$('.WL_xinjian_click').click(function(){
		window.location.href='Address_edit.html'
	});
	
	$('.WL_Save_address').click(function(){	
 		  window.location.href='Address_management.html';

	});
	
	$('.WL_address_nr1_left').click(function(){
		if($(this).find('.ti_dui1').attr('src')=='img/ti_dui.png')
		{
			$(this).find('.ti_dui1').attr('src','img/ti_budui.png');
		}else{
			$(this).find('.ti_dui1').attr('src','img/ti_dui.png');
		}
	});
	
//	点击编辑按钮
	$('.WL_bainji').click(function(){
		window.location.href='Address_edit.html'
	});
	
//	点击删除按钮
	$('.WL_remove_dz').click(function(){
		$(this).parents('.WL_address_nr1').remove();
	});
	
//	购物车页面
	var nuber_car=1;
	$('.WL_number_sp3').click(function(){
		$(this).siblings('.WL_number_sp2').text(++nuber_car);
	});
	$('.WL_number_sp1').click(function(){
		if(nuber_car==1)
		{
			return;
		}else{
			$(this).siblings('.WL_number_sp2').text(--nuber_car);
		}
	});
	
//	判断购物车里有东西没
	if($('.shopping_car_BOX').find('.WL_shopping_car_nr1').length==0)
	{
		$('.shopping_car_BOX_img').show();
	}else{
		$('.shopping_car_BOX_img').hide();
	}
	
//评价页面
//点击五角星显示相对应的文字说明
	var WL_ShopClick=0;
	$('.WL_Shop_score_cli_X1').click(function(){
		WL_ShopClick++;
		if(WL_ShopClick==1){
			$(this).next('.WL_Shop_score_ping').find('em').hide();
			$(this).next('.WL_Shop_score_ping').find('em').eq(0).show();
		}else if(WL_ShopClick==3){
			$(this).next('.WL_Shop_score_ping').find('em').hide();
			$(this).next('.WL_Shop_score_ping').find('em').eq(1).show();
		}else if(WL_ShopClick==5){
			$(this).next('.WL_Shop_score_ping').find('em').hide();
			$(this).next('.WL_Shop_score_ping').find('em').eq(2).show();
		}else if(WL_ShopClick>=6){
			return;
		}
		$('.WL_Shop_score_cli_X span:lt('+WL_ShopClick+')').children('img').attr('src','img/details_xingxing.png');
//		$(this).find(' span:lt('+WL_ShopClick+')').children('img').attr('src','img/details_xingxing.png');
		
	})
	var WL_ShopClick1=0
	$('.WL_Shop_score_cli_X2').click(function(){
			WL_ShopClick1++;
			if(WL_ShopClick1==1){
				$(this).next('.WL_Shop_score_ping').find('em').hide();
				$(this).next('.WL_Shop_score_ping').find('em').eq(0).show();
			}else if(WL_ShopClick1==3){
				$(this).next('.WL_Shop_score_ping').find('em').hide();
				$(this).next('.WL_Shop_score_ping').find('em').eq(1).show();
			}else if(WL_ShopClick1==5){
				$(this).next('.WL_Shop_score_ping').find('em').hide();
				$(this).next('.WL_Shop_score_ping').find('em').eq(2).show();
			}else if(WL_ShopClick1>=6){
				return;
			}
			$('.WL_Shop_score_cli_X2 span:lt('+WL_ShopClick1+')').children('img').attr('src','img/details_xingxing.png');
		});
//	点击提交评价跳转页面
	$('.Evaluate_click').click(function(){
		window.location='Evaluation_list.html'
	})


//评价列表页面

//		评价人数
		$('.WL_Evaluaate_PJ_peS').text($('.WL_ping_J_zhong_ul1').find('li').length);
	
//根据input所传的值进行计算五角星的个数

		var F_number=0;
		$('.WL_ping_J_zhong_ul1').find('li').each(function(){
			var input_val=$(this).find('input').val();
			F_number+=parseInt(input_val); 
			$(this).find('.WL_ping_J_d1_XX span').each(function(){
				
				var span_index=$(this).index();
				if(span_index<=input_val-1)
				{
					$(this).find('img').attr('src','img/details_xingxing.png')
				}
			
			})
		})
//	评价的平均分
		$('.W_pingjun').text(Math.round(F_number/$('.WL_ping_J_zhong_ul1').find('li').length));
		var pingjia_nubmertwo=parseInt($('.W_pingjun').text());
		$('.WL_Evaluaate_PJ .W_Commodity_evaluation_left span:lt('+pingjia_nubmertwo+')').children('img').attr('src','img/details_xingxing.png');	
	
	//无评价时候样式
	var $pingjia=$('<div class="shopping_car_BOX_img  WL_ping_J_WU"><div class="WL_WDD_img"><img src="img/wu_pingjia.png"/></div>暂无评价</div>');
	
	if($('.WL_ping_J_zhong_ul1').find('li').length==0)
	{
		$('.WL_ping_J_zhong_ul1').append($pingjia);
		$('.W_pingjun').text(0)
	};
	
//	活动详情页面

	$('.TEXT_box').find('textarea').bind('focus',function(){
		$('.TEXT_box_span').hide();
	});
	$('.TEXT_box').find('textarea').bind('blur',function(){
		$('.TEXT_box_span').show();
	});
	
	$('.WL_BD_n2').bind('click',function(){
		if($('.X_NN').css('display')=='block')
		{
			$('.X_NN').hide();
		}else{
			$('.X_NN').show();
			
		};
		return false;
	})
	$(document).click(function(){
		$('.X_NN').hide();
	});
	
	$('.X_NN ul').find('li').click(function(){
		$('.X_NN').hide();
		$('.WL_BD_n2').find('input').val($(this).text());
		return false;
	});
	
	$('.WL_fanhui_left').click(function(){
		window.location.href='activity.html';
	});
	$('.WL_fanhui_right').click(function(){
		window.location.href='index.html';
	});
	
	
//	消息中心页面

	$('.WL_Message_nr1').click(function(){
		window.location.href='Message_details.html';
		$(this).css('color','#818181');
	});
	
	
	
//	我要开店页面
	
	$('.WL_openD_img2').click(function(){
		window.location.href='Personal_shop.html'
	});
	$('.WL_openD_img3').click(function(){
		window.location.href='Business_shop.html'
	});
	
	
	
	
	
	
	
	
	
	
})
