"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fetch_mock_1 = __importDefault(require("fetch-mock"));
const react_native_testing_library_1 = require("react-native-testing-library");
const config_1 = require("../../../../complex-version/api/config");
const Home_1 = require("../Home");
const wording_1 = require("../../../../utils/wording");
describe('[Page] Home', () => {
    beforeEach(() => {
        fetch_mock_1.default.reset();
    });
    it('should display succesful message on successful subscribe', async () => {
        // SETUP
        fetch_mock_1.default.post(config_1.NEWSLETTER_ENDPOINT, 200);
        const page = react_native_testing_library_1.render(react_1.default.createElement(Home_1.Home, null));
        // WHAT THE USER SEES
        const EmailInput = page.getByPlaceholder(wording_1.wording.emailPlaceholder);
        const ValidateButton = page.getByText(wording_1.wording.validateEmail);
        // WHAT THE USER DOES
        react_native_testing_library_1.fireEvent.changeText(EmailInput, 'hello@bam.co');
        react_native_testing_library_1.fireEvent.press(ValidateButton);
        // WHAT FEEDBACK THE USER SHOULD EXPECT
        const SuccessMessage = await react_native_testing_library_1.waitForElement(() => page.queryByText(wording_1.wording.subscriptionSuccessful));
        expect(SuccessMessage).toBeTruthy();
    });
    it('should display error message on failed subscribe', async () => {
        // SETUP
        // WHAT THE USER SEES
        // WHAT THE USER DOES
        // WHAT FEEDBACK THE USER SHOULD EXPECT
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2Jhc2ljLXZlcnNpb24vcGFnZXMvSG9tZS9fX3Rlc3RzX18vSG9tZS50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiw0REFBbUM7QUFDbkMsK0VBQWlGO0FBQ2pGLG1FQUE2RTtBQUM3RSxrQ0FBK0I7QUFDL0IsdURBQW9EO0FBRXBELFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxvQkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hFLFFBQVE7UUFDUixvQkFBUyxDQUFDLElBQUksQ0FBQyw0QkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxNQUFNLElBQUksR0FBRyxxQ0FBTSxDQUFDLDhCQUFDLFdBQUksT0FBRyxDQUFDLENBQUM7UUFDOUIscUJBQXFCO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdELHFCQUFxQjtRQUNyQix3Q0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDakQsd0NBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEMsdUNBQXVDO1FBQ3ZDLE1BQU0sY0FBYyxHQUFHLE1BQU0sNkNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBTyxDQUFDLHNCQUFzQixDQUFDLENBQ2pELENBQUM7UUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEUsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsdUNBQXVDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2Jhc2ljLXZlcnNpb24vcGFnZXMvSG9tZS9fX3Rlc3RzX18vSG9tZS50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoTW9jayBmcm9tICdmZXRjaC1tb2NrJztcbmltcG9ydCB7IHJlbmRlciwgd2FpdEZvckVsZW1lbnQsIGZpcmVFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZS10ZXN0aW5nLWxpYnJhcnknO1xuaW1wb3J0IHsgTkVXU0xFVFRFUl9FTkRQT0lOVCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBsZXgtdmVyc2lvbi9hcGkvY29uZmlnJztcbmltcG9ydCB7IEhvbWUgfSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IHdvcmRpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy93b3JkaW5nJztcblxuZGVzY3JpYmUoJ1tQYWdlXSBIb21lJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmZXRjaE1vY2sucmVzZXQoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBkaXNwbGF5IHN1Y2Nlc2Z1bCBtZXNzYWdlIG9uIHN1Y2Nlc3NmdWwgc3Vic2NyaWJlJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIFNFVFVQXG4gICAgZmV0Y2hNb2NrLnBvc3QoTkVXU0xFVFRFUl9FTkRQT0lOVCwgMjAwKTtcbiAgICBjb25zdCBwYWdlID0gcmVuZGVyKDxIb21lIC8+KTtcbiAgICAvLyBXSEFUIFRIRSBVU0VSIFNFRVNcbiAgICBjb25zdCBFbWFpbElucHV0ID0gcGFnZS5nZXRCeVBsYWNlaG9sZGVyKHdvcmRpbmcuZW1haWxQbGFjZWhvbGRlcik7XG4gICAgY29uc3QgVmFsaWRhdGVCdXR0b24gPSBwYWdlLmdldEJ5VGV4dCh3b3JkaW5nLnZhbGlkYXRlRW1haWwpO1xuICAgIC8vIFdIQVQgVEhFIFVTRVIgRE9FU1xuICAgIGZpcmVFdmVudC5jaGFuZ2VUZXh0KEVtYWlsSW5wdXQsICdoZWxsb0BiYW0uY28nKTtcbiAgICBmaXJlRXZlbnQucHJlc3MoVmFsaWRhdGVCdXR0b24pO1xuICAgIC8vIFdIQVQgRkVFREJBQ0sgVEhFIFVTRVIgU0hPVUxEIEVYUEVDVFxuICAgIGNvbnN0IFN1Y2Nlc3NNZXNzYWdlID0gYXdhaXQgd2FpdEZvckVsZW1lbnQoKCkgPT5cbiAgICAgIHBhZ2UucXVlcnlCeVRleHQod29yZGluZy5zdWJzY3JpcHRpb25TdWNjZXNzZnVsKVxuICAgICk7XG4gICAgZXhwZWN0KFN1Y2Nlc3NNZXNzYWdlKS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGZhaWxlZCBzdWJzY3JpYmUnLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gU0VUVVBcbiAgICAvLyBXSEFUIFRIRSBVU0VSIFNFRVNcbiAgICAvLyBXSEFUIFRIRSBVU0VSIERPRVNcbiAgICAvLyBXSEFUIEZFRURCQUNLIFRIRSBVU0VSIFNIT1VMRCBFWFBFQ1RcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==