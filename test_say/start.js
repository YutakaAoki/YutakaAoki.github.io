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

_jsfunc_time_1 : function ()
{
	return Date.now();},

_jsfunc_time_2 : function ()
{
	return Date.now();},

_jsfunc_MyStdcLib_1 : function ($0)
{
	g_wasm_stdout_buf += String.fromCharCode($0);},

_jsfunc_basic_math_1 : function ($0)
{
	return Math.floor( $0 );},

_jsfunc_basic_math_2 : function ($0)
{
	return Math.ceil( $0 );},

_jsfunc_basic_math_3 : function ($0)
{
	return Math.exp( $0 );},

_jsfunc_basic_math_4 : function ($0)
{
	return Math.log( $0 );},

_jsfunc_basic_math_5 : function ($0)
{
	return Math.log10( $0 );},

_jsfunc_basic_math_6 : function ($0, $1)
{
	return Math.pow( $0, $1 );},

_jsfunc_basic_math_7 : function ($0)
{
	return Math.sin( $0 );},

_jsfunc_basic_math_8 : function ($0)
{
	return Math.cos( $0 );},

_jsfunc_basic_math_9 : function ($0)
{
	return Math.tan( $0 );},

_jsfunc_basic_math_10 : function ($0)
{
	return Math.atan( $0 );},

_jsfunc_basic_math_11 : function ($0, $1)
{
	return Math.atan2( $0, $1 );},

_jsfunc_basic_math_12 : function ($0)
{
	return Math.sqrt( $0 );},

_jsfunc_basic_math_13 : function ($0)
{
	return Math.sqrt( $0 );},

