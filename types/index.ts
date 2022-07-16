import { users, notes, credentials, cards, wifi } from "@prisma/client";

export type signUp = Omit<users, 'id'>;
export type signIn = Omit<users, 'id' | 'name'>;

export type setNote = Omit<notes, 'id' | 'userId'>;
export type getNote = notes;

export type setCredential = Omit<credentials, 'id' | 'userId'>;
export type getCredential = credentials;

export type setCard = Omit<cards, 'id' | 'userId'>;
export type getCard = cards;

export type setWifi = Omit<wifi, 'id' | 'userId'>;
export type getWifi = wifi;