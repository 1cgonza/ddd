(function() {
  'use strict';
  var container = document.getElementById('ddd-container');

  var req     = new DDD.DataRequest();
  var year    = 2008;
  var summary = {};
  var current;

  /*----------  SET STAGE  ----------*/
  var stage = DDD.canvas(container);
  stage.ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';

  var summaryContainer              = document.createElement('ol');
  summaryContainer.style.zIndex     = '9999';
  summaryContainer.style.position   = 'absolute';
  summaryContainer.style.top        = '30px';
  summaryContainer.style.left       = '30px';
  summaryContainer.style.lineHeight = '1.8';
  summaryContainer.style.fontSize   = '12px';
  summaryContainer.style.margin     = 0;
  container.appendChild(summaryContainer);

  DDD.yearsMenu(2008, 2015, 2008, clickEvent, menuReady);

  function clickEvent(event) {
    if (event.target !== current) {
      summaryContainer.innerHTML = '';
      req.abort();
      DDD.resetCurrent(current, event.target);
      current = event.target;
      year = Number(event.target.textContent);
      loadData();
    }
  }

  function menuReady(menu, first) {
    container.appendChild(menu);
    current = first;
    loadData();
  }

  function loadData() {
    if (summary.hasOwnProperty(year)) {
      renderSummary();
    } else {
      req.json({
        url: '../../data/monitor/violencia-geo-' + year + '.json',
        container: container,
        loadingMsg: 'Loading Data'
      })
      .then(function(d) {
        categorizeEvents(d);
        renderSummary();
      })
      .catch(function(err) {
        console.error(err);
      });
    }
  }

  function categorizeEvents(d) {
    var totalVictimsKey = ' Total de Victimas en el año ' + year;
    var cats = {};
    cats[totalVictimsKey] = 0;

    for (var i = 0; i < d.length; i++) {
      var event = d[i];

      for (var j = 0; j < event.cat.length; j++) {
        var name = event.cat[j];

        if (!cats.hasOwnProperty(name)) {
          cats[name] = [];
          cats[name].totalVictimas = 0;
        }

        if (event.hasOwnProperty('vTotal')) {
          var count = event.vTotal;
          // global count
          cats[totalVictimsKey] += count;
          // category count
          cats[name].totalVictimas += count;
        }

        cats[name].push(event);
      }

    }

    summary[year] = cats;
  }

  function renderSummary() {
    var d = sortObj(summary[year]);

    for (var category in d) {
      var ele;

      if (Array.isArray(d[category])) {
        ele = document.createElement('li');
        ele.textContent = category + ' | #Eventos: ' + d[category].length + ', #Victimas: ' + d[category].totalVictimas;
        ele._dddCategory = category;
        ele.style.cursor = 'pointer';
        ele.style.color = '#777';
        ele.onclick = drawChart;
      } else {
        ele = document.createElement('h3');
        ele.textContent = category + ': ' + d[category];
      }

      summaryContainer.appendChild(ele);
    }
  }

  function drawChart(eve) {
    var category  = eve.target._dddCategory;
    var d         = summary[year][category];
    var timeStart = Date.parse(year + '/01/01 00:00:00') / 1000;
    var timeEnd   = Date.parse(year + 1 + '/01/01 00:00:00') / 1000;
    var step      = stage.w / (timeEnd - timeStart);
    var y         = eve.target.offsetTop + 40;

    for (var i = 0; i < d.length; i++) {
      var timeEvent = d[i].hasOwnProperty('fecha') ? d[i].fecha.unix : null;
      var victims = d[i].hasOwnProperty('vTotal') ? d[i].vTotal : 0;
      var timeX = timeEvent - timeStart;

      stage.ctx.beginPath();
      stage.ctx.moveTo(timeX * step, y);
      stage.ctx.lineTo(timeX * step, y - victims);
      stage.ctx.stroke();
    }
  }

  function sortObj(obj, order) {
    var arr = [];
    var i;
    var ret = {};

    for (var key in obj) {
      arr.push(key);
    }

    arr.sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    if (order === 'desc') {
      for (i = arr.length - 1; i >= 0; i--) {
        ret[ arr[i] ] = obj[ arr[i] ];
      }
    } else {
      for (i = 0; i < arr.length; i++) {
        ret[ arr[i] ] = obj[ arr[i] ];
      }
    }

    return ret;
  }

})();