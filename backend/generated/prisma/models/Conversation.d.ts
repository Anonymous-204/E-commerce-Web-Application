import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConversationModel = runtime.Types.Result.DefaultSelection<Prisma.$ConversationPayload>;
export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null;
    _avg: ConversationAvgAggregateOutputType | null;
    _sum: ConversationSumAggregateOutputType | null;
    _min: ConversationMinAggregateOutputType | null;
    _max: ConversationMaxAggregateOutputType | null;
};
export type ConversationAvgAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
};
export type ConversationSumAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
};
export type ConversationMinAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConversationMaxAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    customerId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConversationCountAggregateOutputType = {
    id: number;
    shopId: number;
    customerId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ConversationAvgAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
};
export type ConversationSumAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
};
export type ConversationMinAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConversationMaxAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConversationCountAggregateInputType = {
    id?: true;
    shopId?: true;
    customerId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ConversationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConversationCountAggregateInputType;
    _avg?: ConversationAvgAggregateInputType;
    _sum?: ConversationSumAggregateInputType;
    _min?: ConversationMinAggregateInputType;
    _max?: ConversationMaxAggregateInputType;
};
export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
    [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConversation[P]> : Prisma.GetScalarType<T[P], AggregateConversation[P]>;
};
export type ConversationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithAggregationInput | Prisma.ConversationOrderByWithAggregationInput[];
    by: Prisma.ConversationScalarFieldEnum[] | Prisma.ConversationScalarFieldEnum;
    having?: Prisma.ConversationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConversationCountAggregateInputType | true;
    _avg?: ConversationAvgAggregateInputType;
    _sum?: ConversationSumAggregateInputType;
    _min?: ConversationMinAggregateInputType;
    _max?: ConversationMaxAggregateInputType;
};
export type ConversationGroupByOutputType = {
    id: number;
    shopId: number;
    customerId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ConversationCountAggregateOutputType | null;
    _avg: ConversationAvgAggregateOutputType | null;
    _sum: ConversationSumAggregateOutputType | null;
    _min: ConversationMinAggregateOutputType | null;
    _max: ConversationMaxAggregateOutputType | null;
};
export type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConversationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConversationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConversationGroupByOutputType[P]>;
}>>;
export type ConversationWhereInput = {
    AND?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    OR?: Prisma.ConversationWhereInput[];
    NOT?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    id?: Prisma.IntFilter<"Conversation"> | number;
    shopId?: Prisma.IntFilter<"Conversation"> | number;
    customerId?: Prisma.IntFilter<"Conversation"> | number;
    createdAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    shop?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    customer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    conversationMessage?: Prisma.MessageListRelationFilter;
};
export type ConversationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    shop?: Prisma.UserOrderByWithRelationInput;
    customer?: Prisma.UserOrderByWithRelationInput;
    conversationMessage?: Prisma.MessageOrderByRelationAggregateInput;
};
export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    OR?: Prisma.ConversationWhereInput[];
    NOT?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    shopId?: Prisma.IntFilter<"Conversation"> | number;
    customerId?: Prisma.IntFilter<"Conversation"> | number;
    createdAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    shop?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    customer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    conversationMessage?: Prisma.MessageListRelationFilter;
}, "id">;
export type ConversationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ConversationCountOrderByAggregateInput;
    _avg?: Prisma.ConversationAvgOrderByAggregateInput;
    _max?: Prisma.ConversationMaxOrderByAggregateInput;
    _min?: Prisma.ConversationMinOrderByAggregateInput;
    _sum?: Prisma.ConversationSumOrderByAggregateInput;
};
export type ConversationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConversationScalarWhereWithAggregatesInput | Prisma.ConversationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConversationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConversationScalarWhereWithAggregatesInput | Prisma.ConversationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Conversation"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"Conversation"> | number;
    customerId?: Prisma.IntWithAggregatesFilter<"Conversation"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Conversation"> | Date | string;
};
export type ConversationCreateInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopConversationInput;
    customer: Prisma.UserCreateNestedOneWithoutCustomerConversationInput;
    conversationMessage?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateInput = {
    id?: number;
    shopId: number;
    customerId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversationMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopConversationNestedInput;
    customer?: Prisma.UserUpdateOneRequiredWithoutCustomerConversationNestedInput;
    conversationMessage?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversationMessage?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationCreateManyInput = {
    id?: number;
    shopId: number;
    customerId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationListRelationFilter = {
    every?: Prisma.ConversationWhereInput;
    some?: Prisma.ConversationWhereInput;
    none?: Prisma.ConversationWhereInput;
};
export type ConversationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConversationScalarRelationFilter = {
    is?: Prisma.ConversationWhereInput;
    isNot?: Prisma.ConversationWhereInput;
};
export type ConversationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConversationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
};
export type ConversationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConversationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConversationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
};
export type ConversationCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutShopInput, Prisma.ConversationUncheckedCreateWithoutShopInput> | Prisma.ConversationCreateWithoutShopInput[] | Prisma.ConversationUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutShopInput | Prisma.ConversationCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.ConversationCreateManyShopInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput> | Prisma.ConversationCreateWithoutCustomerInput[] | Prisma.ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutCustomerInput | Prisma.ConversationCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ConversationCreateManyCustomerInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutShopInput, Prisma.ConversationUncheckedCreateWithoutShopInput> | Prisma.ConversationCreateWithoutShopInput[] | Prisma.ConversationUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutShopInput | Prisma.ConversationCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.ConversationCreateManyShopInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput> | Prisma.ConversationCreateWithoutCustomerInput[] | Prisma.ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutCustomerInput | Prisma.ConversationCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ConversationCreateManyCustomerInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutShopInput, Prisma.ConversationUncheckedCreateWithoutShopInput> | Prisma.ConversationCreateWithoutShopInput[] | Prisma.ConversationUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutShopInput | Prisma.ConversationCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutShopInput | Prisma.ConversationUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.ConversationCreateManyShopInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutShopInput | Prisma.ConversationUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutShopInput | Prisma.ConversationUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput> | Prisma.ConversationCreateWithoutCustomerInput[] | Prisma.ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutCustomerInput | Prisma.ConversationCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ConversationUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ConversationCreateManyCustomerInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ConversationUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutCustomerInput | Prisma.ConversationUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutShopInput, Prisma.ConversationUncheckedCreateWithoutShopInput> | Prisma.ConversationCreateWithoutShopInput[] | Prisma.ConversationUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutShopInput | Prisma.ConversationCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutShopInput | Prisma.ConversationUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.ConversationCreateManyShopInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutShopInput | Prisma.ConversationUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutShopInput | Prisma.ConversationUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput> | Prisma.ConversationCreateWithoutCustomerInput[] | Prisma.ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutCustomerInput | Prisma.ConversationCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ConversationUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ConversationCreateManyCustomerInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ConversationUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutCustomerInput | Prisma.ConversationUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationCreateNestedOneWithoutConversationMessageInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutConversationMessageInput, Prisma.ConversationUncheckedCreateWithoutConversationMessageInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutConversationMessageInput;
    connect?: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUpdateOneRequiredWithoutConversationMessageNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutConversationMessageInput, Prisma.ConversationUncheckedCreateWithoutConversationMessageInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutConversationMessageInput;
    upsert?: Prisma.ConversationUpsertWithoutConversationMessageInput;
    connect?: Prisma.ConversationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationUpdateToOneWithWhereWithoutConversationMessageInput, Prisma.ConversationUpdateWithoutConversationMessageInput>, Prisma.ConversationUncheckedUpdateWithoutConversationMessageInput>;
};
export type ConversationCreateWithoutShopInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutCustomerConversationInput;
    conversationMessage?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutShopInput = {
    id?: number;
    customerId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversationMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutShopInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutShopInput, Prisma.ConversationUncheckedCreateWithoutShopInput>;
};
export type ConversationCreateManyShopInputEnvelope = {
    data: Prisma.ConversationCreateManyShopInput | Prisma.ConversationCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type ConversationCreateWithoutCustomerInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopConversationInput;
    conversationMessage?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutCustomerInput = {
    id?: number;
    shopId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversationMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutCustomerInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput>;
};
export type ConversationCreateManyCustomerInputEnvelope = {
    data: Prisma.ConversationCreateManyCustomerInput | Prisma.ConversationCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type ConversationUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.ConversationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutShopInput, Prisma.ConversationUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutShopInput, Prisma.ConversationUncheckedCreateWithoutShopInput>;
};
export type ConversationUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.ConversationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutShopInput, Prisma.ConversationUncheckedUpdateWithoutShopInput>;
};
export type ConversationUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.ConversationScalarWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyWithoutShopInput>;
};
export type ConversationScalarWhereInput = {
    AND?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
    OR?: Prisma.ConversationScalarWhereInput[];
    NOT?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
    id?: Prisma.IntFilter<"Conversation"> | number;
    shopId?: Prisma.IntFilter<"Conversation"> | number;
    customerId?: Prisma.IntFilter<"Conversation"> | number;
    createdAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
};
export type ConversationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ConversationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutCustomerInput, Prisma.ConversationUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput>;
};
export type ConversationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ConversationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutCustomerInput, Prisma.ConversationUncheckedUpdateWithoutCustomerInput>;
};
export type ConversationUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.ConversationScalarWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyWithoutCustomerInput>;
};
export type ConversationCreateWithoutConversationMessageInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopConversationInput;
    customer: Prisma.UserCreateNestedOneWithoutCustomerConversationInput;
};
export type ConversationUncheckedCreateWithoutConversationMessageInput = {
    id?: number;
    shopId: number;
    customerId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationCreateOrConnectWithoutConversationMessageInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutConversationMessageInput, Prisma.ConversationUncheckedCreateWithoutConversationMessageInput>;
};
export type ConversationUpsertWithoutConversationMessageInput = {
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutConversationMessageInput, Prisma.ConversationUncheckedUpdateWithoutConversationMessageInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutConversationMessageInput, Prisma.ConversationUncheckedCreateWithoutConversationMessageInput>;
    where?: Prisma.ConversationWhereInput;
};
export type ConversationUpdateToOneWithWhereWithoutConversationMessageInput = {
    where?: Prisma.ConversationWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutConversationMessageInput, Prisma.ConversationUncheckedUpdateWithoutConversationMessageInput>;
};
export type ConversationUpdateWithoutConversationMessageInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopConversationNestedInput;
    customer?: Prisma.UserUpdateOneRequiredWithoutCustomerConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutConversationMessageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationCreateManyShopInput = {
    id?: number;
    customerId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationCreateManyCustomerInput = {
    id?: number;
    shopId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationUpdateWithoutShopInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutCustomerConversationNestedInput;
    conversationMessage?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversationMessage?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customerId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationUpdateWithoutCustomerInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopConversationNestedInput;
    conversationMessage?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversationMessage?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationCountOutputType = {
    conversationMessage: number;
};
export type ConversationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    conversationMessage?: boolean | ConversationCountOutputTypeCountConversationMessageArgs;
};
export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationCountOutputTypeSelect<ExtArgs> | null;
};
export type ConversationCountOutputTypeCountConversationMessageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type ConversationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    conversationMessage?: boolean | Prisma.Conversation$conversationMessageArgs<ExtArgs>;
    _count?: boolean | Prisma.ConversationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversation"]>;
