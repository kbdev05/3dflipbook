function init(container) {
  var instance;
  if(window.jQuery) {
    var $ = window.jQuery;
    instance = {
      floatWnd: container.find('.float-wnd'),
      binds: {
        showDropMenu: function(e) {
          e.preventDefault();
          var el = $(e.target);
          while(!el.hasClass('toggle')) {
            el = $(el[0].parentNode);
          }
          var menu = el.find('.menu');
          if(menu.hasClass('hidden')) {
            container.find('.ctrl .fnavbar .menu').addClass('hidden');
            menu.removeClass('hidden');
            e.stopPropagation();
          }
        },
        hideDropMenu: function() {
          container.find('.ctrl .fnavbar .menu').addClass('hidden');
        },
        pickFloatWnd: function(e) {
          if(instance.pos) {
            instance.binds.dropFloatWnd();
          }
          else {
            instance.pos = {
              x: e.pageX,
              y: e.pageY
            };
          }
        },
        moveFloatWnd: function(e) {
          if(instance.pos) {
            var dv = {
              x: e.pageX-instance.pos.x,
              y: e.pageY-instance.pos.y
            }, old = {
              x: parseInt(instance.floatWnd.css('left')),
              y: parseInt(instance.floatWnd.css('top'))
            };
            instance.floatWnd.css('left', old.x+dv.x+'px').css('top', old.y+dv.y+'px');
            instance.pos = {
              x: e.pageX,
              y: e.pageY
            };
          }
        },
        dropFloatWnd: function() {
          delete instance.pos;
        },
        jsCenter: function() {
          var ns = container.find('.js-center');
          for(var i=0; i<ns.length; ++i) {
            var n = $(ns[i]), parentWidth = $(ns[i].parentNode).width(), width = n.width();
            n.css('left', 0.5*(parentWidth-width)+'px');
          }
        }
      },
      appLoaded: function() {
        instance.binds.jsCenter();
      },
      dispose: function() {
        container.find('.ctrl .fnavbar .fnav .toggle').off('click', instance.binds.showDropMenu);
        $(container[0].ownerDocument).off('click', instance.binds.hideDropMenu);

        $(container[0].ownerDocument).off('mousemove', instance.binds.moveFloatWnd);
        $(container[0].ownerDocument).off('mouseup', instance.binds.dropFloatWnd);
        instance.floatWnd.find('.header').off('mousedown', instance.binds.pickFloatWnd);

        $(container[0].ownerDocument.defaultView).off('resize', instance.binds.jsCenter);
      }
    };
    container.find('.ctrl .fnavbar .fnav .toggle').on('click', instance.binds.showDropMenu);
    $(container[0].ownerDocument).on('click', instance.binds.hideDropMenu);

    $(container[0].ownerDocument).on('mousemove', instance.binds.moveFloatWnd);
    $(container[0].ownerDocument).on('mouseup', instance.binds.dropFloatWnd);
    instance.floatWnd.find('.header').on('mousedown', instance.binds.pickFloatWnd);

    $(container[0].ownerDocument.defaultView).on('resize', instance.binds.jsCenter);
    instance.binds.jsCenter();
  }
  else {
    instance = {
      dispose: function() {
      }
    };
    console.error('jQuery is not found');
  }
  return instance;
} init
This is a change for 2019-06-09:30:00
This is a change for 2020-05-15:30:00
This is a change for 2019-02-10:00:00
This is a change for 2024-09-12:30:00
This is a change for 2024-05-14:30:00
This is a change for 2017-02-10:30:00
This is a change for 2023-04-12:00:00
This is a change for 2014-05-13:30:00
This is a change for 2022-10-09:00:00
This is a change for 2017-09-15:00:00
This is a change for 2015-05-09:00:00
This is a change for 2022-12-14:30:00
This is a change for 2022-11-16:00:00
This is a change for 2021-03-10:30:00
This is a change for 2021-03-14:00:00
This is a change for 2022-03-16:30:00
This is a change for 2022-03-11:00:00
This is a change for 2022-05-15:00:00
This is a change for 2017-05-13:30:00
This is a change for 2015-11-11:30:00
This is a change for 2014-07-13:30:00
This is a change for 2014-11-09:00:00
This is a change for 2019-08-15:30:00
This is a change for 2018-11-16:00:00
This is a change for 2016-12-09:00:00
This is a change for 2015-12-11:00:00
This is a change for 2017-03-12:30:00
This is a change for 2015-05-17:00:00
This is a change for 2015-05-14:30:00
This is a change for 2024-10-16:30:00
This is a change for 2017-12-15:00:00
This is a change for 2019-05-12:00:00
This is a change for 2016-11-09:30:00
This is a change for 2019-04-09:30:00
This is a change for 2018-08-12:30:00
This is a change for 2024-12-15:00:00
This is a change for 2016-11-12:00:00
This is a change for 2022-06-09:00:00
This is a change for 2015-12-12:00:00
This is a change for 2020-09-09:00:00
This is a change for 2018-03-12:00:00
This is a change for 2016-10-13:00:00
This is a change for 2016-10-15:00:00
