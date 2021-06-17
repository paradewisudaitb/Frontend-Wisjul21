# important
Semua file SCSS yang butuh font, media query, dan copal bisa import:
```scss
@import '<path/ke/App.scss>';
```
# Color Palette
## Cara pake copal:
## Guideline warna
Opsional, lebih baik "beradaptasi", tapi sebisa mungkin diikuti
- Header
    - Header 1: Gradient/Header 1
        ```scss
        @include gradient-header-1
        ```
    - Header 2: Gradient/Header 2
        ```scss
        @include gradient-header-2
        ```
    - Header 3: Medium red
        ```scss
        $red-medium
        ```
    - Header 4: Medium red
        ```scss
        $red-medium
        ```
- Body: Lighter yellow
```scss
$yellow-lighter
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