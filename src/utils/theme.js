const theme = {
  colors:{
    white: '#FFFFFF',
    blue: '#185A9D',
    blueLight: '#2E8CE2',
    cyan: '#00ACEE',
    green: '#2EE2AC',
    red: '#EA2662',
    dark: '#101C28',
    darker: '#0C141C',
    light: '#DBEEFF',
  },
  size: {
    smallest: '23.43em', //375px
    smaller: '31.25em', //500px
    small: '37.5em', //600px
    medium: '56.25em', //900px
    large: '80em', //1300px
    larger: '90em', //1300px
    largest: '97em', //1500px
   },
  mediaQueries: {
	  smallest: 'only screen and (min-width: 23.43em)',
    smaller: 'only screen and (min-width: 31.25em)',
	  small: 'only screen and (min-width: 37.5em)',
	  medium: 'only screen and (min-width: 56.25em)',
	  large: 'only screen and (min-width: 80em)',
	  larger: 'only screen and (min-width: 90em)',
	  largest: 'only screen and (min-width: 97em)',
	},
}

export default theme;