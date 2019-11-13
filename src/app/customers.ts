export class Customers {
    mobileNo: number;
    customerName: string;
    rewardPoints: number;

    constructor(mobileNo: number, customerName: string, rewardPoints: number)
    {
        this.mobileNo = mobileNo;
        this.customerName = customerName;
        this.rewardPoints = rewardPoints;
    }
}
