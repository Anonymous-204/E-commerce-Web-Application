import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    brandId: number | null;
    categoryId: number | null;
    quantity: number | null;
    price: number | null;
};
export type ProductSumAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    brandId: number | null;
    categoryId: number | null;
    quantity: number | null;
    price: number | null;
};
export type ProductMinAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    SKU: string | null;
    brandId: number | null;
    categoryId: number | null;
    name: string | null;
    size: string | null;
    quantity: number | null;
    price: number | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductMaxAggregateOutputType = {
    id: number | null;
    shopId: number | null;
    SKU: string | null;
    brandId: number | null;
    categoryId: number | null;
    name: string | null;
    size: string | null;
    quantity: number | null;
    price: number | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    shopId: number;
    SKU: number;
    brandId: number;
    categoryId: number;
    name: number;
    size: number;
    quantity: number;
    price: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    id?: true;
    shopId?: true;
    brandId?: true;
    categoryId?: true;
    quantity?: true;
    price?: true;
};
export type ProductSumAggregateInputType = {
    id?: true;
    shopId?: true;
    brandId?: true;
    categoryId?: true;
    quantity?: true;
    price?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    shopId?: true;
    SKU?: true;
    brandId?: true;
    categoryId?: true;
    name?: true;
    size?: true;
    quantity?: true;
    price?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    shopId?: true;
    SKU?: true;
    brandId?: true;
    categoryId?: true;
    name?: true;
    size?: true;
    quantity?: true;
    price?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    shopId?: true;
    SKU?: true;
    brandId?: true;
    categoryId?: true;
    name?: true;
    size?: true;
    quantity?: true;
    price?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: number;
    shopId: number;
    SKU: string;
    brandId: number;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.IntFilter<"Product"> | number;
    shopId?: Prisma.IntFilter<"Product"> | number;
    SKU?: Prisma.StringFilter<"Product"> | string;
    brandId?: Prisma.IntFilter<"Product"> | number;
    categoryId?: Prisma.IntFilter<"Product"> | number;
    name?: Prisma.StringFilter<"Product"> | string;
    size?: Prisma.StringFilter<"Product"> | string;
    quantity?: Prisma.IntFilter<"Product"> | number;
    price?: Prisma.IntFilter<"Product"> | number;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    shop?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    productOrderItem?: Prisma.OrderItemListRelationFilter;
    productCartItem?: Prisma.CartItemListRelationFilter;
    productFeedback?: Prisma.FeedbackListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    SKU?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    shop?: Prisma.UserOrderByWithRelationInput;
    brand?: Prisma.BrandOrderByWithRelationInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    productOrderItem?: Prisma.OrderItemOrderByRelationAggregateInput;
    productCartItem?: Prisma.CartItemOrderByRelationAggregateInput;
    productFeedback?: Prisma.FeedbackOrderByRelationAggregateInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    SKU?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    shopId?: Prisma.IntFilter<"Product"> | number;
    brandId?: Prisma.IntFilter<"Product"> | number;
    categoryId?: Prisma.IntFilter<"Product"> | number;
    name?: Prisma.StringFilter<"Product"> | string;
    size?: Prisma.StringFilter<"Product"> | string;
    quantity?: Prisma.IntFilter<"Product"> | number;
    price?: Prisma.IntFilter<"Product"> | number;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    shop?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    productOrderItem?: Prisma.OrderItemListRelationFilter;
    productCartItem?: Prisma.CartItemListRelationFilter;
    productFeedback?: Prisma.FeedbackListRelationFilter;
}, "id" | "SKU">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    SKU?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    shopId?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    SKU?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    brandId?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    categoryId?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    size?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    price?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    description?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
};
export type ProductCreateInput = {
    SKU: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopProductInput;
    brand: Prisma.BrandCreateNestedOneWithoutBrandProductInput;
    category: Prisma.CategoryCreateNestedOneWithoutCategoryProductInput;
    productOrderItem?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: number;
    shopId: number;
    SKU: string;
    brandId: number;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopProductNestedInput;
    brand?: Prisma.BrandUpdateOneRequiredWithoutBrandProductNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutCategoryProductNestedInput;
    productOrderItem?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: number;
    shopId: number;
    SKU: string;
    brandId: number;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateManyMutationInput = {
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    SKU?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    SKU?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    SKU?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shopId?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutShopInput, Prisma.ProductUncheckedCreateWithoutShopInput> | Prisma.ProductCreateWithoutShopInput[] | Prisma.ProductUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutShopInput | Prisma.ProductCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.ProductCreateManyShopInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutShopInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutShopInput, Prisma.ProductUncheckedCreateWithoutShopInput> | Prisma.ProductCreateWithoutShopInput[] | Prisma.ProductUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutShopInput | Prisma.ProductCreateOrConnectWithoutShopInput[];
    createMany?: Prisma.ProductCreateManyShopInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutShopInput, Prisma.ProductUncheckedCreateWithoutShopInput> | Prisma.ProductCreateWithoutShopInput[] | Prisma.ProductUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutShopInput | Prisma.ProductCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutShopInput | Prisma.ProductUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.ProductCreateManyShopInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutShopInput | Prisma.ProductUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutShopInput | Prisma.ProductUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutShopNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutShopInput, Prisma.ProductUncheckedCreateWithoutShopInput> | Prisma.ProductCreateWithoutShopInput[] | Prisma.ProductUncheckedCreateWithoutShopInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutShopInput | Prisma.ProductCreateOrConnectWithoutShopInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutShopInput | Prisma.ProductUpsertWithWhereUniqueWithoutShopInput[];
    createMany?: Prisma.ProductCreateManyShopInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutShopInput | Prisma.ProductUpdateWithWhereUniqueWithoutShopInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutShopInput | Prisma.ProductUpdateManyWithWhereWithoutShopInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ProductCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput> | Prisma.ProductCreateWithoutBrandInput[] | Prisma.ProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBrandInput | Prisma.ProductCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.ProductCreateManyBrandInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput> | Prisma.ProductCreateWithoutBrandInput[] | Prisma.ProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBrandInput | Prisma.ProductCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.ProductCreateManyBrandInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput> | Prisma.ProductCreateWithoutBrandInput[] | Prisma.ProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBrandInput | Prisma.ProductCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput | Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.ProductCreateManyBrandInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput | Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutBrandInput | Prisma.ProductUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput> | Prisma.ProductCreateWithoutBrandInput[] | Prisma.ProductUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutBrandInput | Prisma.ProductCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput | Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.ProductCreateManyBrandInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput | Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutBrandInput | Prisma.ProductUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedOneWithoutProductOrderItemInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductOrderItemInput, Prisma.ProductUncheckedCreateWithoutProductOrderItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductOrderItemInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutProductOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductOrderItemInput, Prisma.ProductUncheckedCreateWithoutProductOrderItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductOrderItemInput;
    upsert?: Prisma.ProductUpsertWithoutProductOrderItemInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutProductOrderItemInput, Prisma.ProductUpdateWithoutProductOrderItemInput>, Prisma.ProductUncheckedUpdateWithoutProductOrderItemInput>;
};
export type ProductCreateNestedOneWithoutProductCartItemInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductCartItemInput, Prisma.ProductUncheckedCreateWithoutProductCartItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductCartItemInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutProductCartItemNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductCartItemInput, Prisma.ProductUncheckedCreateWithoutProductCartItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductCartItemInput;
    upsert?: Prisma.ProductUpsertWithoutProductCartItemInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutProductCartItemInput, Prisma.ProductUpdateWithoutProductCartItemInput>, Prisma.ProductUncheckedUpdateWithoutProductCartItemInput>;
};
export type ProductCreateNestedOneWithoutProductFeedbackInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductFeedbackInput, Prisma.ProductUncheckedCreateWithoutProductFeedbackInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductFeedbackInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutProductFeedbackNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductFeedbackInput, Prisma.ProductUncheckedCreateWithoutProductFeedbackInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductFeedbackInput;
    upsert?: Prisma.ProductUpsertWithoutProductFeedbackInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutProductFeedbackInput, Prisma.ProductUpdateWithoutProductFeedbackInput>, Prisma.ProductUncheckedUpdateWithoutProductFeedbackInput>;
};
export type ProductCreateWithoutShopInput = {
    SKU: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brand: Prisma.BrandCreateNestedOneWithoutBrandProductInput;
    category: Prisma.CategoryCreateNestedOneWithoutCategoryProductInput;
    productOrderItem?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutShopInput = {
    id?: number;
    SKU: string;
    brandId: number;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutShopInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutShopInput, Prisma.ProductUncheckedCreateWithoutShopInput>;
};
export type ProductCreateManyShopInputEnvelope = {
    data: Prisma.ProductCreateManyShopInput | Prisma.ProductCreateManyShopInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutShopInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutShopInput, Prisma.ProductUncheckedUpdateWithoutShopInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutShopInput, Prisma.ProductUncheckedCreateWithoutShopInput>;
};
export type ProductUpdateWithWhereUniqueWithoutShopInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutShopInput, Prisma.ProductUncheckedUpdateWithoutShopInput>;
};
export type ProductUpdateManyWithWhereWithoutShopInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutShopInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.IntFilter<"Product"> | number;
    shopId?: Prisma.IntFilter<"Product"> | number;
    SKU?: Prisma.StringFilter<"Product"> | string;
    brandId?: Prisma.IntFilter<"Product"> | number;
    categoryId?: Prisma.IntFilter<"Product"> | number;
    name?: Prisma.StringFilter<"Product"> | string;
    size?: Prisma.StringFilter<"Product"> | string;
    quantity?: Prisma.IntFilter<"Product"> | number;
    price?: Prisma.IntFilter<"Product"> | number;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
};
export type ProductCreateWithoutBrandInput = {
    SKU: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopProductInput;
    category: Prisma.CategoryCreateNestedOneWithoutCategoryProductInput;
    productOrderItem?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutBrandInput = {
    id?: number;
    shopId: number;
    SKU: string;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutBrandInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput>;
};
export type ProductCreateManyBrandInputEnvelope = {
    data: Prisma.ProductCreateManyBrandInput | Prisma.ProductCreateManyBrandInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutBrandInput, Prisma.ProductUncheckedUpdateWithoutBrandInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutBrandInput, Prisma.ProductUncheckedCreateWithoutBrandInput>;
};
export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutBrandInput, Prisma.ProductUncheckedUpdateWithoutBrandInput>;
};
export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutBrandInput>;
};
export type ProductCreateWithoutCategoryInput = {
    SKU: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopProductInput;
    brand: Prisma.BrandCreateNestedOneWithoutBrandProductInput;
    productOrderItem?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number;
    shopId: number;
    SKU: string;
    brandId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductCreateManyCategoryInputEnvelope = {
    data: Prisma.ProductCreateManyCategoryInput | Prisma.ProductCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
};
export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutCategoryInput>;
};
export type ProductCreateWithoutProductOrderItemInput = {
    SKU: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopProductInput;
    brand: Prisma.BrandCreateNestedOneWithoutBrandProductInput;
    category: Prisma.CategoryCreateNestedOneWithoutCategoryProductInput;
    productCartItem?: Prisma.CartItemCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutProductOrderItemInput = {
    id?: number;
    shopId: number;
    SKU: string;
    brandId: number;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productCartItem?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutProductOrderItemInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductOrderItemInput, Prisma.ProductUncheckedCreateWithoutProductOrderItemInput>;
};
export type ProductUpsertWithoutProductOrderItemInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutProductOrderItemInput, Prisma.ProductUncheckedUpdateWithoutProductOrderItemInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductOrderItemInput, Prisma.ProductUncheckedCreateWithoutProductOrderItemInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutProductOrderItemInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutProductOrderItemInput, Prisma.ProductUncheckedUpdateWithoutProductOrderItemInput>;
};
export type ProductUpdateWithoutProductOrderItemInput = {
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopProductNestedInput;
    brand?: Prisma.BrandUpdateOneRequiredWithoutBrandProductNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutCategoryProductNestedInput;
    productCartItem?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutProductOrderItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productCartItem?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutProductCartItemInput = {
    SKU: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopProductInput;
    brand: Prisma.BrandCreateNestedOneWithoutBrandProductInput;
    category: Prisma.CategoryCreateNestedOneWithoutCategoryProductInput;
    productOrderItem?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutProductCartItemInput = {
    id?: number;
    shopId: number;
    SKU: string;
    brandId: number;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    productFeedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutProductCartItemInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductCartItemInput, Prisma.ProductUncheckedCreateWithoutProductCartItemInput>;
};
export type ProductUpsertWithoutProductCartItemInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutProductCartItemInput, Prisma.ProductUncheckedUpdateWithoutProductCartItemInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductCartItemInput, Prisma.ProductUncheckedCreateWithoutProductCartItemInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutProductCartItemInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutProductCartItemInput, Prisma.ProductUncheckedUpdateWithoutProductCartItemInput>;
};
export type ProductUpdateWithoutProductCartItemInput = {
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopProductNestedInput;
    brand?: Prisma.BrandUpdateOneRequiredWithoutBrandProductNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutCategoryProductNestedInput;
    productOrderItem?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutProductCartItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutProductFeedbackInput = {
    SKU: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shop: Prisma.UserCreateNestedOneWithoutShopProductInput;
    brand: Prisma.BrandCreateNestedOneWithoutBrandProductInput;
    category: Prisma.CategoryCreateNestedOneWithoutCategoryProductInput;
    productOrderItem?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutProductFeedbackInput = {
    id?: number;
    shopId: number;
    SKU: string;
    brandId: number;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    productCartItem?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutProductFeedbackInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductFeedbackInput, Prisma.ProductUncheckedCreateWithoutProductFeedbackInput>;
};
export type ProductUpsertWithoutProductFeedbackInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutProductFeedbackInput, Prisma.ProductUncheckedUpdateWithoutProductFeedbackInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductFeedbackInput, Prisma.ProductUncheckedCreateWithoutProductFeedbackInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutProductFeedbackInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutProductFeedbackInput, Prisma.ProductUncheckedUpdateWithoutProductFeedbackInput>;
};
export type ProductUpdateWithoutProductFeedbackInput = {
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopProductNestedInput;
    brand?: Prisma.BrandUpdateOneRequiredWithoutBrandProductNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutCategoryProductNestedInput;
    productOrderItem?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutProductFeedbackInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyShopInput = {
    id?: number;
    SKU: string;
    brandId: number;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateWithoutShopInput = {
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brand?: Prisma.BrandUpdateOneRequiredWithoutBrandProductNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutCategoryProductNestedInput;
    productOrderItem?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutShopInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCreateManyBrandInput = {
    id?: number;
    shopId: number;
    SKU: string;
    categoryId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateWithoutBrandInput = {
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopProductNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutCategoryProductNestedInput;
    productOrderItem?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCreateManyCategoryInput = {
    id?: number;
    shopId: number;
    SKU: string;
    brandId: number;
    name: string;
    size: string;
    quantity: number;
    price: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateWithoutCategoryInput = {
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shop?: Prisma.UserUpdateOneRequiredWithoutShopProductNestedInput;
    brand?: Prisma.BrandUpdateOneRequiredWithoutBrandProductNestedInput;
    productOrderItem?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productOrderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    productCartItem?: Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput;
    productFeedback?: Prisma.FeedbackUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shopId?: Prisma.IntFieldUpdateOperationsInput | number;
    SKU?: Prisma.StringFieldUpdateOperationsInput | string;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCountOutputType = {
    productOrderItem: number;
    productCartItem: number;
    productFeedback: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productOrderItem?: boolean | ProductCountOutputTypeCountProductOrderItemArgs;
    productCartItem?: boolean | ProductCountOutputTypeCountProductCartItemArgs;
    productFeedback?: boolean | ProductCountOutputTypeCountProductFeedbackArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountProductOrderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type ProductCountOutputTypeCountProductCartItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartItemWhereInput;
};
export type ProductCountOutputTypeCountProductFeedbackArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeedbackWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    SKU?: boolean;
    brandId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    size?: boolean;
    quantity?: boolean;
    price?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    productOrderItem?: boolean | Prisma.Product$productOrderItemArgs<ExtArgs>;
    productCartItem?: boolean | Prisma.Product$productCartItemArgs<ExtArgs>;
    productFeedback?: boolean | Prisma.Product$productFeedbackArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    SKU?: boolean;
    brandId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    size?: boolean;
    quantity?: boolean;
    price?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shopId?: boolean;
    SKU?: boolean;
    brandId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    size?: boolean;
    quantity?: boolean;
    price?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    shopId?: boolean;
    SKU?: boolean;
    brandId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    size?: boolean;
    quantity?: boolean;
    price?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shopId" | "SKU" | "brandId" | "categoryId" | "name" | "size" | "quantity" | "price" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    productOrderItem?: boolean | Prisma.Product$productOrderItemArgs<ExtArgs>;
    productCartItem?: boolean | Prisma.Product$productCartItemArgs<ExtArgs>;
    productFeedback?: boolean | Prisma.Product$productFeedbackArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shop?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        shop: Prisma.$UserPayload<ExtArgs>;
        brand: Prisma.$BrandPayload<ExtArgs>;
        category: Prisma.$CategoryPayload<ExtArgs>;
        productOrderItem: Prisma.$OrderItemPayload<ExtArgs>[];
        productCartItem: Prisma.$CartItemPayload<ExtArgs>[];
        productFeedback: Prisma.$FeedbackPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shopId: number;
        SKU: string;
        brandId: number;
        categoryId: number;
        name: string;
        size: string;
        quantity: number;
        price: number;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shop<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    brand<T extends Prisma.BrandDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BrandDefaultArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    productOrderItem<T extends Prisma.Product$productOrderItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$productOrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productCartItem<T extends Prisma.Product$productCartItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$productCartItemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productFeedback<T extends Prisma.Product$productFeedbackArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$productFeedbackArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'Int'>;
    readonly shopId: Prisma.FieldRef<"Product", 'Int'>;
    readonly SKU: Prisma.FieldRef<"Product", 'String'>;
    readonly brandId: Prisma.FieldRef<"Product", 'Int'>;
    readonly categoryId: Prisma.FieldRef<"Product", 'Int'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly size: Prisma.FieldRef<"Product", 'String'>;
    readonly quantity: Prisma.FieldRef<"Product", 'Int'>;
    readonly price: Prisma.FieldRef<"Product", 'Int'>;
    readonly description: Prisma.FieldRef<"Product", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Product", 'DateTime'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$productOrderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Product$productCartItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    where?: Prisma.CartItemWhereInput;
    orderBy?: Prisma.CartItemOrderByWithRelationInput | Prisma.CartItemOrderByWithRelationInput[];
    cursor?: Prisma.CartItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartItemScalarFieldEnum | Prisma.CartItemScalarFieldEnum[];
};
export type Product$productFeedbackArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeedbackSelect<ExtArgs> | null;
    omit?: Prisma.FeedbackOmit<ExtArgs> | null;
    include?: Prisma.FeedbackInclude<ExtArgs> | null;
    where?: Prisma.FeedbackWhereInput;
    orderBy?: Prisma.FeedbackOrderByWithRelationInput | Prisma.FeedbackOrderByWithRelationInput[];
    cursor?: Prisma.FeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeedbackScalarFieldEnum | Prisma.FeedbackScalarFieldEnum[];
};
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
