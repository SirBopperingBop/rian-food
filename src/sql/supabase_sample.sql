/*
I'm building a platform for restaurant owners to create their own page just like fab pages.
The page wil include their menu items, specials section, opening hours, contact info, reservation form, rating and review section.
Each menu item can be specified as breakfast, lunch dinner.
Each menu item can be also be included in the specials section.
An admin will be allowed to add other users as collaborators.
Write me the supabase statement to create the dbase for this app.
Have all id's to be of type uuid4
*/


-- Create the 'users' table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  password TEXT NOT NULL,
  preferences TEXT NOT NULL,
  address TEXT,
  country TEXT,
  district TEXT,
  area TEXT,
  geolocation TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'restaurants' table
CREATE TABLE restaurants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  alias TEXT NOT NULL,
  description TEXT,
  shortdescription TEXT,
  address TEXT,
  country TEXT,
  district TEXT,
  area TEXT,
  geolocation TEXT,
  phone TEXT,
  email TEXT,
  website TEXT,
  whatsapp TEXT,
  cuisinetype TEXT,
  meals TEXT,
  seatings TEXT,
  socialmedia JSONB,
  is_childfriendly BOOLEAN DEFAULT true,
  is_handicappedfriendly BOOLEAN DEFAULT true,
  has_vegan BOOLEAN DEFAULT true,
  has_hallal BOOLEAN DEFAULT true,
  is_active BOOLEAN DEFAULT true,
  admin_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'collaborators' table to manage restaurant collaborators
CREATE TABLE collaborators (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  is_admin BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'menu_items' table
CREATE TABLE menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  image TEXT NULL,
  meal TEXT NULL,
  currency TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  discount INTEGER NOT NULL,
  cuisinetype TEXT NULL,
  is_ad BOOLEAN DEFAULT false,
  is_vegan BOOLEAN DEFAULT false,
  is_hallal BOOLEAN DEFAULT false,
  is_highlighted BOOLEAN DEFAULT false,
  is_special BOOLEAN DEFAULT false,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'blog_items' table to store blog items and recipes
CREATE TABLE blog_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    author_name VARCHAR(255) NOT NULL,
    image_url VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255) NOT NULL,
    description TEXT,
    instructions TEXT,
    content TEXT NOT NULL,
    category_name VARCHAR(50) NOT NULL,
    recipe JSONB,
    prep_time INTERVAL,
    cook_time INTERVAL,
    total_time INTERVAL,
    servings INT,
    difficulty VARCHAR(50),
    cuisine VARCHAR(100),
    course VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'blog_comments' table to store comments to blogs
CREATE TABLE blog_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_items_id UUID REFERENCES blog_items(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL,
  author_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  comment_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'opening_hours' table to store restaurant opening hours
CREATE TABLE opening_hours (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  day_of_week INTEGER NOT NULL,
  opening_time TIME,
  closing_time TIME,
  is_closed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'reservations' table
CREATE TABLE reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  date DATE NOT NULL,
  time TIME NOT NULL,
  party_size INTEGER NOT NULL,
  is_confirmed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create the 'ratings' table to store restaurant ratings
CREATE TABLE ratings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL,
  review TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
