// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.querySelectorAll('.gridsetoverlaywrap, #gridsetoverlaystyles, #gridscreenwidthwrap');
					
						if (gw.length == 0) window.location.href = window.location.href + '?gridset=show';
						else window.location.href = window.location.href.replace('?gridset=show', '');
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var b = document.getElementsByTagName('body')[0],
				gridareas = document.querySelectorAll('[class*=-showgrid]'),
				areacount = gridareas.length,
				wrapper = document.querySelectorAll('.wrapper'),
			
				styles = '.gridsetoverlaywrap{display:block;padding:0 !important;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000;pointer-events:none;}.gridwrap{display:block;padding:0 !important;position:absolute;top:0;left:0;width:100%;height:100%;font-family:Helvetica, Arial, sans-serif !important;}.gridoverlay{display:block;padding:0 !important;position:relative;height:100%;overflow:hidden !important;background:none !important;border-bottom:1px solid #FFD800 !important;}.gridoverlay .gridset{display:block;padding:0 !important;width:100%;height:100%;opacity:0.8;border:none !important;position:relative !important;height:30px !important;border-top:1px solid #FFD800 !important;margin:0 !important;}.gridoverlay .gridset div{display:block;position:absolute !important;padding:0;text-align:left;border:1px solid #FFD800 !important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;height:100000em !important;top:0;margin-top:-1px !important;}.gridoverlay div small{font-size:10px !important;display:block;width:100%;text-align:center;font-weight:400 !important;letter-spacing: 1px !important;padding-top:0 !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;border-bottom:1px solid #FFD800 !important;color:#333 !important;background-color:#FFF79F !important;}.gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block;margin:0 !important;padding:0 !important;display:none;width:100%;position:fixed !important;z-index:10000 !important;bottom:0 !important;left:0 !important;height:30px !important;opacity:0.95;border-top:1px solid #FFD800 !important;color:#333;background-color:#FFF79F !important;font-family:Helvetica, Arial, sans-serif !important;}#gridscreenwidth{display:block;margin:0 !important;width:100% !important;max-width:none !important;text-align:center !important;font-size:12px;line-height:1;padding-top:8px !important;}#gridscreenwidth strong{text-transform:none;}.gridsetnoareas .gridsetoverlaywrap{display:block;position:fixed !important;}.gridsetnoareas .gridoverlay .gridset{position:relative !important;}[class*=-showgrid] .gridset[class*=-show], .gridsetnoareas .gridset{display:none;}',
				
				newstyles = document.createElement('style'),
				newwidth = document.createElement('div'),
				head = document.getElementsByTagName('head'),
				newfavicon = document.createElement('link'),
				newgsstyles = document.createElement('link');
		
		newstyles.id = 'gridsetoverlaystyles';
		newstyles.innerHTML = styles;
		newstyles.type = 'text/css';
		
		newwidth.id = 'gridscreenwidthwrap';
		newwidth.innerHTML = '<p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p>';
		
		b.appendChild(newstyles);
		b.appendChild(newwidth);
		
		var newwidthdisplay = (newwidth.currentStyle) ? newwidth.currentStyle.display : getComputedStyle(newwidth, null).display;
		
		newfavicon.rel = "shortcut icon";
		newfavicon.id = "gridsetfavicon";
		newfavicon.href = "http://dev.gridsetapp.com/app/img/favicon.ico";
		
		head[0].appendChild(newfavicon);
		
		if (newwidthdisplay != 'block') {
		
			newgsstyles.rel = "stylesheet";
			newgsstyles.id = "gridsetstyles";
			newgsstyles.href = "https://get.gridsetapp.com/25218/";
			head[0].appendChild(newgsstyles);
		
		}
		
		if (areacount) {
			
			var j = areacount;
			
			while (j-- > 0) {
			
				var area = gridareas[j];
			
				gs.buildgrid(area, j, areacount);
				
				if (window.getComputedStyle(area,null).getPropertyValue("position") == 'static') area.style.position = 'relative';
				
			}
			
		}
		else {
			
			if (!b.className.match('gridsetnoareas')) b.className += ' gridsetnoareas';
			
			gs.buildgrid(b, j, areacount);
		
		}
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	buildgrid: function (area, j, showgrid) {
		
		var set = JSON.parse('{"id":"25218","name":"ICC alpha 2","grids":{"d":{"name":"ICC desktop","prefix":"d","rangeMin":"768","rangeMax":"none","columns":{"d1":{"name":"d1","unit":null,"percent":6.04166666,"px":46.4},"d2":{"name":"d2","unit":null,"percent":6.04166666,"px":46.4},"d3":{"name":"d3","unit":null,"percent":6.04166666,"px":46.4},"d4":{"name":"d4","unit":null,"percent":6.04166666,"px":46.4},"d5":{"name":"d5","unit":null,"percent":6.04166666,"px":46.4},"d6":{"name":"d6","unit":null,"percent":6.04166666,"px":46.4},"d7":{"name":"d7","unit":null,"percent":6.04166666,"px":46.4},"d8":{"name":"d8","unit":null,"percent":6.04166666,"px":46.4},"d9":{"name":"d9","unit":null,"percent":6.04166666,"px":46.4},"d10":{"name":"d10","unit":null,"percent":6.04166666,"px":46.4},"d11":{"name":"d11","unit":null,"percent":6.04166666,"px":46.4},"d12":{"name":"d12","unit":null,"percent":6.04166666,"px":46.4}},"gutter":{"unit":null,"px":19.2,"percent":2.5},"ratio":{"name":"even","value":1}},"m":{"name":"ICC mobile","prefix":"m","rangeMin":"250","rangeMax":"767","columns":{"m1":{"name":"m1","unit":null,"percent":6.25,"px":15.63},"m2":{"name":"m2","unit":null,"percent":16.8359375,"px":42.09},"m3":{"name":"m3","unit":null,"percent":16.8359375,"px":42.09},"m4":{"name":"m4","unit":null,"percent":16.8359375,"px":42.09},"m5":{"name":"m5","unit":null,"percent":16.8359375,"px":42.09},"m6":{"name":"m6","unit":null,"percent":6.25,"px":15.63}},"gutter":{"unit":null,"px":10,"percent":4},"ratio":{"name":"even","value":1}}},"prefixes":{"index":["d","m"]}}'),
		
				gridwrap = document.createElement('div'),
				gridinner = (showgrid) ? '<div class="gridwrap"><div class="gridoverlay">' : '<div class="gridwrap"><div class="gridoverlay wrapper">',
				
				awidth = area.clientWidth,
				apadleft = (parseFloat(gs.getstyle(area, 'padding-left')) / awidth) * 100,
				apadright = (parseFloat(gs.getstyle(area, 'padding-right')) / awidth) * 100;
		
		if (showgrid) gridwrap.className = 'gridsetoverlaywrap';
		else gridwrap.className = 'gridsetoverlaywrap';
		
		for (j in set.grids) {
		
			var grid = set.grids[j],
					showreg = new RegExp('(^| )' + grid.prefix + '-showgrid( |$)');
			
			if (!showgrid || area.className.match(showreg)) {
			
				gridinner += '<div style="padding-left:' + apadleft + '%;padding-right:' + apadright + '%;" class="gridset ' + grid.prefix + '-show">';
				
				for (k in grid.columns) {
					
					var col = grid.columns[k];
					
					gridinner += '<div class="' + col.name + '"><small>' + col.name + '</small></div>';
				
				}
				
				gridinner += '</div>';
			
			}
		}
		
		gridinner += '</div></div>';
		
		gridwrap.innerHTML = gridinner;
		
		area.appendChild(gridwrap);
		
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	},
	
	getstyle : function (t, p){
	
	 if (t.currentStyle) return t.currentStyle[p];
	 else if (document.defaultView && document.defaultView.getComputedStyle) return document.defaultView.getComputedStyle(t, "").getPropertyValue(p);
	 else return t.style[p];
	 
	}


};

gs.init();