// import { PrismaClient, Role, Status, Rating } from "../generated/prisma/internal/class.js";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
// });

// const adapter = new PrismaPg(pool);

// const prisma = new PrismaClient({
//     adapter,
// });

// async function main() {
//     console.log("🌱 Starting ECWA seed...");

//     // =========================================================
//     // 1. CLEAR DATABASE
//     // =========================================================

//     await prisma.message.deleteMany();
//     await prisma.conversation.deleteMany();
//     await prisma.notification.deleteMany();
//     await prisma.feedback.deleteMany();
//     await prisma.orderItem.deleteMany();
//     await prisma.order.deleteMany();
//     await prisma.cartItem.deleteMany();
//     await prisma.cart.deleteMany();
//     await prisma.product.deleteMany();
//     await prisma.brand.deleteMany();
//     await prisma.category.deleteMany();
//     await prisma.session.deleteMany();
//     await prisma.user.deleteMany();

//     // =========================================================
//     // 2. PASSWORD
//     // =========================================================

//     const hashedPassword = await bcrypt.hash("123456", 10);

//     // =========================================================
//     // 3. SHOPS
//     // =========================================================

//     const shops = await Promise.all([
//         prisma.user.create({
//             data: {
//                 userName: "TechZone",
//                 email: "techzone@ecwa.com",
//                 phone: "0901000001",
//                 address: "Quận 1, TP. Hồ Chí Minh",
//                 hashedPassword,
//                 role: Role.shop,
//             },
//         }),

//         prisma.user.create({
//             data: {
//                 userName: "FashionHub",
//                 email: "fashionhub@ecwa.com",
//                 phone: "0901000002",
//                 address: "Quận 3, TP. Hồ Chí Minh",
//                 hashedPassword,
//                 role: Role.shop,
//             },
//         }),

//         prisma.user.create({
//             data: {
//                 userName: "HomeLiving",
//                 email: "homeliving@ecwa.com",
//                 phone: "0901000003",
//                 address: "Quận 7, TP. Hồ Chí Minh",
//                 hashedPassword,
//                 role: Role.shop,
//             },
//         }),

//         prisma.user.create({
//             data: {
//                 userName: "BeautyStore",
//                 email: "beautystore@ecwa.com",
//                 phone: "0901000004",
//                 address: "Bình Thạnh, TP. Hồ Chí Minh",
//                 hashedPassword,
//                 role: Role.shop,
//             },
//         }),

//         prisma.user.create({
//             data: {
//                 userName: "SportWorld",
//                 email: "sportworld@ecwa.com",
//                 phone: "0901000005",
//                 address: "Thủ Đức, TP. Hồ Chí Minh",
//                 hashedPassword,
//                 role: Role.shop,
//             },
//         }),
//     ]);

//     // =========================================================
//     // 4. CUSTOMERS
//     // =========================================================

//     const customers = await Promise.all([
//         prisma.user.create({
//             data: {
//                 userName: "Nguyen Van An",
//                 email: "an@gmail.com",
//                 phone: "0911000001",
//                 address: "Quận 1, TP. Hồ Chí Minh",
//                 hashedPassword,
//                 role: Role.customer,
//             },
//         }),

//         prisma.user.create({
//             data: {
//                 userName: "Tran Minh Anh",
//                 email: "anh@gmail.com",
//                 phone: "0911000002",
//                 address: "Quận 5, TP. Hồ Chí Minh",
//                 hashedPassword,
//                 role: Role.customer,
//             },
//         }),

//         prisma.user.create({
//             data: {
//                 userName: "Le Hoang Nam",
//                 email: "nam@gmail.com",
//                 phone: "0911000003",
//                 address: "Quận 10, TP. Hồ Chí Minh",
//                 hashedPassword,
//                 role: Role.customer,
//             },
//         }),

//         prisma.user.create({
//             data: {
//                 userName: "Pham Thu Ha",
//                 email: "ha@gmail.com",
//                 phone: "0911000004",
//                 address: "Tân Bình, TP. Hồ Chí Minh",
//                 hashedPassword,
//                 role: Role.customer,
//             },
//         }),
//     ]);

//     // =========================================================
//     // 5. CATEGORIES
//     // =========================================================

//     const categories = await Promise.all([
//         prisma.category.create({
//             data: {
//                 name: "Laptop",
//                 description: "Laptop and notebook computers",
//             },
//         }),

