const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "HTML",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "C++",
				weight: 3
			}, {
				text: "C++",
				weight: 12
			}, {
				text: "python",
				weight: 10
			}, {
				text: "java",
				weight: 10
			}, {
				text: "iCode",
				weight: 15
			}, {
				text: "VHDL",
				weight: 7
			}, {
				text: "PHP",
				weight: 8
			}, {
				text: "MySQL",
				weight: 12
			}, {
				text: "UML",
				weight: 7
			}, {
				text: "Agile",
				weight: 11
			}, {
				text: "Git",
				weight: 8
			}, {
				text: "Scrum",
				weight: 9
			}, {
				text: "Github",
				weight: 12
			}, {
				text: "BitBucket",
				weight: 10
			}, {
				text: "Tkinter",
				weight: 13
			}, {
				text: "TypeScript",
				weight: 7
			}, {
				text: "Kivy",
				weight: 14
			}, {
				text: "NativeScript",
				weight: 7
			}, {
				text: "Jira",
				weight: 12
			}, {
				text: "Angular",
				weight: 7
			}, {
				text: "Algorithm",
				weight: 12
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I am a JUNIOR Developer.", "love everything about code.", "also teach programming to people.", "I solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#353638"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
