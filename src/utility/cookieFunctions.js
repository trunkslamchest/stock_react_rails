;(function(env) {

  var cookieFunctions = function(method, cookie, value){ return new cookieFunctions.init(method, cookie, value)[method] }

  cookieFunctions.init = function(method, cookie, value){
    this.decodeCookies = decodeURIComponent(document.cookie)
    this.parsedCookies = this.parse()
    this[method] = this[method](cookie, value)
  }

  cookieFunctions.prototype = {

    parse: function() {
      let cookieObj = {}, splitCookies = this.decodeCookies.split(';')

      for(let cookie of splitCookies){
        let splitSingleCookie = cookie.trim().split('=')
        cookieObj[splitSingleCookie[0]] = splitSingleCookie[1]
      }

      return cookieObj
    },

    getCookie: function(cookie) {
      for(let cookieKey in this.parsedCookies) {
        if(cookieKey === cookie) {
          return `${cookieKey}=${this.parsedCookies[cookieKey]}`
        }
      }
    },

    getCookieName: function(cookie) { return this.getCookie(cookie).split('=')[0] },

    getCookieValue: function(cookie) { return this.getCookie(cookie).split('=')[1] },

    all: function() { return this.decodeCookies },

    new: function(cookie, value){ document.cookie = `${cookie}=${value}` },

    set: function(cookie, value) { document.cookie = `${this.getCookieName(cookie)}=${value}` },

    reset: function(cookie) { document.cookie = `${this.getCookieName(cookie)}=0` },

    delete: function(cookie) { document.cookie = `${this.getCookieName(cookie)}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT` }
  }

  cookieFunctions.init.prototype = cookieFunctions.prototype

  module.exports = cookieFunctions

})(typeof window === 'undefined' ? global : window)