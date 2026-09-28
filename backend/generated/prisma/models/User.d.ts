import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    displayName: string | null;
    email: string | null;
    hashedPassword: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    displayName: string | null;
    email: string | null;
    hashedPassword: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    displayName: number;
    email: number;
    hashedPassword: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    displayName?: true;
    email?: true;
    hashedPassword?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    displayName?: true;
    email?: true;
    hashedPassword?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    displayName?: true;
    email?: true;
    hashedPassword?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    displayName?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    hashedPassword?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    userSession?: Prisma.SessionListRelationFilter;
    senderNotification?: Prisma.NotificationListRelationFilter;
    receiverNotification?: Prisma.NotificationListRelationFilter;
    userMessage?: Prisma.MessageListRelationFilter;
    shopConversation?: Prisma.ConversationListRelationFilter;
    customerConversation?: Prisma.ConversationListRelationFilter;
    customerOrder?: Prisma.OrderListRelationFilter;
    shopOrder?: Prisma.OrderListRelationFilter;
    shopProduct?: Prisma.ProductListRelationFilter;
    customerCart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    hashedPassword?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userSession?: Prisma.SessionOrderByRelationAggregateInput;
    senderNotification?: Prisma.NotificationOrderByRelationAggregateInput;
    receiverNotification?: Prisma.NotificationOrderByRelationAggregateInput;
    userMessage?: Prisma.MessageOrderByRelationAggregateInput;
    shopConversation?: Prisma.ConversationOrderByRelationAggregateInput;
    customerConversation?: Prisma.ConversationOrderByRelationAggregateInput;
    customerOrder?: Prisma.OrderOrderByRelationAggregateInput;
    shopOrder?: Prisma.OrderOrderByRelationAggregateInput;
    shopProduct?: Prisma.ProductOrderByRelationAggregateInput;
    customerCart?: Prisma.CartOrderByWithRelationInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    displayName?: Prisma.StringFilter<"User"> | string;
    hashedPassword?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    userSession?: Prisma.SessionListRelationFilter;
    senderNotification?: Prisma.NotificationListRelationFilter;
    receiverNotification?: Prisma.NotificationListRelationFilter;
    userMessage?: Prisma.MessageListRelationFilter;
    shopConversation?: Prisma.ConversationListRelationFilter;
    customerConversation?: Prisma.ConversationListRelationFilter;
    customerOrder?: Prisma.OrderListRelationFilter;
    shopOrder?: Prisma.OrderListRelationFilter;
    shopProduct?: Prisma.ProductListRelationFilter;
    customerCart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    hashedPassword?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    displayName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    hashedPassword?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserUpdateInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    hashedPassword?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    hashedPassword?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    hashedPassword?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutUserSessionInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserSessionInput, Prisma.UserUncheckedCreateWithoutUserSessionInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserSessionInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserSessionNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserSessionInput, Prisma.UserUncheckedCreateWithoutUserSessionInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserSessionInput;
    upsert?: Prisma.UserUpsertWithoutUserSessionInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserSessionInput, Prisma.UserUpdateWithoutUserSessionInput>, Prisma.UserUncheckedUpdateWithoutUserSessionInput>;
};
export type UserCreateNestedOneWithoutSenderNotificationInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSenderNotificationInput, Prisma.UserUncheckedCreateWithoutSenderNotificationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSenderNotificationInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReceiverNotificationInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceiverNotificationInput, Prisma.UserUncheckedCreateWithoutReceiverNotificationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceiverNotificationInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSenderNotificationNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSenderNotificationInput, Prisma.UserUncheckedCreateWithoutSenderNotificationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSenderNotificationInput;
    upsert?: Prisma.UserUpsertWithoutSenderNotificationInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSenderNotificationInput, Prisma.UserUpdateWithoutSenderNotificationInput>, Prisma.UserUncheckedUpdateWithoutSenderNotificationInput>;
};
export type UserUpdateOneRequiredWithoutReceiverNotificationNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceiverNotificationInput, Prisma.UserUncheckedCreateWithoutReceiverNotificationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceiverNotificationInput;
    upsert?: Prisma.UserUpsertWithoutReceiverNotificationInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReceiverNotificationInput, Prisma.UserUpdateWithoutReceiverNotificationInput>, Prisma.UserUncheckedUpdateWithoutReceiverNotificationInput>;
};
export type UserCreateNestedOneWithoutUserMessageInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserMessageInput, Prisma.UserUncheckedCreateWithoutUserMessageInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserMessageInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserMessageNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserMessageInput, Prisma.UserUncheckedCreateWithoutUserMessageInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserMessageInput;
    upsert?: Prisma.UserUpsertWithoutUserMessageInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserMessageInput, Prisma.UserUpdateWithoutUserMessageInput>, Prisma.UserUncheckedUpdateWithoutUserMessageInput>;
};
export type UserCreateNestedOneWithoutShopConversationInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShopConversationInput, Prisma.UserUncheckedCreateWithoutShopConversationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShopConversationInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutCustomerConversationInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCustomerConversationInput, Prisma.UserUncheckedCreateWithoutCustomerConversationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCustomerConversationInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutShopConversationNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShopConversationInput, Prisma.UserUncheckedCreateWithoutShopConversationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShopConversationInput;
    upsert?: Prisma.UserUpsertWithoutShopConversationInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutShopConversationInput, Prisma.UserUpdateWithoutShopConversationInput>, Prisma.UserUncheckedUpdateWithoutShopConversationInput>;
};
export type UserUpdateOneRequiredWithoutCustomerConversationNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCustomerConversationInput, Prisma.UserUncheckedCreateWithoutCustomerConversationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCustomerConversationInput;
    upsert?: Prisma.UserUpsertWithoutCustomerConversationInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCustomerConversationInput, Prisma.UserUpdateWithoutCustomerConversationInput>, Prisma.UserUncheckedUpdateWithoutCustomerConversationInput>;
};
export type UserCreateNestedOneWithoutShopProductInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShopProductInput, Prisma.UserUncheckedCreateWithoutShopProductInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShopProductInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutShopProductNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShopProductInput, Prisma.UserUncheckedCreateWithoutShopProductInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShopProductInput;
    upsert?: Prisma.UserUpsertWithoutShopProductInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutShopProductInput, Prisma.UserUpdateWithoutShopProductInput>, Prisma.UserUncheckedUpdateWithoutShopProductInput>;
};
export type UserCreateNestedOneWithoutCustomerOrderInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCustomerOrderInput, Prisma.UserUncheckedCreateWithoutCustomerOrderInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCustomerOrderInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutShopOrderInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShopOrderInput, Prisma.UserUncheckedCreateWithoutShopOrderInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShopOrderInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCustomerOrderNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCustomerOrderInput, Prisma.UserUncheckedCreateWithoutCustomerOrderInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCustomerOrderInput;
    upsert?: Prisma.UserUpsertWithoutCustomerOrderInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCustomerOrderInput, Prisma.UserUpdateWithoutCustomerOrderInput>, Prisma.UserUncheckedUpdateWithoutCustomerOrderInput>;
};
export type UserUpdateOneRequiredWithoutShopOrderNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShopOrderInput, Prisma.UserUncheckedCreateWithoutShopOrderInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShopOrderInput;
    upsert?: Prisma.UserUpsertWithoutShopOrderInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutShopOrderInput, Prisma.UserUpdateWithoutShopOrderInput>, Prisma.UserUncheckedUpdateWithoutShopOrderInput>;
};
export type UserCreateNestedOneWithoutCustomerCartInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCustomerCartInput, Prisma.UserUncheckedCreateWithoutCustomerCartInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCustomerCartInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCustomerCartNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCustomerCartInput, Prisma.UserUncheckedCreateWithoutCustomerCartInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCustomerCartInput;
    upsert?: Prisma.UserUpsertWithoutCustomerCartInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCustomerCartInput, Prisma.UserUpdateWithoutCustomerCartInput>, Prisma.UserUncheckedUpdateWithoutCustomerCartInput>;
};
export type UserCreateWithoutUserSessionInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutUserSessionInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutUserSessionInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserSessionInput, Prisma.UserUncheckedCreateWithoutUserSessionInput>;
};
export type UserUpsertWithoutUserSessionInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserSessionInput, Prisma.UserUncheckedUpdateWithoutUserSessionInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserSessionInput, Prisma.UserUncheckedCreateWithoutUserSessionInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserSessionInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserSessionInput, Prisma.UserUncheckedUpdateWithoutUserSessionInput>;
};
export type UserUpdateWithoutUserSessionInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutUserSessionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserCreateWithoutSenderNotificationInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutSenderNotificationInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutSenderNotificationInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSenderNotificationInput, Prisma.UserUncheckedCreateWithoutSenderNotificationInput>;
};
export type UserCreateWithoutReceiverNotificationInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutReceiverNotificationInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutReceiverNotificationInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceiverNotificationInput, Prisma.UserUncheckedCreateWithoutReceiverNotificationInput>;
};
export type UserUpsertWithoutSenderNotificationInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSenderNotificationInput, Prisma.UserUncheckedUpdateWithoutSenderNotificationInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSenderNotificationInput, Prisma.UserUncheckedCreateWithoutSenderNotificationInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSenderNotificationInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSenderNotificationInput, Prisma.UserUncheckedUpdateWithoutSenderNotificationInput>;
};
export type UserUpdateWithoutSenderNotificationInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutSenderNotificationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserUpsertWithoutReceiverNotificationInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReceiverNotificationInput, Prisma.UserUncheckedUpdateWithoutReceiverNotificationInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceiverNotificationInput, Prisma.UserUncheckedCreateWithoutReceiverNotificationInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReceiverNotificationInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReceiverNotificationInput, Prisma.UserUncheckedUpdateWithoutReceiverNotificationInput>;
};
export type UserUpdateWithoutReceiverNotificationInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutReceiverNotificationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserCreateWithoutUserMessageInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutUserMessageInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutUserMessageInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserMessageInput, Prisma.UserUncheckedCreateWithoutUserMessageInput>;
};
export type UserUpsertWithoutUserMessageInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserMessageInput, Prisma.UserUncheckedUpdateWithoutUserMessageInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserMessageInput, Prisma.UserUncheckedCreateWithoutUserMessageInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserMessageInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserMessageInput, Prisma.UserUncheckedUpdateWithoutUserMessageInput>;
};
export type UserUpdateWithoutUserMessageInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutUserMessageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserCreateWithoutShopConversationInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutShopConversationInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutShopConversationInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutShopConversationInput, Prisma.UserUncheckedCreateWithoutShopConversationInput>;
};
export type UserCreateWithoutCustomerConversationInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutCustomerConversationInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutCustomerConversationInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCustomerConversationInput, Prisma.UserUncheckedCreateWithoutCustomerConversationInput>;
};
export type UserUpsertWithoutShopConversationInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutShopConversationInput, Prisma.UserUncheckedUpdateWithoutShopConversationInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutShopConversationInput, Prisma.UserUncheckedCreateWithoutShopConversationInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutShopConversationInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutShopConversationInput, Prisma.UserUncheckedUpdateWithoutShopConversationInput>;
};
export type UserUpdateWithoutShopConversationInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutShopConversationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserUpsertWithoutCustomerConversationInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCustomerConversationInput, Prisma.UserUncheckedUpdateWithoutCustomerConversationInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCustomerConversationInput, Prisma.UserUncheckedCreateWithoutCustomerConversationInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCustomerConversationInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCustomerConversationInput, Prisma.UserUncheckedUpdateWithoutCustomerConversationInput>;
};
export type UserUpdateWithoutCustomerConversationInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutCustomerConversationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserCreateWithoutShopProductInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutShopProductInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutShopProductInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutShopProductInput, Prisma.UserUncheckedCreateWithoutShopProductInput>;
};
export type UserUpsertWithoutShopProductInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutShopProductInput, Prisma.UserUncheckedUpdateWithoutShopProductInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutShopProductInput, Prisma.UserUncheckedCreateWithoutShopProductInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutShopProductInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutShopProductInput, Prisma.UserUncheckedUpdateWithoutShopProductInput>;
};
export type UserUpdateWithoutShopProductInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutShopProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserCreateWithoutCustomerOrderInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutCustomerOrderInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutCustomerOrderInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCustomerOrderInput, Prisma.UserUncheckedCreateWithoutCustomerOrderInput>;
};
export type UserCreateWithoutShopOrderInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartCreateNestedOneWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutShopOrderInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
    customerCart?: Prisma.CartUncheckedCreateNestedOneWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutShopOrderInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutShopOrderInput, Prisma.UserUncheckedCreateWithoutShopOrderInput>;
};
export type UserUpsertWithoutCustomerOrderInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCustomerOrderInput, Prisma.UserUncheckedUpdateWithoutCustomerOrderInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCustomerOrderInput, Prisma.UserUncheckedCreateWithoutCustomerOrderInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCustomerOrderInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCustomerOrderInput, Prisma.UserUncheckedUpdateWithoutCustomerOrderInput>;
};
export type UserUpdateWithoutCustomerOrderInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutCustomerOrderInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserUpsertWithoutShopOrderInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutShopOrderInput, Prisma.UserUncheckedUpdateWithoutShopOrderInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutShopOrderInput, Prisma.UserUncheckedCreateWithoutShopOrderInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutShopOrderInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutShopOrderInput, Prisma.UserUncheckedUpdateWithoutShopOrderInput>;
};
export type UserUpdateWithoutShopOrderInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUpdateOneWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutShopOrderInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
    customerCart?: Prisma.CartUncheckedUpdateOneWithoutCustomerNestedInput;
};
export type UserCreateWithoutCustomerCartInput = {
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductCreateNestedManyWithoutShopInput;
};
export type UserUncheckedCreateWithoutCustomerCartInput = {
    id?: number;
    displayName: string;
    email: string;
    hashedPassword: string;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSession?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    senderNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutSenderInput;
    receiverNotification?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    userMessage?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    shopConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutShopInput;
    customerConversation?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    customerOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    shopOrder?: Prisma.OrderUncheckedCreateNestedManyWithoutShopInput;
    shopProduct?: Prisma.ProductUncheckedCreateNestedManyWithoutShopInput;
};
export type UserCreateOrConnectWithoutCustomerCartInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCustomerCartInput, Prisma.UserUncheckedCreateWithoutCustomerCartInput>;
};
export type UserUpsertWithoutCustomerCartInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCustomerCartInput, Prisma.UserUncheckedUpdateWithoutCustomerCartInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCustomerCartInput, Prisma.UserUncheckedCreateWithoutCustomerCartInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCustomerCartInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCustomerCartInput, Prisma.UserUncheckedUpdateWithoutCustomerCartInput>;
};
export type UserUpdateWithoutCustomerCartInput = {
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUpdateManyWithoutShopNestedInput;
};
export type UserUncheckedUpdateWithoutCustomerCartInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    hashedPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userSession?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    senderNotification?: Prisma.NotificationUncheckedUpdateManyWithoutSenderNestedInput;
    receiverNotification?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    userMessage?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    shopConversation?: Prisma.ConversationUncheckedUpdateManyWithoutShopNestedInput;
    customerConversation?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    customerOrder?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    shopOrder?: Prisma.OrderUncheckedUpdateManyWithoutShopNestedInput;
    shopProduct?: Prisma.ProductUncheckedUpdateManyWithoutShopNestedInput;
};
export type UserCountOutputType = {
    userSession: number;
    senderNotification: number;
    receiverNotification: number;
    userMessage: number;
    shopConversation: number;
    customerConversation: number;
    customerOrder: number;
    shopOrder: number;
    shopProduct: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userSession?: boolean | UserCountOutputTypeCountUserSessionArgs;
    senderNotification?: boolean | UserCountOutputTypeCountSenderNotificationArgs;
    receiverNotification?: boolean | UserCountOutputTypeCountReceiverNotificationArgs;
    userMessage?: boolean | UserCountOutputTypeCountUserMessageArgs;
    shopConversation?: boolean | UserCountOutputTypeCountShopConversationArgs;
    customerConversation?: boolean | UserCountOutputTypeCountCustomerConversationArgs;
    customerOrder?: boolean | UserCountOutputTypeCountCustomerOrderArgs;
    shopOrder?: boolean | UserCountOutputTypeCountShopOrderArgs;
    shopProduct?: boolean | UserCountOutputTypeCountShopProductArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountUserSessionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
export type UserCountOutputTypeCountSenderNotificationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserCountOutputTypeCountReceiverNotificationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserCountOutputTypeCountUserMessageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type UserCountOutputTypeCountShopConversationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
};
export type UserCountOutputTypeCountCustomerConversationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
};
export type UserCountOutputTypeCountCustomerOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type UserCountOutputTypeCountShopOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type UserCountOutputTypeCountShopProductArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    displayName?: boolean;
    email?: boolean;
    hashedPassword?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userSession?: boolean | Prisma.User$userSessionArgs<ExtArgs>;
    senderNotification?: boolean | Prisma.User$senderNotificationArgs<ExtArgs>;
    receiverNotification?: boolean | Prisma.User$receiverNotificationArgs<ExtArgs>;
    userMessage?: boolean | Prisma.User$userMessageArgs<ExtArgs>;
    shopConversation?: boolean | Prisma.User$shopConversationArgs<ExtArgs>;
    customerConversation?: boolean | Prisma.User$customerConversationArgs<ExtArgs>;
    customerOrder?: boolean | Prisma.User$customerOrderArgs<ExtArgs>;
    shopOrder?: boolean | Prisma.User$shopOrderArgs<ExtArgs>;
    shopProduct?: boolean | Prisma.User$shopProductArgs<ExtArgs>;
    customerCart?: boolean | Prisma.User$customerCartArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    displayName?: boolean;
    email?: boolean;
    hashedPassword?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    displayName?: boolean;
    email?: boolean;
    hashedPassword?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    displayName?: boolean;
    email?: boolean;
    hashedPassword?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "displayName" | "email" | "hashedPassword" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userSession?: boolean | Prisma.User$userSessionArgs<ExtArgs>;
    senderNotification?: boolean | Prisma.User$senderNotificationArgs<ExtArgs>;
    receiverNotification?: boolean | Prisma.User$receiverNotificationArgs<ExtArgs>;
    userMessage?: boolean | Prisma.User$userMessageArgs<ExtArgs>;
    shopConversation?: boolean | Prisma.User$shopConversationArgs<ExtArgs>;
    customerConversation?: boolean | Prisma.User$customerConversationArgs<ExtArgs>;
    customerOrder?: boolean | Prisma.User$customerOrderArgs<ExtArgs>;
    shopOrder?: boolean | Prisma.User$shopOrderArgs<ExtArgs>;
    shopProduct?: boolean | Prisma.User$shopProductArgs<ExtArgs>;
    customerCart?: boolean | Prisma.User$customerCartArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        userSession: Prisma.$SessionPayload<ExtArgs>[];
        senderNotification: Prisma.$NotificationPayload<ExtArgs>[];
        receiverNotification: Prisma.$NotificationPayload<ExtArgs>[];
        userMessage: Prisma.$MessagePayload<ExtArgs>[];
        shopConversation: Prisma.$ConversationPayload<ExtArgs>[];
        customerConversation: Prisma.$ConversationPayload<ExtArgs>[];
        customerOrder: Prisma.$OrderPayload<ExtArgs>[];
        shopOrder: Prisma.$OrderPayload<ExtArgs>[];
        shopProduct: Prisma.$ProductPayload<ExtArgs>[];
        customerCart: Prisma.$CartPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        displayName: string;
        email: string;
        hashedPassword: string;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userSession<T extends Prisma.User$userSessionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userSessionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    senderNotification<T extends Prisma.User$senderNotificationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$senderNotificationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    receiverNotification<T extends Prisma.User$receiverNotificationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$receiverNotificationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userMessage<T extends Prisma.User$userMessageArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userMessageArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shopConversation<T extends Prisma.User$shopConversationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$shopConversationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customerConversation<T extends Prisma.User$customerConversationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$customerConversationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customerOrder<T extends Prisma.User$customerOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$customerOrderArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shopOrder<T extends Prisma.User$shopOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$shopOrderArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shopProduct<T extends Prisma.User$shopProductArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$shopProductArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customerCart<T extends Prisma.User$customerCartArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$customerCartArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly displayName: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly hashedPassword: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$userSessionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type User$senderNotificationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type User$receiverNotificationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type User$userMessageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$shopConversationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$customerConversationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$customerOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$shopOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$shopProductArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type User$customerCartArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
