"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageResolverV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
class MessageResolverV1 {
    constructor(config) {
        this._config = new pip_services3_commons_nodex_1.ConfigParams();
        this._messages = {};
        if (config != null)
            this.configure(config);
    }
    configure(config) {
        this._config = config.getSection("message_templates");
    }
    put(name, template) {
        this._config[name] = template;
    }
    resolve(name) {
        if (name == null)
            return null;
        // Retrieve template first
        var message = this._messages[name];
        if (message)
            return message;
        let template = this._config.get(name);
        if (typeof template == 'string' && template != '') {
            // Construct a message
            message = {
                template: template
            };
            // Cache the message
            this._messages[name] = message;
            return message;
        }
        else {
            // Get configuration
            let config = this._config.getSection(name);
            // Construct a message
            message = {
                template: config.getAsString('template'),
                subject: config.getAsObject('subject'),
                text: config.getAsObject('text'),
                html: config.getAsObject('html')
            };
            // Check and cache the message
            if (message.template || message.subject || message.text || message.html)
                this._messages[name] = message;
            else
                message = null;
            return message;
        }
    }
    static fromTuples(...tuples) {
        let result = new MessageResolverV1();
        if (tuples == null || tuples.length == 0)
            return result;
        for (let index = 0; index < tuples.length; index += 2) {
            if (index + 1 >= tuples.length)
                break;
            let name = pip_services3_commons_nodex_2.StringConverter.toString(tuples[index]);
            let template = tuples[index + 1];
            result.put(name, template);
        }
        return result;
    }
}
exports.MessageResolverV1 = MessageResolverV1;
//# sourceMappingURL=MessageResolverV1.js.map