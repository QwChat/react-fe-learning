/**
 * This file is auto-generated by protobufgen
 * Don't change manually
 */

import webapi from "../webapi";

export interface Empty {

}

export interface Nav {
	name: string;
	image: string;
	url: string;
}

export interface Banner {
	title: string;
	image: string;
	url: string;
}

export interface showcaseResponse {
	navs: Nav[];
	banners: Banner[];
}



export function showcase(payload: Partial<Empty>) {
	return webapi<showcaseResponse>("homepage.Homepage/showcase", payload);
}


export default {
	showcase,
};