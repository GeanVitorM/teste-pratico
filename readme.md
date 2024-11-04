![image](https://github.com/user-attachments/assets/0dfb67cb-7a13-49a2-9e5e-5a816f223d49)

![image](https://github.com/user-attachments/assets/426a0f5c-9455-42a2-9f59-8dc643643a75)

![image](https://github.com/user-attachments/assets/0d48d401-15ed-464d-8fb3-18e831adcb50)

# Aplicação de Gerenciamento de Transações Financeiras

Esta aplicação permite gerenciar transações financeiras, incluindo receitas e despesas. Os usuários podem adicionar, editar e excluir transações, além de visualizar um resumo dos gastos e receitas.

## Tecnologias Utilizadas

- **Backend:** Laravel (PHP)
- **Frontend:** Angular
- **Banco de Dados:** MySQL

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/en/) (v18+)
- [Angular CLI](https://angular.io/cli) (18+)
- [PHP](https://www.php.net/downloads) (8+)
- [Laravel](https://laravel.com/docs/11.x/installation) (11+)
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/)

## Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação de gerenciamento de transações financeiras:

### 1. Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu_usuario/seu_repositorio.git

```Composer
composer install

```.env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nome_do_banco
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha

```Gerar a Chave da Aplicação
php artisan key:generate

``` Rodar a aplicação
php artisan serve

```Angular
npm install

```Iniciar o servidor
ng serve

````Acessar a Aplicação
Backend: http://127.0.0.1:8000
Frontend: http://127.0.0.1:4200

