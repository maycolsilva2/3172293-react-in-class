UPDATE public.permissions 
SET content_type_id = (SELECT content_type_id FROM public.content_type WHERE app_label = 'productos')
WHERE permission_codename IN ('list_products', 'create_products', 'edit_products', 'delete_products');