import { z, defineCollection } from 'astro:content';

const product = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string().max(50, {
      message: 'Debes conservar el nombre a 50 caracteres o menos',
    }),
    price: z.number(),
    color: z.string().optional(),
    brand: z.string(),
    category: z.enum([
      'Automotive',
      'Home & Garden',
      'Fashion',
      'Electronics',
      'Toys',
    ]),
  }),
});

export const collections = {
  product,
};
