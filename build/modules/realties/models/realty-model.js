"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Realty = {
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    beds: {
        type: Number
    },
    bath: {
        type: Number
    },
    suite: {
        type: Number
    },
    address: {
        zip: {
            type: String
        },
        street: {
            type: String
        },
        number: {
            type: String
        },
        city: {
            type: String
        }
    }
};
exports.default = Realty;
