"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_toaster_1 = require("react-native-toaster");
const rex_tils_1 = require("@martin_hotell/rex-tils");
const types_1 = require("./types");
const TOASTER_DURATION = 3000;
exports.ToasterActions = {
    showErrorMessage: (message) => rex_tils_1.createAction(types_1.ToasterActionTypes.ADD_TOAST, {
        text: message,
        duration: TOASTER_DURATION,
        styles: {
            container: { ...react_native_toaster_1.ToastStyles.error.container, backgroundColor: 'red' },
            text: {
                ...react_native_toaster_1.ToastStyles.text,
                fontSize: 13,
                lineHeight: 16,
                color: '#fff',
            },
        },
    }),
    showSuccessMessage: (message) => rex_tils_1.createAction(types_1.ToasterActionTypes.ADD_TOAST, {
        text: message,
        duration: TOASTER_DURATION,
        styles: {
            container: {
                ...react_native_toaster_1.ToastStyles.error.container,
                backgroundColor: 'green',
            },
            text: {
                ...react_native_toaster_1.ToastStyles.text,
                fontSize: 13,
                lineHeight: 16,
                color: '#fff',
            },
        },
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2NvbXBsZXgtdmVyc2lvbi9tb2R1bGVzL3RvYXN0ZXIvYWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBbUQ7QUFDbkQsc0RBQXFFO0FBQ3JFLG1DQUE2QztBQUU3QyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUVqQixRQUFBLGNBQWMsR0FBRztJQUM1QixnQkFBZ0IsRUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQ3BDLHVCQUFZLENBQUMsMEJBQWtCLENBQUMsU0FBUyxFQUFFO1FBQ3pDLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixNQUFNLEVBQUU7WUFDTixTQUFTLEVBQUUsRUFBRSxHQUFHLGtDQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFO1lBQ3JFLElBQUksRUFBRTtnQkFDSixHQUFHLGtDQUFXLENBQUMsSUFBSTtnQkFDbkIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsS0FBSyxFQUFFLE1BQU07YUFDZDtTQUNGO0tBQ0YsQ0FBQztJQUNKLGtCQUFrQixFQUFFLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FDdEMsdUJBQVksQ0FBQywwQkFBa0IsQ0FBQyxTQUFTLEVBQUU7UUFDekMsSUFBSSxFQUFFLE9BQU87UUFDYixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLE1BQU0sRUFBRTtZQUNOLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGtDQUFXLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQzlCLGVBQWUsRUFBRSxPQUFPO2FBQ3pCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEdBQUcsa0NBQVcsQ0FBQyxJQUFJO2dCQUNuQixRQUFRLEVBQUUsRUFBRTtnQkFDWixVQUFVLEVBQUUsRUFBRTtnQkFDZCxLQUFLLEVBQUUsTUFBTTthQUNkO1NBQ0Y7S0FDRixDQUFDO0NBQ0wsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvbWF0dGhpZXUvcHJvamVjdHMvbGVhcm5pbmcvTmV3c2xldHRlckFwcC9zcmMvY29tcGxleC12ZXJzaW9uL21vZHVsZXMvdG9hc3Rlci9hY3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2FzdFN0eWxlcyB9IGZyb20gJ3JlYWN0LW5hdGl2ZS10b2FzdGVyJztcbmltcG9ydCB7IEFjdGlvbnNVbmlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQG1hcnRpbl9ob3RlbGwvcmV4LXRpbHMnO1xuaW1wb3J0IHsgVG9hc3RlckFjdGlvblR5cGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IFRPQVNURVJfRFVSQVRJT04gPSAzMDAwO1xuXG5leHBvcnQgY29uc3QgVG9hc3RlckFjdGlvbnMgPSB7XG4gIHNob3dFcnJvck1lc3NhZ2U6IChtZXNzYWdlOiBzdHJpbmcpID0+XG4gICAgY3JlYXRlQWN0aW9uKFRvYXN0ZXJBY3Rpb25UeXBlcy5BRERfVE9BU1QsIHtcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogVE9BU1RFUl9EVVJBVElPTixcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBjb250YWluZXI6IHsgLi4uVG9hc3RTdHlsZXMuZXJyb3IuY29udGFpbmVyLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnIH0sXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAuLi5Ub2FzdFN0eWxlcy50ZXh0LFxuICAgICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAxNixcbiAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgc2hvd1N1Y2Nlc3NNZXNzYWdlOiAobWVzc2FnZTogc3RyaW5nKSA9PlxuICAgIGNyZWF0ZUFjdGlvbihUb2FzdGVyQWN0aW9uVHlwZXMuQUREX1RPQVNULCB7XG4gICAgICB0ZXh0OiBtZXNzYWdlLFxuICAgICAgZHVyYXRpb246IFRPQVNURVJfRFVSQVRJT04sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgLi4uVG9hc3RTdHlsZXMuZXJyb3IuY29udGFpbmVyLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIC4uLlRvYXN0U3R5bGVzLnRleHQsXG4gICAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IDE2LFxuICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxufTtcblxuZXhwb3J0IHR5cGUgVFRvYXN0ZXJBY3Rpb25PYmplY3RUeXBlcyA9IEFjdGlvbnNVbmlvbjx0eXBlb2YgVG9hc3RlckFjdGlvbnM+O1xuIl0sInZlcnNpb24iOjN9