# Color Palette
## Guideline warna
Opsional, lebih baik "beradaptasi", tapi sebisa mungkin diikuti
- Header
    - Header 1: Gradient/Header 1
        ```scss
        @include gradient-header-1;
        ```
    - Header 2: Gradient/Header 2
        ```scss
        @include gradient-header-2;
        ```
    - Header 3, 4, 5, 6: Medium red
        ```scss
        color: $red-medium;
        ```
- Body: Lighter yellow
```scss
color: $yellow-lighter;
```

# Font
- Vollkorn: general use
```scss
font-family: 'Vollkorn';
```
- Aller: headers
```scss
font-family: 'Aller';
```

# Responsive mixins
- HP: sampai 0px--720px **wajib**
- Tablet: 721px--960px **ga harus ada, dipake kalo dirasa butuh aja**
- Desktop: 961px--1200px **wajib, ga butuh @include-nya**
- Large: ≥1201px **ga harus ada, dipake kalo dirasa butuh aja**
```scss
// HP
@include respond-to('phone') {
  // kode SCSS
}

// Tablet
@include respond-to('tablet') {
  // kode SCSS
}

// Desktop
// Buat desktop harusnya ga perlu include ini sih, tinggal koding SCSS-nya lgsg
@include respond-to('desktop') {
  // kode SCSS
}

@include respond-to('large') {
  // kode SCSS
}
```

## Contoh lainnya
Bisa diliat di [sini](../pages/Form/Form.scss)
