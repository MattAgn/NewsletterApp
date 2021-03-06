"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_mock_1 = __importDefault(require("fetch-mock"));
const test_helper_1 = require("../../../../utils/test.helper");
describe('[Page] Home', () => {
    const props = test_helper_1.getPropsWithNavigation();
    beforeEach(() => {
        fetch_mock_1.default.reset();
    });
    it('should display succesful message on successful subscribe', async () => { });
    it('should navigate to about page on about button press', async () => { });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2Jhc2ljLXZlcnNpb24vcGFnZXMvSG9tZS9fX3Rlc3RzX18vSG9tZS50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQU9BLDREQUFtQztBQUtuQywrREFBdUU7QUFHdkUsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsTUFBTSxLQUFLLEdBQUcsb0NBQXNCLEVBQUUsQ0FBQztJQUV2QyxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2Qsb0JBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwREFBMEQsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9FLEVBQUUsQ0FBQyxxREFBcUQsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGlldS9wcm9qZWN0cy9sZWFybmluZy9OZXdzbGV0dGVyQXBwL3NyYy9iYXNpYy12ZXJzaW9uL3BhZ2VzL0hvbWUvX190ZXN0c19fL0hvbWUudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIGZpcmVFdmVudCxcbiAgd2FpdEZvckVsZW1lbnQsXG4gIHJlbmRlcixcbiAgZmx1c2hNaWNyb3Rhc2tzUXVldWUsXG59IGZyb20gJ3JlYWN0LW5hdGl2ZS10ZXN0aW5nLWxpYnJhcnknO1xuaW1wb3J0IGZldGNoTW9jayBmcm9tICdmZXRjaC1tb2NrJztcblxuaW1wb3J0IHsgTkVXU0xFVFRFUl9FTkRQT0lOVCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBsZXgtdmVyc2lvbi9hcGkvY29uZmlnJztcbmltcG9ydCB7IEhvbWUgfSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IHdvcmRpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy93b3JkaW5nJztcbmltcG9ydCB7IGdldFByb3BzV2l0aE5hdmlnYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy90ZXN0LmhlbHBlcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICcuLi8uLi8uLi9uYXZpZ2F0aW9uL3JvdXRlcyc7XG5cbmRlc2NyaWJlKCdbUGFnZV0gSG9tZScsICgpID0+IHtcbiAgY29uc3QgcHJvcHMgPSBnZXRQcm9wc1dpdGhOYXZpZ2F0aW9uKCk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgZmV0Y2hNb2NrLnJlc2V0KCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZGlzcGxheSBzdWNjZXNmdWwgbWVzc2FnZSBvbiBzdWNjZXNzZnVsIHN1YnNjcmliZScsIGFzeW5jICgpID0+IHt9KTtcblxuICBpdCgnc2hvdWxkIG5hdmlnYXRlIHRvIGFib3V0IHBhZ2Ugb24gYWJvdXQgYnV0dG9uIHByZXNzJywgYXN5bmMgKCkgPT4ge30pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=