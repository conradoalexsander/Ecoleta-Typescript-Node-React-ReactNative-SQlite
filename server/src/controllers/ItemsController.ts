import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
	async index(request: Request, response: Response) {
		const items = await knex('items').select('*');

		const serializedItems = items.map(item => {
			const { title, image, id } = item;

			return {
				id,
				title,
				image_url: `http://192.168.1.7:3333/uploads/${image}`,
			};
			//expo 192.168.1.8:19000
			// http://localhost:3333/uploads
		});

		return response.json(serializedItems);
	}
}

export default ItemsController;
