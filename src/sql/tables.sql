-- Create the 'users' table to store user information
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    preferences TEXT,
    address TEXT,
    country TEXT,
    district TEXT,
    dateofbirth DATE NOT NULL,
    area TEXT,
    geolocation TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'main_page' table to store main main_page (online store, blogsite, etc.)
CREATE TABLE main_page (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id INT REFERENCES users(id),
    item_type VARCHAR(50) NOT NULL, -- store, blogsite, realestate, restaurant, etc.
    item_name VARCHAR(100) NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Other fields you might want to consider:
    website_url VARCHAR(200), -- If it's a blogsite or online store
    description TEXT, -- A brief description of the item
    cover_image_url VARCHAR(200), -- URL to the item's cover image
    is_published BOOLEAN DEFAULT false, -- For main_page that are not yet published
    -- Any other specific fields related to the item types
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'page_items' table to store page_items (menu main_page, store main_page, etc.)
CREATE TABLE page_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    item_id INT REFERENCES main_page(id),
    subitem_type VARCHAR(50) NOT NULL, -- menu item, store item, etc.
    subitem_name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2),
    availability BOOLEAN,
    is_vegan BOOLEAN,
    appointment_date DATE,
    appointment_hour TIME,
    -- Other subitem fields
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'item_details' table to store additional details for page_items
CREATE TABLE item_details (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subitem_id INT REFERENCES page_items(id),
    category VARCHAR(50),
    tags VARCHAR(200),
    more_info TEXT,
    address VARCHAR(200),
    -- Other subitem detail fields
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'comments' table to store user comments on main_page
CREATE TABLE comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subitem_id INT REFERENCES page_items(id),
    user_id INT REFERENCES users(user_id),
    comment_text TEXT NOT NULL,
    -- Other comment fields
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'ratings' table to store user ratings for main_page
CREATE TABLE ratings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subitem_id INT REFERENCES page_items(id),
    user_id INT REFERENCES users(user_id),
    rating_value INT NOT NULL,
    -- Other rating fields
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'item_views' table to track the number of views per item
CREATE TABLE item_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    item_id INT REFERENCES main_page(id),
    view_count INT DEFAULT 0,
    -- Other view fields
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
