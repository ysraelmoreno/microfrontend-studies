import {
  Controller,
  Get,
  Body,
  Post,
  Request,
  UseGuards,
  Delete,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import products, { Product } from 'src/products';

interface ProductItem extends Product {
  quantity: number;
}

interface Cart {
  items: ProductItem[];
}

const initialCart = (indexes: number[]): Cart => ({
  items: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  })),
});

@Controller('cart')
export class CartController {
  private cart: Record<number, Cart> = {
    1: initialCart([1, 2, 4]),
    2: initialCart([1, 3]),
  };

  constructor() {}

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req): Promise<Cart> {
    this.cart[req.user.userId] = { items: [] };

    return this.cart[req.user.userId];
  }

  @Delete(':productId')
  @UseGuards(JwtAuthGuard)
  async delete(
    @Request() req,
    @Param() { productId }: { productId: number },
  ): Promise<Cart> {
    this.cart[req.user.userId].items = this.cart[req.user.userId].items.filter(
      (product) => product.id !== Number(productId),
    );

    return this.cart[req.user.userId];
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async add(
    @Request() req,
    @Body() { productId }: { productId: number },
  ): Promise<Cart> {
    const myProduct = products.find((product) => product.id === productId);

    const hasProduct = this.cart[req.user.userId].items.find(
      (constructor) => constructor.id === productId,
    );

    const indexOfProduct = this.cart[req.user.userId].items.indexOf(hasProduct);

    if (hasProduct) {
      this.cart[req.user.userId].items[indexOfProduct].quantity += 1;

      return this.cart[req.user.userId];
    }

    this.cart[req.user.userId].items = [
      ...this.cart[req.user.userId].items,
      {
        ...myProduct,
        quantity: 1,
      },
    ];

    return this.cart[req.user.userId];
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.cart[req.user.userId] ?? { items: [] };
  }
}