export type ConversationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversation"]>;
export type ConversationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversation"]>;
export type ConversationSelectScalar = {
    id?: boolean;
    shopId?: boolean;
    customerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ConversationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shopId" | "customerId" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>;
export type ConversationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    conversationMessage?: boolean | Prisma.Conversation$conversationMessageArgs<ExtArgs>;
    _count?: boolean | Prisma.ConversationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ConversationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ConversationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Conversation";
    objects: {
        shop: Prisma.$UserPayload<ExtArgs>;
        customer: Prisma.$UserPayload<ExtArgs>;
        conversationMessage: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shopId: number;
        customerId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["conversation"]>;
    composites: {};
};
export type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConversationPayload, S>;
export type ConversationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConversationCountAggregateInputType | true;
};
export interface ConversationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Conversation'];
        meta: {
            name: 'Conversation';
        };
    };
    findUnique<T extends ConversationFindUniqueArgs>(args: Prisma.SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConversationFindFirstArgs>(args?: Prisma.SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConversationFindManyArgs>(args?: Prisma.SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConversationCreateArgs>(args: Prisma.SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConversationCreateManyArgs>(args?: Prisma.SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConversationDeleteArgs>(args: Prisma.SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConversationUpdateArgs>(args: Prisma.SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConversationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConversationUpdateManyArgs>(args: Prisma.SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConversationUpsertArgs>(args: Prisma.SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConversationCountArgs>(args?: Prisma.Subset<T, ConversationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConversationCountAggregateOutputType> : number>;
    aggregate<T extends ConversationAggregateArgs>(args: Prisma.Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>;
    groupBy<T extends ConversationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConversationGroupByArgs['orderBy'];
    } : {
        orderBy?: ConversationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConversationFieldRefs;
}
export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shop<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    conversationMessage<T extends Prisma.Conversation$conversationMessageArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Conversation$conversationMessageArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConversationFieldRefs {
    readonly id: Prisma.FieldRef<"Conversation", 'Int'>;
    readonly shopId: Prisma.FieldRef<"Conversation", 'Int'>;
    readonly customerId: Prisma.FieldRef<"Conversation", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
}
export type ConversationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type ConversationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type ConversationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type ConversationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConversationCreateInput, Prisma.ConversationUncheckedCreateInput>;
};
export type ConversationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConversationCreateManyInput | Prisma.ConversationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConversationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    data: Prisma.ConversationCreateManyInput | Prisma.ConversationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConversationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConversationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConversationUpdateInput, Prisma.ConversationUncheckedUpdateInput>;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyInput>;
    where?: Prisma.ConversationWhereInput;
    limit?: number;
};
export type ConversationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyInput>;
    where?: Prisma.ConversationWhereInput;
    limit?: number;
    include?: Prisma.ConversationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConversationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateInput, Prisma.ConversationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConversationUpdateInput, Prisma.ConversationUncheckedUpdateInput>;
};
export type ConversationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
    limit?: number;
};
export type Conversation$conversationMessageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type ConversationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
};