//         prisma.category.create({
//             data: {
//                 name: "Smartphone",
//                 description: "Smartphones and mobile devices",
//             },
//         }),

//         prisma.category.create({
//             data: {
//                 name: "Fashion",
//                 description: "Clothing and fashion products",
//             },
//         }),

//         prisma.category.create({
//             data: {
//                 name: "Home",
//                 description: "Home and living products",
//             },
//         }),

//         prisma.category.create({
//             data: {
//                 name: "Beauty",
//                 description: "Beauty and personal care",
//             },
//         }),

//         prisma.category.create({
//             data: {
//                 name: "Sports",
//                 description: "Sports and fitness products",
//             },
//         }),

//         prisma.category.create({
//             name: "Accessories",
//             description: "Electronic and lifestyle accessories",
//         }),

//         prisma.category.create({
//             name: "Shoes",
//             description: "Shoes and footwear",
//         }),
//     ]);

//     // =========================================================
//     // 6. BRANDS
//     // =========================================================

//     const brands = await Promise.all([
//         prisma.brand.create({
//             data: {
//                 name: "Apple",
//                 description: "Apple technology products",
//             },
//         }),

//         prisma.brand.create({
//             data: {
//                 name: "Samsung",
//                 description: "Samsung electronics",
//             },
//         }),

//         prisma.brand.create({
//             data: {
//                 name: "Dell",
//                 description: "Dell computers and laptops",
//             },
//         }),

//         prisma.brand.create({
//             data: {
//                 name: "Nike",
//                 description: "Nike sportswear and footwear",
//             },
//         }),

//         prisma.brand.create({
//             data: {
//                 name: "Adidas",
//                 description: "Adidas sports products",
//             },
//         }),

//         prisma.brand.create({
//             data: {
//                 name: "Uniqlo",
//                 description: "Uniqlo fashion products",
//             },
//         }),

//         prisma.brand.create({
//             data: {
//                 name: "IKEA",
//                 description: "IKEA home products",
//             },
//         }),

//         prisma.brand.create({
//             data: {
//                 name: "Logitech",
//                 description: "Computer peripherals",
//             },
//         }),

//         prisma.brand.create({
//             data: {
//                 name: "Sony",
//                 description: "Sony electronics",
//             },
//         }),

//         prisma.brand.create({
//             data: {
//                 name: "L'Oreal",
//                 description: "Beauty and personal care products",
//             },
//         }),
//     ]);

//     // =========================================================
//     // 7. PRODUCTS
//     // =========================================================

//     const productData = [
//         // ===================== SHOP 1 =====================
//         {
//             shopId: shops[0].id,
//             brandId: brands[0].id,
//             categoryId: categories[0].id,
//             SKU: "TEC-APL-MBA-M2",
//             name: "MacBook Air M2",
//             size: "13-inch",
//             quantity: 25,
//             price: 24990000,
//             image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
//             description: "Apple MacBook Air with M2 chip and 8GB RAM.",
//         },
//         {
//             shopId: shops[0].id,
//             brandId: brands[2].id,
//             categoryId: categories[0].id,
//             SKU: "TEC-DEL-XPS13",
//             name: "Dell XPS 13",
//             size: "13-inch",
//             quantity: 18,
//             price: 28990000,
//             image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
//             description: "Premium Dell laptop for work and productivity.",
//         },
//         {
//             shopId: shops[0].id,
//             brandId: brands[1].id,
//             categoryId: categories[1].id,
//             SKU: "TEC-SAM-S24",
//             name: "Samsung Galaxy S24",
//             size: "6.2-inch",
//             quantity: 30,
//             price: 18990000,
//             image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
//             description: "Samsung flagship smartphone with AMOLED display.",
//         },
//         {
//             shopId: shops[0].id,
//             brandId: brands[0].id,
//             categoryId: categories[1].id,
//             SKU: "TEC-APL-IP15",
//             name: "iPhone 15",
//             size: "6.1-inch",
//             quantity: 22,
//             price: 19990000,
//             image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
//             description: "Apple iPhone 15 with A16 Bionic chip.",
//         },
//         {
//             shopId: shops[0].id,
//             brandId: brands[7].id,
//             categoryId: categories[6].id,
//             SKU: "TEC-LOG-MX3S",
//             name: "Logitech MX Master 3S",
//             size: "Standard",
//             quantity: 45,
//             price: 1890000,
//             image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
//             description: "Wireless ergonomic mouse for productivity.",
//         },
//         {
//             shopId: shops[0].id,
//             brandId: brands[8].id,
//             categoryId: categories[6].id,
//             SKU: "TEC-SON-WH1000",
//             name: "Sony WH-1000XM5",
//             size: "Standard",
//             quantity: 20,
//             price: 7990000,
//             image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
//             description: "Premium wireless noise cancelling headphones.",
//         },

