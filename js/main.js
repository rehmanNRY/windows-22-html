var folders = document.querySelectorAll(".windows-folder-lists .windows-folder-list");
var updatefoldernum = document.querySelector(".folder-number-count");
if(folders.length > 1) {
    updatefoldernum.innerHTML = folders.length+' items';
} else {
    updatefoldernum.innerHTML = folders.length+' item';
}
window.addEventListener("load", function () {
	const loader = document.querySelector(".loaderx");
	loader.className += " hidden"; // class "loader hidden"
});
var winheight = document.querySelector('.windows-header');
var mainwindows = document.querySelector('.main-windows');
var winbody = document.querySelector('.windows-body');
var winheight_and_mainwin = mainwindows.offsetHeight - winheight.offsetHeight;
winbody.style.height = winheight_and_mainwin+'px';
var windowsdesktop = document.querySelector('.windows10-desktop-area').offsetHeight
var taskbar = document.querySelector('.windows10-taskbar').offsetHeight
var notificationbar = document.querySelector('.windows10-notification-panel')
var notification_height = windowsdesktop - taskbar;
notificationbar.style.height = notification_height+'px';
// sIGN IN
$(document).on('click', '.windows_login .login_user button', function() {
	$(".windows_login").addClass('active');
});
// Taskbar App
$(document).on('click', '.taskbar-icon-folder-explore', function() {
	$("body").addClass('file-explore-active');
	$(".main-windows").toggleClass('active');
	$(this).toggleClass('active');
});
$(document).on('click', '.main-windows .windows-minimize-btn', function() {
	$(".main-windows").removeClass('active');
	$(".taskbar-icon-folder-explore").removeClass('active')
});
$(document).on('click', '.main-windows .windows-maximize-btn', function() {
	$(".main-windows").addClass('maximized');
});
$(document).on('click', '.main-windows .windows-close-btn', function() {
	$("body").removeClass('file-explore-active');
	$(".main-windows").removeClass('active');
	$(".taskbar-icon-folder-explore").removeClass('active')
});
// SNIPPING TOOL
$(document).on('click', '.taskbar_icon_snipping_tool', function() {
	$("body").addClass('snipping_tool-active');
	$(".snipping_tool").toggleClass('active');
	$(this).toggleClass('active');
});
$(document).on('click', '.snipping_tool .window10_bing_topbar .minimize_button', function() {
	$(".snipping_tool").removeClass('active');
	$(".taskbar_icon_snipping_tool").removeClass('active')
});
$(document).on('click', '.snipping_tool .window10_bing_topbar .close_button', function() {
	$("body").removeClass('snipping_tool-active');
	$(".snipping_tool").removeClass('active');
	$(".taskbar_icon_snipping_tool").removeClass('active')
});
// Hacker net
$(document).on('click', '.hackker_typer_dot_net_button', function() {
	$("body").addClass('hacker-typer-active');
	$(".window_10_terminal").toggleClass('active');
	$(this).toggleClass('active');
});
$(document).on('click', '.window_10_terminal .window10_terminal_topbar_right .minimize_button', function() {
	$(".window_10_terminal").removeClass('active');
	$(".hackker_typer_dot_net_button").removeClass('active')
});
$(document).on('click', '.window_10_terminal .window10_terminal_topbar_right .close_button', function() {
	$("body").removeClass('hacker-typer-active');
	$(".window_10_terminal").removeClass('active');
	$(".hackker_typer_dot_net_button").removeClass('active')
});
// Info
$(document).on('click', '.info_button', function() {
	$("body").addClass('info-active');
	$(".windows_22_about").toggleClass('active');
	$(this).toggleClass('active');
});
$(document).on('click', '.windows_22_about button', function() {
	$("body").removeClass('info-active');
	$(".windows_22_about").removeClass('active');
	$(".info_button").removeClass('active')
});
// BING
$(document).on('click', '.bing_button', function() {
	$("body").addClass('bing-active');
	$(".window_10_bing").toggleClass('active');
	$(this).toggleClass('active');
});
$(document).on('click', '.window_10_bing .window10_bing_topbar_right .minimize_button', function() {
	$(".window_10_bing").removeClass('active');
	$(".bing_button").removeClass('active')
});
$(document).on('click', '.window_10_bing .window10_bing_topbar_right .close_button', function() {
	$("body").removeClass('bing-active');
	$(".window_10_bing").removeClass('active');
	$(".bing_button").removeClass('active')
});
// Taskbar settings
$(document).on('click', '.taskbar-icon-taskbar', function() {
	$("body").addClass('taskbar-settings-active');
	$(".taskbar_settings").addClass('active');
});
$(document).on('click', '.taskbar_settings-topbar_right', function(){
	$("body").removeClass('taskbar-settings-active');
	$(".taskbar_settings").removeClass('active');
});
// Taskbar templete
$(document).on('click', '.taskbar_setting_temp_normal', function() {
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_small_search');
	$("body").removeClass('taskbar_setting_black');
	$("body").removeClass('taskbar_setting_full_black');
	$("body").removeClass('taskbar_setting_half_black');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").removeClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_half_center', function() {
	$("body").addClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_small_search');
	$("body").removeClass('taskbar_setting_black');
	$("body").removeClass('taskbar_setting_full_black');
	$("body").removeClass('taskbar_setting_half_black');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").removeClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_center', function() {
	$("body").addClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_small_search');
	$("body").removeClass('taskbar_setting_black');
	$("body").removeClass('taskbar_setting_full_black');
	$("body").removeClass('taskbar_setting_half_black');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").removeClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_small_search', function() {
	$("body").addClass('taskbar_setting_small_search');
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_black');
	$("body").removeClass('taskbar_setting_full_black');
	$("body").removeClass('taskbar_setting_half_black');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").removeClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_black', function() {
	$("body").addClass('taskbar_setting_black');
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_small_search');
	$("body").removeClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_full_black');
	$("body").removeClass('taskbar_setting_half_black');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").addClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_black_normal', function() {
	$("body").addClass('taskbar_setting_black_normal');
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_small_search');
	$("body").removeClass('taskbar_setting_black');
	$("body").removeClass('taskbar_setting_full_black');
	$("body").removeClass('taskbar_setting_half_black');
	$("body").removeClass('taskbar_setting_black');
	$("body").addClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_half_black', function() {
	$("body").addClass('taskbar_setting_half_black');
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_small_search');
	$("body").removeClass('taskbar_setting_black');
	$("body").removeClass('taskbar_setting_full_black');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").removeClass('taskbar_setting_black');
	$("body").addClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_full_black', function() {
	$("body").addClass('taskbar_setting_full_black');
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_small_search');
	$("body").removeClass('taskbar_setting_black');
	$("body").removeClass('taskbar_setting_half_black');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").removeClass('taskbar_setting_black');
	$("body").addClass('start_menu_black_theme');
});
// Notification Panel
$(document).on('click','#cmenu', function() {
	$('.windows10-notification-panel').removeClass('active');
})
$(document).on('click', '.taskbar-notification', function() {
	$('.windows10-notification-panel').toggleClass('active');
	$(this).toggleClass('active');
})
// Quick setting change color on click
$(document).on('click', '.quick-item-div .quick-item', function() {
	$(".quick-item-div").addClass('quick-item_blue');
});
// Volume Event
$(document).on('click', '.volume-mute', function() {
	$(".taskbar-speaker.volume-mute").removeClass('volume-mute').addClass('volume-full');
	$(".taskbar-speaker i").removeClass('la-volume-mute').addClass('la-volume-up');
});
$(document).on('click', '.volume-full', function() {
	$(".taskbar-speaker.volume-full").removeClass('volume-full').addClass('volume-slow');
	$(".taskbar-speaker i").removeClass('la-volume-up').addClass('la-volume-down');
});
$(document).on('click', '.volume-slow', function() {
	$(".taskbar-speaker.volume-slow").removeClass('volume-slow').addClass('volume-mute');
	$(".taskbar-speaker i").removeClass('la-volume-down').addClass('la-volume-mute');
});
// Notification Panel Common Links Toggle
var notification_claps = document.querySelector(".collapse-notification-footer-toggle")
$(document).on('click', '.collapse-notification-footer-toggle', function() {
	$(".windows10-notification-footer").toggleClass('active');
	$(this).toggleClass('uncollapsed')
	notification_claps.innerHTML = 'Collapse';
});
$(document).on('click', '.collapse-notification-footer-toggle.uncollapsed', function() {
	$(".windows10-notification-footer").removeClass('active');
	$(this).removeClass('uncollapsed')
	notification_claps.innerHTML = 'Expand';
});
// Chrome browser
var url_input = $("#url_input");
$(document).on('click', '.submit-browser-url', function(e) {
	e.preventDefault();
	var input_submit_url = url_input.val();
	document.getElementById('url_output').src = input_submit_url
});
$(document).on('click', '.go-to-home', function() {
	url_input.val('https://')
	document.getElementById('url_output').src = 'https://www.google.com/webhp?igu=1';
});
$(document).on('click', '.taskbar-icon-chrome', function() {
	$("body").addClass('chrome-browser-active');
	$(".chrome-browser-area").toggleClass('active');
	$(this).toggleClass('active');
});
$(document).on('click', '.chrome-browser-area .windows-minimize-btn', function() {
	$(".chrome-browser-area").removeClass('active');
	$(".taskbar-icon-chrome").removeClass('active')
});
$(document).on('click', '.chrome-browser-area .windows-close-btn', function() {
	$("body").removeClass('chrome-browser-active');
	$(".chrome-browser-area").removeClass('active');
	$(".taskbar-icon-chrome").removeClass('active')
});
// Windows10 Start Bar
$('body').on('click', function() {
	$(".windows10-start-area").removeClass('active');
});
$(document).on('click', '.taskbar-window-icon', function() {
	$(".windows10-start-area").addClass('active');
});


