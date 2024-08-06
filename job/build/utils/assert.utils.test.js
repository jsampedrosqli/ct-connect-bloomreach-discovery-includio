"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_utils_1 = require("./assert.utils");
describe('assert', () => {
    it('should not throw an error when condition is true', () => {
        // Positive test case
        expect(() => (0, assert_utils_1.assert)(true, 'Condition is true')).not.toThrowError();
    });
    it('should throw an error when condition is false', () => {
        // Negative test case
        expect(() => (0, assert_utils_1.assert)(false, 'Condition is false')).toThrowError('Assertion failed: Condition is false');
    });
});
describe('assertError', () => {
    it('should not throw an error when value is an Error', () => {
        // Positive test case
        const error = new Error('Test error');
        expect(() => (0, assert_utils_1.assertError)(error, 'Value is an Error')).not.toThrowError();
    });
    it('should throw an error when value is not an Error', () => {
        // Negative test case
        const nonErrorValue = 'Not an error';
        expect(() => (0, assert_utils_1.assertError)(nonErrorValue, 'Value is an Error')).toThrowError('Assertion failed: Value is an Error');
    });
});
describe('assertString', () => {
    it('should not throw an error when value is a string', () => {
        // Positive test case
        const stringValue = 'Test string';
        expect(() => (0, assert_utils_1.assertString)(stringValue, 'Value is a string')).not.toThrowError();
    });
    it('should throw an error when value is not a string', () => {
        // Negative test case
        const nonStringValue = 42; // Not a string
        expect(() => (0, assert_utils_1.assertString)(nonStringValue, 'Value is a string')).toThrowError('Assertion failed: Value is a string');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LnV0aWxzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvYXNzZXJ0LnV0aWxzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUU7QUFFbkUsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEdBQUcsRUFBRTtRQUMxRCxxQkFBcUI7UUFDckIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUEscUJBQU0sRUFBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQ0FBK0MsRUFBRSxHQUFHLEVBQUU7UUFDdkQscUJBQXFCO1FBQ3JCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFBLHFCQUFNLEVBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQzVELHNDQUFzQyxDQUN2QyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxrREFBa0QsRUFBRSxHQUFHLEVBQUU7UUFDMUQscUJBQXFCO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFBLDBCQUFXLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0UsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUUsR0FBRyxFQUFFO1FBQzFELHFCQUFxQjtRQUNyQixNQUFNLGFBQWEsR0FBRyxjQUFjLENBQUM7UUFDckMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUEsMEJBQVcsRUFBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FDeEUscUNBQXFDLENBQ3RDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDNUIsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEdBQUcsRUFBRTtRQUMxRCxxQkFBcUI7UUFDckIsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFBLDJCQUFZLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUUsR0FBRyxFQUFFO1FBQzFELHFCQUFxQjtRQUNyQixNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxlQUFlO1FBQzFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFBLDJCQUFZLEVBQUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQzFFLHFDQUFxQyxDQUN0QyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9