//         // ===================== SHOP 2 =====================
//         {
//             shopId: shops[1].id,
//             brandId: brands[5].id,
//             categoryId: categories[2].id,
//             SKU: "FAS-UNI-AIRTEE",
//             name: "Uniqlo Airism T-Shirt",
//             size: "M",
//             quantity: 100,
//             price: 399000,
//             image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
//             description: "Lightweight and comfortable Airism T-shirt.",
//         },
//         {
//             shopId: shops[1].id,
//             brandId: brands[5].id,
//             categoryId: categories[2].id,
//             SKU: "FAS-UNI-HOODIE",
//             name: "Uniqlo Hoodie",
//             size: "L",
//             quantity: 60,
//             price: 799000,
//             image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
//             description: "Classic casual hoodie for everyday wear.",
//         },
//         {
//             shopId: shops[1].id,
//             brandId: brands[3].id,
//             categoryId: categories[7].id,
//             SKU: "FAS-NIK-AF1",
//             name: "Nike Air Force 1",
//             size: "42",
//             quantity: 35,
//             price: 2890000,
//             image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//             description: "Classic Nike lifestyle sneakers.",
//         },
//         {
//             shopId: shops[1].id,
//             brandId: brands[4].id,
//             categoryId: categories[7].id,
//             SKU: "FAS-ADI-ULTRA",
//             name: "Adidas Ultraboost",
//             size: "42",
//             quantity: 28,
//             price: 3490000,
//             image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//             description: "Comfortable running shoes with responsive cushioning.",
//         },
//         {
//             shopId: shops[1].id,
//             brandId: brands[5].id,
//             categoryId: categories[2].id,
//             SKU: "FAS-UNI-JACKET",
//             name: "Uniqlo Utility Jacket",
//             size: "L",
//             quantity: 40,
//             price: 1499000,
//             image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
//             description: "Minimal utility jacket suitable for daily wear.",
//         },
//         {
//             shopId: shops[1].id,
//             brandId: brands[3].id,
//             categoryId: categories[2].id,
//             SKU: "FAS-NIK-SWEAT",
//             name: "Nike Sportswear Sweatshirt",
//             size: "L",
//             quantity: 50,
//             price: 1290000,
//             image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
//             description: "Comfortable Nike sweatshirt for casual activities.",
//         },

//         // ===================== SHOP 3 =====================
//         {
//             shopId: shops[2].id,
//             brandId: brands[6].id,
//             categoryId: categories[3].id,
//             SKU: "HOM-IKEA-LAMP01",
//             name: "IKEA Desk Lamp",
//             size: "Standard",
//             quantity: 55,
//             price: 599000,
//             image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
//             description: "Modern desk lamp for home and office.",
//         },
//         {
//             shopId: shops[2].id,
//             brandId: brands[6].id,
//             categoryId: categories[3].id,
//             SKU: "HOM-IKEA-CHAIR1",
//             name: "IKEA Office Chair",
//             size: "Standard",
//             quantity: 25,
//             price: 2499000,
//             image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
//             description: "Comfortable ergonomic office chair.",
//         },
//         {
//             shopId: shops[2].id,
//             brandId: brands[6].id,
//             categoryId: categories[3].id,
//             SKU: "HOM-IKEA-TABLE1",
//             name: "IKEA Study Table",
//             size: "120x60cm",
//             quantity: 20,
//             price: 1999000,
//             image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//             description: "Minimal study and work desk.",
//         },
//         {
//             shopId: shops[2].id,
//             brandId: brands[6].id,
//             categoryId: categories[3].id,
//             SKU: "HOM-IKEA-SHELF1",
//             name: "IKEA Bookshelf",
//             size: "80x30x180cm",
//             quantity: 15,
//             price: 2299000,
//             image: "https://images.unsplash.com/photo-1594620302200-9a762244a156",
//             description: "Simple bookshelf for living room or bedroom.",
//         },
//         {
//             shopId: shops[2].id,
//             brandId: brands[8].id,
//             categoryId: categories[6].id,
//             SKU: "HOM-SON-SPEAKER",
//             name: "Sony Bluetooth Speaker",
//             size: "Standard",
//             quantity: 30,
//             price: 2490000,
//             image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
//             description: "Portable Bluetooth speaker with rich sound.",
//         },
//         {
//             shopId: shops[2].id,
//             brandId: brands[7].id,
//             categoryId: categories[6].id,
//             SKU: "HOM-LOG-K380",
//             name: "Logitech K380 Keyboard",
//             size: "Compact",
//             quantity: 40,
//             price: 799000,
//             image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
//             description: "Compact wireless keyboard for multiple devices.",
//         },

