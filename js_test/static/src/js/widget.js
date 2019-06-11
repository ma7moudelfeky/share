odoo.define('js_test', function(require) {
"use strict";
    var registry = require('web.field_registry');
    var basic_fields = require('web.basic_fields');
    var InputField = basic_fields.InputField;

    var test = InputField.extend({
        template: null,
        className: 'o_field_test',
        tagName: 'span',
        supportedFieldTypes: ['char'],
        resetOnAnyFieldChange: true,
        events: _.extend({}, InputField.prototype.events, {
            "focusin": "_onClick",
            "focusout": "_onNotClick",
        }),

        init: function () {
            this._super.apply(this, arguments);
        },
        _onClick: function () {
            console.log('Field In');
            this.$el.addClass('o_test');
            return this._rpc({
                model: 'gym.subscription',
                method: 'confirm',
                args: [self.id],
            });
        },
        _onNotClick: function () {
            console.log('Field Out');
            this.$el.removeClass('o_test');
        },
    });
    registry.add('test', test);
});