export const roundTo3SFand2DP = (num: any) => {
        let roundedNum = Math.round(num * 100) / 100;
        return roundedNum.toFixed(2);
    }