AFRAME.registerComponent('log', {
    schema: {
        event: { type: 'string', default: '' },
        message: { type: 'string', default: 'Hello, World!' }
    },
    init: function () {
        // Closure to access fresh `this.data` from event handler context.
        var self = this;

        // .init() is a good place to set up initial state and variables.
        // Store a reference to the handler so we can later remove it.
        this.eventHandlerFn = function () { console.log(self.data.message); };
    },
    update: function () {
        var data = this.data;
        var el = this.el;

        if (data.event) {
            el.addEventListener(data.event, this.eventHandlerFn);
        } else {
            console.log(data.message);
        }
    }
});