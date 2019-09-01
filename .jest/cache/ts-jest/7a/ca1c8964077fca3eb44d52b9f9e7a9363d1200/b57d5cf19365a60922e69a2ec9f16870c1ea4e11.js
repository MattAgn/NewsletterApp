"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const native_1 = __importDefault(require("styled-components/native"));
const wretch_1 = __importDefault(require("wretch"));
const Button_1 = require("../../../components/Button");
const wording_1 = require("../../../utils/wording");
const config_1 = require("../../../complex-version/api/config");
const StyledComponents_1 = require("../../../components/StyledComponents");
exports.Home = () => {
    const [email, setEmail] = react_1.useState('');
    const [isSuccess, setIsSuccess] = react_1.useState(null);
    const onValidate = () => {
        wretch_1.default(config_1.NEWSLETTER_ENDPOINT)
            .post({ email })
            .res()
            .then(() => setIsSuccess(true))
            .catch(() => setIsSuccess(false));
    };
    return (react_1.default.createElement(StyledComponents_1.Container, null,
        react_1.default.createElement(StyledComponents_1.Card, null,
            react_1.default.createElement(StyledComponents_1.Title, null, wording_1.wording.subscribe),
            react_1.default.createElement(StyledComponents_1.Input, { placeholder: wording_1.wording.emailPlaceholder, value: email, onChangeText: setEmail }),
            react_1.default.createElement(Button_1.Button, { title: wording_1.wording.validateEmail, onPress: onValidate }),
            isSuccess && react_1.default.createElement(SuccessMessage, null, wording_1.wording.subscriptionSuccessful),
            isSuccess === false && react_1.default.createElement(ErrorMessage, null, wording_1.wording.basicError))));
};
const SuccessMessage = native_1.default.Text `
  color: green;
`;
const ErrorMessage = native_1.default.Text `
  color: red;
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2Jhc2ljLXZlcnNpb24vcGFnZXMvSG9tZS9Ib21lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMkQ7QUFDM0Qsc0VBQThDO0FBQzlDLG9EQUE0QjtBQUU1Qix1REFBb0Q7QUFDcEQsb0RBQWlEO0FBQ2pELGdFQUEwRTtBQUMxRSwyRUFBcUY7QUFFeEUsUUFBQSxJQUFJLEdBQXNCLEdBQUcsRUFBRTtJQUMxQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLGdCQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxnQkFBUSxDQUFpQixJQUFJLENBQUMsQ0FBQztJQUVqRSxNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUU7UUFDdEIsZ0JBQU0sQ0FBQyw0QkFBbUIsQ0FBQzthQUN4QixJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUNmLEdBQUcsRUFBRTthQUNMLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCw4QkFBQyw0QkFBUztRQUNSLDhCQUFDLHVCQUFJO1lBQ0gsOEJBQUMsd0JBQUssUUFBRSxpQkFBTyxDQUFDLFNBQVMsQ0FBUztZQUNsQyw4QkFBQyx3QkFBSyxJQUFDLFdBQVcsRUFBRSxpQkFBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsR0FBSTtZQUN0Riw4QkFBQyxlQUFNLElBQUMsS0FBSyxFQUFFLGlCQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxVQUFVLEdBQUk7WUFDNUQsU0FBUyxJQUFJLDhCQUFDLGNBQWMsUUFBRSxpQkFBTyxDQUFDLHNCQUFzQixDQUFrQjtZQUM5RSxTQUFTLEtBQUssS0FBSyxJQUFJLDhCQUFDLFlBQVksUUFBRSxpQkFBTyxDQUFDLFVBQVUsQ0FBZ0IsQ0FDcEUsQ0FDRyxDQUNiLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7Q0FFakMsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOztDQUUvQixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGlldS9wcm9qZWN0cy9sZWFybmluZy9OZXdzbGV0dGVyQXBwL3NyYy9iYXNpYy12ZXJzaW9uL3BhZ2VzL0hvbWUvSG9tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJztcbmltcG9ydCB3cmV0Y2ggZnJvbSAnd3JldGNoJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgd29yZGluZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3dvcmRpbmcnO1xuaW1wb3J0IHsgTkVXU0xFVFRFUl9FTkRQT0lOVCB9IGZyb20gJy4uLy4uLy4uL2NvbXBsZXgtdmVyc2lvbi9hcGkvY29uZmlnJztcbmltcG9ydCB7IENvbnRhaW5lciwgQ2FyZCwgVGl0bGUsIElucHV0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TdHlsZWRDb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEhvbWU6IEZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcblxuICBjb25zdCBvblZhbGlkYXRlID0gKCkgPT4ge1xuICAgIHdyZXRjaChORVdTTEVUVEVSX0VORFBPSU5UKVxuICAgICAgLnBvc3QoeyBlbWFpbCB9KVxuICAgICAgLnJlcygpXG4gICAgICAudGhlbigoKSA9PiBzZXRJc1N1Y2Nlc3ModHJ1ZSkpXG4gICAgICAuY2F0Y2goKCkgPT4gc2V0SXNTdWNjZXNzKGZhbHNlKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxUaXRsZT57d29yZGluZy5zdWJzY3JpYmV9PC9UaXRsZT5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPXt3b3JkaW5nLmVtYWlsUGxhY2Vob2xkZXJ9IHZhbHVlPXtlbWFpbH0gb25DaGFuZ2VUZXh0PXtzZXRFbWFpbH0gLz5cbiAgICAgICAgPEJ1dHRvbiB0aXRsZT17d29yZGluZy52YWxpZGF0ZUVtYWlsfSBvblByZXNzPXtvblZhbGlkYXRlfSAvPlxuICAgICAgICB7aXNTdWNjZXNzICYmIDxTdWNjZXNzTWVzc2FnZT57d29yZGluZy5zdWJzY3JpcHRpb25TdWNjZXNzZnVsfTwvU3VjY2Vzc01lc3NhZ2U+fVxuICAgICAgICB7aXNTdWNjZXNzID09PSBmYWxzZSAmJiA8RXJyb3JNZXNzYWdlPnt3b3JkaW5nLmJhc2ljRXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuY29uc3QgU3VjY2Vzc01lc3NhZ2UgPSBzdHlsZWQuVGV4dGBcbiAgY29sb3I6IGdyZWVuO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLlRleHRgXG4gIGNvbG9yOiByZWQ7XG5gO1xuIl0sInZlcnNpb24iOjN9