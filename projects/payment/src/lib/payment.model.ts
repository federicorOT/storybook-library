export interface Payment {
	ada?: number;
	assets?: Asset[]
}


export interface Asset {
	quantity: number;
	policy: String;
	name: String;
}