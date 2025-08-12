
-- 1. View: Product and Supplier Details
CREATE OR REPLACE VIEW product_supplier_view AS
SELECT 
    p.product_id,
    p.name AS product_name,
    p.stock_quantity,
    p.unit_price,
    s.name AS supplier_name,
    s.address
FROM products p
JOIN suppliers s
    ON p.supplier_id = s.supplier_id;

-- Test the view
SELECT * FROM product_supplier_view;


-- 2. NATURAL JOIN Example: Orders with Product Names
SELECT 
    o.order_id,
    p.name AS product_name,
    o.quantity,
    o.status,
    o.order_date
FROM orders o
JOIN products p
    ON o.product_id = p.product_id;


-- 3. LEFT OUTER JOIN Example: All Products with Order Status (if any)
SELECT 
    p.product_id,
    p.name AS product_name,
    o.order_id,
    o.status
FROM products p
LEFT OUTER JOIN orders o
    ON p.product_id = o.product_id;


-- 4. Procedure: Place New Order
CREATE OR REPLACE PROCEDURE place_order(
    p_product_id IN NUMBER,
    p_quantity   IN NUMBER,
    p_placed_by  IN NUMBER
)
AS
BEGIN
    INSERT INTO orders (product_id, quantity, status, placed_by)
    VALUES (p_product_id, p_quantity, 'pending', p_placed_by);

    -- Log outbound inventory change
    INSERT INTO inventory_logs (product_id, change_type, quantity_changed, remarks)
    VALUES (p_product_id, 'outbound', p_quantity, 'Placed via procedure');
    
    COMMIT;
END;
/

-- Example call:
-- EXEC place_order(3, 5, 2);


-- 5. Trigger: Update Stock After New Order
CREATE OR REPLACE TRIGGER update_stock_after_order
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE products
    SET stock_quantity = stock_quantity - :NEW.quantity
    WHERE product_id = :NEW.product_id;
END;
/

-- 6. Trigger: Update Stock After Inventory Log (Inbound)
CREATE OR REPLACE TRIGGER update_stock_after_log
AFTER INSERT ON inventory_logs
FOR EACH ROW
BEGIN
    IF :NEW.change_type = 'inbound' THEN
        UPDATE products
        SET stock_quantity = stock_quantity + :NEW.quantity_changed
        WHERE product_id = :NEW.product_id;
    ELSIF :NEW.change_type = 'outbound' THEN
        UPDATE products
        SET stock_quantity = stock_quantity - :NEW.quantity_changed
        WHERE product_id = :NEW.product_id;
    END IF;
END;
/

-- 7. Example Complex Query: Total Orders per Supplier
SELECT 
    s.name AS supplier_name,
    COUNT(o.order_id) AS total_orders
FROM suppliers s
LEFT JOIN products p
    ON s.supplier_id = p.supplier_id
LEFT JOIN orders o
    ON p.product_id = o.product_id
GROUP BY s.name;
