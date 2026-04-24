import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImageService {
    images: string[] = [
        'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_194744.webp',
        'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_194838.webp',
        'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_195232.webp',
        'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_200406.webp',
        'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_200508.webp',
        'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2Flogo.webp',
    ];
}
