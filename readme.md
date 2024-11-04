
# Aplicação de Gerenciamento de Transações Financeiras

Esta aplicação permite gerenciar transações financeiras, incluindo receitas e despesas. Os usuários podem adicionar, editar e excluir transações, além de visualizar um resumo dos gastos e receitas.

## Tecnologias Utilizadas

- **Backend:** Laravel (PHP)
- **Frontend:** Angular
- **Banco de Dados:** MySQL

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
- [Angular CLI](https://angular.io/cli) (instalável via npm)
- [PHP](https://www.php.net/downloads) (versão 8.0 ou superior)
- [Composer](https://getcomposer.org/) (para gerenciamento de pacotes PHP)
- [MySQL](https://www.mysql.com/) (versão 5.7 ou superior)

## Configuração do Banco de Dados

### Script SQL

Execute o seguinte script SQL para criar a tabela `transactions` no seu banco de dados MySQL:

```sql
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(155) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
