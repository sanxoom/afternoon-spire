window.app.factory("Global", function() {
    var _this = this;
    _this._data = {
        //user: window.user,
        user: 'mizan',
        authenticated: !! window.user
    };

    return _this._data;
});