//         // ===================== SHOP 4 =====================
//         {
//             shopId: shops[3].id,
//             brandId: brands[9].id,
//             categoryId: categories[4].id,
//             SKU: "BEA-LOR-SERUM1",
//             name: "L'Oreal Revitalift Serum",
//             size: "30ml",
//             quantity: 70,
//             price: 599000,
//             image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
//             description: "Anti-aging facial serum for daily skincare.",
//         },
//         {
//             shopId: shops[3].id,
//             brandId: brands[9].id,
//             categoryId: categories[4].id,
//             SKU: "BEA-LOR-CREAM1",
//             name: "L'Oreal Moisturizing Cream",
//             size: "50ml",
//             quantity: 80,
//             price: 449000,
//             image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
//             description: "Daily moisturizing face cream.",
//         },
//         {
//             shopId: shops[3].id,
//             brandId: brands[9].id,
//             categoryId: categories[4].id,
//             SKU: "BEA-LOR-CLEAN1",
//             name: "L'Oreal Facial Cleanser",
//             size: "150ml",
//             quantity: 90,
//             price: 299000,
//             image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
//             description: "Gentle facial cleanser for everyday use.",
//         },
//         {
//             shopId: shops[3].id,
//             brandId: brands[9].id,
//             categoryId: categories[4].id,
//             SKU: "BEA-LOR-SUN01",
//             name: "L'Oreal Sunscreen SPF50",
//             size: "50ml",
//             quantity: 75,
//             price: 499000,
//             image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
//             description: "Lightweight sunscreen with SPF50 protection.",
//         },
//         {
//             shopId: shops[3].id,
//             brandId: brands[9].id,
//             categoryId: categories[4].id,
//             SKU: "BEA-LOR-TONER1",
//             name: "L'Oreal Hydrating Toner",
//             size: "200ml",
//             quantity: 65,
//             price: 379000,
//             image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
//             description: "Hydrating toner for daily skincare routine.",
//         },
//         {
//             shopId: shops[3].id,
//             brandId: brands[9].id,
//             categoryId: categories[4].id,
//             SKU: "BEA-LOR-MASK01",
//             name: "L'Oreal Clay Mask",
//             size: "50ml",
//             quantity: 55,
//             price: 329000,
//             image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
//             description: "Clay mask designed to purify and refresh skin.",
//         },

