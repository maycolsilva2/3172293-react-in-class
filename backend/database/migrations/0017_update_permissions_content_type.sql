-- Insertar los otros 2 permisos que muestra el documento si no existen
INSERT INTO permissions (permission_name, permission_codename)
VALUES
    ('Generar Reporte usuarios', 'report_user'),
    ('Deshabilitar usuarios', 'disable_user')
ON CONFLICT (permission_codename) DO NOTHING;

-- Asociar permisos de usuarios a users.user
UPDATE permissions
SET content_type_id = 1
WHERE permission_codename IN (
    'list_user',
    'create_user',
    'report_user',
    'disable_user'
);