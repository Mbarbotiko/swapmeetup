
USE swaps_db;

CREATE TABLE IF NOT EXISTS `Users` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255), `phone` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `Items` (`id` INTEGER NOT NULL auto_increment , `item` VARCHAR(255) NOT NULL, `description` VARCHAR(255) NOT NULL, `picture` VARCHAR(255) NOT NULL, `category` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE);


INSERT INTO Users (name, phone, createdAt, updatedAt)
VALUES ('Margarita', '16516001396', '2018-06-25 21:22:58', '2018-06-25 21:22:58');

INSERT INTO Users (name, phone, createdAt, updatedAt)
VALUES ('Stephen', '19525640504', '2018-06-25 21:22:58', '2018-06-25 21:22:58');

INSERT INTO Users (name, phone, createdAt, updatedAt)
VALUES ('Kate', '16128887434', '2018-06-25 21:22:58', '2018-06-25 21:22:58');

INSERT INTO Users (name, phone, createdAt, updatedAt)
VALUES ('Al', '16512160675', '2018-06-25 21:22:58', '2018-06-25 21:22:58');

INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Old Boot', 'Spectacular Vintage BOOT!', 'https://www.blueribbonpet.com/wp-content/uploads/EE-1733.jpg', 'Apparel', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 1 );

INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Half Eaten Apple', 'Almost a meal!', 'https://thumbs.dreamstime.com/b/half-eaten-apple-isolated-white-background-39418691.jpg', 'Lunch', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 2);

INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Chaps', 'Slightly worn in.', 'https://www.sheplers.com/dw/image/v2/BBCT_PRD/on/demandware.static/-/Sites-master-product-catalog-shp/default/dw65fe2d8d/images/092/2000236092_020_P1.JPG', 'Apparel', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 4);


INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Chia Pet', 'Ch-ch-ch-chia!', 'https://shop.pbs.org/ccstore/v1/images/?source=/file/v2073843211020553516/products/DTCP501.0.jpg', 'Shwutever', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 1);

INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Speedo', 'You wont look better than I will in this, sorry.', 'https://photos.cdn-outlet.com/photos/options/8134457-210-1A-zoomin.jpg', 'Apparel', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 2);


INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Sweet Glove', 'I think it used to belong to someone famous.', 'http://scstylecaster.files.wordpress.com/2013/08/michaelglove.jpg', 'Shwutever', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 4);


INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('My wife Jackie', 'She can cook if you have a microwave', 'http://propeller.hu/images/cikk/2016_01/fulvia.jpg', 'Spouse', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 4);


INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Beardski Ski Mask', 'Looks real', 'https://cdn.coolstuff.com/autogen/preset/aspectThumb/1200x900/9c48d6c91025f7a03cc64951dd5f553c.jpg', 'Apparel','2018-06-25 21:22:58', '2018-06-25 21:22:58', 3);


INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Chipotle Burrito', 'Better than your lunch', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-ffoV8XUYzbHZEZhiPpvcSEY9zZvrWb2xdrnnC8fB3_q6dxb', 'Lunch','2018-06-25 21:22:58', '2018-06-25 21:22:58' , 1);

INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Body Armor', 'Better safe than sorry.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNkmoZyGwTLjBvkmEICw0nPPxqJu5xLgyWzEXpQp40NRd64pA', 'Shwutever','2018-06-25 21:22:58', '2018-06-25 21:22:58' , 1);

INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Advanced Doll', 'Indestructible', 'https://arynews.tv/en/wp-content/uploads/2018/03/chucky-750x369.jpg', 'Tech', '2018-06-25 21:22:58', '2018-06-25 21:22:58' , 3);

INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('Spouse', 'Single and ready to mingle', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFDKTD4WUttMcr2na8T9Pfa67UM-s8bCwDn-UnIi_3dgKjlqE', 'Spouse','2018-06-25 21:22:58', '2018-06-25 21:22:58' , 2);

INSERT INTO Items (item, description, picture, category, createdAt, updatedAt, UserId) VALUES ('A heart', 'For anyone who works in an ER', 'https://img1.cgtrader.com/Items/148175/c9435bc002/human-heart-anatomy-3d-model-max-obj-3ds-fbx-c4d-lwo-lw-lws.jpg', 'Shwutever','2018-06-25 21:22:58', '2018-06-25 21:22:58' , 3);