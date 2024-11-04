CREATE DATABASE teste-pratico;

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(155) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO transactions (type, amount, description, created_at) VALUES
('despesa', 150.00, 'Aluguel de Outubro', '2023-10-01'),
('despesa', 50.00, 'Conta de Luz', '2023-10-05'),
('despesa', 75.00, 'Supermercado', '2023-10-07'),
('receita', 200.00, 'Salário de Outubro', '2023-10-10'),
('despesa', 100.00, 'Transporte', '2023-10-12'),
('receita', 120.00, 'Freelance', '2023-10-15'),
('despesa', 60.00, 'Alimentação', '2023-10-20'),
('receita', 300.00, 'Venda de produtos', '2023-10-25'),
('despesa', 40.00, 'Internet', '2023-10-28'),
('receita', 80.00, 'Venda de artesanato', '2023-10-30'),
('despesa', 90.00, 'Manutenção do carro', '2023-11-01'),
('receita', 150.00, 'Salário de Novembro', '2023-11-05'),
('despesa', 30.00, 'Café com amigos', '2023-11-10'),
('receita', 200.00, 'Consultoria', '2023-11-12'),
('despesa', 20.00, 'Assinatura de streaming', '2023-11-15');
