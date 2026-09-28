import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Session: 'Session',
    Notification: 'Notification',
    Message: 'Message',
    Conversation: 'Conversation',
    Product: 'Product',
    Brand: 'Brand',
    Category: 'Category',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Feedback: 'Feedback'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    displayName: 'displayName',
    email: 'email',
    hashedPassword: 'hashedPassword',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    hashedRefreshToken: 'hashedRefreshToken',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt'
};
export const NotificationScalarFieldEnum = {
    id: 'id',
    senderId: 'senderId',
    receivedId: 'receivedId',
    type: 'type',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MessageScalarFieldEnum = {
    id: 'id',
    conversationId: 'conversationId',
    message: 'message',
    senderId: 'senderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ConversationScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    customerId: 'customerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ProductScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    SKU: 'SKU',
    brandId: 'brandId',
    categoryId: 'categoryId',
    name: 'name',
    size: 'size',
    quantity: 'quantity',
    price: 'price',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BrandScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrderScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    shopId: 'shopId',
    status: 'status',
    price: 'price',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CartScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CartItemScalarFieldEnum = {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const FeedbackScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    rating: 'rating',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map