window.onload = function() {
    initDragElement();
    initResizeElement();
	chromeinitDragElement();
};

function chromeinitDragElement() {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	var popups = document.getElementsByClassName("chrome-browser-area");
	var elmnt = null;
	var currentZIndex = 100; //TODO reset z index when a threshold is passed

	for (var i = 0; i < popups.length; i++) {
		var popup = popups[i];
		var header = getHeader(popup);

		popup.onmousedown = function() {
		this.style.zIndex = "" + ++currentZIndex;
		};

		if (header) {
		header.parentPopup = popup;
		header.onmousedown = dragMouseDown;
		}
	}

	function dragMouseDown(e) {
		elmnt = this.parentPopup;
		elmnt.style.zIndex = "" + ++currentZIndex;

		e = e || window.event;
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		if (!elmnt) {
		return;
		}

		e = e || window.event;
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}

	function getHeader(element) {
		var headerItems = element.getElementsByClassName("chrome-browser-drag");

		if (headerItems.length === 1) {
		return headerItems[0];
		}

		return null;
	}
}



  
  function initDragElement() {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    var popups = document.getElementsByClassName("main-windows");
    var elmnt = null;
    var currentZIndex = 100; //TODO reset z index when a threshold is passed
  
    for (var i = 0; i < popups.length; i++) {
      var popup = popups[i];
      var header = getHeader(popup);
  
      popup.onmousedown = function() {
        this.style.zIndex = "" + ++currentZIndex;
      };
  
      if (header) {
        header.parentPopup = popup;
        header.onmousedown = dragMouseDown;
      }
    }
  
    function dragMouseDown(e) {
      elmnt = this.parentPopup;
      elmnt.style.zIndex = "" + ++currentZIndex;
  
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
	  console.log(pos3 + ' ' + pos4);
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      if (!elmnt) {
        return;
      }
  
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
	  console.log(pos3 + ' ' + pos4);
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  
    function getHeader(element) {
      var headerItems = element.getElementsByClassName("drag-window");
  
      if (headerItems.length === 1) {
        return headerItems[0];
      }
  
      return null;
    }
  }
  
  function initResizeElement() {
    var popups = document.getElementsByClassName("main-windows");
    var element = null;
    var startX, startY, startWidth, startHeight;
  
    for (var i = 0; i < popups.length; i++) {
      var p = popups[i];
  
      var right = document.createElement("div");
      right.className = "resizer-right";
      p.appendChild(right);
      right.addEventListener("mousedown", initDrag, false);
      right.parentPopup = p;
  
      var bottom = document.createElement("div");
      bottom.className = "resizer-bottom";
      p.appendChild(bottom);
      bottom.addEventListener("mousedown", initDrag, false);
      bottom.parentPopup = p;
  
      var both = document.createElement("div");
      both.className = "resizer-both";
      p.appendChild(both);
      both.addEventListener("mousedown", initDrag, false);
      both.parentPopup = p;
    }
  
    function initDrag(e) {
      element = this.parentPopup;
  
      startX = e.clientX;
      startY = e.clientY;
      startWidth = parseInt(
        document.defaultView.getComputedStyle(element).width,
        10
      );
      startHeight = parseInt(
        document.defaultView.getComputedStyle(element).height,
        10
      );
      document.documentElement.addEventListener("mousemove", doDrag, false);
      document.documentElement.addEventListener("mouseup", stopDrag, false);
    }
  
    function doDrag(e) {
      element.style.width = startWidth + e.clientX - startX + "px";
      element.style.height = startHeight + e.clientY - startY + "px";
    }
  
    function stopDrag() {
      document.documentElement.removeEventListener("mousemove", doDrag, false);
      document.documentElement.removeEventListener("mouseup", stopDrag, false);
    }
  }
  



//  Current Date Time
var datefield = document.querySelector(".tody-date")
var timefield = document.querySelector(".tody-time")
var startbar_dayname = document.querySelector(".date-day-name");
var startbar_day = document.querySelector(".date-day");
const dayNames = [
	"Saturday", "Sunday", "Monday", "Tuesday", "Wednersday", "Tursday", "Friday"
];
var today = new Date();
startbar_dayname.innerHTML = dayNames[today.getDate()];
startbar_day.innerHTML = today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dd = String(today.getDate()).padStart(2, '');
var mm = String(today.getMonth() + 1).padStart(2, ''); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
datefield.innerHTML = today;


function getDateTime() {
	var now     = new Date();
	var hour    = now.getHours();
	var minute  = now.getMinutes();
	var ampm = hour >= 12 ? 'pm' : 'am';
	hour = hour % 12;
	hour = hour ? hour : 12; // the hour '0' should be '12'
	if(hour.toString().length == 1) {
		 hour = ''+hour;
	}
	if(minute.toString().length == 1) {
		 minute = '0'+minute;
	} 
	var dateTime = hour+':'+minute+' ' + ampm;   
	 return dateTime;
}
// example usage: realtime clock
setInterval(function(){
	currentTime = getDateTime();
	timefield.innerHTML = currentTime;
}, 1000);


// Browser Right Click Menu
var menu;

var cmen = [
	{
		"text": "View",
		"sub": [
			{
				"text": "Large icons"
			},
			{
				"text": "Medium icons"
			},
			{
				"text": "Small icons",
				"icon": "<i class='las la-circle'></i>"
			},
			{
				"type": ContextMenu.DIVIDER
			},
			{
				"text": "Auto arrange icons",
			},
			{
				"text": "Align icons to grid",
			},
			{
				"type": ContextMenu.DIVIDER
			},
			{
				"text": "Show desktop icons",
				"icon": "<i class='la la-check'></i>"
			},
		]
	},
	{
		"text": "Sort by",
		"sub": [
			{
				"text": "Name"
			},
			{
				"text": "Size"
			},
			{
				"text": "Item type"
			},
			{
				"text": "Date modified"
			}
		]
	},
	{
		"text": "<a href=''>Refresh</a>",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Paste",
		"enabled": false
	},
	{
		"text": "Paste shortcut",
		"enabled": false
	},
	{
		"text": "Undo Copy <span class='undo-copy'>Ctrl+Z</span>",
	},
	{
		"text": "Cmder Here",
	},
	{
		"text": "Git GUI Here",
	},
	{
		"text": "Git Bash Here",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "New",
		"sub": [
			{
				"text": "Folder",
			},
			{
				"text": "Shortcut",
			},
			{
				"type": ContextMenu.DIVIDER
			},
			{
				"text": "WinRAR archive",

			},
			{
				"text": "Rich Text Document",
			},
			{
				"text": "Text Document",
			},
			{
				"text": "WinRAR ZIP archive",
			},
		]
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Display settings",
	},
	{
		"text": "Personalize",
	}
];

window.addEventListener("load", function(){
	menu = new ContextMenu(cmen);

	document.getElementById('cmenu').addEventListener("contextmenu", function(e){
		menu.display(e);
	});
});





// Taskbar Right-click menu
var taskbarRMenu;

var taskbar_cmen = [
	{
		"text": "Toolbars",
		"sub": [
			{
				"text": "Address"
			},
			{
				"text": "Links"
			},
			{
				"text": "Desktop"
			},
			{
				"type": ContextMenu.DIVIDER
			},
			{
				"text": "New toolbar..."
			},
		]
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Search",
		"sub": [
			{
				"text": "Hidden"
			},
			{
				"text": "Show search icon",
			},
			{
				"text": "Show search box",
				"icon": "<i class='la la-check'></i>"
			},
		]
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "News and interests",
		"sub": [
			{
				"text": "Show icon and text"
			},
			{
				"text": "Show icon only",
			},
			{
				"text": "Hidden",
				"icon": "<i class='la la-check'></i>"
			},
		]
	},
	{
		"text": "Show Cartana button",
		"icon": "<i class='la la-check'></i>"
	},
	{
		"text": "Show Task View button",
		"icon": "<i class='la la-check'></i>"
	},
	{
		"text": "Show People on the taskbar",
	},
	{
		"text": "Show Windows lnk Workspace button",
	},
	{
		"text": "Show touch keyboard button",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Cascade windows",
	},
	{
		"text": "Show windows stacked",
	},
	{
		"text": "Show windows side by side",
	},
	{
		"text": "Show the desktop",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Task Manager",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Lock the taskbar",
		"icon": "<i class='la la-check'></i>"
	},
	{
		"text": "Taskbar settings",
		"icon": "<i class='la la-cog'></i>"
	},
];

window.addEventListener("load", function(){
	taskbarRMenu = new ContextMenu(taskbar_cmen);

	document.getElementById('windows10-taskbar').addEventListener("contextmenu", function(e){
		taskbarRMenu.display(e);
	});
});