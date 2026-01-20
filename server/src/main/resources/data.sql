INSERT INTO products (id, name, description, image, category, price, stock)
VALUES ('8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', 'Wireless Earbuds Pro',
        'Premium wireless earbuds with active noise cancellation. 30-hour battery life with charging case.',
        '/products/earbuds.jpg', 'AUDIO', 179, 25),

       ('1f6c2c9e-7e0a-4b8a-9f43-6b5c1a8d2e02', 'Mechanical Keyboard',
        'Compact 75% mechanical keyboard with hot-swappable switches. Wireless and wired connectivity.',
        '/products/keyboard.jpg', 'PERIPHERALS', 149, 0),

       ('3b2d9e4a-6f51-4c8d-bf21-7a6e5c9d0303', 'USB-C Hub Pro',
        '7-in-1 USB-C hub with 4K HDMI, SD card reader, and 100W power delivery.',
        '/products/hub.jpg', 'ACCESSORIES', 89, 42),

       ('a4d2f7b3-1c6e-4e9b-8c1a-9f5e6d4c0404', 'Portable SSD 1TB',
        'Ultra-fast portable SSD with 1050MB/s read speeds. Compact aluminum design.',
        '/products/ssd.jpg', 'STORAGE', 129, 7),

       ('c5e3a9b2-8f6d-4b1c-9a7e-0d5c6b2f0505', 'Wireless Charging Pad',
        'Minimalist wireless charging pad with 15W fast charging. Compatible with all Qi devices.',
        '/products/charger.jpg', 'ACCESSORIES', 49, 0),

       ('d6b9c1e4-5a2f-4c7e-8b3d-1f9a0c6e0606', 'Studio Monitor Headphones',
        'Professional-grade studio monitor headphones with flat frequency response.',
        '/products/headphones.jpg', 'AUDIO', 249, 13),

       ('e7a5c6d9-2b8f-4d1e-9c6a-5b0f1e7d0707', 'Ergonomic Mouse',
        'Vertical ergonomic mouse designed for all-day comfort. Dual wireless connectivity.',
        '/products/mouse.jpg', 'PERIPHERALS', 79, 58),

       ('f8d1b9a7-6c5e-4a3d-8f2c-9e1b0a8d0808', 'Laptop Stand',
        'Adjustable aluminum laptop stand with cable management. Fits laptops up to 17 inches.',
        '/products/stand.jpg', 'ACCESSORIES', 69, 0);

