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

_jsfunc_Wnd_1 : function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
{
	var idxCanvas = $0;
	var idxParent = $1;
	var bNcChild = $2;
	var x = $3;
	var y = $4;
	var sx = $5;
	var sy = $6;
	var client_org_x = $7;
	var client_org_y = $8;
	var client_sx = $9;
	var client_sy = $10;
	var zIndex = $11;
	var border_width = $12;
	var div_parent;
	if ( idxParent == ( - 1 ) ) {
	div_parent = document.body;
	}
	else {
	if ( bNcChild ) {
	div_parent = g_whole_div_s[idxParent];
	}
	else {
	div_parent = g_client_div_s[idxParent];
	}
	}
	var whole_div = document.createElement("div");
	whole_div.width = String(sx);
	whole_div.height = String(sy);
	whole_div.style.border = "0px solid #0080FF";
	whole_div.style.overflow = "hidden";
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

_jsfunc_Wnd_2 : function ($0, $1, $2)
{
	var idxCanvas = $0;
	var x = $1;
	var y = $2;
	var whole_div = g_whole_div_s[idxCanvas];
	whole_div.style.left = String(x) + "px";
	whole_div.style.top = String(y) + "px";},

_jsfunc_Wnd_3 : function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
{
	var idxCanvas = $0;
	var x = $1;
	var y = $2;
	var sx = $3;
	var sy = $4;
	var client_sx = $5;
	var client_sy = $6;
	var bClientPosChanged = $7;
	var client_org_x = $8;
	var client_org_y = $9;
	var idxCanvas_wgl = $10;
	var whole_div = g_whole_div_s[idxCanvas];
	var canvas = g_canvas_s[idxCanvas];
	var client_div = g_client_div_s[idxCanvas];
	whole_div.width = String(sx);
	whole_div.height = String(sy);
	whole_div.style.left = String(x) + "px";
	whole_div.style.top = String(y) + "px";
	whole_div.style.width = String(sx) + "px";
	whole_div.style.height = String(sy) + "px";
	if ( idxCanvas_wgl == ( - 1 ) ) {
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
	}
	if ( bClientPosChanged ) {
	client_div.style.left = String(client_org_x) + "px";
	client_div.style.top = String(client_org_y) + "px";
	}},

_jsfunc_Wnd_4 : function ()
{
	console.log( "CWnd::OnLButtonDown(), call wasm_UnfocusHiddenInputTag()" );},

_jsfunc_Wnd_5 : function ($0)
{
	var ctx = g_ctx_s[$0];
	ctx.save();},

_jsfunc_Wnd_6 : function ($0)
{
	var ctx = g_ctx_s[$0];
	ctx.restore();},

_jsfunc_Wnd_7 : function ($0)
{
	var idxCanvas = $0;
	var whole_div = g_whole_div_s[idxCanvas];
	whole_div.parentNode.removeChild(whole_div);
	g_whole_div_s[idxCanvas] = 0;
	g_canvas_s[idxCanvas] = 0;
	g_client_div_s[idxCanvas] = 0;
	g_ctx_s[idxCanvas] = 0;
	return 1;},

_jsfunc_Wnd_8 : function ($0, $1)
{
	var pTimer = $0;
	var millisec = $1;
	var js_OnTimer = function() {
	var rr = g_exports.wa_OnTimer( pTimer );
	};
	return setInterval( js_OnTimer, millisec );},

_jsfunc_Wnd_9 : function ($0)
{
	var idTimer = $0;
	clearInterval( idTimer );},

_jsfunc_Wnd_10 : function ($0, $1, $2, $3)
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

_jsfunc_DC_5 : function ($0, $1, $2)
{
	let ctx = g_ctx_s[$0];
	let str = Pointer_stringify_with_len($1, $2);
	gjs_text_measure_elm.style.font = g_strFont_s[$0];
	ctx.font = g_strFont_s[$0];
	gjs_text_measure_elm.textContent = str;
	let sx = ctx.measureText(str).width;
	_gjs_nwsGetTextExtent_sy = gjs_text_measure_elm.clientHeight;
	return sx;},

_jsfunc_DC_6 : function ()
{
	return _gjs_nwsGetTextExtent_sy;},

_jsfunc_DC_7 : function ($0, $1, $2, $3, $4, $5)
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

_jsfunc_DC_8 : function ($0, $1)
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
	console.log( "file_input_tag.onclick() has come. " );
	}
	file_input_tag.onblur = function(event) {
	console.log( "file_input_tag.onblur() has come. " );
	}
	file_input_tag.onfocus = function(event) {
	console.log( "file_input_tag.onfocus() has come. " );
	}
	document.body.onfocus = function(event) {
	console.log( "document.body.onfocus() has come." );
	}
	document.body.onblur = function(event) {
	console.log( "document.body.onblur() has come." );
	}
	file_input_tag.onchange = function(event) {
	console.log( "file_input_tag.onchange() has come. " );
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

_jsfunc_TopWnd_7 : function ($0, $1)
{
	var idxCanvas = $0;
	var zIndex = $1;
	var whole_div = g_whole_div_s[idxCanvas];
	whole_div.style.zIndex = String(zIndex);},

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
	gjs_text_measure_elm = document.createElement("div");
	gjs_text_measure_elm.style["white-space"] = "nowrap";
	gjs_text_measure_elm.style.display = "inline-block";
	gjs_text_measure_elm.style.border = "1px solid #00FF00";
	gjs_text_measure_elm.style.position = "absolute";
	gjs_text_measure_elm.style.left = "100000px";
	gjs_text_measure_elm.style.top = "0px";
	gjs_text_measure_elm.style.visibility = "hidden";
	document.body.appendChild(gjs_text_measure_elm);},

