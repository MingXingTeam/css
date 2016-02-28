var release = true,
    dist = "dist";
window.release = release;
typeof www_head == "undefined" && (www_head = '')

seajs.config({
    paths: {
        'style': www_head + '/style',
        'js': www_head + '/js',
        'dist': www_head + '/js/' + dist,
        'jquery': www_head + '/js/sea-modules/jquery',
        'bootstrap': www_head + '/js/sea-modules/bootstrap'
    },
    alias: {
        '$': 'jquery/jquery/1.8.3/jquery.js',
        'jquery': 'jquery/jquery/1.8.3/jquery.js'
        /*'jquery_ui': 'jquery/jquery_ui/1.10.4/jquery_ui_custom.min.js',
        'bootstrap': 'bootstrap/bootstrap/3.1.1/bootstrap.min.js',
        'select2': 'bootstrap/select2/3.4.8/select2.min.js',
        'select2_4': 'bootstrap/select2/4.0.0/select2.full.min.js',
        'datepicker': 'bootstrap/datepicker/2.0.0/datepicker.min.js',
        'daterangepicker': 'bootstrap/daterangepicker/1.3.7/daterangepicker.min.js',
        'datetimepicker': 'bootstrap/datetimepicker/2.0/datetimepicker.min.js',
        'swfobject': 'gallery/swfobject/2.2.0/swfobject.js', 
        'highcharts': 'gallery/highcharts/2.3.5/highcharts.min.js',
        'underscore': 'gallery/underscore/1.4.4/underscore.js',
        'backbone': 'gallery/backbone/1.0.0/backbone.js',
        'moment': 'gallery/moment/2.5.1/moment.min.js',
        'slimscroll': 'jquery/slimscroll/1.3.0/slimscroll.min.js',
        'sparkline': 'jquery/sparkline/2.1.2/jquery.sparkline.min.js',
        'event_drag': 'jquery/event_drag/2.2.0/jquery.event.drag.min.js',
        'row_sizing': 'jquery/row_sizing/0.0.3/jquery.grid.rowsizing.min.js',
        'validate': 'jquery/validate/1.12.0/jquery.validate.min.js',
        'wizard': 'jquery/wizard/jquery.form.wizard.min.js',
        'rangeSlider': 'jquery/rangeSlider/ion.rangeSlider.min.js',
        'tagsinput': 'jquery/tagsinput/1.1.0/jquery.tagsinput.min.js',
        'btagsinput': 'bootstrap/tagsinput/bootstrap-tagsinput.min.js',
        'chosen': 'jquery/chosen/0.9.11/jquery.chosen.min.js',
        'nestable': 'jquery/nestable/1.1.0/jquery.nestable.min.js',
        'jform': 'jquery/form/3.50.0/jquery.form.min.js',
        'jscolor': 'jquery/jscolor/1.4.1/jscolor.js',
        'typeahead': 'jquery/typeahead/0.10.5/typeahead.min.js',
        'plupload': 'gallery/plupload/2.1.2/plupload.full.min.js',
        'echarts': 'echarts/2.0.2/echarts-plain.js',
        'echarts-all': 'echarts/2.0.2/echarts-plain-map.js',
        'datatables': 'jquery/datatables/1.10.2/jquery.dataTables.min.js',
        'kindeditor': 'assets/kindeditor/kindeditor-all-min.js',
        'zeroclipboard': 'gallery/zeroclipboard/1.2.0/zeroclipboard.min.js'*/
    },
  /*  preload: ['$', 'bootstrap'],*/
    preload:['$'],
    map: [
        [/^(.*)\.js$/i, '$1\.js?v=' + www_version]
    ],
    debug: !release
});

window.log = function() {
    log.history = log.history || []; // store logs to an array for reference
    log.history.push(arguments);
    if (this.console) {
        arguments.callee = arguments.callee.caller;
        var newarr = [].slice.call(arguments);
        (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
    }
};
if (!window.console) {
    var names = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];
    window.console = {};
    for (var i = 0; i < names.length; ++i) window.console[names[i]] = function() {}
};
