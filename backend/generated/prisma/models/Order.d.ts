import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    shopId: number | null;
    price: number | null;
    total: number | null;
};
export type OrderSumAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    shopId: number | null;
    price: number | null;
    total: number | null;
};
export type OrderMinAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    shopId: number | null;
    status: $Enums.Status | null;
    price: number | null;
    total: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderMaxAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    shopId: number | null;
    status: $Enums.Status | null;
    price: number | null;
    total: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    customerId: number;
    shopId: number;
    status: number;
    price: number;
    total: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    id?: true;
    customerId?: true;
    shopId?: true;
    price?: true;
    total?: true;
};
export type OrderSumAggregateInputType = {
    id?: true;
    customerId?: true;
    shopId?: true;
    price?: true;
    total?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    customerId?: true;
    shopId?: true;
    status?: true;
    price?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    shopId?: true;
    status?: true;
    price?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    customerId?: true;
    shopId?: true;
    status?: true;
    price?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: number;
    customerId: number;
    shopId: number;
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.IntFilter<"Order"> | number;
    customerId?: Prisma.IntFilter<"Order"> | number;
    shopId?: Prisma.IntFilter<"Order"> | number;
    status?: Prisma.EnumStatusFilter<"Order"> | $Enums.Status;
    price?: Prisma.IntFilter<"Order"> | number;
    total?: Prisma.IntFilter<"Order"> | number;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    customer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    shop?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    orderOrderItem?: Prisma.OrderItemListRelationFilter;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.UserOrderByWithRelationInput;
    shop?: Prisma.UserOrderByWithRelationInput;
    orderOrderItem?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    customerId?: Prisma.IntFilter<"Order"> | number;
    shopId?: Prisma.IntFilter<"Order"> | number;
    status?: Prisma.EnumStatusFilter<"Order"> | $Enums.Status;
    price?: Prisma.IntFilter<"Order"> | number;
    total?: Prisma.IntFilter<"Order"> | number;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    customer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    shop?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    orderOrderItem?: Prisma.OrderItemListRelationFilter;
}, "id">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    customerId?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    status?: Prisma.EnumStatusWithAggregatesFilter<"Order"> | $Enums.Status;
    price?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    total?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
};
export type OrderCreateInput = {
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutCustomerOrderInput;
    shop: Prisma.UserCreateNestedOneWithoutShopOrderInput;
    orderOrderItem?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    id?: number;
    customerId: number;
    shopId: number;
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderOrderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutCustomerOrderNestedInput;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopOrderNestedInput;
    orderOrderItem?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderOrderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: number;
    customerId: number;
    shopId: number;
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateManyMutationInput = {
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutShopInput, Prisma.OrderUncheckedCreateWithoutShopInput> | Prisma.OrderCreateWithoutShopInput[] | Prisma.OrderUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutShopInput | Prisma.OrderCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.OrderCreateManyShopInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutShopInput, Prisma.OrderUncheckedCreateWithoutShopInput> | Prisma.OrderCreateWithoutShopInput[] | Prisma.OrderUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutShopInput | Prisma.OrderCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.OrderCreateManyShopInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutShopInput, Prisma.OrderUncheckedCreateWithoutShopInput> | Prisma.OrderCreateWithoutShopInput[] | Prisma.OrderUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutShopInput | Prisma.OrderCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutShopInput | Prisma.OrderUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.OrderCreateManyShopInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutShopInput | Prisma.OrderUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutShopInput | Prisma.OrderUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutShopInput, Prisma.OrderUncheckedCreateWithoutShopInput> | Prisma.OrderCreateWithoutShopInput[] | Prisma.OrderUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutShopInput | Prisma.OrderCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutShopInput | Prisma.OrderUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.OrderCreateManyShopInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutShopInput | Prisma.OrderUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutShopInput | Prisma.OrderUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status;
};
export type OrderCreateNestedOneWithoutOrderOrderItemInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderOrderItemInput, Prisma.OrderUncheckedCreateWithoutOrderOrderItemInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderOrderItemInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutOrderOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderOrderItemInput, Prisma.OrderUncheckedCreateWithoutOrderOrderItemInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderOrderItemInput;
    upsert?: Prisma.OrderUpsertWithoutOrderOrderItemInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutOrderOrderItemInput, Prisma.OrderUpdateWithoutOrderOrderItemInput>, Prisma.OrderUncheckedUpdateWithoutOrderOrderItemInput>;
};
export type OrderCreateWithoutCustomerInput = {
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopOrderInput;
    orderOrderItem?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number;
    shopId: number;
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderOrderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput>;
};
export type OrderCreateManyCustomerInputEnvelope = {
    data: Prisma.OrderCreateManyCustomerInput | Prisma.OrderCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateWithoutShopInput = {
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutCustomerOrderInput;
    orderOrderItem?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutShopInput = {
    id?: number;
    customerId: number;
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderOrderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutShopInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutShopInput, Prisma.OrderUncheckedCreateWithoutShopInput>;
};
export type OrderCreateManyShopInputEnvelope = {
    data: Prisma.OrderCreateManyShopInput | Prisma.OrderCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutCustomerInput, Prisma.OrderUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput>;
};
export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutCustomerInput, Prisma.OrderUncheckedUpdateWithoutCustomerInput>;
};
export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutCustomerInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.IntFilter<"Order"> | number;
    customerId?: Prisma.IntFilter<"Order"> | number;
    shopId?: Prisma.IntFilter<"Order"> | number;
    status?: Prisma.EnumStatusFilter<"Order"> | $Enums.Status;
    price?: Prisma.IntFilter<"Order"> | number;
    total?: Prisma.IntFilter<"Order"> | number;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
};
export type OrderUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutShopInput, Prisma.OrderUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutShopInput, Prisma.OrderUncheckedCreateWithoutShopInput>;
};
export type OrderUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutShopInput, Prisma.OrderUncheckedUpdateWithoutShopInput>;
};
export type OrderUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutShopInput>;
};
export type OrderCreateWithoutOrderOrderItemInput = {
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutCustomerOrderInput;
    shop: Prisma.UserCreateNestedOneWithoutShopOrderInput;
};
export type OrderUncheckedCreateWithoutOrderOrderItemInput = {
    id?: number;
    customerId: number;
    shopId: number;
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderCreateOrConnectWithoutOrderOrderItemInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderOrderItemInput, Prisma.OrderUncheckedCreateWithoutOrderOrderItemInput>;
};
export type OrderUpsertWithoutOrderOrderItemInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutOrderOrderItemInput, Prisma.OrderUncheckedUpdateWithoutOrderOrderItemInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderOrderItemInput, Prisma.OrderUncheckedCreateWithoutOrderOrderItemInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutOrderOrderItemInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutOrderOrderItemInput, Prisma.OrderUncheckedUpdateWithoutOrderOrderItemInput>;
};
export type OrderUpdateWithoutOrderOrderItemInput = {
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutCustomerOrderNestedInput;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutOrderOrderItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyCustomerInput = {
    id?: number;
    shopId: number;
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderCreateManyShopInput = {
    id?: number;
    customerId: number;
    status: $Enums.Status;
    price: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateWithoutCustomerInput = {
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopOrderNestedInput;
    orderOrderItem?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderOrderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUpdateWithoutShopInput = {
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutCustomerOrderNestedInput;
    orderOrderItem?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderOrderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCountOutputType = {
    orderOrderItem: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderOrderItem?: boolean | OrderCountOutputTypeCountOrderOrderItemArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountOrderOrderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    shopId?: boolean;
    status?: boolean;
    price?: boolean;
    total?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    orderOrderItem?: boolean | Prisma.Order$orderOrderItemArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    shopId?: boolean;
    status?: boolean;
    price?: boolean;
    total?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    shopId?: boolean;
    status?: boolean;
    price?: boolean;
    total?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    shopId?: boolean;
    status?: boolean;
    price?: boolean;
    total?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "shopId" | "status" | "price" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    orderOrderItem?: boolean | Prisma.Order$orderOrderItemArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        customer: Prisma.$UserPayload<ExtArgs>;
        shop: Prisma.$UserPayload<ExtArgs>;
        orderOrderItem: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        customerId: number;
        shopId: number;
        status: $Enums.Status;
        price: number;
        total: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    shop<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderOrderItem<T extends Prisma.Order$orderOrderItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$orderOrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'Int'>;
    readonly customerId: Prisma.FieldRef<"Order", 'Int'>;
    readonly shopId: Prisma.FieldRef<"Order", 'Int'>;
    readonly status: Prisma.FieldRef<"Order", 'Status'>;
    readonly price: Prisma.FieldRef<"Order", 'Int'>;
    readonly total: Prisma.FieldRef<"Order", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Order", 'DateTime'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$orderOrderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
