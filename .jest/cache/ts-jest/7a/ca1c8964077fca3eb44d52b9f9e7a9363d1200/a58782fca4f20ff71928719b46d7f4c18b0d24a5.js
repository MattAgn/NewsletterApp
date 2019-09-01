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
const test_helper_1 = require("../../../../utils/test.helper");
describe('[Page] Home', () => {
    beforeEach(() => {
        fetch_mock_1.default.reset();
    });
    it('should display succesful message on successful subscribe', async () => {
        // Setup
        fetch_mock_1.default.post(config_1.NEWSLETTER_ENDPOINT, 200);
        const page = test_helper_1.renderPage(react_1.default.createElement(Home_1.Home, null));
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
        const page = test_helper_1.renderPage(react_1.default.createElement(Home_1.Home, null));
        // What the user sees
        const EmailInput = page.getByPlaceholder(wording_1.wording.emailPlaceholder);
        const ValidateButton = page.getByText(wording_1.wording.validateEmail);
        // What the user does
        react_native_testing_library_1.fireEvent.changeText(EmailInput, 'hello@bam.co');
        react_native_testing_library_1.fireEvent.press(ValidateButton);
        // What feedback the user should expect
        const ErrorMessage = await react_native_testing_library_1.waitForElement(() => page.queryByText(wording_1.wording.subscriptionSuccessful));
        expect(ErrorMessage).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2NvbXBsZXgtdmVyc2lvbi9wYWdlcy9Ib21lL19fdGVzdHNfXy9Ib21lLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBc0M7Ozs7O0FBRXRDLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCLFFBQVE7QUFFUixpRkFBaUY7QUFDakYsZUFBZTtBQUNmLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsOENBQThDO0FBQzlDLFFBQVE7QUFFUix5RUFBeUU7QUFDekUsZUFBZTtBQUNmLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsOENBQThDO0FBQzlDLFFBQVE7QUFDUixNQUFNO0FBRU4sa0RBQTBCO0FBQzFCLCtFQUFpRjtBQUNqRiw0REFBbUM7QUFFbkMsbUVBQTZFO0FBQzdFLGtDQUErQjtBQUMvQix1REFBb0Q7QUFDcEQsK0RBQTJEO0FBRTNELFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxvQkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hFLFFBQVE7UUFDUixvQkFBUyxDQUFDLElBQUksQ0FBQyw0QkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxNQUFNLElBQUksR0FBRyx3QkFBVSxDQUFDLDhCQUFDLFdBQUksT0FBRyxDQUFDLENBQUM7UUFDbEMscUJBQXFCO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdELHFCQUFxQjtRQUNyQix3Q0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDakQsd0NBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEMsdUNBQXVDO1FBQ3ZDLE1BQU0sY0FBYyxHQUFHLE1BQU0sNkNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBTyxDQUFDLHNCQUFzQixDQUFDLENBQ2pELENBQUM7UUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDakUsUUFBUTtRQUNSLG9CQUFTLENBQUMsSUFBSSxDQUFDLDRCQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLHdCQUFVLENBQUMsOEJBQUMsV0FBSSxPQUFHLENBQUMsQ0FBQztRQUNsQyxxQkFBcUI7UUFDckIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QscUJBQXFCO1FBQ3JCLHdDQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNqRCx3Q0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoQyx1Q0FBdUM7UUFDdkMsTUFBTSxZQUFZLEdBQUcsTUFBTSw2Q0FBYyxDQUFDLEdBQUcsRUFBRSxDQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FDakQsQ0FBQztRQUNGLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGlldS9wcm9qZWN0cy9sZWFybmluZy9OZXdzbGV0dGVyQXBwL3NyYy9jb21wbGV4LXZlcnNpb24vcGFnZXMvSG9tZS9fX3Rlc3RzX18vSG9tZS50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZmV0Y2hNb2NrIGZyb20gJ2ZldGNoLW1vY2snO1xuXG4vLyBkZXNjcmliZSgnW1BhZ2VdIEhvbWUnLCAoKSA9PiB7XG4vLyAgIGJlZm9yZUVhY2goKCkgPT4ge1xuLy8gICAgIGZldGNoTW9jay5yZXNldCgpO1xuLy8gICB9KTtcblxuLy8gICBpdCgnc2hvdWxkIGRpc3BsYXkgc3VjY2VzZnVsIG1lc3NhZ2Ugb24gc3VjY2Vzc2Z1bCBzdWJzY3JpYmUnLCBhc3luYyAoKSA9PiB7XG4vLyAgICAgLy8gU0VUVVBcbi8vICAgICAvLyBXSEFUIFRIRSBVU0VSIFNFRVNcbi8vICAgICAvLyBXSEFUIFRIRSBVU0VSIERPRVNcbi8vICAgICAvLyBXSEFUIEZFRURCQUNLIFRIRSBVU0VSIFNIT1VMRCBFWFBFQ1Rcbi8vICAgfSk7XG5cbi8vICAgaXQoJ3Nob3VsZCBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugb24gZmFpbGVkIHN1YnNjcmliZScsIGFzeW5jICgpID0+IHtcbi8vICAgICAvLyBTRVRVUFxuLy8gICAgIC8vIFdIQVQgVEhFIFVTRVIgU0VFU1xuLy8gICAgIC8vIFdIQVQgVEhFIFVTRVIgRE9FU1xuLy8gICAgIC8vIFdIQVQgRkVFREJBQ0sgVEhFIFVTRVIgU0hPVUxEIEVYUEVDVFxuLy8gICB9KTtcbi8vIH0pO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCB3YWl0Rm9yRWxlbWVudCwgcmVuZGVyIH0gZnJvbSAncmVhY3QtbmF0aXZlLXRlc3RpbmctbGlicmFyeSc7XG5pbXBvcnQgZmV0Y2hNb2NrIGZyb20gJ2ZldGNoLW1vY2snO1xuXG5pbXBvcnQgeyBORVdTTEVUVEVSX0VORFBPSU5UIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcGxleC12ZXJzaW9uL2FwaS9jb25maWcnO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gJy4uL0hvbWUnO1xuaW1wb3J0IHsgd29yZGluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3dvcmRpbmcnO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3Rlc3QuaGVscGVyJztcblxuZGVzY3JpYmUoJ1tQYWdlXSBIb21lJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmZXRjaE1vY2sucmVzZXQoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBkaXNwbGF5IHN1Y2Nlc2Z1bCBtZXNzYWdlIG9uIHN1Y2Nlc3NmdWwgc3Vic2NyaWJlJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIFNldHVwXG4gICAgZmV0Y2hNb2NrLnBvc3QoTkVXU0xFVFRFUl9FTkRQT0lOVCwgMjAwKTtcbiAgICBjb25zdCBwYWdlID0gcmVuZGVyUGFnZSg8SG9tZSAvPik7XG4gICAgLy8gV2hhdCB0aGUgdXNlciBzZWVzXG4gICAgY29uc3QgRW1haWxJbnB1dCA9IHBhZ2UuZ2V0QnlQbGFjZWhvbGRlcih3b3JkaW5nLmVtYWlsUGxhY2Vob2xkZXIpO1xuICAgIGNvbnN0IFZhbGlkYXRlQnV0dG9uID0gcGFnZS5nZXRCeVRleHQod29yZGluZy52YWxpZGF0ZUVtYWlsKTtcbiAgICAvLyBXaGF0IHRoZSB1c2VyIGRvZXNcbiAgICBmaXJlRXZlbnQuY2hhbmdlVGV4dChFbWFpbElucHV0LCAnaGVsbG9AYmFtLmNvJyk7XG4gICAgZmlyZUV2ZW50LnByZXNzKFZhbGlkYXRlQnV0dG9uKTtcbiAgICAvLyBXaGF0IGZlZWRiYWNrIHRoZSB1c2VyIHNob3VsZCBleHBlY3RcbiAgICBjb25zdCBTdWNjZXNzTWVzc2FnZSA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCgpID0+XG4gICAgICBwYWdlLnF1ZXJ5QnlUZXh0KHdvcmRpbmcuc3Vic2NyaXB0aW9uU3VjY2Vzc2Z1bClcbiAgICApO1xuICAgIGV4cGVjdChTdWNjZXNzTWVzc2FnZSkudG9CZVRydXRoeSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGRpc3BsYXkgZXJycm9yIG1lc3NhZ2Ugb24gZmFpbGVkIHN1YnNjcmliZScsIGFzeW5jICgpID0+IHtcbiAgICAvLyBTZXR1cFxuICAgIGZldGNoTW9jay5wb3N0KE5FV1NMRVRURVJfRU5EUE9JTlQsIDQwMCk7XG4gICAgY29uc3QgcGFnZSA9IHJlbmRlclBhZ2UoPEhvbWUgLz4pO1xuICAgIC8vIFdoYXQgdGhlIHVzZXIgc2Vlc1xuICAgIGNvbnN0IEVtYWlsSW5wdXQgPSBwYWdlLmdldEJ5UGxhY2Vob2xkZXIod29yZGluZy5lbWFpbFBsYWNlaG9sZGVyKTtcbiAgICBjb25zdCBWYWxpZGF0ZUJ1dHRvbiA9IHBhZ2UuZ2V0QnlUZXh0KHdvcmRpbmcudmFsaWRhdGVFbWFpbCk7XG4gICAgLy8gV2hhdCB0aGUgdXNlciBkb2VzXG4gICAgZmlyZUV2ZW50LmNoYW5nZVRleHQoRW1haWxJbnB1dCwgJ2hlbGxvQGJhbS5jbycpO1xuICAgIGZpcmVFdmVudC5wcmVzcyhWYWxpZGF0ZUJ1dHRvbik7XG4gICAgLy8gV2hhdCBmZWVkYmFjayB0aGUgdXNlciBzaG91bGQgZXhwZWN0XG4gICAgY29uc3QgRXJyb3JNZXNzYWdlID0gYXdhaXQgd2FpdEZvckVsZW1lbnQoKCkgPT5cbiAgICAgIHBhZ2UucXVlcnlCeVRleHQod29yZGluZy5zdWJzY3JpcHRpb25TdWNjZXNzZnVsKVxuICAgICk7XG4gICAgZXhwZWN0KEVycm9yTWVzc2FnZSkudG9CZVRydXRoeSgpO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9