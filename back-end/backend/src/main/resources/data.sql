-- category 데이터 추가
INSERT INTO TABLE_CATEGORY(category_name) VALUES("hamburger");
INSERT INTO TABLE_CATEGORY(category_name) VALUES("sidemenu");
INSERT INTO TABLE_CATEGORY(category_name) VALUES("beverage");
INSERT INTO TABLE_CATEGORY(category_name) VALUES("vegetable");
INSERT INTO TABLE_CATEGORY(category_name) VALUES("pattie");
INSERT INTO TABLE_CATEGORY(category_name) VALUES("bread");

-- ingredient 데이터 추가
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("bread1", 500, 6) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("bread2", 300, 6) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("bread3", 400, 6) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("pattie1", 500, 5) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("pattie2", 700, 5) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("pattie3", 600, 5) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("vegetable1", 200, 4) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("vegetable2", 300, 4) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("vegetable3", 250, 4) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("beverage1", 400, 3) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("beverage2", 500, 3) ;
INSERT INTO TABLE_INGREDIENT(ingredient_name, ingredient_price, category_id) VALUES("beverage3", 600, 3) ;

-- menu 데이터 추가
INSERT INTO TABLE_MENU(menu_name, menu_price, category_id) VALUES("불고기 버거", 3500, 1) ;
INSERT INTO TABLE_MENU(menu_name, menu_price, category_id) VALUES("더블불고기 버거", 3500, 1) ;
INSERT INTO TABLE_MENU(menu_name, menu_price, category_id) VALUES("음료 단품", 1500, 3) ;
INSERT INTO TABLE_MENU(menu_name, menu_price, category_id) VALUES("감자튀김 단품", 2000, 2) ;

-- user 데이터 추가
INSERT INTO TABLE_USER(user_name, user_age, kiosk_height) VALUES("사람1", 20, 2);
INSERT INTO TABLE_USER(user_name, user_age, kiosk_height) VALUES("사람2", 18, 3);

-- 한 명의 유저와 선택한 옵션 여러개
-- 선택한 하나 이상의 메뉴가 넘어옴

-- 주문이 들어오면 USER와 메뉴를 이용하여 ORDER를 먼저 생성
-- ORDER 데이터 추가
INSERT INTO TABLE_ORDER(total_count, total_price, is_packaging, order_date, user_id) VALUES(1, 3000, false,"1999-12-31", 1);
INSERT INTO TABLE_ORDER(total_count, total_price, is_packaging, order_date, user_id) VALUES(3, 7500, true,"1999-01-01", 2);
-- INGREDIENT와 Menu로 ORDER_DETAIL 생성
INSERT INTO TABLE_ORDER_DETAIL(menu_count, each_menu_price, is_set, order_id, menu_id) VALUES(1, 3000, false, 1, 1);
-- MenuDetail로 Custom 생성 가능
