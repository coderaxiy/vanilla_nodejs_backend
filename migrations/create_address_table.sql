CREATE TABLE IF NOT EXISTS address (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    country VARCHAR(255),
    city VARCHAR(255),
    street VARCHAR(255),
    zip INT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
