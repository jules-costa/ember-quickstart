import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';

import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember quickstart', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Super Rentals!');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('viewing the details of a rental property', async function(assert) {
    await visit('/');
    assert.dom('.rental').exists({ count: 3 });

    await click('.rental:first-of-type a');
    assert.equal(currentURL(), '/rental/grand-old-mansion');
  });

  test('visiting /rental/grand-old-mansion', async function(assert) {
    await visit('/rental/grand-old-mansion');

    assert.equal(currentURL(), '/rental/grand-old-mansion');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('SuperRentals');
    assert.dom('h2').containsText('Grand Old Mansion');
    assert.dom('.rental.detailed').exists();
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('h2').hasText('About Super Rentals');
    
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    
    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/get-in-touch');
  });

  test('visiting /get-in-touch', async function(assert) {
    await visit('/get-in-touch');

    assert.equal(currentURL(), '/get-in-touch');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('navigating using the nav-bar', async function(assert) {
    await visit('/');
    
    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('SuperRentals')
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/get-in-touch');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
