"use strict";
// import fetchMock from 'fetch-mock';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// describe('[Page] Home', () => {
//   beforeEach(() => {
//     fetchMock.reset();
//   });
//   it('should display succesful message on successful subscribe', async () => {
//     // SETUP
//     // WHAT THE USER SEES
//     // WHAT THE USER DOES
//     // WHAT FEEDBACK THE USER SHOULD EXPECT
//   });
//   it('should display error message on failed subscribe', async () => {
//     // SETUP
//     // WHAT THE USER SEES
//     // WHAT THE USER DOES
//     // WHAT FEEDBACK THE USER SHOULD EXPECT
//   });
// });
const react_1 = __importDefault(require("react"));
const react_native_testing_library_1 = require("react-native-testing-library");
const fetch_mock_1 = __importDefault(require("fetch-mock"));
const config_1 = require("../../../../complex-version/api/config");
const Home_1 = require("../Home");
const wording_1 = require("../../../../utils/wording");
describe('[Page] Home', () => {
    beforeEach(() => {
        fetch_mock_1.default.reset();
    });
    it('should display succesful message on successful subscribe', async () => {
        // Setup
        fetch_mock_1.default.post(config_1.NEWSLETTER_ENDPOINT, 200);
        const page = react_native_testing_library_1.render(react_1.default.createElement(Home_1.Home, null));
        // What the user sees
        const EmailInput = page.getByPlaceholder(wording_1.wording.emailPlaceholder);
        const ValidateButton = page.getByText(wording_1.wording.validateEmail);
        // What the user does
        react_native_testing_library_1.fireEvent.changeText(EmailInput, 'hello@bam.co');
        react_native_testing_library_1.fireEvent.press(ValidateButton);
        // What feedback the user should expect
        const SuccessMessage = await react_native_testing_library_1.waitForElement(() => page.queryByText(wording_1.wording.subscriptionSuccessful));
        expect(SuccessMessage).toBeTruthy();
    });
    it('should display errror message on failed subscribe', async () => {
        // Setup
        fetch_mock_1.default.post(config_1.NEWSLETTER_ENDPOINT, 400);
        const page = react_native_testing_library_1.render(react_1.default.createElement(Home_1.Home, null));
        // What the user sees
        const EmailInput = page.getByPlaceholder(wording_1.wording.emailPlaceholder);
        const ValidateButton = page.getByText(wording_1.wording.validateEmail);
        // What the user does
        react_native_testing_library_1.fireEvent.changeText(EmailInput, 'hello@bam.co');
        react_native_testing_library_1.fireEvent.press(ValidateButton);
        // What feedback the user should expect
        const ErrorMessage = await react_native_testing_library_1.waitForElement(() => page.queryByText(wording_1.wording.basicError));
        expect(ErrorMessage).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2Jhc2ljLXZlcnNpb24vcGFnZXMvSG9tZS9fX3Rlc3RzX18vSG9tZS50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDOzs7OztBQUV0QyxrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLHlCQUF5QjtBQUN6QixRQUFRO0FBRVIsaUZBQWlGO0FBQ2pGLGVBQWU7QUFDZiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDhDQUE4QztBQUM5QyxRQUFRO0FBRVIseUVBQXlFO0FBQ3pFLGVBQWU7QUFDZiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDhDQUE4QztBQUM5QyxRQUFRO0FBQ1IsTUFBTTtBQUVOLGtEQUEwQjtBQUMxQiwrRUFBaUY7QUFDakYsNERBQW1DO0FBRW5DLG1FQUE2RTtBQUM3RSxrQ0FBK0I7QUFDL0IsdURBQW9EO0FBRXBELFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxvQkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hFLFFBQVE7UUFDUixvQkFBUyxDQUFDLElBQUksQ0FBQyw0QkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxNQUFNLElBQUksR0FBRyxxQ0FBTSxDQUFDLDhCQUFDLFdBQUksT0FBRyxDQUFDLENBQUM7UUFDOUIscUJBQXFCO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdELHFCQUFxQjtRQUNyQix3Q0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDakQsd0NBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEMsdUNBQXVDO1FBQ3ZDLE1BQU0sY0FBYyxHQUFHLE1BQU0sNkNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBTyxDQUFDLHNCQUFzQixDQUFDLENBQ2pELENBQUM7UUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDakUsUUFBUTtRQUNSLG9CQUFTLENBQUMsSUFBSSxDQUFDLDRCQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLHFDQUFNLENBQUMsOEJBQUMsV0FBSSxPQUFHLENBQUMsQ0FBQztRQUM5QixxQkFBcUI7UUFDckIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QscUJBQXFCO1FBQ3JCLHdDQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNqRCx3Q0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoQyx1Q0FBdUM7UUFDdkMsTUFBTSxZQUFZLEdBQUcsTUFBTSw2Q0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGlldS9wcm9qZWN0cy9sZWFybmluZy9OZXdzbGV0dGVyQXBwL3NyYy9iYXNpYy12ZXJzaW9uL3BhZ2VzL0hvbWUvX190ZXN0c19fL0hvbWUudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGZldGNoTW9jayBmcm9tICdmZXRjaC1tb2NrJztcblxuLy8gZGVzY3JpYmUoJ1tQYWdlXSBIb21lJywgKCkgPT4ge1xuLy8gICBiZWZvcmVFYWNoKCgpID0+IHtcbi8vICAgICBmZXRjaE1vY2sucmVzZXQoKTtcbi8vICAgfSk7XG5cbi8vICAgaXQoJ3Nob3VsZCBkaXNwbGF5IHN1Y2Nlc2Z1bCBtZXNzYWdlIG9uIHN1Y2Nlc3NmdWwgc3Vic2NyaWJlJywgYXN5bmMgKCkgPT4ge1xuLy8gICAgIC8vIFNFVFVQXG4vLyAgICAgLy8gV0hBVCBUSEUgVVNFUiBTRUVTXG4vLyAgICAgLy8gV0hBVCBUSEUgVVNFUiBET0VTXG4vLyAgICAgLy8gV0hBVCBGRUVEQkFDSyBUSEUgVVNFUiBTSE9VTEQgRVhQRUNUXG4vLyAgIH0pO1xuXG4vLyAgIGl0KCdzaG91bGQgZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGZhaWxlZCBzdWJzY3JpYmUnLCBhc3luYyAoKSA9PiB7XG4vLyAgICAgLy8gU0VUVVBcbi8vICAgICAvLyBXSEFUIFRIRSBVU0VSIFNFRVNcbi8vICAgICAvLyBXSEFUIFRIRSBVU0VSIERPRVNcbi8vICAgICAvLyBXSEFUIEZFRURCQUNLIFRIRSBVU0VSIFNIT1VMRCBFWFBFQ1Rcbi8vICAgfSk7XG4vLyB9KTtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpcmVFdmVudCwgd2FpdEZvckVsZW1lbnQsIHJlbmRlciB9IGZyb20gJ3JlYWN0LW5hdGl2ZS10ZXN0aW5nLWxpYnJhcnknO1xuaW1wb3J0IGZldGNoTW9jayBmcm9tICdmZXRjaC1tb2NrJztcblxuaW1wb3J0IHsgTkVXU0xFVFRFUl9FTkRQT0lOVCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBsZXgtdmVyc2lvbi9hcGkvY29uZmlnJztcbmltcG9ydCB7IEhvbWUgfSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IHdvcmRpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy93b3JkaW5nJztcblxuZGVzY3JpYmUoJ1tQYWdlXSBIb21lJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmZXRjaE1vY2sucmVzZXQoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBkaXNwbGF5IHN1Y2Nlc2Z1bCBtZXNzYWdlIG9uIHN1Y2Nlc3NmdWwgc3Vic2NyaWJlJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIFNldHVwXG4gICAgZmV0Y2hNb2NrLnBvc3QoTkVXU0xFVFRFUl9FTkRQT0lOVCwgMjAwKTtcbiAgICBjb25zdCBwYWdlID0gcmVuZGVyKDxIb21lIC8+KTtcbiAgICAvLyBXaGF0IHRoZSB1c2VyIHNlZXNcbiAgICBjb25zdCBFbWFpbElucHV0ID0gcGFnZS5nZXRCeVBsYWNlaG9sZGVyKHdvcmRpbmcuZW1haWxQbGFjZWhvbGRlcik7XG4gICAgY29uc3QgVmFsaWRhdGVCdXR0b24gPSBwYWdlLmdldEJ5VGV4dCh3b3JkaW5nLnZhbGlkYXRlRW1haWwpO1xuICAgIC8vIFdoYXQgdGhlIHVzZXIgZG9lc1xuICAgIGZpcmVFdmVudC5jaGFuZ2VUZXh0KEVtYWlsSW5wdXQsICdoZWxsb0BiYW0uY28nKTtcbiAgICBmaXJlRXZlbnQucHJlc3MoVmFsaWRhdGVCdXR0b24pO1xuICAgIC8vIFdoYXQgZmVlZGJhY2sgdGhlIHVzZXIgc2hvdWxkIGV4cGVjdFxuICAgIGNvbnN0IFN1Y2Nlc3NNZXNzYWdlID0gYXdhaXQgd2FpdEZvckVsZW1lbnQoKCkgPT5cbiAgICAgIHBhZ2UucXVlcnlCeVRleHQod29yZGluZy5zdWJzY3JpcHRpb25TdWNjZXNzZnVsKVxuICAgICk7XG4gICAgZXhwZWN0KFN1Y2Nlc3NNZXNzYWdlKS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZGlzcGxheSBlcnJyb3IgbWVzc2FnZSBvbiBmYWlsZWQgc3Vic2NyaWJlJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIFNldHVwXG4gICAgZmV0Y2hNb2NrLnBvc3QoTkVXU0xFVFRFUl9FTkRQT0lOVCwgNDAwKTtcbiAgICBjb25zdCBwYWdlID0gcmVuZGVyKDxIb21lIC8+KTtcbiAgICAvLyBXaGF0IHRoZSB1c2VyIHNlZXNcbiAgICBjb25zdCBFbWFpbElucHV0ID0gcGFnZS5nZXRCeVBsYWNlaG9sZGVyKHdvcmRpbmcuZW1haWxQbGFjZWhvbGRlcik7XG4gICAgY29uc3QgVmFsaWRhdGVCdXR0b24gPSBwYWdlLmdldEJ5VGV4dCh3b3JkaW5nLnZhbGlkYXRlRW1haWwpO1xuICAgIC8vIFdoYXQgdGhlIHVzZXIgZG9lc1xuICAgIGZpcmVFdmVudC5jaGFuZ2VUZXh0KEVtYWlsSW5wdXQsICdoZWxsb0BiYW0uY28nKTtcbiAgICBmaXJlRXZlbnQucHJlc3MoVmFsaWRhdGVCdXR0b24pO1xuICAgIC8vIFdoYXQgZmVlZGJhY2sgdGhlIHVzZXIgc2hvdWxkIGV4cGVjdFxuICAgIGNvbnN0IEVycm9yTWVzc2FnZSA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCgpID0+IHBhZ2UucXVlcnlCeVRleHQod29yZGluZy5iYXNpY0Vycm9yKSk7XG4gICAgZXhwZWN0KEVycm9yTWVzc2FnZSkudG9CZVRydXRoeSgpO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9