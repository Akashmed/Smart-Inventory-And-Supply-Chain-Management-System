
DROP TABLE inventory_logs CASCADE CONSTRAINTS;
DROP TABLE shipments CASCADE CONSTRAINTS;
DROP TABLE orders CASCADE CONSTRAINTS;
DROP TABLE products CASCADE CONSTRAINTS;
DROP TABLE suppliers CASCADE CONSTRAINTS;
DROP TABLE users CASCADE CONSTRAINTS;
DROP TABLE supplier_shipments CASCADE CONSTRAINTS;

-- USERS TABLE
CREATE TABLE users (
    user_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    full_name VARCHAR2(100),
    email VARCHAR2(100) UNIQUE NOT NULL,
    role VARCHAR2(20) CHECK (role IN ('admin', 'staff')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SUPPLIERS TABLE
CREATE TABLE suppliers (
    supplier_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR2(100) NOT NULL,
    contact_email VARCHAR2(100),
    phone VARCHAR2(20),
    address VARCHAR2(200)
);

-- PRODUCTS TABLE
CREATE TABLE products (
    product_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR2(100) NOT NULL,
    description VARCHAR2(255),
    unit_price NUMBER(10, 2),
    stock_quantity NUMBER DEFAULT 0,
    supplier_id NUMBER REFERENCES suppliers(supplier_id)
);

-- ORDERS TABLE
CREATE TABLE orders (
    order_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_id NUMBER REFERENCES products(product_id),
    quantity NUMBER NOT NULL,
    order_date DATE DEFAULT SYSDATE,
    status VARCHAR2(20) CHECK (status IN ('pending', 'shipped', 'cancelled')),
    placed_by NUMBER REFERENCES users(user_id)
);

-- SHIPMENTS TABLE FOR OUTBOUND
CREATE TABLE shipments (
    shipment_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id NUMBER REFERENCES orders(order_id),
    shipped_date DATE,
    carrier VARCHAR2(100),
    tracking_number VARCHAR2(100),
    product_id NUMBER REFERENCES products(product_id)
);

-- SHIPMENTS TABLE FOR INBOUND
CREATE TABLE supplier_shipments (
    supplier_shipment_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    supplier_id NUMBER REFERENCES suppliers(supplier_id),
    product_id NUMBER REFERENCES products(product_id),
    quantity NUMBER NOT NULL,
    received_date DATE DEFAULT CURRENT_TIMESTAMP,
    received_by NUMBER REFERENCES users(user_id)
);

-- INVENTORY LOGS TABLE
CREATE TABLE inventory_logs (
    log_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_id NUMBER REFERENCES products(product_id),
    change_type VARCHAR2(20) CHECK (change_type IN ('inbound', 'outbound')),
    quantity_changed NUMBER NOT NULL,
    log_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remarks VARCHAR2(100)
);

-- DATA INSERTS FOR USERS
INSERT INTO users (full_name, email, role) VALUES ('Admin One', 'admin1@example.com', 'admin');
INSERT INTO users (full_name, email, role) VALUES ('Staff User', 'staff@example.com', 'staff');

-- DATA INSERTS FOR SUPPLIERS
INSERT INTO suppliers (name, contact_email, phone, address) VALUES ('Global Tech Ltd.', 'supply@globaltech.com', '01700000001', 'Dhaka, Bangladesh');
INSERT INTO suppliers (name, contact_email, phone, address) VALUES ('Eastern Traders', 'info@easterntraders.com', '01700000002', 'Chittagong, Bangladesh');

-- DATA INSERTS FOR PRODUCTS
INSERT INTO products (name, description, unit_price, stock_quantity, supplier_id) VALUES ('Laptop', 'Dell i5 10th Gen', 80000, 25, 1);
INSERT INTO products (name, description, unit_price, stock_quantity, supplier_id) VALUES ('Mouse', 'Wireless Mouse', 1200, 100, 2);
INSERT INTO products (name, description, unit_price, stock_quantity, supplier_id) VALUES ('Keyboard', 'Mechanical Keyboard', 3500, 60, 1);

-- DATA INSERTS FOR ORDERS
INSERT INTO orders (product_id, quantity, status, placed_by) VALUES (1, 2, 'pending', 2);
INSERT INTO orders (product_id, quantity, status, placed_by) VALUES (2, 10, 'shipped', 2);

-- DATA INSERTS FOR SHIPMENTS
INSERT INTO shipments (order_id, shipped_date, carrier, tracking_number) VALUES (2, SYSDATE, 'DHL', 'DHLBD2025001');

-- DATA INSERTS FOR SUPPLIER_SHIPMENTS
INSERT INTO supplier_shipments (supplier_id, product_id, quantity, received_by) VALUES (1, 3, 50, 2);

-- DATA INSERTS FOR INVENTORY LOGS
INSERT INTO inventory_logs (product_id, change_type, quantity_changed, remarks) VALUES (1, 'outbound', 2, 'Order ID 1');
INSERT INTO inventory_logs (product_id, change_type, quantity_changed, remarks) VALUES (2, 'outbound', 10, 'Order ID 2');
INSERT INTO inventory_logs (product_id, change_type, quantity_changed, remarks) VALUES (2, 'inbound', 50, 'Restocked from Supplier ID 2');

-- COMMIT the changes
COMMIT;
