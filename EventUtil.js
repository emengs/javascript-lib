;
/**
 * 事件处理类
 * @param {Object} window
 */
(function(window) {
	var EventUtil = function() {}
	EventUtil.prototype.addEventHandler = function(element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	};
	EventUtil.prototype.removeHandler = function(element, type, handler) {
		if(element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if(element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	};
	window.EventUtil = EventUtil();
})(window);