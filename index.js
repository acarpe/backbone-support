Backbone = require('backbone')
_ = require('underscore')
Support = require('./backbone-support/support.js');
Support.Observer = require('./backbone-support/observer.js');
Support.CompositeView = require('./backbone-support/composite_view.js');
Support.SwappingRouter = require('./backbone-support/swapping_router.js');
module.exports = Support;
