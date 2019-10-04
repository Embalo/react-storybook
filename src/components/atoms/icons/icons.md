## To include

1. Include the `.svg` file in `src/icons` folder
2. Import the icon in `src/constants/icons.js` file

## To use
Icons are available in the styled-components theme.

### Using inside css:
```
background-image: url(${props => props.theme.icons['calendar']});
```

### Using inside jsx:
```
import theme from 'constants/theme';

<img src={theme.icons['calendar']} alt="calendar" width="22" />
```