_jsfunc_NewEntry_4 : function ()
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

_jsfunc_NewEntry_5 : function ()
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

_jsfunc_NewEntry_6 : function ()
{
	g_outarea = document.getElementById( "outarea" );
	g_js_img_hash = {};},

_jsfunc_NewEntry_7 : function ()
{
	g_scaling = 1.0;},

_jsfunc_NewEntry_8 : function ()
{
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "normal normal 32px monospace";
	var sxTextX = ctx.measureText("X").width;
	js_MyPrint( "font_check, width of font 'X' = " + sxTextX );
	js_MyPrint( "sxTextX / 16.0 = " + (sxTextX / 16.0) );},

_jsfunc_NewEntry_9 : function ()
{
	g_canvas_s = new Array(200 );
	g_whole_div_s = new Array(200 );
	g_ctx_s = new Array(200 );
	g_client_div_s = new Array(200 );
	g_strFont_s = new Array(200 );},

_jsfunc_NewEntry_10 : function ()
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
	document.addEventListener( 'dblclick', js_dblclick, {passive: false} );
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
	document.addEventListener( 'wheel',
	js_OnWheel,
	{
	once: false,
	passive: false,
	capture: true
	}
	);
	window.onresize = js_OnResizeSandbox;
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
	function js_dblclick(e) {
	var bProcessed = g_exports.c_dblclick(
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
	}
	function js_OnWheel(e) {
	var bProcessed = g_exports.c_OnWheel(
	e.deltaY
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_OnResizeSandbox(e) {
	g_exports.c_OnResizeSandbox();
	}},

_jsfunc_NewEntry_11 : function ()
{
	count = 0;
	function js_OnMainTimer() {
	var rr = g_exports.wa_OnMainTimer(1);
	}
	setInterval(js_OnMainTimer, 20);},

_jsfunc_NewEntry_12 : function ($0)
{
	var bEnable = $0;
	if ( gjs_bTouchMarkEnable ) {
	js_set_raw_touch_mark_visibility( 0 );
	}
	else {
	}
	gjs_bTouchMarkEnable = bEnable;},

_jsfunc_NewEntry_13 : function ()
{
	g_bComposStarted = 1;},

_jsfunc_NewEntry_14 : function ()
{
	g_bComposStarted = 0;},

_jsfunc_NewEntry_15 : function ($0)
{
	return g_js_ime_unicode_s[$0];},

_jsfunc_NewEntry_16 : function ()
{
	js_set_delay_input_tag_caret_goto_btm();},

_jsfunc_NewEntry_17 : function ($0)
{
	g_bIME = $0;},

_jsfunc_NewEntry_18 : function ()
{
	g_input_tag.style["background-color"] = "#ffffff";
	g_input_tag.style.left = "220px";},

_jsfunc_NewEntry_19 : function ()
{
	g_input_tag.style.left = "-10000px";},

_jsfunc_NewEntry_20 : function ($0)
{
	var str1 = Pointer_stringify($0);
	g_outarea.value += str1;
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_21 : function ($0)
{
	g_outarea.value += String($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_22 : function ($0)
{
	g_outarea.value += String.fromCharCode($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_23 : function ($0, $1)
{
	alert( Pointer_stringify($0) + String($1) );},

_jsfunc_NewEntry_24 : function ()
{
	alert( "abort() is called." );},

_jsfunc_NewEntry_25 : function ($0, $1)
{
	js_MyPrint( String($0) + ", " + Pointer_stringify($1) );},

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


/*
	pTop Ç©ÇÁÇÃ 0 èIí[ï∂éöóÒÇÃí∑Ç≥ÇÉoÉCÉgíPà Ç≈êîÇ¶ÇÈÅB
	ï‘Ç≥ÇÍÇÈí∑Ç≥Ç∆ÇµÇƒÇÕ 0 èIí[ï∂éöóÒÇÕä‹Ç‹Ç»Ç¢ÅB
*/
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


/*
	pTop Ç©ÇÁÇ UTF8 ÇÃ 0 èIí[ï∂éöóÒÇ∆Ç›Ç»ÇµÇƒ JS ÇÃï∂éöóÒÇ…íºÇ∑ÅB
*/
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

/*
	pTop Ç©ÇÁÅAlen ÉoÉCÉgÇÃïîï™Ç UTF8 ÇÃï∂éöóÒÇ∆Ç›Ç»ÇµÇƒ JS ÇÃï∂éöóÒÇ…íºÇ∑ÅB
*/
function Pointer_stringify_with_len( pTop, len ) {
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


var opts = {
	initial : 2,		// èâä˙óeó : 64KB íPà 
	//initial : 500,	// èâä˙óeó : 64KB íPà 
	//initial : 0,		// èâä˙óeó : 64KB íPà 
	
	//maximum : 100		// ç≈ëÂóeó : 64KB íPà 
	maximum : 1000		// ç≈ëÂóeó : 64KB íPà 
};
//console.log( opts );
g_memory		= new WebAssembly.Memory(opts);
g_memory.initial = 2;
g_memory.maximum = 1000;


// gjs_cntGetCurMemory		= 0;


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
		/*
		if( gjs_cntGetCurMemory == 0 ) {
			alert( "js_get_current_memory() is coming, g_memory.buffer.byteLength=" +
				   g_memory.buffer.byteLength + ", pages=" +
				   (g_memory.buffer.byteLength / 65536)
				 );
			
			gjs_cntGetCurMemory++;
		}
		*/
		
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
	
	memory: g_memory
	
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
	console.log( "YA, From HEAD, the size of main.wasm is: "
				 + size + " bytes." );
	
	fetch("main.wasm")
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
	get_filesize( "main.wasm", ya_aaa );
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
	
	
	fetch("main.wasm")
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
	//	g_memory	= g_exports.memory;
		
		
		// 2020/02/25, for debug :
		console.log( g_exports );
		
		
		// g_memory Ç…ëŒâûÇµÇƒÇ¢ÇÈ ArrayBuffer ÇÅAJS ÇÃ HEAP8[] îzóÒ
		// Ç…ìäâeÇ∑ÇÈ :
		_js_on_grow_memory();
		
		var		ret		= g_exports.start_from_js( 123, 456, 3.14 );
		
		// alert( "start_from_js() = " + String(ret) );
	});
};
