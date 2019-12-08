if ( typeof WebAssembly == "undefined" ) {
	my_wasm_error();
}
else {
	function IsWasmSupported() {
		try {
			if (typeof WebAssembly === "object"
				&& typeof WebAssembly.instantiate === "function") {
				var module = new WebAssembly.Module(
						Uint8Array.of(0x0, 0x61, 0x73, 0x6d,
									  0x01, 0x00, 0x00, 0x00)
						);
				if (module instanceof WebAssembly.Module) {
					return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
				}
			}
		}
		catch (e) {
		}
		return false;
	}
	
	if ( !IsWasmSupported() ) {
		my_wasm_error();
	}
}


function my_wasm_error()
{
	alert( "This browser does not support WebAssembly(wasm).\n" +
		   "Please use the browser which supports WebAssembly " +
		   "such as FireFox 65 or Chrome 73."
	   );
}
