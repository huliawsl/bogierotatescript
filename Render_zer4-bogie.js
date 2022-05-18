var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);
importPackage(Packages.jp.ngt.ngtlib.math);

/*
 ___  ___      ___  ___      ___           ___       _______      ________       _______       _____     
|\  \|\  \    |\  \|\  \    |\  \         |\  \     /  ___  \    |\   __  \     /  ___  \     / __  \    
\ \  \\\  \   \ \  \\\  \   \ \  \        \ \  \   /__/|_/  /|   \ \  \|\  \   /__/|_/  /|   |\/_|\  \   
 \ \   __  \   \ \  \\\  \   \ \  \        \ \  \  |__|//  / /    \ \  \\\  \  |__|//  / /   \|/ \ \  \  
  \ \  \ \  \   \ \  \\\  \   \ \  \____    \ \  \     /  /_/__    \ \  \\\  \     /  /_/__       \ \  \ 
   \ \__\ \__\   \ \_______\   \ \_______\   \ \__\   |\________\   \ \_______\   |\________\      \ \__\
    \|__|\|__|    \|_______|    \|_______|    \|__|    \|_______|    \|_______|    \|_______|       \|__|
                                                              
js名：车用转向架js-两转向架-2轴
适用Mc版本：1.7.10、1.12.2
---------------------------------------------
本js原作者：huli
js可供大家直接套用，套用后请在readme中标明
本js中“//”后的内容和“/ *  * /”内的内容均为注释，可删除，不删除也不影响
*/


function init(par1, par2)
{
	frame = renderer.registerParts(new Parts("dianji","jiazi","wazha","jidianxue"));     //架身（无动画部分）
	wheel1 = renderer.registerParts(new Parts("lun1"));   //车轮1
	wheel2 = renderer.registerParts(new Parts("lun2"));   //车辆2
}

function render(entity, pass, par3)
{

	GL11.glPushMatrix();


	var f0 = renderer.getWheelRotationR(entity);
	var y0 = -0.5478  //Y轴旋转中心
	var z = 1.1294   //车轮 Z轴旋转中心


	frame.render(renderer);
	

	GL11.glPushMatrix();
	renderer.rotate(f0, 'X', 0.0, y0, z);
	wheel1.render(renderer);
	GL11.glPopMatrix();


	GL11.glPushMatrix();
	renderer.rotate(f0, 'X', 0.0, y0, -z);
	wheel2.render(renderer);
	GL11.glPopMatrix();

	GL11.glPopMatrix();
}
