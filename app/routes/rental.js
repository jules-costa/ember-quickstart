// import Route from '@ember/routing/route';

// const COMMUNITY_CATEGORIES = [
//     'Condo',
//     'Townhouse',
//     'Apartment'
// ];

// export default class RentalRoute extends Route {
//     async model(params) {
//         let response = await fetch(`/api/rentals/${params.rental_id}.json`);
//         let { data } = await response.json();

//         let { id, attributes } = data;
//         let type;

//         if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
//             type = 'Community';
//         } else {
//             type = 'Standalone';
//         }

//         return { id, type, ...attributes }; 
//     }
// }

import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = [
    'Condo', 
    'Townhouse',
    'Apartment'
];

export default class RentalModel extends Model {
    @attr title;
    @attr owner;
    @attr city;
    @attr location;
    @attr category;
    @attr image;
    @attr bedrooms;
    @attr description;

    get type() {
        if (COMMUNITY_CATEGORIES.includes(this.category)) {
            return 'Community';
        } else {
            return 'Standalone';
        }
    }
}