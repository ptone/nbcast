// leave at least 2 line with only a star on it below, or doc generation fails
/**
 *
 *
 * Placeholder for custom user javascript
 * mainly to be overridden in profile/static/js/custom.js
 * This will always be an empty file in IPython
 *
 * User could add any javascript in the `profile/static/js/custom.js` file
 * (and should create it if it does not exist).
 * It will be executed by the ipython notebook at load time.
 *
 * Same thing with `profile/static/css/custom.css` to inject custom css into the notebook.
 *
 * Example :
 *
 * Create a custom button in toolbar that execute `%qtconsole` in kernel
 * and hence open a qtconsole attached to the same kernel as the current notebook
 *
 *    $([IPython.events]).on('notebook_loaded.Notebook', function(){
 *        IPython.toolbar.add_buttons_group([
 *            {
 *                 'label'   : 'run qtconsole',
 *                 'icon'    : 'ui-icon-calculator', // select your icon from http://jqueryui.com/themeroller/
 *                 'callback': function(){IPython.notebook.kernel.execute('%qtconsole')}
 *            }
 *            // add more button here if needed.
 *            ]);
 *    });
 *
 * @module IPython
 * @namespace IPython
 * @class customjs
 * @static
 *
 */

console.log('customjs');


// load popcorn dynamically
var script = document.createElement("script");
script.type = "text/javascript";
script.src = '/static/js/popcorn.js';
document.getElementsByTagName("head")[0].appendChild(script);

var resetCells = function() {
    while (IPython.notebook.ncells() > 1) {
        IPython.notebook.delete_cell(1);
    };
    var pop = Popcorn("#ourvideo");
    pop.pause();
    pop.currentTime(0);
}

var videoContinue = function() {
    var pop = Popcorn("#ourvideo");
    pop.play();
    var index = IPython.notebook.ncells()-1;
    // target = IPython.notebook.get_cell(index);
    IPython.notebook.delete_cell(index)
};

var videoPause = function () {
    var pop = Popcorn("#ourvideo");
    pop.pause();
    var target = IPython.notebook.insert_cell_at_bottom('markdown');
    // target = IPython.notebook.get_cell(IPython.notebook.ncells()-1);
    target.set_rendered('<a href="#" onclick="videoContinue();">Continue</a>');
}

window.onload = function() {
    // there should be a better way to detect when popcorn ready?
    console.log("window loaded");
    // console.log(Popcorn);
    if (IPython.notebook.test_notebook_name('notebook casting')) {
        var pop = Popcorn("#ourvideo");

        // console.log(pop);

        pop.cue(35, function () {
            var target = IPython.notebook.insert_cell_at_bottom('code');
            target.set_text("gases = ['He', 'Ne', 'Ar', 'Kr']");
            target.execute();
        });

        pop.cue(41, function () {
            var target = IPython.notebook.insert_cell_at_bottom('code');
            // target = IPython.notebook.get_cell(IPython.notebook.ncells()-1);
            target.set_text("gases[1]");
        });

        pop.cue(43, function () {
            target = IPython.notebook.get_cell(IPython.notebook.ncells()-1);
            target.execute();
        });

        pop.cue("00:01:09", function () {
            var target = IPython.notebook.insert_cell_at_bottom('code');
            // target = IPython.notebook.get_cell(IPython.notebook.ncells()-1);
            target.set_text("gases[4]");
        });

        pop.cue("00:01:10", function () {
            target = IPython.notebook.get_cell(IPython.notebook.ncells()-1);
            target.execute();
        });

        pop.cue("00:01:13", function () {
            pop.pause();
            videoPause();
        });

        pop.cue("00:01:16", function () {
            var target = IPython.notebook.insert_cell_at_bottom('code');
            // target = IPython.notebook.get_cell(IPython.notebook.ncells()-1);
            target.set_text("len(gases)");
            target.execute();
        });

        pop.cue("00:01:24", function () {
            var target = IPython.notebook.insert_cell_at_bottom('code');
            // target = IPython.notebook.get_cell(IPython.notebook.ncells()-1);
            target.set_text("etheric = []\nlen(etheric)");
            target.execute();
        });

        pop.cue("00:01:30", function () {
            var target = IPython.notebook.insert_cell_at_bottom('markdown');
            target.set_rendered("<h2>This is the end of the proof of concept</h2>");
            pop.pause();
        });
        pop.play();
    }; //end notebook name test
}; //end onload

function popcornReady() {
    // this is called when script loaded, but before Popcorn global ready
    console.log("popcorn ready callback");
    console.log(Popcorn);
    }
// script.onreadystatechange= function () {
    // this fires before the Popcorn object is fully loaded
    // if (this.readyState == 'complete') popcornReady();
// }
script.onload= popcornReady();

$([IPython.events]).on('notebook_loaded.Notebook', function(){
    // the notebook_loaded even may also fire before Popcorn is ready
});
