"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wretch_1 = __importDefault(require("wretch"));
const config_1 = require("../config");
class SignUpApi {
    static subscribeNewsletter(subscribeNewsletterParams) {
        return wretch_1.default()
            .url(config_1.NEWSLETTER_ENDPOINT)
            .post(subscribeNewsletterParams)
            .res();
    }
}
exports.SignUpApi = SignUpApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2NvbXBsZXgtdmVyc2lvbi9hcGkvc2lnbnVwL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCLHNDQUFnRDtBQU1oRCxNQUFhLFNBQVM7SUFDYixNQUFNLENBQUMsbUJBQW1CLENBQUMseUJBQStDO1FBQy9FLE9BQU8sZ0JBQU0sRUFBRTthQUNaLEdBQUcsQ0FBQyw0QkFBbUIsQ0FBQzthQUN4QixJQUFJLENBQUMseUJBQXlCLENBQUM7YUFDL0IsR0FBRyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQ0Y7QUFQRCw4QkFPQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvbWF0dGhpZXUvcHJvamVjdHMvbGVhcm5pbmcvTmV3c2xldHRlckFwcC9zcmMvY29tcGxleC12ZXJzaW9uL2FwaS9zaWdudXAvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdyZXRjaCBmcm9tICd3cmV0Y2gnO1xuXG5pbXBvcnQgeyBORVdTTEVUVEVSX0VORFBPSU5UIH0gZnJvbSAnLi4vY29uZmlnJztcblxuaW50ZXJmYWNlIElWYWxpZGF0ZUVtYWlsUGFyYW1zIHtcbiAgZW1haWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNpZ25VcEFwaSB7XG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlTmV3c2xldHRlcihzdWJzY3JpYmVOZXdzbGV0dGVyUGFyYW1zOiBJVmFsaWRhdGVFbWFpbFBhcmFtcykge1xuICAgIHJldHVybiB3cmV0Y2goKVxuICAgICAgLnVybChORVdTTEVUVEVSX0VORFBPSU5UKVxuICAgICAgLnBvc3Qoc3Vic2NyaWJlTmV3c2xldHRlclBhcmFtcylcbiAgICAgIC5yZXMoKTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9