_jsfunc_Wnd_1 : function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
{
	var idxCanvas = $0;
	var idxParent = $1;
	var bInClient = $2;
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
	if ( bInClient ) {
	div_parent = g_client_div_s[idxParent];
	}
	else {
	div_parent = g_whole_div_s[idxParent];
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

_jsfunc_Wnd_3 : function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
{
	var idxCanvas = $0;
	var x = $1;
	var y = $2;
	var sx = $3;
	var sy = $4;
	var client_sx = $5;
	var client_sy = $6;
	var bClientPosChanged = $7;
	var bToCanvasChange = $8;
	var client_org_x = $9;
	var client_org_y = $10;
	var idxCanvas_wgl = $11;
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
	if ( bToCanvasChange ) {
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.border = "0px solid #008080";
	canvas.style.position = "absolute";
	canvas.style.left = "0px";
	canvas.style.top = "0px";
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	}
	client_div.style.width = String(client_sx) + "px";
	client_div.style.height = String(client_sy) + "px";
	}
	else {
	if ( bToCanvasChange ) {
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	}
	client_div.style.width = String(client_sx) + "px";
	client_div.style.height = String(client_sy) + "px";
	if ( bToCanvasChange ) {
	var canvas_wgl = g_canvas_s[idxCanvas_wgl];
	canvas_wgl.width = String(client_sx);
	canvas_wgl.height = String(client_sy);
	canvas_wgl.style.width = String(client_sx) + "px";
	canvas_wgl.style.height = String(client_sy) + "px";
	}
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
	g_ctx_s[idxCanvas] = 0;},

_jsfunc_Wnd_8 : function ()
{
	js_SetMouseHandlers( true );
	js_enable_events_within_iframes( false );},

_jsfunc_Wnd_9 : function ()
{
	js_SetMouseHandlers( false );
	js_enable_events_within_iframes( true );},

_jsfunc_Wnd_10 : function ($0, $1, $2)
{
	var pTimer = $0;
	var millisec = $1;
	var bMultiTime = $2;
	var js_OnTimer = function() {
	var rr = g_exports.wa_OnTimer( pTimer );
	};
	if ( bMultiTime ) {
	return setInterval( js_OnTimer, millisec );
	}
	else {
	return setTimeout( js_OnTimer, millisec );
	}},

_jsfunc_Wnd_11 : function ($0)
{
	var idTimer = $0;
	clearInterval( idTimer );},

_jsfunc_Wnd_12 : function ($0)
{
	var idTimer = $0;
	clearTimeout( idTimer );},

_jsfunc_Wnd_13 : function ($0, $1, $2, $3)
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

_jsfunc_Wnd_14 : function ($0, $1)
{
	let gl = g_ctx_s[$0];
	let idxImg1 = $1;
	let img_pack1 = g_js_img_hash[idxImg1];
	let img1 = img_pack1.m_img;
	gl.texImage2D(
	gl.TEXTURE_2D,
	0,
	gl.RGBA,
	gl.RGBA,
	gl.UNSIGNED_BYTE,
	img1
	);},

_jsfunc_Wnd_15 : function ($0)
{
	let pWnd = $0;
	let js_OnAnimate = function( timestamp ) {
	g_exports.c_OnAnimate( pWnd );
	window.requestAnimationFrame( js_OnAnimate );
	}
	window.requestAnimationFrame( js_OnAnimate );},

_jsfunc_PrepDC_1 : function ($0, $1, $2, $3, $4)
{
	var ctx = g_ctx_s[$0];
	var org_x = $1;
	var org_y = $2;
	var sx = $3;
	var sy = $4;
	ctx.resetTransform();
	ctx.beginPath();
	ctx.rect(org_x, org_y, sx, sy);
	ctx.clip();},

_jsfunc_PrepDC_2 : function ($0, $1, $2)
{
	var ctx = g_ctx_s[$0];
	var org_x = $1;
	var org_y = $2;
	ctx.resetTransform();
	ctx.translate( org_x, org_y );},

_jsfunc_Caret_1 : function ($0)
{
	let numParts = $0;
	gjs_saved_caret_back_imgData_s = new Array(numParts);},

_jsfunc_Caret_2 : function ($0, $1, $2, $3, $4, $5)
{
	let ctx = g_ctx_s[$0];
	let x1Part = $1;
	let y1Part = $2;
	let sxPart = $3;
	let syPart = $4;
	let idxPart = $5;
	let imgData = ctx.getImageData(
	x1Part,
	y1Part,
	sxPart,
	syPart
	);
	saved_caret_back_imgData = new ImageData(
	new Uint8ClampedArray(imgData.data),
	imgData.width,
	imgData.height
	);
	gjs_saved_caret_back_imgData_s[idxPart] = saved_caret_back_imgData;
	let pixels = imgData.data;
	let idxMax = sxPart * syPart * 4;
	for ( let idx = 0; idx < idxMax; idx += 4 ) {
	if ( pixels[idx + 3] == 0 ) {
	pixels[idx] = 0 ;
	pixels[idx + 1] = 0 ;
	pixels[idx + 2] = 0 ;
	pixels[idx + 3] = 255 ;
	}
	else {
	pixels[idx] = 255 - pixels[idx];
	pixels[idx + 1] = 255 - pixels[idx + 1];
	pixels[idx + 2] = 255 - pixels[idx + 2];
	}
	}
	ctx.putImageData(
	imgData,
	x1Part,
	y1Part
	);},

_jsfunc_Caret_3 : function ($0, $1, $2, $3, $4, $5)
{
	let ctx = g_ctx_s[$0];
	let x1Part = $1;
	let y1Part = $2;
	let sxPart = $3;
	let syPart = $4;
	let idxPart = $5;
	let saved_caret_back_imgData = gjs_saved_caret_back_imgData_s[idxPart];
	ctx.putImageData(
	saved_caret_back_imgData,
	x1Part,
	y1Part
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
	document.body.style.cursor = "move";},

_jsfunc_NexFuncs_8 : function ()
{
	document.body.style.cursor = "default";},

_jsfunc_NexFuncs_9 : function ()
{
	js_move_touch_mark(gjs_touch_mark_x, gjs_touch_mark_y);
	js_set_raw_touch_mark_visibility( 1 );},

_jsfunc_NexFuncs_10 : function ()
{
	document.onkeydown = null;
	document.onkeyup = null;
	document.onkeypress = null;
	gjs_input_tag.focus();},

_jsfunc_NexFuncs_11 : function ()
{
	document.onkeydown = js_keydown_whole;
	document.onkeyup = js_keyup_whole;
	document.onkeypress = js_keypress_whole;},

_jsfunc_NexFuncs_12 : function ()
{
	document.onkeydown = js_keydown_whole;
	document.onkeyup = js_keyup_whole;
	document.onkeypress = null;},

_jsfunc_NexFuncs_13 : function ()
{
	return window.innerWidth;},

_jsfunc_NexFuncs_14 : function ()
{
	return window.innerHeight;},

_jsfunc_DC_1 : function ($0, $1, $2, $3, $4, $5, $6)
{
	let str = Pointer_stringify($5);
	let ctx = g_ctx_s[$0];
	ctx.beginPath();
	ctx.lineWidth = $6;
	ctx.imageSmoothingEnabled = false;
	ctx.moveTo($1, $2);
	ctx.lineTo($3, $4);
	ctx.strokeStyle = str;
	ctx.stroke();
	return 0;},

_jsfunc_DC_2 : function ($0, $1, $2, $3, $4)
{
	let ctx = g_ctx_s[$0];
	ctx.globalCompositeOperation = "copy";
	ctx.fillStyle = "#00000000"
	ctx.fillRect($1, $2, $3, $4);
	ctx.globalCompositeOperation = "source-over";
	return 0;},

_jsfunc_DC_3 : function ($0, $1, $2, $3, $4, $5)
{
	let ctx = g_ctx_s[$0];
	ctx.globalCompositeOperation = "source-over";
	ctx.fillStyle = Pointer_stringify($5);
	ctx.fillRect($1, $2, $3, $4);
	return 0;},

_jsfunc_DC_4 : function ($0, $1)
{
	let ctx = g_ctx_s[$0];
	gjs_strTextColor = Pointer_stringify($1);},

_jsfunc_DC_5 : function ($0, $1, $2, $3, $4)
{
	let ctx = g_ctx_s[$0];
	let objDc = gjs_objs[$1];
	let str = Pointer_stringify($4);
	ctx.fillStyle = gjs_strTextColor;
	ctx.textBaseline = "top";
	ctx.font = objDc.strFont;
	ctx.fillText(str, $2, $3);},

_jsfunc_DC_6 : function ($0, $1, $2, $3, $4)
{
	let ctx = g_ctx_s[$0];
	let objDc = gjs_objs[$1];
	let str = String.fromCodePoint($4);
	ctx.fillStyle = gjs_strTextColor;
	ctx.textBaseline = "top";
	ctx.font = objDc.strFont;
	ctx.fillText(str, $2, $3);},

_jsfunc_DC_7 : function ($0, $1, $2, $3)
{
	let ctx = g_ctx_s[$0];
	let objDc = gjs_objs[$1];
	let str = Pointer_stringify_with_len($2, $3);
	gjs_text_measure_elm.style.font = objDc.strFont;
	ctx.font = objDc.strFont;
	gjs_text_measure_elm.textContent = str;
	let sx = ctx.measureText(str).width;
	_gjs_nwsGetTextExtent_sy = gjs_text_measure_elm.clientHeight;
	return sx;},

_jsfunc_DC_8 : function ()
{
	return _gjs_nwsGetTextExtent_sy;},

_jsfunc_DC_9 : function ($0, $1, $2)
{
	let ctx = g_ctx_s[$0];
	let str = Pointer_stringify_with_len($1, $2);
	return ctx.measureText(str).width;},

_jsfunc_DC_10 : function ($0, $1, $2, $3, $4, $5)
{
	let ctx = g_ctx_s[$0];
	let x = $1;
	let y = $2;
	let radius = $3;
	let strCol = Pointer_stringify($4);
	ctx.beginPath();
	ctx.lineWidth = $5;
	ctx.strokeStyle = strCol;
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.stroke();},

_jsfunc_DC_11 : function ($0, $1, $2)
{
	let idxCanvas = $0;
	let objDc = gjs_objs[$1];
	let sizeFont = $2;
	let sxFont = sizeFont / 2.0;
	let ctx = g_ctx_s[idxCanvas];
	{
	let font_name = "MS Gothic";
	ctx.font = "normal normal " + String(sizeFont) + "px " + font_name;
	let sxTextX = ctx.measureText("X").width;
	let ratio = sxTextX / sxFont;
	let strFont = "normal normal " + String( sizeFont / ratio ) + "px " + font_name;
	g_strFont_s[idxCanvas] = strFont;
	objDc.strFont = strFont;
	ctx.font = strFont;
	}
	return 1;},

_jsfunc_DC_12 : function ()
{
	let objDc = new Object();
	objDc.strFont = "non_init_font";
	return js_MemorizeJsObject(objDc);},

_jsfunc_BaseWnd_1 : function ()
{
	if ( document.activeElement != null ) {
	document.activeElement.blur();
	}},

_jsfunc_BaseWnd_2 : function ($0, $1)
{
	var idxCanvas = $0;
	let visible = $1;
	var whole_div = g_whole_div_s[idxCanvas];
	if ( visible == 0 ) {
	whole_div.style.visibility = "invisible";
	}
	else if ( visible == 1 ) {
	whole_div.style.visibility = "visible";
	}},

_jsfunc_MakeClipRegion_1 : function ($0, $1, $2, $3, $4)
{
	var ctx = g_ctx_s[$0];
	var x1 = $1;
	var y1 = $2;
	var sx = $3;
	var sy = $4;
	ctx.beginPath();
	ctx.rect(x1, y1, sx, sy);
	ctx.clip();},

_jsfunc_MakeClipRegion_2 : function ($0, $1, $2, $3, $4)
{
	var ctx = g_ctx_s[$0];
	var x1 = $1;
	var y1 = $2;
	var sx = $3;
	var sy = $4;
	ctx.beginPath();
	ctx.rect(0, 0, 2000, y1);
	ctx.rect(0, y1 + sy, 2000, 2000);
	ctx.rect(0, y1, x1, sy);
	ctx.rect(x1 + sx, y1, 2000, sy);
	ctx.clip();},

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
	console.log( "CalcelToOpen() γ«ζ₯γ." );
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

_jsfunc_EditWnd_1 : function ($0, $1, $2)
{
	let objDc = gjs_objs[$0];
	gjs_input_tag_x = $1;
	gjs_input_tag_y = $2 - 4;
	if ( g_bIME ) {
	gjs_input_tag_div.style.left = String(gjs_input_tag_x) + "px";
	gjs_input_tag_div.style.top = String(gjs_input_tag_y) + "px";
	gjs_input_tag_div.style.width = String(gjs_input_contents_sx + 32) + "px";
	gjs_input_tag_div.style.height = String(gjs_input_contents_sy + 6) + "px";
	if ( gjs_input_contents_sx == 0 ) {
	gjs_input_tag.style.left = String(gjs_input_tag_hide_x) + "px";
	}
	else {
	gjs_input_tag.style.left = String(gjs_input_tag_default_x) + "px";
	}
	}
	gjs_input_tag.style.font = objDc.strFont;
	gjs_text_measure_elm.style.font = gjs_input_tag.style.font;
	gjs_text_measure_elm.textContent = "Xfy";
	gjs_input_contents_sy_0 = gjs_text_measure_elm.clientHeight;},

_jsfunc_MsgQueue_1 : function ($0)
{
	let str = gjs_burst_char_arr.shift();
	let len = str.length;
	let pszUtf16 = $0;
	let ptr = pszUtf16;
	for ( let i = 1; i < len; i++ ) {
	let char_code = str.charCodeAt(i);
	HEAP8[ptr] = char_code & 255;
	HEAP8[ptr + 1] = char_code >> 8;
	ptr += 2;
	}},

_jsfunc_Image_1 : function ($0, $1)
{
	let idxImg = $0;
	let szPath = Pointer_stringify($1);
	let img_pack = {};
	let img = new Image();
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

_jsfunc_Image_2 : function ($0)
{
	let idxImg = $0;
	let img_pack = g_js_img_hash[idxImg];
	let img = img_pack.m_img;
	return img.naturalWidth;},

_jsfunc_Image_3 : function ($0)
{
	let idxImg = $0;
	let img_pack = g_js_img_hash[idxImg];
	let img = img_pack.m_img;
	return img.naturalHeight;},

_jsfunc_Image_4 : function ($0)
{
	let idxImg = $0;
	let img_pack = g_js_img_hash[idxImg];
	let img = img_pack.m_img;
	return img.clientWidth;},

_jsfunc_Image_5 : function ($0)
{
	let idxImg = $0;
	let img_pack = g_js_img_hash[idxImg];
	let img = img_pack.m_img;
	return img.clientHeight;},

_jsfunc_Image_6 : function ($0, $1, $2, $3)
{
	let idxImg = $0;
	let img_pack = g_js_img_hash[idxImg];
	let img = img_pack.m_img;
	let ctx = g_ctx_s[$1];
	let canvas = g_canvas_s[$1];
	let x = $2;
	let y = $3;
	let sx = img.width;
	let sy = img.height;
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

_jsfunc_Image_7 : function ($0, $1, $2, $3, $4, $5)
{
	let idxImg = $0;
	let img_pack = g_js_img_hash[idxImg];
	let img = img_pack.m_img;
	let ctx = g_ctx_s[$1];
	let canvas = g_canvas_s[$1];
	let x = $2;
	let y = $3;
	let sx = $4;
	let sy = $5;
	ctx.drawImage(
	img,
	0,
	0,
	img.width,
	img.height,
	x,
	y,
	sx,
	sy
	);},

_jsfunc_Image_8 : function ($0, $1, $2, $3, $4, $5, $6, $7)
{
	let idxImg = $0;
	let img_pack = g_js_img_hash[idxImg];
	let img = img_pack.m_img;
	let ctx = g_ctx_s[$1];
	let canvas = g_canvas_s[$1];
	let dstX = $2;
	let dstY = $3;
	let srcX = $4;
	let srcY = $5;
	let srcSx = $6;
	let srcSy = $7;
	let sx = img.width;
	let sy = img.height;
	ctx.drawImage(
	img,
	srcX,
	srcY,
	srcSx,
	srcSy,
	dstX,
	dstY,
	srcSx,
	srcSy
	);},

_jsfunc_Image_9 : function ($0, $1, $2)
{
	let ctx = g_ctx_s[$0];
	let org_x = $1;
	let org_y = $2;
	ctx.resetTransform();
	ctx.translate( org_x, org_y );},

_jsfunc_Image_10 : function ($0, $1)
{
	let ctx = g_ctx_s[$0];
	let rad_x = $1;
	ctx.rotate( rad_x );},

_jsfunc_Image_11 : function ($0, $1, $2)
{
	let ctx = g_ctx_s[$0];
	ctx.translate( $1, $2 );},

_jsfunc_NwsOpenGl_1 : function ($0, $1)
{
	let gl = g_ctx_s[$0];
	gl.bindBuffer($1, null);},

_jsfunc_NwsOpenGl_2 : function ($0, $1, $2)
{
	let gl = g_ctx_s[$0];
	let shader = gjs_objs[$1];
	let text = Pointer_stringify($2);
	gl.shaderSource(shader, text);},

_jsfunc_NwsOpenGl_3 : function ($0)
{
	let idxCanvas_wgl = $0;
	let gl = g_ctx_s[idxCanvas_wgl];
	let vbo = gl.createBuffer();
	return js_MemorizeJsObject(vbo);},

_jsfunc_NwsOpenGl_4 : function ($0)
{
	let gl = g_ctx_s[$0];
	let tex = gl.createTexture();
	return js_MemorizeJsObject(tex);},

_jsfunc_NwsOpenGl_5 : function ($0)
{
	let gl = g_ctx_s[$0];
	let verarr = gl.createVertexArray();
	return js_MemorizeJsObject(verarr);},

_jsfunc_NwsOpenGl_6 : function ($0, $1, $2, $3)
{
	let idxCanvas_wgl = $0;
	let locAttr = $1;
	let size = $2;
	let ofs = $3;
	let gl = g_ctx_s[idxCanvas_wgl];
	gl.vertexAttribPointer(locAttr, size, gl.FLOAT, false, 0, ofs);},

_jsfunc_NwsOpenGl_7 : function ($0)
{
	let gl = g_ctx_s[$0];
	let pgm = gl.createProgram();
	return js_MemorizeJsObject(pgm);},

_jsfunc_NwsOpenGl_8 : function ($0, $1)
{
	let gl = g_ctx_s[$0];
	let shader = gl.createShader($1);
	return js_MemorizeJsObject(shader);},

_jsfunc_NwsOpenGl_9 : function ($0, $1)
{
	let gl = g_ctx_s[$0];
	let shader = gjs_objs[$1];
	gl.compileShader(shader);
	let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	console.log( 'glCompileShader(), Shader compiled successfully: ', compiled );
	let compilationLog = gl.getShaderInfoLog(shader);
	console.log( 'glCompileShader(), Shader compiler log: ', compilationLog );},

_jsfunc_NwsOpenGl_10 : function ($0, $1, $2)
{
	let gl = g_ctx_s[$0];
	let pgm = gjs_objs[$1];
	let shader = gjs_objs[$2];
	gl.attachShader(pgm, shader);},

_jsfunc_NwsOpenGl_11 : function ($0, $1)
{
	let gl = g_ctx_s[$0];
	let pgm = gjs_objs[$1];
	gl.linkProgram(pgm);},

_jsfunc_NwsOpenGl_12 : function ($0, $1)
{
	let gl = g_ctx_s[$0];
	let pgm = gjs_objs[$1];
	gl.useProgram(pgm);},

_jsfunc_NwsOpenGl_13 : function ($0, $1, $2)
{
	let idxCanvas_wgl = $0;
	let pgm = gjs_objs[$1];
	let gl = g_ctx_s[idxCanvas_wgl];
	let name = Pointer_stringify($2);
	locAttr = gl.getAttribLocation(pgm, name);
	return locAttr;},

_jsfunc_NwsOpenGl_14 : function ($0, $1, $2)
{
	let gl = g_ctx_s[$0];
	let bufobj = gjs_objs[$2];
	gl.bindBuffer($1, bufobj);},

_jsfunc_NwsOpenGl_15 : function ($0, $1, $2, $3, $4)
{
	let idxCanvas_wgl = $0;
	let target = $1;
	let size = $2;
	let data = $3;
	let usage = $4;
	let gl = g_ctx_s[idxCanvas_wgl];
	let byteArr = new Uint8Array(g_memory.buffer, data, size);
	gl.bufferData(target, byteArr, usage);},

_jsfunc_NwsOpenGl_16 : function ($0, $1, $2, $3, $4)
{
	let idxCanvas_wgl = $0;
	let target = $1;
	let offset = $2;
	let size = $3;
	let data = $4;
	let gl = g_ctx_s[idxCanvas_wgl];
	let byteArr = new Uint8Array(g_memory.buffer, data, size);
	gl.bufferSubData(target, offset, byteArr);},

_jsfunc_NwsOpenGl_17 : function ($0, $1, $2, $3, $4)
{
	let gl = g_ctx_s[$0];
	let mode = $1;
	let count = $2;
	let type = $3;
	let indices = $4;
	gl.drawElements(
	mode,
	count,
	type,
	indices
	);},

_jsfunc_NwsOpenGl_18 : function ($0, $1)
{
	let idxCanvas_wgl = $0;
	let locAttr = $1;
	let gl = g_ctx_s[idxCanvas_wgl];
	gl.enableVertexAttribArray( locAttr );},

_jsfunc_NwsOpenGl_19 : function ($0, $1)
{
	let idxCanvas_wgl = $0;
	let locAttr = $1;
	let gl = g_ctx_s[idxCanvas_wgl];
	gl.disableVertexAttribArray( locAttr );},

_jsfunc_NwsOpenGl_20 : function ($0, $1, $2, $3, $4, $5, $6)
{
	let idxCanvas_wgl = $0;
	let index = $1;
	let size = $2;
	let type = $3;
	let normalized = $4;
	let stride = $5;
	let ofs = $6;
	let gl = g_ctx_s[idxCanvas_wgl];
	gl.vertexAttribPointer(index, size, type, normalized, stride, ofs);},

_jsfunc_NwsOpenGl_21 : function ($0)
{
	gjs_obj_refcnts[$0]++;},

_jsfunc_NwsOpenGl_22 : function ($0)
{
	gjs_obj_refcnts[$0]++;},

_jsfunc_NewEntry_1 : function ()
{
	g_wasm_stdout_buf = "";},

_jsfunc_NewEntry_2 : function ()
{
	g_outarea.value += g_wasm_stdout_buf;
	g_outarea.scrollTop = g_outarea.scrollHeight;
	g_wasm_stdout_buf = "";},

_jsfunc_NewEntry_3 : function ($0, $1, $2, $3, $4, $5)
{
	let strCol = Pointer_stringify($4);
	js_genshi_line(
	_gjs_ctx_touchmark,
	$0,
	$1,
	$2,
	$3,
	strCol,
	$5
	);},

_jsfunc_NewEntry_4 : function ($0, $1, $2, $3, $4)
{
	let strCol = Pointer_stringify($3);
	js_genshi_circle(
	_gjs_ctx_touchmark,
	$0,
	$1,
	$2,
	strCol,
	$4
	);},

_jsfunc_NewEntry_5 : function ()
{
	g_log_cnt = 0;
	js_MyPrint = function( str ) {
	console.log( "" + g_log_cnt + " : " + str );
	g_log_cnt++;
	};
	g_bTouchSupported = 0 ;
	if ( window.ontouchstart === null ) {
	g_bTouchSupported = 1;
	}
	gjs_typeCursor = 0 ;
	js_MyPrint( "g_bTouchSupported=" + g_bTouchSupported );
	return g_bTouchSupported;},

_jsfunc_NewEntry_6 : function ($0, $1, $2)
{
	console.log( "start_from_js(), a=" + String($0) );
	console.log( "start_from_js(), b=" + String($1) );
	console.log( "start_from_js(), c=" + String($2) );},

_jsfunc_NewEntry_7 : function ()
{
	gjs_text_measure_elm = document.createElement("div");
	gjs_text_measure_elm.style["white-space"] = "nowrap";
	gjs_text_measure_elm.style.display = "inline-block";
	gjs_text_measure_elm.style.border = "1px solid #00FF00";
	gjs_text_measure_elm.style.position = "absolute";
	gjs_text_measure_elm.style.left = "100000px";
	gjs_text_measure_elm.style.top = "0px";
	gjs_text_measure_elm.style.visibility = "hidden";
	document.body.appendChild(gjs_text_measure_elm);
	gjs_strTextColor = "#000000";
	gjs_burst_char_arr = [];},

_jsfunc_NewEntry_8 : function ()
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
	let ctx = canvas.getContext("2d");
	_gjs_ctx_touchmark = ctx;
	g_exports.c_make_one_touch_mark( typeTouchMarkGraph, dx, dy );
	return canvas;
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

_jsfunc_NewEntry_9 : function ()
{
	g_bIME = 0;
	g_bComposStarted = 0;
	gjs_input_tag_padding = 16 * 4;
	gjs_input_tag_default_x = -19;
	gjs_input_tag_hide_x = -1000;
	gjs_input_tag = null;
	gjs_input_tag_div = null;
	gjs_input_contents_sx = 0;
	gjs_input_contents_sy = 0;
	gjs_input_contents_sy_0 = 0;
	gjs_input_tag_x = 220;
	gjs_input_tag_y = 0;
	gjs_bRButtonUpProcessd = 0;
	js_make_input_tag_caret_goto_btm = function() {
	let len = gjs_input_tag.value.length;
	gjs_input_tag.setSelectionRange(len, len);
	}
	js_delay_input_tag_caret_goto_btm = function() {
	js_make_input_tag_caret_goto_btm();
	}
	js_set_delay_input_tag_caret_goto_btm = function() {
	setTimeout( js_delay_input_tag_caret_goto_btm, 0 );
	}
	js_init_input_tag_text_value = function() {
	gjs_input_tag.value = " " ;
	gjs_input_tag.value = "aaa";
	gjs_input_tag.value = " " ;
	gjs_input_tag.style.width = String( gjs_input_tag_padding ) + "px";
	gjs_input_tag.style.height = String( gjs_input_contents_sy_0 ) + "px";
	console.log( "js_init_input_tag_text_value, gjs_input_contents_sy_0=", gjs_input_contents_sy_0 );
	console.log( "js_init_input_tag_text_value, gjs_input_contents_sy=", gjs_input_contents_sy );
	console.log( "js_init_input_tag_text_value, gjs_input_tag.style.height=", gjs_input_tag.style.height );
	gjs_input_contents_sx = 0;
	gjs_input_contents_sy = gjs_input_contents_sy_0;
	gjs_input_tag.style.left = String(gjs_input_tag_hide_x) + "px";
	gjs_input_tag.setSelectionRange(1, 1);
	js_set_delay_input_tag_caret_goto_btm();
	}
	gjs_input_tag = document.createElement("textarea");
	gjs_input_tag.autocomplete = "off";
	gjs_input_tag_div = document.createElement("div");
	let border_width = 2;
	let sx = gjs_input_tag_padding;
	let sy = 32 + 6;
	gjs_input_tag.width = String(sx);
	gjs_input_tag.height = String(sy);
	gjs_input_tag.style["border-style"] = "none";
	gjs_input_tag.style["border-color"] = "Transparent";
	gjs_input_tag.style["overflow"] = "auto";
	gjs_input_tag.style["outline"] = "none";
	gjs_input_tag.style.position = "absolute";
	gjs_input_tag.style.left = String(gjs_input_tag_default_x) + "px";
	gjs_input_tag.style.top = "0px";
	gjs_input_tag_div.style.position = "absolute";
	gjs_input_tag_div.style.left = "-10000px";
	gjs_input_tag_div.style.top = String(gjs_input_tag_y) + "px";
	gjs_input_tag.style.width = String(sx) + "px";
	gjs_input_tag.style.height = String(sy) + "px";
	gjs_input_tag_div.style.width = String(sx) + "px";
	gjs_input_tag_div.style.height = String(sy + 4) + "px";
	gjs_input_tag_div.style.overflow = "hidden";
	gjs_input_tag_div.style.border = String(border_width) + "px solid #008080";
	gjs_input_tag.style["background-color"] = "#ffffff";
	gjs_input_tag.style.visibility = "visible";
	gjs_input_tag_div.style.zIndex = "100000";
	gjs_input_tag_div.style.visibility = "visible";
	js_init_input_tag_text_value();
	gjs_input_tag_div.appendChild(gjs_input_tag);
	document.body.appendChild(gjs_input_tag_div);
	gjs_input_tag.focus();},

_jsfunc_NewEntry_10 : function ()
{
	let x = 0;
	let y = 500;
	let sx = 64;
	let sy = 64;
	let canvas = document.createElement("canvas");
	canvas.width = String(sx);
	canvas.height = String(sy);
	canvas.style.border = "2px solid #FF0000";
	canvas.style.position = "absolute";
	canvas.style.left = String(x) + "px";
	canvas.style.top = String(y) + "px";
	canvas.style.width = String(sx) + "px";
	canvas.style.height = String(sy) + "px";
	canvas.style.visibility = "hidden";
	document.body.appendChild( canvas );
	gjs_caret_compose_canvas = canvas;
	gjs_caret_compose_ctx = canvas.getContext("2d");},

_jsfunc_NewEntry_11 : function ()
{
	g_outarea = document.getElementById( "outarea" );
	g_js_img_hash = {};},

_jsfunc_NewEntry_12 : function ()
{
	g_nws_scaling = 1.0;},

_jsfunc_NewEntry_13 : function ()
{
	let canvas = document.createElement("canvas");
	let ctx = canvas.getContext("2d");
	ctx.font = "normal normal 32px monospace";
	let sxTextX = ctx.measureText("X").width;
	js_MyPrint( "font_check, width of font \x27X\x27 = " + sxTextX );
	js_MyPrint( "sxTextX / 16.0 = " + (sxTextX / 16.0) );},

_jsfunc_NewEntry_14 : function ()
{
	g_canvas_s = new Array(200 );
	g_whole_div_s = new Array(200 );
	g_ctx_s = new Array(200 );
	g_client_div_s = new Array(200 );
	g_strFont_s = new Array(200 );},

_jsfunc_NewEntry_15 : function ()
{
	js_enable_events_within_iframes = function( bEnable ) {
	let iframeElms = document.getElementsByTagName( "iframe" );
	let numElms = iframeElms.length;
	let frmsw;
	if ( bEnable ) {
	frmsw = "auto";
	}
	else {
	frmsw = "none";
	}
	for ( let i = 0; i < numElms; i++ ) {
	iframeElms[i].style["pointer-events"] = frmsw;
	}
	}},

_jsfunc_NewEntry_16 : function ()
{
	return js_MemorizeJsObject( null );},

_jsfunc_NewEntry_17 : function ()
{
	gjs_objs = [null];
	gjs_obj_refcnts = [null];
	gjs_objs_next = 1;
	js_MemorizeJsObject = function(obj) {
	if ( gjs_objs_next === gjs_objs.length ) {
	gjs_objs.push(gjs_objs.length + 1);
	}
	const idx = gjs_objs_next;
	gjs_objs_next = gjs_objs[idx];
	gjs_objs[idx] = obj;
	gjs_obj_refcnts[idx] = 1;
	return idx;
	}
	js_FreeJsObjIdx = function(idx) {
	if ( --gjs_obj_refcnts[idx] == 0 ) {
	gjs_objs[idx] = gjs_objs_next;
	gjs_objs_next = idx;
	}
	}},

_jsfunc_NewEntry_18 : function ()
{
	js_SetMouseHandlers = function(bCaptureFlg) {
	if ( !g_bTouchSupported ) {
	document.addEventListener( 'mousemove', js_mousemove, {passive: false, capture: bCaptureFlg} );
	document.addEventListener( 'mousedown', js_mousedown, {passive: false, capture: bCaptureFlg} );
	document.addEventListener( 'mouseup', js_mouseup, {passive: false, capture: bCaptureFlg} );
	}
	else {
	document.addEventListener( 'touchstart',
	js_touchstart,
	{
	once: false,
	passive: false,
	capture: bCaptureFlg
	}
	);
	document.addEventListener( 'touchend',
	js_touchend,
	{
	once: false,
	passive: false,
	capture: bCaptureFlg
	}
	);
	document.addEventListener( 'touchmove',
	js_touchmove,
	{
	once: false,
	passive: false,
	capture: bCaptureFlg
	}
	);
	}
	document.addEventListener( 'wheel',
	js_OnWheel,
	{
	once: false,
	passive: false,
	capture: bCaptureFlg
	}
	);
	}
	g_js_bInputInputEvent = 0;
	gjs_input_tag.addEventListener( 'keydown', js_keydown, {passive: false} );
	gjs_input_tag.addEventListener( 'keyup', js_keyup, {passive: false} );
	gjs_input_tag.addEventListener( 'input', js_input_input );
	gjs_input_tag.addEventListener('compositionstart', js_composition_start );
	gjs_input_tag.addEventListener('compositionend', js_composition_end );
	js_SetMouseHandlers( false );
	window.onresize = js_OnResizeSandbox;
	window.oncontextmenu = js_OnContextMenu;
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
	js_test_ToHexStr = function(a) {
	return "0x" + a.toString(16).toUpperCase() + "(" + String.fromCharCode(a) + ")";
	}
	js_keypress_whole = function(e) {
	let rr = g_exports.c_keypress_whole( e.charCode );
	if ( rr ) {
	e.preventDefault();
	e.stopPropagation();
	return false;
	}
	else {
	return true;
	}
	}
	function js_input_input(e) {
	let str = gjs_input_tag.value;
	g_js_bInputInputEvent = 1;
	gjs_text_measure_elm.style.font = gjs_input_tag.style.font;
	gjs_text_measure_elm.textContent = str;
	let sxText = gjs_text_measure_elm.clientWidth;
	let syText1 = gjs_text_measure_elm.clientHeight;
	syText = syText1 > gjs_input_contents_sy_0 ? syText1 : gjs_input_contents_sy_0;
	gjs_input_contents_sx = sxText;
	gjs_input_contents_sy = syText;
	console.log( "js_input_input, sxText=", sxText );
	console.log( "js_input_input, syText1=", syText1 );
	console.log( "js_input_input, gjs_input_contents_sy_0=", gjs_input_contents_sy_0 );
	console.log( "js_input_input, syText=", syText );
	gjs_input_tag.style.width = String(gjs_input_contents_sx + gjs_input_tag_padding) + "px";
	gjs_input_tag.style.height = String(gjs_input_contents_sy + 6) + "px";
	gjs_input_tag_div.style.width = String(gjs_input_contents_sx + 32) + "px";
	gjs_input_tag_div.style.height = String(gjs_input_contents_sy + 6) + "px";
	if ( gjs_input_contents_sx == 0 ) {
	gjs_input_tag.style.left = String(gjs_input_tag_hide_x) + "px";
	}
	else {
	gjs_input_tag.style.left = String(gjs_input_tag_default_x) + "px";
	}
	if ( !g_bComposStarted ) {
	if ( g_bIME ) {
	g_exports.c_reflect_IME( 0 );
	}
	}
	if ( g_bIME ) {
	}
	else {
	if ( str.length != 0 ) {
	if ( str.length == 2 ) {
	let char_code = str.charCodeAt( 1 );
	if ( char_code == 0x0a ) {
	g_exports.c_keydown( 0x0D , 0, 0, 0, 1 );
	}
	else {
	g_exports.c_chardown( char_code );
	}
	}
	else if ( str.length >= 3 ) {
	g_exports.c_send_burst_char_s( str.length );
	}
	}
	else {
	let rr1 = g_exports.c_keydown( 0x08 , 0, 0, 0, 1 );
	}
	js_init_input_tag_text_value();
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_composition_start(e) {
	js_MyPrint( "js_composition_start" );
	g_exports.c_composition_start();
	}
	function js_composition_end_core() {
	let str = gjs_input_tag.value;
	js_MyPrint( "js_composition_end_core, str=" + str );
	g_js_ime_unicode_s = [];
	let i = 0;
	if ( str.charAt(0) == " " ) {
	i++;
	}
	else {
	}
	for ( ;; i++ ) {
	let unicode = str.codePointAt(i);
	if ( unicode == null ) {
	break;
	}
	if ( unicode != 0x0d ) {
	g_js_ime_unicode_s.push( unicode );
	}
	if ( unicode >= 0x10000 ) {
	i++;
	}
	}
	let len = g_js_ime_unicode_s.length;
	g_js_ime_unicode_s.push(0);
	gjs_input_contents_sx = 0;
	gjs_input_contents_sy = gjs_input_contents_sy_0;
	g_exports.c_composition_end_core( len );
	js_init_input_tag_text_value();
	}
	function js_composition_end(e) {
	g_exports.c_compo_end_dbg();
	js_composition_end_core();
	}
	function js_keydown(e) {
	let bCtrl = e.getModifierState && e.getModifierState( 'Control' );
	g_js_bInputInputEvent = 0;
	let key = e.keyCode;
	if ( key == 229 ) {
	return;
	}
	if ( key == 0x08 ) {
	return;
	}
	if ( key == 0x2E ||
	key == 0x2D ||
	key == 0x0D ||
	key == 0x25 ||
	key == 0x27 ||
	key == 0x26 ||
	key == 0x28 ||
	key == 0x24 ||
	key == 0x23 ||
	key == 0x21 ||
	key == 0x22 ) {
	}
	else if ( key == 0x20 || key >= 0x30 ) {
	if ( bCtrl ) {
	if ( key >= 0x40 && key <= 0x5A ) {
	g_exports.c_keydown( key, 0, 0, 0, 0 );
	let bUseSystemCtrlV = g_exports.c_get_bUseSystemCtrlV();
	if ( bUseSystemCtrlV && key == 0x56 ) {
	}
	else {
	e.preventDefault();
	e.stopPropagation();
	}
	return;
	}
	}
	else {
	return;
	}
	}
	let rr = g_exports.c_keydown( key, 0, 0, 0, 0 );
	if ( rr ) {
	if ( key == 0x09 ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	}
	function js_keyup(e) {
	let key = e.keyCode;
	if ( key == 229 ) {
	return;
	}
	else if ( key == 0x08 ) {
	return;
	}
	g_js_bInputInputEvent = 0;
	let rr = g_exports.c_keyup( key );
	}
	js_keydown_whole = function(e) {
	let key = e.keyCode;
	let bCapsLock = e.getModifierState && e.getModifierState( 'CapsLock' );
	let bNumLock = e.getModifierState && e.getModifierState( 'NumLock' );
	let bCtrl = e.getModifierState && e.getModifierState( 'Control' );
	let bAlt = e.getModifierState && e.getModifierState( 'Alt' );
	let modif = 0;
	if ( bCapsLock ) {
	modif |= 1 ;
	}
	if ( bNumLock ) {
	modif |= 2 ;
	}
	let rr = g_exports.c_keydown( key, modif, e.location, e.shiftKey, 0 );
	if ( rr ) {
	if ( key == 0x09 || bCtrl || bAlt ) {
	e.preventDefault();
	e.stopPropagation();
	return false;
	}
	else {
	e.stopPropagation();
	}
	}
	else {
	return true;
	}
	};
	js_keyup_whole = function(e) {
	let key = e.keyCode;
	let rr = g_exports.c_keyup_whole( key, e.location, e.shiftKey );
	if ( rr ) {
	e.preventDefault();
	e.stopPropagation();
	return false;
	}
	else {
	return true;
	}
	};
	function js_mousedown(e) {
	js_MyPrint( "js_mousedown() has come, e.button=" + e.button + ", e.detail=" + e.detail );
	let bProcessed = g_exports.c_mousedown(
	e.clientX * g_nws_scaling,
	e.clientY * g_nws_scaling,
	e.button,
	e.detail
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_mouseup(e) {
	let bProcessed = g_exports.c_mouseup(
	e.clientX * g_nws_scaling,
	e.clientY * g_nws_scaling,
	e.button
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	else {
	}
	if ( e.button == 2 ) {
	gjs_bRButtonUpProcessd = bProcessed;
	}
	}
	function js_mousemove(e) {
	let bProcessed = g_exports.c_mousemove(
	e.clientX * g_nws_scaling,
	e.clientY * g_nws_scaling
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
	let tx = mx - 200 / 2;
	let ty = my - 200 / 2;
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
	for ( let i = 0; i < 4 ; i++ ) {
	canvas_s[i].style.visibility = "visible";
	}
	gjs_touch_mark_visiblity = 1;
	}
	else {
	for ( let i = 0; i < 4 ; i++ ) {
	canvas_s[i].style.visibility = "hidden";
	}
	gjs_touch_mark_visiblity = 0;
	}
	}
	}
	function js_multi_touch_push_points(i32arr, idxStart, touches) {
	let numTouch = touches.length;
	let idxArr = idxStart;
	for ( let i = 0; i < numTouch; i++ ) {
	let touch = touches[i];
	i32arr[idxArr++] = touch.clientX * g_nws_scaling;
	i32arr[idxArr++] = touch.clientY * g_nws_scaling;
	i32arr[idxArr++] = touch.identifier;
	}
	}
	function js_multi_touch(e, action) {
	let numTouch2;
	if ( action == 1 ) {
	numTouch2 = e.touches.length + e.changedTouches.length;
	}
	else {
	numTouch2 = e.touches.length;
	}
	if ( !(numTouch2 > 0) ) {
	return 0;
	}
	let idAction = 0;
	{
	let changedTouches = e.changedTouches;
	if ( changedTouches.length > 0 ) {
	let touch = changedTouches[0];
	idAction = touch.identifier;
	}
	}
	let addrMem = g_exports.c_malloc( numTouch2 * 4 * 3 );
	let i32arr = new Int32Array(g_memory.buffer, addrMem, numTouch2 * 3);
	js_multi_touch_push_points(i32arr, 0, e.touches);
	if ( action == 1 ) {
	let idx = e.touches.length;
	js_multi_touch_push_points(i32arr, idx, e.changedTouches);
	}
	let bProcessed = g_exports.c_touch_multi(
	addrMem,
	numTouch2,
	action,
	idAction
	);
	g_exports.c_free( addrMem );
	return bProcessed;
	}
	function js_touchstart(e) {
	let numTouch = e.touches.length;
	if ( !(numTouch > 0) ) {
	return 0;
	}
	{
	let touch = e.touches[0];
	let mx = touch.clientX * g_nws_scaling;
	let my = touch.clientY * g_nws_scaling;
	if ( gjs_bTouchMarkEnable ) {
	js_move_touch_mark(mx, my);
	js_set_raw_touch_mark_visibility( 1 );
	}
	}
	let bProcessed = js_multi_touch(e, 0 );
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_touchend(e) {
	if ( gjs_bTouchMarkEnable ) {
	js_set_raw_touch_mark_visibility( 0 );
	}
	let bProcessed = js_multi_touch(e, 1 );
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_touchmove(e) {
	let touch = e.touches[0];
	let mx = touch.clientX * g_nws_scaling;
	let my = touch.clientY * g_nws_scaling;
	if ( gjs_bTouchMarkEnable ) {
	js_move_touch_mark(mx, my);
	js_set_raw_touch_mark_visibility( 1 );
	}
	let bProcessed = js_multi_touch(e, 2 );
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_OnWheel(e) {
	let bProcessed = g_exports.c_OnWheel(
	e.deltaY
	);
	if ( bProcessed ) {
	e.preventDefault();
	e.stopPropagation();
	}
	}
	function js_OnResizeSandbox(e) {
	g_exports.c_OnResizeSandbox();
	}
	function js_OnContextMenu(e) {
	js_MyPrint( "js_OnContextMenu() has come" );
	if ( gjs_bRButtonUpProcessd ) {
	e.preventDefault();
	}
	gjs_bRButtonUpProcessd = 0;
	}},

_jsfunc_NewEntry_19 : function ()
{
	function js_OnMainTimer() {
	let rr = g_exports.wa_OnMainTimer();
	}
	setInterval( js_OnMainTimer, 20 );},

_jsfunc_NewEntry_20 : function ($0)
{
	let bEnable = $0;
	if ( gjs_bTouchMarkEnable ) {
	js_set_raw_touch_mark_visibility( 0 );
	}
	else {
	}
	gjs_bTouchMarkEnable = bEnable;},

_jsfunc_NewEntry_21 : function ()
{
	gjs_burst_char_arr.push( gjs_input_tag.value );},

_jsfunc_NewEntry_22 : function ()
{
	g_bComposStarted = 1;},

_jsfunc_NewEntry_23 : function ()
{
	g_bComposStarted = 0;},

_jsfunc_NewEntry_24 : function ($0)
{
	return g_js_ime_unicode_s[$0];},

_jsfunc_NewEntry_25 : function ()
{
	js_set_delay_input_tag_caret_goto_btm();},

_jsfunc_NewEntry_26 : function ($0)
{
	g_bIME = $0;},

_jsfunc_NewEntry_27 : function ()
{
	gjs_input_tag.style["background-color"] = "#ffffff";
	gjs_input_tag_div.style.left = String(gjs_input_tag_x) + "px";
	gjs_input_tag_div.style.top = String(gjs_input_tag_y) + "px";},

_jsfunc_NewEntry_28 : function ()
{
	gjs_input_tag_div.style.left = "-10000px";},

_jsfunc_NewEntry_29 : function ($0)
{
	let str1 = Pointer_stringify($0);
	g_outarea.value += str1;
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_30 : function ($0)
{
	g_outarea.value += String($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_31 : function ($0)
{
	g_outarea.value += String.fromCharCode($0);
	g_outarea.scrollTop = g_outarea.scrollHeight;},

_jsfunc_NewEntry_32 : function ($0, $1)
{
	alert( Pointer_stringify($0) + String($1) );},

_jsfunc_NewEntry_33 : function ()
{
	alert( "abort() is called." );},

_jsfunc_NewEntry_34 : function ($0)
{
	js_FreeJsObjIdx($0);},

_jsfunc_NewEntry_35 : function ($0)
{
	js_MyPrint( Pointer_stringify($0) );},

_jsfunc_NewEntry_36 : function ($0, $1, $2)
{
	let addrDstBuf = $0;
	let sizeDstBuf = $1;
	let strPath = Pointer_stringify( $2 );
	console.log( "00, strPath=", strPath );
	console.log( "01, let xmlhttp = new XMLHttpRequest();" );
	let xmlhttp = new XMLHttpRequest();
	console.log( "02, xmlhttp = ", xmlhttp );
	console.log( "03, xmlhttp.onreadystatechange = function() {...}" );
	xmlhttp.onreadystatechange = function() {
	console.log( "1, xmlhttp.readyState=", xmlhttp.readyState );
	if ( xmlhttp.readyState == 4 ) {
	console.log( "2, xmlhttp.readyState == 4 (means that a status can be read(?) and final phase?)" );
	console.log( "3, xmlhttp.status=", xmlhttp.status );
	if ( xmlhttp.status == 200 ) {
	console.log( "4, ok." );
	console.log( "xmlhttp.response=", xmlhttp.response );
	let arrbuf = xmlhttp.response;
	const sizeSrc = arrbuf.byteLength;
	console.log( "sizeSrc = arrbuf.byteLength = ", sizeSrc );
	let u8arr = new Uint8Array(arrbuf);
	console.log( "u8arr.byteLength = ", u8arr.byteLength );
	let minSize = sizeSrc;
	if ( sizeDstBuf < minSize ) {
	minSize = sizeDstBuf;
	}
	console.log( "sizeDstBuf=", sizeDstBuf );
	console.log( "minSize=", minSize );
	console.log( "addrDstBuf=", addrDstBuf );
	let pDst = addrDstBuf;
	for ( let cnt = 0; cnt < minSize; cnt++ ) {
	HEAP8[pDst] = u8arr[cnt];
	pDst++;
	}
	g_exports.wa_MyLoadFileFromNet_Loaded( 1, minSize );
	}
	else {
	console.log( "5, xmlhttp.status != 200 (error ?)." );
	alert("status = " + xmlhttp.status);
	g_exports.wa_MyLoadFileFromNet_Loaded( 0, 0 );
	}
	}
	else {
	console.log( "6, xmlhttp.readyState != 4" );
	}
	}
	console.log( "03, xmlhttp.open(\x27GET\x27, strPath)" );
	xmlhttp.open("GET", strPath);
	xmlhttp.responseType = "arraybuffer";
	console.log( "04, xmlhttp.send()" );
	xmlhttp.send();},

_jsfunc_NexTime_1 : function ()
{
	return Date.now();},

_jsfunc_NexTime_2 : function ($0)
{
	let timeout_func = function() {
	g_exports.c_on_timeoout();
	}
	setTimeout( timeout_func, $0 );},

_jsfunc_NexTime_3 : function ($0)
{
	let timeout_func = function() {
	g_exports.c_on_timeoout();
	}
	gjs_set_timeout_id = setTimeout( timeout_func, $0 );},

_jsfunc_NexTime_4 : function ()
{
	clearTimeout( gjs_set_timeout_id );},

_jsfunc_Clipboard_1 : function ($0)
{
	let str = Pointer_stringify($0);
	navigator.clipboard.writeText( str );},

_jsfunc_Clipboard_2 : function ()
{
	navigator.clipboard.readText().then(
	text => {
	let lenText = text.length;
	let sizeText = lenText + 1;
	let addrMem = g_exports.c_malloc( sizeText * 2 );
	let u16arr = new Uint16Array(g_memory.buffer, addrMem, sizeText);
	for ( let i = 0; i < lenText; i++ ) {
	u16arr[i] = text.charCodeAt(i);
	}
	u16arr[lenText] = 0;
	g_exports.c_on_clipboard_read( addrMem );
	}
	);},

_jsfunc_NwsSound_1 : function ()
{
	gjs_audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	console.log( "gjs_audioCtx.sampleRate = ", gjs_audioCtx.sampleRate );
	return gjs_audioCtx.sampleRate;},

_jsfunc_NwsSound_2 : function ($0)
{
	let sizeBuf = $0;
	let channels = 2;
	let frameCount = sizeBuf;
	myArrayBuffer = gjs_audioCtx.createBuffer(channels, frameCount, gjs_audioCtx.sampleRate);
	return js_MemorizeJsObject(myArrayBuffer);},

_jsfunc_NwsSound_3 : function ($0, $1, $2)
{
	let myArrayBuffer = gjs_objs[$0];
	let addrBuf = $1;
	let sizeBuf = $2;
	let s16arr = new Int16Array(g_memory.buffer, addrBuf, sizeBuf);
	let channels = 2;
	for ( let channel = 0; channel < channels; channel++ ) {
	let nowBuffering = myArrayBuffer.getChannelData(channel);
	for ( let i = 0; i < sizeBuf; i++ ) {
	nowBuffering[i] = s16arr[i] / 32767.0;
	}
	}},

_jsfunc_NwsSound_4 : function ($0)
{
	let url = Pointer_stringify($0);
	console.log( "CNwsSoundObject::LoadFromFile, url=", url );
	gjs_bufAudio = null;
	console.log( "CNwsSoundObject::LoadFromFile, 1, url = " + url );
	if ( !gjs_audioCtx ) {
	return;
	}
	console.log( "CNwsSoundObject::LoadFromFile, 2" );
	var request = new XMLHttpRequest();
	console.log( "CNwsSoundObject::LoadFromFile, 3" );
	request.open('GET', url, true);
	console.log( "CNwsSoundObject::LoadFromFile, 4" );
	request.responseType = 'arraybuffer';
	console.log( "CNwsSoundObject::LoadFromFile, 5" );
	request.onload = function() {
	console.log( "CNwsSoundObject::LoadFromFile, 6" );
	gjs_audioCtx.decodeAudioData(
	request.response,
	function( buffer ) {
	gjs_bufAudio = buffer;
	g_exports.c_on_audio_load( 1 );
	},
	function() {
	g_exports.c_on_audio_load( 2 );
	});
	}
	console.log( "CNwsSoundObject::LoadFromFile, 7" );
	request.send();
	console.log( "CNwsSoundObject::LoadFromFile, 8" );},

_jsfunc_NwsSound_5 : function ()
{
	return js_MemorizeJsObject( gjs_bufAudio );},

_jsfunc_NwsSound_6 : function ($0)
{
	let myArrayBuffer = gjs_objs[$0];
	let source = gjs_audioCtx.createBufferSource();
	source.buffer = myArrayBuffer;
	source.connect( gjs_audioCtx.destination );
	source.start();},

_jsfunc_NwsSound_7 : function ($0)
{
	let bufAudio = gjs_objs[$0];
	var source = gjs_audioCtx.createBufferSource();
	source.buffer = bufAudio;
	source.connect(gjs_audioCtx.destination);
	source.start(0);},

_jsfunc_HtmlFrameWnd_1 : function ($0, $1, $2, $3)
{
	let idxCanvas = $0;
	let sx = $1;
	let sy = $2;
	var strUrl = Pointer_stringify($3);
	let client_div = g_client_div_s[idxCanvas];
	let iframe = document.createElement("iframe");
	iframe.width = sx;
	iframe.height = sy;
	iframe.src = strUrl;
	iframe.nwstk_scaling = 1.0;
	function SetScaleToIFrame() {
	let styleIframe = iframe.contentWindow.document.body.style;
	let strScale = "scale(" + String(iframe.nwstk_scaling) + ")";
	styleIframe.transform = strScale;
	styleIframe.transformOrigin = "0 0";
	}
	function onKeyDownInIframe( e ) {
	let key = e.keyCode;
	let bCtrl = e.getModifierState && e.getModifierState( 'Control' );
	if ( key == 107 && bCtrl ) {
	iframe.nwstk_scaling *= 1.2 ;
	SetScaleToIFrame();
	}
	else if ( key == 109 && bCtrl ) {
	iframe.nwstk_scaling /= 1.2 ;
	SetScaleToIFrame();
	}
	e.preventDefault();
	e.stopPropagation();
	}
	iframe.onload = function() {
	iframe.contentWindow.document.addEventListener( 'keydown', onKeyDownInIframe );
	SetScaleToIFrame();
	}
	client_div.appendChild(iframe);
	return js_MemorizeJsObject(iframe);},

_jsfunc_HtmlFrameWnd_2 : function ($0, $1, $2, $3)
{
	let idxCanvas = $0;
	let sx = $1;
	let sy = $2;
	let htmlText = Pointer_stringify($3);
	let client_div = g_client_div_s[idxCanvas];
	let divHtml = document.createElement("div");
	let divHtml2 = document.createElement("div");
	let styleDiv = divHtml.style;
	let styleDiv2 = divHtml2.style;
	let sx2 = sx - 20 ;
	let sy2 = sy - 20 ;
	styleDiv.overflow = "auto";
	styleDiv.width = String(sx) + "px";
	styleDiv.height = String(sy) + "px";
	divHtml2.innerHTML = htmlText;
	styleDiv2.width = String(sx2) + "px";
	styleDiv2.height = String(sy2) + "px";
	styleDiv2.border = "1px solid #FFFFFF00";
	client_div.appendChild( divHtml );
	divHtml.appendChild( divHtml2 );
	divHtml.nwstk_div2 = divHtml2;
	divHtml.nwstk_scaling = 1.0;
	return js_MemorizeJsObject(divHtml);},

_jsfunc_HtmlFrameWnd_3 : function ($0, $1, $2)
{
	let sx = $0;
	let sy = $1;
	let iframe = gjs_objs[$2];
	iframe.width = sx;
	iframe.height = sy;},

_jsfunc_HtmlFrameWnd_4 : function ($0, $1, $2)
{
	let sx = $0;
	let sy = $1;
	let divHtml = gjs_objs[$2];
	let divHtml2 = divHtml.nwstk_div2;
	let styleDiv = divHtml.style;
	let styleDiv2 = divHtml2.style;
	let scaling = divHtml.nwstk_scaling;
	let sx2 = sx - 20 ;
	let sy2 = sy - 20 ;
	styleDiv.width = String(sx) + "px";
	styleDiv.height = String(sy) + "px";
	styleDiv2.width = String(sx2 / scaling) + "px";
	styleDiv2.height = String(sy2) + "px";},

_jsfunc_HtmlFrameWnd_5 : function ($0)
{
	let divHtml = gjs_objs[$0];
	divHtml.nwstk_scaling *= 1.2 ;},

_jsfunc_HtmlFrameWnd_6 : function ($0)
{
	let divHtml = gjs_objs[$0];
	divHtml.nwstk_scaling /= 1.2 ;},

_jsfunc_HtmlFrameWnd_7 : function ($0)
{
	let divHtml = gjs_objs[$0];
	divHtml.focus();},

_jsfunc_HtmlFrameWnd_8 : function ($0, $1, $2)
{
	let sx = $0;
	let sy = $1;
	let divHtml = gjs_objs[$2];
	let divHtml2 = divHtml.nwstk_div2;
	let styleDiv2 = divHtml2.style;
	let scaling = divHtml.nwstk_scaling;
	let strScale = "scale(" + String(scaling) + ")";
	styleDiv2.transform = strScale;
	styleDiv2.transformOrigin = "0 0";
	let sx2 = sx - 20 ;
	let sy2 = sy - 20 ;
	styleDiv2.width = String(sx2 / scaling) + "px";
	styleDiv2.height = String(sy2) + "px";},

_jsfunc_main_1 : function ()
{
	async function pick_dir() {
	let picker = window.showDirectoryPicker();
	console.log("picker=", picker);
	gjs_dirHandle = null;
	let dirHandle;
	try {
	dirHandle = await picker;
	console.log( "Wasm_pick_dir, dirHandle=", dirHandle );
	console.log( "Wasm_pick_dir, dirHandle.name=", dirHandle.name );
	let addrMem = make_uint16_string_for_c( dirHandle.name );
	g_exports.c_memorize_base_dirname( addrMem );
	gjs_dirHandle = dirHandle;
	gjs_base_dir_handle = dirHandle;
	gjs_filer_cur_dir_handle = dirHandle;
	g_exports.c_call_at_end_of_async( 1 )
	}
	catch( err ) {
	console.log( "pick directory was failed, err=", err );
	g_exports.c_call_at_end_of_async( 0 )
	}
	}
	pick_dir();},

_jsfunc_main_2 : function ()
{
	async function getDir() {
	let dirHandle = gjs_filer_cur_dir_handle;
	for await (const entry of dirHandle.values()) {
	console.log( "entry = ", entry );
	console.log( entry.kind, entry.name );
	if ( entry.kind == "file" ) {
	let entry_name = entry.name;
	console.log("this is a file, " + entry_name);
	let addrMem = make_uint16_string_for_c( entry_name );
	g_exports.c_add_file_entry( addrMem );
	}
	else if ( entry.kind == "directory" ) {
	let entry_name = entry.name;
	console.log("this is a directory, " + entry_name);
	let addrMem = make_uint16_string_for_c( entry_name );
	g_exports.c_add_dir_entry( addrMem );
	}
	}
	console.log( "before call g_exports.c_my_end_of_mount_entry_s in JS\x27s getDir()" );
	g_exports.c_my_end_of_mount_entry_s( 1 );
	console.log( "after call g_exports.c_my_end_of_mount_entry_s in JS\x27s getDir()" );
	}
	console.log( "before call getDir()" );
	getDir();
	console.log( "after call getDir()" );},

_jsfunc_main_3 : function ($0)
{
	let strDirname = Pointer_stringify($0);
	console.log( "EnterDirectory, EM_ASM, strDirname = ", strDirname );
	async function EnterDir(strDirname) {
	console.log( "EnterDirectory, EM_ASM, strDirname =", strDirname );
	let dirHandle = gjs_filer_cur_dir_handle;
	let dirHandle_2;
	try {
	dirHandle_2 = await dirHandle.getDirectoryHandle( strDirname );
	console.log( "dirHandle_2 = ", dirHandle_2 );
	gjs_filer_cur_dir_handle = dirHandle_2;
	g_exports.c_call_at_end_of_async( 1 )
	}
	catch( err ) {
	console.log( "dirHandle.getDirectoryHandle(\x27" + strDirname + "\x27) was failed, err=" , err );
	g_exports.c_call_at_end_of_async( 0 )
	}
	}
	EnterDir( strDirname );},

_jsfunc_main_4 : function ()
{
	gjs_filer_cur_dir_handle = gjs_base_dir_handle;},

_jsfunc_main_5 : function ()
{
	let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	let channels = 1;
	console.log( "audioCtx.sampleRate = ", audioCtx.sampleRate );
	let g_delta_time = 0.05;
	let g_buf_max = 2;
	let g_timeWholeFirst;
	let g_timeNextPacket;
	let g_frameCount = 44100 * g_delta_time;
	function my_make_buffer()
	{
	let myArrayBuffer = audioCtx.createBuffer(channels, g_frameCount, 44100);
	for ( let channel = 0; channel < channels; channel++ ) {
	let buf = myArrayBuffer.getChannelData(channel);
	let pTop = g_exports.c_make_pcm_data( g_frameCount );
	let len = g_frameCount;
	let f32array = new Float32Array(g_memory.buffer, pTop, len);
	buf.set( f32array );
	}
	return myArrayBuffer;
	}
	function yoyaku_packet_sound( t )
	{
	let myArrayBuffer = my_make_buffer();
	let source = audioCtx.createBufferSource();
	source.buffer = myArrayBuffer;
	source.connect(audioCtx.destination);
	source.start( t );
	++gjs_cnt_packet_s;
	source.onended = () => {
	--gjs_cnt_packet_s;
	if ( g_exports.c_get_continue_to_play_flag() ) {
	let curTime = audioCtx.currentTime;
	if ( g_timeNextPacket < curTime + (g_delta_time * 0.1) ) {
	g_timeNextPacket = curTime + g_delta_time * g_buf_max;
	}
	yoyaku_packet_sound( g_timeNextPacket );
	g_timeNextPacket += g_delta_time;
	}
	else {
	if ( gjs_cnt_packet_s == 0 ) {
	g_exports.c_on_yoyaku_packet_is_zero();
	}
	}
	}
	}
	function start_my_packet_sound() {
	g_timeWholeFirst = audioCtx.currentTime;
	console.log( "g_timeWholeFirst = ", g_timeWholeFirst );
	let t = g_timeWholeFirst + 0.1;
	g_timeNextPacket = t + g_delta_time * g_buf_max;
	let i;
	for ( i = 0; i < g_buf_max; i++ ) {
	yoyaku_packet_sound( t );
	t += g_delta_time;
	}
	}
	start_my_packet_sound();},

_jsfunc_main_6 : function ()
{
	make_uint16_string_for_c = function( entry_name ) {
	let lenText = entry_name.length;
	let sizeText = lenText + 1;
	let addrMem = g_exports.c_malloc( sizeText * 2 );
	let u16arr = new Uint16Array(g_memory.buffer, addrMem, sizeText);
	for ( let i = 0; i < lenText; i++ ) {
	u16arr[i] = entry_name.charCodeAt(i);
	}
	u16arr[lenText] = 0;
	return addrMem;
	}},

_jsfunc_main_7 : function ()
{
	gjs_cnt_packet_s = 0;},

_jsfunc_ReadSay_1 : function ()
{
	alert( "ReadSay, AfxMessageBox" );},

// this is foot.js from here :
};



let		g_instance;
let		g_exports;
let		g_memory;		// global memory
let     HEAP8;			// g_memory π BYTE zρΙe΅½ΰΜ


let		g_wasm_stdout_buf	= "";

let		gjs_utf8_decoder	= new TextDecoder("utf-8");



// g_memory.grow() ·ιΖ g_memory ΙΞ΅Δ’ι ArrayBuffer ΝA
// detach ³κΔAV΅’ΰΜΙt―Φ¦ηκΔ΅ά€ΜΕAHEAP8
// ΘΗΙe΅Ό³Θ―κΞΘηΘ’B
function _js_on_grow_memory() {
    let		buffer = g_memory.buffer;
    
	HEAP8	= new Uint8Array(buffer);
}


/*
	pTop ©ηΜ 0 I[ΆρΜ·³πoCgPΚΕ¦ιB
	Τ³κι·³Ζ΅ΔΝ 0 I[ΆρΝάάΘ’B
	
	typedarray.indexOf(searchElement[, fromIndex = 0])
	πgΑΔ’ιB
*/
/*
function GetLengthOfPointerString( pTop ) {
	let		ptr		= pTop;
	let		len		= 0;
	for ( ;; ) {
		let  code = HEAP8[ptr];
		if ( code == 0 ) {
			break;
		}
		ptr++;
		len++;
	}
	
	return	len;
}
*/
function GetLengthOfPointerString( pTop ) {
	let idxZero = HEAP8.indexOf(0, pTop);	// © pTop ΜΚu©ηAlͺ 0 Ε ιoCgπT·B
	if ( idxZero != -1 ) {				// 0 ͺ©Β©Α½κ :
		return	idxZero - pTop;
	}
	else {								// 0 ͺ©Β©ηΘ©Α½κ :
		return	HEAP8.byteLength - pTop;
	}
}

//function Pointer_stringify( pTop ) {
//	let		ptr		= pTop;
//	let		str1	= "";
//	for ( ;; ) {
//		let  code = HEAP8[ptr];
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


/*
	pTop ©ηπ UTF8 Μ 0 I[ΆρΖέΘ΅Δ JS ΜΆρΙΌ·B
*/
function Pointer_stringify( pTop ) {
	let		len			= GetLengthOfPointerString( pTop );
	let		u8array		= new Uint8Array(g_memory.buffer, pTop, len);
	
	// utf8 ΜBYTE zρ©η JS Μ utf16 Άρπμι :
	return	gjs_utf8_decoder.decode(u8array);
}

/*
	pTop ©ηAlen oCgΜͺπ UTF8 ΜΆρΖέΘ΅Δ JS ΜΆρΙΌ·B
*/
function Pointer_stringify_with_len( pTop, len ) {
	let		u8array		= new Uint8Array(g_memory.buffer, pTop, len);
	
	// utf8 ΜBYTE zρ©η JS Μ utf16 Άρπμι :
	return	gjs_utf8_decoder.decode(u8array);
}




let		imports = {};


/*
let opts = {
	initial : 2,		// ϊeΚ: 64KB PΚ
	//initial : 500,	// ϊeΚ: 64KB PΚ
	//initial : 0,		// ϊeΚ: 64KB PΚ
	
	//maximum : 100		// ΕεeΚ: 64KB PΚ
	maximum : 1000		// ΕεeΚ: 64KB PΚ
};
//console.log( opts );
g_memory		= new WebAssembly.Memory(opts);
g_memory.initial = 2;
g_memory.maximum = 1000;
*/


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
		let		str1	= Pointer_stringify( pTop );
		
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
		
		let		last_num_pages		= g_memory.grow( numPageToGrow );
		
	//	alert( "js_grow_memory(), g_memory.grow() = " + String(last_num_pages) );
		
		// g_memory.grow() ·ιΖ g_memory ΙΞ΅Δ’ι ArrayBuffer ΝA
		// detach ³κΔAV΅’ΰΜΙt―Φ¦ηκΔ΅ά€ΜΕAHEAP8
		// ΘΗΙe΅Ό³Θ―κΞΘηΘ’B
		_js_on_grow_memory();
		
		
		return	last_num_pages;
	},
	
	// js_on_grow_memory : _js_on_grow_memory,
	
	
	putchar : function(code) {
		g_outarea.value			+= String.fromCharCode(code);
		
		g_outarea.scrollTop		= g_outarea.scrollHeight;
		
		return	code;
	},
	
	// memory: g_memory
	
};

let		env		= imports.env;

//env.memoryBase	= imports.memoryBase || 0;
//env.memory		= g_memory;
//env.tableBase		= imports.tableBase || 0;
//env.table			= table;



// merge import_func_s in env :
for (let key in import_func_s) {
	env[key] = import_func_s[key];
}

// console.log( env );


/*
	Request Headers
		Accept-Encoding: identity
	Ι΅½’B
	
	XMLHttpRequest.setRequestHeader( "xxx", "yyy" );
*/
function get_filesize(url, callback) {
	let xhr = new XMLHttpRequest();
	
	xhr.open("HEAD", url, true); // Notice "HEAD" instead of "GET",
								 //  to get only the header
	
	// gzip ΘΗΕ³kπΉΈΙA»ΜάάΜt@CΜTCYπΤ΅Δΰη’½’ :
	xhr.setRequestHeader( "Accept-Encoding", "identity" );
	
	// σΤͺΟ»΅½ΙΔΡo³κιΦπo^΅Δ¨­ :
	xhr.onreadystatechange = function() {
		if (this.readyState == this.DONE) {
			// R[obNΦΙoCgπΐψΙ΅ΔΔΡo· :
			callback(parseInt(xhr.getResponseHeader("Content-Length")));
		}
	};
	
	// ΐΫΙ XHR π­s·ι :
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
		
		// g_memory ΙΞ΅Δ’ι ArrayBuffer πAJS Μ HEAP8[] zρ
		// Ιe·ι :
		_js_on_grow_memory();
		
		let		ret		= g_exports.start_from_js( 123, 456, 3.14 );
		
		//alert( "start_from_js() = " + String(ret) );
	});
}

/*
window.onload = function() {
	get_filesize( "main.wasm", ya_aaa );
}
*/


/*
	in:		bufOld		= ΜΜ ArrayBuffer
			sizeCopy	= ΜΜobt@©ηRs[·ιoCg
			sizeNew		= V΅’ ArrayBuffer ΜoCgB
	
	EsizeNew >= sizeCopy
	EsizeCopy >= (bufOld ΜTCY)
	
	Μππ½·ΰΜΖ·ιB½Ύ΅A
		sizeNew < (bufOld ΜTCY)
	Ε ΑΔΰζ’B
*/
function resizeArrBuf(bufOld, sizeCopy, sizeNew) {
	let		bufNew		= new ArrayBuffer(sizeNew);
	let		u8arrNew	= new Uint8Array(bufNew);
	let		u8arrOld	= new Uint8Array(bufOld, 0, sizeCopy);
	
	u8arrNew.set(u8arrOld);
	
	return	bufNew;
}

window.onload = function() {
//	console.log( "window.location.hostname=" + window.location.hostname );
	
	
	
//	let		outarea		= document.getElementById( "outarea" );
	
	let		sx		= 300;
	let		sy		= 70;
	let		wx		= window.innerWidth;
	let		wy		= window.innerHeight;
	
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
	div1.style.zIndex		= "100";		// lͺ¬³’ΩΗγλ€(Μϋ)Ι ι±ΖΙΘιB
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
		// SoCg(ρ³kΜκΙΜέ³΅’l) :
		// Apache Μ mod_gzip W[Ε gzip ³k³κΔ’ικA±ΜlΝ³kγΜlΕ ΑΔA
		// ³Μ *.wasm ΜTCYΕΝΘ’BΖ±λͺAreader.read() ΕΗέάκιf[^ΝA
		// WJγΜf[^ΘΜΕA³Μ *.wasm ΜTCYΙΘΑΔ΅ά€B
		// ³kOΜf[^ΜTCYπζΎ·ιϋ@Ν©Β©ηΘ©Α½B
		// Θ¨ARequest-Header Ι Accept-Encoding πwθ·ι±ΖΰΦ~³κΔ’ιB
		// Accept-Encoding ΝA"Forbidden Header Name" Ε ιB
		// ΣͺKvB
		let			total	= Number.parseInt(response.headers.get("Content-Length"));
		
		console.log( `original total = ${total}` );
		
		/*
		for (let key of response.headers.keys()) {
			console.log( "response.headers.get(" + key + ")=" +
						  response.headers.get(key) );
		}
		*/
		
		let		cnt_enc	= response.headers.get("content-encoding");
		
		console.log( "cnt_enc=" + cnt_enc );
		
		
		
		prgrs.max		= total;
		prgrs.value		= 0;
		
		
		let		sizeBuf		= total;
		let		buffer		= new ArrayBuffer(total);
		let		u8arr		= new Uint8Array(buffer);
		
		let		sizeLoaded	= 0;		// σM΅½oCg
		
		// ­΅ΈΒΗέρΕ vOXo[Ζ % \¦Εi»σ΅π\¦·ι :
		const	reader	= response.body.getReader();
		while ( true ) {
			const {done, value} = await reader.read();
			if (done) {
				if ( sizeLoaded != sizeBuf ) {
					// obt@TCYΖ[h΅½TCYͺΩΘΑΔ’ικ :
					console.log( `At the end of fetch, final sizeLoaded = ${sizeLoaded}, ` );
					console.log( `  resize from ${sizeBuf} to ${sizeLoaded}` );
					
					buffer	= resizeArrBuf(buffer, sizeLoaded, sizeLoaded);
				}
				break;
			}
			// ΗρΎf[^ΝoCif[^iUint8ArrayjΕ^¦ηκι :
			
			// ‘ρ[h³κ½oCgiͺlj :
			let		sizeAdd			= value.length;
			
			console.log( `sizeAdd = ${sizeAdd}` );
			
			// obt@ΙKvΘoCg :
			let		sizeNeedBuf		= sizeLoaded + sizeAdd;
			if ( sizeNeedBuf > total ) {
				// obt@ͺ«θΘ’κ(­΅½ίΙmΫ΅Δ¨­) :
				let			sizeNew		= sizeLoaded + sizeAdd * 3;
				console.log( `Resize ArrayBuffer from ${sizeBuf} to ${sizeNew}` );
				
				// obt@πTCYΟX΅Δ¨­ :
				// sizeLoaded = Rs[·ιoCgAsizeNew = V΅’obt@ΜoCg :
				buffer	= resizeArrBuf(buffer, sizeLoaded, sizeNew);
				
				// obt@ΜeΰV΅’obt@ΜΰΜΙC³΅Δ¨­ :
				u8arr	= new Uint8Array(buffer);
				
				// \z³κιΕεoCgΰKxΙβ΅Δ¨­ :
				total		= sizeLoaded + sizeAdd * 2;
				// vOXo[ΜΕεlΰC³΅Δ¨­ :
				prgrs.max	= total;
				
				console.log( `new total = ${total}` );
				
				sizeBuf		= sizeNew;
			}
			
			// value zρπ u8arr zρΜ sizeLoaded ΜΚuΙRs[·ι :
			u8arr.set( value, sizeLoaded );
			
			// ΗέρΎoCgπΟZ΅Δ¨­ :
			sizeLoaded		+= sizeAdd;
			
			// vOXo[Ιlπέθ΅Δ¨­ :
			prgrs.value		= sizeLoaded;
			
			
			// 12.3 Μζ€Ι¬_ΘΊ 1 άΕ\¦·ι :
			let		perc	= ((sizeLoaded * 100.0) / total).toFixed(1);
			
	//		console.log( `${perc}% : ${sizeLoaded} / ${total}` );
	//		console.log( `sizeAdd=${sizeAdd}` );
	//		console.log( `value=${value}` );
			
			span2.innerHTML	= `${perc}% :` + sizeLoaded.toLocaleString() + " / " + total.toLocaleString();
		}
		
		// vOXo[πΝΑΔ’ι div vfSΜπν΅Δ¨­ :
		document.body.removeChild( div1 );
		
		
		return	buffer;
	})
	.then( buffer => WebAssembly.compile(buffer) )
	.then( module => WebAssembly.instantiate(module, imports) )
	.then( instance => {
		g_instance	= instance;
		g_exports	= instance.exports;
		g_memory	= g_exports.memory;
		
		
		// 2020/02/25, for debug :
		console.log( g_exports );
		
		
		// g_memory ΙΞ΅Δ’ι ArrayBuffer πAJS Μ HEAP8[] zρ
		// Ιe·ι :
		_js_on_grow_memory();
		
		let		ret		= g_exports.start_from_js( 123, 456, 3.14 );
		
		// alert( "start_from_js() = " + String(ret) );
	});
};
