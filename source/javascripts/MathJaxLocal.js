MathJax.Hub.Config({
	jax: ["input/TeX","output/HTML-CSS"],
  extensions: ["tex2jax.js","MathMenu.js","MathZoom.js"],
  tex2jax: 
		{
			inlineMath: [ ['$','$'], ['\\(','\\)'] ],
			displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
			processEscapes: true
		},
	TeX:
		{ 
			equationNumbers: { autoNumber: "AMS" },
			TagSide: "right",
  		Macros:
  			{
  				b: ['\\overline{#1}',1],
  				h: ['\\widehat{#1}',1],
  				til: ['\\widetilde{#1}',1],
				bold: ['\\mathbf{#1}',1],  				
  				sans: ['\\mathsf{#1}',1],
 				vect:	['\\boldsymbol{\\mathbf{#1}}',1],
 				zeros: ['\\mathbf{0}'],
 				ones: ['\\mathbf{1}'],
				d: ['\\,d'],
 				T: ['\\mathsf{T}'],
				argmin: ['\\mathop{\\mathrm{argmin}}'],
				argmax: ['\\mathop{\\mathrm{argmax}}'],
				sign: ['\\mathop{\\mathrm{sign}}'],
				tr: ['\\mathop{\\mathrm{tr}}']
	      }
		},
	"HTML-CSS": { availableFonts: ["TeX"] }
	});
	MathJax.Ajax.loadComplete("/javascripts/MathJaxLocal.js");
