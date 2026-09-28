export declare const Role: {
    readonly customer: "customer";
    readonly shop: "shop";
    readonly admin: "admin";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Status: {
    readonly pending: "pending";
    readonly confirmed: "confirmed";
    readonly shipping: "shipping";
    readonly cancelled: "cancelled";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const Rating: {
    readonly one: "one";
    readonly two: "two";
    readonly three: "three";
    readonly four: "four";
    readonly five: "five";
};
export type Rating = (typeof Rating)[keyof typeof Rating];
