import * as data from "../helpers/default_data.json"

describe('Авторизация', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/'); //войти на сайт
         cy.get('#form > .header').contains('Форма логина'); //проверить, что вижу текст
         cy.get('#form > .header').should('be.visible'); //проверить, что текст виден пользователю
         
         cy.get('#mail').type(data.USER_LOGIN); // ввести верный логин
         cy.get('#pass').type(data.USER_PASSWORD); // ввести верный пароль
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверить, что вижу текст
         cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что есть Крестик и он виден пользователю
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //войти на сайт
        cy.get('#form > .header').contains('Форма логина'); //проверить, что вижу текст
        cy.get('#form > .header').should('be.visible'); //проверить, что текст виден пользователю

        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //войти на сайт
        cy.get('#form > .header').contains('Форма логина'); //проверить, что вижу текст
        cy.get('#form > .header').should('be.visible'); //проверить, что текст виден пользователю

        cy.get('#mail').type(data.USER_LOGIN);
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //войти на сайт
        cy.get('#form > .header').contains('Форма логина'); //проверить, что вижу текст
        cy.get('#form > .header').should('be.visible'); //проверить, что текст виден пользователю
        
        cy.get('#mail').type('german@dolnikov1.ru'); // ввести неверный логин
        cy.get('#pass').type(data.USER_PASSWORD); // ввести верный пароль
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить, что вижу текст
        cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что есть Крестик и он виден пользователю
    })
    it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio/'); //войти на сайт
        cy.get('#form > .header').contains('Форма логина'); //проверить, что вижу текст
        cy.get('#form > .header').should('be.visible'); //проверить, что текст виден пользователю
        
        cy.get('#mail').type('germandolnikov1.ru'); // ввести логин без @
        cy.get('#pass').type(data.USER_PASSWORD); // ввести верный пароль
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверить, что вижу текст
        cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что есть Крестик и он виден пользователю
    })
    it('Строчные буквы в логине и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //войти на сайт
        cy.get('#form > .header').contains('Форма логина'); //проверить, что вижу текст
        cy.get('#form > .header').should('be.visible'); //проверить, что текст виден пользователю
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввести неверный логин
        cy.get('#pass').type(data.USER_PASSWORD); // ввести верный пароль
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверить, что вижу текст
        cy.get('#messageHeader').should('be.visible'); //проверить, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверить, что есть Крестик и он виден пользователю
 })  
})