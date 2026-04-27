import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImageService {
    images: Record<string, string> = {
        'IMG_20260414_203206.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260414_203206.webp',
        'IMG_20260415_223423.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260415_223423.webp',
        'IMG_20260415_223821.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260415_223821.webp',
        'IMG_20260415_223832.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260415_223832.webp',
        'IMG_20260415_223929-rotated.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260415_223929-rotated.webp',
        'IMG_20260415_223929.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260415_223929.webp',
        'IMG_20260423_194744.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_194744.webp',
        'IMG_20260423_194838.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_194838.webp',
        'IMG_20260423_195232.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_195232.webp',
        'IMG_20260423_200406.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_200406.webp',
        'IMG_20260423_200508.webp':'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2FIMG_20260423_200508.webp',
        'logo.webp':              'https://storage.googleapis.com/candy-cart.firebasestorage.app/images%2Flogo.webp',
    };
}
