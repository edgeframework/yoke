/*
 * Copyright 2011-2012 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// helpers

function wrap(callback) {
    return new com.jetdrone.vertx.yoke.Middleware({
        handle: function (request, next) {
            callback(request, function (error) {
                if (error === undefined) {
                    next.handle(null);
                } else {
                    next.handle(error);
                }
            });
        }
    });
}

// Main Object

function JSRouter() {
    this.jMiddleware = new com.jetdrone.vertx.yoke.middleware.Router();
}

JSRouter.prototype.handle = function (request, next) {
    this.jMiddleware.handle(request, next);
};


JSRouter.prototype.get = function (pattern, callback) {
    this.jMiddleware.get(pattern, wrap(callback));
    return this;
};

JSRouter.prototype.put = function (pattern, callback) {
    this.jMiddleware.put(pattern, wrap(callback));
    return this;
};

JSRouter.prototype.post = function (pattern, callback) {
    this.jMiddleware.post(pattern, wrap(callback));
    return this;
};

JSRouter.prototype.delete = function (pattern, callback) {
    this.jMiddleware.delete(pattern, wrap(callback));
    return this;
};

JSRouter.prototype.options = function (pattern, callback) {
    this.jMiddleware.options(pattern, wrap(callback));
    return this;
};

JSRouter.prototype.head = function (pattern, callback) {
    this.jMiddleware.head(pattern, wrap(callback));
    return this;
};

JSRouter.prototype.trace = function (pattern, callback) {
    this.jMiddleware.trace(pattern, wrap(callback));
    return this;
};

JSRouter.prototype.connect = function (pattern, callback) {
    this.jMiddleware.connect(pattern, wrap(callback));
    return this;
};

JSRouter.prototype.patch = function (pattern, callback) {
    this.jMiddleware.patch(pattern, wrap(callback));
    return this;
};

JSRouter.prototype.all = function (pattern, callback) {
    this.jMiddleware.all(pattern, wrap(callback));
    return this;
};

module.exports = JSRouter;