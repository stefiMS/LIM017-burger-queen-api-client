import { MyStopwatch } from '../../util/Countdown.js';
import '@testing-library/jest-dom';
import Countdown from '../../util/Countdown';
import React, { createElement } from 'react';

describe("MyStopwatch", () => {
        const startTime = 0

        const  endTime = 18
        const duration = 18
        // const duration = Date.parse(endTime) - Date.parse(startTime);
        const result = 
        // const result = new Date(duration).toISOString().slice(11, 19);
        console.log(result)
    it("should return total time of preparing plate", () => {
        const div = document.createElement('div')
        ReactDOM.render(<p></p>, div)
    })
    it("should return null when the  startTime or  endTime are diferentes", () => {
        
        const  endTimeNull = 13
        expect(MyStopwatch(0,endTimeNull)).toBe(null)
         
    })


})