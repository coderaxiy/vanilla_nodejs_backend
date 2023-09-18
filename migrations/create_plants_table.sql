CREATE TABLE IF NOT EXISTS  plants (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    category_id INT NOT NULL,
    new_arrival BOOLEAN,
    in_sale BOOLEAN,
    price DECIMAL(5,2),
    short_info VARCHAR(255),
    description TEXT,
    created_at DATE,
    rate INT,
    FOREIGN KEY (category_id) REFERENCES category (id)
);
