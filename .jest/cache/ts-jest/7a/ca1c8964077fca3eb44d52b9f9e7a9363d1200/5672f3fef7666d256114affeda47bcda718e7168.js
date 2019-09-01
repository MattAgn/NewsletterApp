"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_testing_library_1 = require("react-native-testing-library");
const react_redux_1 = require("react-redux");
const Toaster_1 = require("../components/Toaster");
const redux_1 = require("redux");
const reducer_1 = require("../complex-version/modules/reducer");
const saga_1 = __importDefault(require("../complex-version/modules/saga"));
const redux_saga_1 = __importDefault(require("redux-saga"));
const sagaMiddleware = redux_saga_1.default();
exports.renderPage = (page) => {
    const store = redux_1.createStore(reducer_1.rootReducer, redux_1.applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(saga_1.default);
    return react_native_testing_library_1.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
        page,
        react_1.default.createElement(Toaster_1.Toaster, null)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL3V0aWxzL3Rlc3QuaGVscGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUE0QztBQUM1QywrRUFBc0Q7QUFDdEQsNkNBQXVDO0FBRXZDLG1EQUFnRDtBQUNoRCxpQ0FBcUQ7QUFDckQsZ0VBQWlFO0FBQ2pFLDJFQUF1RDtBQUN2RCw0REFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztBQUVqQyxRQUFBLFVBQVUsR0FBRyxDQUFDLElBQWtCLEVBQUUsRUFBRTtJQUMvQyxNQUFNLEtBQUssR0FBRyxtQkFBVyxDQUFDLHFCQUFXLEVBQUUsdUJBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLGNBQWMsQ0FBQyxHQUFHLENBQUMsY0FBUSxDQUFDLENBQUM7SUFFN0IsT0FBTyxxQ0FBTSxDQUNYLDhCQUFDLHNCQUFRLElBQUMsS0FBSyxFQUFFLEtBQUs7UUFDbkIsSUFBSTtRQUNMLDhCQUFDLGlCQUFPLE9BQUcsQ0FDRixDQUNaLENBQUM7QUFDSixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL3V0aWxzL3Rlc3QuaGVscGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtbmF0aXZlLXRlc3RpbmctbGlicmFyeSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVG9hc3Rlcic7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tICcuLi9jb21wbGV4LXZlcnNpb24vbW9kdWxlcy9yZWR1Y2VyJztcbmltcG9ydCB3YXRjaEFsbCBmcm9tICcuLi9jb21wbGV4LXZlcnNpb24vbW9kdWxlcy9zYWdhJztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChwYWdlOiBSZWFjdEVsZW1lbnQpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSk7XG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bih3YXRjaEFsbCk7XG5cbiAgcmV0dXJuIHJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIHtwYWdlfVxuICAgICAgPFRvYXN0ZXIgLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcbiJdLCJ2ZXJzaW9uIjozfQ==