"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fetch_mock_1 = __importDefault(require("fetch-mock"));
const config_1 = require("../../../api/config");
const Home_1 = require("../Home");
const react_native_testing_library_1 = require("react-native-testing-library");
const wording_1 = require("../../../../utils/wording");
const test_helper_1 = require("../../../../utils/test.helper");
describe('[Page] Home', () => {
    beforeEach(() => {
        fetch_mock_1.default.reset();
    });
    it('should display succesful message on successful subscribe', async () => {
        // SETUP
        fetch_mock_1.default.post(config_1.NEWSLETTER_ENDPOINT, 200);
        const page = test_helper_1.renderPage(react_1.default.createElement(Home_1.Home, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2NvbXBsZXgtdmVyc2lvbi9wYWdlcy9Ib21lL19fdGVzdHNfXy9Ib21lLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLDREQUFtQztBQUNuQyxnREFBMEQ7QUFDMUQsa0NBQStCO0FBQy9CLCtFQUF5RTtBQUN6RSx1REFBb0Q7QUFDcEQsK0RBQTJEO0FBRTNELFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxvQkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hFLFFBQVE7UUFDUixvQkFBUyxDQUFDLElBQUksQ0FBQyw0QkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxNQUFNLElBQUksR0FBRyx3QkFBVSxDQUFDLDhCQUFDLFdBQUksT0FBRyxDQUFDLENBQUM7UUFDbEMscUJBQXFCO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdELHFCQUFxQjtRQUNyQix3Q0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDakQsd0NBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEMsdUNBQXVDO1FBQ3ZDLE1BQU0sY0FBYyxHQUFHLE1BQU0sNkNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBTyxDQUFDLHNCQUFzQixDQUFDLENBQ2pELENBQUM7UUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEUsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsdUNBQXVDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2NvbXBsZXgtdmVyc2lvbi9wYWdlcy9Ib21lL19fdGVzdHNfXy9Ib21lLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2hNb2NrIGZyb20gJ2ZldGNoLW1vY2snO1xuaW1wb3J0IHsgTkVXU0xFVFRFUl9FTkRQT0lOVCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb25maWcnO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gJy4uL0hvbWUnO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZS10ZXN0aW5nLWxpYnJhcnknO1xuaW1wb3J0IHsgd29yZGluZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3dvcmRpbmcnO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3Rlc3QuaGVscGVyJztcblxuZGVzY3JpYmUoJ1tQYWdlXSBIb21lJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmZXRjaE1vY2sucmVzZXQoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBkaXNwbGF5IHN1Y2Nlc2Z1bCBtZXNzYWdlIG9uIHN1Y2Nlc3NmdWwgc3Vic2NyaWJlJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIFNFVFVQXG4gICAgZmV0Y2hNb2NrLnBvc3QoTkVXU0xFVFRFUl9FTkRQT0lOVCwgMjAwKTtcbiAgICBjb25zdCBwYWdlID0gcmVuZGVyUGFnZSg8SG9tZSAvPik7XG4gICAgLy8gV0hBVCBUSEUgVVNFUiBTRUVTXG4gICAgY29uc3QgRW1haWxJbnB1dCA9IHBhZ2UuZ2V0QnlQbGFjZWhvbGRlcih3b3JkaW5nLmVtYWlsUGxhY2Vob2xkZXIpO1xuICAgIGNvbnN0IFZhbGlkYXRlQnV0dG9uID0gcGFnZS5nZXRCeVRleHQod29yZGluZy52YWxpZGF0ZUVtYWlsKTtcbiAgICAvLyBXSEFUIFRIRSBVU0VSIERPRVNcbiAgICBmaXJlRXZlbnQuY2hhbmdlVGV4dChFbWFpbElucHV0LCAnaGVsbG9AYmFtLmNvJyk7XG4gICAgZmlyZUV2ZW50LnByZXNzKFZhbGlkYXRlQnV0dG9uKTtcbiAgICAvLyBXSEFUIEZFRURCQUNLIFRIRSBVU0VSIFNIT1VMRCBFWFBFQ1RcbiAgICBjb25zdCBTdWNjZXNzTWVzc2FnZSA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCgpID0+XG4gICAgICBwYWdlLnF1ZXJ5QnlUZXh0KHdvcmRpbmcuc3Vic2NyaXB0aW9uU3VjY2Vzc2Z1bClcbiAgICApO1xuICAgIGV4cGVjdChTdWNjZXNzTWVzc2FnZSkudG9CZVRydXRoeSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGRpc3BsYXkgZXJyb3IgbWVzc2FnZSBvbiBmYWlsZWQgc3Vic2NyaWJlJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIFNFVFVQXG4gICAgLy8gV0hBVCBUSEUgVVNFUiBTRUVTXG4gICAgLy8gV0hBVCBUSEUgVVNFUiBET0VTXG4gICAgLy8gV0hBVCBGRUVEQkFDSyBUSEUgVVNFUiBTSE9VTEQgRVhQRUNUXG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=