//         // ===================== SHOP 5 =====================
//         {
//             shopId: shops[4].id,
//             brandId: brands[3].id,
//             categoryId: categories[5].id,
//             SKU: "SPO-NIK-RUN01",
//             name: "Nike Running Shoes",
//             size: "42",
//             quantity: 40,
//             price: 2990000,
//             image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//             description: "Lightweight running shoes for daily training.",
//         },
//         {
//             shopId: shops[4].id,
//             brandId: brands[4].id,
//             categoryId: categories[5].id,
//             SKU: "SPO-ADI-TRACK",
//             name: "Adidas Training Pants",
//             size: "L",
//             quantity: 60,
//             price: 999000,
//             image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
//             description: "Comfortable training pants for sports activities.",
//         },
//         {
//             shopId: shops[4].id,
//             brandId: brands[3].id,
//             categoryId: categories[5].id,
//             SKU: "SPO-NIK-BALL01",
//             name: "Nike Basketball",
//             size: "Size 7",
//             quantity: 35,
//             price: 699000,
//             image: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
//             description: "Official-size basketball for indoor and outdoor play.",
//         },
//         {
//             shopId: shops[4].id,
//             brandId: brands[4].id,
//             categoryId: categories[5].id,
//             SKU: "SPO-ADI-YOGA01",
//             name: "Adidas Yoga Mat",
//             size: "183x61cm",
//             quantity: 45,
//             price: 599000,
//             image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
//             description: "Non-slip yoga mat for home workouts.",
//         },
//         {
//             shopId: shops[4].id,
//             brandId: brands[3].id,
//             categoryId: categories[5].id,
//             SKU: "SPO-NIK-BAG01",
//             name: "Nike Training Backpack",
//             size: "25L",
//             quantity: 30,
//             price: 1199000,
//             image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
//             description: "Spacious backpack for gym and daily activities.",
//         },
//         {
//             shopId: shops[4].id,
//             brandId: brands[4].id,
//             categoryId: categories[5].id,
//             SKU: "SPO-ADI-BOTTLE",
//             name: "Adidas Sports Bottle",
//             size: "750ml",
//             quantity: 80,
//             price: 299000,
//             image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
//             description: "Reusable sports water bottle.",
//         },
//     ];

//     const products = await Promise.all(
//         productData.map((product) =>
//             prisma.product.create({
//                 data: product,
//             })
//         )
//     );

//     // =========================================================
//     // 8. CARTS
//     // =========================================================

//     const carts = await Promise.all(
//         customers.map((customer) =>
//             prisma.cart.create({
//                 data: {
//                     customerId: customer.id,
//                 },
//             })
//         )
//     );

//     // =========================================================
//     // 9. CART ITEMS
//     // =========================================================

//     await prisma.cartItem.createMany({
//         data: [
//             {
//                 cartId: carts[0].id,
//                 productId: products[0].id,
//                 quantity: 1,
//             },
//             {
//                 cartId: carts[0].id,
//                 productId: products[6].id,
//                 quantity: 2,
//             },
//             {
//                 cartId: carts[1].id,
//                 productId: products[8].id,
//                 quantity: 1,
//             },
//             {
//                 cartId: carts[1].id,
//                 productId: products[12].id,
//                 quantity: 1,
//             },
//             {
//                 cartId: carts[2].id,
//                 productId: products[18].id,
//                 quantity: 2,
//             },
//             {
//                 cartId: carts[2].id,
//                 productId: products[24].id,
//                 quantity: 1,
//             },
//             {
//                 cartId: carts[3].id,
//                 productId: products[28].id,
//                 quantity: 3,
//             },
//         ],
//     });

//     // =========================================================
//     // 10. ORDERS
//     // =========================================================

//     const order1 = await prisma.order.create({
//         data: {
//             customerId: customers[0].id,
//             shopId: shops[0].id,
//             status: Status.confirmed,
//             price: products[0].price,
//             total: products[0].price,
//         },
//     });

//     const order2 = await prisma.order.create({
//         data: {
//             customerId: customers[1].id,
//             shopId: shops[1].id,
//             status: Status.shipping,
//             price: products[8].price * 2,
//             total: products[8].price * 2,
//         },
//     });

//     const order3 = await prisma.order.create({
//         data: {
//             customerId: customers[2].id,
//             shopId: shops[4].id,
//             status: Status.pending,
//             price: products[24].price,
//             total: products[24].price,
//         },
//     });

//     // =========================================================
//     // 11. ORDER ITEMS
//     // =========================================================

//     await prisma.orderItem.createMany({
//         data: [
//             {
//                 orderId: order1.id,
//                 productId: products[0].id,
//                 quantity: 1,
//                 price: products[0].price,
//             },
//             {
//                 orderId: order2.id,
//                 productId: products[8].id,
//                 quantity: 2,
//                 price: products[8].price,
//             },
//             {
//                 orderId: order3.id,
//                 productId: products[24].id,
//                 quantity: 1,
//                 price: products[24].price,
//             },
//         ],
//     });

//     // =========================================================
//     // 12. FEEDBACK
//     // =========================================================

