// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

/* global chai */
// because this file is imported from cypress/support/index.js
// that means all other spec files will have this assertion plugin
// available to them because the supportFile is bundled and served
// prior to any spec files loading
// import chaiLike from 'chai-like'
// import chaiThings from 'chai-things'

// chai is a global exposed by Cypress which means
// we can just simply extend it
// chai.use(chaiLike)
// chai.use(chaiThings)
// chai.use(require('chai-like'));
// chai.use(require('chai-things')); // Don't swap these two

// Screenshots default
Cypress.Screenshot.defaults({
   screenshotOnRunFailure: false
})

// import '@cypress/code-coverage/support'
