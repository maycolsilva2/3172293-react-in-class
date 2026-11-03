-- database/migrations/create_content_type.sql
CREATE TABLE content_type (
    content_type_id SERIAL PRIMARY KEY,
    app_label VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    CONSTRAINT uq_content_type UNIQUE (app_label, model)
);