//     await prisma.feedback.createMany({
//         data: [
//             {
//                 productId: products[0].id,
//                 rating: Rating.five,
//                 feedback: "Excellent laptop, very fast and lightweight.",
//             },
//             {
//                 productId: products[1].id,
//                 rating: Rating.four,
//                 feedback: "Great build quality and good performance.",
//             },
//             {
//                 productId: products[6].id,
//                 rating: Rating.five,
//                 feedback: "Very comfortable shirt.",
//             },
//             {
//                 productId: products[8].id,
//                 rating: Rating.five,
//                 feedback: "Classic shoes, very comfortable.",
//             },
//             {
//                 productId: products[12].id,
//                 rating: Rating.four,
//                 feedback: "Looks great and works well.",
//             },
//             {
//                 productId: products[18].id,
//                 rating: Rating.five,
//                 feedback: "Very useful for daily work.",
//             },
//             {
//                 productId: products[24].id,
//                 rating: Rating.five,
//                 feedback: "Excellent running shoes.",
//             },
//             {
//                 productId: products[27].id,
//                 rating: Rating.four,
//                 feedback: "Good quality yoga mat.",
//             },
//         ],
//     });

//     // =========================================================
//     // 13. CONVERSATIONS
//     // =========================================================

//     const conversation1 = await prisma.conversation.create({
//         data: {
//             shopId: shops[0].id,
//             customerId: customers[0].id,
//         },
//     });

//     const conversation2 = await prisma.conversation.create({
//         data: {
//             shopId: shops[1].id,
//             customerId: customers[1].id,
//         },
//     });

//     const conversation3 = await prisma.conversation.create({
//         data: {
//             shopId: shops[4].id,
//             customerId: customers[2].id,
//         },
//     });

//     // =========================================================
//     // 14. MESSAGES
//     // =========================================================

//     await prisma.message.createMany({
//         data: [
//             {
//                 conversationId: conversation1.id,
//                 senderId: customers[0].id,
//                 message: "Is the MacBook Air M2 still available?",
//             },
//             {
//                 conversationId: conversation1.id,
//                 senderId: shops[0].id,
//                 message: "Yes, we still have it in stock.",
//             },
//             {
//                 conversationId: conversation1.id,
//                 senderId: customers[0].id,
//                 message: "Great. Does it come with the original charger?",
//             },
//             {
//                 conversationId: conversation1.id,
//                 senderId: shops[0].id,
//                 message: "Yes, it includes the original charger.",
//             },

//             {
//                 conversationId: conversation2.id,
//                 senderId: customers[1].id,
//                 message: "Do you have Nike Air Force 1 size 42?",
//             },
//             {
//                 conversationId: conversation2.id,
//                 senderId: shops[1].id,
//                 message: "Yes, size 42 is available.",
//             },

//             {
//                 conversationId: conversation3.id,
//                 senderId: customers[2].id,
//                 message: "How long does delivery usually take?",
//             },
//             {
//                 conversationId: conversation3.id,
//                 senderId: shops[4].id,
//                 message: "Usually 2-4 business days.",
//             },
//         ],
//     });

//     // =========================================================
//     // 15. NOTIFICATIONS
//     // =========================================================

//     await prisma.notification.createMany({
//         data: [
//             {
//                 senderId: shops[0].id,
//                 receivedId: customers[0].id,
//                 type: "ORDER",
//                 title: "Order confirmed",
//                 content: "Your order has been confirmed by TechZone.",
//             },
//             {
//                 senderId: shops[1].id,
//                 receivedId: customers[1].id,
//                 type: "ORDER",
//                 title: "Order shipping",
//                 content: "Your order is now being shipped.",
//             },
//             {
//                 senderId: shops[4].id,
//                 receivedId: customers[2].id,
//                 type: "ORDER",
//                 title: "Order received",
//                 content: "Your order has been received by SportWorld.",
//             },
//         ],
//     });

//     // =========================================================
//     // DONE
//     // =========================================================

//     console.log("✅ Seed completed!");
//     console.log(`🏪 Shops: ${shops.length}`);
//     console.log(`👤 Customers: ${customers.length}`);
//     console.log(`📦 Products: ${products.length}`);
//     console.log(`🛒 Carts: ${carts.length}`);
//     console.log("📋 Orders: 3");
//     console.log("💬 Conversations: 3");
//     console.log("🔔 Notifications: 3");
//     console.log("");
//     console.log("🔑 All seed accounts use password: 123456");
// }

// main()
//     .catch((error) => {
//         console.error("❌ Seed failed:");
//         console.error(error);
//         process.exit(1);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });

