CREATE DATABASE innergy_wholsales IF NOT EXISTS;

use innergy_wholsales;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  storeName  VARCHAR(255),
  address  VARCHAR(255),
  city  VARCHAR(255),
  state  VARCHAR(255),
  Zip  VARCHAR(255),
  buyerName  VARCHAR(255),
  phone  VARCHAR(255),
  shipTo  VARCHAR(255),
  fax  VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_user INT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  sku VARCHAR(255),
  image VARCHAR(500),
  id_order INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE options (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  size VARCHAR(10),
  price DECIMAL,
  quantity INT,
  id_product INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



ALTER TABLE products ADD FOREIGN KEY (id_order) REFERENCES orders (id);
				
ALTER TABLE options ADD FOREIGN KEY (id_product) REFERENCES products (id);
				
ALTER TABLE orders ADD FOREIGN KEY (id_user) REFERENCES users (id);