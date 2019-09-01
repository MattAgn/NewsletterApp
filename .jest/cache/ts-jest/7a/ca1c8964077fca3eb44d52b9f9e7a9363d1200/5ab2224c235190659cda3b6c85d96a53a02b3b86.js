"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = __importDefault(require("styled-components/native"));
exports.Container = native_1.default.View `
  flex: 1;
  padding-horizontal: 20;
  align-items: center;
  background-color: #1565c0;
  justify-content: center;
`;
exports.Card = native_1.default.View `
  background-color: white;
  border-radius: 6px;
  padding-horizontal: 16;
  padding-vertical: 8;
  width: 100%;
  align-items: center;
`;
exports.Title = native_1.default.Text `
  font-size: 18;
  margin-vertical: 20px;
`;
exports.Input = native_1.default.TextInput `
  align-self: flex-start;
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2NvbXBvbmVudHMvU3R5bGVkQ29tcG9uZW50cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRUFBOEM7QUFFakMsUUFBQSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7Ozs7OztDQU1uQyxDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7Ozs7Ozs7Q0FPOUIsQ0FBQztBQUVXLFFBQUEsS0FBSyxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOzs7Q0FHL0IsQ0FBQztBQUVXLFFBQUEsS0FBSyxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFBOztDQUVwQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGlldS9wcm9qZWN0cy9sZWFybmluZy9OZXdzbGV0dGVyQXBwL3NyYy9jb21wb25lbnRzL1N0eWxlZENvbXBvbmVudHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5WaWV3YFxuICBmbGV4OiAxO1xuICBwYWRkaW5nLWhvcml6b250YWw6IDIwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2NWMwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkLlZpZXdgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctaG9yaXpvbnRhbDogMTY7XG4gIHBhZGRpbmctdmVydGljYWw6IDg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLlRleHRgXG4gIGZvbnQtc2l6ZTogMTg7XG4gIG1hcmdpbi12ZXJ0aWNhbDogMjBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5UZXh0SW5wdXRgXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5gO1xuIl0sInZlcnNpb24iOjN9