INSERT INTO reviews (id, title,comment,rating,customer_name,customer_email,product_id,created_at)
VALUES
    ('db87714a-39f6-4a30-b530-bd1a73817d47','Quá xịn', 'Chống ồn tốt, pin trâu, đeo lâu không đau tai.', 5, 'Nguyễn Văn A', 'a.nguyen@gmail.com', '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '12 days'),
    ('62daad25-89d8-4ce7-beb9-9a21857257c5','Đáng tiền', 'Âm bass ổn, mic gọi rõ.', 4, 'Trần Thị B', 'b.tran@gmail.com', '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '9 days'),
    ('40c6ae80-b608-42c8-8c87-bcc76ff4db3f','Gõ rất sướng', 'Switch ngon, layout 75% dùng tiện.', 5, 'Lê Văn C', 'c.le@gmail.com', '1f6c2c9e-7e0a-4b8a-9f43-6b5c1a8d2e02', NOW() - INTERVAL '11 days'),
    ('6f0113a2-561f-4b34-9e70-05ff37dd88e5','Hết hàng nhanh', 'Muốn mua thêm mà stock = 0.', 4, 'Phạm Minh D', 'd.pham@gmail.com', '1f6c2c9e-7e0a-4b8a-9f43-6b5c1a8d2e02', NOW() - INTERVAL '7 days'),
    ('1814b317-5d92-431d-a153-45dd98867063','Tiện thật sự', 'Cắm MacBook phát ăn ngay, không lỗi.', 5, 'Hoàng Gia E', 'e.hoang@gmail.com', '3b2d9e4a-6f51-4c8d-bf21-7a6e5c9d0303', NOW() - INTERVAL '10 days'),
    ('d2e8b00f-5101-44af-ba2f-6d1e7fb11f3b','Ổn áp', 'Đủ cổng cho dân dev.', 4, 'Đặng Thu F', 'f.dang@gmail.com', '3b2d9e4a-6f51-4c8d-bf21-7a6e5c9d0303', NOW() - INTERVAL '6 days'),
    ('c1e1d0ae-3f4e-4b02-a4ac-b861962c6c4b','Siêu nhanh', 'Copy file mấy trăm GB rất đã.', 5, 'Vũ Quốc G', 'g.vu@gmail.com', 'a4d2f7b3-1c6e-4e9b-8c1a-9f5e6d4c0404', NOW() - INTERVAL '8 days'),
    ('bf69bbdb-2332-4a1f-86a2-3c5925bbe188','Nhỏ gọn', 'Bỏ túi mang đi làm tiện.', 4, 'Bùi Thanh H', 'h.bui@gmail.com', 'a4d2f7b3-1c6e-4e9b-8c1a-9f5e6d4c0404', NOW() - INTERVAL '5 days'),
    ('a1b2c3d4-1111-4aaa-8aaa-000000000001', 'Thiết kế đẹp', 'Để bàn nhìn gọn gàng.', 4, 'Ngô Anh I', 'i.ngo@gmail.com', 'c5e3a9b2-8f6d-4b1c-9a7e-0d5c6b2f0505', NOW() - INTERVAL '4 days'),
    ('a1b2c3d4-1111-4aaa-8aaa-000000000002', 'Sạc hơi chậm', 'Không nhanh như kỳ vọng.', 3, 'Phan Đức K', 'k.phan@gmail.com', 'c5e3a9b2-8f6d-4b1c-9a7e-0d5c6b2f0505', NOW() - INTERVAL '2 days'),
    ('a1b2c3d4-1111-4aaa-8aaa-000000000003', 'Âm rất chuẩn', 'Mix nhạc nghe đã tai.', 5, 'Trịnh Minh L', 'l.trinh@gmail.com', 'd6b9c1e4-5a2f-4c7e-8b3d-1f9a0c6e0606', NOW() - INTERVAL '9 days'),
    ('a1b2c3d4-1111-4aaa-8aaa-000000000004', 'Đeo hơi nặng', 'Âm tốt nhưng đội lâu hơi mỏi.', 4, 'Mai Quốc M', 'm.mai@gmail.com', 'd6b9c1e4-5a2f-4c7e-8b3d-1f9a0c6e0606', NOW() - INTERVAL '6 days'),
    ('a1b2c3d4-1111-4aaa-8aaa-000000000005', 'Cứu cổ tay', 'Làm việc lâu không đau tay.', 5, 'Nguyễn Hữu N', 'n.nguyen@gmail.com', 'e7a5c6d9-2b8f-4d1e-9c6a-5b0f1e7d0707', NOW() - INTERVAL '7 days'),
    ('a1b2c3d4-1111-4aaa-8aaa-000000000006', 'Cần làm quen', 'Ban đầu hơi lạ nhưng quen thì ok.', 4, 'Đỗ Thanh O', 'o.do@gmail.com', 'e7a5c6d9-2b8f-4d1e-9c6a-5b0f1e7d0707', NOW() - INTERVAL '3 days'),
    ('a1b2c3d4-1111-4aaa-8aaa-000000000007', 'Chắc chắn', 'Nhôm dày, kê laptop rất ổn.', 5, 'Phạm Quốc P', 'p.pham@gmail.com', 'f8d1b9a7-6c5e-4a3d-8f2c-9e1b0a8d0808', NOW() - INTERVAL '5 days'),
    ('a1b2c3d4-1111-4aaa-8aaa-000000000008', 'Hết hàng sớm', 'Muốn mua thêm cho công ty.', 4, 'Lý Thu Q', 'q.ly@gmail.com', 'f8d1b9a7-6c5e-4a3d-8f2c-9e1b0a8d0808', NOW() - INTERVAL '1 day');

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v4();
INSERT INTO reviews (
    id, title, comment, rating,
    customer_name, customer_email,
    product_id, created_at
)
VALUES
-- 5 sao
(uuid_generate_v4(), 'Rất đáng tiền',
 'Âm thanh chi tiết, bass tốt, chống ồn ổn trong tầm giá.', 5,
 'Trần Minh Quân', 'quan.tran@gmail.com',
 '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '10 days'),

(uuid_generate_v4(), 'Ngon',
 'Dùng để học online và nghe nhạc đều ok, pin trâu thật.', 5,
 'Lê Thị Mai', 'mai.le@gmail.com',
 '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '9 days'),

-- 4 sao
(uuid_generate_v4(), 'Tốt trong tầm giá',
 'Chống ồn ổn, mic gọi điện rõ. Trừ điểm nhẹ vì case hơi to.', 4,
 'Phạm Đức Long', 'long.pham@gmail.com',
 '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '8 days'),

(uuid_generate_v4(), 'Hài lòng',
 'Kết nối nhanh, không bị rớt. Đeo lâu hơi bí tai.', 4,
 'Ngô Thanh Hằng', 'hang.ngo@gmail.com',
 '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '7 days'),

-- 3 sao
(uuid_generate_v4(), 'Ổn nhưng chưa xuất sắc',
 'Âm thanh ok nhưng chống ồn chưa như kỳ vọng.', 3,
 'Vũ Hoàng Nam', 'nam.vu@gmail.com',
 '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '6 days'),

(uuid_generate_v4(), 'Bình thường',
 'So với giá thì chấp nhận được, không có gì quá nổi bật.', 3,
 'Đỗ Thu Trang', 'trang.do@gmail.com',
 '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '5 days'),

-- 2 sao
(uuid_generate_v4(), 'Hơi thất vọng',
 'Pin không được như quảng cáo, dùng cỡ 4–5 tiếng là hết.', 2,
 'Nguyễn Quốc Bảo', 'bao.nguyen@gmail.com',
 '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '4 days'),

-- 1 sao
(uuid_generate_v4(), 'Không hài lòng',
 'Tai bên trái bị rè sau vài ngày sử dụng.', 1,
 'Hoàng Anh Tuấn', 'tuan.hoang@gmail.com',
 '8c1f0c2a-9d5e-4a92-8a6e-1c5b6f9b1a01', NOW() - INTERVAL '3 days');