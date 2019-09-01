"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Suppress React 16.8 act() warnings globally.
 * Waiting for react-native to support react 16.9
 */
exports.originalError = console.error;
console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
    }
    exports.originalError.call(console, ...args);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL3V0aWxzL3Rlc3Quc2V0dXAudHN4IiwibWFwcGluZ3MiOiI7O0FBQUE7OztHQUdHO0FBQ1UsUUFBQSxhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUMzQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRTtJQUMxQixJQUFJLDZCQUE2QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMvQyxPQUFPO0tBQ1I7SUFDRCxxQkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL3V0aWxzL3Rlc3Quc2V0dXAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VwcHJlc3MgUmVhY3QgMTYuOCBhY3QoKSB3YXJuaW5ncyBnbG9iYWxseS5cbiAqIFdhaXRpbmcgZm9yIHJlYWN0LW5hdGl2ZSB0byBzdXBwb3J0IHJlYWN0IDE2LjlcbiAqL1xuZXhwb3J0IGNvbnN0IG9yaWdpbmFsRXJyb3IgPSBjb25zb2xlLmVycm9yO1xuY29uc29sZS5lcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gIGlmICgvV2FybmluZy4qbm90IHdyYXBwZWQgaW4gYWN0Ly50ZXN0KGFyZ3NbMF0pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG9yaWdpbmFsRXJyb3IuY2FsbChjb25zb2xlLCAuLi5hcmdzKTtcbn07XG4iXSwidmVyc2lvbiI6M30=