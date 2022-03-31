Module.register("helloworld",{
	// Default module config.
	defaults: {
		text: "Hello World!"
	},
	start: function() {
		this.
	}
	// Override dom generator.
	start: function() {
		var wrapper = document.createElement("div");
		wrapper.classList.add('hello-world');
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
	/* Get Fonts */
	getFonts: function() {
		return [
		]
	}
	/* Get Scripts */
	getScripts: function() {
		return [
			this.file('js/main.js')
		]
	}
	/* Get Scripts */
	getScripts: function() {
		return [
			this.file('styles/style.css')
		]
	}
});