/*
	This program has been built with NWSC "C++ Nex" Compiler and clang toolset,
	and is running under wasm (WebAssembly), and is using NWSTK which is
	a multiplatform toolkit for wasm and windows. NWSTK represents
	NOWSMART ToolKit.
	
	But, neither Emscripten compiler emcc nor its library was used to build
	this program.
	
	
	NWSC represents NOWSMART C++ Nex Compiler (for LLVM, wasm, IA32, AMD64).
	NWSA represents NOWSMART Assembler (for IA32 and AMD64(64BIT REX prefix),
	SSE, SSE2, 3DNow!)
	
	
	Produced by NOWSMARTSOFT, LightCone.
*/

var import_func_s = {

_jsfunc_MyStdcLib_1 : function ()
{
	g_wasm_stdout_buf = "";},

_jsfunc_MyStdcLib_2 : function ()
{
	g_outarea.value += g_wasm_stdout_buf;
	g_outarea.scrollTop = g_outarea.scrollHeight;
	g_wasm_stdout_buf = "";},

_jsfunc_MyStdcLib_3 : function ($0)
{
	g_wasm_stdout_buf += String.fromCharCode($0);},

_jsfunc_basic_math_1 : function ($0)
{
	var a = $0;
	return Math.floor( a );},

_jsfunc_basic_math_2 : function ($0)
{
	var x = $0;
	return Math.log10( x );},

_jsfunc_basic_math_3 : function ($0, $1)
{
	var x = $0;
	var y = $1;
	return Math.pow( x, y );},

_jsfunc_Wnd_1 : function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
{
	var idxCanvas = $0;
	var idxParent = $1;
	var x = $2;
	var y = $3;
	var sx = $4;
	var sy = $5;
	var client_org_x = $6;
	var client_org_y = $7;
	var client_sx = $8;
	var client_sy = $9;
	var zIndex = $10;
	var border_width = $11;
	var div_parent;
	if ( idxParent == 0 ) {
	div_parent = document.body;
	}
	else {
	div_parent = g_client_div_s[idxParent];
	}
	var whole_div = document.createElement("div");
	whole_div.width = String(sx);
	whole_div.height = String(sy);
	whole_div.style.border = "0px solid #0080FF";
	whole_div.style.position = "absolute";
	whole_div.style.left = String(x) + "px";
	whole_div.style.top = String(y) + "px";
	whole_div.style.width = String(sx) + "px";
	whole_div.style.height = String(sy) + "px";
	whole_div.style.zIndex = String(zIndex);
	whole_div.style.visibility = "visible";
	div_parent.appendChild(whole_div);
	var canvas = document.createElement("canvas");
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.border = String(border_width) + "px solid #008080";
	canvas.style.position = "absolute";
	canvas.style.left = "0px";
	canvas.style.top = "0px";
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	canvas.style.zIndex = "1";
	canvas.style.visibility = "visible";
	whole_div.appendChild(canvas);
	var new_client_div = document.createElement("div");
	new_client_div.style.border = "0px solid #00FF80";
	new_client_div.style.position = "absolute";
	new_client_div.style.left = String(client_org_x) + "px";
	new_client_div.style.top = String(client_org_y) + "px";
	new_client_div.style.width = String(client_sx) + "px";
	new_client_div.style.height = String(client_sy) + "px";
	new_client_div.style.zIndex = "2";
	new_client_div.style.overflow = "hidden";
	whole_div.appendChild(new_client_div);
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#80ffff";
	ctx.fillRect(0, 0, 100, 100);
	ctx.strokeStyle = "#bb00bb";
	ctx.strokeRect(0, 0, 100, 100);
	g_whole_div_s[idxCanvas] = whole_div;
	g_canvas_s[idxCanvas] = canvas;
	g_client_div_s[idxCanvas] = new_client_div;
	g_ctx_s[idxCanvas] = ctx;
	return 1;},

_jsfunc_Wnd_2 : function ($0, $1)
{
	var idxCanvas = $0;
	var sizeFont = $1;
	var sxFont = sizeFont / 2.0;
	var ctx = g_ctx_s[idxCanvas];
	{
	var font_name = "MS Gothic";
	ctx.font = "normal normal " + String(sizeFont) + "px " + font_name;
	var sxTextX = ctx.measureText("X").width;
	var ratio = sxTextX / sxFont;
	var strFont = "normal normal " + String( sizeFont / ratio ) + "px " + font_name;
	g_strFont_s[idxCanvas] = strFont;
	ctx.font = strFont;
	}
	return 1;},

_jsfunc_Wnd_3 : function ($0, $1, $2)
{
	var idxCanvas = $0;
	var x = $1;
	var y = $2;
	var whole_div = g_whole_div_s[idxCanvas];
	whole_div.style.left = String(x) + "px";
	whole_div.style.top = String(y) + "px";},

_jsfunc_Wnd_4 : function ($0, $1, $2, $3, $4, $5, $6, $7)
{
	var idxCanvas = $0;
	var x = $1;
	var y = $2;
	var sx = $3;
	var sy = $4;
	var client_sx = $5;
	var client_sy = $6;
	var idxCanvas_wgl = $7;
	var whole_div = g_whole_div_s[idxCanvas];
	var canvas = g_canvas_s[idxCanvas];
	var client_div = g_client_div_s[idxCanvas];
	whole_div.width = String(sx);
	whole_div.height = String(sy);
	whole_div.style.left = String(x) + "px";
	whole_div.style.top = String(y) + "px";
	whole_div.style.width = String(sx) + "px";
	whole_div.style.height = String(sy) + "px";
	if ( idxCanvas_wgl == 0 ) {
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.border = "0px solid #008080";
	canvas.style.position = "absolute";
	canvas.style.left = "0px";
	canvas.style.top = "0px";
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	client_div.style.width = String(client_sx) + "px";
	client_div.style.height = String(client_sy) + "px";
	}
	else {
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	client_div.style.width = String(client_sx) + "px";
	client_div.style.height = String(client_sy) + "px";
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	canvas_wgl.width = String(client_sx);
	canvas_wgl.height = String(client_sy);
	canvas_wgl.style.width = String(client_sx) + "px";
	canvas_wgl.style.height = String(client_sy) + "px";
	}},

_jsfunc_Wnd_5 : function ($0, $1, $2)
{
	var whole_div = g_whole_div_s[$0];
	whole_div.style.left = String($1) + "px";
	whole_div.style.top = String($2) + "px";},

_jsfunc_Wnd_6 : function ()
{
	console.log( "CWnd::OnLButtonDown(), call wasm_UnfocusHiddenInputTag()" );},

_jsfunc_Wnd_7 : function ($0)
{
	var ctx = g_ctx_s[$0];
	ctx.save();},

_jsfunc_Wnd_8 : function ($0)
{
	var ctx = g_ctx_s[$0];
	ctx.restore();},

_jsfunc_Wnd_9 : function ($0)
{
	var idxCanvas = $0;
	var whole_div = g_whole_div_s[idxCanvas];
	whole_div.parentNode.removeChild(whole_div);
	g_whole_div_s[idxCanvas] = 0;
	g_canvas_s[idxCanvas] = 0;
	g_client_div_s[idxCanvas] = 0;
	g_ctx_s[idxCanvas] = 0;
	return 1;},

_jsfunc_Wnd_10 : function ($0, $1)
{
	var pTimer = $0;
	var millisec = $1;
	var js_OnTimer = function() {
	var rr = g_exports.wa_OnTimer( pTimer );
	};
	return setInterval( js_OnTimer, millisec );},

_jsfunc_Wnd_11 : function ($0)
{
	var idTimer = $0;},

_jsfunc_Wnd_12 : function ($0, $1, $2, $3)
{
	var idxCanvas = $0;
	var idxCanvas_wgl = $1;
	var sx = $2;
	var sy = $3;
	var client_div = g_client_div_s[idxCanvas];
	var canvas_wgl = document.createElement("canvas");
	canvas_wgl.width = String(sx);
	canvas_wgl.height = String(sy);
	canvas_wgl.style.position = "absolute";
	canvas_wgl.style.left = "0px";
	canvas_wgl.style.top = "0px";
	canvas_wgl.style.width = String(sx) + "px";
	canvas_wgl.style.height = String(sy) + "px";
	canvas_wgl.style.zIndex = "10000";
	canvas_wgl.style.visibility = "visible";
	client_div.appendChild(canvas_wgl);
	if ( canvas_wgl == null ) {
	alert( "Creating canvas for WebGL was failed." );
	}
	if ( !window.WebGLRenderingContext ) {
	alert( "WebGL is NOT supported by this browser." );
	}
	var names = ["webgl", "experimental-webgl"];
	var ctx_wgl = null;
	for (var ii = 0; ii < names.length; ++ii) {
	try {
	ctx_wgl = canvas_wgl.getContext(names[ii]);
	}
	catch(e) {
	}
	if ( ctx_wgl ) {
	break;
	}
	}
	if ( ctx_wgl == null ) {
	alert( "Getting WebGL context for canvas was failed." );
	}
	g_canvas_s[idxCanvas_wgl] = canvas_wgl;
	g_ctx_s[idxCanvas_wgl] = ctx_wgl;},

_jsfunc_PrepDC_1 : function ($0, $1, $2, $3, $4)
{
	var ctx = g_ctx_s[$0];
	var org_x = $1;
	var org_y = $2;
	var sx = $3;
	var sy = $4;
	ctx.resetTransform();
	ctx.translate( org_x, org_y );
	ctx.beginPath();
	ctx.rect(0, 0, sx, sy);
	ctx.clip();},

_jsfunc_Caret_1 : function ($0, $1, $2, $3, $4, $5, $6)
{
	var ctx = g_ctx_s[$0];
	var xCaret = $1;
	var yCaret = $2;
	var sxCaret = $3;
	var syCaret = $4;
	var xClientTop = $5;
	var yClientTop = $6;
	var imgData = ctx.getImageData(
	xCaret + xClientTop,
	yCaret + yClientTop,
	sxCaret,
	syCaret
	);
	var pixels = imgData.data;
	var idxMax = sxCaret * syCaret * 4;
	for ( var idx = 0; idx < idxMax; idx += 4 ) {
	pixels[idx] = 255 - pixels[idx];
	pixels[idx + 1] = 255 - pixels[idx + 1];
	pixels[idx + 2] = 255 - pixels[idx + 2];
	}
	ctx.clearRect(
	xCaret + xClientTop,
	yCaret + yClientTop,
	sxCaret,
	syCaret);
	ctx.putImageData(
	imgData,
	xCaret + xClientTop,
	yCaret + yClientTop
	);},

_jsfunc_NexFuncs_1 : function ($0)
{
	var s = Pointer_stringify($0);
	alert(s);},

_jsfunc_NexFuncs_2 : function ()
{
	if ( gjs_touch_mark_visiblity ) {
	js_set_raw_touch_mark_visibility( 0 );
	return 1;
	}
	else {
	return 0;
	}},

_jsfunc_NexFuncs_3 : function ($0)
{
	gjs_typeCursor = $0;},

_jsfunc_NexFuncs_4 : function ()
{
	document.body.style.cursor = "se-resize";},

_jsfunc_NexFuncs_5 : function ()
{
	document.body.style.cursor = "e-resize";},

_jsfunc_NexFuncs_6 : function ()
{
	document.body.style.cursor = "s-resize";},

_jsfunc_NexFuncs_7 : function ()
{
	document.body.style.cursor = "default";},

_jsfunc_NexFuncs_8 : function ()
{
	js_move_touch_mark(gjs_touch_mark_x, gjs_touch_mark_y);
	js_set_raw_touch_mark_visibility( 1 );},

_jsfunc_NexFuncs_9 : function ()
{
	document.onkeydown = null;
	document.onkeyup = null;
	g_input_tag.focus();},

_jsfunc_NexFuncs_10 : function ()
{
	document.onkeydown = js_keydown_whole;
	document.onkeyup = js_keyup_whole;},

_jsfunc_NexFuncs_11 : function ()
{
	document.onkeydown = null;
	document.onkeyup = null;},

_jsfunc_NexFuncs_12 : function ()
{
	return window.innerWidth;},

_jsfunc_NexFuncs_13 : function ()
{
	return window.innerHeight;},

_jsfunc_DC_1 : function ($0, $1, $2, $3, $4, $5, $6)
{
	var str = Pointer_stringify($5);
	var ctx = g_ctx_s[$0];
	ctx.beginPath();
	ctx.lineWidth = $6;
	ctx.imageSmoothingEnabled = false;
	ctx.moveTo($1, $2);
	ctx.lineTo($3, $4);
	ctx.strokeStyle = str;
	ctx.stroke();
	return 0;},

_jsfunc_DC_2 : function ($0, $1, $2, $3, $4, $5)
{
	var ctx = g_ctx_s[$0];
	ctx.fillStyle = Pointer_stringify($5);
	ctx.fillRect($1, $2, $3, $4);
	return 0;},

_jsfunc_DC_3 : function ($0, $1, $2, $3, $4)
{
	var ctx = g_ctx_s[$0];
	var str = Pointer_stringify($3);
	ctx.fillStyle = Pointer_stringify($4);
	ctx.textBaseline = "top";
	ctx.font = g_strFont_s[$0];
	ctx.fillText(str, $1, $2);},

_jsfunc_DC_4 : function ($0, $1, $2, $3)
{
	var ctx = g_ctx_s[$0];
	var str = String.fromCodePoint($3);
	ctx.fillStyle = "#000000";
	ctx.textBaseline = "top";
	ctx.font = g_strFont_s[$0];
	ctx.fillText(str, $1, $2);},

_jsfunc_DC_5 : function ($0, $1, $2, $3, $4, $5)
{
	var ctx = g_ctx_s[$0];
	var x = $1;
	var y = $2;
	var radius = $3;
	var strCol = Pointer_stringify($4);
	ctx.beginPath();
	ctx.lineWidth = $5;
	ctx.strokeStyle = strCol;
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.stroke();},

_jsfunc_BaseWnd_1 : function ()
{
	if ( document.activeElement != null ) {
	document.activeElement.blur();
	}},

_jsfunc_TopWnd_1 : function ($0, $1)
{
	var ctx = g_ctx_s[$0];
	var str = Pointer_stringify( $1 );
	var metrics = ctx.measureText( str );
	return metrics.width;},

_jsfunc_TopWnd_2 : function ()
{
	printf_file_list = function(file_list) {
	var i;
	var num = file_list.length;
	console.log( "num = " + num );
	for ( i = 0; i < num; i++ ){
	var file = file_list[i];
	console.log( "i = " + i );
	console.log( "name:" + file.name );
	console.log( "size:" + file.size );
	console.log( "type:" + file.type );
	var reader = new FileReader();
	reader.readAsText( file, 'UTF-8' );
	reader.onload = function( readerEvent ) {
	var content = readerEvent.target.result;
	console.log( content );
	}
	}
	}},

_jsfunc_TopWnd_3 : function ()
{
	g_open_dlg_obj = new Object();
	g_open_dlg_obj.m_file_list = null;
	g_open_dlg_obj.m_bOk = 0;
	var whole_div = document.createElement('div');
	whole_div.style.position = "absolute";
	whole_div.style.left = "50px";
	whole_div.style.top = "20px";
	whole_div.style["background-color"] = "#FF0000";
	whole_div.style.border = "5px solid #00FF00";
	whole_div.style.width = "300px";
	whole_div.style.height = "110px";
	whole_div.style.zIndex = "10000000";
	document.body.appendChild( whole_div );
	g_open_dlg_obj.m_whole_div = whole_div;
	var title = document.createElement('span');
	title.innerHTML = "File Open Dialog";
	title.style.position = "absolute";
	title.style.border = "2px solid #000000";
	title.style.color = "#000000";
	title.style["background-color"] = "#FFFF00";
	title.style["text-align"] = "center";
	title.style.left = "0px";
	title.style.top = "0px";
	title.style.width = "296px";
	title.style.height = "25px";
	whole_div.appendChild( title );
	g_open_dlg_obj.m_title = title;
	file_input_tag = document.createElement('input');
	file_input_tag.type = 'file';
	file_input_tag.name = 'name';
	file_input_tag.multiple = 'multiple';
	file_input_tag.innerHTML = "input element";
	file_input_tag.style.position = "absolute";
	file_input_tag.style.border = "2px solid #000000";
	file_input_tag.style.left = "0px";
	file_input_tag.style.top = "35px";
	file_input_tag.style.width = "280px";
	file_input_tag.style.height = "32px";
	file_input_tag.style.color = "#000000";
	file_input_tag.style["background-color"] = "#00FFFF";
	whole_div.appendChild( file_input_tag );
	g_open_dlg_obj.m_file_input_tag = file_input_tag;
	CalcelToOpen = function() {
	console.log( "CalcelToOpen() „Å´Êù•„Åü." );
	g_exports.c_OpenDialogCanceled();
	}
	var cancel_button = document.createElement('button');
	cancel_button.innerHTML = "Cancel";
	cancel_button.style.position = "absolute";
	cancel_button.style.left = "120px";
	cancel_button.style.top = "80px";
	file_input_tag.style.height = "24px";
	cancel_button.onclick = CalcelToOpen;
	whole_div.appendChild( cancel_button );
	g_open_dlg_obj.m_cancel_button = cancel_button;
	file_input_tag.onclick = function(event) {
	console.log( "file_input_tag.onclick() is coming. " );
	}
	file_input_tag.onblur = function(event) {
	console.log( "file_input_tag.onblur() is coming. " );
	}
	file_input_tag.onfocus = function(event) {
	console.log( "file_input_tag.onfocus() is coming. " );
	}
	document.body.onfocus = function(event) {
	console.log( "document.body.onfocus() is coming." );
	}
	document.body.onblur = function(event) {
	console.log( "document.body.onblur() is coming." );
	}
	file_input_tag.onchange = function(event) {
	console.log( "file_input_tag.onchange() is coming. " );
	g_open_dlg_obj.m_bOk = 1;
	var file_list = event.target.files;
	g_open_dlg_obj.m_file_list = file_list;
	g_exports.c_OpenDialogEnd();
	}
	file_input_tag.click();},

_jsfunc_TopWnd_4 : function ()
{
	var whole_div = g_open_dlg_obj.m_whole_div;
	document.body.removeChild( whole_div );},

_jsfunc_TopWnd_5 : function ()
{
	var file_list = g_open_dlg_obj.m_file_list;
	console.log( "g_open_dlg_obj.m_bOk = " + g_open_dlg_obj.m_bOk );
	console.log( "file_list = " + file_list );
	if ( file_list != null ) {
	console.log( "begin of filelist(2)" );
	printf_file_list(file_list);
	console.log( "end of filelist(2)" );
	}
	else {
	console.log( "file_list == null" );
	}},

_jsfunc_TopWnd_6 : function ()
{
	var atag = document.createElement('a');
	atag.href = URL.createObjectURL(new Blob(['NWSTK, Hello Blob. Y.A.\n'], {type: 'text/plain'}));
	atag.download = 'test-blob-NWSTK.txt';
	atag.style.display = 'none';
	document.body.appendChild(atag);
	atag.click();
	document.body.removeChild(atag);},

_jsfunc_Image_1 : function ($0)
{
	var x = $0;
	return Math.sin( x ) * 10000000.0 ;},

_jsfunc_Image_2 : function ($0, $1)
{
	var idxImg = $0;
	var szPath = Pointer_stringify($1);
	var img_pack = {};
	var img = new Image();
	img_pack.m_img = img;
	img_pack.m_bLoaded = false;
	g_js_img_hash[idxImg] = img_pack;
	img.src = szPath;
	img.onload = function() {
	js_MyPrint( "begin of img.onload" );
	js_MyPrint( "loading image is complete" );
	js_MyPrint( "img.width=" + img.width );
	js_MyPrint( "img.height=" + img.height );
	js_MyPrint( "before wa_CImage_OnBackImageLoaded() in img.onload function" );
	img_pack.m_bLoaded = true;
	g_exports.wa_CImage_OnBackImageLoaded( idxImg );
	js_MyPrint( "after wa_CImage_OnBackImageLoaded() in img.onload function" );
	js_MyPrint( "end of img.onload" );
	}},

_jsfunc_Image_3 : function ($0)
{
	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.naturalWidth;},

_jsfunc_Image_4 : function ($0)
{
	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.naturalHeight;},

_jsfunc_Image_5 : function ($0)
{
	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.clientWidth;},

_jsfunc_Image_6 : function ($0)
{
	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	return img.clientHeight;},

_jsfunc_Image_7 : function ($0, $1, $2, $3)
{
	var idxImg = $0;
	var img_pack = g_js_img_hash[idxImg];
	var img = img_pack.m_img;
	var ctx = g_ctx_s[$1];
	var canvas = g_canvas_s[$1];
	var x = $2;
	var y = $3;
	var sx = img.width;
	var sy = img.height;
	ctx.drawImage(
	img,
	0,
	0,
	sx,
	sy,
	x,
	y,
	sx,
	sy
	);},

_jsfunc_Image_8 : function ($0, $1, $2)
{
	var ctx = g_ctx_s[$0];
	var org_x = $1;
	var org_y = $2;
	ctx.resetTransform();
	ctx.translate( org_x, org_y );},

_jsfunc_Image_9 : function ($0, $1)
{
	var ctx = g_ctx_s[$0];
	var rad_x = $1;
	ctx.rotate( rad_x );},

_jsfunc_Image_10 : function ($0, $1, $2)
{
	var ctx = g_ctx_s[$0];
	ctx.translate( $1, $2 );},

_jsfunc_NewEntry_1 : function ()
{
	g_log_cnt = 0;
	js_MyPrint = function( str ) {
	console.log( "" + g_log_cnt + " : " + str );
	g_log_cnt++;
	};
	g_bTouchSupported = 0;
	if ( window.ontouchstart === null ) {
	g_bTouchSupported = 1;
	}
	gjs_typeCursor = 0 ;
	js_MyPrint( "g_bTouchSupported=" + g_bTouchSupported );
	return g_bTouchSupported;},

_jsfunc_NewEntry_2 : function ($0, $1, $2)
{
	console.log( "start_from_js(), a=" + String($0) );
	console.log( "start_from_js(), b=" + String($1) );
	console.log( "start_from_js(), c=" + String($2) );},

_jsfunc_NewEntry_3 : function ()
{
	js_genshi_line = function(ctx, x1, y1, x2, y2, strCol, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.imageSmoothingEnabled = false;
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = strCol;
	ctx.stroke();
	}
	js_genshi_rect = function(ctx, x1, y1, sx, sy, strCol, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.imageSmoothingEnabled = false;
	ctx.moveTo(x1, y1);
	ctx.lineTo(x1, y1 + sy);
	ctx.lineTo(x1 + sx, y1 + sy);
	ctx.lineTo(x1 + sx, y1);
	ctx.lineTo(x1, y1);
	ctx.strokeStyle = strCol;
	ctx.stroke();
	}
	js_genshi_circle = function(ctx, x1, y1, r, strCol, width) {
	ctx.lineWidth = width;
	ctx.strokeStyle = strCol;
	ctx.beginPath();
	ctx.arc(x1, y1, r, 0, Math.PI*2, true);
	ctx.stroke();
	}
	function touch_mark_ctor(typeCursor)
	{
	if ( typeCursor == 9 ) {
	this.mjs_touch_mark_canvas_s = gjs_touch_mark_graph_canvas_s[1 ];
	}
	else if ( typeCursor == 10 ) {
	this.mjs_touch_mark_canvas_s = gjs_touch_mark_graph_canvas_s[2 ];
	}
	else if ( typeCursor == 7 ) {
	this.mjs_touch_mark_canvas_s = gjs_touch_mark_graph_canvas_s[3 ];
	}
	else if ( typeCursor == 8 ) {
	this.mjs_touch_mark_canvas_s = gjs_touch_mark_graph_canvas_s[4 ];
	}
	else {
	this.mjs_touch_mark_canvas_s = gjs_touch_mark_graph_canvas_s[0 ];
	}
	}
	function initial_draw_touch_mark_canva_s(canva_s, typeTouchMarkGraph)
	{
	canva_s[0] = make_one_touch_mark(
	typeTouchMarkGraph,
	- 0 ,
	- 0 ,
	200 ,
	( 200 / 2 - 4 )
	);
	canva_s[1] = make_one_touch_mark(
	typeTouchMarkGraph,
	- 0 ,
	- ( 200 / 2 + 4 ) ,
	200 ,
	( 200 / 2 - 4 )
	);
	canva_s[2] = make_one_touch_mark(
	typeTouchMarkGraph,
	- 0 ,
	- ( 200 / 2 - 4 ) ,
	( 200 / 2 - 4 ) ,
	8
	);
	canva_s[3] = make_one_touch_mark(
	typeTouchMarkGraph,
	- ( 200 / 2 + 4 ) ,
	- ( 200 / 2 - 4 ) ,
	( 200 / 2 - 4 ) ,
	8
	);
	}
	function make_one_touch_mark(typeTouchMarkGraph, dx, dy, sx, sy)
	{
	canvas = document.createElement("canvas");
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.border = "0px solid #FFFFFF";
	canvas.style.position = "absolute";
	canvas.style.left = "0px";
	canvas.style.top = "30px";
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	canvas.style["background-color"] = "#00000000";
	canvas.style.zIndex = "10000000";
	canvas.style.visibility = "hidden";
	gjs_touch_mark_visiblity = 0;
	gjs_bTouchMarkEnable = 1;
	document.body.appendChild(canvas);
	var ctx = canvas.getContext("2d");
	var cx = 200 / 2;
	var cy = 200 / 2;
	js_genshi_line( ctx,
	dx + cx,
	dy,
	dx + cx,
	dy + 200 ,
	"#00FFFF",
	7
	);
	js_genshi_line( ctx,
	dx,
	dy + cy,
	dx + 200 ,
	dy + cy,
	"#00FFFF",
	7
	);
	js_genshi_circle(
	ctx,
	dx + cx,
	dy + cy,
	60 ,
	"#00FFFF",
	7
	);
	js_genshi_line( ctx,
	dx + cx,
	dy,
	dx + cx,
	dy + 200 ,
	"#0000FF",
	3
	);
	js_genshi_line( ctx,
	dx,
	dy + cy,
	dx + 200 ,
	dy + cy,
	"#0000FF",
	3
	);
	js_genshi_circle(
	ctx,
	dx + cx,
	dy + cy,
	60 ,
	"#0000FF",
	3
	);
	if ( typeTouchMarkGraph == 3 ) {
	drawMoveMark( dx + cx,
	dy + cy,
	Math.PI * 3 / 4
	);
	}
	else if ( typeTouchMarkGraph == 4 ) {
	drawMoveMark( dx + cx,
	dy + cy,
	Math.PI / 4
	);
	}
	else if ( typeTouchMarkGraph == 1 ) {
	drawMoveMark( dx + cx,
	dy + cy,
	0
	);
	}
	else if ( typeTouchMarkGraph == 2 ) {
	drawMoveMark( dx + cx,
	dy + cy,
	Math.PI / 2
	);
	}
	return canvas;
	function drawArrow(x1, y1, len, radAngle) {
	let c = Math.cos(radAngle);
	let s = Math.sin(radAngle);
	let x2 = x1 + len * c;
	let y2 = y1 - len * s;
	let x3 = x1 + len * c * 0.8;
	let y3 = y1 - len * s * 0.8;
	let col = "#00FF00";
	js_genshi_line( ctx,
	x1,
	y1,
	x2,
	y2,
	col,
	7
	);
	js_genshi_line( ctx,
	x2,
	y2,
	x3 - len * s * 0.08,
	y3 - len * c * 0.08,
	col,
	7
	);
	js_genshi_line( ctx,
	x2,
	y2,
	x3 + len * s * 0.08,
	y3 + len * c * 0.08,
	col,
	7
	);
	}
	function drawMoveMark(x1, y1, radAngle) {
	let len = 200 / 2;
	let col = "#00FF00";
	drawArrow( x1,
	y1,
	len,
	radAngle
	);
	drawArrow( x1,
	y1,
	len,
	radAngle + Math.PI
	);
	js_genshi_circle(
	ctx,
	x1,
	y1,
	60 ,
	col,
	7
	);
	}
	}
	gjs_touch_mark_graph_canvas_s = new Array( 5 );
	for ( let i = 0; i < 5 ; i++ ) {
	gjs_touch_mark_graph_canvas_s[i] = new Array( 4 );
	initial_draw_touch_mark_canva_s( gjs_touch_mark_graph_canvas_s[i], i );
	}
	gjs_touch_mark_s = new Array(14 );
	for ( let i = 0; i < 14 ; i++ ) {
	gjs_touch_mark_s[i] = new touch_mark_ctor( i );
	}},

_jsfunc_NewEntry_4 : function ()
{
	g_bIME = 0;
	g_bComposStarted = 0;
	g_input_tag = null;
	js_make_input_tag_caret_goto_btm = function() {
	var len = g_input_tag.value.length;
	g_input_tag.setSelectionRange(len, len);
	}
	js_delay_input_tag_caret_goto_btm = function() {
	js_make_input_tag_caret_goto_btm();
	}
	js_set_delay_input_tag_caret_goto_btm = function() {
	setTimeout( js_delay_input_tag_caret_goto_btm, 0 );
	}
	js_init_input_tag_text_value = function() {
	g_input_tag.value = " " ;
	g_input_tag.value = "aaa";
	g_input_tag.value = " " ;
	g_input_tag.setSelectionRange(1, 1);
	js_set_delay_input_tag_caret_goto_btm();
	}
	g_input_tag = document.createElement("textarea");
	g_input_tag.autocomplete = "off";
	var border_width = 2;
	var sx = 100;
	var sy = 32;
	g_input_tag.width = String(sx);
	g_input_tag.height = String(sy);
	g_input_tag.style.border = String(border_width) + "px solid #008080";
	g_input_tag.style.position = "absolute";
	g_input_tag.style.left = "-10000px";
	g_input_tag.style.top = "0px";
	g_input_tag.style.width = String(sx) + "px";
	g_input_tag.style.height = String(sy) + "px";
	g_input_tag.style["background-color"] = "#ffffff";
	g_input_tag.style.zIndex = "100000";
	g_input_tag.style.visibility = "visible";
	js_init_input_tag_text_value();
	document.body.appendChild(g_input_tag);
	g_input_tag.focus();},

_jsfunc_NewEntry_5 : function ()
{
	g_outarea = document.getElementById( "outarea" );
	g_js_img_hash = {};},

_jsfunc_NewEntry_6 : function ()
{
	g_scaling = 1.0;},

_jsfunc_NewEntry_7 : function ()
{
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "normal normal 32px monospace";
	var sxTextX = ctx.measureText("X").width;
	js_MyPrint( "font_check, width of font 'X' = " + sxTextX );
	js_MyPrint( "sxTextX / 16.0 = " + (sxTextX / 16.0) );},

_jsfunc_NewEntry_8 : function ()
{
	g_canvas_s = new Array(200 );
	g_whole_div_s = new Array(200 );
	g_ctx_s = new Array(200 );
	g_client_div_s = new Array(200 );
	g_strFont_s = new Array(200 );},

_jsfunc_NewEntry_9 : function ()
{
	g_js_bInputInputEvent = 0;
	g_input_tag.addEventListener( 'keydown', js_keydown, {passive: false} );
	g_input_tag.addEventListener( 'keyup', js_keyup, {passive: false} );
	g_input_tag.addEventListener( 'input', js_input_input );
	g_input_tag.addEventListener('compositionstart', js_composition_start );
	g_input_tag.addEventListener('compositionend', js_composition_end );
	if ( !g_bTouchSupported ) {
	document.addEventListener( 'mousemove', js_mousemove, {passive: false} );
	document.addEventListener( 'mousedown', js_mousedown, {passive: false} );
	document.addEventListener( 'mouseup', js_mouseup, {passive: false} );
	}
	else {
	document.addEventListener( 'touchstart',
	js_touchstart,
	{
	once: false,
	passive: false,
	capture: true
	}
	);
	document.addEventListener( 'touchend',
	js_touchend,
	{
	once: false,
	passive: false,
	capture: true
	}
	);
	document.addEventListener( 'touchmove',
	js_touchmove,
	{
	once: false,
	passive: false,
	capture: true
	}
	);
	}
	function is_ignore_key(key) {
	if ( key == 8 ||
	key == 0x20 ||
	key == 0x26 || key == 0x28 ||
	key == 0x25 || key == 0x27 ) {
	return true;
	}
	else {
	return false;
	}
	}
	function js_input_input(e) {
	var str = g_input_tag.value;
	g_js_bInputInputEvent = 1;
	if ( !g_bComposStarted ) {
	if ( g_bIME ) {
	g_exports.c_reflect_IME( 0 );
	}
	}
	if ( g_bIME ) {
	}
	else {
	if ( str.length != 0 ) {
	if ( str.length >= 2 ) {
	var char_code = str.charCodeAt(str.length - 1);
	var rr = g_exports.c_chardown( char_code );
	}
	}
	else {
	var rr1 = g_exports.c_keydown( 0x08 );
	}
	js_init_input_tag_text_value();
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_composition_start(e) {
	g_exports.c_composition_start();
	}
	function js_composition_end_core() {
	var str = g_input_tag.value;
	g_js_ime_unicode_s = [];
	var i = 0;
	if ( str.charAt(0) == " " ) {
	i++;
	}
	else {
	}
	for ( ;; i++ ) {
	var unicode = str.codePointAt(i);
	if ( unicode == null ) {
	break;
	}
	if ( unicode != 0x0d ) {
	g_js_ime_unicode_s.push( unicode );
	}
	}
	var len = g_js_ime_unicode_s.length;
	g_js_ime_unicode_s.push(0);
	g_exports.c_composition_end_core( len );
	js_init_input_tag_text_value();
	}
	function js_composition_end(e) {
	g_exports.c_compo_end_dbg();
	js_composition_end_core();
	}
	function js_keydown(e) {
	g_js_bInputInputEvent = 0;
	var key = e.keyCode;
	if ( key == 229 ) {
	return;
	}
	if ( key == 0x08 ) {
	return;
	}
	if ( key == 0x2E ||
	key == 0x25 ||
	key == 0x27 ||
	key == 0x26 ||
	key == 0x28 ||
	key == 0x24 ||
	key == 0x23 ||
	key == 0x0d ) {
	}
	else if ( key >= 0x20 ) {
	return;
	}
	var rr = g_exports.c_keydown( key );
	}
	function js_keyup(e) {
	var key = e.keyCode;
	if ( key == 229 ) {
	return;
	}
	else if ( key == 0x08 ) {
	return;
	}
	g_js_bInputInputEvent = 0;
	var rr = g_exports.c_keyup( key );
	}
	js_keydown_whole = function(e) {
	var key = e.keyCode;
	var rr = g_exports.c_keydown( key );
	e.preventDefault();
	e.stopPropagation();
	};
	js_keyup_whole = function(e) {
	var key = e.keyCode;
	var rr = g_exports.c_keyup_whole( key );
	e.preventDefault();
	e.stopPropagation();
	};
	function js_mousedown(e) {
	var bProcessed = g_exports.c_mousedown(
	e.clientX * g_scaling,
	e.clientY * g_scaling,
	e.button
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_mouseup(e) {
	var bProcessed = g_exports.c_mouseup(
	e.clientX * g_scaling,
	e.clientY * g_scaling,
	e.button
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_mousemove(e) {
	var bProcessed = g_exports.c_mousemove(
	e.clientX * g_scaling,
	e.clientY * g_scaling,
	e.pageX * g_scaling,
	e.pageY * g_scaling,
	g_scaling * 1000
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	js_move_touch_mark = function(mx, my) {
	gjs_touch_mark_x = mx;
	gjs_touch_mark_y = my;
	if ( g_bTouchSupported ) {
	console.log( "js_move_touch_mark(), gjs_typeCursor=" + gjs_typeCursor );
	var tx = mx - 200 / 2;
	var ty = my - 200 / 2;
	let touch_mark = gjs_touch_mark_s[gjs_typeCursor];
	canvas_s = touch_mark.mjs_touch_mark_canvas_s;
	canvas_s[0].style.left = String(tx) + "px";
	canvas_s[0].style.top = String(ty) + "px";
	canvas_s[1].style.left = String(tx) + "px";
	canvas_s[1].style.top = String(ty + ( 200 / 2 + 4 ) ) + "px";
	canvas_s[2].style.left = String(tx) + "px";
	canvas_s[2].style.top = String(ty + ( 200 / 2 - 4 ) ) + "px";
	canvas_s[3].style.left = String(tx + ( 200 / 2 + 4 ) ) + "px";
	canvas_s[3].style.top = String(ty + ( 200 / 2 - 4 ) ) + "px";
	}
	}
	js_set_raw_touch_mark_visibility = function( bVisible ) {
	if ( g_bTouchSupported ) {
	console.log( "js_set_raw_touch_mark_visibility(), gjs_typeCursor=" + gjs_typeCursor );
	let touch_mark = gjs_touch_mark_s[gjs_typeCursor];
	canvas_s = touch_mark.mjs_touch_mark_canvas_s;
	if ( bVisible ) {
	for ( var i = 0; i < 4 ; i++ ) {
	canvas_s[i].style.visibility = "visible";
	}
	gjs_touch_mark_visiblity = 1;
	}
	else {
	for ( var i = 0; i < 4 ; i++ ) {
	canvas_s[i].style.visibility = "hidden";
	}
	gjs_touch_mark_visiblity = 0;
	}
	}
	}
	function js_touchstart(e) {
	var touch = e.touches[0];
	var mx = touch.clientX * g_scaling;
	var my = touch.clientY * g_scaling;
	if ( gjs_bTouchMarkEnable ) {
	js_move_touch_mark(mx, my);
	js_set_raw_touch_mark_visibility( 1 );
	}
	var bProcessed = g_exports.c_mousedown(
	mx,
	my,
	0
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_touchend(e) {
	if ( gjs_bTouchMarkEnable ) {
	js_set_raw_touch_mark_visibility( 0 );
	}
	var bProcessed = g_exports.c_mouseup(
	0,
	0,
	0
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_touchmove(e) {
	var touch = e.touches[0];
	var mx = touch.clientX * g_scaling;
	var my = touch.clientY * g_scaling;
	if ( gjs_bTouchMarkEnable ) {
	js_move_touch_mark(mx, my);
	js_set_raw_touch_mark_visibility( 1 );
	}
	var bProcessed = g_exports.c_mousemove(
	mx,
	my,
	touch.pageX * g_scaling,
	touch.pageY * g_scaling,
	g_scaling * 1000
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}},

_jsfunc_NewEntry_10 : function ()
{
	count = 0;
	function js_OnMainTimer() {
	var rr = g_exports.wa_OnMainTimer(1);
	}
	setInterval(js_OnMainTimer, 20);},

_jsfunc_NewEntry_11 : function ($0)
{
	var bEnable = $0;
	if ( gjs_bTouchMarkEnable ) {
	js_set_raw_touch_mark_visibility( 0 );
	}
	else {
	}
	gjs_bTouchMarkEnable = bEnable;},

_jsfunc_NewEntry_12 : function ()
{
	g_bComposStarted = 1;},

_jsfunc_NewEntry_13 : function ()
{
	g_bComposStarted = 0;},

_jsfunc_NewEntry_14 : function ($0)
{
	return g_js_ime_unicode_s[$0];},

_jsfunc_NewEntry_15 : function ()
{
	js_set_delay_input_tag_caret_goto_btm();},

_jsfunc_NewEntry_16 : function ($0)
{
	g_bIME = $0;},

_jsfunc_NewEntry_17 : function ()
{
	g_input_tag.style["background-color"] = "#ffffff";
	g_input_tag.style.left = "220px";},

_jsfunc_NewEntry_18 : function ()
{
	g_input_tag.style.left = "-10000px";},

_jsfunc_NewEntry_19 : function ($0)
{
	var str1 = Pointer_stringify($0);
	g_outarea.value += str1;
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_20 : function ($0)
{
	g_outarea.value += String($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_21 : function ($0)
{
	g_outarea.value += String.fromCharCode($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_22 : function ($0, $1)
{
	alert( Pointer_stringify($0) + String($1) );},

_jsfunc_NewEntry_23 : function ()
{
	alert( "abort() is called." );},

_jsfunc_NewEntry_24 : function ($0, $1)
{
	js_MyPrint( String($0) + ", " + Pointer_stringify($1) );},

_jsfunc_main_1 : function ()
{
	gjs_audio_so.play();},

_jsfunc_main_2 : function ()
{
	gjs_audio_mi.play();},

_jsfunc_main_3 : function ()
{
	gjs_audio_mi.play();},

_jsfunc_main_4 : function ()
{
	gjs_audio_mi.play();},

_jsfunc_main_5 : function ()
{
	gjs_audio_do.play();},

_jsfunc_main_6 : function ($0)
{
	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clearDepth(1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);},

_jsfunc_main_7 : function ($0, $1, $2, $3, $4, $5, $6)
{
	var idxCanvas_wgl = $0;
	var sxClient = $1;
	var syClient = $2;
	var xRacket = $3;
	var yRacket = $4;
	var xBall = $5;
	var yBall = $6;
	var gl = g_ctx_s[idxCanvas_wgl];
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	var prg = g_prg;
	var mMatrix1 = myMat_identity(g_mat_s[0]);
	var mMatrix2 = myMat_identity(g_mat_s[1]);
	var tmpMatrix = myMat_identity(g_mat_s[10]);
	var vpMatrix = myMat_identity(g_mat_s[13]);
	var mvpMatrix = myMat_identity(g_mat_s[14]);
	function DrawTouchCircle(x1, y1) {
	var mMatrix3 = myMat_identity(g_mat_s[2]);
	myMat_translate( mMatrix3, [x1, y1, 0], tmpMatrix );
	myMat_copyMatrix( mMatrix3, tmpMatrix );
	set_attribute( g_my_col_vbo, g_locAttCol, g_numElemPerAttCol,
	( 4 + ( 16 + 2 ) ) * 4 * g_numElemPerAttCol
	);
	gl.bindBuffer(gl.ARRAY_BUFFER, g_vboTouchCircle);
	gl.enableVertexAttribArray(attLocation);
	gl.vertexAttribPointer(attLocation, 3, gl.FLOAT, false, 0, 0);
	myMat_multiply(vpMatrix, mMatrix3, mvpMatrix);
	gl.uniformMatrix4fv(g_uniLocation, false, mvpMatrix);
	gl.drawArrays(gl.LINE_LOOP, 0, 32 );
	gl.disableVertexAttribArray(attLocation);
	}
	function DrawCourt() {
	var mMatrix3 = myMat_identity(g_mat_s[2]);
	set_attribute( g_my_col_vbo, g_locAttCol, g_numElemPerAttCol,
	( ( 4 + ( 16 + 2 ) ) + 32 ) * 4 * g_numElemPerAttCol
	);
	gl.bindBuffer(gl.ARRAY_BUFFER, g_vboCourt);
	gl.enableVertexAttribArray(attLocation);
	gl.vertexAttribPointer(attLocation, 3, gl.FLOAT, false, 0, 0);
	myMat_multiply(vpMatrix, mMatrix3, mvpMatrix);
	gl.uniformMatrix4fv(g_uniLocation, false, mvpMatrix);
	gl.drawArrays(gl.LINE_LOOP, 0, 4 );
	gl.disableVertexAttribArray(attLocation);
	}
	var attLocation = gl.getAttribLocation(prg, 'position');
	vpMatrix[0 + 0] = 2.0 / 700 ;
	vpMatrix[4 + 1] = - 2.0 / 620 ;
	vpMatrix[4*3 + 0] = -1.0;
	vpMatrix[4*3 + 1] = 1.0;
	myMat_translate( mMatrix1, [xRacket, yRacket, 0], tmpMatrix );
	myMat_copyMatrix( mMatrix1, tmpMatrix );
	myMat_translate( mMatrix2, [xBall, yBall, 0], tmpMatrix );
	myMat_copyMatrix( mMatrix2, tmpMatrix );
	DrawCourt();
	{
	set_attribute( g_my_col_vbo, g_locAttCol, g_numElemPerAttCol,
	0 * 4 * g_numElemPerAttCol
	);
	gl.bindBuffer(gl.ARRAY_BUFFER, g_vboRacket);
	gl.enableVertexAttribArray(attLocation);
	gl.vertexAttribPointer(attLocation, 3, gl.FLOAT, false, 0, 0);
	myMat_multiply(vpMatrix, mMatrix1, mvpMatrix);
	gl.uniformMatrix4fv(g_uniLocation, false, mvpMatrix);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4 );
	gl.disableVertexAttribArray(attLocation);
	}
	{
	set_attribute( g_my_col_vbo, g_locAttCol, g_numElemPerAttCol,
	4 * 4 * g_numElemPerAttCol
	);
	gl.bindBuffer(gl.ARRAY_BUFFER, g_vboBall);
	gl.enableVertexAttribArray(attLocation);
	gl.vertexAttribPointer(attLocation, 3, gl.FLOAT, false, 0, 0);
	myMat_multiply(vpMatrix, mMatrix2, mvpMatrix);
	gl.uniformMatrix4fv(g_uniLocation, false, mvpMatrix);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, ( 16 + 2 ) );
	gl.disableVertexAttribArray(attLocation);
	}
	DrawTouchCircle( 100 , ( 620 - 50 ) );
	DrawTouchCircle( ( 700 - 100 ) , ( 620 - 50 ) );
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.flush();},

_jsfunc_main_8 : function ()
{
	myMat_create = function(){
	return new Float32Array(16);
	};
	myMat_identity = function(dst){
	dst[0] = 1; dst[1] = 0; dst[2] = 0; dst[3] = 0;
	dst[4] = 0; dst[5] = 1; dst[6] = 0; dst[7] = 0;
	dst[8] = 0; dst[9] = 0; dst[10] = 1; dst[11] = 0;
	dst[12] = 0; dst[13] = 0; dst[14] = 0; dst[15] = 1;
	return dst;
	};
	myMat_copyMatrix = function(dst, src){
	for ( i = 0; i < 16; i++ ) {
	dst[i] = src[i];
	}
	};
	myMat_multiply = function(mat1, mat2, dst){
	var A00 = mat1[0], A01 = mat1[1], A02 = mat1[2], A03 = mat1[3],
	A10 = mat1[4], A11 = mat1[5], A12 = mat1[6], A13 = mat1[7],
	A20 = mat1[8], A21 = mat1[9], A22 = mat1[10], A23 = mat1[11],
	A30 = mat1[12], A31 = mat1[13], A32 = mat1[14], A33 = mat1[15];
	var B00 = mat2[0], B01 = mat2[1], B02 = mat2[2], B03 = mat2[3],
	B10 = mat2[4], B11 = mat2[5], B12 = mat2[6], B13 = mat2[7],
	B20 = mat2[8], B21 = mat2[9], B22 = mat2[10], B23 = mat2[11],
	B30 = mat2[12], B31 = mat2[13], B32 = mat2[14], B33 = mat2[15];
	dst[0] = B00 * A00 + B01 * A10 + B02 * A20 + B03 * A30;
	dst[1] = B00 * A01 + B01 * A11 + B02 * A21 + B03 * A31;
	dst[2] = B00 * A02 + B01 * A12 + B02 * A22 + B03 * A32;
	dst[3] = B00 * A03 + B01 * A13 + B02 * A23 + B03 * A33;
	dst[4] = B10 * A00 + B11 * A10 + B12 * A20 + B13 * A30;
	dst[5] = B10 * A01 + B11 * A11 + B12 * A21 + B13 * A31;
	dst[6] = B10 * A02 + B11 * A12 + B12 * A22 + B13 * A32;
	dst[7] = B10 * A03 + B11 * A13 + B12 * A23 + B13 * A33;
	dst[8] = B20 * A00 + B21 * A10 + B22 * A20 + B23 * A30;
	dst[9] = B20 * A01 + B21 * A11 + B22 * A21 + B23 * A31;
	dst[10] = B20 * A02 + B21 * A12 + B22 * A22 + B23 * A32;
	dst[11] = B20 * A03 + B21 * A13 + B22 * A23 + B23 * A33;
	dst[12] = B30 * A00 + B31 * A10 + B32 * A20 + B33 * A30;
	dst[13] = B30 * A01 + B31 * A11 + B32 * A21 + B33 * A31;
	dst[14] = B30 * A02 + B31 * A12 + B32 * A22 + B33 * A32;
	dst[15] = B30 * A03 + B31 * A13 + B32 * A23 + B33 * A33;
	return dst;
	};
	myMat_scale = function(mat, vec, dst){
	dst[0] = mat[0] * vec[0];
	dst[1] = mat[1] * vec[0];
	dst[2] = mat[2] * vec[0];
	dst[3] = mat[3] * vec[0];
	dst[4] = mat[4] * vec[1];
	dst[5] = mat[5] * vec[1];
	dst[6] = mat[6] * vec[1];
	dst[7] = mat[7] * vec[1];
	dst[8] = mat[8] * vec[2];
	dst[9] = mat[9] * vec[2];
	dst[10] = mat[10] * vec[2];
	dst[11] = mat[11] * vec[2];
	dst[12] = mat[12];
	dst[13] = mat[13];
	dst[14] = mat[14];
	dst[15] = mat[15];
	return dst;
	};
	myMat_translate = function(mat, vec, dst){
	dst[0] = mat[0]; dst[1] = mat[1]; dst[2] = mat[2]; dst[3] = mat[3];
	dst[4] = mat[4]; dst[5] = mat[5]; dst[6] = mat[6]; dst[7] = mat[7];
	dst[8] = mat[8]; dst[9] = mat[9]; dst[10] = mat[10]; dst[11] = mat[11];
	dst[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8] * vec[2] + mat[12];
	dst[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9] * vec[2] + mat[13];
	dst[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];
	dst[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];
	return dst;
	};
	myMat_rotate = function(mat, angle, axis, dst){
	var sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
	if(!sq){return null;}
	var a = axis[0], b = axis[1], c = axis[2];
	if(sq != 1){sq = 1 / sq; a *= sq; b *= sq; c *= sq;}
	var d = Math.sin(angle), e = Math.cos(angle), f = 1 - e,
	g = mat[0], h = mat[1], i = mat[2], j = mat[3],
	k = mat[4], l = mat[5], m = mat[6], n = mat[7],
	o = mat[8], p = mat[9], q = mat[10], r = mat[11],
	s = a * a * f + e,
	t = b * a * f + c * d,
	u = c * a * f - b * d,
	v = a * b * f - c * d,
	w = b * b * f + e,
	x = c * b * f + a * d,
	y = a * c * f + b * d,
	z = b * c * f - a * d,
	A = c * c * f + e;
	if(angle){
	if(mat != dst){
	dst[12] = mat[12]; dst[13] = mat[13];
	dst[14] = mat[14]; dst[15] = mat[15];
	}
	} else {
	dst = mat;
	}
	dst[0] = g * s + k * t + o * u;
	dst[1] = h * s + l * t + p * u;
	dst[2] = i * s + m * t + q * u;
	dst[3] = j * s + n * t + r * u;
	dst[4] = g * v + k * w + o * x;
	dst[5] = h * v + l * w + p * x;
	dst[6] = i * v + m * w + q * x;
	dst[7] = j * v + n * w + r * x;
	dst[8] = g * y + k * z + o * A;
	dst[9] = h * y + l * z + p * A;
	dst[10] = i * y + m * z + q * A;
	dst[11] = j * y + n * z + r * A;
	return dst;
	};
	myMat_lookAt = function(eye, center, up, dst){
	var eyeX = eye[0], eyeY = eye[1], eyeZ = eye[2],
	upX = up[0], upY = up[1], upZ = up[2],
	centerX = center[0], centerY = center[1], centerZ = center[2];
	if ( eyeX == centerX && eyeY == centerY && eyeZ == centerZ ) {
	return myMat_identity(dst);
	}
	var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
	z0 = eyeX - center[0]; z1 = eyeY - center[1]; z2 = eyeZ - center[2];
	l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	z0 *= l; z1 *= l; z2 *= l;
	x0 = upY * z2 - upZ * z1;
	x1 = upZ * z0 - upX * z2;
	x2 = upX * z1 - upY * z0;
	l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	if(!l){
	x0 = 0; x1 = 0; x2 = 0;
	} else {
	l = 1 / l;
	x0 *= l; x1 *= l; x2 *= l;
	}
	y0 = z1 * x2 - z2 * x1; y1 = z2 * x0 - z0 * x2; y2 = z0 * x1 - z1 * x0;
	l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	if(!l){
	y0 = 0; y1 = 0; y2 = 0;
	} else {
	l = 1 / l;
	y0 *= l; y1 *= l; y2 *= l;
	}
	dst[0] = x0; dst[1] = y0; dst[2] = z0; dst[3] = 0;
	dst[4] = x1; dst[5] = y1; dst[6] = z1; dst[7] = 0;
	dst[8] = x2; dst[9] = y2; dst[10] = z2; dst[11] = 0;
	dst[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
	dst[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
	dst[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
	dst[15] = 1;
	return dst;
	};
	myMat_perspective = function(fovy, aspect, near, far, dst){
	var t = near * Math.tan(fovy * Math.PI / 360);
	var r = t * aspect;
	var a = r * 2, b = t * 2, c = far - near;
	dst[0] = near * 2 / a;
	dst[1] = 0;
	dst[2] = 0;
	dst[3] = 0;
	dst[4] = 0;
	dst[5] = near * 2 / b;
	dst[6] = 0;
	dst[7] = 0;
	dst[8] = 0;
	dst[9] = 0;
	dst[10] = -(far + near) / c;
	dst[11] = -1;
	dst[12] = 0;
	dst[13] = 0;
	dst[14] = -(far * near * 2) / c;
	dst[15] = 0;
	return dst;
	};
	myMat_transpose = function(mat, dst){
	dst[0] = mat[0]; dst[1] = mat[4];
	dst[2] = mat[8]; dst[3] = mat[12];
	dst[4] = mat[1]; dst[5] = mat[5];
	dst[6] = mat[9]; dst[7] = mat[13];
	dst[8] = mat[2]; dst[9] = mat[6];
	dst[10] = mat[10]; dst[11] = mat[14];
	dst[12] = mat[3]; dst[13] = mat[7];
	dst[14] = mat[11]; dst[15] = mat[15];
	return dst;
	};
	myMat_inverse = function(mat, dst){
	var a = mat[0], b = mat[1], c = mat[2], d = mat[3],
	e = mat[4], f = mat[5], g = mat[6], h = mat[7],
	i = mat[8], j = mat[9], k = mat[10], l = mat[11],
	m = mat[12], n = mat[13], o = mat[14], p = mat[15],
	q = a * f - b * e, r = a * g - c * e,
	s = a * h - d * e, t = b * g - c * f,
	u = b * h - d * f, v = c * h - d * g,
	w = i * n - j * m, x = i * o - k * m,
	y = i * p - l * m, z = j * o - k * n,
	A = j * p - l * n, B = k * p - l * o,
	ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
	dst[0] = ( f * B - g * A + h * z) * ivd;
	dst[1] = (-b * B + c * A - d * z) * ivd;
	dst[2] = ( n * v - o * u + p * t) * ivd;
	dst[3] = (-j * v + k * u - l * t) * ivd;
	dst[4] = (-e * B + g * y - h * x) * ivd;
	dst[5] = ( a * B - c * y + d * x) * ivd;
	dst[6] = (-m * v + o * s - p * r) * ivd;
	dst[7] = ( i * v - k * s + l * r) * ivd;
	dst[8] = ( e * A - f * y + h * w) * ivd;
	dst[9] = (-a * A + b * y - d * w) * ivd;
	dst[10] = ( m * u - n * s + p * q) * ivd;
	dst[11] = (-i * u + j * s - l * q) * ivd;
	dst[12] = (-e * z + f * x - g * w) * ivd;
	dst[13] = ( a * z - b * x + c * w) * ivd;
	dst[14] = (-m * t + n * r - o * q) * ivd;
	dst[15] = ( i * t - j * r + k * q) * ivd;
	return dst;
	};},

_jsfunc_main_9 : function ()
{
	g_mat_s = new Array(20 );
	for ( i = 0; i < 20 ; i++ ) {
	g_mat_s[i] = myMat_create();
	}},

_jsfunc_main_10 : function ($0)
{
	g_prg = null;
	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	var g_vs_text =
	"attribute vec3 position;\x0A" +
	"attribute vec4 color;\x0A" +
	"uniform   mat4 mvpMatrix;\x0A" +
	"varying   vec4 vColor;\x0A" +
	"\x0A" +
	"void main(void){\x0A" +
	"\x09vColor = color;\x0A" +
	"\x09gl_Position = mvpMatrix * vec4(position, 1.0);\x0A" +
	"}\x0A" ;
	var g_fs_text =
	"precision mediump float;\x0A" +
	"\x0A" +
	"varying vec4 vColor;\x0A" +
	"\x0A" +
	"void main(void){\x0A" +
	"\x09gl_FragColor = vColor;\x0A" +
	"}\x0A" ;
	function initShaders() {
	var p = gl.createProgram();
	var vs = gl.createShader(gl.VERTEX_SHADER);
	var fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(vs, g_vs_text);
	gl.shaderSource(fs, g_fs_text);
	gl.compileShader(vs);
	gl.compileShader(fs);
	gl.attachShader(p, vs);
	gl.attachShader(p, fs);
	gl.linkProgram(p);
	gl.useProgram(p);
	g_prg = p;
	}
	create_vbo2_core = function(f32array, usage) {
	var vbo = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, f32array, usage);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	return vbo;
	};
	create_ibo2_core = function(i16array, usage) {
	var ibo = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, i16array, usage);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
	return ibo;
	};
	create_vbo2_static = function(f32array) {
	return create_vbo2_core( f32array, gl.STATIC_DRAW );
	};
	create_vbo2_dynamic = function(f32array) {
	return create_vbo2_core( f32array, gl.DYNAMIC_DRAW );
	};
	create_ibo2_static = function(i16array) {
	return create_ibo2_core( i16array, gl.STATIC_DRAW );
	};
	create_ibo2_dynamic = function(i16array) {
	return create_ibo2_core( i16array, gl.DYNAMIC_DRAW );
	};
	set_attribute = function(vbo, locAtt, numElemPerVertex, ofs) {
	gl.bindBuffer(
	gl.ARRAY_BUFFER,
	vbo
	);
	gl.enableVertexAttribArray(locAtt);
	gl.vertexAttribPointer(
	locAtt,
	numElemPerVertex,
	gl.FLOAT,
	false,
	0,
	ofs
	);
	};
	set_multiple_attribute_s = function(vbo_s, locAtt_s, attS_s) {
	for (var i in vbo_s){
	set_attribute( vbo_s[i], locAtt_s[i], attS_s[i], 0);
	}
	};
	initShaders();},

_jsfunc_main_11 : function ($0)
{
	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	var prg = g_prg;
	g_locAttCol = gl.getAttribLocation(prg, "color");
	g_uniLocation = gl.getUniformLocation(prg, "mvpMatrix");
	g_numElemPerAttCol = 4;},

_jsfunc_main_12 : function ($0)
{
	var color_array_addr = $0;
	var buffer = g_memory.buffer;
	g_js_color_array = new Float32Array(
	buffer,
	color_array_addr,
	4 * ( 4 + ( 16 + 2 ) + 32 + ( ( 4 + ( 16 + 2 ) ) + 32 ) )
	);},

_jsfunc_main_13 : function ($0)
{
	var idxCanvas_wgl = $0;
	var gl = g_ctx_s[idxCanvas_wgl];
	g_my_col_vbo = create_vbo2_static(g_js_color_array);
	set_attribute( g_my_col_vbo, g_locAttCol, g_numElemPerAttCol, 0);
	function create_vbo(data){
	var vbo = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	return vbo;
	}
	var racket_points = [
	50 , 10 , 0.0,
	-50 , 10 , 0.0,
	50 , -10 , 0.0,
	-50 , -10 , 0.0
	];
	var court_points = [
	0 , 0 , 0,
	0 , ( 490 - 1 ) , 0,
	( 700 - 1 ) , ( 490 - 1 ) , 0,
	( 700 - 1 ) , 0 , 0
	];
	var ball_points = new Array( ( 16 + 2 ) * 3 );
	ball_points[0] = 0;
	ball_points[1] = 0;
	ball_points[2] = 0;
	{
	var rad_step = 2 * Math.PI / 16 ;
	var rad = 0;
	var idx = 3;
	for ( var i = 0; i < 16 + 1; i++ ) {
	ball_points[idx + 0] = 15 * Math.cos(rad);
	ball_points[idx + 1] = - 15 * Math.sin(rad);
	ball_points[idx + 2] = 0;
	rad += rad_step;
	idx += 3;
	}
	}
	var touch_circle_points = new Array( 32 * 3 );
	{
	var rad_step = 2 * Math.PI / 32 ;
	var rad = 0;
	var idx = 0;
	for ( var i = 0; i < 32 ; i++ ) {
	touch_circle_points[idx + 0] = 100 * Math.cos(rad);
	touch_circle_points[idx + 1] = - 100 * Math.sin(rad);
	touch_circle_points[idx + 2] = 0;
	rad += rad_step;
	idx += 3;
	}
	}
	g_vboRacket = create_vbo(racket_points);
	g_vboBall = create_vbo(ball_points);
	g_vboTouchCircle = create_vbo(touch_circle_points);
	g_vboCourt = create_vbo(court_points);},

_jsfunc_main_14 : function ()
{
	function make_node_wav(node, sec)
	{
	if ( node >= 96 ) {
	return;
	}
	var Hz = 11025;
	var wav_data = new Uint8Array( Math.floor(Hz * sec) + 100 );
	var header = "524946460000000057415645666D74201000000001000100112B0000112B0000010008006461746100000000";
	var half_len = header.length / 2;
	for ( fp = 0; fp < half_len; fp++ ) {
	wav_data[fp] = parseInt( header.substr( fp * 2, 2 ), 16 );
	}
	var freq_s = [4180, 4428, 4708, 4968, 5264, 5592, 5884, 6300, 6676, 6988, 7476, 7848];
	var octave = Math.floor( node / 12 );
	var freq = freq_s[node % 12] / (1<<(7-octave));
	var phase = Math.PI * 2.0 * (freq / Hz);
	var max_idx = Math.floor( Hz * sec );
	for ( t = 0; t < max_idx; t++ ){
	wav_data[fp++] = Math.floor( Math.sin( phase * t ) * 127 ) + 128;
	}
	setLittleEndian( wav_data, 4, fp - 8 );
	setLittleEndian( wav_data, 24, Hz );
	setLittleEndian( wav_data, 40, fp - 44);
	var str = "";
	for ( i = 0; i < fp; i++ ) {
	str += String.fromCharCode( wav_data[i] );
	}
	var audio = new Audio( "data:audio/wav;base64," + btoa(str) );
	audio.volume = 0.2;
	return audio;
	}
	function stop()
	{
	}
	function setLittleEndian(bytes, p, data)
	{
	bytes[p] = (data & 0xFF);
	bytes[p+1] = ((data >> 8) & 0xFF);
	bytes[p+2] = ((data >> 16) & 0xFF);
	bytes[p+3] = ((data >> 24) & 0xFF);
	}
	gjs_audio_do = make_node_wav(48, 0.3);
	gjs_audio_re = make_node_wav(50, 0.3);
	gjs_audio_mi = make_node_wav(52, 0.3);
	gjs_audio_fa = make_node_wav(53, 0.3);
	gjs_audio_so = make_node_wav(55, 0.3);
	gjs_audio_ra = make_node_wav(57, 0.3);
	gjs_audio_shi = make_node_wav(59, 0.3);
	gjs_audio_do2 = make_node_wav(60, 0.3);},

_jsfunc_main_15 : function ()
{
	function js_OnUpdate( timestamp ) {
	g_exports.c_OnUpdate();
	window.requestAnimationFrame( js_OnUpdate );
	}
	window.requestAnimationFrame( js_OnUpdate );},

// this is foot.js from here :
};



var		g_instance;
var		g_exports;
var		g_memory;		// global memory
var     HEAP8;			// g_memory Ç BYTE îzóÒÇ…ìäâeÇµÇΩÇ‡ÇÃ


var		g_wasm_stdout_buf	= "";




// g_memory.grow() Ç∑ÇÈÇ∆ g_memory Ç…ëŒâûÇµÇƒÇ¢ÇÈ ArrayBuffer ÇÕÅA
// detach Ç≥ÇÍÇƒÅAêVÇµÇ¢Ç‡ÇÃÇ…ïtÇØë÷Ç¶ÇÁÇÍÇƒÇµÇ‹Ç§ÇÃÇ≈ÅAHEAP8
// Ç»Ç«Ç…ìäâeÇµíºÇ≥Ç»ÇØÇÍÇŒÇ»ÇÁÇ»Ç¢ÅB
function _js_on_grow_memory() {
    var		buffer = g_memory.buffer;
    
	HEAP8	= new Uint8Array(buffer);
}


function GetLengthOfPointerString( pTop ) {
	var		ptr		= pTop;
	var		len		= 0;
	for ( ;; ) {
		var  code = HEAP8[ptr];
		if ( code == 0 ) {
			break;
		}
		ptr++;
		len++;
	}
	
	return	len;
}

//function Pointer_stringify( pTop ) {
//	var		ptr		= pTop;
//	var		str1	= "";
//	for ( ;; ) {
//		var  code = HEAP8[ptr];
//		if ( code == 0 ) {
//			break;
//		}
//		
//		str1	+= String.fromCharCode(code);
//		ptr++;
//	}
//	
//	return	str1;
//}


//function Pointer_stringify( pTop ) {
//	var		len			= GetLengthOfPointerString( pTop );
//	var		u8array		= new Uint8Array(HEAP8, pTop, len);
//	
//	var		decoder		= new TextDecoder("utf-8");
//	
//	// utf8 ÇÃBYTE îzóÒÇ©ÇÁ JS ÇÃ utf16 ï∂éöóÒÇçÏÇÈ :
//	var		decodedText = decoder.decode(u8array);
//	
//	return	decodedText;
//}


function Pointer_stringify( pTop ) {
	var		len			= GetLengthOfPointerString( pTop );
	var		u8array		= new Uint8Array(len);
	
	var		ptr		= pTop;
	for ( var cnt = 0; cnt < len; cnt++ ) {
		u8array[cnt]	= HEAP8[ptr];
		ptr++;
	}
	
	var		decoder		= new TextDecoder("utf-8");
	
	// utf8 ÇÃBYTE îzóÒÇ©ÇÁ JS ÇÃ utf16 ï∂éöóÒÇçÏÇÈ :
	var		decodedText = decoder.decode(u8array);
	
	return	decodedText;
}










var		imports = {};


/*
var opts = {
	initial : 2,
	maximum : 100
};
g_memory		= new WebAssembly.Memory(opts);
g_memory.initial = 2;
g_memory.maximum = 100;

console.log( opts );
*/



imports.env = {
	js_func: function(a, b) {
		alert( "a =" + String(a) + ", b=" + String(b) );
		
		return a + b;
	},
	
	js_ffunc: function(a) {
		alert( "a =" + String(a) );
	},
	
	js_alert : function(pTop) {
		var		str1	= Pointer_stringify( pTop );
		
		alert( str1 );
	},
	
	
	js_get_current_memory : function() {
	//	alert( "js_get_current_memory() is coming" );
		
		return	g_memory.buffer.byteLength / 65536;
	},
	
	js_grow_memory : function( numPageToGrow ) {
	//	alert( "js_grow_memory() is coming, numPageToGrow = " +
	//		   String(numPageToGrow) );
		
		var		last_num_pages		= g_memory.grow( numPageToGrow );
		
	//	alert( "js_grow_memory(), g_memory.grow() = " + String(last_num_pages) );
		
		// g_memory.grow() Ç∑ÇÈÇ∆ g_memory Ç…ëŒâûÇµÇƒÇ¢ÇÈ ArrayBuffer ÇÕÅA
		// detach Ç≥ÇÍÇƒÅAêVÇµÇ¢Ç‡ÇÃÇ…ïtÇØë÷Ç¶ÇÁÇÍÇƒÇµÇ‹Ç§ÇÃÇ≈ÅAHEAP8
		// Ç»Ç«Ç…ìäâeÇµíºÇ≥Ç»ÇØÇÍÇŒÇ»ÇÁÇ»Ç¢ÅB
		_js_on_grow_memory();
		
		
		return	last_num_pages;
	},
	
	// js_on_grow_memory : _js_on_grow_memory,
	
	
	putchar : function(code) {
		g_outarea.value			+= String.fromCharCode(code);
		
		g_outarea.scrollTop		= g_outarea.scrollHeight;
		
		return	code;
	},
	
	
	
};

var		env		= imports.env;

//env.memoryBase	= imports.memoryBase || 0;
//env.memory		= g_memory;
//env.tableBase		= imports.tableBase || 0;
//env.table			= table;



// merge import_func_s in env :
for (var key in import_func_s) {
	env[key] = import_func_s[key];
}

// console.log( env );


/*
	Request Headers
		Accept-Encoding: identity
	Ç…ÇµÇΩÇ¢ÅB
	
	XMLHttpRequest.setRequestHeader( "xxx", "yyy" );
*/
function get_filesize(url, callback) {
	var xhr = new XMLHttpRequest();
	
	xhr.open("HEAD", url, true); // Notice "HEAD" instead of "GET",
								 //  to get only the header
	
	// gzip Ç»Ç«Ç≈à≥èkÇÇπÇ∏Ç…ÅAÇªÇÃÇ‹Ç‹ÇÃÉtÉ@ÉCÉãÇÃÉTÉCÉYÇï‘ÇµÇƒÇ‡ÇÁÇ¢ÇΩÇ¢ :
	xhr.setRequestHeader( "Accept-Encoding", "identity" );
	
	// èÛë‘Ç™ïœâªÇµÇΩéûÇ…åƒÇ—èoÇ≥ÇÍÇÈä÷êîÇìoò^ÇµÇƒÇ®Ç≠ :
	xhr.onreadystatechange = function() {
		if (this.readyState == this.DONE) {
			// ÉRÅ[ÉãÉoÉbÉNä÷êîÇ…ÉoÉCÉgêîÇé¿à¯êîÇ…ÇµÇƒåƒÇ—èoÇ∑ :
			callback(parseInt(xhr.getResponseHeader("Content-Length")));
		}
	};
	
	// é¿ç€Ç… XHR Çî≠çsÇ∑ÇÈ :
	xhr.send();
}

function ya_aaa(size)
{
	console.log( "YA, From HEAD, the size of test.wasm is: "
				 + size + " bytes." );
	
	fetch("test.wasm")
	.then( response => response.arrayBuffer() )
	.then( buffer => WebAssembly.compile(buffer) )
	.then( module => WebAssembly.instantiate(module, imports) )
	.then( instance => {
		g_instance	= instance;
		g_exports	= instance.exports;
		g_memory	= g_exports.memory;
		
		// g_memory Ç…ëŒâûÇµÇƒÇ¢ÇÈ ArrayBuffer ÇÅAJS ÇÃ HEAP8[] îzóÒ
		// Ç…ìäâeÇ∑ÇÈ :
		_js_on_grow_memory();
		
		var		ret		= g_exports.start_from_js( 123, 456, 3.14 );
		
		//alert( "start_from_js() = " + String(ret) );
	});
}

/*
window.onload = function() {
	get_filesize( "test.wasm", ya_aaa );
}
*/


/*
	in:		bufOld		= êÃÇÃ ArrayBuffer
			sizeCopy	= êÃÇÃÉoÉbÉtÉ@Ç©ÇÁÉRÉsÅ[Ç∑ÇÈÉoÉCÉgêî
			sizeNew		= êVÇµÇ¢ ArrayBuffer ÇÃÉoÉCÉgêîÅB
	
	ÅEsizeNew >= sizeCopy
	ÅEsizeCopy >= (bufOld ÇÃÉTÉCÉY)
	
	ÇÃèåèÇñûÇΩÇ∑Ç‡ÇÃÇ∆Ç∑ÇÈÅBÇΩÇæÇµÅA
		sizeNew < (bufOld ÇÃÉTÉCÉY)
	Ç≈Ç†Ç¡ÇƒÇ‡ÇÊÇ¢ÅB
*/
function resizeArrBuf(bufOld, sizeCopy, sizeNew) {
	var		bufNew		= new ArrayBuffer(sizeNew);
	var		u8arrNew	= new Uint8Array(bufNew);
	var		u8arrOld	= new Uint8Array(bufOld, 0, sizeCopy);
	
	u8arrNew.set(u8arrOld);
	
	return	bufNew;
}

window.onload = function() {
//	console.log( "window.location.hostname=" + window.location.hostname );
	
	
	
//	var		outarea		= document.getElementById( "outarea" );
	
	var		sx		= 300;
	var		sy		= 70;
	var		wx		= window.innerWidth;
	var		wy		= window.innerHeight;
	
//	console.log( "window.parent.screen.height = " + window.parent.screen.height );
//	console.log( "window.parent.screen.width = " + window.parent.screen.width );
//	console.log( "window.innerWidth  = " + window.innerWidth );
//	console.log( "window.innerHeight = " + window.innerHeight );
	
	div1 = document.createElement('div');
	div1.style.border	= "2px solid #00FF00";
	div1.style.position	= "absolute";
	div1.style.left		= String((wx - sx) / 2) + "px";
	div1.style.top		= String((wy - sy) / 2) + "px";
	div1.style.width	= String(sx) + "px";
	div1.style.height	= String(sy) + "px";
	div1.style["background-color"]	= "#FFFFFF";
	div1.style.zIndex		= "100";		// ílÇ™è¨Ç≥Ç¢ÇŸÇ«å„ÇÎë§(âúÇÃï˚)Ç…Ç†ÇÈÇ±Ç∆Ç…Ç»ÇÈÅB
	document.body.appendChild( div1 );
	
	span1 = document.createElement('span');
	span1.style.height	= "16px";
	span1.innerHTML		= "NWSTK: Now loading a wasm module...";
	div1.appendChild( span1 );
	
	prgrs	= document.createElement('progress');
	prgrs.style.width	= "200px";
	prgrs.style.height	= "16px";
	div1.appendChild( prgrs );
	
	br1 = document.createElement('br');
	div1.appendChild( br1 );
	
	span2 = document.createElement('span');
	span2.style.height	= "16px";
	div1.appendChild( span2 );
	
	
	fetch("test.wasm")
	.then( async response => {
		// ëSÉoÉCÉgêî(îÒà≥èkÇÃèÍçáÇ…ÇÃÇ›ê≥ÇµÇ¢íl) :
		// Apache ÇÃ mod_gzip ÉÇÉWÉÖÅ[ÉãÇ≈ gzip à≥èkÇ≥ÇÍÇƒÇ¢ÇÈèÍçáÅAÇ±ÇÃílÇÕà≥èkå„ÇÃílÇ≈Ç†Ç¡ÇƒÅA
		// å≥ÇÃ *.wasm ÇÃÉTÉCÉYÇ≈ÇÕÇ»Ç¢ÅBÇ∆Ç±ÇÎÇ™ÅAreader.read() Ç≈ì«Ç›çûÇ‹ÇÍÇÈÉfÅ[É^ÇÕÅA
		// ìWäJå„ÇÃÉfÅ[É^Ç»ÇÃÇ≈ÅAå≥ÇÃ *.wasm ÇÃÉTÉCÉYÇ…Ç»Ç¡ÇƒÇµÇ‹Ç§ÅB
		// à≥èkëOÇÃÉfÅ[É^ÇÃÉTÉCÉYÇéÊìæÇ∑ÇÈï˚ñ@ÇÕå©Ç¬Ç©ÇÁÇ»Ç©Ç¡ÇΩÅB
		// Ç»Ç®ÅARequest-Header Ç… Accept-Encoding ÇéwíËÇ∑ÇÈÇ±Ç∆Ç‡ã÷é~Ç≥ÇÍÇƒÇ¢ÇÈÅB
		// Accept-Encoding ÇÕÅA"Forbidden Header Name" Ç≈Ç†ÇÈÅB
		// íçà”Ç™ïKóvÅB
		var			total	= Number.parseInt(response.headers.get("Content-Length"));
		
		console.log( `original total = ${total}` );
		
		/*
		for (var key of response.headers.keys()) {
			console.log( "response.headers.get(" + key + ")=" +
						  response.headers.get(key) );
		}
		*/
		
		var		cnt_enc	= response.headers.get("content-encoding");
		
		console.log( "cnt_enc=" + cnt_enc );
		
		
		
		prgrs.max		= total;
		prgrs.value		= 0;
		
		
		var		sizeBuf		= total;
		var		buffer		= new ArrayBuffer(total);
		var		u8arr		= new Uint8Array(buffer);
		
		let		sizeLoaded	= 0;		// éÛêMÇµÇΩÉoÉCÉgêî
		
		// è≠ÇµÇ∏Ç¬ì«Ç›çûÇÒÇ≈ ÉvÉçÉOÉåÉXÉoÅ[Ç∆ % ï\é¶Ç≈êiíªèÛãµÇï\é¶Ç∑ÇÈ :
		const	reader	= response.body.getReader();
		while ( true ) {
			const {done, value} = await reader.read();
			if (done) {
				if ( sizeLoaded != sizeBuf ) {
					// ÉoÉbÉtÉ@ÉTÉCÉYÇ∆ÉçÅ[ÉhÇµÇΩÉTÉCÉYÇ™àŸÇ»Ç¡ÇƒÇ¢ÇÈèÍçá :
					console.log( `At the end of fetch, final sizeLoaded = ${sizeLoaded}, ` );
					console.log( `  resize from ${sizeBuf} to ${sizeLoaded}` );
					
					buffer	= resizeArrBuf(buffer, sizeLoaded, sizeLoaded);
				}
				break;
			}
			// ì«ÇÒÇæÉfÅ[É^ÇÕÉoÉCÉiÉäÉfÅ[É^ÅiUint8ArrayÅjÇ≈ó^Ç¶ÇÁÇÍÇÈ :
			
			// ç°âÒÉçÅ[ÉhÇ≥ÇÍÇΩÉoÉCÉgêîÅiëùï™ílÅj :
			var		sizeAdd			= value.length;
			
			console.log( `sizeAdd = ${sizeAdd}` );
			
			// ÉoÉbÉtÉ@Ç…ïKóvÇ»ÉoÉCÉgêî :
			var		sizeNeedBuf		= sizeLoaded + sizeAdd;
			if ( sizeNeedBuf > total ) {
				// ÉoÉbÉtÉ@Ç™ë´ÇËÇ»Ç¢èÍçá(è≠ÇµëΩÇﬂÇ…ämï€ÇµÇƒÇ®Ç≠) :
				var			sizeNew		= sizeLoaded + sizeAdd * 3;
				console.log( `Resize ArrayBuffer from ${sizeBuf} to ${sizeNew}` );
				
				// ÉoÉbÉtÉ@ÇÉTÉCÉYïœçXÇµÇƒÇ®Ç≠ :
				// sizeLoaded = ÉRÉsÅ[Ç∑ÇÈÉoÉCÉgêîÅAsizeNew = êVÇµÇ¢ÉoÉbÉtÉ@ÇÃÉoÉCÉgêî :
				buffer	= resizeArrBuf(buffer, sizeLoaded, sizeNew);
				
				// ÉoÉbÉtÉ@ÇÃìäâeÇ‡êVÇµÇ¢ÉoÉbÉtÉ@ÇÃÇ‡ÇÃÇ…èCê≥ÇµÇƒÇ®Ç≠ :
				u8arr	= new Uint8Array(buffer);
				
				// ó\ëzÇ≥ÇÍÇÈç≈ëÂÉoÉCÉgêîÇ‡ìKìxÇ…ëùÇ‚ÇµÇƒÇ®Ç≠ :
				total		= sizeLoaded + sizeAdd * 2;
				// ÉvÉçÉOÉåÉXÉoÅ[ÇÃç≈ëÂílÇ‡èCê≥ÇµÇƒÇ®Ç≠ :
				prgrs.max	= total;
				
				console.log( `new total = ${total}` );
				
				sizeBuf		= sizeNew;
			}
			
			// value îzóÒÇ u8arr îzóÒÇÃ sizeLoaded ÇÃà íuÇ…ÉRÉsÅ[Ç∑ÇÈ :
			u8arr.set( value, sizeLoaded );
			
			// ì«Ç›çûÇÒÇæÉoÉCÉgêîÇêœéZÇµÇƒÇ®Ç≠ :
			sizeLoaded		+= sizeAdd;
			
			// ÉvÉçÉOÉåÉXÉoÅ[Ç…ílÇê›íËÇµÇƒÇ®Ç≠ :
			prgrs.value		= sizeLoaded;
			
			
			// 12.3 ÇÃÇÊÇ§Ç…è¨êîì_à»â∫ 1 åÖÇ‹Ç≈ï\é¶Ç∑ÇÈ :
			var		perc	= ((sizeLoaded * 100.0) / total).toFixed(1);
			
	//		console.log( `${perc}% : ${sizeLoaded} / ${total}` );
	//		console.log( `sizeAdd=${sizeAdd}` );
	//		console.log( `value=${value}` );
			
			span2.innerHTML	= `${perc}% :` + sizeLoaded.toLocaleString() + " / " + total.toLocaleString();
		}
		
		// ÉvÉçÉOÉåÉXÉoÅ[ÇàÕÇ¡ÇƒÇ¢ÇÈ div óvëfëSëÃÇçÌèúÇµÇƒÇ®Ç≠ :
		document.body.removeChild( div1 );
		
		
		return	buffer;
	})
	.then( buffer => WebAssembly.compile(buffer) )
	.then( module => WebAssembly.instantiate(module, imports) )
	.then( instance => {
		g_instance	= instance;
		g_exports	= instance.exports;
		g_memory	= g_exports.memory;
		
		// g_memory Ç…ëŒâûÇµÇƒÇ¢ÇÈ ArrayBuffer ÇÅAJS ÇÃ HEAP8[] îzóÒ
		// Ç…ìäâeÇ∑ÇÈ :
		_js_on_grow_memory();
		
		var		ret		= g_exports.start_from_js( 123, 456, 3.14 );
		
		// alert( "start_from_js() = " + String(ret) );
	});
};
